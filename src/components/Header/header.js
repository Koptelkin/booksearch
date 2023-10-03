import {useEffect, useState} from 'react';
import HeaderForm from "./HeaderForm";
import HeaderOptions from "./HeaderOptions";
import styles from './Header.module.css';
import headerImage from '../../assets/annie-spratt-5cFwQ-WMcJU-unsplash-min.jpg';

const Header = (props) => {

    const [categoriesValue, setCategoriesValue] = useState('');
    const [sortingValue, setSortingValue] = useState('');

    const SaveBooksHandler = (booksData) => {
        props.onSaveBooksData(booksData);
    }

    const saveTotalHandler = (booksTotal) => {
        props.onSaveTotal(booksTotal);
    }

    const saveCategoriesHandler = (val) => {
        setCategoriesValue(val);
    }

    const saveSortingHandler = (val) => {
        setSortingValue(val);
    }

    // useEffect(()=>{
    //     console.log(categoriesValue);
    //     console.log(sortingValue)
    // },[categoriesValue, sortingValue])

    return (
        <header className={styles.header}>
            <div className={styles.background}>
                <img src={headerImage}/>
            </div>
            <div className={styles.content}>
                <h1>Search for books</h1>
                <HeaderForm onSaveBooksData={SaveBooksHandler} onSaveTotal={saveTotalHandler} categories={categoriesValue} sorting={sortingValue}/>
                <HeaderOptions onSaveCategories={saveCategoriesHandler} onSaveSorting={saveSortingHandler}/>
            </div>  
        </header>
    )
}

export default Header;