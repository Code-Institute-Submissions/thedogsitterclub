import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Profile from "./Profile";

import Booking from "../bookings/Booking";
import BookingCreateForm from "../bookings/BookingCreateForm"
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Container } from "react-bootstrap";

function ProfilePage(owner) {
  const currentUser = useCurrentUser()
  // const is_owner = currentUser?.username === owner;

  const { id } = useParams();
  const [bookings, setBookings] = useState({results: []})
  const [profile, setProfile] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: profile }, { data: bookings }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
          axiosReq.get(`/bookings/?profile=${id}`),
        ]);
        setProfile({ results: [profile] });
        setBookings(bookings)
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Profile {...profile.results[0]} />
        <Container>
          {currentUser ? (
            <BookingCreateForm />
          ) : ( bookings.results.length ? (
            bookings.results.map((booking) => (
              <Booking key={bookings.id} {...booking}/>
            ))
          ) : currentUser ? (
            <span>No bookings yet</span>
          ) : (
            <span>No bookings yes</span>
          )

          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
