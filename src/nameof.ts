import uniq from 'lodash/uniq';

export const nameof = <T>(name: keyof T) => name;
// export const nameof = <T>(name: Extract<keyof T, string>): string => name;
