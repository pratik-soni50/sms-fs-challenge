import ACTIONS from '../constants/action';

const defaultOptions = {
  variant: 'default',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

export const notify = (message, variant = 'default', options = defaultOptions) => ({
  type: ACTIONS.ENQUEUE_NOTIFICATION,
  list: {
    key: new Date().getTime() + Math.random(),
    message,
    options: { ...options, variant },
  },
});

export const removeNotification = key => ({
  type: ACTIONS.REMOVE_NOTIFICATION,
  key,
});

export const errorNotification = message => notify(message, 'error');

export const warningNotification = message => notify(message, 'warning');

export const infoNotification = message => notify(message, 'info');

export const sucessNotification = message => notify(message, 'success');
