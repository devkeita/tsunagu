import React from "react";
import Liff from "../components/Liff";
import Auth from "../components/Auth";
import FooterMenu from "../components/FooterMenu";

const App = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Liff>
                <Auth>
                    <Component {...pageProps} />
                </Auth>
            </Liff>
            <FooterMenu />
        </React.Fragment>
    );
};

export default App;
