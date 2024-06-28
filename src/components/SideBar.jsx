import React from 'react';
import Toggels from './Toggels';

const SideBar = (props) => {

    const toggel = props.boxes.map((box => {
        return (
            <Toggels box={box} activeBoxes={props.activeBoxes} handelClicl={props.handelClicl} />
        )
    }))

    return (
        <aside>
            {toggel}
        </aside>
    );
}

export default SideBar;
