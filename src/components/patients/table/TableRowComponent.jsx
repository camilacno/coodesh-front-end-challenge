import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { PatientViewContext } from '../../../contexts/PatientViewContext';
import {
  TableCellElement,
  TableRowElement,
  tableRowStyles,
} from './TableRowComponent.style';

function renderName({ title, first, last }) {
  return `${title}. ${first} ${last} `;
}

export function TableRowComponent({ user }) {
  const classes = tableRowStyles();
  const { setPatientModal, setIsModalVisible } = useContext(PatientViewContext);

  const handleView = (user) => {
    setPatientModal(user);
    setIsModalVisible(true);
  };

  return (
    <TableRowElement>
      <TableCellElement align='center' className={tableRowStyles().customer}>
        <img
          src={user.picture?.thumbnail}
          alt='avatar'
          className={tableRowStyles().avatar}
        />
        {renderName(user.name)}
      </TableCellElement>
      <TableCellElement align='center'>{`${user.gender}`}</TableCellElement>
      <TableCellElement align='center'>{`${user.nat}`}</TableCellElement>
      <TableCellElement align='center'>
        <Button
          variant='contained'
          onClick={() => handleView(user)}
          className={classes.patientDetailsButton}
        >
          Patient Details
        </Button>
      </TableCellElement>
    </TableRowElement>
  );
}
