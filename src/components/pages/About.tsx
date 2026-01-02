/******************************************************************************
 * About.tsx
 *****************************************************************************/

/*************************************************
 * pre shori
 *************************************************/
import React from "react";
import { motion } from "framer-motion";

// MUI
import {
    Grid,
    Paper,
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";

// common
import Background from "components/pages/common/Background";
import customiseTypography from "components/pages/common/customize_typography";
import profileData from "data/profile.json";

// export
export const data = profileData;
export const theme = customiseTypography

/*************************************************
 * React.FC About
 *************************************************/
const About: React.FC = () => {
    return (
        <>
            <Background>
                <ThemeProvider theme={theme}>
                    {/****************************************************
                      * about
                      ****************************************************/}
                    <motion.div
                        initial={{ opacity: 0 }}       // 初期状態（透明）
                        animate={{ opacity: 1 }}       // 表示時（不透明）
                        exit={{ opacity: 0 }}          // ページ離脱時（透明）
                        transition={{ duration: 0.5 }} // アニメーション時間
                    >
                        <Box
                            sx={{
                                minHeight: '30vh',
                                margin: '100px auto',
                                bgcolor: "white",
                                display: "flex",
                                borderRadius: 3,
                                width: {
                                    // padding: "5px",
                                    xs: "100%",   // スマホ
                                    sm: "70%",   // タブレット
                                    md: "50%",   // PC
                                    lg: "50%",   // 大画面
                                }
                            }}
                        >
                            <Grid>
                                <Grid
                                >
                                    <Box sx={{ p: 3 }} >

                                        {/******************************************* 
                                      *名前 
                                      *******************************************/}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 3, // 見出しと写真の間隔
                                                margin: "30px"
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src="image/top1.jpg"
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: "50%", //円形
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <Typography variant="h5">渡部 晋也 (Watanabe Shinya)</Typography>
                                        </Box>
                                        <Paper
                                            style={{
                                                margin: "1rem",
                                                marginBottom: "1rem",
                                            }}
                                            sx={{
                                                width: {
                                                    xs: "95%",   // スマホ
                                                    sm: "95%",   // タブレット
                                                    md: "60%",   // PC
                                                    lg: "60%",   // 大画面
                                                },
                                                backgroundColor: "transparent",
                                                boxShadow: "none"
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    marginBottom: "30px"
                                                }}
                                            >
                                                アクリル絵の具で作品を作っています。
                                            </Typography>

                                            {/******************************************* 
                                          *略歴
                                          *******************************************/}
                                            <Typography
                                                variant="h5"
                                            >
                                                経歴
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    marginTop: "5px",
                                                    marginBottom: "30px"
                                                }}
                                            >
                                                <TableContainer
                                                    sx={{
                                                        backgroundColor: "transparent",
                                                        boxShadow: "none",
                                                    }}
                                                    component={Paper}
                                                >
                                                    <Table
                                                        sx={{
                                                            borderCollapse: "collapse",
                                                            "& td, & th": {
                                                                padding: "4px 8px",   // ← ここで縦幅を調整
                                                                lineHeight: 1.2       // ← さらに詰めたい場合
                                                            }
                                                        }}
                                                    >
                                                        <TableBody>
                                                            {data.map((row, index) => (
                                                                <TableRow key={index} >
                                                                    <TableCell>{row.year}</TableCell>
                                                                    <TableCell>{row.detail}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Typography>

                                            {/******************************************* 
                                          * このサイトについて
                                          *******************************************/}
                                            <Typography
                                                variant="h5"
                                            >
                                                このサイトについて
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    marginTop: "5px",
                                                    marginBottom: "30px"
                                                }}

                                            >
                                                ホームページを作成するにあたり、使用した言語やフレームワーク、ライブラリは下記のとおりです。<br></br>
                                                （どこにでもあるようなものしか使っていません。）
                                                <TableContainer sx={{
                                                    backgroundColor: "transparent",
                                                    boxShadow: "none",
                                                }}
                                                    component={Paper}>
                                                    <Table
                                                        sx={{
                                                            marginTop: "10px",
                                                            borderCollapse: "collapse",
                                                            "& td, & th": {
                                                                padding: "4px 8px",   // ← ここで縦幅を調整
                                                                lineHeight: 1.2       // ← さらに詰めたい場合
                                                            }
                                                        }}
                                                    >
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>使用技術</TableCell>
                                                                <TableCell></TableCell>
                                                                <TableCell></TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow >
                                                                <TableCell rowSpan={3}>フロントエンド</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell >言語</TableCell>
                                                                <TableCell>HTML, CSS, TypeScript</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell>フレームワーク／ライブラリ</TableCell>
                                                                <TableCell>React, MUI(Material UI)</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell rowSpan={3}>バックエンド</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell >言語</TableCell>
                                                                <TableCell>Python</TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                <TableCell>フレームワーク／ライブラリ</TableCell>
                                                                <TableCell>FastAPI</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Typography>

                                            {/******************************************* 
                                              * news
                                              *******************************************/}
                                            <Typography
                                                variant="h5"
                                            >
                                                最近
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    marginTop: "15px",
                                                    marginBottom: "100px"
                                                }}
                                            >
                                                最近の展覧会の写真
                                                {/* なし */}
                                                <Paper
                                                    component="img"
                                                    src="about/2.jpg"
                                                    sx={{
                                                        width: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                />
                                            </Typography>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div >
                </ThemeProvider >
            </Background >
        </>
    );

}

export default About;