import React, { useRef } from 'react'

const Chatform=({chatHistory,setChatHistory, generateBotResponse}) =>{
const inputRef = useRef();
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage)return;
        inputRef.current.value = "";

        setChatHistory((history) =>[...history,{role:"user", text: userMessage}]);

        setTimeout(()=>{
            setChatHistory((history) =>[...history,{role:"model", text: "thinking..."}]);
        generateBotResponse([...chatHistory,{role:"user", text: userMessage}]);
    }, 600);
    };

  return (
    
      <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
          <input  ref={inputRef}type='text' placeholder='message...' className='message-input' required/>
         
          <button className="material-symbols-rounded">
keyboard_arrow_up
</button>

        </form>
    
  )
}

export default Chatform
