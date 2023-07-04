const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

const connectionOptions = {
    // Increase the connection timeout to 30 seconds (30000 milliseconds)
    connectTimeoutMS: 1000 * 60 * 5,
    // Other connection options...
};

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})
mongoose.connection.on('error', (err) => {
    console.error(err, 'it was me');
})
async function mongoConnect() {
    await mongoose.connect(MONGO_URL, connectionOptions);
};
async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}