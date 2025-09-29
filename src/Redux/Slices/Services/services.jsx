import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  selectedService: null,
  selectedExpert: null,
  chooseTime: "",
  date: dayjs().format("YYYY-MM-DD"),
  cartArray: [],
  history: [],
  open: false,
  openModal: false,
  total: 0,
  confirm: false,
  emoji: null,
  isEdit: false,
  actionTime: "",
  actionDate: "",
  editingCategoryIndex: undefined,
  editingServiceIndex: undefined,
  currentPage: 0,
  itemsPerPage: 2,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setSelectedExpert: (state, action) => {
      state.selectedExpert = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.chooseTime = action.payload;
    },
    chooseDate: (state, action) => {
      state.date = action.payload;
    },
    addInCart: (state, action) => {
      if (
        !state.selectedExpert ||
        !state.selectedService ||
        !state.chooseTime
      ) {
        return;
      }

      const itemsCount = state.cartArray.reduce(
        (acc, c) => acc + c.services.length,
        0
      );
      if (itemsCount >= 3) return;

      const newItem = {
        expert: state.selectedExpert,
        service: state.selectedService,
        date: state.date,
        time: state.chooseTime,
      };

      const existingCategoryIndex = state.cartArray.findIndex(
        (item) => item.categoryId === newItem.service.categoryId
      );

      if (existingCategoryIndex !== -1) {
        state.cartArray[existingCategoryIndex].services.push({
          service: newItem.service,
          expert: newItem.expert,
          date: newItem.date,
          time: newItem.time,
        });
      } else {
        state.cartArray.push({
          categoryId: newItem.service.categoryId,
          services: [
            {
              service: newItem.service,
              expert: newItem.expert,
              date: newItem.date,
              time: newItem.time,
            },
          ],
        });
      }

      state.selectedService = null;
      state.selectedExpert = null;
      state.chooseTime = "";
      state.date = dayjs().format("YYYY-MM-DD");
      window.scrollTo(0, 0);
    },

    deletefromcart: (state, action) => {
      const { categoryIndex, serviceIndex } = action.payload;
      const category = state.cartArray[categoryIndex];
      if (!category) return;
      if (category.services.length === 1) {
        state.cartArray.splice(categoryIndex, 1);
      } else {
        category.services.splice(serviceIndex, 1);
      }
    },
    openModal: (state) => {
      state.open = true;
    },

    closeModal: (state) => {
      state.open = false;
      state.confirm = false;
      state.emoji = null;
    },

    total: (state) => {
      state.total = state.cartArray.reduce(
        (acc, elem) =>
          acc +
          elem.services.reduce((sum, s) => sum + (s.service?.price || 0), 0),
        0
      );
    },
    openComfirmpage: (state) => {
      state.history.push({
        id: Date.now(),
        date: dayjs().format("YYYY-MM-DD HH:mm"),
        total: state.total,
        cart: JSON.parse(JSON.stringify(state.cartArray)),
      });

      state.confirm = true;
      state.cartArray = [];
      state.total = 0;
    },
    setEmoji: (state, action) => {
      state.emoji = action.payload;
    },

    openDateModal: (state) => {
      state.openModal = true;
    },
    closeDateModal: (state) => {
      state.openModal = false;
    },

    applyEditChanges: (state) => {
      if (!state.isEdit) return;

      if (
        state.editingCategoryIndex !== undefined &&
        state.editingServiceIndex !== undefined
      ) {
        state.cartArray[state.editingCategoryIndex].services[
          state.editingServiceIndex
        ].date = state.date;
        state.cartArray[state.editingCategoryIndex].services[
          state.editingServiceIndex
        ].time = state.chooseTime;
      }

      state.isEdit = false;
      state.selectedService = null;
      state.selectedExpert = null;
      state.chooseTime = "";
      state.openModal = false;
      state.editingCategoryIndex = undefined;
      state.editingServiceIndex = undefined;
    },
    saveandEdit: (state, action) => {
      const { categoryIndex, serviceIndex } = action.payload;
      state.isEdit = true;
      state.editingCategoryIndex = categoryIndex;
      state.editingServiceIndex = serviceIndex;
    },
       handlePageChange: (state, action) => {
      state.currentPage = action.payload;
    },
       handleItemsPerPageChange: (state, action) => {
          state.itemsPerPage = action.payload;
          state.currentPage = 0;
        },
  },
});

export const {
  handlePageChange,
  openDateModal,
  closeDateModal,
  setSelectedService,
  setSelectedExpert,
  setSelectedTime,
  chooseDate,
  addInCart,
  deletefromcart,
  openModal,
  closeModal,
  total,
  openComfirmpage,
  setEmoji,
  updateCartItem,
  saveandEdit,
  applyEditChanges,
} = serviceSlice.actions;
export default serviceSlice.reducer;
