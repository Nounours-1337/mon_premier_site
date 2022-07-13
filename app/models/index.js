const User = require("./User");
const Role = require("./Role");


Role.hasMany(User, {
  foreignKey: "role_id",
  as: "users",
});

User.belongsTo(Role, {
  foreignKey: "role_id",
  as: "role",
});

module.exports = { User, Role };
