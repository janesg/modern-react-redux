import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// class App extends React.Component {
//     render() {
//         return (
//             <h2>It works !</h2>
//         );
//     }
// }

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this ?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={ faker.image.avatar() } 
                    author="Bob" 
                    date="Today at 13:27" 
                    text="'Ave it !" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={ faker.image.avatar() } 
                    author="Enid" 
                    date="Yesterday at 08:14" 
                    text="Text of some sort" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={ faker.image.avatar() } 
                    author="Geoff" 
                    date="Last Wednesday" 
                    text="Ipsum blah" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));