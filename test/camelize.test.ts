import { camelize } from '../src';

describe('camelize', () => {
  it('should transform foo-bar string to fooBar', () => {
    expect(camelize('foo-bar')).toEqual('fooBar');
  });

  it('should transform foo bar string to fooBar', () => {
    expect(camelize('foo bar')).toEqual('fooBar');
  });

  it('should transform foo_bar string to fooBar', () => {
    expect(camelize('foo_bar')).toEqual('fooBar');
  });

  it('should transform FooBar string to fooBar', () => {
    expect(camelize('FooBar')).toEqual('fooBar');
  });
});
