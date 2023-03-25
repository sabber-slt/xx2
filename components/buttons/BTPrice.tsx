import React from "react";
import ContainerGrid from "../containers/ContainerGrid";
import { plans } from "@/plan";

const BTPrice = () => {
    return (
        <ContainerGrid gridCols="grid-cols-2 lg:grid-cols-3">
            {plans.map((item) => (
                <button
                    key={item.id}
                    className={`w-40 lg:w-64 h-52 lg:h-72 bg-white vstack items-center justify-center rounded-lg shadow-xl hov overflow-hidden`}
                >
                    <h3 className="h-10 font-bold mt-2">{item.title}</h3>
                    <div className="w-full h-36 center">
                        <p className="text-sm text-center px-2">
                            {item.content}
                        </p>
                    </div>
                    <div className="w-full h-14 hstack justify-center bg-green-700 text-white text-sm">
                        <p>{item.price}</p>
                        <p className="text-xs mr-2">تومان</p>
                    </div>
                </button>
            ))}
        </ContainerGrid>
    );
};

export default BTPrice;
