function Hello() {
  return (
    <ul>
      <li>Hi World!</li>
    </ul>
  );
}
                //what?,     where to put? 
ReactDOM.render(<Hello />, document.querySelector('#root'));
//REQUIRED w/o nothing will show up on site
//can place js expressions &vars in curly braces when returning html(like)
