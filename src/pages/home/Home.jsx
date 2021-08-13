import React from 'react';

import { PatientsTable, PatientModal } from '../../components';
import { globalStyles } from '../../assets/styles/global.style.js';
import { PatientViewProvider } from '../../contexts/PatientViewContext';

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
        <PatientModal />
      </div>
    </PatientViewProvider>
  );
}

export default Home;
