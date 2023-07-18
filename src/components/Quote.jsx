import Formulario from "./Formulario"

const Quote = ({setCoins, result}) => {
  return (
    <>
      <div className="mb-64">
        <Formulario                                                                
          setCoins={setCoins}                                                      
          result={result}                                                               
        /> 
      </div>
    </>
  )
}

export default Quote

