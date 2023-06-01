import Class from "../../models/train/Class.js";

export const getClass = async (req, res, next) => {
  try {
    const kelas = await Class.findAll();
    return res.status(200).json(kelas);
  } catch (err) {
    next(err);
  }
};

export const getClassById = async (req,res,next) => {
  try {
    const kelas = await Class.findOne({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json(kelas)
  } catch (err) {
    next(err)
  }
}

export const createClass = async (req,res, next) => {
  const {className} = req.body
  const kelas = await Class.findOne({
    where: {
      className: className
    }
  })

  if (kelas) return res.status(400).json({message: "Class Is Registered"})

  try {
    await Class.create({
      className: className
    })
    return res.status(200).json({message: "Class Added Successfully"})
  } catch (err) {
    next(err)
  }
}

export const updateClass = async (req,res) => {

}

export const deleteClass = async (req,res,next) => {
  const kelas = await Class.findOne({
    where: {
      id: req.params.id
    }
  })

  if(!kelas) return res.status(404).json({message: "Class Not Found"})

  try {
    await Class.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).json({message: "Class Deleted"})
  } catch (err) {
    next(err)
  }
}