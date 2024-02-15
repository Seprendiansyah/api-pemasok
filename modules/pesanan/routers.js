
const { LibHTTPRouter } = require("../../libs/https");
const {
  PesananControllerList,
  PesananControllerCreate,
  PesananControllerDetail,
  PesananControllerUpdate,
  PesananControllerDelete
} = require("./controllers");
const {
  PesananMiddlewareCreate,
  PesananMiddlewareUpdate,
  PesananMiddlewareList,
  PesananMiddlewareDetail,
  PesananMiddlewareDelete
} = require("./middlewares");

const PesananRouter = LibHTTPRouter();

PesananRouter.get("", PesananMiddlewareList, PesananControllerList);
PesananRouter.post("", PesananMiddlewareCreate, PesananControllerCreate);
PesananRouter.get("/:id", PesananMiddlewareDetail, PesananControllerDetail);
PesananRouter.put("/:id", PesananMiddlewareUpdate, PesananControllerUpdate);
PesananRouter.delete("/:id", PesananMiddlewareDelete, PesananControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PesananRouter } = require("./modules/pesanan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "pesanan", PesananRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PesananRouter,
};  
