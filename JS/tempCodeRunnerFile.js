let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500);