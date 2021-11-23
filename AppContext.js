import React, { useState } from "react";
const AppContext = React.createContext({});
export const AppContextProvider = (props) => {
    const [openMenu, setOpenMenu] = useState({bool: false, type: ""});
    const [isFocusOpen, setIsFocusOpen] = useState({bool: false, text: ""});
    const value = { openMenu, setOpenMenu, isFocusOpen, setIsFocusOpen };
    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
};
export default AppContext;
