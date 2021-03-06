import React from 'react';
import Typography from '@material-ui/core/Typography';

function UserName(props) {
    return (
        <Typography gutterBottom variant="h6" component="h3">
            {props.firstName} {props.lastName}
        </Typography>
    )
}

export default UserName;