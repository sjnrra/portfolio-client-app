/******************************************************************************
 * ArtworksModal.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useEffect } from "react";

// MUI
import { Fade, Box, Paper, Typography, Grid } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";

// common
//  data
import artImageData from "data/artimage.json";
import { ArtItemDao } from "./ArtItemDao";
import { ArtworksModalDao } from "./ArtworksModalDao";
//  style
import customiseTypography from "components/pages/common/customize_typography";
import styles1 from "css/ArtworksModal.module.css";

export const theme = customiseTypography

/*************************************************
 * React.FC ArtworksModal
 *************************************************/
const Data = artImageData as Record<string, ArtItemDao>;

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

  /*****************************************
  * return
  *****************************************/
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles1.modal_overlay} onClick={onClose}>
          <div
          // className={styles1.modal_content}
          // onClick={(e) => e.stopPropagation()}
          >
            <Fade in={isOpen} timeout={800}>
              <Box >
                <Grid
                  container
                  justifyContent="center"
                >
                  <Grid
                    display="flex"
                    flexDirection="column"
                    key={cdno}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 2,
                      width: {
                        padding: "10px",
                        xs: "12%",   // スマホ
                        sm: "18%",   // タブレット
                        md: "25%",   // PC
                        lg: "25%",   // 大画面
                      }
                    }}
                  >
                    {/*************************************
                      * 作品写真
                      *************************************/}
                    <Paper
                      component="img"
                      src={item.modal_src}
                    />

                    {/*************************************
                      * 作品キャプション
                      *************************************/}
                    <Typography
                      sx={{
                        marginTop: "5px"
                      }}
                    >
                      作品名：{item.name}    制作年：{item.date}    サイズ：{item.size}
                    </Typography>

                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ArtworksModal;