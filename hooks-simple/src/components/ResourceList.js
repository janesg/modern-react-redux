import React from 'react';

import useResources from './useResources';

// import React, { useState, useEffect } from 'react';

// import axios from 'axios';

// Class-based component version
// class ResourceList extends React.Component {
    
//     state = { resources: [] };
    
//     async fetchResources() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${ this.props.resource }`);
//         this.setState({ resources: response.data });
//     }
    
//     componentDidMount() {
//         this.fetchResources();
//     }
    
//     componentDidUpdate(prevProps) {
//         // Only fetch resources if the resource property has changed
//         // - prevents infinite loop as calling setState causes another
//         //   invocation of componentDidUpdate
//         if (prevProps.resource !== this.props.resource) {
//             this.fetchResources();
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 ResourceList : { this.state.resources.length }
//             </div>
//         );
//     }
// }

// Function-based component version ... before refactoring for reuse
//  - destructure props to obtain the passed resource
// const ResourceList = ({ resource }) => {
    
//     const [resources, setResources] = useState([]);
    
//     // const fetchResources = async () => {
//     //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`);
//     //     setResources(response.data);
//     // };
    
//     // useEffect 'simulates' class-based component lifecycle methods
//     // Arrow function only gets called if there's a value in the array and it changes between renders
//     //  - passing no array means that the arrow function gets called for every render
//     //      - similar to componentDidMount and componentDidUpdate with no prop change check
//     //  - passing empty array means that the arrow function for first render only
//     //      - similar to componentDidMount
//     useEffect(
//         // Note: the arrow function itself cannot be async or return a promise
        
//         // -> which means that:
        
//         // EITHER we call a helper function that handles the async stuff
//         // () => { fetchResources() },
        
//         // OR alternatively, define and immediately invoke a 2nd arrow function
//         //    from inside of the 1st arrow function
//         () => { 
//             (async () => {
//                 const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`);
//                 setResources(response.data);
//             })();            
//         },
//         [resource]
//     );
    
//     return (
//         <ul>{ resources.map(r => <li key={ r.id }>{ r.title }</li>) }</ul>
//     );
// };

const ResourceList = ({ resource }) => {
    
    const resources = useResources(resource);
    
    return (
        <ul>{ resources.map(r => <li key={ r.id }>{ r.title }</li>) }</ul>
    );
};

export default ResourceList;