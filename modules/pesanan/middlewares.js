
const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");

/**
 * If you want to remove JWT authentication, 
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const PesananMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PesananMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PesananMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [PesananValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [PesananSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.NumberField({ field: "nomor" }),
  LibValidationFields.NumberField({ field: "nomorMeja" }),
  LibValidationFields.CharField({ field: "nama" }),
  // LibValidationFields.NumberField({ field: "total" }),
  LibValidationFields.BooleanField({ field: "isPaid" }),
  LibValidationFields.ArrayField({ field: "item" }),
  LibValidationFields.CharField({ field: "item.*.nama" }),
  LibValidationFields.NumberField({ field: "item.*.qty" }),
  LibValidationFields.NumberField({ field: "item.*.harga" }),
  // LibValidationFields.NumberField({ field: "item.*.subtotal" }),
  LibValidationExceptionMiddleware,
);

const PesananMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.NumberField({ field: "nomor" }),
  LibValidationFields.NumberField({ field: "nomorMeja" }),
  LibValidationFields.CharField({ field: "nama" }),
  // LibValidationFields.NumberField({ field: "total" }),
  LibValidationFields.BooleanField({ field: "isPaid" }),
  LibValidationFields.ArrayField({ field: "item" }),
  LibValidationFields.CharField({ field: "item.*.nama" }),
  LibValidationFields.NumberField({ field: "item.*.qty" }),
  LibValidationFields.NumberField({ field: "item.*.harga" }),
  // LibValidationFields.NumberField({ field: "item.*.subtotal" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const PesananMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PesananMiddlewareCreate,
  PesananMiddlewareUpdate,
  PesananMiddlewareDetail,
  PesananMiddlewareList,
  PesananMiddlewareDelete,
};
  