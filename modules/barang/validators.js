
/**
 * These naming rules follow the following pattern:
 * 
 *  BarangValidator<YourValidationPurpose>
 * 
 * For example:
 *  const BarangValidationEmailExist = (value, { req }) => {}
 **/

const BarangValidator = (value, { req }) => {
  // Your validation here
  return value;
};

const BarangHargaJualValidator = (value, { req }) => {
  if (value < req.body.hargaBeli) {
    throw new Error("Harga jual harus lebih besar daripada harga beli");
  }
  return value;
}

module.exports = {
  BarangValidator,
  BarangHargaJualValidator
};
