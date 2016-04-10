import express from 'express'
import cluster from 'cluster'
import config from './config/index'
import path from 'path'


const app = express();
app.use(express.static(path.join(__dirname, '../public')));


app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

config.application.ports.map(port => app.listen(port))