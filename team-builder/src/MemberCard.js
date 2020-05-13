import React from "react";

function MemberCard(props) {
  return (
    <div className="members-list">
      {props.members.map((member) => (
        <div className="member-card" key={member.id}>
          <h5 className='welcome'>Welcome to our team!</h5>
          <p className='cardElement'>Name: {member.username}</p>
          <p className='cardElement'>Email: {member.email}</p>
          <p className='cardElement'>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberCard;
