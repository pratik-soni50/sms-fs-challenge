import { Router } from 'express';
import { validateID, validateData, checkValidation } from '../utils/validator';
import { listItems, getItem, insertItem, updateItem, deleteitem } from '../controllers/Data';

const dataRouter = Router();

const handleInternalServerError = (req, res) => {
  res.status(500).json({ error: ['Internal Server Error'], status: false});
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
    res.json({result: await getItem(id), status: true});
  } catch  {
    next();
  }
}, handleInternalServerError);

dataRouter.post('/', validateData, checkValidation, async ({ body }, res, next) => {
  try {
    res.json({result: await insertItem(body), status: true});
  } catch {
    next();
  }
}, handleInternalServerError);

dataRouter.put('/:id', validateID, validateData, checkValidation, async ({ params: { id }, body }, res, next) => {
  try {
    res.json({result: await updateItem(id, body), status: true});
  } catch {
    next();
  }
}, handleInternalServerError);

dataRouter.delete('/:id', validateID, checkValidation, async ({ params: { id } }, res, next) => {
  try {
    res.json({result: await deleteitem(id), status: true});
  } catch {
    next();
  }
}, handleInternalServerError);

export default dataRouter;
