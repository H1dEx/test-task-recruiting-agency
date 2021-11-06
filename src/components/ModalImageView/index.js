import React from "react";
import { Box, Modal } from "@mui/material";

export const ModalImageView = ({ photo, onClose }) => (
  <div>
    <Modal open={Boolean(photo)} onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        outline: "none"
      }}>
        {photo?.url && <img src={photo.url} alt={photo.title} />}
      </Box>
    </Modal>
  </div>
);