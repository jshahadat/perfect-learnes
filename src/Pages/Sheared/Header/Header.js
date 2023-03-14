import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReactSwitch from 'react-switch';








const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        }
        else {
            setTheme("dark-theme")
        }

    };

    useEffect(() => {
        document.body.className = theme;

    }, [theme])


    return (

        <div>
            <Navbar collapseOnSelect className=' bg-secondary' expand="lg" bg="secondary" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/' className='text-decoration-none'>

                        <div className='d-flex align-items-center' >
                            <div>
                                <img className='rounded bg-white' src="https://i.ibb.co/Y8Nv21t/l-1.png" alt="" style={{ height: '40px' }} />
                            </div>
                            <h1 className='fw-bold dar'><span>Perfect</span> <span className='learn'>Learn</span></h1>
                        </div>

                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">

                            <Link to='/courses' className='text-decoration-none fs-4 fw-semibold color me-5'>Courses</Link>
                            <Link to='/faq' className='text-decoration-none fs-4 fw-semibold color me-5'>FAQ</Link>
                            <Link to='/blog' className='text-decoration-none fs-4 fw-semibold color '>Blog</Link>


                        </Nav>
                        <Nav className='d-flex align-items-center '>

                            <Link to="/" className='me-4'>
                                {user?.displayName ?
                                    <Image
                                        title={user?.displayName}
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    :
                                    <FaUser style={{ height: '40px' }} title={user?.displayName} className=''></FaUser>
                                }
                            </Link>

                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-4'><Button onClick={handleLogOut} variant="light">Log out</Button></span>
                                        </>
                                        :
                                        <>

                                            <Link to='/login' className='text-decoration-none fs-4 fw-semibold color me-4'>Login</Link>
                                            <Link to='/register' className='text-decoration-none  '><Button className='fw-semibold fs-4 me-4'>Register</Button></Link>
                                        </>
                                }

                            </>
                            <div >
                                <ReactSwitch className='mt-2' onClick={toggleTheme}></ReactSwitch>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    );
};

export default Header;