import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { HeadNav } from './styles';
import MyButton from '../MyButton';
import ProgramModal from '../ProgramModal';

const Header = () => {
  const [programModal, setProgramModal] = React.useState();
  return (
    <HeadNav>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Logo</Navbar.Brand>
          <div className='socialLinks'>
            <a href='www.instagram.com' target='_blank'>
              <FaInstagram />
            </a>
            <a href='www.telegram.com' target='_blank'>
              <FaTelegram />
            </a>
          </div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>Usecase</Nav.Link>
              <Nav.Link>Rewards Vault</Nav.Link>
              <Nav.Link>Tokenomics</Nav.Link>
              <Nav.Link>Roadmap</Nav.Link>
            </Nav>
            <Nav className='ms-auto links'>
              <Nav.Link>
                <FaInstagram />
              </Nav.Link>
              <Nav.Link>
                <FaTelegram />
              </Nav.Link>
              <div className='connectBtn'>
                <MyButton handleClick={() => setProgramModal(true)}>
                  Connect Wallet
                </MyButton>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* modals */}
      <ProgramModal
        isModalOpen={programModal}
        setIsModalOpen={setProgramModal}
      />
    </HeadNav>
  );
};

export default Header;
