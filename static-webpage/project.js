page = (
    <div>
        <img src="react.jpeg" width="40px"></img>
        <h1>Fun facts about react</h1>
        <ul>
            <li>released 2013</li>
            <li>maintained/created by facebook</li>
            <li>100k github stars</li>
            <li>powers thousands of enterprise apps and mobile apps</li>
        </ul>

    </div>

)

ReactDOM.render(page, document.getElementById("root"))

//Why do we need to 'import React from "react" in our files?
//react library allows us to use jsx-  jsx syntax is defined in react

//if I were to console.log(page) in project.js what would show up?
//a js object with properties of type, props, store, etc.

//What's wrong with (code in quiz)
//sibling elements need to be wrapped in a tag per JSX syntax

//What is declarative? Imperative?
//declarative is telling the computer to do something and we don't care how it does it
//tells the computer WHAT to do and expect it to handle the details
//imperative is giving the computer specific instructions how to do something, like rendering our html tags
//telling it how to do each step

//What does it mean for something to be composable?
//Composed of many parts. A web page will have several components that each do a specific task,
// and together they create the overall body of work