import React from 'react';
//import { Recruiter } from '../../types/Recruiters';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from '../LogoHenry/logo.png';
import { useQuery, useMutation, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

const LOGIN_ALUMNO = gql`
    mutation login($password: String!, $email: String!) {
        loginAlumno(email: $email, password: $password) {
            token
        }
    }
`;
const StudentsLogin: React.FC = () => {
    const history = useHistory();
    const [loginAlumno] = useMutation(LOGIN_ALUMNO);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('The email is not valid')
                .required('The email is required'),
            password: Yup.string()
                .required('The password cannot be empty')
                .min(6, 'The password must be at least 6 characters long')
        }),
        onSubmit: async (valores, { resetForm }) => {
            console.log('enviando');
            console.log(valores);
            const { email, password } = valores;
            try {
                const { data } = await loginAlumno({
                    variables: {
                        email,
                        password
                    }
                });
                const token = data.loginAlumno.token;
                localStorage.setItem('token', token);
                toast.success('Alumno Logueado');
            } catch (error) {
                console.log(error);
                toast.error('error');
            }
            resetForm();
            history.push('/catalogue');
        }
    });

    return (
        <div>
            <div className="flex max-w-sm mx-auto bg-yellow_henry dark:bg-gray-800 rounded-b-lg shadow-lg overflow-hidden lg:max-w-2xl ">
                <div className="w-full py-8 px-6 md:px-8 ">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-white text-center">
                        {`Henry's`}
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-200 text-center">
                        Log In
                    </p>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mt-4">
                            <label
                                className="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2"
                                htmlFor="studentEmail">
                                Email Address
                            </label>
                            <input
                                id="studentEmail"
                                name="email"
                                className="bg-white bg-opacity-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null}
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label
                                    className="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2"
                                    htmlFor="studentPassword">
                                    Password
                                </label>
                            </div>
                            <input
                                id="studentPassword"
                                className="bg-white bg-opacity-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.password}</p>
                            </div>
                        ) : null}

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="bg-grayHenry text-white py-2 px-4 w-full tracking-wide rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Log In
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-row justify-center max-w-sm mt-10 mb-0 mr-auto ml-auto dark:bg-gray-800 overflow-hidden lg:max-w-2xl">
                        <button className="bg-grayHenry text-white py-4 px-4 w-auto mr-10 ml-10 tracking-wide rounded-full">
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 70 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    width="70"
                                    height="70"
                                    rx="5"
                                    fill="#3A3A3A"
                                />
                                <path
                                    d="M39.0744 61.2414V37.3364H47.1389L48.3377 27.9768H39.0744V22.0151C39.0744 19.3143 39.8269 17.4651 43.7031 17.4651H48.6148V9.12054C46.225 8.86443 43.8228 8.74077 41.4194 8.75013C34.291 8.75013 29.3969 13.1018 29.3969 21.0905V27.9593H21.3848V37.3189H29.4143V61.2414H39.0744Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <button className="bg-grayHenry text-white py-4 px-4 w-auto mr-10 ml-10 tracking-wide rounded-full">
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 70 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    width="70"
                                    height="70"
                                    rx="5"
                                    fill="#3A3A3A"
                                />
                                <path
                                    d="M60.2246 30.2422H35.5264V40.3936H49.6357C49.0273 43.6748 47.1816 46.4502 44.3994 48.3096C42.0479 49.8818 39.0469 50.8115 35.5195 50.8115C28.6904 50.8115 22.9141 46.1973 20.8496 39.9971C20.3301 38.4248 20.0293 36.7432 20.0293 35.0137C20.0293 33.2842 20.3301 31.6025 20.8496 30.0303C22.9209 23.8369 28.6973 19.2227 35.5264 19.2227C39.375 19.2227 42.8271 20.5488 45.5479 23.1465L53.0674 15.6201C48.5215 11.3818 42.5947 8.78418 35.5264 8.78418C25.2793 8.78418 16.4131 14.6631 12.0996 23.2354C10.3223 26.7764 9.31055 30.7822 9.31055 35.0205C9.31055 39.2588 10.3223 43.2578 12.0996 46.7988C16.4131 55.3711 25.2793 61.25 35.5264 61.25C42.6084 61.25 48.542 58.8984 52.876 54.8926C57.832 50.3262 60.6963 43.5996 60.6963 35.6084C60.6963 33.749 60.5322 31.9648 60.2246 30.2422Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b border-grayHenry dark:border-gray-600 w-1/5 md:w-1/4"></span>

                        <Link
                            to="/register"
                            className="text-xs text-gray-500 dark:text-gray-400 uppercase hover:underline">
                            or Register
                        </Link>

                        <span className="border-b  border-grayHenry dark:border-gray-600 w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsLogin;
