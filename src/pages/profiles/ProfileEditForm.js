import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ProfileEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import {Switch} from 'antd'

function ProfileEditForm() {
  const [errors, setErrors] = useState({})

  const [profileData, setProfileData] = useState({
    username: "",
    dog_name: "",
    available: false,
    content: "",
    image: ""
  })
  const { username, dog_name, content, available, image } = profileData

  const imageInput = useRef()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`)
        const { username, dog_name, available, content, image, is_owner } = data

        is_owner ? setProfileData({ username, dog_name, available, content, image }) : history.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    handleMount()
  }, [history, id, available])

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      setProfileData({
        ...profileData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const [toggle, setToggle] = useState({
    available: false
  })

  const handleClick = () => {setToggle(!toggle)}

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('username', username)
    formData.append('dog_name', dog_name)
    formData.append('available', available)
    formData.append('content', content)


    if (imageInput?.current?.files[0]) {
      formData.append('image', imageInput.current.files[0])
    }

    try {
      await axiosReq.put(`/profiles/${id}`, formData)
      history.push(`/profiles/${id}`)
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={6}>
          <Container>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="dog_name">
              <Form.Label>Dog name</Form.Label>
              <Form.Control
                type="text"
                name="dog_name"
                value={dog_name}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.dog_name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="available">
              <Form.Label>Available</Form.Label>
              <br/>
              <Switch className={styles.Toggle} value={available} onClick={handleClick} />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="content"
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={btnStyles.Button}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>

            <Button
              className={btnStyles.Button}
              type="submit"
            >
              Update profile
            </Button>
          </Container>
        </Col>

        <Col className="d-none d-md-block p-0 p-md-2" md={5} lg={6}>
          <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  htmlFor="image-upload"
                  className="d-flex"
                >
                  <Asset src={Upload} message="Click or tap to upload an image" />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ProfileEditForm;