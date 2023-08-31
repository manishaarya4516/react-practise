import { useState } from "react";
import "./App.css";
import { CreateNote } from "./component/createnote/createnote";
import { Footer } from "./component/footer/footer";
import { Header } from "./component/header/header";
import { KeepNote } from "./component/keepnote/keepnote";
import { BookList } from "./component/booklist";
import { ErrorExample1 } from "../src/component/usestate/setup/errorexample1";
import { ArrayExample } from "./component/usestate/setup/arrayexample";
import { ObjectExample } from "./component/usestate/setup/objectexample";
import { Counter } from "./component/usestate/setup/counter";
import { UseEffect } from "./topics/useEffect/useEffect";
import { FinalUseffect } from "./topics/useEffect/finaluseffect";
import { ConditionalRendering } from "./topics/conditionalrendering/conditionalrendering";
import { Form } from "./topics/form/form";
import { Form2 } from "./topics/form/form2";
import { UseRef } from "./topics/useref/useref";
import GitIssuePage from "./component/gitissuepage/gitissuepage";

function App() {
  const [note, setNote] = useState([]);

  return (
    <div className="App">
      {/* <Header />
      <CreateNote keepNote={setNote} />
      <KeepNote noteList={note} />
      <Footer /> */}
      <BookList />
      {/* <ErrorExample1/> */}
      {/* <ArrayExample/> */}
      {/* <ObjectExample/>
      <Counter/>  */}
      {/* <UseEffect/> */}
      {/* <FinalUseffect/> */}
      {/* <ConditionalRendering/> */}
      {/* <Form2/> */}
      {/* <UseRef/> */}
      {/* <GitIssuePage /> */}
    </div>
  );
}

export default App;
