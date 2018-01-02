import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  ITEMS_UPDATED,
  ITEMS_GET_SUCCESS
} from '../constants/AppConstants';

class LocationStore extends BaseStore {

  emitChange() {
    this.emit(ITEMS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ITEMS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ITEMS_UPDATED, callback);
  }
}

let store = new LocationStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case GET_APARMENT_LOCATION:
      store.setAll(action.items);
      break;
    default:
  }
});

export default store;