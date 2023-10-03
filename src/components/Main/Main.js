import {useState, Fragment} from 'react';
import styles from './Main.module.css';
import Card from '../Card/Card';
import CardInfo from '../Card/CardInfo';

const Main = (props) => {

    const [visible, setVisible] = useState();
    const [item, setItem] = useState();

    const saveClickedItemHandler = (clickedItem) => {
        setItem(clickedItem);
    }

    const saveShowStateHandler = (showState) => {
        setVisible(showState);
    }

    const closeInfoHandler = (showState) => {
        setVisible(showState);
    }

    return ( 
        <main className={styles.main}>
            {!visible ? <Fragment>
                <p>{'Found ' + props.booksTotal + ' results'}</p>
                <div className={styles.container} >
                    {props.booksData.map((book, index) => 
                        <Card
                            key={index}
                            title={book.title}
                            authors={book.authors}
                            category={book.categories}
                            imageSrc={book.imageSrc}
                            item={book}
                            onSaveClickedItem={saveClickedItemHandler}
                            onSaveShowState={saveShowStateHandler}
                        />
                )}
                </div>
                <button>Load more</button>
            </Fragment> : <CardInfo 
                title={item.title}
                category={item.categories}
                authors={item.authors}
                imageSrc={item.imageSrc}
                description={item.description}
                onClose={closeInfoHandler}
            />}
            
        </main>

    )
}

export default Main;