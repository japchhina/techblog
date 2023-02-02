 const Sequelize = require('sequelize');
 require ('sequelize').config();
 const sequelize = process.env.JAWSDB_URL;
    module.exports = new Sequelize(sequelize);
new Sequelize(process.env.JAWSDB_URL);
new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
