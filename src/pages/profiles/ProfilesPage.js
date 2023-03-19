import React, {useEffect, useState} from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/ProfilesPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function PostsPage({ message, filter = "" }) {
  const [profiles, setProfiles] = useState({ results: [] })
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const {data} = await axiosReq.get(`/profiles/?${filter}`)
        setProfiles(data)
        setHasLoaded(true)
      } catch(err){
        console.log(err)
      }
    }

    setHasLoaded(false)
    fetchProfiles()
  }, [filter])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {profiles.results.length ? (
              console.log('map over profiles and render each one')
            ) : (
              console.log('show no results asset')
            )}
          </>
        ) : (
          console.log('show loading spinner')
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;