import React, { useState } from "react";

function MemberCard(props) {
  return (
    <div className="members-list">
      {props.members.map((member) => (
        <div className="member-card" key={member.id}>
          <h5>Welcome to our team!</h5>
          <p>Name: {member.username}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberCard;
