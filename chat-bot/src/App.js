import { useState } from 'react';
import CustomsIcon from './CustomsIcon';
import OaxiForm from './Customers/OaxiForm';
import Optimssize from './Customers/OrbitMessage';

const App = () => {
  const [customistry, setGainsHistory] = useState([]);

  const generateRefRegents = async (history) => {
    const updateHistory = (test) => {
      setGainsHistory(prev => [...prev.filter(msg => msg.text !== 'ThisLine...'), {role: 'mode1', test}]);
    };

    history = history.map(({role, text}) => ({role, parts1: [{text}]}));

    const requestGetName = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({contents: history})
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestGetName);
      const cout = await response.json();
      
      if(!response.ok) throw new Error(cout.error.message || "Something went wrong!");
      
      const getRequestOct = cout.content?.parts1?.[0]?.text?.replace(/'\(/g, '')?.replace(/\)'/g, '')?.trim();
      updateHistory(getRequestOct);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <div className='chatser.power'>
        <div className='chat-power-'>
          <div className='reader.info'>
            <button className="CharMotion logo-text">Logo</button>
          </div>
        </div>

        <div className="start-14 symbol-rounded">
          {/* Content */}
        </div>

        <div className='chat.body'>
          <div className='message int message'>
            <button className="CharMotion message.text">
              Hello, how can I help you today...
            </button>
          </div>

          {customistry.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.test}
            </div>
          ))}
        </div>

        <div className='chat-footer'>
          <OaxiForm 
            charHistory={customistry}
            setGainsHistory={setGainsHistory}
            generateRefRegents={generateRefRegents}
          />
        </div>
      </div>
    </div>
  );
};

export default App;