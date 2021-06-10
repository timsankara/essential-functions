function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 1600 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        // the larger the number being multiplied by random the larger the output id
        return v.toString(16);
    });
}

var unique_id = uuid()

console.log(unique_id)