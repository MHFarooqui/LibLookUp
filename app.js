const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');

// import and configure .env
require('dotenv').config();

// configure db connection
const db = require('./db/db-config');

const app = express();

// API
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT_NUMB || 4000, () => {
    console.log('listening to port 4000 👨‍💻');
});