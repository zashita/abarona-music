import React from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "@/store";
import MainLayout from "@/layouts/MainLayout";

class MyApp extends React.Component<AppProps> {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>

    )
    }
}

export default wrapper.withRedux(MyApp);
