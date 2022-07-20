import Sweaters from "../../../models/Sweaters";
import { dbConnect } from "../../../utils/mongoose";

dbConnect();

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await Sweaters.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        console.log("console pase por aca");
        console.log("console req.body", req.body);
        req.body.image = [req.body.image1, req.body.image2];
        const newTask = new Sweaters(req.body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}

export default handler;
