import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '100%',
    }
});

const FooterMenu = () => {
    const [value, setValue] = useState('/');

    const router = useRouter();

    const classes = useStyle();

    useEffect(() => {
        setValue(router.pathname);
    }, [router.pathname]);

    const handleChange = async (event, newValue) => {
        await router.push(newValue);
    };

    return (
        <BottomNavigation
            className={classes.root}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction label="ホーム" value="/" icon={<HomeIcon />} />
            <BottomNavigationAction label="グループ" value="/groups" icon={<GroupIcon />} />
            <BottomNavigationAction label="設定" value="/settings" icon={<SettingsIcon />} />
        </BottomNavigation>
    );
};

export default FooterMenu;
