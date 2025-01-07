import { useContext } from 'react';
import { UserContexto } from './context/userContext';



export const LoginPage = () => {

    const { user, setUser } = useContext( UserContexto );
    
    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre aria-label='pre'>
            { JSON.stringify( user, null, 3 ) }
          </pre>


          <button 
            className="btn btn-primary"
            onClick={ () => setUser({ id: 123, name: 'Javier', email: 'javi@google.com' })  }
          >
            Establecer usuario
          </button>

      </>
    )
  }
  