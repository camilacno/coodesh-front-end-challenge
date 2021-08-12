import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

import { COLORS, FONT_SIZES } from '../../../core/constants';

export const TableCellElement = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: FONT_SIZES.text,
  },
}))(TableCell);

export const TableRowElement = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: COLORS.backgroundTable,
    },
  },
}))(TableRow);

export const tableRowStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    heigth: '100%',
    width: '60%',
  },
  cell: {
    backgroundColor: COLORS.headerTable,
  },
  avatar: {
    borderRadius: '50%',
    height: '10%',
    width: '10%',
    marginRight: '1rem',
  },
  customer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  patientDetailsButton: {
    fontSize: FONT_SIZES.text,
    padding: theme.spacing(0.5, 1),
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
