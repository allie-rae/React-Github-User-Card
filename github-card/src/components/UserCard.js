import React from 'react';
import { Typography } from '@material-ui/core';

const UserCard = (props) => {
    return (
            <div className="user-card">
                <img src={props.user.avatar_url} alt="" />
                <Typography align="center" variant="h3">{props.user.name}</Typography>
                <Typography>GitHub Handle: {props.user.login}</Typography> 
                <Typography>{props.user.bio}</Typography>
            </div>
        )
}

export default UserCard;