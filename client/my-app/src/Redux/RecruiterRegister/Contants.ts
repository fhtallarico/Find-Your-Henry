// import { Alumn } from '../../types/Alumns';

// export const ADD_STUDENT = 'ADD_STUDENT';

// interface AddStudentAction {
//     type: typeof ADD_STUDENT;
//     payload: Alumn;
// }

// export type AlumnActionTypes = AddStudentAction;
import { Recruiter } from '../../types/Recruiters';

export const ADD_RECRUITER = 'ADD_RECRUITER';
export const ADD_RECRUITER_SUCCESS = 'ADD_RECRUITER_SUCCESS';
export const ADD_RECRUITER_ERROR = 'ADD_RECRUITER_ERROR';

interface AddRecruiter {
    type: typeof ADD_RECRUITER;
}
interface AddRecruiterSuccess {
    type: typeof ADD_RECRUITER_SUCCESS;
}

interface AddRecruitersError {
    type: typeof ADD_RECRUITER_ERROR;
}

export type RecruiterActionTypes =
    | AddRecruiter
    | AddRecruiterSuccess
    | AddRecruitersError;
