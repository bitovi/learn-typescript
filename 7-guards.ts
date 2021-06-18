interface Square {
	size: number
}
interface Rectangle {
	x: number
	y: number
}
interface Circle {
	radius: number
}
type Shape = Square | Rectangle

function isCircle(s: Shape): boolean {
	return 'radius' in s
}

function formatDimensions(s: Shape) {
	if ('size' in s) {
		return `Square has size: ${s.size}`
	} else if ('x' in s) {
		return `Rectangle has x: ${s.x} and y: ${s.y}`
	} else if (isCircle(s)) {
		return `Circle has radius: ${s.radius}`
	} else {
		const _exhaustiveCheck: never = s
	}
}

export { Square, Circle, Rectangle, Shape, formatDimensions };
