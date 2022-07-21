import Dresses from "../../../models/Dresses";
import { dbConnect } from "../../../utils/mongoose";

dbConnect();

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await Dresses.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        req.body.image = [];
        req.body.algo = [
          req.body.image1,
          req.body.image2,
          req.body.image3,
          req.body.image4,
          req.body.image5,
          req.body.image6,
          req.body.image7,
          req.body.image8,
        ];
        console.log("console req", req.body);

        for (let i = 0; i < req.body.algo.length; i++) {
          console.log("console entre");
          if (req.body.algo[i] !== "") {
            req.body.image.push(req.body.algo[i]);
            console.log("console req.body.image", req.body.image);
          } else {
            return;
          }
        }
        console.log("console re", req.body);

        const newTask = new Dresses(req.body);
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
