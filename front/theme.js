import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        marginBottom: 8,
        marginTop: 8,
      }
    },
    MuiButton: {
      root: {
        marginTop: 8,
        marginBottom: 8,
      },
      label: {
        textTransform: 'none',
      },
    },
  },
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: "outlined",
      size: "small",
    },
    MuiButton: {
      color: "primary",
      variant: "outlined",
    },
  },
});

export default theme;
