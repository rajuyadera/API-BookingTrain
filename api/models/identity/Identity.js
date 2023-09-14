import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import Users from "../auth/Users.js";

const { DataTypes } = Sequelize;

const Identity = db.define(
  "identity",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nik: {
      type: DataTypes.BIGINT(16),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.TEXT,
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


Users.hasMany(Identity)
Users.belongsTo(Identity)
Identity.belongsTo(Users,{
  foreignKey: "id_user",
  targetKey: "id"
})

Identity.removeAttribute('userId')


export default Identity;
