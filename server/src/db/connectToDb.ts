import mongoose from "mongoose";
import kpiModel from "../models/kpi";
import { kpis } from "../data";


const connectToDb = async (mongo_url: string, PORT: number, app: any): Promise<void> => {
  try {
    await mongoose.connect(mongo_url);
    app.listen(PORT, () => console.log("Server Running on Port - ", PORT));

    await mongoose.connection.db.dropDatabase();
    kpiModel.insertMany(kpis)
  } catch (e: any) {
    console.error("Error in connectToDb - ", e.message);
  }
};

export default connectToDb;
