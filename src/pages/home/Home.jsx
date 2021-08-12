import React from 'react';

import PatientsTable from '../../components/patients/table/PatientsTableComponent';
import { globalStyles } from '../../assets/styles/global.style.js';
import { PatientViewProvider } from '../../contexts/PatientViewContext';
import PatientViewModal from '../../components/patients/modal/ModalPatientComponent';

function Home() {
  const classes = globalStyles();

  return (
    <PatientViewProvider>
      <div className={classes.home}>
        <p className={classes.title}>
          Welcome to Pharma Inc. customers database. You can use this feature to
          facilitate the management and visualization of information about
          patients, in a simple and objective way. Using this feature you can
          list, filter and expand the available data.
        </p>

        <PatientsTable />
        <PatientViewModal />
      </div>
    </PatientViewProvider>
  );
}

export default Home;
