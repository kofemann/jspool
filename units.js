/*
 * Hepler functions to manage units
 */

function nanosToUnits(s) {
    var n = parseInt(s);
    var timeUnits = ['n/a', 'ns', 'μs', 'ms', 's'];
    var i = +Math.floor(Math.log(n) / Math.log(1000));
    return (n / Math.pow(1024, i)).toFixed(i ? 1 : 0) + ' ' + timeUnits[ isNaN(n) ? 0 : i + 1 ];
}

function sizeToString(s) {
    var n = parseInt(s)
    bytes = n * Math.pow(1024, 3);
    var sizes = ['n/a', 'bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    if (bytes == 0) {
        return '0 bytes';
    }
    var i = +Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(i ? 1 : 0) + ' ' + sizes[ isNaN(bytes) ? 0 : i + 1 ];
}