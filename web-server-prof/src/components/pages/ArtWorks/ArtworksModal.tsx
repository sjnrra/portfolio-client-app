/******************************************************************************
 * Artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { ReactNode, useEffect } from "react";
import { Fade, Box } from "@mui/material";

// import "./modal.css";
import styles1 from "css/ArtworksModal.module.css";

//json
import rawData from "data/artimage.json";

//Dao
import { ArtItemDao } from "./ArtItemDao";
import { ArtworksModalDao } from "./ArtworksModalDao";

/*************************************************
 * ArtworksModal
 *************************************************/
const Data = rawData as Record<string, ArtItemDao>;

const ArtworksModal: React.FC<ArtworksModalDao> = ({ isOpen, onClose, cdno }) => {

  const item = Data[cdno];

  /*****************************************
   * ESCキーで閉じる処理
   *****************************************/
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

  /*****************************************
   *  モーダル表示時の背景ズレ防止
   *****************************************/
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // AppBar 用の CSS 変数
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
    };
  }, [isOpen]);

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
                borderRadius: 2
              }}
            >
              <button className={styles1.modal_close_button} onClick={onClose}>×</button>
              <div className={styles1.modal_imageBox}>

                <table className={styles1.modal_table}>

                  <tr>
                    <td>
                      <img className={styles1.modal_img} src={item.modal_src} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className={styles1.modal_description}>
                        作品名：{item.name}    制作年：{item.date}    サイズ：{item.size}
                      </p>
                    </td>
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

export default ArtworksModal;