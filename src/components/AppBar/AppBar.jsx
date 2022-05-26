import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}