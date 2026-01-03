/******************************************************************************
 * Top.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
// import React from "react";
// import Typography from '@mui/material/Typography';
import { Box, Button, TextField, Snackbar, Alert, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
// css
import styles from "css/Top.module.css";
import Background from "components/pages/common/Background_top";
import customiseTypography from "components/pages/common/customize_typography";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
export const theme = customiseTypography

/*************************************************
 * React.FC Top
 *************************************************/
const Top: React.FC = () => {
    return (
        <>
            <Background>
                <ThemeProvider theme={theme}>
                    {/* <div className={styles.point}>
                <div className={styles.box}>
                    <div className={`${styles.bgImg} ${styles.src1}`}></div>
                    <div className={`${styles.bgImg} ${styles.src2}`}></div>
                    <div className={`${styles.bgImg} ${styles.src3}`}></div>
                    <div className={`${styles.bgImg} ${styles.src4}`}></div>
                    <div className={`${styles.bgImg} ${styles.src5}`}></div>
                </div>
            </div> */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <Box className={styles.top_pop12}
                            sx={{
                                width: {
                                    xs: "85%",   // スマホ
                                    sm: "60%",   // タブレット
                                    md: "30%",   // PC
                                    lg: "30%",   // 大画面
                                },
                                borderRadius: 3
                            }}
                        >
                            <Grid>
                                <Grid>
                                    <Box
                                        sx={{ p: 1 }} >
                                        <div className={styles.top_pop2}>
                                            <Typography>
                                                <h1 className={styles.top_pop2_name1}>Watanabe Shinya</h1>
                                                <h2 className={styles.top_pop2_name2}>渡部 晋也 作品集</h2>
                                            </Typography>
                                        </div>
                                        <IconButton
                                            color="secondary"
                                            href="https://www.instagram.com/shinya_wata_paint?igsh=MWZqYWh0Yjk1eXc3ZQ=="
                                            target="_blank"
                                            rel="noopener noreferrer" // セキュリティ対策
                                        >
                                            <InstagramIcon fontSize="large" />
                                        </IconButton>
                                        <div className={styles.top_pop3}>
                                            <Typography>
                                                <p className={styles.top_info}>information</p>
                                                <p className={styles.top_info_data}>2025/12/28　　新規作成</p>
                                                <br></br><br></br><br></br>
                                            </Typography>
                                        </div>
                                        {/* </div>                                     */}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>
                </ThemeProvider>
            </Background>
        </>
    )
}

export default Top;
