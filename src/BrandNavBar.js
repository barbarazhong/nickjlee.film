import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandNavBar() {
  return (
    <>
      <Navbar sticky="top">
        <Container>
          <Navbar.Brand>Nicolas Johannes Lee</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNavBar;