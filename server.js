const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('frontend/build'));
app.get('*', (req, res) => {
    // const myPath = path.resolve(__dirname, 'frontend', 'build', 'index.html')
    // console.log('__dirname: ', __dirname);
    // console.log('My Path: ', myPath);
    // return res.sendFile(myPath);
    return res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));