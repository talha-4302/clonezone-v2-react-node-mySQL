import  { useState } from 'react';

const NavSearch = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const options = ['All', 'Arts', 'Electronics', 'Accessories', 'Fashion', 'Furniture', 'Design'];

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); 
  };

  return (
      <div className= {`nav-search-catagory ${isDropdownOpen ? 'select-clicked' : ''}`}>


        <div className="select" onClick={toggleDropdown}>
          <span className="selected">{selectedOption}</span>
          <div className="caret">

            
            <img src="assets/dropdown_icon.png" width="10" alt="Dropdown Icon" />
          </div>
        </div>
        {isDropdownOpen && (
          <ul className={`menu ${isDropdownOpen ? 'menu-open' : ''}`}>
            {options.map((option, index) => (
              <li key={index} className= {` ${option == selectedOption ? 'list-hover' : ''}`} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      
    
  );
};

export default NavSearch;
