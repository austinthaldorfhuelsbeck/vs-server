import dotenv from "dotenv";
import { app } from "./app";
import { connect } from "./db/connection";

dotenv.config();

const { PORT, MONGODB_URI } = process.env;

if (!PORT || !MONGODB_URI) {
  throw new Error("Missing required environment variables.");
}

app.listen(PORT, () => {
  connect(MONGODB_URI);
  console.log(`Listening on port ${PORT}`);
});
