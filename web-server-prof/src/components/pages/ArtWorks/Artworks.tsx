/******************************************************************************
 * Artworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React, { useState, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

//app
import Modal from "./ArtworksModal";
import { ArtItemDao } from "./ArtItemDao";

//css
import commonStyles from 'css/Common.module.css';
import styles from "css/Artworks.module.css";

//json
import rawData from "data/artimage.json";

const Data = rawData as Record<string, ArtItemDao>;

/*************************************************
 * artworks
 *************************************************/
const Artworks: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPicuteName, setPictureName] = useState<string>("");
    const [isCdNo, setCdNo] = useState<string>("");
    const keys = Object.keys(Data);

    const chunk = (arr: string[], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    const rows = chunk(keys, 3); // ← 3件ずつ分割

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
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        name={isPicuteName}
                        cdno={isCdNo}
                    >
                        <button onClick={() => setModalOpen(false)}>閉じる</button>
                        <h1>{isCdNo}</h1>
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
                    <div>
                        <div>
                            <p className={styles.description}>今まで作った作品たち</p>
                        </div>
                        <table>
                            <tbody>
                                {rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cdNo) => {
                                            const item = Data[cdNo];
                                            return (
                                                <td key={cdNo} style={{ padding: "10px", textAlign: "center" }}>
                                                    <img className={styles.artimage}
                                                        src={item.src}
                                                        onClick={() => {
                                                            setModalOpen(true);
                                                            setPictureName(item.src);
                                                            setCdNo(cdNo);
                                                        }}></img>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Artworks;
