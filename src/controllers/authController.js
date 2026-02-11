function renderAuthPage(res, view, { title, active, errors = [], values = {} }) {
  res.render(view, { layout: 'auth', title, active, errors, values });
}

export function getLogin(req, res) {
  renderAuthPage(res, 'auth/login', {
    title: 'Login Administrator',
    active: 'login',
    values: { username: '' },
  });
}

export function postLogin(req, res) {
  const username = req.body?.username?.trim() ?? '';
  const password = req.body?.password?.trim() ?? '';

  const errors = [];
  if (!username) errors.push('Username wajib diisi.');
  if (!password) errors.push('Password wajib diisi.');

  if (errors.length > 0) {
    renderAuthPage(res.status(400), 'auth/login', {
      title: 'Login Administrator',
      active: 'login',
      errors,
      values: { username },
    });
    return;
  }

  res.redirect('/forum');
}

export function getSignup(req, res) {
  renderAuthPage(res, 'auth/signup', {
    title: 'Create Account',
    active: 'signup',
    values: { username: '', email: '' },
  });
}

export function postSignup(req, res) {
  const username = req.body?.username?.trim() ?? '';
  const email = req.body?.email?.trim() ?? '';
  const password = req.body?.password?.trim() ?? '';

  const errors = [];
  if (!username) errors.push('Username wajib diisi.');
  if (!email) errors.push('Email wajib diisi.');
  if (!password) errors.push('Password wajib diisi.');

  if (errors.length > 0) {
    renderAuthPage(res.status(400), 'auth/signup', {
      title: 'Create Account',
      active: 'signup',
      errors,
      values: { username, email },
    });
    return;
  }

  res.redirect('/auth/login');
}
