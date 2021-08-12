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

export const TableRowElement = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: COLORS.backgroundTable,
    },
  },
}))(TableRow);

export const basicStyles = makeStyles({
  container: {
    heigth: '100%',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
  },
  head: {},
  table: {},
  cell: {
    backgroundColor: COLORS.backgroundTable,
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
});
