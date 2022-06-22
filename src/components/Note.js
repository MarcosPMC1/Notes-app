import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

const Note = ({id, text, date}) => {
    return(
        <div className="note">
            <span>{text}</span>
            <div className="note--footer">
                <small>{date}</small>
                <AiFillDelete className='delete-icon' size='1rem' />
            </div>
        </div>
    )
}

export default Note;