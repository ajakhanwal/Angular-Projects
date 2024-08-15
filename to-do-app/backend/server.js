const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
 
const app = express();
const PORT = 3042;
const jsonFilePath = path.join(__dirname, 'assets', 'data', 'task.json');
console.log(jsonFilePath);
 
app.use(cors());
app.use(bodyParser.json());
 
app.use(express.static(path.join(__dirname, 'assets')));
 
app.get('/', (req, res) => {
  res.send('Welcome to the JSON Editing Server');
});
 
app.get('/api/data', (req, res) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return res.status(500).send('Error reading file');
    }
    try {
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
      res.status(500).send('Error parsing JSON');
    }
  });
});
 
app.post('/api/data', (req, res) => {
    const newRecord = req.body;
   
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading file');
      }
   
      try {
        const jsonData = JSON.parse(data);
   
        // Generate a unique ID
        const newId = jsonData.init_tasks.length > 0 ? jsonData.init_tasks[jsonData.init_tasks.length - 1].id + 1 : 1;
        newRecord.id = newId;
   
        // Add the new record
        jsonData.init_tasks.push(newRecord);
   
        fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {
          if (err) {
            return res.status(500).send('Error writing file');
          }
          res.send('New record added successfully');
        });
   
      } catch (parseError) {
        return res.status(500).send('Error parsing JSON');
      }
    });
  });
 
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return res.status(500).send('Error reading file');
    }
    try {
      let jsonData = JSON.parse(data);
      const originalLength = jsonData.init_tasks.length;
     
      // Filter out the task with the specified ID
      jsonData.init_tasks = jsonData.init_tasks.filter(task => task.id !== id);
 
      if (jsonData.init_tasks.length === originalLength) {
        console.error(`Task with id ${id} not found`);
        return res.status(404).send('Task not found');
      }
 
      fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {
        if (err) {
          console.error('Error writing file:', err.message);
          return res.status(500).send('Error writing file');
        }
        console.log('Updated file content:', jsonData);
        res.send('Record deleted successfully');
      });
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
      res.status(500).send('Error parsing JSON');
    }
  });
});

app.put('/api/data/:id', (req, res) => {   
    const id = parseInt(req.params.id, 10);   
    const updatedData = req.body;   
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {     
        if (err) {       
            return res.status(500).send('Error reading file');     
        }     try {       
            let jsonData = JSON.parse(data);       
            const recordIndex = jsonData.init_tasks.findIndex(task => task.id === id);       
            if (recordIndex === -1) {        
                 return res.status(404).send('Record not found');      
            }       // Update the record      
            jsonData.init_tasks[recordIndex] = { ...jsonData.init_tasks[recordIndex], ...updatedData };       fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {         
                if (err) {           
                    return res.status(500).send('Error writing file'); 
                } res.send('Record updated successfully'); }); } 
                catch (parseError) { 
                    return res.status(500).send('Error parsing JSON'); 
                } 
        }); 
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 