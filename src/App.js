import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

export const App = (props) => {
  const { dialogs, messages } = props.data;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
