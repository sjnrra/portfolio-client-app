import React from "react";

//css
import commonStyles from 'css/Common.module.css';
import styles from "css/About.module.css";

//mui
import { Grid, Paper } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles"
import { Box, Button, TextField, Typography } from "@mui/material";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    // Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import ColorLensIcon from '@mui/icons-material/ColorLens';

const data = [
    { year: "1996", detail: "愛媛県生まれ" },
    { year: "2013", detail: "第62回秋季愛媛県展 初入選" },
    { year: "2015", detail: "私立済美高等学校 美術科卒業" },
    { year: "2016", detail: "第70回記念二紀展 初入選（以降毎年入選）" },
    { year: "2019", detail: "広島大学 教育学部 第四類造形芸術系コース卒業" },
    { year: "2022", detail: "第15回記念春季二紀展 初出品(以降毎年出品)" },
    { year: "2022", detail: "第75回記念二紀展 奨励賞" },
    { year: "2025", detail: "第78回二紀展 準会員推挙" },
];
const data2 = [
    { year: "1996", detail: "愛媛県生まれ" },
    { year: "2013", detail: "第62回秋季愛媛県展 初入選" },
    { year: "2015", detail: "私立済美高等学校 美術科卒業" },
    { year: "2016", detail: "第70回記念二紀展 初入選（以降毎年入選）" },
    { year: "2019", detail: "広島大学 教育学部 第四類造形芸術系コース卒業" },
    { year: "2022", detail: "第15回記念春季二紀展 初出品(以降毎年出品)" },
    { year: "2022", detail: "第75回記念二紀展 奨励賞" },
    { year: "2025", detail: "第78回二紀展 準会員推挙" },
];

export const theme = createTheme({
    typography: {
        fontFamily: `"Meiryo", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,

        h1: { fontSize: 60 },
        h2: { fontSize: 48 },
        h3: { fontSize: 42 },
        h4: { fontSize: 36 },
        h5: { fontSize: 20 },
        h6: { fontSize: 18 },
        subtitle1: { fontSize: 18 },
        body1: { fontSize: 14 },
        button: { textTransform: 'none' },
    },
})

function About() {
    return (
        <>

            <ThemeProvider theme={theme}>
                <div className={commonStyles.background5}>

                    <motion.div
                        initial={{ opacity: 0 }}       // 初期状態（透明）
                        animate={{ opacity: 1 }}       // 表示時（不透明）
                        exit={{ opacity: 0 }}          // ページ離脱時（透明）
                        transition={{ duration: 0.5 }} // アニメーション時間
                    >
                        <div className={styles.box}>
                            <Box
                                sx={{
                                    width: '100vh',
                                    margin: '30px auto',
                                    display: "flex",
                                    bgcolor: "white",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 3
                                }}
                            >

                                <Grid container spacing={2} justifyContent="center">
                                    <Grid sx={{ xs: 12, md: 6 }}>

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
                                                    borderRadius: "50%", // ← 円形にする
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <Typography variant="h4">渡部 晋也 (Watanabe Shinya)</Typography>
                                        </Box>


                                        <Paper
                                            style={{
                                                margin: "1rem",
                                                marginBottom: "1rem",

                                            }}
                                            sx={{
                                                width: {
                                                    xs: "50%",   // スマホ
                                                    sm: "70%",   // タブレット
                                                    md: "100%",   // PC
                                                    lg: "100%",   // 大画面
                                                },
                                                backgroundColor: "transparent",
                                                boxShadow: "none"
                                            }}
                                        >

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    // marginTop: "5px",
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
                                                sx={{
                                                    display: "block",
                                                    position: "relative",
                                                    paddingBottom: "6px",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        left: 0,
                                                        bottom: 0,
                                                        width: "95%",
                                                        height: "2px",
                                                        backgroundColor: "#d8d8d8",
                                                    },
                                                }}
                                            >
                                                {/* <ColorLensIcon /> */}
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
                                                        height: "80%",
                                                        width: "80%"
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
                                                sx={{
                                                    display: "block",
                                                    position: "relative",
                                                    paddingBottom: "6px",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        left: 0,
                                                        bottom: 0,
                                                        width: "95%",
                                                        height: "2px",
                                                        backgroundColor: "#d8d8d8",
                                                    },
                                                }}
                                            >
                                                {/* <ColorLensIcon /> */}
                                                このサイトについて
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    marginTop: "5px",
                                                    marginBottom: "30px"
                                                }}
                                            >
                                                ホームページを作成するにあたり、使用した言語やフレームワーク、ライブラリは下記のとおりです。
                                                <TableContainer sx={{
                                                    backgroundColor: "transparent",
                                                    boxShadow: "none",
                                                    height: "80%",
                                                    width: "80%"
                                                }}
                                                    component={Paper}>
                                                    <Table
                                                        sx={{
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
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Typography>

                                            {/******************************************* 
                                              * news
                                              *******************************************/}
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    display: "block",
                                                    position: "relative",
                                                    paddingBottom: "6px",
                                                    "&::after": {
                                                        content: '""',
                                                        position: "absolute",
                                                        left: 0,
                                                        bottom: 0,
                                                        width: "95%",
                                                        height: "2px",
                                                        backgroundColor: "#d8d8d8",
                                                    },
                                                }}
                                            >
                                                {/* <ColorLensIcon /> */}
                                                最近
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    // margin:"30px",
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
                                                        width: '95%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                />
                                            </Typography>

                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </motion.div>
                </div>
            </ThemeProvider >

        </>
    );

}

export default About;