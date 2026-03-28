/******************************************************************************
 * ArtworksModal.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useEffect } from "react";
// MUI
import { Fade, Box, Grid, Typography } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";

/*************************************************
 * original customize
 *************************************************/
// artworksmodal dao
import artImageData from "data/artimage.json";
import { ArtItemDao } from "./ArtItemDao";
import { ArtItemDaoObject } from "./ArtItemDao";
import { ArtworksModalDao } from "./ArtworksModalDao";
// artworksmodal css
import styles1 from "css/ArtworksModal.module.css";
// common style
import customiseTypography from "components/pages/common/Customize_mui_typography";
export const theme = customiseTypography

/*************************************************
 * React.FC ArtworksModal
 *************************************************/
const Data = artImageData as Record<string, ArtItemDao>;

const ArtworksModal: React.FC<ArtworksModalDao> = ({ isOpen, onClose, cdno, portraitOrLandscape }) => {

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

  /*****************************************
   * return
   *****************************************/
  if (portraitOrLandscape == "portrait") {
    return (
      <>
        <ThemeProvider theme={theme}>
          <div className={styles1.modal_overlay} onClick={onClose}>
            <Fade in={isOpen} timeout={800}>
              {/* portrait artworks */}
              <Grid
                display="flex"
                flexDirection="column"
                key={cdno}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  padding: "10px",
                  maxHeight: "90vh",
                  maxWidth: "80vw",
                }}
              >
                {/* photo */}
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/" + item.modal_src}
                  sx={{
                    width: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
                {/* description */}
                <Test item={item} />
              </Grid>
            </Fade>
          </div>
        </ThemeProvider>
      </>
    );
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <div className={styles1.modal_overlay} onClick={onClose}>
            <Fade in={isOpen} timeout={800}>
              {/* landscape artworks */}
              <Grid
                display="flex"
                flexDirection="column"
                key={cdno}
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  padding: "10px",
                  maxHeight: "80vh",
                  maxWidth: "95vw",
                }}
              >
                {/* photo */}
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + "/" + item.modal_src}
                  sx={{
                    width: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                  }}
                />
                {/* description */}
                <Test item={item} />
              </Grid>
            </Fade>
          </div>
        </ThemeProvider>
      </>
    );
  }
};

/*********************************
 * 共通部分実装予定
 *********************************/
const Test: React.FC<ArtItemDaoObject> = ({ item }) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{
          marginTop: "5px"
        }}
      >
        作品名：{item.name}    制作年：{item.date}    サイズ：{item.size}
      </Typography>
    </>
  );
}

export default ArtworksModal;