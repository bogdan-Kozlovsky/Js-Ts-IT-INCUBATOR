import {UserType} from "./test";

function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u
    }

    copy.hair = u.hair / power
    return copy
}


test('reference type test', () => {
    let user: UserType = {
        name: 'Bogdan',
        hair: 32,
        address: {title: 'Ukraine'}
    }
    const awesomeUser = hairdresser(user, 2)


    expect(awesomeUser).toBe(16)

    expect(user.hair).toBe(32)
})
