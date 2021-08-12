import React from 'react';

import PatientsTable from '../components/patients/table/PatientsTableComponent';

function Home() {
  return (
    <div>
      <p>
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
