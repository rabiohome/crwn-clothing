import React from 'react';

import './category.styles.scss';

const CategoryPage = ({ match }) => (
    <div className="category">
        <h2>CATEGORY PAGE : {match.params.categoryId}</h2>
    </div>
);

export default CategoryPage;