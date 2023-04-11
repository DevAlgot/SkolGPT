//import logo from './logo.svg';
import { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './App.css';
import './normal.css';

import { useState } from 'react';

function App() {
  //const chatWindowRef = useRef(null);

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  function clearChat() {
    setChatLog([]);
  }


  function typeText(text) {
    let index = 0

    let interval = setInterval(() => {
      if (index < text.length) {

        index++
      } else {
        clearInterval(interval)
      }
    }, 20)
  }


  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { role: "user", content: `${input}` }];
    setInput("");
    setChatLog(chatLogNew)

    const messages = chatLogNew.map((message) => message.content).join("\n")
    const response = await fetch('http://localhost:3080/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: messages
      })
    });

    const data = await response.json();

    setChatLog([...chatLogNew, { role: "assistant", content: `${data.message}` }])

    console.log(data.message);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) { // Check if enter was pressed without shift key
      handleSubmit(e);
    }
  }

  //scrollToBottom();
  //function scrollToBottom() {
  //  if (chatWindowRef.current) {
  //    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  //  }
  //}

  return (
    <div className="App">
      <aside className="sideMenu">
        <div className='side-button-menu' onClick={clearChat}>
          <b>Clear chat</b>
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chatlog'>
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}   >
            <TextareaAutosize
              className='chat-input-textarea' 
              minRows={1}
              maxRows={10}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}/>  
          </form> 
        </div>
      </section>

    </div>
  );


}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chatmessage ${message.role === "assistant" && "chatgpt"}`}>
      <div className='chatmessagecenter'>
        <div className={`avatar ${message.role === "assistant" && "chatgpt"}`}>
          {message.role === "assistant" &&   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="15 20 150 150"
  >
    <g transform="matrix(.6235 0 0 .6235 .384 -18.444)">
      <g transform="translate(19.58 38.63)">
        <circle
          cx={34.255}
          cy={115.344}
          r={18.774}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2.504,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={137.443}
          cy={114.55}
          r={18.774}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2.504,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <rect
        width={3.368}
        height={13.19}
        x={103.744}
        y={101.304}
        rx={0}
        ry={0}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.81324,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <circle
        cx={105.428}
        cy={90.741}
        r={11.583}
        style={{
          fill: "#fffdff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 1.5449,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <circle
        cx={-90.741}
        cy={105.428}
        r={2.072}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.276388,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(-90)"
      />
      <g transform="rotate(-90 29.071 9.558)">
        <circle
          cx={-52.112}
          cy={91.67}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={-52.112}
          cy={80.16}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <g transform="rotate(-90 29.104 9.525)">
        <circle
          cx={-46.225}
          cy={85.849}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={-57.734}
          cy={85.849}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <rect
        width={112.095}
        height={89.066}
        x={49.381}
        y={111.101}
        rx={48.258}
        ry={25.698}
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeWidth: 2.4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <rect
        width={83.085}
        height={44.479}
        x={63.885}
        y={123.574}
        rx={35.769}
        ry={12.833}
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 2.504,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <g transform="translate(19.748 38.63)">
        <ellipse
          cx={101.427}
          cy={108.2}
          rx={6.265}
          ry={10.837}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2.504,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={69.932}
          cy={108.2}
          rx={6.265}
          ry={10.837}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 2.504,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <g transform="translate(-.1)">
        <circle
          cx={-186.343}
          cy={105.428}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90)"
        />
        <circle
          cx={-186.343}
          cy={111.183}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90)"
        />
        <circle
          cx={-186.343}
          cy={99.673}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90)"
        />
        <circle
          cx={-180.456}
          cy={105.428}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90)"
        />
        <circle
          cx={-191.966}
          cy={105.428}
          r={2.072}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.276388,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90)"
        />
        <circle
          cx={101.967}
          cy={182.749}
          r={0.981}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.1309,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={108.89}
          cy={182.749}
          r={0.981}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.1309,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={101.967}
          cy={189.672}
          r={0.981}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.1309,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
        <circle
          cx={108.89}
          cy={189.672}
          r={0.981}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.1309,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        d="M23.428 194.096c1.664 1.427 3.454 2.703 5.394 3.674 2.271 1.141 4.735 1.897 7.244 2.463 9.2 2.071 18.743 2.286 28.248 2.707l-.063 1.33c-9.485-.447-19.106-.706-28.459-2.837-2.57-.585-5.125-1.384-7.513-2.59-.318-.161-.632-.33-.942-.505-1.486-1.293-2.766-2.734-3.91-4.242z"
        className="UnoptimicedTransforms"
        style={{
          stroke: "#000",
          strokeWidth: 2.4,
        }}
        transform="translate(26.234 -16.885)"
      />
      <ellipse
        cx={89.129}
        cy={186.616}
        rx={6.314}
        ry={3.555}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 2.4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>}
          {message.role === "user" && <svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            viewBox="0 96 895 960"
          >
            <path
              d="M452.634 520.268q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42zm-320 321v-94q0-38 19-65t49-41q67-30 128.5-45t123.5-15q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966 18.889 26.84 18.889 64.84v94zm60-60h520v-34q0-16-9.5-30.5t-23.5-21.5q-64-31-117-42.5t-110-11.5q-57 0-111 11.5t-117 42.5q-14 7-23 21.5t-9 30.5zm260-321q39 0 64.5-25.5t25.5-64.5q0-39-25.5-64.5t-64.5-25.5q-39 0-64.5 25.5t-25.5 64.5q0 39 25.5 64.5t64.5 25.5zm0-90zm0 411z"
              style={{
                fill: "#fff",
                fillOpacity: 1,
              }}
            />
          </svg>}
        </div>
        <div className='message'>
          {message.content}
        </div>
      </div>
    </div >
  )
}



export default App;


