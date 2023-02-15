const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const { INTEGER, STRING } = DataTypes;

const Client = sequelize.define("Client", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  phone: { type: STRING, allowNull: false },
});

const Menu = sequelize.define("Menu", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: STRING, allowNull: false },
  altimg: { type: STRING, allowNull: false },
  title: { type: STRING, allowNull: false },
  descr: { type: STRING, allowNull: false },
  price: { type: INTEGER, allowNull: false },
});

const Slide = sequelize.define("Slide", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: STRING, allowNull: false },
  altimg: { type: STRING, allowNull: false },
});

module.exports = { Client, Menu, Slide };
