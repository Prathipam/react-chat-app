import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function UserCard(props) {
    return (
        <div style={{ width: '100%' }}>
            <Comment
                author={props.name}
                avatar={
                    <Avatar
                        src={props.image} alt={props.name}
                    />
                }
            />
        </div>
    )
}

export default UserCard;

