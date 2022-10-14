// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setamount] = useState("100");

  const handleSubmit = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_f89aKkLfxrvOju",
      key_secret: "8pU4i3wKIqKO6W6O5b0y7PTf",
      amount: amount * 100,
      currency: "INR",
      name: "air-bnb",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "suryansh",
        email: "suryansh@gmail.com",
        contact: "9958037327",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="App">
      <h2>Razorpay Payment Integration Using React</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <br />
      <br />
      <button
        value={amount}
        onChange={(e) => setamount(e.target.value)}
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default App;
