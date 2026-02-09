import { useRef, useState } from 'react';

function SearchableList({ items, itemKeyFn, children }) {
  const lastChange = useRef();
  const [searchText, setSearchText] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase()),
  );

  //adding debounce
  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchText(event.target.value);
    }, 500);
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
