
const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");
const { BarangHargaJualValidator } = require("./validators");

/**
 * If you want to remove JWT authentication, 
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const BarangMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const BarangMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const BarangMiddlewareCreate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */

  /**
   * "LibValidationExceptionMiddleware" is suitable for validating data sent by the client in body. 
   * If you have your own handler, you can replace it.
   * 
   * For example:
   *  ...
   *  LibValidationFields.CharField({ field: "field1" }),
   *  LibValidationFields.CharField({ field: "field2" }),
   *  LibValidationFields.CharField({
   *    field: "field3",
   *    customs: [BarangValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [BarangSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "hargaJual", required: false, minLength: 0, customs: [BarangHargaJualValidator]}),
  LibValidationFields.NumberField({ field: "hargaBeli", required: false, minLength: 0 }),
  LibValidationFields.NumberField({ field: "stok", required: false, minLength: 0 }),
  LibValidationExceptionMiddleware,
);

const BarangMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "hargaJual", required: false, minLength: 0, customs: [BarangHargaJualValidator]}),
  LibValidationFields.NumberField({ field: "hargaBeli", required: false, minLength: 0 }),
  LibValidationFields.NumberField({ field: "stok", required: false, minLength: 0 }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const BarangMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  BarangMiddlewareCreate,
  BarangMiddlewareUpdate,
  BarangMiddlewareDetail,
  BarangMiddlewareList,
  BarangMiddlewareDelete,
};
  