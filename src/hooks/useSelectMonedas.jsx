import { useState } from "react"

const useSelectMonedas = (text, opciones) => {
  const [state, setState] = useState('')

  //TODO: align labels
  //TODO: align <select>
    
  const SelectMonedas = () => (
    <>
      <div className="ml-2 mt-10 flex justify-center">
        <div>
          <label
            className="font-mono text-2xl mb-4"
          >{text}
          </label>
          <div className="grid grid-cols-1 md:flex md:justify-center">
            <select
              className="text-xl p-3 rounded-3xl shadow-lg"
              value={state}
              onChange={e => setState( e.target.value)}
            >
              <option value=''>Seleccione</option>
              {opciones.map((opcion) => (
                <option 
                  key={opcion.id}
                  value={opcion.id}
                >
                  {opcion.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )  

  return [state, SelectMonedas]
}

export default useSelectMonedas
