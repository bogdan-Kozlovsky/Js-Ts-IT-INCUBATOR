import {mult, splitIntoWords, sum} from "./01";

//date стартовые данные
let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('receiving the sum', () => {

    //action действия которие выполняем
    const resault1 = sum(a, b)

    //expect ожидаем получения результата
    expect(resault1).toBe(3)
})

test('getting multiplication', () => {

    const resault2 = mult(a, b)

    expect(resault2).toBe(2)
})

test('splitting into words and should be correct', () => {
    const sent1 = 'Hello my friend!'

    const result1 = splitIntoWords(sent1)

    expect(result1.length).toBe(3)
})
