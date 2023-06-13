import { useState } from "react"

const useSelectCryptocurrency = (text, opciones) => {

  const [state, setState] = useState('')

  //TODO: align labels
  const SelectCryptocurrency = () => (
    <>
      <div className="mt-6 flex justify-center">
        <div>
          <label
            className="font-mono text-2xl "
          >{text}
          </label>
          <div className="flex justify-center">
            <select
              className="text-xl p-3 rounded-3xl mb-20 shadow-lg"
              value={state}
              onChange={e => setState( e.target.value)}
            >
              <option value=''>Seleccione</option>
              {opciones.map((opcion) => (
                <option 
                  key={opcion.acronym}
                  value={opcion.acronym}
                >
                  {opcion.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )  

  return [state, SelectCryptocurrency]
}

export default useSelectCryptocurrency
