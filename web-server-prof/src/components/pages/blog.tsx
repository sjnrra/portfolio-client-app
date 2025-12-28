import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import commonStyles from 'css/common.module.css';

function Blog() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <div className={commonStyles.background5}>

                </div>
            </motion.div>
        </>
    )
}

export default Blog;
