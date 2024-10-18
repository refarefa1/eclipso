
import { configureStore } from '@reduxjs/toolkit'
import { countStore } from './reducers/count-reducer'


export const store = configureStore({
    reducer: {
        countModule: countStore.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch