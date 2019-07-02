var fs = require("fs");

module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    debugUseColors: true,
    flowFilePretty: true,    
    userDir: '/home/pi/.node-red/',
    nodesDir: '/home/pi/.node-red/nodes',
    httpStatic: '/opt/hiveid-ap/nodered',
    httpAdminRoot: '/',
    functionGlobalContext: {
        os: require("os"),
        _: require("lodash"),
        moment : require("moment"),
        fs : require("fs")
    },
    contextStorage: {
        default: {
            module:"localfilesystem"
        }
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
        page: {
            title: "HiveID Editor",
            favicon: "/opt/hiveid-ap/nodered/images/hiveid_nw.ico",
            css: "/opt/hiveid-ap/nodered/css/nodered.css",
            scripts: "/opt/hiveid-ap/nodered/js/nodered.js"
        },
        header: {
            title: "HiveID Editor",
            image: "/opt/hiveid-ap/nodered/images/hiveid_32.png",
            url: "https://www.hive-id.com"
        },
        deployButton: {
            //type:"simple",
            //label:"Save",
            //icon: "/absolute/path/to/deploy/button/image" // or null to remove image
        },
        menu: {
            "menu-item-help": {
                label: "Node-RED Pi Website",
                url: "http://nodered.org/docs/hardware/raspberrypi.html"
            }
        },
        userMenu: false, // Hide the user-menu even if adminAuth is enabled
        login: {
            image: "/opt/hiveid-ap/nodered/images/hiveid_256.png" // a 256x256 image
        },
        logout: {
            redirect: "https://www.hive-id.com"
        },
        palette: {
            editable: true, // Enable/disable the Palette Manager
            catalogues: [   // Alternative palette manager catalogues
                "https://catalogue.nodered.org/catalogue.json"
            ],
            theme: [
                // Override node colours - rules test against category/type by RegExp.
                //{ category: ".*", type: ".*", color: "#f90" }
            ]
        },
        projects: {
            enabled: false
        }
    }
}
