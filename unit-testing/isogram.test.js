import {it, expect, describe} from 'vitest';
import { isIsogram } from './isogram';

describe('isIsogram', () => {
  it('should return true if the string is an isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true); 
  });

    it('should return false if the string is not an isogram', () => {
    expect(isIsogram('aba')).toBe(false); 
  });

    it('should return false if the string with mixed case is not an isogram', () => {
    expect(isIsogram('moOse')).toBe(false); 
  });

});
