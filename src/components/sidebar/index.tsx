import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Filter By:</h2>
      <fieldset>
        <legend>Category</legend>
        <label><input type="checkbox" name="category" value="electronics" /> Electronics</label>
        <label><input type="checkbox" name="category" value="clothing" /> Clothing</label>
        <label><input type="checkbox" name="category" value="books" /> Books</label>
      </fieldset>
      <fieldset>
        <legend>Price Range</legend>
        <label><input type="checkbox" name="price" value="0-50" /> $0 - $50</label>
        <label><input type="checkbox" name="price" value="50-100" /> $50 - $100</label>
        <label><input type="checkbox" name="price" value="100+" /> $100+</label>
      </fieldset>
    </aside>
  )
};

export default Sidebar;
