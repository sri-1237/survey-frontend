import axios from 'axios';
import authHeader from './auth-header';
import http from "../http-common";

const API_URL = 'http://localhost:8080/api/test/';
const USER_URL = "http://localhost:8080/api/auth";

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

  getAll(){
    return axios.get(USER_URL);
  }

  findUser(name){
    return axios.get(USER_URL + `?username=${name}`);
  }

  delete(id){
    return axios.delete(USER_URL + `/${id}`);
  }

  updateRole(id, data){
    return axios.put(USER_URL+ `/${id}`, data);
  }

}

export default new UserService();
