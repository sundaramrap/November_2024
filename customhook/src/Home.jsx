import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(" Enter Name");

  useEffect((name) => {
    setName(name);
  }, []);

  return (
    <div>
      <input type="text" name="name" />
      <div> Name :{name} </div>
    </div>
  );
}

// Make a application to take a name from the user and then show it on the text
