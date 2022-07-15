import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Messages from "./component/messages/Messages";
import Form from "./component/form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="message">
        <div className="message_card">
          <Messages />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
