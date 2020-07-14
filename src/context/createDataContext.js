import React , {useReducer} from 'react';


export default (reducer,  actions, initialState) => {
    const Context = React.context();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return <Context.Provider value= {{
            state: state,

        }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider}
}