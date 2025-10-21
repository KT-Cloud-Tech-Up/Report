const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("testdb");
    const collection = db.collection("users");
    const result = await collection.find({}).toArray();
    console.log(result);

    // const result = await collection.insertOne({ name: "John", age: 30 });
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
    console.log("Connected successfully to server");
  } catch (error) {
    console.error("Error connecting to server:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.dir)
  .finally(() => console.log("Connection closed"));
