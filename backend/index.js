const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const mongoURI = process.env.MONGO_URI;
const routes = require('./allApis/allRoutes');
const port = 3001;


routes.forEach((route)=>{
    route.routes.forEach((d)=>{
        app[d.method](route.path + d.path, d.handler);
    })
})




mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err)
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});