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
  check('city').trim()
    .notEmpty().withMessage('City can not be empty')
    .isString().withMessage('City should be alphanumeric'),
  check('start_date').trim()
    .custom(dateValidator).withMessage('Start Date should be in M/d/yyyy format'),
  check('end_date').trim()
    .custom(dateValidator).withMessage('End Date should be in M/d/yyyy format'),
  check('price').trim()
    .notEmpty().withMessage('Price can not be empty')
    .isNumeric().withMessage('Price should be a Number'),
  check('status').trim()
    .isIn(statusEnum).withMessage('Status should have in proper format'),
  check('color').trim()
    .isString().withMessage('Color should be alphanumeric'),
];

export const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const resolvedError = errors.array().map(i => i.msg);
    return res.json({ error: resolvedError, status: false });
  }
  next();
}
