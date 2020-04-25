import DataModel from '../models/Data';

const getNextID = async () => {
  const data = await DataModel.find().sort({ id: -1 }).limit(1);
  if (data && data[0] && data[0].id) {
    return data[0].id + 1;
  }
};

export const listItems = async ({ page = 1, perPage = 10 }) => ({
  list: await DataModel.find().limit(Number(perPage)).skip((page - 1) * perPage),
  count: await DataModel.countDocuments(),
});

export const getItem = async (itemId) => {
  return await DataModel.findOne({id: itemId});
}

export const insertItem = async () => {

}

export const updateItem = async () => {

}

export const deleteitem = async () => {

}
