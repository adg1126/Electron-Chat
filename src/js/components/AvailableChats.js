import React from 'react';

const AvailableChats = ({ chats }) => {
  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
        {false && (
          <div className='container-fluid'>
            <div className='alert alert-warning'>No chats to join</div>
          </div>
        )}
        {chats.map((chat, i) => (
          <div key={i} className='col-lg-3 col-md-6 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{chat.name}</h5>
                <p className='card-text'>{chat.description}</p>
                <button onClick={() => {}} className='btn btn-outline-primary'>
                  Join {chat.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableChats;
