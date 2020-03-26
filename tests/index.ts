import { sayHello } from '../src/ts';
import clearChildren from './helpers/clear-children';

describe('sayHello', () => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn());
  jest.spyOn(document.body, 'appendChild');

  beforeEach(() => {
    clearChildren(document.body);

    // tslint:disable-next-line:no-console
    (console.log as jest.Mock<any>).mockClear();
    (document.body.appendChild as jest.Mock<any>).mockClear();
  });

  it('should say hello', () => {
    // tslint:disable-next-line:no-console
    expect(console.log).not.toHaveBeenCalled();

    sayHello();

    // tslint:disable-next-line:no-console
    expect(console.log).toHaveBeenCalledTimes(1);
    // tslint:disable-next-line:no-console
    expect(console.log).toHaveBeenCalledWith('Hello');
  });

  it('should append a message to the body', () => {
    expect(document.body.appendChild).not.toHaveBeenCalled();

    sayHello();

    expect(document.body.appendChild).toHaveBeenCalledTimes(1);
    expect(document.body.innerHTML).toBe('<h1>Hello</h1>');
  });
});
