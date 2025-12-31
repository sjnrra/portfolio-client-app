import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import commonStyles from 'css/Common.module.css';
import styles from "css/Contact.module.css";

import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, Paper } from '@mui/material';
import { motion } from "framer-motion";

function App() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <div className={commonStyles.background5}>

                <motion.div
                    initial={{ opacity: 0 }}       // 初期状態（透明）
                    animate={{ opacity: 1 }}       // 表示時（不透明）
                    exit={{ opacity: 0 }}          // ページ離脱時（透明）
                    transition={{ duration: 0.5 }} // アニメーション時間
                >
                    {/* </div> */}
                    <div className={styles.box}>
                        <Box
                            sx={{
                                width: '100vh',
                                margin: '20px auto',
                                bgcolor: "white",
                                color: "white",
                                display: "flex",
                                alignItems: "left",
                                justifyContent: "left",
                                borderRadius: 3
                            }}
                        >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid sx={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
                                    <Box sx={{ p: 3 }}>
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* 名前 */}
                                            <TextField
                                                {...register("nameRequired", { required: true })}
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

                                            {/* メール */}
                                            <TextField
                                                {...register("emailRequired", { required: true })}
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
                                                {...register("detailRequired", { required: true })}
                                                error={!!errors.detailRequired}
                                                label="お問い合わせ内容"
                                                multiline
                                                rows={6}
                                                fullWidth
                                                margin="normal"
                                                helperText={errors.detailRequired && "お問い合わせ内容を入力してください。"}
                                                style={{
                                                    // width: "90vh",
                                                    marginBottom: "1rem",
                                                    marginRight: "1rem",
                                                    // display:"block"
                                                }}
                                            />

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
                    </div>
                </motion.div >
            </div>

        </>
    );

}

export default App;