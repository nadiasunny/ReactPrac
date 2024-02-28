//props are for configuring components, props can be strings or JS expression {['kkk']}
//no takebacksies w/props(like your name)
function RedButton(props) {
  //creating message property
  return <button type="button">{props.message}</button>;
}
//message:what button should say
ReactDOM.render(<RedButton message="Click me" />, document.querySelector('#root'));
ReactDOM.render(<RedButton message="Eat Cake" />, document.querySelector('#root'));
ReactDOM.render(<RedButton message="Love Ya" />, document.querySelector('#root'));

//to add several at once, can only return 1 thing, can wrap in parent element(<div></div);
//not semantic, can wrap in react.fragment instead
ReactDOM.render(
  (
    <React.Fragment>
      <RedButton message="Click me" />
      <RedButton message="Eat Cake" />
      <RedButton message="Or click me" />
    </React.Fragment>
  ),
  document.querySelector('#root')
);