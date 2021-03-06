export const BASE_URL = "https://api.domainname.mesto.nomoredomains.rocks";

const handleOriginalResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
  },
    body: JSON.stringify({ email, password }),
  }).then(handleOriginalResponse);
};

export const authorize = ({ password, email }, token) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
  },
    body: JSON.stringify({ email, password }),
  }).then(handleOriginalResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
  },
  }).then(handleOriginalResponse);
};