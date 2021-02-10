const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MayIHelpU:mihu1234@cluster0.0cf0v.mongodb.net/MayIHelpU?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error in connecting with database!!')
);

db.once('open', () => {
  console.log('Successfuly connected to the database!!');
});

module.exports = db;
