import React from 'react';

const Toggels = (props) => {
    return (

        <div className="toggle">
            <span>{props.box.title}</span>
            <label className="toggle-control">
                <input type="checkbox" checked={props.activeBoxes.includes(props.box.id)} />
                <span className="control" onClick={(e) => props.handelClicl(props.box.id)}></span>
            </label>
        </div>

    );
}

export default Toggels;
