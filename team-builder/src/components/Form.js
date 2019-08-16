import React, { useState, useEffect } from 'react';
import {Form as UIForm } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Form = props => {
    const { members, addMember, memberToEdit } = props;
    const [member, setMember] = useState({});
    const [fullname, setFullname] = useState(member.fullname);
    const [email, setEmail] = useState(member.email);
    const [role, setRole] = useState(member.role);

    useEffect(() => {
        setMember(memberToEdit);
    }, [memberToEdit]);

    const nameChange = event => {
        setFullname(event.target.value);
    }
    const emailChange = event => {
        setEmail(event.target.value);
    }
    const roleChange = event => {
        setRole(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newMember = {
            fulllname: fullname,
            email: email,
            role: role
        };
        addMember([...members, newMember]);
    }

    return (
        <UIForm onSubmit = {event => {handleSubmit(event)}}>
            <UIForm.Group grouped>
                <UIForm.Field
                label ='Name'
                name = 'fullname'
                value = {member.fullname}
                control = 'input'
                onChange = { event => nameChange(event)}/>
            <UIForm.Field
                label ='Email'
                name = 'email'
                value = {member.email}
                control = 'input'
                onChange = { event => emailChange(event)}/>
            <UIForm.Field
                label ='Role'
                name = 'roele'
                value = {member.role}
                control = 'select'
                onChange = { event => roleChange(event)}>
                <option value = ''></option>
                <option value = 'Frontend Developer'>Frounted Developer</option>
                <option value = 'Backend Developer'>Backend Developer</option>
                <option value = 'UI Designer'>UI Desinger</option>
                <option value = 'UX Designer'> UX Designer</option>
                <option value = 'Student'> Student</option>
            </UIForm.Field>
            </UIForm.Group>
            <input type = 'submit' />  
        </UIForm>
    );  
}

export default Form;