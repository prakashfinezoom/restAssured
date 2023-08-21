import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.karzaNameSimilarity
let endpoint1=quiklyz.karzaEbillVerfication
let endpoint2=quiklyz.karzaEmailAuth

describe('quiklyz', () => {
    it('Karza Name Similarity', () => {
        const data={
            "esbRequest": {
                "header": {
                    "apiVersion": "",
                    "channelID": "ESB",
                    "deviceID": "",
                    "languageId": "",
                    "serviceName": "NAMESIMILARITY",
                    "os": "",
                    "uniqueReqNo": "testbre61212",
                    "timestamp": "q1211",
                    "geoLocation": ""
                },
        
                "request": {
                    "name1": "SHIRHATTI OMKAR MILIND",
                      "name2": "OMKAR SHIRHATTI",
                      "type": "individual",
                     "preset": "L"
                }
            }
        }
        return request
    .post(`${endpoint}`)
    .set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
    .set('Content-Type', 'application/json')
    .send(data)
    .then((res) => {
        console.log(res.body);
    })        
});
it('Karza eBillVerification', () => {
    
    const data1={
        "esbRequest": {
            "header": {
                "channelID": "CD",
                "serviceName": "EBILLVERIFICATION",
                "uniqueReqNo": "1620052021894",
                "timestamp": "1620052021894"
            },
            "request": {
                "consent": "y",
                "consumerID": "6602763933",
                "serviceProvider": "BESCOM"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data1)
.then((res) => {
    console.log(res.body);
})   

});

it('Karza PassportVerification', () => {
    const data2={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "PASSPORTVERIFICATION",
                "os": "",
                "uniqueReqNo": "12re",
                "timestamp": "1750",
                "geoLocation": ""
            },
            "request": {
                "consent": "y",
                "fileNo": "BO3072344560818",
                "dob": "17/08/1987",
                "passportNo": "S3733862",
                "doi": "14/05/2018",
                "name": "OMKAR MILIND SHIRHATTI"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data2)
.then((res) => {
    console.log(res.body);
})        
});
it('Karza VotersIDVerification', () => {
    
    const data3={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "CD",
                "deviceID": "",
                "languageId": "",
                "serviceName": "VOTERIDVERIFICATION",
                "os": "",
                "osVersion": "",
                "uniqueReqNo": "7",
                "timestamp": "256589",
                "geoLocation": "8"
            },
            "request": {
                "consent": "y",
                "epicNo": "RCU0780940"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data3)
.then((res) => {
    console.log(res.body);
})   

});
it('Karza OCRExtraction', () => {
    
    const data4={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "CD",
                "deviceID": "",
                "languageId": "",
                "serviceName": "VOTERIDVERIFICATION",
                "os": "",
                "osVersion": "",
                "uniqueReqNo": "7",
                "timestamp": "256589",
                "geoLocation": "8"
            },
            "request": {
                "consent": "y",
                "epicNo": "RCU0780940"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data4)
.then((res) => {
    console.log(res.body);
})   

});
it('Karza EMailAuthentication', () => {
    
    const data5={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "EmailAuthentication",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "12756922100",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            },
            "request": {
           "email": "chakri.dattu@gmail.com"
            }
        }
    }  
    return request
.post(`${endpoint2}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.set('Origin','cdmobuat.mahindrafs.com')
.send(data5)
.then((res) => {
    console.log(res.body);
})   

});

it('Karza AddressMatching', () => {
    
    const data6={
        "esbRequest": {
            "header": {
                "apiVersion": "1",
                "channelID": "qw",
                "deviceID": "2",
                "languageId": "3",
                "serviceName": "AddressMatching",
                "os": "4",
                "osVersion": "5",
                "uniqueReqNo": "12756922143",
                "timestamp": "2019-02-20T00:00:00",
                "geoLocation": "8"
            },
            "request": {
           "address1": "SR NO-52,ROAD NO-3 NR DATA MANDIR 411015",
           "address2": "ROAD NO-3, SR NO-52 411015"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data6)
.then((res) => {
    console.log(res.body);
})   

});
it('Karza PNG Authentication', () => {
    
    const data7={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "PNGAUTHENTICATION",
                "os": "",
                "uniqueReqNo": "testbre61212",
                "timestamp": "q1211",
                "geoLocation": ""
            },
    
            "request": {
                "consent": "Y",
                "consumerId": "1000082138",
                "bpNo": "",
                "serviceProvider": "AG"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data7)
.then((res) => {
    console.log(res.body);
})   

});
it('Karza LPG Authentication', () => {
    
    const data8={
        "esbRequest": {
            "header": {
                "apiVersion": "",
                "channelID": "ESB",
                "deviceID": "",
                "languageId": "",
                "serviceName": "LPGIDAUTHENTICATION",
                "os": "",
                "uniqueReqNo": "testbre61212",
                "timestamp": "q1211",
                "geoLocation": ""
            },
    
            "request": {
                "lpgId" : "10000000050431060"
            }
        }
    }
    return request
.post(`${endpoint1}`)
.set('x-ibm-client-id', 'dc52d3cf-c452-4d27-91e0-68f31d5c7669')
.set('Content-Type', 'application/json')
.send(data8)
.then((res) => {
    console.log(res.body);
})   

});
});