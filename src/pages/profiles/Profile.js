import React from "react";
import styles from "../../styles/Profile.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Profile = (props) => {
    const {
      id,
      owner,
      content,
      image,
      created_at,
      updated_at,
    } = props;

    const currentUser = useCurrentUser()

    return <Card className={styles.Profile}>
        <Card.Body>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${id}`}>
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>Member since: {created_at}</span>
                </div>
            </Media>
        </Card.Body>
        <Card.Img src={image} alt="" />
        <Card.Body>
            {content && <Card.Text>{content}</Card.Text>}
        </Card.Body>
    </Card>

}

export default Profile