import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ProfileEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset"
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function ProfileEditForm() {
  const [errors, setErrors] = useState({})

  const [profileData, setProfileData] = useState({
    username: "",
    dog_name: "",
    preference: "",
    content: "",
    image: ""
  })
  const { username, dog_name, preference, content, image } = profileData

  const imageInput = useRef(null)
  const history = useHistory()

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new formData()

    formData.append('username', username)
    formData.append('dog_name', dog_name)
    formData.append('content', content)
    formData.append('image', imageInput.current.files[0])

    try {
      const {data} = await axiosReq.post('/profiles/', formData)
      history.push(`/profiles/${data.id}`)
    } catch(err){
      console.log(err)
      if (err.response?.status !== 401){
        setErrors(err.response?.data)
      }
    }
  }

  const handleChangeImage = (event) => {
    URL.revokeObjectURL(image)
    if (event.target.files.length) {
      setProfileData({
        ...profileData,
        image: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container className={appStyles.Content}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dog_name">
              <Form.Label>Dog name</Form.Label>
              <Form.Control
                type="text"
                name="dog_name"
                value={dog_name}
                onChange={handleChange}
              />
            </Form.Group>

            {/* <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="preference">
                <Form.Label as="legend" column sm={2}>
                  Looking for
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Dogsitter"
                    name="Dogsitter"
                    value={preference.DOGSITTER}
                  />
                  <Form.Check
                    type="radio"
                    label="Dogsitting"
                    name="Dogsitting"
                    value={preference.DOGSITTING}
                  />
                  <Form.Check
                    type="radio"
                    label="Both"
                    name="Both"
                    value={preference.BOTH}
                  />
                </Col>
              </Form.Group>
            </fieldset> */}

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={6} name="content" />
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => { }}
            >
              cancel
            </Button>

            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
              Update profile
            </Button>
          </Container>
        </Col>

        <Col className="d-none d-md-block p-0 p-md-2" md={5} lg={4}>
        <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
          <Form.Group className="text-center">
            {image ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload"
                    onChange={handleChangeImage}
                    ref={imageInput}
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
            />
          </Form.Group>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ProfileEditForm;