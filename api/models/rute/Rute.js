import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import Station from "../station/Station.js"
import Train from "../train/Train.js"

const { DataTypes } = Sequelize;

const Rute = db.define(
  "rute",
  {
    deppart_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    arrive_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    deppart_time: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    arrive_time: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_station_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_station_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);


Station.hasMany(Rute)
Rute.belongsTo(Station, {
  as: 'from',
  foreignKey: 'id_station_from',
  targetKey: "id"
})
Rute.belongsTo(Station, {
  as: 'to',
  foreignKey: 'id_station_to',
  targetKey: "id"
})

Train.hasMany(Rute)
Rute.belongsTo(Train, {
  foreignKey: "trainId"
})

Rute.removeAttribute('stationId')

export default Rute;
