import './FilterCheckbox.css';

const FilterCheckbox = ({ onCheckbox, isShortMovies }) => {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__switch'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          checked={isShortMovies}
          onChange={onCheckbox}
          name='short'
        />
        <span className='filter-checkbox__slider filter-checkbox__slider_type_round'></span>
      </label>
      <p className='filter-checkbox__text'>
        <span onClick={onCheckbox}>Короткометражки</span>
      </p>
    </div>
  );
};

export default FilterCheckbox;
