function convertArrayOfObjectsToCSV(args) {
  let result, ctr;
  const data = args.data || null;
  if (data === null || !data.length) {
    return null;
  }

  const columnDelimiter = args.columnDelimiter || ",";
  const lineDelimiter = args.lineDelimiter || "\n";

  const keys = Object.keys(data[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach((item) => {
    ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export function downloadCSV(args) {
  let csv = convertArrayOfObjectsToCSV({
    data: args.data,
  });
  console.log("csv:", csv);
  if (csv === null) return;

  const filename = args.filename || "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }
  const data = encodeURI(csv);
  const link = document.createElement("a");
  link.setAttribute("href", data);
  link.setAttribute("download", filename);
  link.click();
}
