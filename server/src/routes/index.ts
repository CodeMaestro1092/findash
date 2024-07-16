import express, { Request, Response } from "express";
import kpiModel from "../models/kpi";

const router = express.Router();
router.get("/kpis", async (req: Request, res: Response) => {
  try {
    const kpis = await kpiModel.find();
    res.status(200).json(kpis)
  } catch (e: any) {
    console.error('Error in kpisController - ', e.message)
    res.status(500).json({ message: "Internal Server Error"})
  }
});


