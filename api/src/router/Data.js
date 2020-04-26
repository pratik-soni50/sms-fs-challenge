import { Router } from 'express';
import { validateID, validateData, checkValidation } from '../utils/validator';
import { listItems, getItem, insertItem, updateItem, deleteitem } from '../controllers/Data';

const dataRouter = Router();

const handleInternalServerError = (req, res) => {
  res.status(500).json({ error: ['Internal Server Error'] });
}

dataRouter.get('/', async ({ query }, res) => {
  try {
    res.json({result: await listItems(query), status: true});
  } catch {
    next();
  }
}, handleInternalServerError);

dataRouter.get('/:id', validateID, checkValidation, async ({ params: { id } }, res, next) => {
  try {
    res.json(await getItem(id));
  } catch  {
    next();
  }
}, handleInternalServerError);

dataRouter.post('/', validateData, checkValidation, async ({ body }, res, next) => {
  try {
    res.json(await insertItem(body))
  } catch {
    next();
  }
}, handleInternalServerError);

dataRouter.put('/:id', validateID, validateData, checkValidation, async ({ params: { id }, body }, res, next) => {
  try {
    res.json(await updateItem(id, body));
  } catch {
    next();
  }
}, handleInternalServerError);

dataRouter.delete('/:id', validateID, checkValidation, async ({ params: { id } }, res, next) => {
  try {
    res.json(await deleteitem(id));
  } catch {
    next();
  }
}, handleInternalServerError);

export default dataRouter;
