import mongoose from 'mongoose';

export default async function setupDatabase() {
  await mongoose.connect('mongodb://localhost:27017/account', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
}
