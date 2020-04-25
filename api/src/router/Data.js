import { Router } from 'express';
import { listItems, getItem, insertItem, updateItem, deleteitem } from '../controllers/Data';

const dataRouter = Router();

dataRouter.get('/', async ({ query }, res) => {
  res.json(await listItems(query));
});

dataRouter.get('/:itemId', async ({params: {itemId}}, res) => {
  res.json(await getItem(itemId));
});

dataRouter.post('/');

dataRouter.put('/:itemId');

dataRouter.delete('/:itemId')

export default dataRouter;
