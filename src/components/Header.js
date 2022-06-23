import React from "react";
import {MdDarkMode} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'

const Header = ({handleDarkMode}) => {
    return(
        <div className="header">
            <a href="https://marcoscardoso-dev.netlify.app" className="link--home"><AiFillHome size='2rem'/></a>
            <h1>Notes</h1>
            <button 
                onClick={() => 
                    handleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="btn--dm"><MdDarkMode size='2rem'/></button>
        </div>
    )
}

export default Header