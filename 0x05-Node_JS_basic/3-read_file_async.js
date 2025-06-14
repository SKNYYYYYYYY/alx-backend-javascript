const fs = require('fs');

function countStudents(filename) {
  return new Promise((resolve) => {
    if (!fs.existsSync(filename)) {
      throw new Error('Cannot load the database');
    }
    try {
      fs.readFile(filename, (err, data) => {
        if (err) {
          return console.error(err);
        }
        const stdout = data.toString().split('\n').filter((line) => line.trim());
        const keys = stdout[0].split(',');
        const values = [];
        for (let i = 1; i < stdout.length; i += 1) {
          const details = stdout[i].split(',');
          values.push(details);
        }
        const students = values.map((row) => Object.fromEntries(keys.map((K, i) => [K, row[i]])));

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
        return resolve();
      });
    } catch (err) {
      throw new Error('Cannot load the database');
    }
  });
}
module.exports = countStudents;
