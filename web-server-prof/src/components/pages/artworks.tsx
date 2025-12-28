/******************************************************************************
 * artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import commonStyles from 'css/common.module.css';
import styles from "css/artworks.module.css";

/*************************************************
 * artworks
 *************************************************/
function artworks() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <div className={commonStyles.background1}></div>

                <div className={styles.box}>
                <div className={styles.description}>
                    {/* <p>今まで作った作品たち</p> */}
                </div>
                <div className={styles.imageBox}>
                    <table>
                        <tr>
                            <th><img src="image/top1.jpg" /></th>
                            <th><img src="image/top2.jpg" /></th>
                            <th><img src="image/top3.jpg" /></th>
                        </tr>
                        <tr>
                            <td><img src="image/top4.jpg" /></td>
                            <td><img src="image/top5.jpg" /></td>
                            <td><img src="image/top6.jpg" /></td>
                        </tr>
                        <tr>
                            <td><img src="image/top7.jpg" /></td>
                            <td><img src="image/top8.jpg" /></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                </div>



            </motion.div>
        </>
    )
}

export default artworks;
