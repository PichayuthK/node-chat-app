
const path = require('path');

var express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));





app.listen(port, () => {
    console.log(`server is running on port 3000 ${port}`);
});

