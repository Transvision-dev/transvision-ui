import { Outlet } from "react-router-dom";
import App from "../../App"
import AppDashboard from "../../components/AppDashboard/AppDashboard"
import Container from "../../components/container"


const Layout: React.FC = () => {
    return (
        <Container
            className="bg-gray-100"
            style={{
                display: "flex",
                height: "100vh",
                minHeight: "100%",
                flexDirection: "row",
                padding: "0",
            }}
        >
            <AppDashboard.Sidebar />
            <Outlet />
        </Container>
    )

}

export default Layout