export interface Alumn {
    name: string;
    surname: string;
    description: string;
    picture: string;
    habilities: string[];
    ExtraHabilities: string[];
    Birthdate: string;
    email: string;
    country: string;
    password: string;
    _id: string;
    experience: ProfessionalBackground[];
    education: ProfessionalBackground[];
}

export interface AlumnState {
    Alumns: Alumn[];
    loading: boolean;
    error: string;
}

export interface Alumns {
    alumnos: Alumn[];
}

export interface ProfessionalBackground {
    _id: string;
    description: string;
    timeLapse: string;
}
