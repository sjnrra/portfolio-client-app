/******************************************************************************
 * Top.tsx
 *****************************************************************************/

/*************************************************
 * import
 *************************************************/
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// css
import 'css/top.css';

// @mui
import Typography from '@mui/material/Typography';

/*************************************************
 * Top
 *************************************************/
function Top() {
    return (
        <>
            <div className="point">
            <div className="box">
                <div className="bgImg src1"></div>
                <div className="bgImg src2"></div>
                <div className="bgImg src3"></div>
                <div className="bgImg src4"></div>
            </div>
            </div>
            <div className="top-pop1">
                <div className="top-pop2">
                    <Typography>
                        <h1 className="top-pop2-name1">Watanabe Shinya</h1>
                        <h2 className="top-pop2-name2">渡部 晋也 作品集</h2>
                    </Typography>
                </div>
                <div className="top-pop3">
                    <Typography>
                        <p className="top-info">information</p>
                        <p>hogehoge</p>
                        <p>hogehoge</p>
                        <p>hogehoge</p>
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default Top;
