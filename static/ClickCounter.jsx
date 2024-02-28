//components: encapsulate logic & html into func, making it easier to build interactive user interfaces, 
  //reusable functions that return HTML(like) React Elems(UI & Logic)

  function ClickCounter(props) {
    //initial state,  array[stateVal, func to update state]
  const [currentCount, setCurrentCount] = React.useState(props.initialCount);
    //current count is part of stat b/c when it changes we want React to re-render 
    //the component and display the current val

  function incrementCount() {
    setCurrentCount(currentCount + 1);
  }

  return (
    <div>
      <div>{currentCount}</div>
      <button type="button" onClick={incrementCount}>
        Click me to increase the count
      </button>
    </div>
  );
}

ReactDOM.render(
                <React.Fragment>
                <ClickCounter initialCount={0} />
                <ClickCounter initialCount={10} />
                <ClickCounter initialCount={100090} />
                </React.Fragment>
                , document.querySelector('#root'));
