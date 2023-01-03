import { RootState } from './../index'
import { CmsState } from '../../common/types'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

const initialState: CmsState = {
  loaded: false,
  data: {
    cms: {
      intro: '',
      about_me: {
        education: [],
        experience: [],
      },
    },
    translations: {},
  },
}
export const fetchData = createAsyncThunk('cms/fetchData', async () => {
  const { fetchDb } = await import('../../common/backend')
  const match = location.search.match(/lang=(?<lang>.{2})/)
  const lang = match?.groups?.lang ?? 'en'

  return await fetchDb(lang)
})

export const cmsSlice = createSlice({
  name: 'cms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.rejected, (state) => {
      state.loaded = false
    })
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.data.cms = payload.cms
      state.data.translations = payload.translations ?? {}
      state.loaded = true
    })
  },
})

const selectCms = (state: RootState) => state.cms
const selectData = (state: RootState) => state.cms.data

export const selectAboutMe = createSelector(
  selectData,
  ({
    cms: {
      about_me: { experience, education },
    },
  }) => ({ experience, education })
)

export const selectIntro = createSelector(
  selectData,
  ({ cms: { intro } }) => intro
)
export const selectLoaded = createSelector(selectCms, ({ loaded }) => loaded)

export const selectTranslations = createSelector(
  selectData,
  ({ translations }) => translations
)

export default cmsSlice.reducer
