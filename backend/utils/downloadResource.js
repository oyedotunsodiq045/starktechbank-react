// tutorial: https://dev.to/davidokonji/generating-and-downloading-csv-files-using-express-js-1o4i
import { Parser } from 'json2csv'

const downloadResource = (res, fileName, fields, data) => {
  const json2csv = new Parser({ fields });
  const csv = json2csv.parse(data);
  res.header('Content-Type', 'text/csv');
  res.attachment(fileName);
  return res.send(csv);
}

export default downloadResource;