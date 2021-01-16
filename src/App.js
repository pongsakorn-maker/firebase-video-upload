import './App.css';
import React from 'react'
import {app} from './firebase'
function App() {
  const onChange = (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.Child(file.name)
    fileRef.put(file).then(()=>{
      console.log("Uploaded Complete")
    })
  }
  return (
    <input type="file" onChange={onChange}/>
  );
}

export default App;
