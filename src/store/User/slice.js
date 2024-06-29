import { createSlice } from "@reduxjs/toolkit";
import { getUserLogin } from "../../utils/getUserLogin";
import { LOCAL_USER_LOGIN_KEY, TOKEN } from "../../constant/localStogare";
import { loginThunk, registerThunk } from "./thunk";
import { editUserThunk } from "./thunkEdit";
import { toast } from "react-toastify";

const initialState = {
  isFetchingRegister: false,
  isFetchingLogin: false,
  userLogin: getUserLogin(),
  heThongRapChieu: [],
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  //Xứ lý action đồng bộ
  reducers: {
    logOut: (state) => {
      state.userLogin = undefined;
      localStorage.removeItem(LOCAL_USER_LOGIN_KEY);
    },
  },

  extraReducers: (builder) => {
    builder
      //register thunk
      .addCase(registerThunk.pending, (state) => {
        state.isFetchingRegister = true;
      })
      .addCase(registerThunk.fulfilled,(state) => {
          state.isFetchingRegister = false;
        }
      )
      .addCase(registerThunk.rejected,(state) => {
          state.isFetchingRegister = false;
        }
      )

      .addCase(editUserThunk.fulfilled, () => {
        toast.success('Bạn đã chỉnh sửa thông tin tài khoản!')
      })

      .addCase(editUserThunk.rejected, () => {
        toast.error('Đã xảy ra lỗi khi chỉnh sửa thông tin tài khoản!');
      })

      //login thunk
      .addCase(loginThunk.pending, (state) => {
        state.isFetchingLogin = true;
      })

      .addCase(loginThunk.fulfilled,(state, payload) => {
          state.isFetchingLogin = false;

          //lưu thông tin
          localStorage.setItem(LOCAL_USER_LOGIN_KEY, JSON.stringify(payload));
          localStorage.setItem(TOKEN, payload.payload.accessToken);
          state.userLogin = payload;
        }
      )
      .addCase(loginThunk.rejected,(state, action) => {
          state.isFetchingLogin = false;
        }
      )
  },
})
