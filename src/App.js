import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null);

    const showAlert = (message) => {
        setAlert({
            msg: message
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }
    const darkMode = () => {
        setMode("dark");
        document.body.style.backgroundColor = 'rgb(27 40 51)';
        document.body.style.color = 'white';
        // document.getElementById('myBox').style.backgroundColor = 'rgb(27 40 51)';
        // document.getElementById('myBox').style.color = 'white';

    }
    const lightMode = () => {
        setMode("light");
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        // document.getElementById('myBox').style.backgroundColor = 'white';
        // document.getElementById('myBox').style.color = 'black';
    }
    return (
        <>
        <Router>
            <Navbar title="TextUtils" aboutText="About Us" mode={mode} darkMode={darkMode} lightMode={lightMode} />
            <Alert alert={alert} />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>

                    <Route exact path="/">
                        <TextForm heading="Welcome to form" showAlert={showAlert} mode={mode} />
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    );
}

export default App;