import React from "react";
import styles from "./Select.module.scss";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";


import MenuItem from "@mui/material/MenuItem";

export default function InputSelect({value,onChange,state,label,iconimg}) {
  return (
    <div>
      <FormControl fullWidth className={styles.formControl}>
        <Select
          className={styles.select}
          value={value}
          onChange={ onChange}
          IconComponent={IoIosArrowDown}
          displayEmpty
          renderValue={
            state !== ""
              ? undefined
              : () => (
                  <span>
                    {" "}
                    <img src={iconimg} className={styles.iconimg} />
                    {label}
                  </span>
                )
          }
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="Hair">Hair</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
