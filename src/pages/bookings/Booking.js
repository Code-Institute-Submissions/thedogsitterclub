import React from "react";
import { Media } from "react-bootstrap";

const Booking = (props) => {
  const { id, client, provider, comment, created_at, updated_at, start, end, status, is_owner } = props;

  return (
    <div>
      <hr />
      <Media>
        <Media.Body className="align-self-center ml-2">
          <span>{client}</span>
          <span>{updated_at}</span>
          <p>{comment}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Booking;