// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// //.env
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// // models
// const UserModel = require('./models/User');
// const FavoriteModel = require('./models/Favorite');

// const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    { logging: false, native: false }
// );

// UserModel(sequelize);
// FavoriteModel(sequelize);

// const { User, Favorite } = sequelize.models;

// User.hasMany(Favorite);
// Favorite.belongsTo(User);

// module.exports = {
//    User,
//    Favorite,
//    conn: sequelize,
// };
