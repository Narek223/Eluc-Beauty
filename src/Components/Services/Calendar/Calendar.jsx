import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { datestyles } from "../../../Services/Date/datepicker/datePickerStyles";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSelector, useDispatch } from "react-redux";
import * as serviceslice from "../../../Redux/Slices/Services/services";
import dayjs from "dayjs";

export default function Calendar() {
  const { date } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar"]} disablePast>
        <DemoItem
          sx={{
            minWidth: "0 !important",
            maxWidth: "200px",
            "& .MuiStack-root": {
              width: "200 !important",
            },
          }}
          slotProps={{
            popper: {
              sx: datestyles,
            },
          }}
        >
          <DateCalendar
            disablePast
            sx={{
              width: "100%",
              ...datestyles,  
              "& .MuiPickersDay-root.Mui-disabled": {
                color: "var(--calendarDisabledDay) !important",
              }
            }}
            value={date ? dayjs(date) : dayjs()}
            onChange={(newDate) =>
              dispatch(serviceslice.chooseDate(newDate.format("YYYY-MM-DD")))
            }
         
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
