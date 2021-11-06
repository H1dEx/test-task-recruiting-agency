import axios from "axios";

export const photosApi = {
  getPhotos(albumId) {
    return axios.get(`http://jsonplaceholder.typicode.com/${albumId? `albums/${albumId}/` : ''}photos`);
  },
  getAlbums() {
    return axios.get("http://jsonplaceholder.typicode.com/albums");
  },
  getPhoto(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/photos/${id}`);
  }
};