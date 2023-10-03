import styles from './Card.module.css';
import {useState, useEffect} from 'react';

const Card = (props) => {
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);

    const clickHandler = () => {
        setItem(props.item);
        setShow(true);
    }

    useEffect(()=>{
        props.onSaveClickedItem(item);
        props.onSaveShowState(show)
    }, [item, show]);
    
    let isImagePresented = props.imageSrc !== undefined;

    if (isImagePresented) {
        return (
            <div className={styles.card} onClick={clickHandler}>
                <img src={`${props.imageSrc}`} alt={`${props.title}`}/>
                <div className={styles.info}>
                    <p className={styles.category}>{props.category}</p>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.authors}>{props.authors}</p>
                </div>
            </div>    
        )
    }
    
}

export default Card;