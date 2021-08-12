import React from 'react';

import PatientsTable from '../components/patients/table/PatientsTableComponent';
import { globalStyles } from '../assets/styles/global.style.js';

function Home() {
  const classes = globalStyles();

  return (
    <div className={classes.home}>
      <p className={classes.title}>
        Welcome to Pharma Inc. customers database. You can use this feature to
        facilitate the management and visualization of information about
        patients, in a simple and objective way. Using this feature you can
        list, filter and expand the available data.
      </p>
      <PatientsTable />
    </div>
  );
}

export default Home;
