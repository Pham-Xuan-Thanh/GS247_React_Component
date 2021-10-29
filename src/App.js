import logo from './logo.svg';
import './App.css';
import TextArea from './component/TextArea/textArea'; 

function App() {
  return (
    <div className="App" className="p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
        <p className="tracking-widest">This is my first React App.</p>

        <TextArea
          label="Label"
          placeholder="This input quite long"
          rows="1"
          cols="20"
          isResize={true}  >
          This is content
        </TextArea>
    </div>
  );
}

export default App;














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
