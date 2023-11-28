// CookieUtils.js
export const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
  
    const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
  
    document.cookie = cookieValue;
  };
  