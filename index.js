const express = require('express');
const app = express();
const Router = express.Router()
require('dotenv').config();
const routers = require('./routes')
app.use('/api', routers)
app.listen(process.env.PORT, () => {
    console.log("server is running on port", process.env.PORT);  
})
