import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookingCreateForm from "./BookingCreateForm"

function BookingsPage() {

  const { id } = useParams();
  const [bookings, setBookings] = useState({ results: [] });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const {data} = await axiosReq.get('/bookings/');
        setBookings(data);
      } catch (err) {
        console.log(err);
      }
    }})
  

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        Booking
      </Col>
      <Col>
      </Col>
    </Row>
  )
}

export default BookingsPage