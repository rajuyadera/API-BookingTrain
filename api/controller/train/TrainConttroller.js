import Train from "../../models/train/Train.js";

export const getTrain = async (req, res, next) => {
  try {
    const train = await Train.findAll();
    res.status(200).json(train);
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
    res.status(200).json(train);
  } catch (err) {
    next(err);
  }
};

export const createTrain = async (req, res, next) => {
  const { id_class, code, name, carriage, seat } = req.body;

  try {
    await Train.create({
        id_class : id_class,
        train_code: code,
        name: name,
        carriage: carriage,
        seat: seat,
    })
    res.status(200).json({msg: 'Train Has Been Created'})
  } catch (err) {
    next(err)
  }
};

export const updateTrain = async (req, res) => {};

export const deleteTrain = async (req, res) => {};
