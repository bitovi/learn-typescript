import DinoKeeper from './4a-classes-hello-dino';
import Specialist from './4a-specialist';
import { strict as assert } from 'assert';
import 'mocha';

describe('Classes DinoKeeper', () => {

	it('basics work', () => {
		var dinoKeeper = new DinoKeeper("Joe");
		assert.equal(dinoKeeper.sayHi() , `Joe says "hi"`);
	});

	it('typing works', () => {
		var dinoKeeper = new DinoKeeper("Joe") as DinoKeeper;
		assert.equal(dinoKeeper.sayHi() , `Joe says "hi"`);
	});

});

function removeSpaces(str: string) {
	return str.replace(/\s+/g," ");
}

describe('Classes Specialist', () => {

	it('basics work', () => {
		let employee2 = new Specialist("Owen", 14);
		assert.equal( employee2.sayHi(), `Owen says "hi"` );
		assert.equal(removeSpaces(employee2.safetyQuote()),
			removeSpaces(`Never turn your back to the cage.
				Trust me, I have 14 years of experience`));
	});

});
