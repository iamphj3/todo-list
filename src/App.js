import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemsList';

class App extends Component {
  render() {
    return (
      <div>
        <TodoListTemplate form={<Form/>}>
          <TodoItemList/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
