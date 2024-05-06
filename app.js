const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const routes = require('./routes/route');

const sequelize = require('./util/database')

app.use(bodyParser.json())

app.use(routes)

sequelize.sync()
.then(res => {})
.catch(err => console.log(err))

app.listen(3002, () => console.log('Listening to port 3002'))



