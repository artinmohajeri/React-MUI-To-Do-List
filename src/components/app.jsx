import React, { Component } from 'react';
import Header from './header';
import ToDoList from './toDoList';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './style/style.css'

class App extends Component {
    state = {}
    render() {
        return (
            <div className='w-100 h-100 p-4'>
                <Header />
                <ToDoList />
            </div>
        );
    }
}

export default App;