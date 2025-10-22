import React from 'react';
import { useCategories } from '../../hooks/useContentful';
import { categories as staticCategories } from '../../data/categories';

const CategoryFilters: React.FC = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div style={{ width: '100%', overflow: 'auto' }}>
        <ul style={{ fontFamily: 'Roslindale-TextRegular', borderTop: '1px solid rgb(216, 216, 216)', borderBottom: '1px solid rgb(216, 216, 216)', display: 'block', lineHeight: '45px', marginBottom: '38px', minWidth: '800px', padding: '32px 0', textAlign: 'center', listStyle: 'none' }}>
          <li style={{ display: 'inline-block', padding: '2px 14px', position: 'relative' }}>
            <span>Loading categories...</span>
          </li>
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ width: '100%', overflow: 'auto' }}>
        <ul style={{ fontFamily: 'Roslindale-TextRegular', borderTop: '1px solid rgb(216, 216, 216)', borderBottom: '1px solid rgb(216, 216, 216)', display: 'block', lineHeight: '45px', marginBottom: '38px', minWidth: '800px', padding: '32px 0', textAlign: 'center', listStyle: 'none' }}>
          <li style={{ display: 'inline-block', padding: '2px 14px', position: 'relative' }}>
            <span>Error loading categories: {error}</span>
          </li>
        </ul>
      </div>
    );
  }

  // Use Contentful categories if available, otherwise fallback to static data
  const displayCategories = categories.length > 0 ? categories : staticCategories.map(cat => cat.title);

  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <ul style={{ fontFamily: 'Roslindale-TextRegular', borderTop: '1px solid rgb(216, 216, 216)', borderBottom: '1px solid rgb(216, 216, 216)', display: 'block', lineHeight: '45px', marginBottom: '38px', minWidth: '800px', padding: '32px 0', textAlign: 'center', listStyle: 'none' }}>
        {displayCategories.map((category) => (
          <li key={category} style={{ display: 'inline-block', padding: '2px 14px' }}>
            <a
              href={category === 'All' ? '/blog/' : `/blog/category/${category.toLowerCase()}/`}
              title={category}
              style={{
                color: category === 'All' ? 'rgb(43, 43, 43)' : 'rgb(59, 59, 59)',
                fontFamily: category === 'All' ? 'Roslindale-TextSemiBold' : 'Roslindale-TextRegular',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilters;