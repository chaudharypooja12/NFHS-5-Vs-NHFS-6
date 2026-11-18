export function downloadFile(content: BlobPart, type: string, filename: string) {
  const url = URL.createObjectURL(new Blob([content], {type}));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadCsv(rows: Array<Array<string | number | null | undefined>>, filename: string) {
  const csv = rows.map(row => row.map(value => '"' + String(value ?? '').replaceAll('"', '""') + '"').join(',')).join('\r\n');
  downloadFile('\uFEFF' + csv, 'text/csv;charset=utf-8', filename);
}
