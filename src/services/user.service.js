import axios from 'axios';
import authHeader from './auth-header';
import http from "../http-common";

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }


  getAll() {
    return http.get("/users");
  }

  // createSurvey(name,data,id) {
  //   return http.post(`/users?name=${name}&createdBy=${id}`, data);
  // }
  get(id) {
    return http.get(`/users/${id}`);
  }

  // update(id, name, data) {
  //   return http.put(`/users/${id}?name=${name}`, data);
  // }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserService();
