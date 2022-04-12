import { Nav, SocialMedia, Footer, Login } from "../../components"
import "../Login/login.css"

const LoginPage = () => {
    return (
        <div>
            <Nav />
            <Login />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export { LoginPage };