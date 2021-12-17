'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, {foreignKey: "UserId"})
      Task.belongsTo(models.Category, {foreignKey: "CategoryId"})
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Title is required'},
        notNull: {msg: 'Title is required'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Description is required'},
        notNull: {msg: 'Description is required'}
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'imgUrl is required'},
        notNull: {msg: 'imgUrl is required'}
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Category ID is required'},
        notNull: {msg: 'Category ID is required'}
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'User ID is required'},
        notNull: {msg: 'User ID is required'}
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};