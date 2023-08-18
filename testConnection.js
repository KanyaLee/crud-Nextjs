// testConnection.js
const connectMongoDB = require('./libs/mongodb');

(async () => {
    try {
        await connectMongoDB();
        console.log("Connection test successful.");
    } catch (error) {
        console.error("Connection test failed:", error);
    }
})();
