import axios from 'axios';

export default axios.create({
  baseURL: `http://192.168.128.58:8000/api/v1`
});
