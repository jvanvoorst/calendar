var ical = require('ical-generator'),
    http = require('http'),
    cal = ical({domain: 'justinvanvoorst.com', name: 'my first iCal'});

cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://justinvanvoorst.com/'
});

http.createServer(function(req, res) {
    cal.serve(res);
}).listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});