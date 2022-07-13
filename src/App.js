import React from 'react'
import "./App.css";
import Footer from "./component/footer/Footer";
import Form from './component/form/Form';
 
import Header from "./component/header/Header";
import Messages from "./component/messages/Messages";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="message_form">
        <Messages />
        <Form />
      </div>

      <Footer />
    </div>
  );
}

export default App;
