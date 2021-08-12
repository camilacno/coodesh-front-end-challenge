import { makeStyles } from '@material-ui/core';
import { COLORS, FONT_SIZES } from '../../core/constants';

export const globalStyles = makeStyles({
  appContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    width: '60%',
  },
  home: {
    alignItems: 'center',
    height: '100vh',
    padding: '10px',
    textAlign: 'justify',
    width: '60vw',
  },
  title: {
    color: COLORS.text,
    marginTop: '10px',
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
  },
});
