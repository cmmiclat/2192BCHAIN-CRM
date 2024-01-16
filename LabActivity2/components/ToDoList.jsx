//  Miclat, Chadle Rei M.
import React from 'react';

const title = "The To Do List"

export default class ToDoList extends React.Component { 
    render() {
        return(
            <div>
                <h2>{title}</h2>
                <ul>
                    <li>Wake Up</li>
                    <li>Make Breakfast</li>
                    <li>Do Laundry</li>
                    <li>Do the Dishes</li>
                    <li>Go Grocery Shopping</li>
                    <li>Feed the Dog</li>
                </ul>
            </div>
        );
    }
}
