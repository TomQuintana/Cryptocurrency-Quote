import Formulario from "./Formulario"
import Title from "./Title"

export const MainPage = ({setCoins, result}) => {
  return (
    <div className='h-96'>
      <div>
        <Title />
      </div>
      <div>
        <Formulario
          setCoins={setCoins}
          result={result}
        />
      </div>
    </div>
  )
}
