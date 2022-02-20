// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    // console.log(nums)
    return nums.reduce((a, b) => a + b)
    // let a = 0
    // for (let i = 0; i < nums.length; i++) {
    //     a += nums[i]
    // }
    // return a
    // nums.forEach(f =>  a += f)
    // return a

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export function getTriangleType(a: number, b: number, c: number): string {
//     //...здесь пишем код.
//     if (a === b && a === c && b === c) {
//         return '10'
//     }
//     if (b === c || b === a || a === c) {
//         return '01'
//     }
//     if (b !== a && a !== c && b !== c) {
//         return '11'
//     }
//     if (a + b < c || c + b < a || a + c < b ) {
//         return '00'
//     } else {
//         return ''
//     }
//     // В return стоит "заглушка", чтоб typescript не ругался
// }


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

// export function getSum(number: number): number {
//     //...здесь пишем код.
//     // let a = number.toString().split('').map(m => +m).reduce((a , b) => a + b)
//     // return +a
//     // let a = 0
//     // for (let i = 0; i < number.toString().length; i++) {
//     //     a += +number.toString()[i]
//     // }
//     // return a
//     // В return стоит "заглушка", чтоб typescript не ругался
//     // return 123
// }


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
//     let a = 0
//     let b = 0
//     arr.forEach((f,i) => i % 2 === 0 ? a += f : b += f)
//
//     //...здесь пишем код.
//     // В return стоит "заглушка", чтоб typescript не ругался
//     return a > b
// }

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


// export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
//     //...здесь пишем код.
//     let a = array.filter(f => f > 0 && Number.isInteger(f)).map(m => m * m)
//
//     // В return стоит "заглушка", чтоб typescript не ругался
//     return a
// }

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

// export function sumFirstNumbers(N: number): number {
//     //...здесь пишем код.
//     // В return стоит "заглушка", чтоб typescript не ругался
//     let a = 0;
//     for (let i = 0; i <= N; i++) {
//         a += i
//     }
//     return a
// }


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}