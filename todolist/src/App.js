import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  // const [toDostemp, deleteToDos]=useState(toDos)
  // const deleteEvent = (e)=>{
  //   deleteToDos(list.filter(item=>item.key!==e.target.value))
  // }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>List your todo things here...</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { key: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value) => {
            return (<div className={(value.status ? "doneList" : "notDoneList")}>
              <div className="left">
                <input onChange={(e) => {
                  // value.status=!status
                  // console.log(e.target.value)
                  // value.status=!value.status
                  setToDos(toDos.filter(obj => {
                    if (obj.key === value.key) {
                      obj.status = e.target.checked
                    }
                    return obj
                  }))
                  console.log(value)
                }} value={value.status} type="checkbox" name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={() => {
                  setToDos(toDos.filter(obj => (obj.key !== value.key)))
                  // console.log(obj)
                }
                } className="fas fa-times"></i>
              </div>
            </div>)
          })
        }

        <div className="subHeading">
          <br />

          {
            toDos.map((obj) => {
              if (obj.status) {
                return (<h3>You Did {obj.text}</h3>)
              }
              return null
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;