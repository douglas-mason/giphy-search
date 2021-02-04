import './App.css';
import  React, { useEffect }  from "react";
import { Button } from 'antd';
import { searchGiphy } from './_shared/services/giphy-api.service';

function App() {
  useEffect(() => {
    searchGiphy("cupcake").then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Button >Click</Button>
      Test

    </div>
  );
}

export default App;
