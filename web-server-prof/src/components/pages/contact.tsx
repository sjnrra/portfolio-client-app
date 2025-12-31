// import React from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import commonStyles from 'css/Common.module.css';
import styles from "css/Contact.module.css";
import { Snackbar, Alert } from "@mui/material";

import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, Paper, Typography } from '@mui/material';
import { motion } from "framer-motion";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles"

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

function Contact() {
    const [open, setOpen] = useState(false);
    const [send, setSend] = useState(false);
    const handleSendClose = () => { setSend(false); };
    const handleClose = () => { setOpen(false); };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    /***************************************************
     * リクエスト処理
     ***************************************************/
    const onSubmit = async (data: any) => {
        setSend(true);
        // console.log("送信データ:", data);
        const res = await fetch("http://localhost:8000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        setOpen(true);
        // console.log("バックエンドからの返答:", result);
    };

    /***************************************************
     * return
     ***************************************************/
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={commonStyles.background5}>

                {/****************************************************
                  * ポップアップ通知 
                  ****************************************************/}
                    <Snackbar
                        open={send}
                        autoHideDuration={3000}
                        onClose={() => setSend(false)}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert onClose={handleSendClose} severity="success" sx={{ width: "100%" }}>
                            送信中
                        </Alert>
                    </Snackbar>

                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                            送信が完了しました！
                        </Alert>
                    </Snackbar>

                {/****************************************************
                  * 問い合わせフォーム
                  ****************************************************/}
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
                                    margin: '20px auto',
                                    bgcolor: "white",
                                    display: "flex",
                                    alignItems: "left",
                                    justifyContent: "left",
                                    borderRadius: 3
                                }}
                            >
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid sx={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
                                        <Box sx={{ p: 3 }}>

                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    marginBottom: "1rem"
                                                }}
                                            >問い合わせフォーム</Typography>

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {/* 名前 */}
                                                <TextField
                                                    {...register("name", { required: true })}
                                                    error={!!errors.nameRequired}
                                                    label="お名前"
                                                    // fullWidth
                                                    margin="normal"
                                                    helperText={errors.nameRequired && "名前を入力してください。"}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <AccountCircle />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                    style={{
                                                        marginBottom: "1rem",
                                                        marginRight: "1rem",
                                                    }}
                                                    sx={{
                                                        width: {
                                                            xs: "90%",   // スマホ
                                                            sm: "70%",   // タブレット
                                                            md: "50%",   // PC
                                                            lg: "40%",   // 大画面
                                                        },
                                                        mb: 2
                                                    }}
                                                />

                                                {/* メール */}
                                                <TextField
                                                    {...register("email", { required: true })}
                                                    error={!!errors.emailRequired}
                                                    label="Eメール"
                                                    type="email"
                                                    margin="normal"
                                                    helperText={errors.emailRequired && "メールを入力してください。"}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <EmailIcon />
                                                                </InputAdornment>
                                                            ),
                                                        },
                                                    }}
                                                    style={{
                                                        // width: "90vh",
                                                        marginBottom: "1rem",
                                                        marginRight: "1rem",
                                                        // display:"block"
                                                    }}
                                                    sx={{
                                                        width: {
                                                            xs: "90%",   // スマホ
                                                            sm: "70%",   // タブレット
                                                            md: "50%",   // PC
                                                            lg: "40%",   // 大画面
                                                        },
                                                        mb: 2
                                                    }}
                                                />

                                                {/* お問い合わせ内容 */}
                                                <TextField
                                                    {...register("message", { required: true })}
                                                    error={!!errors.messageRequired}
                                                    label="お問い合わせ内容"
                                                    multiline
                                                    rows={6}
                                                    fullWidth
                                                    margin="normal"
                                                    helperText={errors.messageRequired && "お問い合わせ内容を入力してください。"}
                                                    style={{
                                                        marginBottom: "1rem",
                                                        marginRight: "1rem",
                                                    }}
                                                />

                                                {/* 送信ボタン */}
                                                <Button
                                                    // onClick={handleClick}
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    sx={{ mt: 2 }}
                                                >
                                                    送信
                                                </Button>
                                            </form>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </motion.div >
                </div>
            </ThemeProvider>
        </>
    );

}

export default Contact;