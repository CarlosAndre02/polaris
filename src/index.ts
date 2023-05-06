import app from './server';
import { initDB } from './config/database';

(async () => {
  try {
    await initDB();
  } catch (error) {
    console.error('Unable to connect to database', error);
    process.exit(1);
  }

  const port = process.env.PORT || 3000;
  app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
  });  
})();