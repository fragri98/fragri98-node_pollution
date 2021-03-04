//Define the Sequelize Model. It represents images table in MySQL database.
//id, type, name, address, city, createdAt, updatedAt will be generated automatically.

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    cap: {
      type: DataTypes.INTEGER,
    },
  });
  return Image;
};
