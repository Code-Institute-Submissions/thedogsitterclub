import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import dogpic from "../../assets/dogpic.jpg"


import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up</h1>

                    <Form>
                        <Form.Group className="mb-0" controlId="username">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control 
                                className={styles.Input}
                                type="text" 
                                placeholder="username" 
                                name="username" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-0" controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                                className={styles.Input}
                                type="password" 
                                placeholder="Password" 
                                name="password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control 
                                className={styles.Input}
                                type="password" 
                                placeholder="Confirm password" 
                                name="password2"
                            />
                        </Form.Group>
                        
                        <Button 
                            className={`${btnStyles.Button} ${btnStyles.Black} ${btnStyles.Wide}`}
                            type="submit">
                            Sign up
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <span className={styles.LinkText} >Already have an account? <Link className={styles.LinkButton}to="/signin">Sign in</Link></span>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={dogpic}
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;