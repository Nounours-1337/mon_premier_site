const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const assert = require("assert");
const { User, Role } = require("../models");


const userController = {
  index: (req, res) => {
    res.render("register");
  },

  register: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      assert.ok(!(user), `L'utilisateur ${req.body.email} existe déjà`);
      assert.ok(emailValidator.validate(req.body.email), `${req.body.email} n'est pas un email valide.`);
      assert.ok(req.body.password === req.body.passwordConfirm, "Les mots de passes ne correspondent pas");
      const encryptedPwd = await bcrypt.hash(req.body.password, 10);

      const newUser = await User.create({
        ...req.body,
        password: encryptedPwd
      });

      res.render("login", {
        message: `Vous pouvez maintenant vous connecter ! ${newUser}`,
      });
    } catch (error) {
      console.log(error);
      res.render("register", { error: error.message });
    }
  },

  show: async (req, res) => {
    res.render("dashboard/dashboard");
  },
};

module.exports = userController;
