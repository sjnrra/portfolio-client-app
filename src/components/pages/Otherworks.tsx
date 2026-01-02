/******************************************************************************
 * Otherworks.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { motion } from "framer-motion";
import { Box, Grid, Paper } from '@mui/material';
import Background from "components/pages/common/Background";

/*************************************************
 * React.FC Otherworks
 *************************************************/
const Otherworks: React.FC = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <Background >
                    <h1>工事中</h1>
                </Background>
            </motion.div>
        </>
    )
}

export default Otherworks;
