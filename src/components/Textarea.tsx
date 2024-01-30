/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import { Image_InputField, Image_IconSend } from "../images/images";

const imageWrapperStyle = css`
    .image-container {
        top: 25%;
        left: 10%;
        position: relative;
        display: inline-block;
    }
    .input-image {
        width: 80%;
        height: 80%;
        display: block;
    }
    .send-icon-message {
        display: flex;
        flex-direction: row;
        gap: 10px;
        position: absolute;
        width: 100%;
        z-index: 9;
        top: 6%;
        left: 4%;
        height: auto;
        .send-message {
            font-size: 2.6rem;
            font-weight: 200;
        }
    }

    .text-area {
        position: absolute;
        top: 60%;
        left: 40%;
        transform: translate(-50%, -50%);
        resize: none;
        width: 70%;
        height: 70%;
        outline: none;
    }
`;

const placeholder = `전송할 메시지를 입력해주세요 \n(15자 이내)`;
const Textarea = () => {
    return (
        <div css={imageWrapperStyle}>
            <div className="image-container">
                <img
                    src={Image_InputField}
                    alt="Your Image"
                    className="input-image"
                />
                <div className="send-icon-message">
                    <img src={Image_IconSend} alt="Your Image" />
                    <span className="send-message">MESSAGE</span>
                </div>
                <textarea
                    maxLength={15}
                    className="text-area"
                    placeholder={placeholder}></textarea>
            </div>
        </div>
    );
};

export default Textarea;
