import { addDays } from 'date-fns/esm';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date): Date {
  if (Platform.OS === 'ios') {
    // add extra days for current selected date on iOS. Here is doing nothing
    return addDays(date, 0);
  } else {
    return date;
  }
}
