export function errorHandler(err, req, res, next) {
  console.error(err);

  if (res.headersSent) {
    next(err);
    return;
  }

  res.status(500).render('errors/500', {
    title: '500 - Server Error',
  });
}
