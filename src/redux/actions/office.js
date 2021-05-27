import http from '@/api/index.js';
import ComApi from '@/api/common/index.js';

// 方法名称要全局唯一
export function getOfficeList() {
  return async(dispatch, getState) => {
    console.log('getState:', getState);
    const result = await http.post(ComApi.fetchIndexPage);

    dispatch({
      type: 'GET_OFFICE_LIST',
      payload: result
    });
  };
}

export function getOfficeInfo(id) {
  return async(dispatch, getState) => {
    console.log(getState);
    const result = await http.post('', id);
    dispatch({
      type: 'GET_OFFICE_DETAIL',
      payload: result
    });
  };
}