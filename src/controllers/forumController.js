export function getForum(req, res) {
  res.render('forum/index', {
    title: 'Forum | Pro Kodir',
    active: 'forum',
  });
}
