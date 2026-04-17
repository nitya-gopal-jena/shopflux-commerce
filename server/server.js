const express = require('express');
const connectDB = require('./config/db.js');
const { configDotenv } = require('dotenv');
const cors = require('cors')
const productRoute = require('./routes/productRoutes.js');
configDotenv();


const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())

// Router endpath 
app.use('/api/j1', productRoute);




const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
    connectDB();
});

