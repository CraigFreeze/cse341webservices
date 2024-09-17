const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require('mongodb');

// ************
async function dbInit() {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tr6nq.mongodb.net/`

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("connection started");

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log("connection ended");
    }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Dabases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}
// ************

module.exports = {
    dbInit
}