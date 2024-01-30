/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { mainImage } from "../images/images";
import Textarea from "./Textarea";

const wrapperStyle = css`
    background-image: url(${mainImage});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

function MainImage() {
    return (
        <div css={wrapperStyle}>
            <Textarea />
        </div>
    );
}

export default MainImage;
