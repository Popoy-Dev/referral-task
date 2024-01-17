import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

// create file for status
import {
  initActionStatus,
  successActionStatus,
  failedActionStatus,
} from "../constant/status-constant";
// Define a type for the slice state
interface ReferralState {
  data: [];
}

// Define the initial state using that type
const initialState: ReferralState = {
  data: [],
};

export const taskSlice = createSlice({
  name: "referral",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getReferralData: (state) => ({
      ...state,
      status: {
        initActionStatus,
      },
      type: "referralData",
    }),
    getReferralDataSuccess: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      status: {
        successActionStatus,
      },
      type: "referralData",
    }),
    // Use the PayloadAction type to declare the contents of `action.payload`
    getReferralDataFailed: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      data: payload,
      status: {
        failedActionStatus,
      },
      type: "referralData",
    }),
    addReferral: (state: any, payload: any) => ({
      ...state,
      status: {
        ...initActionStatus,
        type: "addReferral",
      },
    }),
    addReferralSuccess: (state: any, { payload }: any) => ({
      ...state,
      addedTask: payload,
      status: {
        ...successActionStatus,
        type: "addReferral",
      },
    }),
    addReferralFailed: (state: any, { payload }: any) => ({
      ...state,
      status: {
        ...failedActionStatus,
        message: payload,
        type: "addReferral",
      },
    }),
    editReferral: (state: any, payload: any) => ({
      ...state,
      status: {
        ...initActionStatus,
        type: "editReferral",
      },
    }),
    editReferralSuccess: (state: any, { payload }: any) => ({
      ...state,
      editedTask: payload,
      status: {
        ...successActionStatus,
        type: "editReferral",
      },
    }),
    editReferralFailed: (state: any, { payload }: any) => ({
      ...state,
      status: {
        ...failedActionStatus,
        message: payload,
        type: "editReferral",
      },
    }),
    deleteReferral: (state: any, payload: any) => ({
      ...state,
      status: {
        ...initActionStatus,
        type: "deleteReferral",
      },
    }),
    deleteReferralSuccess: (state: any) => ({
      ...state,
      status: {
        ...successActionStatus,
        type: "deleteReferral",
      },
    }),
    deleteReferralFailed: (state: any, { payload }: any) => ({
      ...state,
      status: {
        ...failedActionStatus,
        message: payload,
        type: "deleteReferral",
      },
    }),
  },
});

// can access this part inside components using by importing
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default taskSlice;
