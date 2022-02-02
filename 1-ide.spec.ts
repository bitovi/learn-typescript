import { strict as assert } from 'assert';
import 'mocha';

describe('IDE (import and export)', () => {

	it('Updates document.body.innerHTML', () => {
		eval(`
			global.document = {body: {innerHTML: ""}}
		`)
		require("./1-ide-hello-earth");
		assert.equal(document.body.innerHTML, "Hello, Earth");
	});

});
