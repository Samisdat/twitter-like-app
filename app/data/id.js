let id = 0;

export const getId = () => {

    const currentId = id;

    id += 1;

    return currentId.toString();

};
