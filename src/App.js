import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
    }
  }
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
}

  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }
  render(){
    return(
      <div className="App">
     <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
        />
        </div>
    )
  }
}
export default App;