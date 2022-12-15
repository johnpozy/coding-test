import { useEffect, useState } from "react";
import { recipientsData, findMatching, IRecipients } from "../../utils";

import './index.css';
/**
 * App
 *
 * @returns JSX.Elemeny
 */
const App = () => {
  const [mockData] = useState<IRecipients>(recipientsData);
  const [results, setResults] = useState<Array<string>>([]);

  useEffect(() => {
    results.forEach(result => {
      console.log(result);
    })
  }, [results]);

  return (
    <div className="app-wrapper">
      <button onClick={() => setResults(findMatching(mockData))}>Print Results</button>
      <br />
      <pre >
        {results.length > 0 ? (
          results.map(result => {
            return `${result}\n`;
          })
        ) : (
          <span>Result will be display here and in browser console.</span>
        )}
      </pre>
    </div>
  );
};

export default App;
