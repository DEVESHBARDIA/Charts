// // saveData.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors middleware

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://deveshjain6658:123@cluster0.xctfo56.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'datas' // Replace 'mydatabase' with your actual database name
// });

// const db = mongoose.connection;

// // Check connection
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Check for DB errors
// db.on('error', (err) => {
//   console.error(err);
// });

// // Define a schema
// const DataSchema = mongoose.Schema({
//   series: Number,
//   label: String
// });

// // Create a model
// const Data = mongoose.model('Data', DataSchema);

// // Initialize Express
// const app = express();

// app.use(cors());

// // Middleware
// app.use(bodyParser.json());

// // Route to handle POST request
// app.post('/save-data', (req, res) => {
//     const { series, label } = req.body;
  
//     // Create a new document
//     const newData = new Data({
//       series: series,
//       label: label
//     });
  
//     // Save to MongoDB
//     newData.save()
//       .then(() => {
//         console.log('Data saved successfully');
//         res.status(200).json({ message: 'Data saved successfully' });
//       })
//       .catch((err) => {
//         console.error('Error saving data:', err);
//         res.status(500).json({ error: 'Failed to save data' });
//       });
//   });


// // Route to fetch existing data from the database
// app.get('/fetch-data', (req, res) => {
//     Data.find({}, 'label')
//       .then(data => {
//         const labels = data.map(item => item.label);
//         res.status(200).json(labels);
//       })
//       .catch(err => {
//         console.error('Error fetching data:', err);
//         res.status(500).json({ error: 'Failed to fetch data' });
//       });
//   });

  

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

// Connect to MongoDB
mongoose.connect('mongodb+srv://deveshjain6658:123@cluster0.xctfo56.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'datas' // Replace 'mydatabase' with your actual database name
});

const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.error(err);
});

// Define a schema
const DataSchema = mongoose.Schema({
  series: Number,
  label: String
});

// Create a model
const Data = mongoose.model('Data', DataSchema);

// Initialize Express
const app = express();

app.use(cors()); // Enable CORS

// Middleware
app.use(bodyParser.json());

// Route to handle POST request
app.post('/save-data', (req, res) => {
  const { series, label } = req.body;

  // Create a new document
  const newData = new Data({
    series: series,
    label: label
  });

  // Save to MongoDB
  newData.save()
    .then(() => {
      console.log('Data saved successfully');
      res.status(200).json({ message: 'Data saved successfully' });
    })
    .catch((err) => {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Failed to save data' });
    });
});

// Route to fetch existing data from the database
app.get('/fetch-data', (req, res) => {
    Data.find({}, 'series label')
      .then(data => {
        const series = data.map(item => item.series);
        const labels = data.map(item => item.label);
        res.status(200).json({ series, labels }); // Send both series and labels as JSON response
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Failed to fetch data' });
      });
  });
  
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
