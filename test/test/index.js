var assert = require('assert');
const nativeSplice = Array.prototype.splice;

const { splice } = require('../index');

 const baseArray = [1,2,3,4,5,6,7,8,9];
 const newItemArray = ['baz', 'bar', 'foo'];

describe('splice', function() {
    describe('Удаление элементов', () => {
        it('возвращает удаленнные элементы', () => {
            let nSpliceResult = nativeSplice.call([...baseArray], 0, 4);
            let spliceResult = splice([...baseArray], 0, 4);
            
            assert.deepEqual(nSpliceResult, spliceResult);
        });
        
        it('Удаляет все элементы до конца массива', () => {
            let nSpliceResult = nativeSplice.call([...baseArray], 0, 10);
            let spliceResult = splice([...baseArray], 0, 10);
            
            assert.deepEqual(nSpliceResult, spliceResult);
        });
    });

    describe('Добавление элементов', () => {
        it('Добавляет элементы', () => {
            const A1 = [...baseArray];
            const A2 = [...baseArray];
            nativeSplice.call(A1, 0, 0, ...newItemArray);
            splice(A2, 0, 0, ...newItemArray);
            
            assert.deepEqual(A1, A2);
        });
        
        it('Добавляет элементы с конца массива', () => {
            const A1 = [...baseArray];
            const A2 = [...baseArray];
            nativeSplice.call(A1, -2, 0, ...newItemArray);
            splice(A2, -2, 0, ...newItemArray);
            
            assert.deepEqual(A1, A2);
        });

        it('Удаляет и добавляет элементы', () => {
            const A1 = [...baseArray];
            const A2 = [...baseArray];
            nativeSplice.call(A1, 2, 4, ...newItemArray);
            splice(A2, 2, 4, ...newItemArray);
            
            assert.deepEqual(A1, A2);
        });

        it('Удаляет и добавляет элементы с конца массива', () => {
            const A1 = [...baseArray];
            const A2 = [...baseArray];
            nativeSplice.call(A1, 0, 4, ...newItemArray);
            splice(A2, 0, 4, ...newItemArray);
            
            assert.deepEqual(A1, A2);
        });
    })
})