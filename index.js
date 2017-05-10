module.exports = (array) => {
    let length = array.length;
    return new Promise((resolve, reject) => {
        array.forEach(promise => {
            promise
            .then(() => reject(new Error('All promises did not fail')))
            .catch(() => {
                length--;
                !length && resolve();
            });
        });
    });
};
