import React from "react";
import { Media } from "react-bootstrap";

const Review = (props) => {
    const { author, booking, comment, updated_at } = props.review

    return (
        <div>
            <hr />
            <Media>
                <Media.Body>
                    <p>Author: {author}</p>
                    <p>Booking: {booking}</p>
                    <p>{updated_at}</p>
                    <p>{comment}</p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default Review