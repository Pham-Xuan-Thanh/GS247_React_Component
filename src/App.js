import logo from './logo.svg';
import { useMemo }  from 'react';
import ReactTable from "react-table";
import './App.css';
import PropTypes from "prop-types";
import TextArea from './component/TextArea/textArea';
import Tooltip from './component/Tooltip/tooltip';
import Pagination from './component/Table/pagination';
import MOCK_DATA from "./database/MOCK_DATA.json";




function App() {
  

  

  return (
    <div className="App " className="p-6 items-center justify-center">
      <h1 className="text-blue-400 font-extrabold ">Hello There</h1>
      <p className="tracking-widest">This is TextArea</p>
      <div className="bg-background content-center  ">
      <TextArea
        label="Label"
        placeholder="This input quite long"
        // rows="1"
        // cols="20"
          >
      </TextArea>
      </div>
      <h1 className="text-blue-400 font-extrabold">This is Tooltip </h1>
      <p className="tracking-widest">This is TextArea</p>

      <div className="">
        <Tooltip className="m-10"  content="This is a single line tooltip with no wrapping text and" direction="none" />
        <Tooltip className="m-10" content="This is a single line tooltip with no wrapping text and" direction="left" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="top-right" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="bot-mid" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="bot-right" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="right" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="top-mid" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="top-left" />
        <Tooltip content="This is a single line tooltip with no wrapping text and" direction="bot-left" />
          
        
      </div>

      
    </div>
  );
}

export default App;
// render(<App />, document.getElementById("root"));















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
