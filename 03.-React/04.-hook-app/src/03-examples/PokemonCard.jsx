/* eslint-disable react/prop-types */

import { useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const h2Ref = useRef()

  useLayoutEffect(() => {
    const prueba = h2Ref.current    

    console.log(prueba)
  
    return () => {
      
    };
  }, [])

  return (
    <section style={{ height: 200 }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* imagenes */}
      <div key={id}>
        {
            sprites.map(sprite=>(
                <img src={sprite} alt=""  key={sprite}/>
            ))
        }
      </div>
    </section>
  );
};
