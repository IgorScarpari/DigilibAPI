
module.exports = function (app) {
    app.use("/books", require("./bookRoute"));
    /*   app.use("/users", require("./user"));
      app.use("/reserves", require("./reserve")); */
};