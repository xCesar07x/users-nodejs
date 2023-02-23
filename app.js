const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes')


const app = express();

const port = 8100;

const requestTime = (req, res, next) => {
    const date = Date.now()
    req.timeday = date;
    next();
}

app.use(requestTime);
app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});
