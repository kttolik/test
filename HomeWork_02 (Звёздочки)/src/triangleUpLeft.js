function triangleUpLeft() {
    let str = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if((j + i) === 6 || j === 0) {
                str = str + ' * ';
            } else if( i === 0) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    return str;
}
console.log(triangleUpLeft());

module.exports = triangleUpLeft;