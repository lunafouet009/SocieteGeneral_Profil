import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OpeI {
  id: null | number;
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
  deleteToolIsOpen: boolean;
}

interface ActionI {
  payload: {
    name:
      | 'type'
      | 'description'
      | 'price'
      | 'dateEffect'
      | 'dateCompt'
      | 'libel';
    value: string | number;
  };
  type: string;
}

export const initialState: OperationsI = {
  operations: [],
  input: {
    id: null,
    type: 'date',
    description: '',
    price: null,
    dateEffect: '',
    dateCompt: '',
    libel: '',
  },
  deleteToolIsOpen: false,
};

const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    actionAddOp: (state, action: PayloadAction<{ operation: OpeI }>) => {
      state.operations.push(action.payload.operation);
    },
    actionRemoveOp: (state, action) => {
      const { id } = action.payload;
      state.operations = state.operations.filter((op) => op.id !== id);
    },
    actionChangeOperation: (state, action: ActionI) => {
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
    },
    actionSwitchDeleteTool: (state) => {
      state.deleteToolIsOpen = !state.deleteToolIsOpen;
    },
  },
});

export const {
  actionAddOp,
  actionRemoveOp,
  actionChangeOperation,
  actionSwitchDeleteTool,
} = operationSlice.actions;

export default operationSlice.reducer;
