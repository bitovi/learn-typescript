import {bonusMaker} from './3-functions-bonusMaker';
import { strict as assert } from 'assert';
import 'mocha';

describe('BonusMaker', () => {

	it('can be called with two arguments', () => {
		assert.equal( bonusMaker(2500, 'Indominous Rex'), 35000);
	});

	it('can be called with many arguments', () => {
		assert.equal( bonusMaker(2500, 'Indominous Rex', 'Indoraptor', 'Velociraptor'), 90000);
	});

});
