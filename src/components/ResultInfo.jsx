import React from 'react'

const ResultInfo = ({result}) => {
  console.log(result)
  
  return (
    <>
      <div className='flex justify-center'>
        <div className=" mt-14 grid grid-cols-1 items-center w-96 md:w-2/6 mb-8">
          {Object.keys(result).map(key => (
            <> 
              <div key={key} className='flex justify-around mb-8'>
                <div className='flex justify-between shadow-xl w-full h-24 rounded-2xl'>
                  <div>
                    <img 
                      className="w-20"
                      src={`https://cryptocompare.com/${result[key].img}`} alt={result[key].name} />
                  </div>
                  <div key={key} className='font-mono text-xl mt-3'>
                    <div className='grid grid-cols-1 items-center'>
                      <h1
                        className='ml-14'
                      >{ result[key].acronym}</h1>
                      <p
                        className='bg-green-400 text-green-100 font-bold md:w-36 text-center mx-auto rounded-md text-xl mr-2'
                      >${ result[key].price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>    
      </div>
    </>
  )
}

export default ResultInfo
