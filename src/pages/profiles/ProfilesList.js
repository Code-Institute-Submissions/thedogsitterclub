import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css"

import NoResults from "../../assets/no-results.png"
import Asset from "../../components/Asset"

import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";
import { Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ProfilesList({ message }) {
  const [profiles, setProfiles] = useState({ results: [] })
  const [hasLoaded, setHasLoaded] = useState(false)
  const currentUser = useCurrentUser()

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get('/profiles/')
        setProfiles(data)
        setHasLoaded(true)
      } catch (err) {
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
  }, [])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>

        {hasLoaded ? (
          <>
            {profiles.results.length ? (
              profiles.results.map(profile => (
                profile.id !== currentUser?.pk && (<Profile key={profile.id} {...profile} />)
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