## DROPDOWN (React.js and CSS)

### Features Implemented

<img src="https://github.com/user-attachments/assets/38b82f39-6858-4b61-98be-7d11fe252c06" width="700" height="400">

1. The dropdown functionality is split into multiple components: Dropdown, DropdownButton, DropdownContent, DropdownItem, and SearchBar. It accepts props like searchEnabled, expandUpward, and showTick.
2. The open/closed state of the dropdown is managed using useState Hook. Based on the state, the dropdown content is rendered.
3. If the search feature is enabled, then the DropdownButton component renders a SearchBar only when the open state is true. Based on the search text, the options are filtered.
4. The items to be displayed can have different properties like text, icon, and disabled. These are passed as props and the DropdownItem is rendered based on the property of that item.
5. The position property of dropdown is set to absolute. So by adjusting the top and left properties the dropdown can be placed anywhere in a website.
6. To change the color used for the dropdown compoonent, update the values of the variables defined in the :root selector of index.css
