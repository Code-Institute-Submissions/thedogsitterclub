import React, { useState, useEffect } from 'react'
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Booking from './Booking';
import Asset from "../../components/Asset"
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function BookingsPage() {

  const [bookings, setBookings] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false)
  const currentUser = useCurrentUser()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axiosReq.get('/bookings');
        console.log('booking list ===', data);
        if (data && data.length) {
          setHasLoaded(true)
          const temp = data.filter((book) => book.provider === currentUser.pk)
          console.log('booking filter list ===', temp);
          setBookings(temp);
        }
      } catch (err) {
        console.log(err);
        setHasLoaded(false)
        setBookings([])
      }
    }
    fetchBookings()
  }, [currentUser])


  return (
    <>
      <Row>
        {hasLoaded ? (bookings && bookings.length > 0 && bookings.map(booking => (
          <Col md="auto" className="mt-2 mb-1" key={booking.id}>
            <Booking book={booking} />
          </Col>
        ))) : (<Asset spinner />)}
      </Row>
    </>
  )
}

export default BookingsPage