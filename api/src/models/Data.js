import { Schema, model } from 'mongoose';
import statusEnum from '../utils/statusEnum';

const dataSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    index: true,
    autoIncrement: true,
  },
  city: String,
  start_date: Date,
  end_date: Date,
  price: Number,
  status: {
    type: String,
    enum: statusEnum,
  },
  color: String,
}, { id: false });

const DataModel = model('Data', dataSchema);

export default DataModel;
