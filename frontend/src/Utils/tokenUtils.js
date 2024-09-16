import * as jwtDecode from 'jwt-decode'

export const setTokenWithExpiry = (token, days) => {
    const now = new Date();
    const expiryDate = now.getTime() + days * 24 * 60 * 60 * 1000

    const tokenObject = {
      value: token,
      expiry: expiryDate,
    };

    localStorage.setItem('token', JSON.stringify(tokenObject));
  };
  
  export const getToken = () => {
    const tokenObject = JSON.parse(localStorage.getItem('token'));
    if (!tokenObject) return null;
  
    const now = new Date();
    if (now.getTime() > tokenObject.expiry) {
      localStorage.removeItem('token');
      return null;
    }
  
    const decodedToken = jwtDecode.default(tokenObject.value);
    return { token: tokenObject.value, name: decodedToken.name };
  };
