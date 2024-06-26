import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyCoursesServices } from "../../services/qlCourses.service";

export const registerCoursesThunk = createAsyncThunk('quanLyKhoaHoc/register', async (payload, {rejectWithValue}) => {
    try {
        const response = await quanLyCoursesServices.registerCourses(payload)
        return response
    } catch (err) {
    }
})
