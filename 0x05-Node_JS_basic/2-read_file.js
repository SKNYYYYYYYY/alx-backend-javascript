const fs = require('fs');

const countStudents = (filename) => {
  if (!fs.existsSync(filename)) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim());

    const keys = lines[0].split(',');
    const values = lines.slice(1).map((line) => line.split(','));

    const students = values.map((row) => Object.fromEntries(keys.map((key, i) => [key.trim(),
      row[i].trim()])));

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const { field } = student;
      fields[field] = (fields[field] || 0) + 1;
    }

    for (const [field, count] of Object.entries(fields)) {
      const names = students.filter((s) => s.field === field).map((s) => s.firstname).join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
