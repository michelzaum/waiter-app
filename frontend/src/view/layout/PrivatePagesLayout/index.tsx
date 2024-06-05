import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { LayoutContainer } from './styles';

export function PrivatePagesLayout() {
  return (
    <LayoutContainer>
      <div className="headerArea">
        <Header />
      </div>
      <div className="navigationBarArea">
        <NavigationBar />
      </div>
      <div className="contentArea">
        <Outlet />
      </div>
    </LayoutContainer>
  )
}
