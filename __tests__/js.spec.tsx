import { expect, test } from 'vitest';

test.concurrent('handles js', () => {
  expect(1 + 1).toBe(2);
});
