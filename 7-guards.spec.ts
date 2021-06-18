import { formatDimensions } from './7-guards';
import { strict as assert } from 'assert';
import 'mocha';

describe('Guards', () => {
	it('formatDimensions works for all Shape types', () => {
		assert.equal(formatDimensions({size: 5}), 'Square has size: 5');
		assert.equal(formatDimensions({x: 5, y: 10}) , 'Rectangle has x: 5 and y: 10');
		assert.equal(formatDimensions({radius: 10}), `Circle has radius: 10`);
	});
});
