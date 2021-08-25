const SET_USER_DATA = 'SET_USER_DATA'; 

export type AuthStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
};

export type DataObjectType = {
    data: AuthStateType,
};

export type ActionType = {
    type: string,
    data?: AuthStateType,
};

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                    ...state,
                    ...action.data,
                    isAuth: true,
                };

        default:
            return state;
    };
};

export const setUserAuthDataActionCreator = (data: AuthStateType) => ({type: SET_USER_DATA, data});