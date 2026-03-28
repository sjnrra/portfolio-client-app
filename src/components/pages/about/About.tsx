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
import customiseTypography from "components/pages/common/Customize_mui_typography";
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
                        <Grid
                            container
                            alignItems="center" // 縦中央
                            justifyContent="center"
                            sx={{
                                paddingTop: "50px",
                                paddingBottom: "30px",
                                minHeight: "100vh"
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    bgcolor: "white",
                                    width: {
                                        padding: "20px",
                                        xs: "90%",   // スマホ
                                        sm: "80%",   // タブレット
                                        md: "70%",   // PC
                                        lg: "50%",   // 大画面
                                    }
                                }}
                            >
                                {/******************************************* 
                                  名前 
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
                                        src={process.env.PUBLIC_URL + "/" + "image/top1.jpg"}
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
                                            xs: "97%",   // スマホ
                                            sm: "97%",   // タブレット
                                            md: "97%",   // PC
                                            lg: "97%",   // 大画面
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
                                       略歴
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
                                       このサイトについて
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
                                       news
                                     *******************************************/}
                                    <Typography variant="h5">
                                        最近
                                    </Typography>
                                    <Typography
                                    >
                                        最近の展覧会の写真
                                    </Typography>
                                    <Paper
                                        component="img"
                                        src={process.env.PUBLIC_URL + "/" + "about/2.jpg"}
                                        sx={{
                                            width: '100%',
                                        }}
                                    />
                                </Paper>

                                <Typography
                                    sx={{
                                        marginBottom: "10px"
                                    }}
                                ></Typography>

                            </Box>
                        </Grid>
                    </motion.div >
                </ThemeProvider >
            </Background >
        </>
    );

}

export default About;