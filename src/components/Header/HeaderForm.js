import {useEffect, useState} from 'react';
import styles from './HeaderForm.module.css';
import {LuSearch} from 'react-icons/lu';

const HeaderForm = (props) => {

    const [searchValue, setSearchValue] = useState('');
 
    const InputChangeHandler = (ev) => {
        setSearchValue(ev.target.value);
    }

    const SubmitHandler = async (ev) => {
        ev.preventDefault();

        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+ searchValue + `${props.categories !== 'all' ? '+subject:'+props.categories : ''}` + '&orderBy='+ props.sorting +'&key=AIzaSyC5GcWI3NCfuVaEozVSPM1m-PWdRITBwVY'+'&maxResults=8');
        const responseData = await response.json();
        
        const booksData = [];
        const booksTotal = responseData.totalItems;

        responseData.items.forEach(book => {
            booksData.push({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors && book.volumeInfo.authors[0] || 'Not determined',
                categories: book.volumeInfo.categories ? book.volumeInfo.categories && book.volumeInfo.categories[0] : 'Not determined',
                imageSrc: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail,
                description: book.volumeInfo.description ? book.volumeInfo.description : 'There is no description',
            })
        });

        props.onSaveTotal(booksTotal);
        props.onSaveBooksData(booksData);

    }

    // useEffect(()=>{
    //     const fetchBooks = async () => {
    //         const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+ searchValue +'&orderBy='+ props.sorting +'&key=AIzaSyC5GcWI3NCfuVaEozVSPM1m-PWdRITBwVY'+'&maxResults=8');
    //         const responseData = await response.json();
        
    //         const booksData = [];

    //         // console.log(responseData.items);

    //         responseData.items.forEach(book => {
    //             booksData.push({
    //                 title: book.volumeInfo.title,
    //                 authors: book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors && book.volumeInfo.authors[0] || 'Not determined',
    //                 categories: book.volumeInfo.categories ? book.volumeInfo.categories && book.volumeInfo.categories[0] : 'Not determined',
    //                 imageSrc: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail,

    //             })
    //         });

    //         props.onSaveBooksData(booksData);
    //     }
    //     fetchBooks();
    // }, [props.sorting, props.categories]);

    return <form className={styles.form} onSubmit={SubmitHandler} >
        <input placeholder='Enter your book name' value={searchValue} onChange={InputChangeHandler}/>
        <button hidden id='button'></button>
        <label htmlFor='button' className={styles.button}>
            <LuSearch/>
        </label>
    </form>
}

export default HeaderForm;