const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const goalsRoutes = require('./routes/goalsRoutes');
const customErrorHandler = require('./middlewares/customErrorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', userRoutes);
app.use('/api/goals', goalsRoutes);


app.get('/', (req, res) => {
	res.send('API root');
});

app.use((req, res) => {
	res.status(404).send('Page not found')
});

app.use(customErrorHandler);

module.exports = app;


