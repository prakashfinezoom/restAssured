import supertest from "supertest"
import quiklyz from "../Confiq/quiklyz";
const request = supertest(quiklyz.baseUrlcrm)
let endpoint = quiklyz.nsdlURL
describe('quiklyz', () => {
    it('NSDL Pan verification', () => {
        const data={
            "PanNo":"AKKPH5250K",
            "ModuleCode":"LP",
            "ChkNSDL":"Yes",
            "AccessType":"WS",
            "UserId":""
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

    });   