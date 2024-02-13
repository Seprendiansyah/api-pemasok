require("dotenv").config();

const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { UserRouter } = require("./providers/users/routers");
const {HelloRouter} = require("./modules/hello/routers");
const { BarangRouter } = require("./modules/barang/routers");
const { PemasokRouter } = require("./modules/pemasok/routers");

const app = express();

DatabaseMongoDBConnector({hideSuccessMessage: false});

app.use(express.json());

LibModuleRegister(app, "users", UserRouter);
LibModuleRegister(app, "hello", HelloRouter);
LibModuleRegister(app, "barang", BarangRouter);
LibModuleRegister(app, "pemasok", PemasokRouter);

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
