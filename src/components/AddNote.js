import React from "react"

const AddNote = () => {
    return(
        <div className="note new">
            <textarea cols="10" rows="8" placeholder="Digite para adiconar nova nota... "></textarea>
            <div className="note--footer">
                <small>200 remaing</small>
                <button className="btn--save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;