import Station from "../../models/station/Station.js";

export const getStation = async (req, res, next) => {
  try {
    const response = await Station.findAll();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

export const getStationById = async (req, res) => {
    try {
        const response = await Station.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(response);
      } catch (err) {
        next(err);
      }
};

export const createStation = async (req, res, next) => {
  const { name, code, city } = req.body;
  try {
    await Station.create({
      name: name.toUpperCase(),
      code: code.toUpperCase(),
      city: city.toUpperCase(),
    });
    return res.status(200).json({ msg: "Station  Added Successfully" });
  } catch (err) {
    next(err);
  }
};

export const updateStation = async (req, res, next) => {
  const station = await Station.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!station) return res.status(404).json({ msg: "Station Not Found!" });

  const { name, code, city } = req.body;
  try {
    await Station.update(
      {
        name: name.toUpperCase(),
        code: code.toUpperCase(),
        city: city.toUpperCase(),
      },
      {
        where: {
          id: station.id,
        },
      }
    );
    return res.status(200).json({ msg: "Station Updated Successfully" });
  } catch (err) {
    next(err);
  }
};

export const deleteStation = async (req, res, next) => {
  const station = await Station.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!station) return res.status(404).json({ msg: "Station Not Found!" });
  try {
    await Station.destroy({
      where: {
        id: station.id,
      },
    });
    return res.status(200).json({msg: "Station Deleted"})
  } catch (err) {
    next(err);
  }
};
