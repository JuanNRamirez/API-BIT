const mongoose = require('mongoose');
const app = require('./app.js');
const port = 3000;
const URI = 'mongodb://localhost:27017/edubit';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log(`Error found: ${error}`);
    } else {
        console.log('Connected Successfully');
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    }
});
