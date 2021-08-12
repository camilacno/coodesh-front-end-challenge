import React, { createContext, useState } from 'react';

export const PatientViewContext = createContext({});

export function PatientViewProvider({ children }) {
  const [patientModal, setPatientModal] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModalVisibility() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <PatientViewContext.Provider
      value={{
        patientModal,
        setPatientModal,
        isModalVisible,
        setIsModalVisible,
        toggleModalVisibility,
      }}
    >
      {children}
    </PatientViewContext.Provider>
  );
}
