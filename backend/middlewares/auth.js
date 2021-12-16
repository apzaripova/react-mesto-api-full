const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/NotAuthError');

const auth = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie || !cookie.startsWith('jwt=')) {
    throw new NotAuthError('Необходима авторизация');
  }
  const token = cookie.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(token, 'dev-secret-key');
  } catch (err) {
    throw new NotAuthError('Необходима авторизация');
  }
  req.user = payload;

  next();
};

module.exports = auth;
