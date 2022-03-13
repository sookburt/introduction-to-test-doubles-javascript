const getRandomBubbleTeaType = require('./bubble_tea_roulette_service');


test.each`
code  | type
${0.1}  | ${'OOLONGMILKTEA'}
${0.2}  | ${'JASMINEMILKTEA'}
${0.4}  | ${'MATCHAMILKTEA'}
${0.6}  | ${'PEACHICETEA'}
${0.8}  | ${'LYCHEEICETEA'}
`('should generate pseudo "random" bubble tea - %i', ({code, type}) => {
  jest.spyOn(global.Math, 'random').mockReturnValue(code);

  const bubbleTea = getRandomBubbleTeaType();

  expect(bubbleTea).toBe(type);

  jest.spyOn(global.Math, 'random').mockRestore();
});
