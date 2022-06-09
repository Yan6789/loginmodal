const mongoose = require("mongoose");

const UserAccountSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserAccountSchema;
