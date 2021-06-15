import React from 'react';

interface Feature {
    img: string;
    text: string;
}

const Features: React.FC<Feature> = ({ img, text }) => {
    return (
        <div>
            <div className="flex justify-center items-center p-8 w-auto overflow-hidden mx-auto">
                <div
                    className="relative flex flex-col items-center justify-around p-4 mr-4 w-auto h-auto rounded-2xl "
                    style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
                    <div
                        className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-yellow-400 rounded-xl -rotate-2 "
                        style={{ zIndex: -1 }}></div>
                    <div
                        className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-yellow_henry rounded-xl rotate-2 "
                        style={{ zIndex: -1 }}></div>
                    <div
                        className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gradient-to-br from-grayHenry to-gray-400 rounded-xl "
                        style={{ zIndex: -1 }}></div>
                    <h3 className="z-10 p-2 text-2xl font-semibold text-white">
                        {text}
                    </h3>
                    <div className="z-10 p-2 ">
                        <img src={img} alt="img" />
                    </div>
                    <div className="z-10 p-2 text-sm text-center text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit enim totam possimus rem. Totam, quis!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
