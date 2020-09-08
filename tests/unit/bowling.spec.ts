import { expect } from 'chai'
import { calculate } from '@/utils/bowling'

describe('bowling.ts', () => {
  it('works with zero frames', () => {
    const points: number[][] = [];
    const totals = calculate(points);
    expect(totals).to.eql([]);
  });

  it('works with a spare', () => {
    const points: number[][] = [[4, 4], [9, 1], [2, 3], [5, 2]];
    const totals = calculate(points);
    expect(totals).to.eql([8, 20, 25, 32]);
  });

  it('works with a strike', () => {
    const points: number[][] = [[4, 4], [10, 0], [2, 3], [5, 2]];
    const totals = calculate(points);
    expect(totals).to.eql([8, 23, 28, 35]);
  });

  it('works with three strikes in a row', () => {
    const points: number[][] = [[4, 4], [10, 0], [10, 0], [10, 0], [5, 2], [3, 6]];
    const totals = calculate(points);
    expect(totals).to.eql([8, 38, 63, 80, 87, 96]);
  });

  it('works with eleven strikes', () => {
    const points: number[][] = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10]];
    const totals = calculate(points);
    expect(totals).to.eql([30, 60, 90, 120, 150, 180, 210, 240, 270, 290, 310]);
  });
})
