import { Op } from "sequelize";
import Rute from "../../models/rute/Rute.js";
import Station from "../../models/station/Station.js";
import Train from "../../models/train/Train.js";

export const searchRute = async (req, res, next) => {
  const from = req.query.from;
  const to = req.query.to;
  const date = req.query.deppart_at;
  try {
    const result = await Rute.findAll({
      include: [
        {
          model: Train,
        },
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
      where: {
        [Op.and]: [
          { id_station_from: { [Op.like]: `%${from}%` } },
          { id_station_to: { [Op.like]: `%${to}%` } },
          { deppart_at: { [Op.like]: `%${date}%` } },
        ],
      },
      attributes: [
        "id",
        "deppart_at",
        "arrive_at",
        "deppart_time",
        "arrive_time",
        "price",
      ],
    });

    res.status(200).json({ rute: result });
  } catch (err) {
    next(err);
  }
};

export const getRuteById = async (req, res, next) => {
  try {
    const response = await Rute.findOne({
      include: [
        {
          model: Train,
        },
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "deppart_at",
        "arrive_at",
        "deppart_time",
        "arrive_time",
        "price",
      ],
    });
    if (!response)
      return res.status(404).json({ message: "Rute Tidak Ditemukan" });
    res.status(200).json({ rute: response });
  } catch (err) {
    next(err);
  }
};

export const createRute = async (req, res, next) => {
  const {
    deppart_at,
    arrive_at,
    deppart_time,
    arrive_time,
    train,
    from,
    to,
    price,
  } = req.body;

  const rute = await Rute.findOne({
    where: {
      deppart_time: deppart_time,
      id_station_from: from,
      trainId: train,
    },
  });

  if (rute) return res.status(400).json({ message: "Rute Sudah Terdaftar" });

  const searchTrain = await Train.findOne({
    where: {
      id: train,
    },
  });

  if (!searchTrain)
    return res.status(404).json({ message: "Kereta Tidak Terdaftar" });

  try {
    await Rute.create({
      deppart_at: deppart_at,
      deppart_time: deppart_time,
      arrive_at: arrive_at,
      arrive_time: arrive_time,
      trainId: train,
      id_station_from: from,
      id_station_to: to,
      price: price,
    });

    res.status(200).json({ message: "Rute Berhasil Dibuat" });
  } catch (err) {
    next(err);
  }
};

export const updateRute = async (req, res, next) => {
  const rute = await Rute.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!rute) return res.status(404).json({ message: "Rute Tidak Ditemukan" });

  const {
    deppart_at,
    arrive_at,
    deppart_time,
    arrive_time,
    train,
    from,
    to,
    price,
  } = req.body;

  try {
    await Rute.update(
      {
        deppart_at: deppart_at,
        arrive_at: arrive_at,
        deppart_time: deppart_time,
        arrive_time: arrive_time,
        id_station_from: from,
        id_station_to: to,
        price: price,
        trainId: train,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({ message: "Rute Berhasil Di Update" });
  } catch (err) {
    next(err);
  }
};

export const deleteRute = async (req, res) => {
  const rute = await Rute.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!rute) return res.status(404).json({ message: "Rute Tidak Ditemukan" });

  try {
    await Rute.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Rute Berhasil Dihapus" });
  } catch (err) {
    next(err);
  }
};
