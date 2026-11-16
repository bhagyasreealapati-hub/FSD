
import { createRoot } from 'react-dom/client'

const name="Ravi";
const age=25;
const message=`My name is ${name} and my age is ${age}`;

createRoot(document.getElementById('root')).render(
 <div>
  <h1>React JSX Render App</h1>
  <p>{message}</p>
 </div>
)
