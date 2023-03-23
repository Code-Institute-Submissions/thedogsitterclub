import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults'
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Alert from "react-bootstrap/Alert";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const BookingCreateForm = (props) => {

    const { name } = props

    const [errors, setErrors] = useState()

    const [bookingData, setBookingData] = useState({
        comment: "",
        start: "",
        end: "",
        status: ""
    })
    const { comment, start, end, status } = bookingData

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const history = useHistory()

    const handleChange = (event) => {
        setBookingData({
            ...bookingData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('comment', comment)
        formData.append('start', start)
        formData.append('end', end)
        formData.append('status', status)

        console.log('booking form data ===', bookingData);


        try {
            const data = await localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
            console.log('user data ===', data);
            axiosReq.defaults.headers.common['Authorization'] = `Bearer ${data?.access_token}`;
            await axiosReq.post('/bookings/', formData)
            history.push(`/profiles/`)
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
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                type="text"
                                name="comment"
                                value={comment}
                                onChange={handleChange}
                            ></Form.Control>
                        </Form.Group>
                        {errors?.comment?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="start">
                            <Form.Label>Start</Form.Label>
                            <DatePicker
                                name="start"
                                selected={selectedStartDate}
                                onChange={date => {
                                    setSelectedStartDate(date);
                                    setBookingData({
                                        comment,
                                        start: date,
                                        end,
                                        status: ""
                                    })
                                }}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                            />
                        </Form.Group>
                        {errors?.start?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group className="mb-3" controlId="end">
                            <Form.Label>End</Form.Label>
                            <DatePicker
                                name="end"
                                selected={selectedEndDate}
                                onChange={date => {
                                    setSelectedEndDate(date);
                                    setBookingData({
                                        comment,
                                        start,
                                        end: date,
                                        status: ""
                                    })
                                }}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                            />
                        </Form.Group>
                        {errors?.end?.map((message, idx) => (
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
                            Request booking
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Form>
    )
}

export default BookingCreateForm