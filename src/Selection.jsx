import { useState, useEffect, useRef } from "react";

export const Selection = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(e.target)) setDropdownToggled(false);
      }
    }
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const dropdownOptions = [
    {
      id: 1,
      label: "General",
      value: "general",
    },
    {
      id: 2,
      label: "JavaScript",
      value: "javascript",
    },
    {
      id: 3,
      label: "SQL",
      value: "sql",
    },
    {
      id: 4,
      label: "Computer Science",
      value: "computer-science",
    },
    {
      id: 5,
      label: "React.js",
      value: "react.js",
    },
    {
      id: 6,
      label: "Python",
      value: "python",
    },
    {
      id: 7,
      label: "Java",
      value: "java",
    },
    {
      id: 8,
      label: "Data Structures",
      value: "data-structures",
    },
  ];

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="toggle"
        onClick={() => {
          setDropdownToggled(!dropdownToggled);
        }}
      >
        <span>{selectedOption ? selectedOption.label : "Select"}</span>
        <span>{dropdownToggled ? "-" : "+"}</span>
      </button>
      <div className={`options ${dropdownToggled ? "visible" : ""}`}>
        {dropdownOptions.map((option, index) => {
          return (
            <button
              className={`${selectedOption.id === option.id ? "selected" : ""}`}
              onClick={() => {
                setSelectedOption(option);
                setDropdownToggled(false);
              }}
              key={index}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export const Selection = () => {
//   const [category, setCategory] = React.useState("");

//   const handleChange = (event) => {
//     setCategory(event.target.value);
//   };

//   return (
//     <FormControl
//       variant="standard"
//       sx={{ m: 1, minWidth: 120, borderColor: "white" }}
//     >
//       <InputLabel>Category</InputLabel>
//       <Select value={category} label="Category" onChange={handleChange}>
//         <MenuItem value={10}>General</MenuItem>
//         <MenuItem value={20}>JavaScript</MenuItem>
//         <MenuItem value={30}>SQL</MenuItem>
//         <MenuItem value={40}>Computer Science</MenuItem>
//         <MenuItem value={50}>Data Structures</MenuItem>
//         <MenuItem value={60}>React.js</MenuItem>
//         <MenuItem value={70}>Python</MenuItem>
//         <MenuItem value={80}>Java</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };
