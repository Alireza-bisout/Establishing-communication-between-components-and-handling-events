import React from 'react';
import Box from './box';

const Boxes = (props) => {

    const boxes = props.boxes.map(box => {
        if (props.activeBoxes.includes(box.id)) {
            return <Box box={box} />
        }
    })

    return (
        <div className="box-wrapper">
            {boxes}
        </div>
    );
}

export default Boxes;
