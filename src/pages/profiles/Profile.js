import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Button } from "react-bootstrap";
import styles from '../../styles/Card.module.css'
import { Link } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";


const Profile = (props) => {
    const {
        owner,
        content,
        preference,
        image,
        created_at,
    } = props;

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

    return (
        <Card className={styles.card}>
            <Card.Img className={styles.cardImage} src={image} />
            <Card.Body>
                <Card.Title>{owner}</Card.Title>
                <Card.Text>
                    {preference}
                </Card.Text>
                <Card.Text>
                    {content}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    {is_owner ? (
                        <Link to={`/profiles/${currentUser?.profile_id}/edit`}>
                        <Button className={btnStyles.Button}>Edit profile</Button>
                        </Link>
                    ) : (
                        <div>
                            <Button className={btnStyles.Button}>Request to book</Button>
                            <Button className={btnStyles.Button} variant="primary">View profile</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
            <Card.Footer className="d-flex align-content-end flex-wrap">{created_at}</Card.Footer>
        </Card>
    )
}

export default Profile