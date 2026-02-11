import { createApp } from './app.js';

export function startServer() {
  const port = Number(process.env.PORT) || 8080;
  const app = createApp();

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
}
