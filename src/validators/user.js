const joi = require("joi");
const ObjectId = require("mongoose").Types.ObjectId;
const { errorMessage } = require("../config/options");
const validateUser = async (req, res, next) => {
  try {
    const userSchema = joi.object({
      email: joi.string().email().required(),
      name: joi.string().required(),
      age: joi.number().integer().min(0).required(),
      city: joi.string().required(),
      zipCode: joi.string().required(),
    });
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send({ status: false, message: error.details[0].message });
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, message: errorMessage.SERVER_ERROR });
  }
};

module.exports = { validateUser };
