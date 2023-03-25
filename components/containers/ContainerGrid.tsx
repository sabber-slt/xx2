import React from "react";

type Props = {
    children: React.ReactNode;
    gridCols: string;
};

const ContainerGrid = (props: Props) => {
    return (
        <div
            className={`w-fit grid ${props.gridCols} gap-3 lg:gap-10 items-center justify-center`}
        >
            {props.children}
        </div>
    );
};

export default ContainerGrid;
