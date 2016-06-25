var Nav = (props) => {
  return (<nav className="navbar">
            <div className="col-md-6 col-md-offset-3">
              <Search submitHandler={props.submitHandler} changeHandler={props.changeHandler} context={props.context}/>
            </div>
          </nav>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
