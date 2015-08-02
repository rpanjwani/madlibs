var libs = ["I had {{dish}} for lunch today. They were {{adjective}}. I  was very {{adjective}}.", "Tomorrow, we are going to camp at {{noun (place)}}. It will be fun and we will all {{verb}} together. Now let's prepare by {{verb (present)}}."]
//var libs = ["I sat {{adverb}} playing a game on my {{noun}}. As I was {{verb (present)}} about to reach my highest score with all of the cool {{noun (plural)}} I would get I {{verb (past)}} to the next level then my {{noun}} got a blue	screen and crashed. While rebooting I saw an ad on TV for a better {{noun}}. I felt bad that the new {{noun}} we just lifted with top of the line {{noun (plural)}} was now old and obsolete. I got {{adjective}} and left my {{noun}} {{verb(present)}} into the {{room in a house}} and {{verb (present)}} a good book.","Red, {{adjective}} apples! Today we are going to {{verb}} apples. I am going to {{verb}} the most. My {{person}} and I are having an {{fruit}} picking contest this year. Every {{season}} we go to {{person's}} farm to pick a {{noun}} of apples. This year, {{person}} wants to make	{{noun}}, so we need a lot. When we arrive {{place}}, {{person}} counts out our apples. We anxiously await the final count. My {{person}} and I {{verb (past)}}! We actually had one more than him, but it had a {{colour}} slimy worm in it. That night we had {{adjective}} applesauce!"];

//this would normally be an ajax call to a web-service to retrieve a random lib.
function getRandomLib(){
	var count = libs.length;
	var libSelect = Math.floor(Math.random() * count);
	return libs[libSelect];
}