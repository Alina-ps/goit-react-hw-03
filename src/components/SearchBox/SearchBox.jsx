import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.searchWrapper}>
      <label className={s.searchLabel}>
        Find contacts by name
        <input type="text" />
      </label>
    </div>
  );
};

export default SearchBox;
