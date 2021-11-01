import logo from './logo.svg';
import './App.css';
import TextArea from './component/TextArea/textArea'; 
import Tooltip  from './component/Tooltip/tooltip';

function App() {
  return (
    <div className="App" className="p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold">Hello There</h1>
        <p className="tracking-widest">This is TextArea</p>

        <TextArea
          label="Label"
          placeholder="This input quite long"
          rows="1"
          cols="20"
          isResize={true}  >
        </TextArea>
        <h1 className="text-blue-400 font-extrabold">This is Tooltip </h1>
        <p className="tracking-widest">This is TextArea</p>

        <div className="example-wrapper">
        <Tooltip content="Yee-haw!" direction="bottom" trigger="hover">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Tooltip>
      </div>
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
