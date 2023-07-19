const express = require('express')
const app = express()
const db = require('./db')
app.use(express.json());

const cors = require('cors');
const nameRoute = require('./routes/nameRoute');

app.use(cors());
app.get('/', (req, res) => res.send('Server is running!'))
app.use('/api/name/', nameRoute)

const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}!`))
