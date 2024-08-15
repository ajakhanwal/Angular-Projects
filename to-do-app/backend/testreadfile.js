const fs = require('fs');
const path = require('path');
 
const jsonFilePath = path.join(__dirname, 'assets', 'data', 'task.json');
 
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    console.error('Stack trace:', err.stack);
  } else {
    console.log('File content:', data);
  }
});