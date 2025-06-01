import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MenuItem, FormControl, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as leaderActions from "../../../Redux/Slices/Header/language";

export default function Language() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);

  return (
    <div>
      <FormControl size="small">
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={language}
          label="Language"
          IconComponent={IoMdArrowDropdown}
          sx={{
             color: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              padding: 0,
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          inputProps={{
            style: {
              padding: 0,
              border: "none",
                   color: "white !important",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#98896c",
                color: "white !important",
              },
            },
          }}
          onChange={(e) => dispatch(leaderActions.setLanguage(e.target.value))}
        >
          <MenuItem value="Eng">Eng</MenuItem>
          <MenuItem value="Arm">Arm</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
