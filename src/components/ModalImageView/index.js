import React from 'react';
import { Modal } from "@mui/material";

export const ModalImageView = ({photo, isOpen, onClose}) => (
  <Modal open={isOpen} onClose={onClose}>
    <img src={photo.url} alt={photo.title} />
  </Modal>
);