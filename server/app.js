const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.use('/', express.static(path.join(__dirname, 'public')))


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public'));
// });
app.listen(3000, () => {
  console.log('Server is officially running');
})
