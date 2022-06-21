import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/CreateAndRead", (err, mongoConnection) => {
  if(err) throw new Error('Mongoose Connection!!, Error: ' + err);
  if(!process.env.NODE_ENV) {
    const { port, host, name } = mongoConnection;
    console.log({port, host, name});
  }
});
