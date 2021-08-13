import React, { useContext } from 'react';
import { Modal, Button } from '@material-ui/core';

import { PatientViewContext } from '../../../contexts/PatientViewContext';
import { tableRowStyles } from '../../patients/table/TableRowComponent.style';
import { modalPatientStyles } from './ModalPatientComponent.style';

export function PatientModal() {
  const classes = modalPatientStyles();

  const { patientModal, isModalVisible, toggleModalVisibility } =
    useContext(PatientViewContext);

  function renderName({ title, first, last }) {
    return `${title}. ${first} ${last} `;
  }

  function renderAddress({ street, city, state, postcode }) {
    return `${street.number} ${street.name}, ${city}/${state} - Postcode ${postcode} `;
  }

  function formatDob(date) {
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
  }

  function renderTableLines() {
    return [...arguments].map(([title, info], index) => {
      return (
        <div className={classes.infoContainer} key={index}>
          <p className={classes.infoTitle}>{title}</p>
          <p className={classes.info}>{` ${info}`}</p>
        </div>
      );
    });
  }

  return (
    <Modal
      open={isModalVisible}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <div className={classes.paper}>
        <div className={classes.avatarContainer}>
          <img
            src={patientModal.picture?.thumbnail}
            alt='avatar'
            className={tableRowStyles().avatar}
          />
          <p className={classes.infoTitle}>
            {!!patientModal.name && renderName(patientModal.name)}
          </p>
        </div>

        {renderTableLines(
          ['Email: ', patientModal.email],
          ['Gender: ', patientModal.gender],
          [
            'Date of Birth: ',
            !!patientModal.dob &&
              patientModal.dob.date &&
              formatDob(patientModal.dob.date),
          ],
          ['Phone Number: ', patientModal.phone],
          ['Nationality: ', patientModal.nat],
          [
            'Address: ',
            !!patientModal.location && renderAddress(patientModal.location),
          ],
          ['ID: ', patientModal.id?.value]
        )}

        <Button
          variant='contained'
          onClick={toggleModalVisibility}
          className={classes.modalButton}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}
