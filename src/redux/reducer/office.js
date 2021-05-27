//初始化状态
const initialState = {
  officeList: [],
  officeInfo: {
    "id": "",
    "parent_id": "",
    "parent_ids": "",
    "name": "",
  },
};
const office = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OFFICE_LIST':
      return Object.assign({}, state, {
        officeList: action.payload
      });
    case 'GET_OFFICE_DETAIL':
      return Object.assign({}, state, {
        officeInfo: action.payLoad
      });
    default:
      return state;
  }
};
export default office;
