import React, { ReactNode, useEffect } from "react";
import { Fade, Box } from "@mui/material";

// import "./modal.css";
import styles1 from "css/ArtworksModal.module.css";

//json
import rawData from "data/artimage.json";

//Dao
import { ArtItemDao } from "./ArtItemDao";
import { ArtworksModalDao } from "./ArtworksModalDao";

const Data = rawData as Record<string, ArtItemDao>;

const Modal: React.FC<ArtworksModalDao> = ({ isOpen, onClose, name, cdno }) => {

  const item = Data[cdno];

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
                bgcolor: "white",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >

              <div className={styles1.modal_imageBox}>

                <table className={styles1.modal_table}>

                  <tr>
                    {/* image */}
                    <img className={styles1.modal_img} src={name} />
                  </tr>
                  <tr>
                    <p className={styles1.modal_description}>
                      作品名：{item.name}    制作年：{item.date}    サイズ：{item.size}
                    </p>
                  </tr>

                </table>
              </div>

            </Box>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Modal;