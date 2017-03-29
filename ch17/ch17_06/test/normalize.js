describe("normalizeData", function () {

    it("normalizeData function unit test", function () {
        
        var personInfo1 = '{"Name": "Maria", "Id": 2111858,"Age":25}';
        var personInfo2 = '{"Name": "Smith", "Id": 2234324,"Age":30}';
        
        var norm1 = normalizeData(personInfo1);
        var norm2 = normalizeData(personInfo2);
        
        expect(norm1.name).toEqual("Maria");
        expect(norm1.id).toEqual(2111858);
        expect(norm2.name).toEqual("Maria");
        expect(norm2.id).toEqual(2111858);
    });
});