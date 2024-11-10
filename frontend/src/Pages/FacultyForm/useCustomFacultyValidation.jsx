import { useState } from 'react';

export const useFullNameValidation = () => {
  const [errorMessage1, setErrorMessage] = useState('');
  
  const validateFullName = (fullName) => {
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to match only alphabets and spaces
    if (!regex.test(fullName)) {
      setErrorMessage('* Please enter a valid full name (only alphabets and spaces)');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage1, validateFullName };
};

export const useGuestNameValidation = () => {
  const [errorMessage8, setErrorMessage] = useState('');
  
  const validateGuestName = (fullName) => {
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to match only alphabets and spaces
    if (!regex.test(fullName)) {
      setErrorMessage('* Please enter a valid full name (only alphabets and spaces)');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage8, validateGuestName };
};

export const useMobileNumberValidation = () => {
  const [errorMessage2, setErrorMessage] = useState('');
  
  const validateMobileNumber = (mobileNumber) => {
    const regex = /^[0-9]{10}$/; // Regular expression to match exactly 10 digits
    if (!regex.test(mobileNumber)) {
      setErrorMessage('* Mobile number must be exactly 10 digits');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage2, validateMobileNumber };
};

export const useGuestMobileNumberValidation = () => {
  const [errorMessage9, setErrorMessage] = useState('');
  
  const validateGuestMobileNumber = (mobileNumber) => {
    const regex = /^[0-9]{10}$/; // Regular expression to match exactly 10 digits
    if (!regex.test(mobileNumber)) {
      setErrorMessage('* Mobile number must be exactly 10 digits');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage9, validateGuestMobileNumber };
};

export const useEmployeeIdValidation = () => {
  const [errorMessage3, setErrorMessage] = useState('');
  
  const validateRollNumber = (rollNumber) => {
    const regex = /^\d{2}[A-Za-z]{3}\d{3}$/; // Regular expression to match the specified format
    if (!regex.test(rollNumber)) {
      setErrorMessage('* Please enter a valid roll number (ex: 21XXX111)');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage3, validateRollNumber };
};

export const useNumberOfRoomsValidation = () => {
  const [errorMessage4, setErrorMessage] = useState('');
  
  const validateNumberOfRooms = (numberOfRooms) => {
    const isValid = Number.isInteger(Number(numberOfRooms));
    if (!isValid || numberOfRooms > 3 || numberOfRooms <= 0) {
      setErrorMessage('* Number of rooms must be between 1 and 3');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage4, validateNumberOfRooms };
};

export const useNumberOfMalesValidation = () => {
  const [errorMessage5, setErrorMessage] = useState('');
  
  const validateNumberOfMales = (numberOfMales) => {
    const isValid = Number.isInteger(Number(numberOfMales));
    if (!isValid || numberOfMales < 0) {
      setErrorMessage('* Number of males must be non-negative');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage5, validateNumberOfMales };
};

export const useNumberOfFemalesValidation = () => {
  const [errorMessage6, setErrorMessage] = useState('');
  
  const validateNumberOfFemales = (numberOfFemales) => {
    const isValid = Number.isInteger(Number(numberOfFemales));
    if (!isValid || numberOfFemales < 0) {
      setErrorMessage('* Number of females must be non-negative');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage6, validateNumberOfFemales };
};

export const useNumberOfChildrenValidation = () => {
  const [errorMessage7, setErrorMessage] = useState('');
  
  const validateNumberOfChildren = (numberOfChildren) => {
    const isValid = Number.isInteger(Number(numberOfChildren));
    if (!isValid || numberOfChildren < 0) {
      setErrorMessage('* Number of children must be non-negative');
    } else {
      setErrorMessage('');
    }
  };
  
  return { errorMessage7, validateNumberOfChildren };
};
