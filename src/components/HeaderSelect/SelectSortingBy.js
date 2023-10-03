import {useEffect, useState} from 'react';
import styles from './SelectOptions.module.css';


const SelectSortingBy = (props) => {

    const options = [
        { value: 'relevance', label: 'relevant'},
        { value: 'newest', label: 'newest'},
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const changeSelectSortingHandler = (ev) => {
        setSelectedValue(ev.target.value);
    }

    useEffect(()=>{
        props.onSaveSortingValue(selectedValue);
    },[selectedValue]);
    

    return (
        <div className={styles.select}>
            <label htmlFor='sorting'>Sorting by</label>
            <select id='sorting' defaultValue={options[0].value} onChange={changeSelectSortingHandler}>
                {options.map((option, index) => <option value={option.value} key={index}>{option.label}</option>)}
            </select>
        </div>
    )
}

export default SelectSortingBy;