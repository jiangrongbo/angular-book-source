//获取JSon中的Id和Name属性
function normalizeData(jsonIn) {
    data = JSON.parse(jsonIn);
    return {
        name: data.Name,
        id: data.Id
    };
}