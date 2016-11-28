// let Index = require("../../src/inverted-index");

const newInstance = new Index();

let emptyFile = ""  
let wrongKeyBook = [
                    {
                      "texts":"teesasdfasfd dsafdf",
                      'titles':"vicky last name"
                    },
                    {
                      'text':'line up of our young detectives',
                      'title': "Secret Love child"}
                  ];
let validFile = [
                    {
                      "text":"teesasdfasfd dsafdf",
                      'title':"vicky last name"
                    },
                    {
                      'text':'line up of our young detectives',
                      'title': "Secret last Love child"
                    }
                  ];


//tests file
describe("Read Book Data", () => {
  it ("Should return 'true' for Valid JSON file", () => {
    expect(newInstance.validateFile(JSON.stringify(validFile))[0]).toEqual(true);
  })

  it ("Should return \"Empty File Please Upload a Valid Json File\" for an upload with no data", () => {
    expect(newInstance.validateFile(emptyFile)[1]).toEqual('Empty File Please Upload a Valid Json File');
  })
})

describe ("Populate Index", () => {
  it("Should confirm that Index is Created once file is read", () => {
    expect(newInstance.createIndex(validFile).detectives).toBeDefined();
  })
  it ("Should confirm that the string key is matched to correct object", () => {
    expect(newInstance.createIndex(validFile)['last'][0]).toEqual(true);
  })
})