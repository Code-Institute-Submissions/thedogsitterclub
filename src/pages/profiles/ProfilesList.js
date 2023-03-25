import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css"
import styles from "../../styles/ProfilesList.module.css"

import NoResults from "../../assets/no-results.png"
import Asset from "../../components/Asset"

import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";
import { Container, Form } from "react-bootstrap";

function ProfilesList({ message }) {
  const [profiles, setProfiles] = useState({results: []})
  const [hasLoaded, setHasLoaded] = useState(false)

  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const {data} = await axiosReq.get(`/profiles/?search=${query}`)
        setProfiles(data)
        setHasLoaded(true)
      } catch(err) {
        console.log(err)
      }
    }
    
    setHasLoaded(false)
    const timer = setTimeout(() => {
      fetchProfiles()
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [query])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
      <Form 
        className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}  
      ></Form>
      <Form.Control
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        className="mr-sm-2"
        placeholder="Search profiles"
      />
        {hasLoaded ? (
          <>
            {profiles.results.length ? (
              profiles.results.map(profile => (
                <Profile key={profile.id} {...profile} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default ProfilesList;