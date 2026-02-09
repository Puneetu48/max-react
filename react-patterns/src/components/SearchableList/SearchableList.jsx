import { useState } from 'react';

function SearchableList({ items, itemKeyFn, children }) {
  const [searchText, setSearchText] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase()),
  );

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className='searchable-list'>
      <input type='search' name='search' id='search' onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
