
const Error = ({children}) => {
  return (
    <div className="flex justify-center">
      <h1
        className="font-bold w-6/12 md:w-1/4 p-5 text-white bg-red-400 text-center uppercase rounded-2xl"
      >
        {children}
      </h1>  
    </div>
  )
}

export default Error
