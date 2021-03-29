import React from 'react'

interface Props {
    gridStyle: string;
}

const RightPanel = (props: Props) => {
    return (
        <div className={props.gridStyle}>
            {/* Add Gallery of Courses: Card Style flex-row for small screens, flex col for larger */}
        </div>
    )
}

export default RightPanel
