import React, {Fragment} from 'react';
import Toolbar from "../Toolbar/Toolbar";

const Layout = ({children}) => {
    return (
       <Fragment>
           <Toolbar/>
           <main className="Layout-Content">
               {children}
           </main>
       </Fragment>
    );
};

export default Layout;