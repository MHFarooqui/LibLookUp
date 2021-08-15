const mongoose = require('mongoose');

const connectionString = process.env.CONN_STRING;
mongoose.connect(connectionString);
mongoose.connection.once('open', () => {
    console.log('connected to DB 👌');
});


module.exports = {
    mongoose
}