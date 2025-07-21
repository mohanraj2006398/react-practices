// import React from 'react'

// const ToDo =()=>{
//     const [todo, setToDo] = useState('');
//     return (
//         <div>
//         <h1> To-Do List </h1>
//         </div>
//     )
// }
// export default ToDo

import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todoList: [],
    };
  }
  handleAdd = () => {
    let todoList = this.state.todoList;
    todoList.push(this.state.todo);
    this.setState({ todoList: todoList });
  };
   ToDoList = (i) => {
 let todoList=this.state.todoList.filter((j )=> j!== i) 
 this.setState({todoList: todoList});
  }
  todo = (index) => {
    let todoList = [this.state.todoList];
    todoList[index] = prompt("Edit your Todo", todoList[index]);
   this.setState({todoList: todoList});
  }
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <input
          type="text"
          placeholder="Add text"
          onChange={(e) => this.setState({ todo: e.target.value })}
        />
        <button onClick={() => this.handleAdd()}>Add</button>

     <div>
         
          {this.state.todoList.map((i, index) => (
            <ul key={index}> 
            <li>{i}
              <button onClick={() => this.todo(index)}>edit</button>
              <button onClick={() => this.ToDoList(i)} >delete</button>
            </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDo;






