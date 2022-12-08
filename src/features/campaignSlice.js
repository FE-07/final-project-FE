import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
        campaignData : [],
        isLoading : true,
        isPublish: false,
        isAgree : false,
}

export const getCampaignData = createAsyncThunk(
    'campaign/getCampaignData',
    async(url, thunkAPI) => {
        try{
            const res = await axios(url)
            .then(res => res)
            console.log(res)
            return res
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const campaignSlice = createSlice({
    name: 'campaign',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getCampaignData.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getCampaignData.fulfilled, (state, action) => {
            state.campaignData = action.payload;
            state.isAgree = true;
            state.isPublish = true;
        })
        .addCase(getCampaignData.rejected, (state,action) =>{
            state.isLoading = false;
            throw new Error(action.payload);
        })
    }
})

const campaignReducer = campaignSlice.reducer;

export default campaignReducer;