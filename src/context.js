import { createContext } from 'react' 
import useAlert from './useAlert'

export const Context = createContext()

export default function ContextProvider({children}){
    const {setInfo,setSuccess,setError,Stack} = useAlert({duration:6000})
    return (
        <Context.Provider
            value={{
                setInfo,
                setSuccess,
                setError
            }}
        >
            <Stack/>
            {children}
        </Context.Provider>
    )
}