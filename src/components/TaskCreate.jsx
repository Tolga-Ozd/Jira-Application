import { useState } from "react";

function TaskCreate ({onCreate}) {
    const [title, setTitle] = useState("")
    const [taskDesc, setTaskDesc] = useState("")

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleTaskChange = (e)=>{
        setTaskDesc(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        onCreate(title , taskDesc)
        setTitle("");
        setTaskDesc("")
    }

    return ( 
        <div>
            <h3 className="task-create">Lütfen Task Giriniz!</h3>
            <form className="task-form">

                <label className="task-label">Başlık</label>
                <input value={title} 
                onChange={handleChange} 
                className="task-input"/>

                <label className="task-label">Task Giriniz</label>
                <textarea value={taskDesc}  
                onChange={handleTaskChange} 
                className="task-input" 
                rows={5} />

                <button onClick={handleSubmit } className="task-button">Oluştur</button>

            </form>

        </div>
     );
}

export default TaskCreate;