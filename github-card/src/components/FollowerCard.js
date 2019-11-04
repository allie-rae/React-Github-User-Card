import React from 'react';

let FollowerCard = (props) => {
    return (
        <div className="follower-card" key="props.follower.login">
            <img src={props.follower.avatar_url} />
            <p>{props.follower.login}</p>
        </div>
    )
}

export default FollowerCard;