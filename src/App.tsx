/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import FirstImage from "./components/FirstImage";
import MainImage from "./components/MainImage";

const wrapperStyle = css`
    width: 100%;
    height: 100%;
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
            {!isChangeComponent ? <FirstImage /> : <MainImage />}
        </div>
    );
}

export default App;
