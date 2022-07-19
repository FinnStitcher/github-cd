const User = require('../lib/User');

test('Can create User object', () => {
    const user = new User();
    expect(typeof(user)).toBe("object");
});

test('Can get user name with getName()', () => {
    const user = new User("Tim");
    expect(user.getName()).toBe("Tim");
});

test('Can get GitHub user name with getGitHub()', () => {
    const user = new User("Tim", "Timmy20");
    expect(user.getGitHub()).toBe("Timmy20");
});

test('Can get email with getEmail()', () => {
    const user = new User("Tim", "Timmy20", "Timmy20@gmail.com");
    expect(user.getEmail()).toBe("Timmy20@gmail.com");
});