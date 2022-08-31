import { createSlice } from '@reduxjs/toolkit'

interface IAppData {
    showModal: boolean;
    navStyle: string
}

const INITIAL_STATE: IAppData =
{
    showModal: true,
    navStyle: 'stack'
}


const sliceData = createSlice({
    name: 'appData',
    initialState: INITIAL_STATE,
    reducers: {
        changeStyle(state, action) {
            state.navStyle = action.payload
        },
        handleModal(state) {
            state.showModal = !state.showModal
        },
        
    }
})


export default sliceData.reducer

export const { changeStyle, handleModal } = sliceData.actions;

export const useData = (state: any) => {
    return state.appData as IAppData
}