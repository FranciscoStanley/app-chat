import { connect as _connect } from "mongoose";

const connect = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/chat";
  await _connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Conectado ao MongoDB");
};

export default { connect };
