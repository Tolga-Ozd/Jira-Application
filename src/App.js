import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <TaskCreate />

      <h1>Görevler</h1>

      <TaskList /> 

    </div>
  )
}

export default App
