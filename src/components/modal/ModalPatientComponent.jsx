import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';

import { basicStyles } from '../patients/tableRowComponent/TableRowComponent.style';
import { useStyles } from './ModalPatientComponent.style';

export default function PatientModal({ user }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const body = (
    <div className={classes.paper}>
      <div className={classes.avatarContainer}>
        <img
          src={user.picture.thumbnail}
          alt='avatar'
          className={basicStyles().avatar}
        />
        <p className={classes.infoTitle}>{renderName(user.name)}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Email:&nbsp;</p>
        <p className={classes.info}>{`${user.email}`}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Gender:&nbsp;</p>
        <p className={classes.info}>{`${user.gender}`}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Date of Birth:&nbsp;</p>
        <p className={classes.info}>{formatDob(user.dob.date)}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Phone Number:&nbsp;</p>
        <p className={classes.info}>{`${user.phone}`}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Nationality:&nbsp;</p>
        <p className={classes.info}>{`${user.nat}`}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>Address:&nbsp;</p>
        <p className={classes.info}>{renderAddress(user.location)}</p>
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.infoTitle}>ID:&nbsp;</p>
        <p className={classes.info}>{`${user.id.value}`}</p>
      </div>

      <Button
        variant='contained'
        onClick={handleClose}
        className={classes.modalButton}
      >
        Close
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        variant='contained'
        onClick={handleOpen}
        className={classes.rowButton}
      >
        Patient Info
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}
