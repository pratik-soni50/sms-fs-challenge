import { check, param, validationResult } from 'express-validator';
import statusEnum from './statusEnum';

export const validateID = param('id').isInt().withMessage('ID must be a Number');

export const dateValidator = value => {
  const dateRegEx = /^(1[0-2]|0?[1-9])\/([0-2]?[0-9]|3[01])\/\d{4}$/gm;
  if (!dateRegEx.test(value)) {
    throw new Error('Date not is proper format');
  }
  return true;
};

export const validateData = [
  check('city').isString().trim(),
  check('start_date').custom(dateValidator),
  check('end_date').custom(dateValidator),
  check('price').isNumeric().trim(),
  check('status').trim().isIn(statusEnum),
  check('color').isString().trim(),
];

export const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
}
