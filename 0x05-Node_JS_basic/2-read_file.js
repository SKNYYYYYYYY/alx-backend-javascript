const { spawn } = require('node:child_process');

const ls = spawn('ls');

const fs = require('fs');

let students;
function countStudents(filename) {
  ls.stdout.on('data', (data) => {
    const files = data.toString().split('\n');
    if (files.includes(filename)) {
      try {
        let stdout = fs.readFileSync(filename);
        stdout = stdout.toString().split('\n').filter((line) => line.trim());
        const keys = stdout[0].split(',');
        const values = [];
        for (let i = 1; i < stdout.length; i += 1) {
          const details = stdout[i].split(',');
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
      const csNum = fields.CS;
      const sweNum = fields.SWE;

      const fieldStudents = (field) => {
        const list = [];
        for (const student of students) {
          if (student.field === field) {
            list.push(student.firstname);
          }
        }
        return list.join(', ');
      };

      console.log(`Number of students in CS: ${csNum}. List: ${fieldStudents('CS')}`);
      console.log(`Number of students in SWE: ${sweNum}. List: ${fieldStudents('SWE')}`);
    } else {
      throw new Error('Cannot load the database');
    }
  });
}
module.exports = countStudents;
