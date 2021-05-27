import http from '@/api/index.js';

// 方法名称要全局唯一
export function getUserList() {
  return async(dispatch, getState) => {
    console.log(getState);
    const result = await http.post('');
    dispatch({
      type: 'getUserList',
      payload: result.json
    })
  }
}