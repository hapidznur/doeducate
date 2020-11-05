import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:8000/siswa/';

class StudentService {
  getStudent() {
    return axios.get(API_URL,  { headers: authHeader()} );
  }

  getStudentById(id) {
    return axios.get(API_URL + id , { headers: authHeader()})
  }
}

export default new StudentService();