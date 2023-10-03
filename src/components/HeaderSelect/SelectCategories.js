import React, {useEffect, useState} from 'react';
import styles from './SelectOptions.module.css';
// import Select from 'react-select';

const SelectCategories = (props) => {

    const options = [
        { value: 'all', label: 'all'},
        { value: 'art', label: 'art'},
        { value: 'biography', label: 'biography'},
        { value: 'computers', label: 'computers'},
        { value: 'history', label: 'history'},
        { value: 'medical', label: 'medical'},
        { value: 'poetry', label: 'poetry'}, 
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const changeSelectCategoriesHandler = (ev) => {
        setSelectedValue(ev.target.value);
    }

    useEffect(()=>{
        props.onSaveCategoriesValue(selectedValue);
    },[selectedValue])
    

    return (
        <div className={styles.select}>
            <label htmlFor='categories'>Categories</label>
            <select id='categories' defaultValue={options[0].value} onChange={changeSelectCategoriesHandler}>
                {options.map((option, index) => <option value={option.value} key={index} >{option.label}</option>)}
            </select>
        </div>
    )
}

export default SelectCategories;