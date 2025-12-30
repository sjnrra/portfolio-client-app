import React from "react";
import { motion } from "framer-motion";
import commonStyles from 'css/Common.module.css';

function Contact() {
    return(
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <div className={commonStyles.background4}></div>
            </motion.div>
        </>
    )
}

export default Contact;
