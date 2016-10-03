var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
	title:'Article One | Sree Narayana Guru',
	heading:'Sree Narayana Guru',
	date:'Sept 27, 2016',
	content:`<p>
				Narayana Guru, also known as Sree Narayana Guru (c. 1856 – 20 September 1928) was a social reformer of India. He was born into a Kerala family in an era when people from such communities, which were regarded as Avarna, faced much social injustice in the caste-ridden society of Kerala. 
				</p>
				<p>
				He led a reform movement in Kerala, rejected casteism, and promoted new values of spiritual freedom and social equality.[1] He stressed the need for the spiritual and social uplift of the downtrodden by their own efforts through the establishment of temples and educational institutions. 
				</p>
				<p>
				In the process, he denounced the superstitions that clouded the fundamental Hindu cultural convention of caste.
				</p>`
},
'article-two':{
	title:'Article Two | Ganesha',
	heading:'Ganesha',
	date:'Sept 27, 2016',
	content:`<p>
				Ganesha emerged as a distinct deity in the 4th and 5th centuries AD, during the Gupta period, although he inherited traits from Vedic and pre-Vedic precursors.
				</p>
				<p>
				He was formally included among the five primary deities of Smartism (a Hindu denomination) in the 9th century. A sect of devotees called the Ganapatya arose, who identified Ganesha as the supreme deity.
				</p>
				<p>
				The principal scriptures dedicated to Ganesha are the Ganesha Purana, the Mudgala Purana, and the Ganapati Atharvashirsa. Brahma Purana and Brahmanda Purana are other two Puranic genre encyclopedic texts that deal with Ganesha.
				</p>`
},
'article-three':{
	title:'Article Three| Adi Shankara',
	heading:'Adi Shankara',
	date:'Sept 27, 2016',
	content:`<p>
				Adi Shankara (pronounced early 8th century) was a philosopher and theologian[5] from India who consolidated the doctrine of Advaita Vedanta.
				</p>
				<p>
				He is credited with unifying and establishing the main currents of thought in Hinduism.
				</p>`
}
	
};

function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;
	var htmlTemplate = `
	<html>
		<head>
			<title>
			${title}
			</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link href="/ui/style.css" rel="stylesheet" />
		</head>	
		<body>
			<div class = "container">
				<div>
				<a href="/">Home</a>
				</div>
				<hr/>
				<div>
				<h2>${heading}</h2>
				</div>
				
				<div>
					${date}
				</div>
				<hr/>
				<div>
					${content}
				</div>
			</div>	
		</body>
	</html>
	`;
	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName; 	
  res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter', function (req, res) {
	counter = counter + 1;
  res.send(counter.toString());
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function (req, res) {
//Get the name from the request
var name = req.query.name;
names.push(name);
//JSON: Javascript Object Notation
  res.send(JSON.stringify(names));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
