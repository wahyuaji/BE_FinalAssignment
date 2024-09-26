'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};