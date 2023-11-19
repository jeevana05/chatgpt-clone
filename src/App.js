import { useState } from 'react';
import './App.css';
import addBtn from './assets/add-30.png';
import saved from './assets/bookmark.svg';
import logo from './assets/chatgpt.svg';
import gptImg from './assets/chatgptLogo.svg';
import home from './assets/home.svg';
import msgIcon from './assets/message.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import { sendingToOpenAi } from './openai';



function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages]  = useState([]);
  const handleSend = async () =>{
    const res = await sendingToOpenAi(input);
    setMessages([
      ...messages,
      {text:input, isUser:true},
      {text:res, isUser:false },
    ]);
    setInput("");
    console.log(res);
  }
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={logo} alt='logo' className='logo'/><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming</button>
            <button className="query"><img src={msgIcon} alt="Query" />What is Programming</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className="lisItems"><img src={home} alt="Home" className="listitemsImg" />Home</div>
          <div className="lisItems"><img src={saved} alt="Saved" className="listitemsImg" />Saved</div>
          <div className="lisItems"><img src={rocket} alt="Pro" className="listitemsImg" />Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quo odit impedit nisi beatae dicta veritatis laboriosam itaque error fuga!</p>
          </div>
          <div className="chat bot">
          <img className='chatImg' src={gptImg} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia, adipisci recusandae, beatae qui sequi quas dolores fugiat eum similique voluptatem neque culpa suscipit ut explicabo. Eveniet necessitatibus accusamus ducimus corporis hic cumque, beatae amet, nulla repellat ipsum inventore, tenetur dolores esse dolore laboriosam ad enim maxime ipsa expedita deleniti ab possimus voluptatum totam obcaecati! Necessitatibus rerum ad, cumque iure a, illum ducimus dignissimos enim harum inventore accusantium sequi eum asperiores assumenda commodi repellat? Eaque quod exercitationem, accusamus nesciunt quibusdam repudiandae aut illum voluptates dolores cupiditate, consequuntur animi eligendi a deleniti neque, ex corporis officia veritatis architecto temporibus unde odit?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a Message' value={input} onChange={(e)=>setInput(e.target.value)} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT Clone</p>
        </div>
      </div>
    </div>

  );
}

export default App;
