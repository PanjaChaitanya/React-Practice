import { createContext , useState} from "react";

// Creating context
export const GlobalContext = createContext();

export default function GlobalContextProvider ( {children} ){

    const [count, setCount] = useState(0);

    return(
        <>
        {/* providing context */}
        <GlobalContext.Provider value={{count,setCount}}>
            {children}
        </GlobalContext.Provider>
        </>
    );

}
