import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {

  const createTask = (title , taskDesc) =>{
    console.log(title , taskDesc);
  }

  return (
    <div className="App">
      
      <TaskCreate onCreate={createTask} />

      <h1>Görevler</h1>

      <TaskList /> 

    </div>
  )
}

export default App
