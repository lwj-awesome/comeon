/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { mainImage } from "../images/images";
import Textarea from "./Textarea";

const wrapperStyle = css`
    width: 100vw;
    height: 100vh;
    background-image: url(${mainImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const textAreaWrapperStyle = css`
    z-index: 99;
    width: 100vw;
    height: 100vh;
    display: flex;
`;
function MainImage() {
    return (
        <div css={[wrapperStyle]}>
            <div css={textAreaWrapperStyle}>
                <Textarea />
            </div>
        </div>
    );
}

export default MainImage;
