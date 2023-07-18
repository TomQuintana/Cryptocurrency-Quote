import { Outlet } from 'react-router-dom'
import Title from "./Title"
import Nav from './Nav'
import Footer from './Footer'

export const MainPage = () => {
  return (
    <>
        <div>
          <Title />
        </div>
      <div>
        <Nav />
      </div>
      <Outlet />
        <Footer />
    </>
  )
}
