import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TeamList = props => {
    const {members, setMemberToEdit} = props;

    return (
        <List divided relaxed> {
            members.map(member => {
                return (
                    <List.Item key = {members.indexOf(member)}>
                        <List.Description>
                            {member.role} |
                            <a href = 'mailto:{{memeber.email}}'>{member.email}</a> <br></br>
                            <button onClick = {() => setMemberToEdit(member)}>Edit Member</button>
                        </List.Description>
                    </List.Item>
                )
            })
        }
        </List>
    )
}
export default TeamList;