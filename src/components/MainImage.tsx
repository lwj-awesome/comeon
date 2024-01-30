/** @jsxImportSource @emotion/react */

import React from "react";
import { css, keyframes } from "@emotion/react";
import { mainImage } from "../images/images";

const wrapperStyle = css`
    width: 100vw;
    height: 100vh;
    background-image: url(${mainImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

function MainImage() {
    return <div css={[wrapperStyle]}></div>;
}

export default MainImage;
