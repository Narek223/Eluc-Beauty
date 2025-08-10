import React from "react";
import styles from "./Select.module.scss";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import MenuItem from "@mui/material/MenuItem";

export default function InputSelect({
  value,
  onChange,
  state,
  label,
  iconimg,
  servicesobj,
}) {
  return (
    <div>
      <FormControl fullWidth className={styles.formControl}>
        <Select
          className={styles.select}
          value={value}
          onChange={onChange}
          IconComponent={IoIosArrowDown}
          displayEmpty
          MenuProps={{
            disableScrollLock: true,
          }}
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
          {servicesobj.map((el) => (
            <MenuItem value={el.name}>{el.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
