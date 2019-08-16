import React, { useState } from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';

import './App.css';

function App() {
  const [members, setMembers] = useState ([]);
  const [memberToEdit, setMemberToEdit] = useState ({});

  return (
    <div className="App">
      <Form members = {members} addMember = {setMembers} memberToEdit = {memberToEdit} />
      <TeamList members= {members} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
