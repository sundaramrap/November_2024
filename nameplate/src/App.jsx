import { useState } from "react";

function App() {
  const [fname, setFName] = useState("");

  return (
    <>
      <h1>Display Full Name</h1>
      <form action="handleSubmit">
        <label htmlFor="text">
          First Name:{fname}
          <input />
        </label>
        <br />
        <label>
          Last Name: <input />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>FullName:</p>
    </>
  );
}
export default App;
