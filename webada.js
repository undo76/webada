"use strict";

(function () {
    var cli = require('cli');
    cli.parse({
        port: ['p', 'Listen on this port', 'number', 8000],
        path: [false, 'Serve files from path', 'path', '.']
    });

    cli.main(function (args, options) {
        var connect = require('connect'),
            path =    require('path');
        
        var absPath = path.resolve(options.path);

        console.log("Starting web server...");
        connect(
            connect.logger(),
            connect.directory(absPath),
            connect.static(absPath)
        ).listen(options.port);
        console.log("Listening on port: " + options.port);
        console.log("Serving this path: " + absPath);
    });
}());
