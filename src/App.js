import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';

function App() {
  const items = [
    { text: "Selected Option" },
    { text: "Default Option" },
    { text: "Hovered Option" },
    { text: "Disabled Option",disabled: true },
    { text: "Text Option" },
    { text: "Icon and Text Option", icon: <FaBeer /> },
    { text: "Hovered1 Option" },
    { text: "Disabled2 Option",disabled: true },
    { text: "Text3 Option" },
  ];
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
        <Dropdown 
          buttonText={selectedItem.text} 
          content={items} 
          onSelect={handleSelect} 
          searchEnabled={true}
          expandUpward={false}
          showTick={false}
        />
    </div>
  );
}

export default App;