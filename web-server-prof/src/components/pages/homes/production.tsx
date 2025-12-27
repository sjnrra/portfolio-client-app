import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import 'css/common.css';

function Production() {
    return (
        <>
            <div className="background"></div>
            <div className="top-pop1">
                <div className="top-pop2">
                    <p>■略歴</p>
                    <ul>
                        <li>1996 愛媛県生まれ</li>
                        <li>2013 第62回秋季愛媛県展 初入選</li>
                        <li>2016 第70回記念二紀展 初入選（以降毎年出品）</li>
                        <li>2019 広島大学 教育学部 第四類造形芸術系コース卒業</li>
                        <li>2022 第15回記念春季二紀展 初出品(以降毎年出品)</li>
                        <li>2022 第75回記念二紀展 奨励賞</li>
                        <li>2025 第78回二紀展 準会員推挙</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Production;
