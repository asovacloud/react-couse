import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <div>
      <MyContext.Provider value="Yo yo yo!!!">
        <Child />
      </MyContext.Provider>
    </div>
  );
};

const Child = () => {
  const value = useContext(MyContext);

  return <p>{ value }</p>
};

ReactDOM.render(<App/>, document.getElementById('root'));
