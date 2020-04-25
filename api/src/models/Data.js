import { Schema, model } from 'mongoose';

const dataSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    autoIncrement: true,
  },
  city: String,
  start_date: Date,
  end_date: Date,
  price: Number,
  status: {
    type: String,
    enum: [
      'Never',
      'Once',
      'Often',
      'Seldom',
      'Yearly',
      'Monthly',
      'Weekly',
      'Daily',
    ],
  },
  color: String,
}, { id: false });

const DataModel = model('Data', dataSchema);

export default DataModel;
