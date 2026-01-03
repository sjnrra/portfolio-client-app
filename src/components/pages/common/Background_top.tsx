import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

type BackgroundProps = {
    children: React.ReactNode;
    width?: string | number;
    bgcolor?: string;
    padding?: number | string;
    borderRadius?: number | string;
};

const images = [
    `${process.env.PUBLIC_URL}/image/top1.jpg`,
    `${process.env.PUBLIC_URL}/image/top2.jpg`,
    // `${process.env.PUBLIC_URL}/image/top3.jpg`,
    `${process.env.PUBLIC_URL}/image/top10.jpg`,
    `${process.env.PUBLIC_URL}/image/top11.jpg`,
    // `${process.env.PUBLIC_URL}/image/top5.jpg`,
    `${process.env.PUBLIC_URL}/image/top6.jpg`
];

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    /******************************************
     * 背景事前ロード 
     ******************************************/
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    /******************************************
     * 背景切替＆フェード
     ******************************************/
    useEffect(() => {
        const interval = setInterval(() => {
            //フェードアウト
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                //フェードイン
                setFade(true);
            }, 800);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                inset: 0,
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                transition: "opacity 1s ease-in-out",
                opacity: fade ? 1 : 0,
            }}
        >
            {children}
        </Box>
    );
};
export default Background;