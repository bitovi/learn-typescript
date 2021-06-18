type Dinosaur = {
	id: number
	species: string
	age: number
	location?: {
		longitude: number
		latitude: number
	}
}

const dinoCache: { [index:string] : number } = {}
export { dinoCache, Dinosaur }