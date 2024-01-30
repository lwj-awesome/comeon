/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import { firstImage, mainImage } from "./images/images";
import FirstImage from "./components/FirstImage";
import MainImage from "./components/MainImage";

const wrapperStyle = css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

function App() {
    const [isChangeComponent, setIsChangeComponent] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsChangeComponent(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div css={wrapperStyle}>
            <div>{!isChangeComponent ? <FirstImage /> : <MainImage />}</div>
        </div>
    );
}

export default App;
