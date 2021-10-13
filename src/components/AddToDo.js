import React, { useState } from 'react';

function AddToDo (){
    const todos = ["coucou","coucou2"];
    function clickHandler() {
        // Something...
      }
    return (
        <div className="addToDo">
            <form>
                <input  value="" type="text" 
                        placeholder='Type a new ToDo'/>
                <button>add a ToDo</button>
            </form>
        </div>

    )
}

export default AddToDo;