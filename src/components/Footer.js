import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <footer className="mt-5">
            <Container>
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Nama Perusahaan Anda. All Rights Reserved.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;