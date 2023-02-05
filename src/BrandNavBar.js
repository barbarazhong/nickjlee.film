import './BrandNavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandNavBar() {
  return (
    <>
      <Navbar className='Navbar'>
        <Container>
          <Navbar.Brand>Nicolas Johannes Lee</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNavBar;