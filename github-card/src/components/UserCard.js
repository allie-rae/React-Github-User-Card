import React from 'react';

const UserCard = (props) => {
    return (
            <div className="user-card">
                <img src={props.user.avatar_url} />
                <p>{props.user.name}</p>
                <p>GitHub Handle: {props.user.login}</p> 
                <p>{props.user.bio}</p>
            </div>
        )
}

export default UserCard;