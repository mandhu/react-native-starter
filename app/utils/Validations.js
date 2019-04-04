export const isEmail = (email) => {
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return !(reg.test(email) == 0);
}