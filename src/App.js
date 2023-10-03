import {Fragment, useState} from 'react';
import Header from "./components/Header/header";
import Main from './components/Main/Main';


function App() {

  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState('');

  const addBooks = (booksData) => {
    setBooks(booksData);
  }

  const addTotal = (booksTotal) => {
    setTotal(booksTotal);
  }

  return (
    <Fragment>
      <Header onSaveBooksData={addBooks} onSaveTotal={addTotal}/>
      <Main booksData={books} booksTotal={total}/>
    </Fragment>
    
  );
}

export default App;
