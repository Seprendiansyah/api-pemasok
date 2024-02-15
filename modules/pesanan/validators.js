
/**
 * These naming rules follow the following pattern:
 * 
 *  PesananValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PesananValidationEmailExist = (value, { req }) => {}
 **/

const PesananValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PesananValidator,
};
