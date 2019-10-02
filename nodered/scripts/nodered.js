function download(filename, text, type = 'json') {
    console.log({ 'filename': filename, 'text': text, 'type': type });
    var element = document.createElement('a');
    var typeString = 'application/json';
    switch (type.toUpperCase()) {
        case 'text' :
            typeString = 'text/plain';
            break;
    }
    element.setAttribute('href', 'data:' + typeString + ';charset=utf-8,' + encodeURIComponent(text) );
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}