import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const Layout = ({ children }) => {
    const theme = useContext(ThemeContext);
    console.log(children);
    return <div className={`App ${theme}`}> {children}</div>

}

export default Layout;