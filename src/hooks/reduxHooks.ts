import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector, useStore } from 'react-redux';
import AppStore from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => typeof AppStore = useStore;
