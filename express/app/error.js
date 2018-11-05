const env = process.env.NODE_ENV || 'development';

function errorHandler(err, req, res, next) {
  res.statusCode = 500;
  switch (env) {
    case 'development':
      console.log('Error:');
      console.log(err);
      res.setHeader('Content-type', 'application/json');
      res.end(JSON.stringify(err));
      break;
    default:
      res.end('Server error');
  }
}

module.exports = errorHandler;