import { useState, useEffect } from "react";

const CardInfo = (props) => {

    const [show, setShow] = useState(true);

    const closeInfo = () => {
        setShow(false);
    }

    useEffect(()=>{
        props.onClose(show);
    }, [show]);

    return (
        <div>
            <img src={`${props.imageSrc}`}/>
            <div>
                <p>{props.category}</p>
                <h2>{props.title}</h2>
                <p>{props.authors}</p>
                <p>{props.description}</p>
                <button onClick={closeInfo}>Back</button>
            </div>
        </div>
    )
}

export default CardInfo;