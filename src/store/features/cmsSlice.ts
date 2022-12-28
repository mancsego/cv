import { RootState } from './../index'
import { TimelineInstance } from '../../common/types'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

interface CmsState {
  updating: boolean
  data: CmsData
}

interface CmsData {
  intro: string
  about_me: {
    education: TimelineInstance[]
    experience: TimelineInstance[]
  }
}

const initialState: CmsState = {
  updating: false,
  data: {
    intro: '',
    about_me: {
      education: [],
      experience: [],
    },
  },
}
export const fetchData = createAsyncThunk(
  'cms/fetchData',
  async (_, { getState }) => {
    const { fetchDb } = await import('../../api/backend')
    return (await fetchDb()) as CmsData
  }
)

export const cmsSlice = createSlice({
  name: 'cms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.updating = true
    })
    builder.addCase(fetchData.rejected, (state) => {
      state.updating = false
    })
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.data = payload
      state.updating = false
    })
  },
})

const selectData = (state: RootState) => state.cms.data

export const selectAboutMe = createSelector(
  selectData,
  ({ about_me: { experience, education } }) => ({ experience, education })
)

export const selectIntro = createSelector(selectData, ({ intro }) => intro)

export default cmsSlice.reducer
