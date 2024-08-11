
import ChatBot from 'react-simple-chatbot';
// import "./Chat.css";
const Chat = () => {
    const steps = [
      {
        id: '0',
        message: 'Hello',
        trigger: '1',
      },
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, Nice to meet you! How can i help you?',
        trigger: '4',
      },
      {
        id: '4',
        user: true,
        trigger: '5',
      },
      {
        id: '5',
        message: 'I got your question. ',
        trigger: '6',
      },
      {
        id: '6',
        message: 'Step1: Enter the name of the city Step2: Click on Search button' ,
        end: true,
      },
    ];
    return (
     <div className='ContactUs-container'>
    <div className='chat'>
    <ChatBot steps={steps} floating={true} />
    </div>
    </div>
    );
  };
  
  export default Chat;
