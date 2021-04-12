import React, { Component,  useState } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import styled from 'styled-components'; 
// import Radium, { StyleRoot } from 'radium'; 
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

//Assignment 1
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
//Assignment 2
import Validation from './Validation/Validation';
import Char from './Char/Char';

// Functional style:
// const App = props => {
//     const [ personsState, setPersonsState ] = useState({ 
//       persons: [
//         { name: 'Joshua', age: 31 },
//         { name: 'Yael', age: '27' },
//         { name: 'Noah', age: 31 },
//         { name: 'Baily', age: 32 }
//       ],
//       otherState: 'some other value'
//   });

//     const switchNameHandler = () => {
//           // console.log('Button clicked');
//           // Don't do this: this.state.persons[0].name = 'Joshua Michael'
      
//           setPersonsState({
//             persons: [
//               { name: 'Joshua Michael', age: 31 },
//               { name: 'Yael', age: '27' },
//               { name: 'Noah', age: 31 },
//               { name: 'Baily', age: 32 }
//             ],
//             otherState: personsState.otherState
//           })
//         }
      
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Reading</Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
//     </div>
//   );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
//   }
// export default App;

//  Class-based style:

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
`; 
class App extends Component {
  state = { 
    persons: [
      { id: 'jos001', name: 'Joshua', age: 31 },
      { id: 'yae001', name: 'Yael', age: '27' },
      { id: 'noa001', name: 'Noah', age: 31 },
      { id: 'bai001', name: 'Baily', age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false 
  }

  switchNameHandler = (newName) => {
    // console.log('Button clicked');
    // Don't do this: this.state.persons[0].name = 'Joshua Michael'

    this.setState( {
      persons: [
        { name: newName, age: 31 },
        { name: 'Yael', age: '27' },
        { name: 'Noah', age: 31 },
        { name: 'Baily', age: 32 }
      ]
    })
  }

  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // COULD ALSO USE 
    // const person = Objec.assign({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
  } 

  togglePersonsHandler = () => {
      const currentlyShowing = this.state.showPersons;
      this.setState({ showPersons: !currentlyShowing});
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

  //   let persons = (
  //     // <button 
  //     //   style={style}
  //     //   onClick={this.togglePersonsHandler}
  //     // >Display List</button>
      
  //  );

    let buttonClass = [styles.Button];

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
        </div>
      );
      buttonClass.push(styles.Red);

      // style.backgroundColor = 'red';
      // style.border = '1px solid red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }
    return (
      // <StyleRoot>
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button 
          className={buttonClass.join(' ')}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >Toggle List</button>
        {persons}

      </div>
      // </StyleRoot>
      
    );

    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}
// export default Radium(App);
export default App;

// Assignment 1
// class App extends Component {
//   state = { 
//     userName: 'user_1234'     
//   }

//   switchNameHandler = (newName) => {
//     // console.log('Button clicked');
//     // Don't do this: this.state.persons[0].name = 'Joshua Michael'

//     this.setState( {
//       userName: newName
//     })
//   }

  
//   nameChangeHandler = (event) => {
//     this.setState({
//       userName: event.target.value
//     })
//   }

//   render() {

//     return (
//       <div className="App">
//         <UserInput 
//         change={this.nameChangeHandler}
//         name={this.state.userName}
//         />
//         <UserOutput 
//         userName={this.state.userName}
//         ></UserOutput>
//         <UserOutput 
//         userName={this.state.userName}
//         ></UserOutput>
//         <UserOutput 
//         userName={this.state.userName}
//         ></UserOutput>
//       </div>
//     );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
//   }
// }
// export default App;

// Assignment 2
// class App extends Component {
  
//   state = {
//     userInput: ''
//   }
  
//   inputChangedHandler = (event) => {
//     this.setState({userInput: event.target.value});
//   }

//   deletedCharHandler = (index) => {
//     const text = this.state.userInput.split('');
//     text.splice(index, 1);
//     const newText = text.join('');
//     this.setState({userInput: newText});
//   }

//   render() {
//     const charList = this.state.userInput.split('').map(
      
//       (ch, index) => {
//         if(ch != ' ') {
//           return <Char character={ch} 
//           key={index} 
//           clicked={() => this.deletedCharHandler(index)}/>
//         }
       
//       }
//     );

//     return (
//       <div className="App">
//         <input 
//         type="text"
//         style={{textAlign: "center" }} 
//         onChange={this.inputChangedHandler}
//         value={this.state.userInput}
//         />
//         <h1>{this.state.userInput}</h1>
//         <Validation inputLength={this.state.userInput.length}/>
//         {charList}
//       </div>
//     )
//   }
// }
// export default App;
