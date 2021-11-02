// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { photosApi } from "../../../api";

export const usePhotos = () => {
  // const params = useParams();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(100);
  const [photos, setPhotos] = useState([]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  useEffect(() => {
    photosApi.getPhotos().then(({ data }) => setPhotos(data)).catch(console.log);
  }, []);

  useEffect(()=>{
    if (photos.length)
      setCurrentPhotos(photos.slice(pageSize * (page+1), pageSize * (page + 2)));
  }, [page, pageSize, photos]);

  return {
    currentPhotos,
    paginationProps: {
      page,
      onPageChange: (_, p) => setPage(p),
      count: photos.length,
      rowsPerPage: pageSize, onRowsPerPageChange: ({ target: { value } }) => setPageSize(value)
    }
  };
};