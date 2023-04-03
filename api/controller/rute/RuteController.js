import { Op, Sequelize } from "sequelize";
import Rute from "../../models/rute/Rute.js";
import Station from "../../models/station/Station.js";

export const getRute = async (req, res) => {
  const from = req.query.from || "";
  const to = req.query.to || "";
  try {
    const result = await Rute.findAll({
      include: [
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
        ],
      },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getRuteById = async (req, res) => {
  try {
    const response = await Rute.findOne({
      where: {
        id : req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
