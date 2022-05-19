import { useState } from "react";
import "./App.css";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Nav from "./components/Nav/index";
import Projects from "./components/Projects/index";
import Resume from "./components/Resume/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navSelection, setNavSelection] = useState("about");

  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts);

  return (
    <div>
      <Nav navSelection={navSelection} setNavSelection={setNavSelection}></Nav>
      <main>
        {navSelection === "about" ? (
          <About></About>
        ) : navSelection === "projects" ? (
          <Projects></Projects>
        ) : navSelection === "contact" ? (
          <Contact addContact={addContact}></Contact>
        ) : (
          <Resume></Resume>
        )}
      </main>
    </div>
  );
}

export default App;
