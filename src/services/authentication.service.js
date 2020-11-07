import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:8000/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'api/auth/', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.access) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
      // .catch(err => {
      //   // localStorage.removeItem('user') // if the request fails, remove any possible user token if possible
      //   // reject(err)
      // });
  }
  
  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL, {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  refreshToken() {
    let user = JSON.parse(localStorage.getItem('user'));
    var rs = axios.post(API_URL + "api/auth/refresh/", {
      refresh: user.refresh
    })
     .then(response => {
        if (response.data.access) {
          user.access = response.data.access;
          localStorage.setItem("user", JSON.stringify(user));
          return JSON.stringify(user);
        }
      })
       .catch(err => {
        console.log(err)
        return err;
      });
  }
}

export default new AuthService();