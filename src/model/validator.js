import { COLORS, ERROR_MESSAGE } from '../constants.js';

export function validateColor(color) {
  if (color === '') {
    throw new Error(ERROR_MESSAGE.EMPTY_COLOR);
  }
  const colorNames = COLORS.map((item) => item.name);
  if (!colorNames.includes(color)) {
    throw new Error(ERROR_MESSAGE.WRONG_COLOR);
  }
}

export function validateAmount(input, money) {
  if (input === '') {
    throw new Error(ERROR_MESSAGE.EMPTY_AMOUNT);
  }
  if (!/^[0-9]+$/.test(input) || Number(input) < 1) {
    throw new Error(ERROR_MESSAGE.WRONG_AMOUNT);
  }
  if (Number(input) > money) {
    throw new Error(ERROR_MESSAGE.OVER_MONEY);
  }
}
