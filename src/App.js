import {Header} from "./components/header/header.component";
import {Contacts} from "./components/contacts/contacts.component";
import {Skills} from "./components/skills/skills.component";
import { Main } from "./components/main/main.component";
import {Photo} from "./components/photo/photo.component";
import {useContext, useEffect} from "react";
import ThemeContext from "./context/theme/themeContext";

function App() {
    const themeContext = useContext(ThemeContext);
    const {setInitValueTheme} = themeContext;

    useEffect(() => {
        const preference_query = window.matchMedia('(prefers-color-scheme: dark)');
        preference_query.addListener(setInitValueTheme);

        setInitValueTheme()
    }, [])

    return (
        <div className="App" data-theme={themeContext.theme}>
            <Header/>
            <main>
                <Contacts/>
                <div className="app__wrapper wrapper layout-line">
                    <div className="app__bl app__bl--lf">
                        <Skills/>
                        <Photo/>
                    </div>
                    <div className="app__bl app__bl--separate">
                        <Main/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
