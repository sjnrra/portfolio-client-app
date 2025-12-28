/******************************************************************************
 * about.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import commonStyles from 'css/common.module.css';
import { motion } from "framer-motion";

/*************************************************
 * about
 *************************************************/
function About() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}       // 初期状態（透明）
                animate={{ opacity: 1 }}       // 表示時（不透明）
                exit={{ opacity: 0 }}          // ページ離脱時（透明）
                transition={{ duration: 0.5 }} // アニメーション時間
            >
                <div className={commonStyles.background2}></div>
                <div className={commonStyles.top_pop1}>
                    <div className={commonStyles.top_pop2}>
                        <p>■略歴</p>
                        <ul>
                            <li>1996 愛媛県生まれ</li>
                            <li>2013 第62回秋季愛媛県展 初入選</li>
                            <li>2015 私立済美高等学校 美術科卒業</li>
                            <li>2016 第70回記念二紀展 初入選（以降毎年入選）</li>
                            <li>2019 広島大学 教育学部 第四類造形芸術系コース卒業</li>
                            <li>2022 第15回記念春季二紀展 初出品(以降毎年出品)</li>
                            <li>2022 第75回記念二紀展 奨励賞</li>
                            <li>2025 第78回二紀展 準会員推挙</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About;
