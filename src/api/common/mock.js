import ComApi from './index.js';

class Mock {
  HashMap = new Map();

  mock(url, callback) {
    this.HashMap.set(url, callback);
  }

  emit(url, params) {
    if (this.HashMap.has(url)) {
      return this.HashMap.get(url)(params);
    }
    return {
      responseCode: '000001',
      responseMeg: '没有对应的mock接口'
    };
  }

}

export const mock = new Mock();

if (process.env.NODE_ENV === 'development') {
  mock.mock(ComApi.fetchIndexPage, function(params) {
    console.log('********* 接口参数 ********', params);
    const result = {};
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00' || 200,
        message: '',
        result: result
      }
    };
  });

  mock.mock(ComApi.fetchPageDetail, function() {
    const result = {};
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00' || 200,
        message: '',
        result: result
      }
    };
  });

  mock.mock(ComApi.compareProduct, function() {
    const result = {};
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00' || 200,
        message: '',
        result: result
      }
    };
  });

}

