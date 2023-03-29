import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Image } from "react-bootstrap";
import styles from '../../styles/Card.module.css'
import { Link } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";


const Profile = (props) => {
    const {
        id,
        owner,
        username,
        dog_name,
        content,
        image,
        created_at,
    } = props;

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;

    return (
        <div className={`${styles.card} card`}>
            <div className="row no-gutters">
                <div className="col-auto">
                    <Image className={styles.cardImage} src={image} />
                </div>
                <div className={`${styles.cardContent} col`}>
                    <div className="card-block px-2">
                        <h4 className="card-title">{username}</h4>
                        <p className="card-text">My dog's name is: <strong>{dog_name}</strong></p>
                        <p className="card-text">{content}</p>
                        <div>
                            {is_owner ? (
                                <Link to={`/profiles/${currentUser?.profile_id}/edit`}>
                                    <Button className={btnStyles.Button}>Edit profile</Button>
                                </Link>
                            ) : (
                                <div>
                                    <Link to={`/bookings/${id}/create`}>
                                        <Button className={btnStyles.Button}>Request to book</Button>
                                    </Link>
                                    <Link to={`/profiles/${id}`}>
                                        <Button className={btnStyles.Button} variant="primary">View profile</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer w-100 text-muted">
                Member since: {created_at}
            </div>
        </div>
    )
}

export default Profile