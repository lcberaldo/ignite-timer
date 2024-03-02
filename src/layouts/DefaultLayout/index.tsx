import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default DefaultLayout
