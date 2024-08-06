import { formatCurrency } from './numberUtils';

describe('formatCurrency', () => {
  it('should format number as BRL currency', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
    expect(formatCurrency(1234.56)).toBe('R$ 1.234,56');
    expect(formatCurrency(-9876.54)).toBe('-R$ 9.876,54');
  });
});
