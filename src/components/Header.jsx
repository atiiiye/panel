import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
// import { GlobalNavButton } from '@fluentui/react-icons-mdl2';
// import { Icon } from '@fluentui/react/lib/Icon';


const Header = () => {
    return (
        <div style={{ background: "#0078D4", height: "50px", width: "100%", position: "fixed", top: "0" }}>
            <i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i>
        </div>
    );
}

export default Header;