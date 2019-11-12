import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
    <div className="collection-page">
        <h2>COLLECTION PAGE : {match.params.collectionId}</h2>
    </div>
);

export default CollectionPage;