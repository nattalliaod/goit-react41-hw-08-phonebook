import { Link } from 'react-router-dom';
import { TitleText } from 'pages/HomePage/HomePage.styled';

export const NotFoundPage = () => {
    return <TitleText>
            404 Page not found :(, go to{' '}
            <Link to="/">Home page</Link>
        </TitleText>
};