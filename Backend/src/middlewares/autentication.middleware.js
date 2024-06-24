import { jwtVerify } from '../utils/jwt.js'

export const authToken = (req, res, next) => {
  const authorization = req.header('Authorization')

  if (authorization === undefined) {
    return res.status(401).json({ status: false, code: 401, message: 'Missing Token' })
  }

  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    return res.status(401).json({ status: false, code: 401, message: 'Invalid Format Token' })
  }

  try {
    const decoded = jwtVerify(token)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ status: false, code: 401, message: 'Invalid Token' })
  }
}
