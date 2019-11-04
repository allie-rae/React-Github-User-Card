import React from 'react';

const UserCard = (props) => {
    console.log("props.user.login", props.user.login)
    return (
            <div>
                <img src={props.user.avatar_url} />
                <p>{props.user.name}</p>
                <p>GitHub Handle: {props.user.login}</p> 
                <p>{props.user.bio}</p>
            </div>
        )
}

export default UserCard;