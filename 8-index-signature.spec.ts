import { Dinosaur, dinoCache } from './8-index-signature';
import { strict as assert } from 'assert';
import 'mocha';

describe('Index Signature', () => {
	it('DinoCache stores Dino type', () => {
		const testDino1: Dinosaur = { id: 5, species: 'Liopleurodon', age: 10 }
		dinoCache['foo'] = testDino1
		assert.equal(dinoCache['foo'], testDino1);
	});
	it('Dino type stored by DinoCache can include additional `any` type members' , () => {
		const testDino1: Dinosaur = { id: 5, species: 'Liopleurodon', age: 10, trainer: 'Andy' }
		dinoCache['foo'] = testDino1
		assert.equal(dinoCache['foo'], testDino1);
	});
});
