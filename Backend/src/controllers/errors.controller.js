export const notFound = (req, res) =>
  res.status(404).json({ status: false, code: 404, message: 'Page not found.' })
