import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

// Class-based component that uses component-level state
// class App extends React.Component {
    
//     state = { resource: 'posts' };
    
//     onResourceClicked = resource => {
//         this.setState({ resource });
//     }
    
//     render() {
//         return (
//             <div className="ui container">
//                 <div>
//                     <button onClick={ () => this.onResourceClicked('posts') } 
//                             className="ui button">Posts</button>
//                     <button onClick={ () => this.onResourceClicked('todos') } 
//                             className="ui button">Todos</button>
//                 </div>
//                 { this.state.resource }
//             </div>
//         );
//     }
// }

// Functional based component that uses a useState hook
const App = () => {
    
    // Array-destructuring
    // - 1st and 2nd elements in array returned by useState assigned to 
    //   variables (can have any name) defined in order
    // In functional component (with hooks) state held as multiple individual 
    // values rather than a single object with multiple values as for class components
    // Calling setResource causes the component to re-render
    const [resource, setResource] = useState('posts');
    
    return (
        <div className="ui container">
            <UserList />
            <div>
                <button onClick={ () => setResource('posts') } 
                        className="ui button">Posts</button>
                <button onClick={ () => setResource('todos') } 
                        className="ui button">Todos</button>
            </div>
            <ResourceList resource={ resource }/>
        </div>
    );
};

export default App;

