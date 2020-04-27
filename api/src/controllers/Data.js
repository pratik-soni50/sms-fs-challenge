import DataModel from '../models/Data';

const getNextID = async () => {
  const data = await DataModel.find().sort({ id: -1 }).limit(1);
  if (data && data[0] && data[0].id) {
    return data[0].id + 1;
  }
};

export const listItems = async ({
  page = 1, perPage = 10, order = 'asc',
  orderBy = 'id', minStart, maxStart, minEnd, maxEnd,
}) => {
  const query = {};
  if (minStart || maxStart) {
    query.start_date = {};
    minStart && (query.start_date['$gte'] = new Date(minStart));
    maxStart && (query.start_date['$lt'] = new Date(maxStart));
  }
  if(minEnd || maxEnd) {
    query.end_date = {};
    minEnd && (query.end_date['$gte'] = new Date(minEnd));
    maxEnd && (query.end_date['$lt'] = new Date(maxEnd));
  }
  return ({
    items: await DataModel.find(query).limit(Number(perPage)).skip((page - 1) * perPage)
      .sort({ [orderBy]: (order === 'asc' ? 1 : -1) }),
    count: await DataModel.countDocuments(),
  })
};

export const getItem = async (id) => {
  return await DataModel.findOne({ id });
}

export const insertItem = async ({ city, start_date, end_date, price, status, color }) => {
  return await DataModel.create({ id: await getNextID(), city, start_date, end_date, price, status, color });
}

export const updateItem = async (id, { city, start_date, end_date, price, status, color }) => {
  return !!(await DataModel.findOneAndUpdate({ id }, { city, start_date, end_date, price, status, color }));
}

export const deleteitem = async (id) => {
  return !!(await DataModel.findOneAndDelete({ id }));
}
