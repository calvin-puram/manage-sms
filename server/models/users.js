/* eslint-disable no-unused-vars */

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Message, {
        onDelete: 'CASCADE',
        foreignKey: 'senderId',
      });
      Users.hasMany(models.Message, {
        onDelete: 'CASCADE',
        foreignKey: 'recieverId',
      });
    }
  }
  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
