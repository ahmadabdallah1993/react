import React from 'react';
import ReactDOM from "react-dom";


class App extends React.Component {

  render() {
    return(
      <div>
        

        <main>
          <h2>"id": 1</h2>
          <img 
      src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
      alt="new"
      />
      <p></p>
      <p>"description": "A unicorn and a narwhal nuzzling their horns"</p>
      <p> "keyword": "narwhal",</p>
      <p>"horns": 1</p>
     
          <hornedBeast></hornedBeast>


          <h2>"_id": 2</h2>
          <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" alt="new"
      />
       <p>"title": "Rhino Family"</p>
       <p>"description": "Parent rhino with two babies"</p>
       <p>"keyword": "rhino"</p>
       <p>"horns": 2</p>
          <hornedBeast></hornedBeast>


          <h2>"_id": 3</h2>
          <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" alt="new"
      />
    <p>"title": "Unicorn Head"</p>
    <p>"description": "Someone wearing a very silly unicorn head mask"</p>
    <p>"keyword": "unicorn"</p>
    <p> "horns": 1</p>
          
 

        </main>

        
      </div>

    )
  }
}

export default App;
const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);
