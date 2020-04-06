// Explanation at https://codewithhugo.com/mocking-the-current-date-in-jest-tests/#mock-the-whole-date-class-with-a-fixed-date-instance

const getCurrentDate = () => new Date();
let realDate;

test('It should create new date', () => {
  // Setup
  const currentDate = new Date('2019-05-14T11:01:58.135Z');
  realDate = Date;
  global.Date = class extends Date {
    constructor(...args) {
      if (args.length > 0) {
        // eslint-disable-next-line constructor-super, no-constructor-return
        return super(...args);
      }

      // eslint-disable-next-line no-constructor-return
      return currentDate;
    }
  };

  expect(getCurrentDate()).toEqual(new Date('2019-05-14T11:01:58.135Z'));

  // Cleanup
  global.Date = realDate;
});
