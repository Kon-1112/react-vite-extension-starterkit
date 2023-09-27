import React from 'react';
import {Box, Fade, Modal} from "@mui/material";

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = React.memo((props: ConfirmModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={props.open}>
        <Box>

        </Box>
      </Fade>
    </Modal>
  )
});

ConfirmModal.displayName = 'ConfirmModal';
