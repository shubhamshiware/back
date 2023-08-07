const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
const productRoute = require("./routes/product");
const htmlRoute = require("./routes/html");
const rootRouter = require("./routes/root");
const curdRoute = require("./routes/curd");
const restRoute = require("./routes/curd_rest");
app.use(express.json());
const path = require("path");
const { engine } = require("express-handlebars");
const templateRoute = require("./routes/template");
const { log } = require("./middlewares/middleware");
const authRoutes = require("./routes/authRoutes");
const fileUploadRoutes = require("./routes/fielUploadRoutes");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("viewa", "./views");
app.use(express.static("uploads"));

app.use("/auth", authRoutes);
app.use(log);
app.use(express.urlencoded({ extended: true }));
app.use("/html", htmlRoute);
app.use("/curd", curdRoute);
app.use("/rest", restRoute);
app.use("/products", productRoute);
app.use("/", rootRouter);
app.use("/templates", templateRoute);
app.use("/file", fileUploadRoutes);

const mongoUri =
  "mongodb+srv://dipanshuraghuwanshi:5Fma3u7M7zJPYWT@cluster0.luqz6xt.mongodb.net/practice?retryWrites=true&w=majority";

const dbConnect = () => {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

dbConnect()
  .then((data) => {
    app.listen("8080", () => {
      console.log("express server started with mongo");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://dipanshuraghuwanshi:5Fma3u7M7zJPYWT@cluster0.luqz6xt.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
