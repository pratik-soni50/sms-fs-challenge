import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from '@material-ui/pickers';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import format from 'date-fns/format';
import appConfig from '../../appConfig';
import { addEditRow, clearAddEditRow } from '../../actionCreator';

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  cancelButton: {
    marginLeft: theme.spacing(1),
  },
}));

export default function DataForm() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { result, loading, item } = useSelector(state => state.addEditRow);
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEditRow({
      id: item && item.id,
      city,
      start_date: format(new Date(startDate), appConfig.DATE_FORMAT),
      end_date: format(new Date(endDate), appConfig.DATE_FORMAT),
      price,
      status,
      color,
    }));
  }

  const clearForm = () => {
    setCity('');
    setStartDate(null);
    setEndDate(null);
    setPrice('');
    setStatus('');
    setColor('');
    dispatch(clearAddEditRow());
  }

  useEffect(() => {
    if (item) {
      setCity(item.city || '');
      setStartDate(item.start_date || null);
      setEndDate(item.end_date || null);
      setPrice(item.price || '');
      setStatus(item.status || '');
      setColor(item.color || '');
    }
  }, [item]);

  useEffect(() => {
    if (result && (result.id || item.id)) {
      clearForm();
    }
  }, [result]);

  useEffect(() => {
    ValidatorForm.addValidationRule('requiredTrim', value => !(value && !value.trim()));
    return () => {
      ValidatorForm.removeValidationRule('requiredTrim');
    }
  }, []);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h2">{`${item && item.id ? 'Edit' : 'Add'} Item`}</Typography>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          label="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          validators={['required', 'requiredTrim']}
          errorMessages={['This field is required', 'Should have alphbate']}
        />
        <DatePicker
          disableToolbar
          variant="inline"
          format={appConfig.DATE_FORMAT}
          label="Start Date"
          value={startDate}
          onChange={setStartDate}
          // maxDate={endDate}
          // maxDateMessage="Start Date should not after End Date"
          autoOk={true}
          TextFieldComponent={TextValidator}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <DatePicker
          disableToolbar
          variant="inline"
          format={appConfig.DATE_FORMAT}
          label="End Date"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate}
          minDateMessage="End Date should not aefore Start Date"
          autoOk={true}
          TextFieldComponent={TextValidator}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <TextValidator
          label="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          validators={['required', 'isFloat', 'isPositive']}
          errorMessages={['This field is required', 'Only number allowed', 'Only positive allowed']}
        />
        <TextValidator
          select
          value={status}
          onChange={e => setStatus(e.target.value)}
          label="Status"
          validators={['required']}
          errorMessages={['This field is required']}
        >
          {appConfig.STATUS_ARRAY.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
        </TextValidator>
        <TextValidator
          label="Color"
          value={color}
          onChange={e => setColor(e.target.value)}
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <Button disabled={loading} type="submit">Submit</Button>
        <Button type="button" color="secondary" className={classes.cancelButton} onClick={clearForm}>Cancel</Button>
      </ValidatorForm>
    </Paper>
  )
}
