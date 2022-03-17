const TEMP_API_KEY = 'sw19eucJv21XqzCds39L';

module.exports.ws_api_auth = (req, res, next) => {
  try {
    if (req.header('temp_api_key') === TEMP_API_KEY) {
      next();
    } else {
      throw 'Unauthenticated';
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
