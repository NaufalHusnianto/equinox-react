import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <footer className="mt-5 user-select-none">
            <Container>
                <p className="text-center text-white">
                    &copy; {new Date().getFullYear()} Equinox group. All Rights Reserved.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;