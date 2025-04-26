import Chatboticon from '../Chatboticon';

const Chatmessage=({chat}) =>{
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
      {chat.role ==="model" && <Chatboticon></Chatboticon>}
    <p className='message-text'>
        {chat.text}
    </p>
  </div>
  );
};

export default Chatmessage
