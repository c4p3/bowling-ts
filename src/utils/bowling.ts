export const calculate = (points: number[][]) => {
  const framePoints: number[] = [];
  let total = 0;

  for (let i = 0; i < points.length; i++) {
    total += points[i][0];
    total += points[i][1];

    try {
      // Strike
      if (points[i][0] == 10) {
        total += points[i + 1][0]; // adds next throw
        if (points[i + 1][0] == 10) {
          total += points[i + 2][0]; // adds second throw, after strike
        } else {
          total += points[i + 1][1];
        }
        // Spare
      } else if (points[i][0] + points[i][1] == 10) {
        total += points[i + 1][0];
      }
    } catch (e) {
      // ... End of play
    } finally {
      framePoints[i] = total;
    }
  }
  return framePoints;
};
