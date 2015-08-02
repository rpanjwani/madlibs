var libs = ["I had {{dish}} for lunch today. They were {{adjective}}. I  was very {{adjective}}.", "Tomorrow, we are going to camp at {{noun (place)}}. It will be fun and we will all {{verb}} together. Now let's prepare by {{verb (present)}}."]

//this would normally be an ajax call to a web-service to retrieve a random lib.
function getRandomLib(){
	var count = libs.length;
	var libSelect = Math.floor(Math.random() * count);
	return libs[libSelect];
}