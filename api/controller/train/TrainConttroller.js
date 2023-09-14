import { QueryError, where } from "sequelize";
import Class from "../../models/train/Class.js";
import Train from "../../models/train/Train.js";

export const getTrain = async (req, res, next) => {
  try {
    const train = await Train.findAll({
      include: Class,
      attributes: ["id", "train_code", "name", "carriage", "seat"],
    });
    res.status(200).json({ train: train });
  } catch (err) {
    next(err);
  }
};

export const getTrainById = async (req, res, next) => {
  try {
    const train = await Train.findOne({
      where: {
        id: req.params.id,
      },
    });

    if(!train) return res.status(404).json({message: "Train Not Found"})

    res.status(200).json({train: train});
  } catch (err) {
    next(err);
  }
};

export const createTrain = async (req, res, next) => {
  const { id_class, train_code, name, carriage, seat } = req.body;

  try {
    await Train.create({
      id_class: id_class,
      train_code: train_code,
      name: name,
      carriage: carriage,
      seat: seat,
    });
    res.status(200).json({ msg: "Train Has Been Created" });
  } catch (err) {
    next(err);
  }
};

export const updateTrain = async (req, res, next) => {
  const train = await Train.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!train)
    return res.status(404).json({ message: "Train Not Found" });

  const { id_class, train_code, name, carriage, seat } = req.body;

  try {
    await Train.update(
      {
        id_class: id_class,
        train_code: train_code,
        name: name,
        carriage: carriage,
        seat: seat,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({message: "Train Updated"})
  } catch (err) {
    next(err);
  }
};

export const deleteTrain = async (req, res, next) => {
  const train = await Train.findOne({
    where:{
      id: req.params.id
    }
  })
  if(!train) return res.status(404).json({message: "Train Not Found"})

  try {
    await Train.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({message: "Train Deleted"})
  } catch (err) {
    next(err)
  }
};
