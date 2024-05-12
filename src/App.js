import { useState } from "react";
import "./styles.css";

const calls = [
  { name: "Jamie", numOfCalls: 7 },
  { name: "Anna", numOfCalls: 2 },
  { name: "Sam", numOfCalls: 3 },
  { name: "Tony", numOfCalls: 8 },
  { name: "Jamie", numOfCalls: 7 },
  { name: "Anna", numOfCalls: 1 },
  { name: "Sam", numOfCalls: 16 },
  { name: "Tony", numOfCalls: 1 },
  { name: "James", numOfCalls: 1 },
];

// callsByName new variable and item
const totalCallsPerPerson = calls.reduce((callsByName, item) => {
  // store current items name into a variable. Needed to begin accumulating total calls per person
  const currentName = item.name;

  if (callsByName.hasOwnProperty(currentName)) {
    callsByName[currentName] = callsByName[currentName] + item.numOfCalls;
  } else {
    callsByName[currentName] = item.numOfCalls;
  }

  return callsByName;
}, {});

// Establish an open array where the key values will push to sorted
const sortedArray = [];

// Allows you to push the objects into an array so it's only 1 object as opposed to key value
for (const name in totalCallsPerPerson) {
  sortedArray.push({ name: name, numOfCalls: totalCallsPerPerson[name] });
}

// Once sortedArray is created, it's easy to use sort to sort most calls to least
sortedArray.sort((a, b) => {
  return b.numOfCalls - a.numOfCalls;
});

export default function App(props) {
  //use state to display the searched name through filter
  const [searchTerm, setSearchTerm] = useState("");

  // Filters the array but uses toLowerCase to make it searchable regardless of capitalization
  const filteredArray = sortedArray.filter((item) => {
    const itemNameLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return itemNameLowerCase.includes(searchTermLowerCase);
  });

  // Map through sortedArray
  const listOfCalls = filteredArray.map((item, index) => {
    return (
      <li key={index}>
        {item.name}: {item.numOfCalls}
      </li>
    );
  });

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        placeholder="Search name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>{listOfCalls}</ul>
    </div>
  );
}
