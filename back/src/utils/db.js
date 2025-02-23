const mongoose = require("mongoose");

const connect = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/chat";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Conectado ao MongoDB");
};

module.exports = { connect };
