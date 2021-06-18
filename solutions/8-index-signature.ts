type Dinosaur = {
	id: number
	species: string
	age: number
	location?: {
		longitude: number
		latitude: number
	},
	[index: string] : unknown
}

const dinoCache: { [index:string] : Dinosaur } = {}
export { dinoCache, Dinosaur }