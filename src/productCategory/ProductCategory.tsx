// Import necessary React and TypeScript modules
import React, { useState } from 'react';

// Define the Category type
type Category = {
  id: number;
  name: string;
};

// Component for displaying individual category items
const CategoryItem: React.FC<{
  category: Category;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newName: string) => void;
}> = ({ category, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(category.name);

  const handleUpdate = () => {
    onUpdate(category.id, newName);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          {category.name}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(category.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

// Main CategoryPage component
const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAdd = () => {
    if (newCategory.trim() !== '') {
      setCategories((prevCategories) => [
        ...prevCategories,
        { id: Date.now(), name: newCategory },
      ]);
      setNewCategory('');
    }
  };

  const handleDelete = (id: number) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  const handleUpdate = (id: number, newName: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id ? { ...category, name: newName } : category
      )
    );
  };

  return (
    <div>
      <h1>Shop Categories</h1>
      <div>
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
