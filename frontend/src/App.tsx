import './App.css';
import StubScreen from './screens/StubScreen';
// import {inspect} from "util";
import './App.css';

import eruda from 'eruda'
import {Route, Routes} from "react-router-dom";

eruda.init()

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<StubScreen/>}/>
            <Route path={'/test'} element={<span>test</span>}/>
        </Routes>
    );
}

export default App;