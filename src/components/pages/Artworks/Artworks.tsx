/******************************************************************************
 * Artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Paper } from '@mui/material';

// common
//  style
import Background from "components/pages/common/Background_artworks";
import styles from "css/Artworks.module.css";
import customiseTypography from "components/pages/common/customize_typography";
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
                        <div style={{ padding: "40px" }}>
                            <ArtworksModal
                                isOpen={isModalOpen}
                                onClose={() => setModalOpen(false)}
                                cdno={isCdNo}
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
                                                    width: {
                                                        xs: "100%",   // スマホ
                                                        sm: "100%",   // タブレット
                                                        md: "48%",   // PC
                                                        lg: "30%",   // 大画面
                                                    }
                                                }}
                                            >
                                                <Paper className={styles.artimage}
                                                    component="img"
                                                    src={item.src}
                                                    onClick={() => {
                                                        setModalOpen(true);
                                                        setCdNo(cdno);
                                                    }}
                                                />
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
