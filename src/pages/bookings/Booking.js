import React, { useState } from "react";
import { Alert, Button, Form, Media, Modal } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function ReviewPostModal(props) {

  const [reviewData, setReviewData] = useState({
    author: props.author || 0,
    booking: props.booking || 0,
    comment: "",
  })

  const { author, booking, comment } = reviewData

  const [errors, setErrors] = useState()

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('comment', comment)
    formData.append('author', author)
    formData.append('booking', booking)

    console.log('review form data ===', reviewData);

    try {
      const data = await localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
      console.log('user data ===', data);
      axiosReq.defaults.headers.common['Authorization'] = `Bearer ${data?.access_token}`;
      axiosReq.post(`/reviews`, formData).then(res => {
        console.log('create booking review ===', res);
        if (res.status === 201) {
          // reivew post success
          setReviewData({
            author: 0,
            booking: 0,
            comment: "",
          })
          props.onHide();
        }
      }).catch(err => {
        console.log(err)
        if (err.response?.status !== 401) {
          setErrors(err.response?.data)
        }
      })
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write your review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          name="comment"
          value={comment}
          onChange={handleChange}
        />
        {errors?.comment?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={!comment} onClick={(e => handleSubmit(e))}>Post Review</Button>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Booking = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, client, comment, updated_at, status, provider } = props.book
  console.log('props book ===', props.book);

  const handleAccept = async () => {
    try {
      const data = await localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
      axiosReq.defaults.headers.common['Authorization'] = `Bearer ${data?.access_token}`;
      let formData = props.book || {}
      formData['status'] = 'ACCEPTED'
      await axiosReq.put(`/bookings/${id}`, JSON.stringify(formData))
        .then(res => console.log('booking accept res ===', res))
        .catch(err => console.log('booking accept err ===', err))
    } catch (err) {
      console.log(err)
    }
  }

  const handleReject = () => {
    console.log('handleReject');
  }

  return (
    <div>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          <p>{client}</p>
          <p>{updated_at}</p>
          <p>{comment}</p>
          <h6><strong>{status}</strong></h6>
          {status === 'PENDING' && (
            <div className="mt-2 mb-2">
              <Button variant="success" onClick={() => handleAccept()} className="ml-1 mr-1">accept</Button>{' '}
              <Button variant="danger" onClick={() => handleReject()} className="ml-1 mr-1">reject</Button>{' '}
            </div>)}
          {status === 'ACCEPTED' && (
            <div className="mt-2 mb-2">
              <Button variant="success" onClick={() => setModalShow(true)} className="ml-1 mr-1">write review</Button>{' '}
            </div>)}
        </Media.Body>
      </Media>
      <ReviewPostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        booking={id}
        author={provider}
      />
    </div>
  );
};

export default Booking;