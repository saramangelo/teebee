const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserBlog extends Model {}

UserBlog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      blog_id:{
          type: DataTypes.INTEGER,
          references:{
              model:"blog",
              key:"id",
          },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'userblog',
    }
  );
  
  module.exports = UserBlog;