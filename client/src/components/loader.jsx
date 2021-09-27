import React from 'react';

function loader(){
    return(
        <div className="page-loader-wrapper">
        <div className="loader">
            <div className="m-t-30"><img className="zmdi-hc-spin" src="assets/images/loader.svg" width="48" height="48" alt="Aero" /></div>
            <p>Please wait...</p>
        </div>
    </div>
    )
}
export default loader;