const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://sherpatsewang01:oQ3c3efikFPncZiC@furfind.u2pvo88.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Select the specific database you want to work with
    const database = client.db("funFur"); // Replace with your actual database name

    // Perform database operations here, for example:
    const collection = database.collection("users"); // Replace with your actual collection name

    // Insert a document
    const insertResult = await collection.insertOne({
      name: "Norsang Nyandak",
      age: 30,
      netWorth: "30_millions",
    });

    // console.log("Document inserted with _id:", insertResult.insertedId);

    // Query documents
    // const queryResult = await collection
    //   .find({ name: "Ribeira Charming Duplex" })
    //   .toArray();

    // console.log("Found documents:", queryResult);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

run().catch(console.error);
