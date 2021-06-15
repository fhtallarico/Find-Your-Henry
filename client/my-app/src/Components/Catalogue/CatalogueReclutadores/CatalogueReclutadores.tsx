import React from 'react';
import HenryCard from './OfertaCard';
import './CatalogueHenry.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAlumnos, filterTecnology, modifyAlumnosState } from '../../../Redux/actions';
import HenryCardDetail from './OfertaCardDetail';

interface Props {
    arrayOfHenrys: [];
}

export const CatalogueHenrys: React.FC = (props: any) => {
    const [AlumnosState, setAlumnosState] = useState<[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [alumnoId, setAlumnoId] = useState<any>();

    useEffect(() => {
        props.fetchAlumnos();
    }, []);

    useEffect(() => {
        setAlumnosState(props.alumnos);
        console.log(AlumnosState);
    }, [props.alumnos]);

    useEffect(() => {
        setAlumnosState(props.alumnosFiltrados);
        console.log(AlumnosState);
    }, [props.alumnosFiltrados]);

    const handleClick = (alumno: any) => {
        setAlumnoId(alumno);
        setOpen(true);
    };

    return (
        <div>
            <NavBar />
            <div
                style={{
                    margin: '100px 20px 0px 20px',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto auto auto',
                    gridTemplateRows: 'auto auto'
                }}>
                <div
                    style={{
                        gridColumnStart: 1,
                        gridColumnEnd: 2,
                        gridRowStart: 1,
                        gridRowEnd: 2,
                        margin: '0px 0px 10px 0px'
                    }}>
                    <select
                        className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-yellow_henry opacity-50 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        name="selectTec"
                        onClickCapture={(e: any) =>
                            props.filterTecnology(e.target.value)
                        }>
                        <option value="">Select a filter</option>
                        <option value="React">React</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="FullStack">FullStack</option>
                    </select>
                </div>

                <div className={open ? 'cardOn' : 'cardOff'}>
                    {AlumnosState.map((alumno: any, index: number) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    margin: '40px 15px 40px 15px'
                                }}
                                onClick={() => handleClick(alumno._id)}
                                onKeyPress={() => console.log('')}
                                role={'button'}
                                tabIndex={0}>
                                <HenryCard
                                    name={alumno.name}
                                    surname={alumno.surname}
                                    habilities={alumno.habilities + ' '}
                                    Birthdate={alumno.Birthdate}
                                    picture={alumno.picture}
                                    country={alumno.country}
                                    tecnologies="as"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={open ? 'cardDetailOn' : 'cardDetailOff'}>
                    <HenryCardDetail alumnoId={alumnoId} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        alumnos: state.alumnos.alumnos,
        alumnosFiltrados: state.alumnos.alumnosFiltrados
    };
};

export default connect(mapStateToProps, { fetchAlumnos, filterTecnology, modifyAlumnosState })(
    CatalogueHenrys
);
