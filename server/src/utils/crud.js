const getOne = model => (res,req) => {

};

const getMany = model => (res,req) => {};

const removeOne = model => (res,req) => {};

const updateOne = model => (res,req) => {};

const createOne = model => (res,req) => {};

const crudcontroller = model => ({
    getOne : getOne(model),
    getMany : getMany(model),
    removeOne : removeOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
});
