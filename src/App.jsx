import React from 'react';
import './styles/App.css';
import Header from "./components/header.jsx";
import MainContainer from "./components/main_container.jsx";
import Footer from "./components/footer.jsx";

function App() {
    return (
        <div className={'content'}>
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
}

export default App;
