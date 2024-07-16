import mongoose from "mongoose";
import { Currency } from "../helpers/currency";

const dailySchema = new mongoose.Schema(
    {
      day: String,
      revenue: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      expenses: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
    },
    {
      toJSON: { getters: true },
    }
  );
  
  const monthSchema = new mongoose.Schema(
    {
      month: String,
      revenue: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      expenses: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      operationalExpenses: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      nonOperationalExpenses: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
    },
    {
      toJSON: { getters: true },
    }
  );
  
  const kpiSchema = new mongoose.Schema(
    {
      totalProfit: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      totalRevenue: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      totalExpenses: {
        type: Currency,
        get: (v:number) => (v ? v / 100 : 0),
      },
      expenseByCategory: {
        type: Map,
        of: {
          type: Currency,
          get: (v:number) => (v ? v / 100 : 0),
        },
      },
      monthlyData: [monthSchema],
      dailyData: [dailySchema],
    },
    { timestamps: true, toJSON: { getters: true } }
  );
  
  const kpiModel = mongoose.model('KPI', kpiSchema);
  
  export default kpiModel;