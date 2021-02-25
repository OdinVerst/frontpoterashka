import {Header} from "./components/header/header.component";
import {Contacts} from "./components/contacts/contacts.component";
import {Skills} from "./components/skills/skills.component";
import {Experience} from "./components/experience/experience.component";
import {Photo} from "./components/photo/photo.component";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Contacts />
        <div className="app__wrapper wrapper layout-line">
            <div className="app__bl">
                <Skills />
                <Photo />
            </div>
            <div className="app__bl app__bl--separate">
                <Experience />
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
