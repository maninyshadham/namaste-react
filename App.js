const parentElement = React.createElement("h1",{id : "parent",className : "h1-heading"},[React.createElement("div",{id : "child1"},[React.createElement("h1",{className : "h1-element" }, "I am  child1" ),React.createElement("h2",{className : "h2-element" }, "I am h2 child1" )]),React.createElement("div",{id : "child2"},[React.createElement("h1",{className : "h1-element" }, "I am h1 child2" ),React.createElement("h2",{className : "h2-element" }, "I am h2 child2" )])]);
console.log("heading",parentElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentElement);  