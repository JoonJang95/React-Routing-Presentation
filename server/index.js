const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// PART 1

// ****important for front-end routing****
app.use(express.static(path.join(__dirname, '../public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// *****************************************

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});
