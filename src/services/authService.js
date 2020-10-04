/**
 * get logged
 * @type {string}
 */

const tokenKey = 'token';
const userTokenKey = 'user_token';

// test login with request email TODO:: remove
export function login(loggedIn) {
  localStorage.setItem(tokenKey, loggedIn);
}

// takes jwt token from response
export function loginWithJwt(jwt) {
  localStorage.setItem(userTokenKey, jwt);
}

// Just the email
export function getCurrentUser() {
  try {
    const currentUser = localStorage.getItem(tokenKey);
    return currentUser;
  } catch (e) {
    return null;
  }
}

// the jwt
export function getUserToken() {
  try {
    // use this token to identify the current user
    const userToken = localStorage.getItem(userTokenKey);
    return userToken;
  } catch (e) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(userTokenKey);
  localStorage.removeItem(tokenKey);

  // check if successfully deleted from storage
  const current = getCurrentUser();

  if (!current) return true;
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getUserToken,
};
