/* 

    Create nested elements in React

    <div id="parent">
        <div id="child">
            <h1> I'm an h1 tag </h1>    //sibling
            <h2> I'm an h2 tag </h2>    //sibling
        </div>
    </div>

*/

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React.js"
);

const nestedElements = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(nestedElements);

// root.render(heading);
root.render(nestedElements);
