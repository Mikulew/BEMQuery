import { describe, expect, it } from 'vitest';
import Logger from '../Logger.js';

describe('Logger', () => {
  it('is an object', () => {
    expect(Logger).toBeTypeOf('object');
  });

  it('has success method', () => {
    expect(Logger.success).toBeTypeOf('function');
  });

  it('has warning method', () => {
    expect(Logger.warning).toBeTypeOf('function');
  });

  it('has error method', () => {
    expect(Logger.error).toBeTypeOf('function');
  });

  it('has info method', () => {
    expect(Logger.info).toBeTypeOf('function');
  });
});
