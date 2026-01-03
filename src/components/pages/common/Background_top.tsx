import { Box } from "@mui/material";
// import React from "react";
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
    `${process.env.PUBLIC_URL}/image/top3.jpg`,
    `${process.env.PUBLIC_URL}/image/top10.jpg`,
    `${process.env.PUBLIC_URL}/image/top11.jpg`,
    `${process.env.PUBLIC_URL}/image/top5.jpg`,
    `${process.env.PUBLIC_URL}/image/top6.jpg`
];

export const Background: React.FC<BackgroundProps> = ({ children }) => {
    const [index, setIndex] = useState(0);

    /******************************************
     * 背景事前ロード 
     ******************************************/
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4秒ごとに切り替え

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 1.5s ease-in-out", // フェード効果
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </Box>
    );
};
export default Background;