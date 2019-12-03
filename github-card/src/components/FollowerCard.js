import React from 'react';
import { Typography } from '@material-ui/core';


let FollowerCard = (props) => {
    return (
        <div className="follower-card" key="props.follower.login">
            <img src={props.follower.avatar_url} alt="" />
            <Typography>{props.follower.login}</Typography>
        </div>
    )
}

export default FollowerCard;