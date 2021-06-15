import React from 'react';

const AboutCompany: React.FC = () => {
    return (
        <div className="bg-yellow_henry rounded-lg">
            <div className="mt-5 max-w-xl md:mx-auto sm:text-center lg:max-w-xl md:mb-5">
                <h2 className="pt-5 max-w-lg font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl md:mx-auto">
                    Sobre Nosotros
                </h2>
            </div>
            <div className="grid max-w-screen-lg gap-5 lg:grid-cols-2 sm:mx-auto">
                <div className="grid grid-cols-2 gap-2 ml-5 mb-5">
                    <img
                        className="object-cover w-full h-48 col-span-2 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-44 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-44 rounded shadow-lg"
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="pb-4 pt-4 mr-4 mb-4 border-b border-t border-grayHenry">
                        <h6 className="mb-2 font-semibold leading-5">
                            Sit error voluptatem accusantium
                        </h6>
                        <p className="text-sm text-gray-900">
                            Sportacus andrew weatherall goose Refined gentlemen
                            super mario des lynam alpha trion zap rowsdower,
                            omar sharif old.
                        </p>
                        <p className="text-sm text-gray-900">
                            Sportacus andrew weatherall goose Refined gentlemen
                            super mario des lynam alpha trion zap rowsdower,
                            omar sharif old.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
