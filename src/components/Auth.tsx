import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Auth = ({ children }) => {
    const [isLogin, setLogin] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setLogin(liff.isLoggedIn());
    }, []);

    if (isLogin) {
        return children;
    }

    if (isLogin === false) {
        if (!liff.isInClient()) {
            return <div>LINEでこのアプリを開いてください</div>
        }
        return <div>ログインできませんでした。もう一度やり直してください</div>
    }

    return <Loading />
}

export default Auth;
