const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');

test('should generate random bubble tea', () => {
  // Arrange
  // Stub to calls to Math.random to return 0.2
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2);

  // Act
  const bubbleTea = getRandomBubbleTeaType();

  // Assert
  expect(bubbleTea).toBe('JASMINEMILKTEA');

  // Restore the default Math.random
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('should generate pseudo "random" bubble tea - PEACHICETEA', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.6);

  const bubbleTea = getRandomBubbleTeaType();

  expect(bubbleTea).toBe('PEACHICETEA');

  jest.spyOn(global.Math, 'random').mockRestore();
});
