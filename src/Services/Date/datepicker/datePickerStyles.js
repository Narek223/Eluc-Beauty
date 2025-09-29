import { fontSize, width } from "@mui/system";

export const datestyles = {
  "& .MuiPaper-root": {
    borderRadius: "20px",
      '[data-theme="dark"] &': {
    color: "white",
  },
  },
  "& .MuiStack-root": {
    margin: "10px 0",
    marginBottom: "8px",
      '[data-theme="dark"] &': {
    color: "white",
    backgroundColor:"#7c7c7c"
  },
  },
  "& .MuiPickersCalendarHeader-root .MuiIconButton-root": {
    color: "rgba(212, 163, 115, 1)",
    backgroundColor: "rgba(255, 252, 248, 1) !important",
    borderRadius: "10px",
    width: "28px",
    height: "28px",
  '[data-theme="dark"] &': {
    color: "white",
        backgroundColor: "transparent !important",
  },
  },
  "& .MuiPickersCalendarHeader-root .MuiIconButton-root:hover": {
    backgroundColor: "rgba(255, 252, 248, 1) !important",
    color: "rgba(212, 163, 115, 1)",
      '[data-theme="dark"] &': {
    color: "white",
  },
  },
  "& .MuiPickersDay-root": {
    color: "black",
    fontSize: "16px",
    fontWeight: "400",
    width: "50px",
    height: "40px",
    lineHeight: "28px",
          '[data-theme="dark"] &': {
    color: "white",
  },
  },
  "& .MuiPickersDay-today": {
    color: "green",
  },
  "& .MuiPickersCalendarHeader-label": {
    color: "rgba(212, 163, 115, 1)",
    fontSize: "20px",
    fontWeight: "700",
      '[data-theme="dark"] &': {
    color: "white",

  },
  },
    "& .MuiDayCalendar-weekDayLabel": {
  
      '[data-theme="dark"] &': {
    color: "white",

  },
  },
  
  "& .Mui-selected": {
    backgroundColor: "rgba(212, 163, 115, 1) !important",
    color: "white !important",
  },
  "& .MuiPickersDay-root.Mui-disabled": {
    color: "rgba(196, 176, 182, 0.3)",
  },
  "& .MuiPickersDay-root.MuiPickersDay-dayOutsideMonth": {
    opacity: 0.5,
    color: "gray",
      '[data-theme="dark"] &': {
    color: "white",
  },
  },
  "& .MuiPickersLayout-contentWrapper": {
    gridColumn: "2 / 3 !important",
    gridRow: 2,

    display: "flex",
    flexDirection: "column",
  },
  "& .MuiDateCalendar-root":{
    width: "100% !important",
  },

 "& .MuiIconButton-root .MuiSvgIcon-root": {
    fontSize: "24px !important",
      '[data-theme="dark"] &': {
    color: "white",
    backgroundColor:"transparent"
  },
  },
   "&.MuiPickersTextField-root": {
    width: "100% !important",
 
  },
};
