import React from 'react';
import HenryCard from './HenryCard';
import './CatalogueHenry.css';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAlumnos, filterTecnology } from '../../../Redux/actions';
import Selector from './Selector';

export const CatalogueHenrys: React.FC = (props: any) => {
    const [AlumnosState, setAlumnosState] = useState<[]>([]);
    useEffect(() => {
        props.fetchAlumnos();
    }, []);

    useEffect(() => {
        setAlumnosState(props.alumnos);
        console.log(AlumnosState);
    }, [props.alumnos]);

    useEffect(() => {
        setAlumnosState(props.alumnosFiltrados);
        // console.log(AlumnosState);
    }, [props.alumnosFiltrados]);

    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-5 grid-rows-2 mt-20 ml-20">
                <div className="col-start-1 col-end-2 grid-row-start-1- grid-row-end-2">
                    <Selector />
                </div>
                <div className="col-start-2 col-end-5 grid-row-start-1- grid-row-end-2 flex flex-wrap justify-center self-center">
                    {AlumnosState.map((alumno: any, index: number) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    margin: '40px 15px 40px 15px'
                                }}>
                                <HenryCard
                                    name={alumno.name}
                                    surname={alumno.surname}
                                    habilities={alumno.habilities + ' '}
                                    Birthdate={alumno.Birthdate}
                                    picture={alumno.picture}
                                    country={alumno.country}
                                    id={alumno._id}
                                />
                            </div>
                        );
                    })}
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

export default connect(mapStateToProps, { fetchAlumnos, filterTecnology })(
    CatalogueHenrys
);
