/******************************************************************************
 * Artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

//app
import ArtworksModal from "./ArtworksModal";
import { ArtItemDao } from "./ArtItemDao";

//css
import commonStyles from 'css/Common.module.css';
import styles from "css/Artworks.module.css";

//json
import rawData from "data/artimage.json";
import { Box, Grid, Paper } from '@mui/material';
/*************************************************
 * Artworks
 *************************************************/
const Data = rawData as Record<string, ArtItemDao>;

const Artworks: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCdNo, setCdNo] = useState<string>("");
    const keys = Object.keys(Data);

    const chunk = (arr: string[], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const rows = chunk(keys, 3); // ← 3件ずつ分割

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
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <div style={{ padding: "20px" }}>
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
                <div className={commonStyles.common_background}>
                    <div className={styles.box}>
                        <div>
                            <Box sx={{ width: '100%' }}>
                                <Grid container spacing={2} >
                                    {Object.entries(Data).map(([cdno, item]) => (
                                        <Grid
                                            size={4}
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
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
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
                </div>
            </motion.div>
            <div></div>
        </>
    )
}

export default Artworks;
