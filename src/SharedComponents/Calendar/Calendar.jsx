import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { IoIosArrowDown } from "react-icons/io";
import { datestyles } from "../../Services/Date/datepicker/datePickerStyles";
import styles from "./styles.module.scss";


export default function Calendar({ setDate, value }) {
  const handleDateChange = (newDate) => {
    if (newDate) {
      setDate(newDate.toDate());
    }
  };

  return (
    <div className={styles.datePicker}>
   <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DesktopDatePicker
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
         slots={{
          openPickerIcon: (props) => (
            <IoIosArrowDown {...props} style={{ fontSize: "18px" }} />
          ),
        }}
        slotProps={{
          textField: {
            placeholder: "Any date",
            variant: "standard",
            InputProps: {
              disableUnderline: true,
           
    
            },
            inputAdornment: {
              position: "end",
            },
            sx: {
              backgroundColor: "transparent",
              fontSize: "16px",
              py: "8px",
              px: "12px",
            },
            iconButton: {
              "& svg": {
                width: "18px",
                height: "18px",
              },
            },
          },
          popper: {
            sx: datestyles,
          },
        }}
        
      />
    </LocalizationProvider>
    </div>
 
  );
}
