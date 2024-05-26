import { createAction, createReducer } from '@reduxjs/toolkit';

interface OpeI {
  type: 'date' | 'shop' | 'income' | 'outgoing';
  description: string;
  price: number | null;
  dateEffect: string;
  dateCompt: string;
  libel: string;
}

interface OperationsI {
  operations: OpeI[];
  input: OpeI;
}

export const initialState: OperationsI = {
  operations: [],
  input: {
    type: 'date',
    description: '',
    price: null,
    dateEffect: '',
    dateCompt: '',
    libel: '',
  },
};

export const actionAddOp = createAction<{
  operation: OpeI;
}>('ope/ADD_OP');
export const actionRemoveOp = createAction('ope/REMOVE_OP');
export const actionModifyOp = createAction('ope/MODIFY_OP');
export const actionChangeOperation = createAction<{
  name: 'type' | 'description' | 'price' | 'dateEffect' | 'dateCompt' | 'libel';
  value: string | number;
}>('user/CHANGE_CREDENTIAL_SIGNIN');

const operationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAddOp, (state, action) => {
      state.operations.push(action.payload.operation);
    })
    .addCase(actionRemoveOp, (state) => {})
    .addCase(actionModifyOp, (state) => {})
    .addCase(actionChangeOperation, (state, action) => {
      if (action.payload.name) {
        if (action.payload.name === 'price') {
          state.input.price = action.payload.value as number;
        } else if (
          action.payload.name === 'description' ||
          action.payload.name === 'libel' ||
          action.payload.name === 'dateEffect' ||
          action.payload.name === 'dateCompt'
        ) {
          state.input[action.payload.name] = action.payload.value as string;
        } else if (action.payload.name === 'type') {
          state.input.type = action.payload.value as
            | 'date'
            | 'shop'
            | 'income'
            | 'outgoing';
        }
      }
    });
});

export default operationReducer;
