// Explanation at https://codewithhugo.com/mocking-the-current-date-in-jest-tests/#spy-on-date-now-and-add-a-mock-implementation

const getNow = () => new Date(Date.now());

test('It should create correct now Date', () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() =>
      new Date('2019-05-14T11:01:58.135Z').valueOf()
    );

  expect(getNow()).toEqual(new Date('2019-05-14T11:01:58.135Z'));
});
