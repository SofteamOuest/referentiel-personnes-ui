import React from 'react';
import {RefreshIndicator} from "material-ui";

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

const Loading = () =>
    <div style={style.container}>
        <RefreshIndicator
            size={50}
            left={70}
            top={0}
            loadingColor="#FF9800"
            status="loading"
            style={style.refresh}
        />
    </div>;

export default Loading;