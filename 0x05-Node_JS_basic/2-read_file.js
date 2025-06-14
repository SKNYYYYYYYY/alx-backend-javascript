const fs = require('fs');

let students;
const countStudents = (filename) => {
  if (!fs.existsSync(filename)) {
    throw new Error('Cannot load the database');
  }
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim());

    const keys = lines[0].split(',');
    const values = [];
    for (let i = 1; i < lines.length; i += 1) {
      const details = lines[i].split(',');
      values.push(details);
    }
    students = values.map((row) => Object.fromEntries(keys.map((key, i) => [key, row[i]])));
  } catch (err) {
    console.log(err);
  }

  const totalStudents = students.length;
  console.log(`Number of students: ${totalStudents}`);

  const fields = {};
  for (let i = 0; i < students.length; i += 1) {
    const { field } = students[i];
    fields[field] = (fields[field] || 0) + 1;
  }

  const fieldStudents = (field) => {
    const list = [];
    for (const student of students) {
      if (student.field === field) {
        list.push(student.firstname);
      }
    }
    return list.join(', ');
  };

  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value}. List: ${fieldStudents(key)}`);
  }
};

module.exports = countStudents;
