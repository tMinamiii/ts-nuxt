import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import { SomethingState } from '~/store/modules/something';

Vue.use(Vuex);

export interface RootState {
  something: SomethingState;
}

export const store = new Vuex.Store<RootState>({});
export default (): Store<RootState> => store;
