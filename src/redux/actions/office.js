import http from '@/api/index.js';

// 方法名称要全局唯一
export function getOfficeList() {
  return async(dispatch, getState) => {
    console.log(getState);
    const result = await http.post('');
    dispatch({
      type: 'getOfficeList',
      payload: result.json
    })
  }
}

export function getOfficeInfo(id) {
  return async(dispatch, getState) => {
    console.log(getState);
    const result = await http.post('', id);
    dispatch({
      type: 'getOfficeInfo',
      payload: result.json
    })
  }
}