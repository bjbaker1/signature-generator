import axios from 'axios';

export default {

  login(user) {
    return axios.post('https://photoslibrary.googleapis.com/v1/uploads', user)
  },

  register(user) {
    return axios.post('/register', user)
  }

}
