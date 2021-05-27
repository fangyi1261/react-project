import ComApi from './index.js';

class Mock {
  HashMap = new Map();

  mock(url, callback) {
    this.HashMap.set(url, callback);
  }

  emit(url, params) {
    if (this.HashMap.has(url)) {
      return this.HashMap.get(url)(params)
    }
    return {
      responseCode: '000001',
      responseMeg: '没有对应的mock接口'
    }
  }

}

export const mock = new Mock();

if (process.env.NODE_ENV === 'development') {
  mock.mock(ComApi.fetchIndexPage, function(params) {
    console.log('********* 接口参数 ********', params);
    const result = {
      trackKey: '123456',
      speechCraft: '您已授权...',
      applicant: {
        clientNo: '1234567890',
        name: '张三',
        idType: '2',
        idNo: '340826123456789012',
        sex: 'M',
        birthday: '2000-02-01',
        textType: '2',
        mobile: '13912345678',
        address: null,
        email: null
      },
      insuranceList: [
        {
          insuranceInfo: {
            clientNo: '10001',
            name: '李四',
            idType: '2',
            idNo: '123456789009876543',
            sex: 'M',
            birthday: '2020-01-01',
            age: '32',
            socialSecurity: 'Y',
            riskVal: '0',
            relationshipWithApplicant: '1',
            relationshipWithPrimaryIns: '1'
          },
          preProductInfoList: [
            {
              productCode: 'P171',
              productName: '平安i康保-百万医疗（慢病版）',
              productCoverageLevel: 'P171-01',
              productCoverageName: '其他慢病版+质子+肿瘤特药',
              productWithCoverage: null,
              isPolClaim: 'N',
              coverageAmount: '6500000',
              policyNo: '920020078628356',
              effDate: '2020-02-02',
              matuDate: '2020-02-02',
              premType: '1',
              autoRenewal: 'Y',
              applicationSourceType: '14',
              esaleSubChannel: null,
              mainAgentNo: 'H020000000',
              agencyCode: null,
              sellerCode: null,
              sellerName: null,
              chargeHand: 'H020000000',
              busiType: 'D',
              regionCode: 'H0200000',
              renewalNo: '920020078628356',
              seqNo: '0',
              units: '1'
            }
          ],
          combineList: [
            {
              combineCode: 'R000170',
              combineName: '原保障',
              sort: 0,
              isChoice: 'N',
              ruleType: '00',
              isAddLiab: null,
              policyNo: '9200200078628356',
              combineMark: '',
              combineSummary: ''
            }
          ],
          schemeNoList: []
        }
      ],
      paymentList: [
        {
          policyNo: '920020078628355',
          colMode: '5',
          bankName: '招商银行',
          bankType: '308',
          accountNo: '6225887920305653',
          bankNo: '招商银行'
        }
      ]
    };
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
    const result = {
      insNo: '900020000000000',
      singleInsProducts: [
        {
          productCode: 'P171',
          productName: '平安i康保-百万医疗（慢病版）',
          liabDisplayLevel: '1',
          coverageList: [
            {
              id: '001',
              productCoverageLevel: 'P171-01',
              productCoverageName: '其他慢病版+质子+肿瘤特药',
              polno: '920020078628356',
              optionLevel: '1',
              isChoice: 'N',
              isSelected: 'Y',
              isHealthNote: 'N',
              isRenewal: 'Y',
              renewalPremType: ['5', '2'],
              units: '1',
              coverageAmount: '4000000',
              attachElement: '0',
              isOriginalLiab: 'Y',
              mark: '其他慢病版+质子+肿瘤特药',
              remark: '其他慢病版+质子+肿瘤特药',
              annotate: '',
              forcePromptContent: '',
              polEffectType: '01',
              planMutex: 'FL9016',
              recommendSequence: '75101',
              isRejectHomogeny: 'N',
              isBindCard: '1'
            }
          ]

        }
      ]
    };
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00' || 200,
        message: '',
        result: result
      }
    };
  })

  mock.mock(ComApi.compareProduct, function() {
    const result = {
      liabTypeList: [
        {
          liabTypeName: '重疾给付',
          protectionList: [
            {
              protectionName: '重疾津贴',
              protectionCode: 'BZWD900065',
              protectionSpeech: '',
              priority: '3',
              content: '1万',
              contentSpeech: '',
              oldContent: '1万',
              oldContentSpeech: ''
            }
          ]
        }
      ]
    }
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00' || 200,
        message: '',
        result: result
      }
    };
  })

}

