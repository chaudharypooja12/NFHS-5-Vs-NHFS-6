import {jsPDF} from 'jspdf';
import {autoTable} from 'jspdf-autotable';
import {changeText, format, sources, type Dataset, type Observation} from './model';
import {coverageNote, factSheetRows, manipurNotice, rowSources, sampleLabels, stateSample, surveyNotes} from './state-fact-sheet';
import {contextColor, highlightColor, loadStateMap, mapName, mapPath} from './state-map';

const blue = '#393991';
const margin = 14;
const width = 182;
const pdfText = (text: string) => text.replaceAll('≥', '>=').replaceAll('¹⁵', ' [15]');

async function mapImage(state: string) {
  const map = await loadStateMap();
  const path = mapPath(map);
  const canvas = document.createElement('canvas');
  canvas.width = 1000;
  canvas.height = 756;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Map canvas unavailable');
  context.scale(2, 2);
  for (const feature of map.features) {
    const boundary = new Path2D(path(feature) ?? '');
    context.fillStyle = mapName(feature) === state ? highlightColor : contextColor;
    context.fill(boundary);
    context.strokeStyle = 'white';
    context.lineWidth = 0.8;
    context.stroke(boundary);
  }
  return canvas.toDataURL('image/png');
}

function estimate(observation: Observation | undefined, unit: string, historical = false) {
  const value = observation?.value == null ? 'Unavailable' : format(observation.value, unit);
  const flag = observation?.flag === 'small sample' || observation?.flag === 'suppressed' ? '\n' + observation.flag : '';
  return value + flag + (historical ? '\nHistorical total' : '');
}

export async function downloadStatePdf(data: Dataset) {
  const image = await mapImage(data.name);
  const doc = new jsPDF({orientation: 'portrait', format: 'a4', unit: 'mm', compress: true});
  doc.setProperties({title: data.name + ' State Fact Sheet', author: 'NFHS India'});
  doc.setFillColor(blue);
  doc.rect(0, 0, 210, 65, 'F');
  doc.setTextColor('#ffffff');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('NFHS INDIA  |  NATIONAL FAMILY HEALTH SURVEY', margin, 21);
  doc.setFontSize(30);
  doc.text(data.name, margin, 42);
  doc.setFontSize(12);
  doc.text('STATE FACT SHEET', margin, 54);
  doc.addImage(image, 'PNG', 24, 72, 162, 122.5);
  doc.setTextColor('#242442');
  doc.setFontSize(10);
  doc.text(data.name + ' highlighted  |  Boundaries: geoBoundaries IND ADM1', 105, 198, {align: 'center'});
  doc.setFontSize(15);
  doc.text('NFHS-6 sample sizes', margin, 214);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const sample = stateSample(data.slug);
  sampleLabels.forEach((label, index) => doc.text(label + ': ' + (sample?.counts[index].toLocaleString('en-IN') ?? 'unavailable'), margin + index * 60, 224));
  if (sample) doc.textWithLink('NFHS-6 Appendix 2 | PDF page ' + sample.page, margin, 236, {url: sample.source});
  else doc.text(data.slug === 'manipur' ? manipurNotice : 'Sample sizes unavailable.', margin, 236, {maxWidth: width});
  doc.text('NFHS-6 (2023–24) and NFHS-5 (2019–21)  |  State totals', margin, 259);

  doc.addPage();
  const body: Parameters<typeof autoTable>[1]['body'] = [];
  let category = '';
  for (const row of factSheetRows(data)) {
    const {indicator, six, five, change, historical} = row;
    const group = (indicator.six ? 'NFHS-6' : 'NFHS-5 reference') + ' | ' + indicator.category;
    if (group !== category) {
      body.push([{content: group, colSpan: 4, styles: {fillColor: '#edeeff', fontStyle: 'bold'}}]);
      category = group;
    }
    const refs = rowSources(row).map(source => source.label + (source.page ? ' PDF p. ' + source.page : ' fact sheet') + ', row ' + source.number).join(' | ');
    const description = [String(indicator.six ?? indicator.five) + '. ' + pdfText(indicator.name), refs].filter(Boolean).join('\n');
    body.push([description, estimate(six, indicator.unit), estimate(five, indicator.unit, historical), changeText(change, indicator.unit)]);
  }
  autoTable(doc, {
    startY: 25,
    margin: {top: 25, bottom: 18, left: margin, right: margin},
    head: [['Indicator', 'NFHS-6', 'NFHS-5', 'Change']],
    body,
    showHead: 'everyPage',
    rowPageBreak: 'avoid',
    styles: {fontSize: 8.5, cellPadding: 2, overflow: 'linebreak', valign: 'top', textColor: '#242442'},
    headStyles: {fillColor: blue, textColor: '#ffffff'},
    columnStyles: {0: {cellWidth: 101}, 1: {cellWidth: 27}, 2: {cellWidth: 28}, 3: {cellWidth: 26}},
    willDrawPage: () => {
      doc.setFontSize(10);
      doc.setTextColor(blue);
      doc.text(data.name + '  |  STATE FACT SHEET', margin, 16);
    },
  });

  const tableEnd = (doc as jsPDF & {lastAutoTable: {finalY: number}}).lastAutoTable.finalY;
  let y = tableEnd + 14;
  if (y > 226) {
    doc.addPage();
    y = 18;
  }
  function paragraph(content: string, heading = false, url?: string) {
    doc.setFont('helvetica', heading ? 'bold' : 'normal');
    doc.setFontSize(heading ? 14 : 10);
    doc.setTextColor(url ? blue : '#242442');
    const lines: string[] = doc.splitTextToSize(content, width);
    const lineHeight = heading ? 7 : 5;
    if (y + lines.length * lineHeight > 274) {doc.addPage(); y = 18;}
    lines.forEach((line, index) => {
      if (url) doc.textWithLink(line, margin, y + index * lineHeight, {url});
      else doc.text(line, margin, y + index * lineHeight);
    });
    y += lines.length * lineHeight + 3;
  }
  paragraph('Indicator notes and sources', true);
  paragraph(coverageNote);
  paragraph('Small sample indicates a parenthesized estimate. Suppressed results have no published numeric value. Changes between percentages use percentage points (pp).');
  for (const [number, note] of surveyNotes) paragraph(number + '. ' + note);
  paragraph('Official source documents', true);
  paragraph('NFHS-6 State fact sheets (Ministry of Health and Family Welfare)', false, sources['6']);
  paragraph('NFHS-6 State fact sheets (International Institute for Population Sciences)', false, sources['6-IIPS']);
  paragraph('NFHS-5 Phase I State fact sheets', false, sources['5-I']);
  paragraph('NFHS-5 Phase II State fact sheets', false, sources['5-II']);
  paragraph('Map boundaries: DataMeet India and Election Commission of India, via geoBoundaries (CC BY 2.5 IN).');
  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    doc.setPage(page);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor('#54546c');
    doc.text('NFHS India', margin, 286);
    doc.text(page + ' / ' + pages, 196, 286, {align: 'right'});
  }
  doc.save('nfhs-' + data.slug + '-fact-sheet.pdf');
}
