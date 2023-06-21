import { ConvertPipe } from './convert.pipe';

describe('ConvertPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert the value to USD', () => {
    const pipe = new ConvertPipe();
    const value = 10;
    const convertTo = 'USD';
    const expectedResult = 382; // 10 * 38.2

    const result = pipe.transform(value, convertTo);

    expect(result).toEqual(expectedResult);
  });

  it('should convert the value to GBP', () => {
    const pipe = new ConvertPipe();
    const value = 10;
    const convertTo = 'GBP';
    const expectedResult = 420; // 10 * 42

    const result = pipe.transform(value, convertTo);

    expect(result).toEqual(expectedResult);
  });

  it('should throw an error for an invalid convertTo value', () => {
    const pipe = new ConvertPipe();
    const value = 10;
    const convertTo = 'INVALID';

    expect(() => pipe.transform(value, convertTo)).toThrowError();
  });

});
