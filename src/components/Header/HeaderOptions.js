import SelectCategories from "../HeaderSelect/SelectCategories";
import SelectSortingBy from "../HeaderSelect/SelectSortingBy";
import styles from './HeaderOptions.module.css';

const HeaderOptions = (props) => {

    const saveCategoriesValueHandler = (val) => {
        props.onSaveCategories(val);
    }

    const saveSortingValueHandler = (val) => {
        props.onSaveSorting(val);
    }

    return (
        <div className={styles.select}>
            <SelectCategories onSaveCategoriesValue={saveCategoriesValueHandler}/>
            <SelectSortingBy onSaveSortingValue={saveSortingValueHandler}/>
        </div>
    )
}

export default HeaderOptions;