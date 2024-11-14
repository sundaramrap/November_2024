// Make a application to take a name from the user and then show it on the text
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("Enter name ");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <p> Your name is a: {name}</p>
    </>
  );
}
