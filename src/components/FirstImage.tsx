/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { firstImage } from "../images/images";

const wrapperStyle = css`
    width: 100vw;
    height: 100vh;
    background-image: url(${firstImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

function FirstImage() {
    return <div css={wrapperStyle}></div>;
}

export default FirstImage;
