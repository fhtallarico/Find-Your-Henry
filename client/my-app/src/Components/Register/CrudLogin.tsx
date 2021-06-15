import React, { useState } from 'react';
import RecruiterLogin from './CrudRecruiter/RecruiterLogin';
import StudentsLogin from './CrudStudent/StudentsLogin';

const CrudLogin: React.FC = () => {
    const [form, setForm] = useState('recruiter');

    return (
        <div>
            <div className="flex flex-row justify-center max-w-sm mt-10 mb-0 mr-auto ml-auto dark:bg-gray-800 overflow-hidden lg:max-w-2xl">
                <button
                    className="bg-grayHenry text-white py-4 px-4 w-full tracking-wide rounded-tl-lg hover:bg-gray-600 focus:outline-none focus:bg-yellow_henry focus:text-black active:bg-yellow_henry"
                    name="recruiter"
                    onClick={(e) => {
                        setForm((e.target as HTMLInputElement).name);
                    }}>
                    Recruiter
                </button>
                <button
                    className="bg-grayHenry text-white py-4 px-4 w-full tracking-wide rounded-tr-lg hover:bg-gray-600 focus:outline-none focus:bg-yellow_henry focus:text-black active:bg-yellow_henry"
                    name="student"
                    onClick={(e) => {
                        setForm((e.target as HTMLInputElement).name);
                    }}>
                    {`Henry's`}
                </button>
            </div>

            {form === 'recruiter' ? (
                <div>
                    <RecruiterLogin />
                </div>
            ) : (
                <div>
                    <StudentsLogin />
                </div>
            )}
        </div>
    );
};

export default CrudLogin;
