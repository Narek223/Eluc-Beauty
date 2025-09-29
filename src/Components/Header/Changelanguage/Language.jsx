import React,{useEffect} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MenuItem, FormControl, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as leaderActions from "../../../Redux/Slices/Header/language";
import i18n from "../../../i18n";

export default function Language() {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);


  useEffect(() => {
   dispatch(leaderActions.setLanguage(i18n.language === "de" ? "De" : "Eng"));
  }, [i18n.language]);

  
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
             disableScrollLock: true,
            PaperProps: {
              sx: {
                backgroundColor: "#98896c",
                color: "white !important",
                
              },
            },
          }}
          onChange={(e) => dispatch(leaderActions.handleLanguageChange(e.target.value))}
        >
          <MenuItem value="Eng">Eng</MenuItem>
          <MenuItem value="De">De</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
