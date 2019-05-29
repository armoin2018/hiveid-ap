module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    flowFilePretty: true,    
    userDir: '/home/pi/.node-red/',
    nodesDir: '/home/pi/.node-red/nodes',
    httpAdminRoot: '/',

//    adminAuth: require("./user-authentication"),
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2b$08$C9tz3cK5KCUtXX13SxJyB.9ml92sg2wZr9Zy.yehD9IhfPHyWyYjm",
            permissions: "*"
        }]
    },
    /*httpNodeAuth: {
        user: "admin"
        , pass: "$2b$08$C9tz3cK5KCUtXX13SxJyB.9ml92sg2wZr9Zy.yehD9IhfPHyWyYjm"
    },*/
    functionGlobalContext: {
    },
    exportGlobalContextKeys: false,

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {
        menu: { "menu-item-help": {
            label: "Node-RED Pi Website",
            url: "http://nodered.org/docs/hardware/raspberrypi.html"
        } },
        projects: {
            enabled: true
        }
    }
}