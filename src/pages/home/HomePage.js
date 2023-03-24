import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import homepage from "../../assets/homepage.jpg"
import styles from "../../styles/HomePage.module.css"
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';


function HomePage() {
    const currentUser = useCurrentUser()
    const setCurrentUser = useSetCurrentUser()
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" xs={12} sm={8}>
                <Container>
                    <h1>Welcome to The Dogsitter Club</h1>
                    <h2>Find a reliable dogsitter simply and quickly</h2>
                    {currentUser ? (
                        <Link to="/profiles">
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                type="submit"

                            >
                                Find a dogsitter
                            </Button>
                        </Link>
                    ) : (
                        <Link to="signin">
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                type="submit">
                                Sign in
                            </Button>
                        </Link>
                    )}

                </Container>
            </Col>
            <Col className="my-auto d-none d-md-block p-2 xs={6} sm={4}">
                <div className='d-flex justify-content-between'>
                    <img className={styles.Image} src={homepage} alt='homepage' />
                </div>

            </Col>
        </Row>
    )
}

export default HomePage