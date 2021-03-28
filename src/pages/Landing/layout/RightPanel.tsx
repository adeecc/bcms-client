import React from 'react'

interface Props {
    gridStyle: string;
}

const RightPanel = (props: Props) => {
    return (
        <div className={props.gridStyle}>
            {/* <h1 className="text-button">Fuck</h1> */}
        </div>
    )
}

export default RightPanel
