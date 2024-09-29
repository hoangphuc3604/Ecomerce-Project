const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/responses");
const { createToken } = require("../utils/tokenCreator");
const bcrypt = require("bcrypt");

class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");

      if (admin) {
        const match = bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });

          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });

          responseReturn(res, 200, {
            message: "Login successfully",
          });

          console.log("Success");
        } else {
          responseReturn(res, 404, { error: "Wrong password" });
        }
      } else {
        responseReturn(res, 404, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };
}

module.exports = new authControllers();
