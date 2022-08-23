import {expectType, expectAssignable, expectError} from 'tsd';
import {concat, one} from '..';

expectType<string>(concat('foo', 'bar'));
// expectType<string>(concat(1, 2));
expectAssignable<string|number>(concat(1, 2));

expectType<Promise<string>>(one('foo', 'bar'));

expectType<string>(await concat('foo', 'bar'));

expectError(await concat(true, false));

expectType<Promise<number | string> | string>(new Promise<number | string>(resolve => resolve(1)));
