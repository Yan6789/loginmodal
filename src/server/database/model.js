const mongoose = require("mongoose");
const UserAccountSchema = require("./schema");

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

module.exports = UserAccount;
