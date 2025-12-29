// Modal.tsx
import React, { ReactNode, useEffect } from "react";
// import "./modal.css";
import styles1 from "css/ArtworksModal.module.css";
import { Button, Fade, Box } from "@mui/material";

interface ModalProps {
  isOpen: boolean;               // モーダル表示フラグ
  onClose: () => void;           // 閉じる処理
  children: ReactNode;           // モーダル内コンテンツ
  name: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, name }) => {
  // ESCキーで閉じる処理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
        <div className={styles1.modal_overlay} onClick={onClose}>
        <div
          className={styles1.modal_content}
          onClick={(e) => e.stopPropagation()}
        >

          <Fade in={isOpen} timeout={800}>
            <Box
              sx={{
                mt: 2,
                // width: 200,
                // height: 100,
                bgcolor: "white",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <img className={styles1.modal_img} src={name} />
            </Box>
          </Fade>







        </div>
      </div>
    </>
  );
};

export default Modal;