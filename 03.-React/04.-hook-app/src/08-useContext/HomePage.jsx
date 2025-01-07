import { useContext } from "react"
import { UserContexto } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext( UserContexto );
  
  
      return (
        <>
            <h1>HomePage <small>{ user?.name }</small> </h1>
            <hr />
  
            <pre aria-label="pre">
              { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
      )
    }