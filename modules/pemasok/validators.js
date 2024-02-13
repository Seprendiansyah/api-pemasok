
/**
 * These naming rules follow the following pattern:
 * 
 *  PemasokValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PemasokValidationEmailExist = (value, { req }) => {}
 **/

const PemasokValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PemasokValidator,
};
