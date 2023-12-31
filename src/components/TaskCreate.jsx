import { useState } from "react";

//alttakiler props
function TaskCreate ({onCreate , task , taskFormUpdate ,onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : "")
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "")

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleTaskChange = (e)=>{
        setTaskDesc(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(taskFormUpdate){
            onUpdate(task.id , title, taskDesc)
        }
        else{
            onCreate(title , taskDesc)
        }
        setTitle("");
        setTaskDesc("")
    }

    return ( 

        <div>{taskFormUpdate ? 
        
        (<div className="task-update">
        <h3 >Lütfen Taskı Güncelleyiniz!</h3>
        <form className="task-form">

            <label className="task-label">Başlığı Güncelleyiniz</label>
            <input value={title} 
            onChange={handleChange} 
            className="task-input"/>

            <label className="task-label">Taskı Güncelleyiniz</label>
            <textarea value={taskDesc}  
            onChange={handleTaskChange} 
            className="task-input" 
            rows={5} />

            <button onClick={handleSubmit } className="task-button update-button" >Bitir</button>

        </form>

    </div>) : 
    
    
    (<div className="task-create">
            <h3 className ="taskheader">Lütfen Task Giriniz!</h3>
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

        </div>)}</div>

       
     );
}

export default TaskCreate;