import Class from "../../models/train/Class.js";

export const getClass = async (req, res, next) => {
  try {
    const kelas = await Class.findAll();
    res.status(200).json(kelas);
  } catch (err) {
    next(err);
  }
};
