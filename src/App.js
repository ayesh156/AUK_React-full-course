import {Fragment, useState} from "react";
import './App.css';
import Unit from "./Components/Unit";
import Header from "./Components/Header";

const App = () => {
    const [inputData, setInputData] = useState({
        imageUrl: '',
        name: '',
        city: '',
        position: '',
    });

    const [myData, setMyData] = useState([]);

    // console.log(myData);

    return (
        <Fragment >
            <Header />
            <div className="main_container">
                <div className="main_left">
                    <input type="text" placeholder="Image URL" value={inputData.imageUrl} onChange={(e) => {
                        e.preventDefault();
                        setInputData(preInputData => ({
                            ...preInputData,
                            imageUrl: e.target.value
                        }));
                    }}/>
                    <input type="text" placeholder="Name" value={inputData.name} onChange={(e) => {
                        e.preventDefault();
                        setInputData(preInputData => ({
                            ...preInputData,
                            name: e.target.value
                        }));
                    }}/>
                    <input type="text" placeholder="City" value={inputData.city} onChange={(e) => {
                        e.preventDefault();
                        setInputData(preInputData => ({
                            ...preInputData,
                            city: e.target.value
                        }));
                    }}/>
                    <input type="text" placeholder="Position" value={inputData.position} onChange={(e) => {
                        e.preventDefault();
                        setInputData(preInputData => ({
                            ...preInputData,
                            position: e.target.value
                        }));
                    }}/>
                    <button
                        onClick={() => {
                            setMyData(pre => [...pre, {
                                    image: inputData.imageUrl,
                                    name: inputData.name,
                                    city: inputData.city,
                                    position: inputData.position
                                }]
                            )

                            setInputData((pre) => {
                                if (pre.imageUrl.length > 0) {
                                    return {
                                        ...pre,
                                        imageUrl: ''
                                    };
                                } else {
                                    return pre;
                                }
                            });

                            setInputData((name) => (name.name.length > 0) ? ({
                                ...name,
                                name: ''
                            }) : name);
                            setInputData((preCity) => (preCity.city.length > 0) ? ({
                                ...preCity,
                                city: ''
                            }) : preCity);
                            setInputData((prePosition) => (prePosition.position.length > 0) ? ({
                                ...prePosition,
                                position: ''
                            }) : prePosition);
                        }}
                    >Submit
                    </button>
                </div>
                <div className="main_right">
                    {myData?.map(({image, name, city, position}, index) => <Unit
                        key={index}
                        image={image}
                        name={name}
                        city={city}
                        position={position}
                    />)}
                </div>

            </div>
        </Fragment>
    )
}


export default App;