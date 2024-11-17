import './App.css';
import Main from "./Components/Main";
import {useState} from "react";
import {myData} from "./Data/myData";

function App() {
    const [inputVal, setInputVal] = useState(0);

    const clickHandle = () => {
        setTimeout(() => {
            console.log("I am clicked");
            setInputVal((prev) => {
                if(prev < 1){
                    return prev + 1;
                } else if (prev < 2){
                    return prev + 3;
                } else {
                    return prev + 2;
                }
            });
        }, 2000);
    }

    const mainBlock = myData.map(({ id,name, city, image, position }, index) => {
        return <Main key={index} name={name} city={city} image={image} position={position} />;
    });

  return (
      <div className="main_container">
          <div>
              AUK Course
              <h2>{inputVal}</h2>
          </div>
          <h1>Chathuranga</h1>
          <div className="mainBlock_container">
          {mainBlock}
          </div>
          <br/>
          <br/>
          <button
              style={{
                fontSize: "12px",
                border: "1px solid red",
                padding: "7px 12px",
            }}

              onClick={clickHandle}
          >
              Click Me
          </button>
      </div>
  );
}

export default App;
