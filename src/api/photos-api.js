import axios from "axios";

export const photosApi = {
  getPhotos() {
    return axios.get('http://jsonplaceholder.typicode.com/photos');
  },
  getPhoto(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }
};