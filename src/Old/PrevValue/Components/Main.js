import dog from '../assets/dog.jpg';

function Main({ name, city, image, position}) {
    return (
        <div>
            <img src={image ? `${image}` : `${dog}`} alt="dog" />
            <div className="mainBlock_details">
                <h3>{!name ? `No name` : `${name}`}</h3>
                <div>
                <span>{city}</span>
                <span>{position}</span>
                </div>
            </div>
        </div>
    )
};

export default Main;