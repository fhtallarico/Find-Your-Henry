import { createSelectorHook } from 'react-redux';

type YourRootState = {
    alumnos: any[];
    alumnosFiltrados: string[];
};

export const useSelector = createSelectorHook<YourRootState>();
