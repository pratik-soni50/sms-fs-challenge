import mongoose from 'mongoose';
import config from '../../config/env';

export default async function setupDatabase() {
  await mongoose.connect(config.DB_URL || 'mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
}
