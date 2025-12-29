/******************************************************************************
 * artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState, ReactNode, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

//app
import Modal from "./ArtworksModal";

//css
import commonStyles from 'css/Common.module.css';
import styles from "css/Artworks.module.css";

/*************************************************
 * artworks
 *************************************************/
const Artworks: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPicuteName, setPictureName] = useState<string>("");


    /**************************************************
     * モーダルウインドウ表示中はスクロール禁止
     **************************************************/
    if (isModalOpen) {
        document.body.style.overflow = "hidden"; // スクロール禁止 
    } else {
        document.body.style.overflow = "auto"; // 元に戻す 
    }

    /************************************************** 
     * return
     **************************************************/
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                
                <div style={{ padding: "20px" }}>
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} name={isPicuteName}>
                        {/* <h2>モーダルタイトル</h2>
                    <p>ここにモーダルの内容を入れます。</p> */}
                        <button onClick={() => setModalOpen(false)}>閉じる</button>
                    </Modal>
                </div>
            </motion.div>

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
                                <th><img className={styles.artimage} src="image/top1.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top1.jpg"); }} /></th>
                                <th><img className={styles.artimage} src="image/top2.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top2.jpg"); }} /></th>
                                <th><img className={styles.artimage} src="image/top3.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top3.jpg"); }} /></th>
                            </tr>
                            <tr>
                                <th><img className={styles.artimage} src="image/top4.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top4.jpg"); }} /></th>
                                <th><img className={styles.artimage} src="image/top5.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top5.jpg"); }} /></th>
                                <th><img className={styles.artimage} src="image/top6.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top6.jpg"); }} /></th>
                            </tr>
                            <tr>
                                <th><img className={styles.artimage} src="image/top7.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top7.jpg"); }} /></th>
                                <th><img className={styles.artimage} src="image/top8.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top8.jpg"); }} /></th>
                                {/* <th><img className={styles.artimage} src="image/top10.jpg" alt="test" onClick={() => { setModalOpen(true); setPictureName("image/top10.jpg"); }} /></th> */}
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Artworks;
