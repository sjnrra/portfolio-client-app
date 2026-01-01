/******************************************************************************
 * Contact.tsx
 *****************************************************************************/

/*************************************************
 * pre shori
 *************************************************/
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

// MUI
import { Box, Button, TextField, Snackbar, Alert, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';

// common
//  style
import Background from "components/pages/common/Background";
import customiseTypography from "components/pages/common/customize_typography";
//  model
import { contactModel } from "./ContactModel"

export const theme = customiseTypography

/*************************************************
 * React.FC Contact
 *************************************************/
const Contact: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [send, setSend] = useState(false);
    const [senderror, setSenderror] = useState(false);
    const handleSenderrorClose = () => { setSenderror(false); };
    const handleSendClose = () => { setSend(false); };
    const handleClose = () => { setOpen(false); };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    /***************************************************
     * リクエスト処理
     ***************************************************/
    const onSubmit = async (data: any) => {
        setSend(true);
        try {
            await sleep(2000);
            const result = await contactModel(data);

            setOpen(true);

        } catch (error: any) {
            setSenderror(true);

        } finally {
        }
    };

    /***************************************************
     * return
     ***************************************************/
    return (
        <>
            <Background>
                <ThemeProvider theme={theme}>
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
                            問い合わせの送信中です。しばらくお待ちください。
                        </Alert>
                    </Snackbar>

                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={() => setOpen(false)}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                            問い合わせの送信が完了しました！
                        </Alert>
                    </Snackbar>

                    <Snackbar
                        open={senderror}
                        autoHideDuration={5000}
                        onClose={() => setSenderror(false)}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert onClose={handleSenderrorClose} severity="error" sx={{ width: "100%" }}>
                            問い合わせの送信に失敗しました。<br></br>時間をおいて再度送信してください。
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
                        <Box
                            sx={{
                                width: '100%',
                                minHeight: '30vh',
                                margin: '30px auto',
                                bgcolor: "white",
                                display: "flex",
                                borderRadius: 3
                            }}
                        >
                            <Grid>
                                <Grid sx={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
                                    <Box sx={{ p: 3 }} >

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                marginBottom: "1rem"
                                            }}
                                        >
                                            問い合わせフォーム
                                        </Typography>

                                        {/*****************************************************
                                          * フォーム
                                          ******************************************************/}
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/*****************************************************
                                             * 名前
                                             ******************************************************/}
                                            <TextField
                                                {...register("name", { required: true })}
                                                error={!!errors.name}
                                                label="お名前"
                                                margin="normal"
                                                helperText={errors.name && "名前を入力してください。"}
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
                                                        xs: "60%",   // スマホ
                                                        sm: "60%",   // タブレット
                                                        md: "60%",   // PC
                                                        lg: "60%",   // 大画面
                                                    }
                                                }}
                                            />

                                            {/*****************************************************
                                             * メール
                                             ******************************************************/}
                                            <TextField
                                                {...register("email", { required: true })}
                                                error={!!errors.email}
                                                label="Eメール"
                                                type="email"
                                                margin="normal"
                                                helperText={errors.email && "メールを入力してください。"}
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
                                                    marginBottom: "1rem",
                                                    marginRight: "1rem",
                                                }}
                                                sx={{
                                                    width: {
                                                        xs: "60%",   // スマホ
                                                        sm: "60%",   // タブレット
                                                        md: "60%",   // PC
                                                        lg: "60%",   // 大画面
                                                    },
                                                    mb: 2
                                                }}
                                            />

                                            {/*****************************************************
                                             * お問い合わせ内容
                                             ******************************************************/}
                                            <TextField
                                                {...register("message", { required: true })}
                                                error={!!errors.message}
                                                label="お問い合わせ内容"
                                                multiline
                                                rows={6}
                                                fullWidth
                                                margin="normal"
                                                helperText={errors.message && "お問い合わせ内容を入力してください。"}
                                                style={{
                                                    display: "block",
                                                    marginBottom: "1rem",
                                                    marginRight: "1rem",
                                                }}
                                                sx={{
                                                    width: {
                                                        xs: "60%",   // スマホ
                                                        sm: "85%",   // タブレット
                                                        md: "100%",   // PC
                                                        lg: "100%",   // 大画面
                                                    },
                                                    mb: 2
                                                }}
                                            />

                                            {/*****************************************************
                                             * 送信ボタン
                                             ******************************************************/}
                                            <Button
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
                    </motion.div >
                </ThemeProvider >
            </Background>
        </>
    );
}
export default Contact;