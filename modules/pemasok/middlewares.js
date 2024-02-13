
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

const PemasokMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PemasokMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PemasokMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [PemasokValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [PemasokSanitizerField4ToHash],
   *  }),
   *  ...
   */
  LibValidationFields.CharField({ field: "namaPemasok" }),
  LibValidationFields.CharField({ field: "emailPemasok" }),
  LibValidationFields.CharField({ field: "teleponPemasok" }),
  LibValidationFields.CharField({ field: "alamat" }),
  LibValidationExceptionMiddleware,
);

const PemasokMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "namaPemasok" }),
  LibValidationFields.CharField({ field: "emailPemasok" }),
  LibValidationFields.CharField({ field: "teleponPemasok" }),
  LibValidationFields.CharField({ field: "alamat" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const PemasokMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PemasokMiddlewareCreate,
  PemasokMiddlewareUpdate,
  PemasokMiddlewareDetail,
  PemasokMiddlewareList,
  PemasokMiddlewareDelete,
};
  