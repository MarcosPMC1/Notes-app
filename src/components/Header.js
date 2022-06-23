import React from "react";

const Header = ({handleDarkMode}) => {
    return(
        <div>
            <h1>Notes</h1>
            <button 
                onClick={() => 
                    handleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className="btn--dm">Dark Mode</button>
        </div>
    )
}

export default Header