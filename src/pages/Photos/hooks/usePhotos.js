import { useEffect, useState } from "react";
import toast from 'toastify';
import { photosApi } from "../../../api";

export const usePhotos = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(100);
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => (async function () {
    try {
      setIsLoading(true);
      const { data } = await photosApi.getAlbums();
      setAlbums(data);
      setIsLoading(false);
    } catch (e) {
      toast.error(e);
    }
  }()), []);

  useEffect(() => (async function () {
    try {
      const { data } = await photosApi.getPhotos(selectedAlbum);
      setPhotos(data);
      setPage(0);
    } catch (e) {
      toast.error(e);
    }
  }()), [selectedAlbum]);

  useEffect(() => {
    if (photos.length)
      setCurrentPhotos(photos.slice(pageSize * page, pageSize * (page + 1)));
  }, [page, pageSize, photos]);

  return {
    currentPhotos,
    modalImage,
    isLoading,
    setModalImage,
    albums,
    selectedAlbum,
    setSelectedAlbum,
    paginationProps: {
      page,
      onPageChange: (_, p) => setPage(p),
      count: photos.length,
      rowsPerPage: pageSize, onRowsPerPageChange: ({ target: { value } }) => setPageSize(value)
    }
  };
};