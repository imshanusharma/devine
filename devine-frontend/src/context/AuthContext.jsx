import { useReducer } from 'react';
import { createContext } from 'react';
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
    user: {
        _id: '61d44d3fbf8681ba37d3c11b',
        username: 'ujjwal',
        email: 'shanusharma588@gmail.com',
        profilePicture: '',
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
