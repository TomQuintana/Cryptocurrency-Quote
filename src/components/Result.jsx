const Result = ({result}) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATED,OPENDAY, CHANGEPCTHOUR} = result

  return (
    <div className="flex justify-center">
      <div className="shadow-xl shadow-sky-100 rounded-2xl mt-14 grid grid-cols- items-center w-96 md:w-2/6 mb-2">
        <div className="flex justify-center">
          <img
            className="w-36"
            src={`https://cryptocompare.com/${IMAGEURL}`}/>
          <h1
            className="ml-1 mt-16 font-bold text-2xl font-mono"
          >Price ${PRICE.toFixed(2)}
          </h1>
        </div>
        <div className="flex justify-around mt-2 mr-1 mb-2">
          <div className="grid grid-cols-1">
            <div className="text-sm font-mono">
              <h1>Change 1h</h1>
            </div>
            <div className={ `${ CHANGEPCTHOUR < 0  ? 'bg-red-600 text-red-200 font-bold md:w-20 text-center mx-auto rounded-md text-xl' : 
                'bg-green-400 text-green-100 font-bold w-20 text-center mx-auto rounded-md text-xl'}`}>
              <h1>
                {CHANGEPCTHOUR.toFixed(2)}% 
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="text-sm font-mono text-center">
              <h1>High Day</h1>
            </div>
            <div className='bg-green-400 text-green-100 font-bold md:w-36 text-center mx-auto rounded-md text-xl'>
              <h1>
                ${HIGHDAY.toFixed(2)} 
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="text-sm font-mono text-center">
              <h1>Low Day</h1>
            </div>
            <div className='bg-red-600 text-red-200 font-bold md:w-36 text-center mx-auto rounded-md text-xl'>
              <h1>
                ${LOWDAY.toFixed(2)} 
              </h1>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Result
