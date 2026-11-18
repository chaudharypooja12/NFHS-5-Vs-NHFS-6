import {Workbook} from 'exceljs';
import {downloadFile} from './download';
import {type Dataset, type Indicator} from './model';
import {observationStatus, stateValues} from './state-fact-sheet';

export async function downloadStateWorkbook(places: {name: string; data?: Dataset}[], indicators: Indicator[]) {
  const workbook = new Workbook();
  workbook.creator = 'NFHS India';
  for (const item of indicators) {
    const sheet = workbook.addWorksheet(item.six ? 'NFHS-6 ' + item.six : 'NFHS-5 ' + item.five, {views: [{state: 'frozen', ySplit: 3}]});
    sheet.columns = [{width: 38}, {width: 18}, {width: 18}];
    sheet.mergeCells('A1:C2');
    const title = sheet.getCell('A1');
    title.value = item.category + ' · ' + item.name;
    title.font = {bold: true, size: 12};
    title.alignment = {wrapText: true, vertical: 'middle'};
    sheet.getRow(1).height = 24;
    sheet.getRow(2).height = 24;
    const header = sheet.addRow(['State', 'NFHS-6', 'NFHS-5']);
    header.font = {bold: true, color: {argb: 'FFFFFFFF'}};
    header.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF393991'}};
    sheet.autoFilter = 'A3:C' + (3 + places.length);
    for (const {name, data} of places) {
      const {five, six, historical} = stateValues(data, item);
      const row = sheet.addRow([name, six?.value ?? null, five?.value ?? null]);
      for (const [index, observation] of [six, five].entries()) {
        const cell = row.getCell(index + 2);
        cell.numFmt = item.unit === '%' ? '0.0##"%"' : '0.###';
        cell.note = observationStatus(observation, index === 1 && historical);
      }
    }
  }
  const buffer = await workbook.xlsx.writeBuffer();
  downloadFile(new Uint8Array(buffer), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'nfhs-state-comparison.xlsx');
}

export async function downloadFactSheetWorkbook(data: Dataset) {
  const {factSheetRows} = await import('./state-fact-sheet');
  const workbook = new Workbook();
  workbook.creator = 'NFHS India';
  const sheet = workbook.addWorksheet('State Fact Sheet', {views: [{state: 'frozen', ySplit: 1}]});
  sheet.columns = [{width: 90}, {width: 18}, {width: 18}, {width: 20}];
  const header = sheet.addRow(['Indicator', 'NFHS-6', 'NFHS-5', '% Change']);
  header.font = {bold: true, color: {argb: 'FFFFFFFF'}};
  header.fill = {type: 'pattern', pattern: 'solid', fgColor: {argb: 'FF393991'}};
  for (const {indicator, six, five, change} of factSheetRows(data)) {
    const row = sheet.addRow([indicator.name, six?.value ?? null, five?.value ?? null, change ?? null]);
    row.alignment = {wrapText: true, vertical: 'top'};
    for (const index of [2, 3]) row.getCell(index).numFmt = indicator.unit === '%' ? '0.0##"%"' : '0.###';
    row.getCell(4).numFmt = indicator.unit === '%' ? '0.0##" pp"' : '0.###';
    row.getCell(4).note = 'Validated NFHS-6 minus NFHS-5 change. Percentage indicators use percentage points. Missing or unvalidated changes are blank.';
  }
  sheet.autoFilter = 'A1:D' + sheet.rowCount;
  const buffer = await workbook.xlsx.writeBuffer();
  downloadFile(new Uint8Array(buffer), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'nfhs-' + data.slug + '-fact-sheet.xlsx');
}
