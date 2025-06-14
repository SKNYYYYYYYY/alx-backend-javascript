const fs = require('fs');

const http = require('http');

let dbStudents;
function students(filename) {
  if (!fs.existsSync(filename)) {
    return ('Cannot load the database');
    // throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(filename, 'utf-8');
  const lines = data.split('\n').filter((line) => line.trim());
  const keys = lines[0].split(',');
  const values = [];
  for (let i = 1; i < lines.length; i += 1) {
    const details = lines[i].split(',');
    values.push(details);
  }
  dbStudents = values.map((row) => Object.fromEntries(keys.map((key, i) => [key, row[i]])));
  const totalStudents = dbStudents.length;
  const response = [];
  response.push(`Number of students: ${totalStudents}`);

  const fields = {};
  for (let i = 0; i < dbStudents.length; i += 1) {
    const { field } = dbStudents[i];
    fields[field] = (fields[field] || 0) + 1;
  }

  const fieldStudents = (field) => {
    const list = [];
    for (const student of dbStudents) {
      if (student.field === field) {
        list.push(student.firstname);
      }
    }
    return list.join(', ');
  };

  for (const [key, value] of Object.entries(fields)) {
    response.push(`Number of students in ${key}: ${value}. List: ${fieldStudents(key)}`);
  }
  return response;
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filename = process.argv[2];
    const data = students(filename);
    if (typeof (data) === 'string') {
      res.statusCode = 404;
      res.end(data);
    }
    data.unshift('This is the list of our students');
    res.end(data.join('\n'));
  }
}).listen(1245);

module.exports = app;
