import React, { useState } from 'react';

function AddToDo (){
    const todos = ["coucou","coucou2"];

    return (
        <div className="addToDo">
            <form>
                <input  value="" type="text" 
                        placeholder='Type a new ToDo'/>
                <input type="submit"/>
            </form>
        </div>

    )
}

export default AddToDo;