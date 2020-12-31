import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Auth = ({ children }) => {
    const [isLogin, setLogin] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setLogin(liff.isLoggedIn());
    }, []);

    if (isLogin || process.env.NODE_ENV !== "production") {
        return children;
    }

    if (isLogin === false) {
        liff.login();
    }

    return <Loading />
}

export default Auth;
