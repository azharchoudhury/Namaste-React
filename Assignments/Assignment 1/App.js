const heading = React.createElement('h1', {id: 'heading2'}, "This is a greeting from React file :)");

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement(
    'div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
    [React.createElement('h1', {id: 'heading1'}, 'I am h1'),
    React.createElement('h2', {id: 'heading2'}, 'I am h2')
]),


)


root.render(heading);
root.render(parent);