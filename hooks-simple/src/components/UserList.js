import React from 'react';

import useResources from './useResources';

// Example of reusing the useResources function
//  - as a result this component contains zero network access logic
const UserList = () => {
    
    const users = useResources('users');
    
    return (
        <ul>
            { users.map(u => <li key={ u.id }>{ u.name }</li>) }
        </ul>
    );
};

export default UserList;