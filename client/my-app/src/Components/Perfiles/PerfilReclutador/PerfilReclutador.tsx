import { gql, useQuery } from '@apollo/client';
import { prototype } from 'node:stream';
import React from 'react';
import { useParams } from 'react-router';
import NavBar from '../../Catalogue/CatalogueHenrys/NavBar';
import AboutCompany from './AboutCompany';
import CardPerfil from './CardPerfil';
import SectionJobOffer from './SectionJobOffer';

const EMPRESA = gql`
    query($id: ID) {
        empresa(_id: $id) {
            name
            picture
            description
            email
        }
    }
`;

const OBTENER_OFERTAS = gql`
    query($company: String) {
        ofertasbycompany(company: $company) {
            title
            company
            postulants
            description
        }
    }
`;

const PerfilReclutador: React.FC = () => {
    const { id } = useParams<{ id: any }>();
    console.log(id);

    const { data, loading } = useQuery(EMPRESA, {
        variables: {
            id: id
        }
    });
    const empresa: any = data;
    let ofertas: any;
    if (empresa) {
        const { data, loading } = useQuery(OBTENER_OFERTAS, {
            variables: {
                company: empresa.name
            }
        });
        ofertas = data;
    }
    console.log(ofertas);
    console.log(empresa);

    return (
        <div className="grid grid-cols-5 grid-rows-5">
            <div className="col-start-1 col-end-6 row-start-1 row-end-1 mb-5">
                <NavBar />
            </div>
            <div className="col-start-1 col-end-3 row-start-1 row-end-3 mt-5 ml-5">
                <CardPerfil nombre={'nombre'} link={'link'} />
            </div>
            <div className="col-start-3 col-end-6 row-start-1 row-end-6 mt-5 ml-5 mr-5">
                <SectionJobOffer ofertas={[]} />
            </div>
            <div className="col-start-1 col-end-3 row-start-3 row-end-6 ml-5">
                <AboutCompany />
            </div>
        </div>
    );
};

export default PerfilReclutador;
