import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import { registerRoutes } from './routes/index.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const rootDir = path.resolve(__dirname, '');

  app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: path.join(rootDir, 'views', 'layouts'),
      partialsDir: path.join(rootDir, 'views', 'partials'),
      helpers: {
        eq: (a, b) => a === b,
        initials: (value) => {
          const text = String(value ?? '').trim();
          if (!text) return '?';

          const parts = text.split(/\s+/).filter(Boolean).slice(0, 2);
          return parts.map((part) => part.slice(0, 1).toUpperCase()).join('');
        },
        formatDate: (value) => {
          try {
            const date = value instanceof Date ? value : new Date(value);
            return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(date);
          } catch {
            return '';
          }
        },
        formatTime: (value) => {
          try {
            const date = value instanceof Date ? value : new Date(value);
            return new Intl.DateTimeFormat('id-ID', { timeStyle: 'short' }).format(date);
          } catch {
            return '';
          }
        },
      },
    }),
  );
  app.set('view engine', 'hbs');
  app.set('views', path.join(rootDir, 'views'));

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
  });

  app.use('/assets', express.static(path.join(rootDir, '../public/assets')));

  registerRoutes(app);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
