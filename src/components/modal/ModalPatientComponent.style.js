import { makeStyles } from '@material-ui/core';
import { FONT_SIZES, COLORS } from '../../core/constants';

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    left: '30%',
    padding: theme.spacing(2, 4, 3),
    position: 'relative',
    top: '10%',
    width: 400,
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1, 1, 1),
  },
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.backgroundTable,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1, 1, 1),
  },
  info: {
    fontSize: FONT_SIZES.text,
  },
  infoTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
  },
  modalButton: {
    position: 'relative',
    left: '40%',
    '&.MuiButton-root': {
      borderRadius: 5,
      backgroundColor: COLORS.headerTable,
      color: '#FFF',
      '&:hover': {
        backgroundColor: COLORS.buttonHover,
      },
    },
  },
  rowButton: {
    fontSize: FONT_SIZES.text,
    padding: '5px 10px',
    '&.MuiButton-root': {
      borderRadius: 5,
      backgroundColor: COLORS.headerTable,
      color: '#FFF',
      '&:hover': {
        backgroundColor: COLORS.buttonHover,
      },
    },
  },
}));
