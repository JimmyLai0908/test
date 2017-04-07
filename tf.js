(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.false_block = function() {
        return -1;
    };
	
    ext.true_block = function() {
        return 1;
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', '-1', 'false_block'],
			['b', '1', 'true_block'],
        ]
    };
    // Register the extension
    ScratchExtensions.register('KIR SCRATCH', descriptor, ext);
})({});