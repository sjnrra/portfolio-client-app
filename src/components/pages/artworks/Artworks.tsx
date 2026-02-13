/******************************************************************************
 * Artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, FadeInWithStagger } from "components/animation/Fadein";
// MUI
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Paper } from '@mui/material';

// common
//  style
import Background from "components/pages/common/Background";
import styles from "css/Artworks.module.css";
import customiseTypography from "components/pages/common/Customize_mui_typography";
//  modal
import ArtworksModal from "./ArtworksModal";
//  Data
import artImageData from "data/artimage.json";
import { ArtItemDao } from "./ArtItemDao";

export const theme = customiseTypography

/*************************************************
 * React.FC Artworks
 *************************************************/
const Data = artImageData as Record<string, ArtItemDao>;

const Artworks: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCdNo, setCdNo] = useState<string>("");
    const [isPortraitAndLandscape, setPortraitAndLandscape] = useState<string>("");

    /**************************************************
     * モーダルウインドウ表示中はスクロール禁止
     **************************************************/
    if (isModalOpen) {
        document.body.style.overflow = "hidden"; // スクロール禁止 
    } else {
        document.body.style.overflow = "auto"; // 元に戻す 
    }

    /************************************************** 
     * return
     **************************************************/
    return (
        <>
            <ThemeProvider theme={theme}>
                <Background>
                    <motion.div
                        initial={{ opacity: 0 }}       // 初期状態（透明）
                        animate={{ opacity: 1 }}       // 表示時（不透明）
                        exit={{ opacity: 0 }}          // ページ離脱時（透明）
                        transition={{ duration: 0.5 }} // アニメーション時間
                    >
                        {/* <div style={{ padding: "40px" }}></div> */}
                        <div>
                            <ArtworksModal
                                isOpen={isModalOpen}
                                onClose={() => setModalOpen(false)}
                                cdno={isCdNo}
                                portraitOrLandscape={isPortraitAndLandscape}
                            >
                                <button onClick={() => setModalOpen(false)}>閉じる</button>
                            </ArtworksModal>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <div className={styles.box}>
                            <div>
                                <Box
                                    sx={{
                                        padding: "40px",
                                    }}
                                >
                                    <Grid
                                        container
                                        spacing={2}
                                        justifyContent="center"
                                    >
                                        {Object.entries(Data).map(([cdno, item]) => (
                                            <Grid
                                                display="flex"
                                                flexDirection="column"
                                                key={cdno}
                                                sx={{
                                                    padding: "5px",
                                                    width: {
                                                        xs: "100%",   // スマホ
                                                        sm: "100%",   // タブレット
                                                        md: "45%",   // PC
                                                        lg: "30%",   // 大画面
                                                    }
                                                }}
                                            >
                                                <FadeInWithStagger>
                                                    <FadeIn>
                                                        <Paper className={styles.artimage}
                                                            sx={{
                                                                padding: "5px",
                                                                width: "100%"                                                            }}
                                                            component="img"
                                                            src={process.env.PUBLIC_URL + "/" + item.src}
                                                            onClick={() => {
                                                                setModalOpen(true);
                                                                setCdNo(cdno);
                                                                setPortraitAndLandscape(item.portraitOrLandscape);
                                                            }}
                                                        />
                                                    </FadeIn>
                                                </FadeInWithStagger>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </div>
                        </div>

                    </motion.div>
                </Background>
            </ThemeProvider>
        </>
    )
}

export default Artworks;
