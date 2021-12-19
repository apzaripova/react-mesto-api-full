const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/NotAuthError');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new NotAuthError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new NotAuthError('Необходима авторизация');
  }
  req.user = payload;

  next();
};

module.exports = auth;
