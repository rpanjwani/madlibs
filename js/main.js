/* pattern to extract substrings encompassed in {{ and }} symbols. e.g. {{noun}} 
Note: currently this is a string, but should be changed to literal as of ECMA 6 to make
it more efficient, since this is a constant. Doing so is not supported in previous ECMA versions.*/
var regexPattern = "\\{\\{([\\s\\S]*?)\\}\\}";

/* Extracts prompts from strings in following format: {{prompt}} */
function extractPrompts (str) {
	var resultArray = [];
	var regex = new RegExp(regexPattern, "g");
	var result = regex.exec(str);
	while(result != null){
		resultArray.push(result[1]);
	   	var result = regex.exec(str);
	}
	return resultArray;
}

/*replaces prompts in a str by elements in the responses array in ascending order */
function replacePromptsWithResponses(str, responses){
	for(var i=0; i<responses.length; i++){
		var regex = new RegExp(regexPattern);
		str = str.replace(regex, responses[i].value);
	}
	return str;
}

/*Gets "responses" or values provided by the user for madlib prompts */
function getResponses(){
	return $("#prompt-responses").serializeArray();
}

$(document).ready(function(){
	var lib = "";
	$.getScript("/js/data.js", function(){
		lib = getRandomLib();
		var promptData = extractPrompts(lib);
		console.log(promptData);
		var promptList = $('#prompts');
		$.get('/views/prompt.html', function(template, textStatus, jqXhr) {
            promptList.append(Mustache.render($(template).filter('#promptTpl').html(), promptData));
        });
	});
	
	$('#submit-responses').click(function(){
		console.log(getResponses());
		var madlib = replacePromptsWithResponses(lib, getResponses());
		$("#madlib").append(madlib);
		$("#prompt-section").hide();
		$("#madlib-section").show();
	});

	$('#start-game').click(function(){
		$('#start-game').hide();
		$('#prompt-responses').show();
	});

	$('#replay').click(function(){
		location.reload();
	})

	$('#prompt-responses').hide();
	$('#madlib-section').hide();
});


