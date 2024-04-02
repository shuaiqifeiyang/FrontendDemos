import { Chip, TextField } from "@mui/material";
import { useState } from "react";
function App() {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");
  console.log(values);
  const handleEnter = (e) => {
    if (e.key === "Enter" && value !== "" && !values.includes(value)) {
      setValues([...values, value]);
      setValue("");
    }
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleValueDelete = (item) => {
    setValues(values.filter((v) => v !== item));
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="w-72">
        <TextField
          label="Values"
          size="small"
          fullWidth
          onKeyUp={handleEnter}
          value={value}
          onChange={handleValueChange}
          InputProps={{
            startAdornment:
              values.length === 0 ? null : (
                <div className="flex pt-3 gap-x-2">
                  {values.map((v) => {
                    return (
                      <Chip
                        key={v}
                        label={v}
                        variant="outlined"
                        onDelete={() => {
                          handleValueDelete(v);
                        }}
                      />
                    );
                  })}
                </div>
              ),
            style:
              values.length === 0
                ? {}
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 38px",
                  },
          }}
        ></TextField>
      </div>
    </div>
  );
}

export default App;
