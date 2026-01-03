/******************************************************************************
 * Top.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider } from "@mui/material/styles";
// css
import styles from "css/Top.module.css";
import Background from "components/pages/common/Background_top";
import customiseTypography from "components/pages/common/customize_typography";

export const theme = customiseTypography

/*************************************************
 * React.FC Top
 *************************************************/
const Top: React.FC = () => {
    return (
        <>
            <Background>
                <ThemeProvider theme={theme}>
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
                                    sm: "70%",   // タブレット
                                    md: "50%",   // PC
                                    lg: "35%",   // 大画面
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
                                                <h1 className={styles.top_pop2_name1}>Watanabe<br></br> Shinya</h1>
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
