export function getHome(req, res) {
  res.render('home', {
    title: 'Website | Pro Kodir',
    active: 'home',
  });
}
