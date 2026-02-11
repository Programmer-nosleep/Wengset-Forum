export function notFound(req, res) {
  res.status(404).render('errors/404', {
    title: '404 - Not Found',
    path: req.originalUrl,
  });
}
