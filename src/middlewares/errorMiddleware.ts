import {ApplicationError} from '../errors/ApplicationError';

export default (err, req, res, next) => {
  const data = {
    message: err.message,
    params: {},
    type: err.name,
  };
  if (err.params) {
    data.params = err.params;
  }
  const isUnknownError = !(err instanceof ApplicationError);
  if (err.log || isUnknownError) {
    // log error to sentry or somewhere
    console.log('Error occured: ', data);
  }
  return res.status(err.status || 500).json({
    // another option is to check some environment variable => if production then dont return message
    message: isUnknownError ? 'Unexpected system error!' : err.message,
    type: err.name,
  });
};
