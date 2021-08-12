import { TableCell, withStyles, makeStyles } from '@material-ui/core';
import { COLORS, FONT_SIZES } from '../../../core/constants';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const patientTableStyles = makeStyles((theme) => ({
  cell: {
    backgroundColor: COLORS.headerTable,
  },
  avatar: {
    borderRadius: '50%',
    height: '10%',
    marginRight: '10px',
    width: '10%',
  },
  customer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  searchAndFilters: {
    alignItems: 'center',
    backgroundColor: COLORS.backgroundTable,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    padding: '10px 5px',
  },
  filtersContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  inputAndSelect: {
    borderColor: COLORS.text,
    borderRadius: 3,
    borderWidth: '1px',
    color: COLORS.text,
    fontSize: FONT_SIZES.text,
    height: '32px',
    padding: theme.spacing(0.5),
  },
  filtersTitle: {
    color: COLORS.text,
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    marginRight: '10px',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.text,
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    margin: '5px 0',
  },
}));
