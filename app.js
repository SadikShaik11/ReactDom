
// to create react root
/**const root = ReactDOM.createRoot(document.getElementById('root'))
const head = React.createElement('p', { id: 'head', data: [1, 2, 3, 4,] }, ' Good evening from React')
const parent = React.createElement('div', {}, React.createElement('h2', {}, 'SubText of the parent'))
root.render(parent) **/


// example fot the real dom 

function setTimer() {
    const element1 = `
    <div>
      <h1>JavaScript DOM manipulation</h1>
      <input type="text" />
      <p>${new Date().toLocaleTimeString()}</p>
    </div>
  `;

    document.getElementById('container').innerHTML = element1;

}
//setInterval(setTimer, 1000);

/** 
 * 
 * un comment set time interval and When you check the browser dev tools, you will notice that every time the time changes, 
 * the whole div(container) is re-rendered. You won’t be able to type inside the input area because the whole div
 *  containing the “h1, input, and a p tag” will re-render after every 1 second.
 **/


/** VIRTUAL DOM  */

function setTimer() {
    const element1 = React.createElement('div',
        {}, React.createElement('h1', {}, 'React Dom Manipulation'),
        React.createElement('input', { type: 'text' }),
        React.createElement('p', {}, new Date().toLocaleTimeString()))
    // rendering the element1 inside the container div in the html
    ReactDOM.render(element1, document.getElementById('container'))
}
// setInterval(setTimer, 1000)

/***
 * now un comment the set timer and check the browser dev tools you can observe only the the p tag changing
 * and u can type inside the input tag 
 * this behavior is due to the virtual dom
 * 
 * whats happening on the backend is react captures a snap shot of the dom before change and the snapshot fo te dom after change
 * now it compares the the changes before and after and only changes the particular node which is changed
 * This is due to the diffing algorithm react uses 
 */
