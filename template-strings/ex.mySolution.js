function upper(strings,...values) {
	let accumulator = strings[0];
	for(let i=1; i<strings.length; i++){
		accumulator += String(values[i-1]).toUpperCase();
		accumulator += strings[i];
	} 
	return accumulator;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);