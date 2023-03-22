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

  const [selectedOption, setSelectedOption] = useState("")

  const imageInput = useRef()
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`)
        const { username, dog_name, content, image, is_owner } = data

        is_owner ? setProfileData({ username, dog_name, preference, content, image }) : history.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    handleMount()
  }, [history, id, preference])

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

  const handleChangePreference = (event) => {
    setSelectedOption(event.target.value)
    }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('username', username)
    formData.append('dog_name', dog_name)
    formData.append('preference', selectedOption)
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

            <Form.Group className="mb-3" controlId="preference">
              <Form.Label>I'm looking for</Form.Label>
              <Form.Control as="select" value={selectedOption} onChange={handleChangePreference}>
                <option>Select one</option>
                <option
                  type="radio"
                  label="Dogsitter"
                  name="Dogsitter"
                  value="DOGSITTER"
                >One</option>
                <option
                  type="radio"
                  label="Dogsitting"
                  name="Dogsitting"
                  value="DOGSITTING"
                >Two</option>
                <option
                  type="radio"
                  label="Both"
                  name="Both"
                  value="BOTH"
                >Three</option>
              </Form.Control>
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
            {/* <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageInput}
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group> */}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ProfileEditForm;