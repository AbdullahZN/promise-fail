module.exports = (array) => {
    let length = array.length;
    return new Promise((resolve, reject) => {
        array.forEach(promise => {
            promise
            .then(() => reject(promise))
            .catch(() => {
                length--;
                !length && resolve();
            });
        });
    });
};
