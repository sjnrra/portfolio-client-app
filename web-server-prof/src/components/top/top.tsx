/******************************************************************************
 * Top.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState } from "react";
// css
import styles from "css/Top.module.css";
// @mui
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";

/*************************************************
 * Top
 *************************************************/

function Top() {
    const [file, setFile] = useState(null);
    return (
        <>
            <div className={styles.point}>
                <div className={styles.box}>
                    <div className={`${styles.bgImg} ${styles.src1}`}></div>
                    <div className={`${styles.bgImg} ${styles.src2}`}></div>
                    <div className={`${styles.bgImg} ${styles.src3}`}></div>
                    <div className={`${styles.bgImg} ${styles.src4}`}></div>
                    <div className={`${styles.bgImg} ${styles.src5}`}></div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.7 }} // アニメーション時間
            >
                <div className={styles.top_pop1}>
                    <div className={styles.top_pop2}>
                        <Typography>
                            <h1 className={styles.top_pop2_name1}>Watanabe Shinya</h1>
                            <h2 className={styles.top_pop2_name2}>渡部 晋也 作品集</h2>
                        </Typography>
                    </div>
                    <div className={styles.top_pop3}>
                        <Typography>
                            <p className={styles.top_info}>information</p>
                            <p className={styles.top_info_data}>2025/12/28　　新規作成</p>
                        </Typography>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Top;
