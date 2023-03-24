import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from "../../api/axiosDefaults";


function BookingsPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: booking }] = await Promise.all([
          axiosReq.get(`/booking/${id}`),
        ]);
        setBooking({ results: [booking] });
        console.log(booking);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div>
      <Card>
      <Card.Header>Booking Owner</Card.Header>
      <Card.Body>
        <Card.Title>Booking owner dog name</Card.Title>
        <Card.Text>
          Booking date
        </Card.Text>
        <Button variant="primary">Edit booking</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BookingsPage