const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
  })();

  return User;
}

module.exports = UserModel;