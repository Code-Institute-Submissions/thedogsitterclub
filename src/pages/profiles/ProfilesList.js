import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { axiosReq } from "../../api/axiosDefaults";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";

function ProfilesList({ message }) {
  const [profiles, setProfiles] = useState({results: []})
  const [hasLoaded, setHasLoaded] = useState(false)
  const { pathname } = useLocation

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const {data} = await axiosReq.get('/profiles/')
        setProfiles(data)
        setHasLoaded(true)
      } catch(err) {
        console.log(err)
      }
    }
    
    setHasLoaded(false)
    fetchProfiles()
  }, [ pathname ])
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            {profiles.results.length ? (
              profiles.results.map(profile => (
                <Profile key={profile.id} {...profile} />
              ))
            ) : (
              console.log('show no results asset')
            )}
          </>
        ) : (
          console.log('show loading spinner')
        )}
      </Col>
      {/* <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col> */}
    </Row>
  );
}

export default ProfilesList;