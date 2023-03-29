import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";
import Review from "../reviews/Review";


import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from "./Profile";

function ProfilePage() {
  const currentUser = useCurrentUser()
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    const handleMount = async () => {
      try {
        axiosReq.get(`/profiles/${id}`).then((res) => {
          setHasLoaded(true)
          if (res.data) {
            setProfile(res.data)
          }
        })
      } catch (err) {
        setHasLoaded(false)
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get('/reviews')
        if (data && data.length) {
          setHasLoaded(true)
          setReviews(data)
        }
      } catch (err) {
        console.log(err)
        setHasLoaded(false)
        setReviews([])
      }
    }
    fetchReviews()
    if (currentUser && (currentUser.pk === id)) {
      setIsOwner(true)
    } else {
      setIsOwner(false)
    }
  }, [currentUser, id])

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (<Profile {...profile} />) : (<Asset spinner />)}

      </Col>

      <Col className="py-2 p-0 p-lg-2" lg={4}>
        <Container>
          {hasLoaded && isOwner && reviews.length > 0 ? reviews.map(review => (
            <Col md="auto" className="mt-2 mb-1" key={review.id}>
              <Review review={review} />
            </Col>
          )) : (<span>no review data</span>)
          }
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
