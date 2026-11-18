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
