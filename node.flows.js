[
    {
        "id": "f1ec9b2a.1f7298",
        "type": "tab",
        "label": "Node Link Redirector",
        "disabled": false,
        "info": ""
    },
    {
        "id": "a06855ce.9f5488",
        "type": "tab",
        "label": "Admin Console - System",
        "disabled": false,
        "info": ""
    },
    {
        "id": "9745920.d8a397",
        "type": "tab",
        "label": "Set Mode",
        "disabled": false,
        "info": ""
    },
    {
        "id": "5e61e22e.7a581c",
        "type": "tab",
        "label": "RFID Flow",
        "disabled": false,
        "info": ""
    },
    {
        "id": "d65a42c6.df12f",
        "type": "tab",
        "label": "HiveID Configuration",
        "disabled": false,
        "info": ""
    },
    {
        "id": "11b2f565.0266ab",
        "type": "tab",
        "label": "HiveID Flow Updater",
        "disabled": false,
        "info": ""
    },
    {
        "id": "16d0b1f7.5422be",
        "type": "tab",
        "label": "Firmware Updater",
        "disabled": false,
        "info": ""
    },
    {
        "id": "fd2ebb8a.240a38",
        "type": "tab",
        "label": "TrainTraxx Configuration",
        "disabled": false,
        "info": ""
    },
    {
        "id": "1a726252.d178be",
        "type": "tab",
        "label": "TrainTraxx Data Cache",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7bef0b7b.d5a104",
        "type": "tab",
        "label": "TrainTraxx Activity Screen",
        "disabled": false,
        "info": ""
    },
    {
        "id": "3d602d50.39dab2",
        "type": "tab",
        "label": "TrainTraxx to JMRI",
        "disabled": false,
        "info": ""
    },
    {
        "id": "ed0209cc.523aa8",
        "type": "tab",
        "label": "JMRI Configuration",
        "disabled": false,
        "info": ""
    },
    {
        "id": "41757e63.7ce36",
        "type": "tab",
        "label": "JMRI GET Endpoint",
        "disabled": false,
        "info": ""
    },
    {
        "id": "164213bd.e3dd4c",
        "type": "tab",
        "label": "JMRI Data Cache",
        "disabled": false,
        "info": ""
    },
    {
        "id": "c3e3e66a.322358",
        "type": "tab",
        "label": "Summary Section",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7b5cf843.8f8fc8",
        "type": "tab",
        "label": "Hive Node Manager",
        "disabled": false,
        "info": ""
    },
    {
        "id": "de72cd33.d0bc",
        "type": "tab",
        "label": "Node History",
        "disabled": false,
        "info": ""
    },
    {
        "id": "e5ec0709.570938",
        "type": "tab",
        "label": "Services",
        "disabled": false,
        "info": ""
    },
    {
        "id": "8b10dcf.dc4c82",
        "type": "subflow",
        "name": "Get JMRI Info",
        "info": "",
        "category": "JMRI",
        "in": [
            {
                "x": 85,
                "y": 72.5,
                "wires": [
                    {
                        "id": "96e18991.b2fa88"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 745,
                "y": 72.5,
                "wires": [
                    {
                        "id": "b50ad81b.505278",
                        "port": 0
                    }
                ]
            }
        ],
        "inputLabels": [
            "msg.payload"
        ],
        "outputLabels": [
            "msg.payload"
        ],
        "icon": "node-red/leveldb.png"
    },
    {
        "id": "a40e76b8.4d8a48",
        "type": "subflow",
        "name": "Get TrainTraxx Data",
        "info": "",
        "category": "TrainTraxx",
        "in": [
            {
                "x": 80,
                "y": 140,
                "wires": [
                    {
                        "id": "91353714.a754e8"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 980,
                "y": 180,
                "wires": [
                    {
                        "id": "958d130f.9dbf1",
                        "port": 0
                    },
                    {
                        "id": "f1c39296.374d1",
                        "port": 1
                    }
                ]
            },
            {
                "x": 480,
                "y": 100,
                "wires": [
                    {
                        "id": "91353714.a754e8",
                        "port": 0
                    }
                ]
            }
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ],
        "icon": "node-red/leveldb.png"
    },
    {
        "id": "4de8836.ac0667c",
        "type": "ui_base",
        "theme": {
            "name": "theme-custom",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false
            },
            "customTheme": {
                "name": "hiveid-manager",
                "default": "#4B7930",
                "baseColor": "#ff9300",
                "baseFont": "Trebuchet MS,Helvetica,sans-serif",
                "reset": false
            },
            "themeState": {
                "base-color": {
                    "default": "#4B7930",
                    "value": "#ff9300",
                    "edited": true
                },
                "page-titlebar-backgroundColor": {
                    "value": "#ff9300",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#ffb34d",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#ff9300",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "Trebuchet MS,Helvetica,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "HiveID Manager",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "false",
            "dateFormat": "YYYY-MM-DD",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "98512fe8.4ad4",
        "type": "ui_group",
        "z": "",
        "name": "System Controls",
        "tab": "82d159ac.42e4b8",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "df05b319.59cad",
        "type": "ui_group",
        "z": "",
        "name": "Software Updates",
        "tab": "",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "2d93584c.72e648",
        "type": "ui_group",
        "z": "",
        "name": "HiveID",
        "tab": "5168ef46.74702",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "5168ef46.74702",
        "type": "ui_tab",
        "z": "",
        "name": "Application Settings",
        "icon": "fa-list",
        "order": 12,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "8b01491a.1965e8",
        "type": "ui_group",
        "z": "",
        "name": "WiFi Client Setup",
        "tab": "95d2bc1b.6b456",
        "order": 4,
        "disp": true,
        "width": "8",
        "collapse": false
    },
    {
        "id": "3b710094.8878f",
        "type": "ui_link",
        "z": "",
        "name": "HiveID Editor",
        "link": "/",
        "icon": "all_inclusive",
        "target": "iframe",
        "order": 15
    },
    {
        "id": "8e968283.a2d29",
        "type": "ui_link",
        "z": "",
        "name": "JMRI",
        "link": "/redir?app=jmri",
        "icon": "train",
        "target": "iframe",
        "order": 9
    },
    {
        "id": "6efda0bd.72343",
        "type": "ui_link",
        "z": "",
        "name": "OpenRSD",
        "link": "/redir?app=openrsd",
        "icon": "fa-cogs",
        "target": "iframe",
        "order": 11
    },
    {
        "id": "38e63d7a.b846e2",
        "type": "ui_link",
        "z": "",
        "name": "phpMyAdmin",
        "link": "/redir?app=phpmyadmin",
        "icon": "fa-database",
        "target": "newtab",
        "order": 10
    },
    {
        "id": "3808a9b7.8005b6",
        "type": "ui_link",
        "z": "",
        "name": "TrainTraxx Application",
        "link": "https://www.traintraxx.com/traintraxx-application",
        "icon": "fa-train",
        "target": "iframe",
        "order": 7
    },
    {
        "id": "12a9f286.0bbd9d",
        "type": "ui_link",
        "z": "",
        "name": "TrainTraxx Store",
        "link": "https://www.traintraxx.com/product-category/traintraxx-products/",
        "icon": "shopping_cart",
        "target": "newtab",
        "order": 8
    },
    {
        "id": "82d159ac.42e4b8",
        "type": "ui_tab",
        "z": "",
        "name": "System Summary",
        "icon": "fa-area-chart",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "95d2bc1b.6b456",
        "type": "ui_tab",
        "z": "",
        "name": "Network Mode",
        "icon": "settings_ethernet",
        "order": 13,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "bdaf72c3.2be81",
        "type": "ui_group",
        "z": "",
        "name": "Performance",
        "tab": "82d159ac.42e4b8",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "17f52c5b.cfb014",
        "type": "ui_group",
        "z": "",
        "name": "Host Information",
        "tab": "82d159ac.42e4b8",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "1aab9ee9.8893d1",
        "type": "ui_tab",
        "z": "",
        "name": "Local Train Activity",
        "icon": "fa-home",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "a9319cec.7d9c",
        "type": "ui_group",
        "z": "",
        "name": "Manage Information",
        "tab": "1aab9ee9.8893d1",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "3220fafa.330906",
        "type": "ui_group",
        "z": "",
        "name": "Activity",
        "tab": "1aab9ee9.8893d1",
        "order": 1,
        "disp": true,
        "width": "14",
        "collapse": true
    },
    {
        "id": "52268d3e.c2cde4",
        "type": "ui_group",
        "z": "",
        "name": "Manage Information",
        "tab": "",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "e74abd5.60ebe4",
        "type": "ui_group",
        "z": "",
        "name": "Manage Information",
        "tab": "",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "c39736a3.dcaf08",
        "type": "ui_group",
        "z": "",
        "name": "TrainTraxx",
        "tab": "5168ef46.74702",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "f907e9dd.26a218",
        "type": "ui_group",
        "z": "",
        "name": "JMRI",
        "tab": "5168ef46.74702",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "198bfc48.894d14",
        "type": "ui_group",
        "z": "",
        "name": "TrainTraxx",
        "tab": "",
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "4411c851.baef98",
        "type": "ui_group",
        "z": "",
        "name": "Summary",
        "tab": "1aab9ee9.8893d1",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "e2f29212.fa7b8",
        "type": "ui_group",
        "z": "",
        "name": "TrainTraxx",
        "tab": "",
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "bfa7bfc3.31cd7",
        "type": "ui_group",
        "z": "",
        "name": "Manage Information",
        "tab": "",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "7491149.92351ec",
        "type": "ui_group",
        "z": "",
        "name": "Operating Mode",
        "tab": "95d2bc1b.6b456",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "92534c08.7fb13",
        "type": "ui_group",
        "z": "",
        "name": "Gateway Settings",
        "tab": "95d2bc1b.6b456",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": true
    },
    {
        "id": "e96b9c3.af2826",
        "type": "ui_tab",
        "z": "",
        "name": "Node Manger",
        "icon": "fa-microchip",
        "order": 5,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "873f13f8.22f2b",
        "type": "ui_group",
        "z": "",
        "name": "Nodes",
        "tab": "e96b9c3.af2826",
        "order": 1,
        "disp": true,
        "width": "12",
        "collapse": false
    },
    {
        "id": "73493f86.f11df",
        "type": "ui_group",
        "z": "",
        "name": "Network Interfaces",
        "tab": "82d159ac.42e4b8",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "586efcf7.fe4cf4",
        "type": "ui_tab",
        "z": "",
        "name": "Under Development",
        "icon": "dashboard",
        "order": 16,
        "disabled": true,
        "hidden": true
    },
    {
        "id": "511f0851.ca4e98",
        "type": "ui_group",
        "z": "",
        "name": "Group 1",
        "tab": "586efcf7.fe4cf4",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "fbf0d797.e67a78",
        "type": "ui_group",
        "z": "",
        "name": "Available Firware Versions",
        "tab": "e96b9c3.af2826",
        "order": 2,
        "disp": true,
        "width": "10",
        "collapse": false
    },
    {
        "id": "26cecbbc.95c444",
        "type": "ui_tab",
        "z": "",
        "name": "Node History",
        "icon": "fa-history",
        "order": 6,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "d93a6b1c.d9e2e8",
        "type": "ui_group",
        "z": "",
        "name": "Node History",
        "tab": "26cecbbc.95c444",
        "order": 1,
        "disp": true,
        "width": "12",
        "collapse": false
    },
    {
        "id": "425824b0.5883fc",
        "type": "ui_tab",
        "z": "",
        "name": "Service Manager",
        "icon": "fa-server",
        "order": 14,
        "disabled": false,
        "hidden": true
    },
    {
        "id": "f5495812.6a3bb8",
        "type": "ui_group",
        "z": "",
        "name": "Services",
        "tab": "425824b0.5883fc",
        "order": 1,
        "disp": true,
        "width": "18",
        "collapse": false
    },
    {
        "id": "affe8d30.ff20f8",
        "type": "ui_group",
        "z": "",
        "name": "Configured WiFi Networks",
        "tab": "95d2bc1b.6b456",
        "order": 5,
        "disp": true,
        "width": "8",
        "collapse": false
    },
    {
        "id": "b0d41c89.dd503",
        "type": "ui_group",
        "z": "",
        "name": "Scan for WiFi Networks",
        "tab": "95d2bc1b.6b456",
        "order": 3,
        "disp": true,
        "width": "8",
        "collapse": false
    },
    {
        "id": "71797628.06a3f8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a9319cec.7d9c",
        "order": 8,
        "width": 1,
        "height": 1
    },
    {
        "id": "d1a2c2c2.3b2b4",
        "type": "ui_link",
        "z": "",
        "name": "JMRI Operations",
        "link": "/redir?app=jmri_ops",
        "icon": "train",
        "target": "iframe",
        "order": 4
    },
    {
        "id": "6e752ac1.4f63f4",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "98512fe8.4ad4",
        "order": 3,
        "width": "6",
        "height": 1
    },
    {
        "id": "d3d8accc.c9188",
        "type": "ui_group",
        "z": "",
        "name": "Find Inventory",
        "tab": "1aab9ee9.8893d1",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "b69fbeec.5834b",
        "type": "ui_tab",
        "z": "",
        "name": "JMRI Operations Links",
        "icon": "link",
        "order": 3,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "2a4e66db.9da7fa",
        "type": "ui_group",
        "z": "",
        "name": "Trains",
        "tab": "b69fbeec.5834b",
        "order": 1,
        "disp": true,
        "width": "24",
        "collapse": false
    },
    {
        "id": "2d098932.9789f6",
        "type": "ui_link",
        "z": "",
        "name": "Change Log",
        "link": "/redir?app=change_log",
        "icon": "change_history",
        "target": "iframe",
        "order": 17
    },
    {
        "id": "654fb383.d4029c",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "a9319cec.7d9c",
        "order": 2,
        "width": 1,
        "height": 1
    },
    {
        "id": "5a317a8b.60a8b4",
        "type": "ui_text_input",
        "z": "a06855ce.9f5488",
        "name": "",
        "label": "Host Name",
        "tooltip": "",
        "group": "17f52c5b.cfb014",
        "order": 1,
        "width": "6",
        "height": "2",
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 830,
        "y": 140,
        "wires": [
            [
                "5e56d465.6b35ac",
                "9561984e.66c808"
            ]
        ]
    },
    {
        "id": "16c7651a.292bdb",
        "type": "watch",
        "z": "a06855ce.9f5488",
        "name": "",
        "files": "/etc/hostname",
        "recursive": "",
        "x": 120,
        "y": 140,
        "wires": [
            [
                "e8ed6bdd.7a0138"
            ]
        ]
    },
    {
        "id": "109b7ab9.c9eb25",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "hostname",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 140,
        "wires": [
            [
                "5a317a8b.60a8b4"
            ]
        ]
    },
    {
        "id": "e8ed6bdd.7a0138",
        "type": "file in",
        "z": "a06855ce.9f5488",
        "name": "",
        "filename": "/etc/hostname",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 380,
        "y": 140,
        "wires": [
            [
                "109b7ab9.c9eb25"
            ]
        ]
    },
    {
        "id": "60e46d31.c31c34",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo /opt/hiveid-ap/system_set_hostname.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1560,
        "y": 140,
        "wires": [
            [],
            [],
            [
                "38766841.5fbec8"
            ]
        ]
    },
    {
        "id": "b93a8462.ae5298",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Reboot",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "autorenew",
        "payload": "Do you want to Reboot?",
        "payloadType": "str",
        "topic": "",
        "x": 740,
        "y": 260,
        "wires": [
            [
                "5a9407e8.fa2398"
            ]
        ]
    },
    {
        "id": "7cb7f74b.562db8",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo reboot",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1410,
        "y": 260,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "4eb7a717.26b618",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Shutdown",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-power-off",
        "payload": "Ready to Shutdown?",
        "payloadType": "str",
        "topic": "",
        "x": 110,
        "y": 620,
        "wires": [
            [
                "a6afd8dd.732578"
            ]
        ]
    },
    {
        "id": "1ed4aa5a.8af176",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo shutdown now",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1020,
        "y": 620,
        "wires": [
            [],
            [],
            [
                "63871334.57f6ec"
            ]
        ]
    },
    {
        "id": "9a80917a.4666b",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "17f52c5b.cfb014",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "OS Upgrades",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-redo",
        "payload": "Raspberry Pi is upgrading, once completed it will request a reboot.",
        "payloadType": "str",
        "topic": "",
        "x": 120,
        "y": 420,
        "wires": [
            [
                "de3137d8.c9ba48",
                "de578607.2bd608"
            ]
        ]
    },
    {
        "id": "de3137d8.c9ba48",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo /opt/hiveid-ap/system_update.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 490,
        "y": 420,
        "wires": [
            [],
            [],
            [
                "af7d97d7.e8a898"
            ]
        ]
    },
    {
        "id": "af7d97d7.e8a898",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 730,
        "y": 420,
        "wires": [
            [
                "5a9407e8.fa2398"
            ],
            [
                "88bdde27.e13aa"
            ]
        ]
    },
    {
        "id": "307d29d2.71ff56",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "17f52c5b.cfb014",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update HiveID Code (SLOW)",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "These upgrades will take time to load and the application will be unavailable during hte upgrades.  Do you want continue?",
        "payloadType": "str",
        "topic": "",
        "x": 160,
        "y": 500,
        "wires": [
            [
                "62a9a8a6.197848"
            ]
        ]
    },
    {
        "id": "60e3884f.3df908",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "echo \"/opt/hiveid-ap/hiveid_update.sh\" | at -M now",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1110,
        "y": 500,
        "wires": [
            [],
            [],
            [
                "6263486e.492748"
            ]
        ]
    },
    {
        "id": "92b7519d.28a39",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 100,
        "wires": [
            [
                "e8ed6bdd.7a0138",
                "26beefe6.cfd83"
            ]
        ]
    },
    {
        "id": "5a9407e8.fa2398",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "Reboot",
        "name": "Reboot",
        "x": 1020,
        "y": 260,
        "wires": [
            [
                "d5da6758.1961a8"
            ]
        ]
    },
    {
        "id": "a6afd8dd.732578",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "",
        "name": "Shutdown",
        "x": 410,
        "y": 620,
        "wires": [
            [
                "c3ea8792.391e88"
            ]
        ]
    },
    {
        "id": "e9af9d2a.be78f",
        "type": "ui_text_input",
        "z": "d65a42c6.df12f",
        "name": "HiveID API Endpoint",
        "label": "HiveID API Endpoint",
        "tooltip": "",
        "group": "2d93584c.72e648",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 840,
        "y": 200,
        "wires": [
            [
                "c20928f5.da0458"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "c20928f5.da0458",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "Set HIVEID_Config.HiveID_API",
        "rules": [
            {
                "t": "set",
                "p": "HIVEID_Config.HiveID_API",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 240,
        "wires": [
            [
                "e82f7a29.794508"
            ]
        ]
    },
    {
        "id": "616d5896.3683f8",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "HIVEID_Config.HiveID_API",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HIVEID_Config.HiveID_API",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 800,
        "y": 160,
        "wires": [
            [
                "e9af9d2a.be78f"
            ]
        ]
    },
    {
        "id": "b22ac622.eba508",
        "type": "file in",
        "z": "d65a42c6.df12f",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.hiveid.json",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 470,
        "y": 200,
        "wires": [
            [
                "82e7fea3.bd2b3"
            ]
        ]
    },
    {
        "id": "82e7fea3.bd2b3",
        "type": "json",
        "z": "d65a42c6.df12f",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 430,
        "y": 240,
        "wires": [
            [
                "7e78409d.ec487"
            ]
        ]
    },
    {
        "id": "7e78409d.ec487",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "Set HIVEID_Config",
        "rules": [
            {
                "t": "set",
                "p": "HIVEID_Config",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 510,
        "y": 280,
        "wires": [
            [
                "616d5896.3683f8",
                "62d04a23.b80bd4",
                "2250c2df.a8728e"
            ]
        ]
    },
    {
        "id": "e82f7a29.794508",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HIVEID_Config",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1220,
        "y": 360,
        "wires": [
            [
                "5fdfad93.b1d8b4"
            ]
        ]
    },
    {
        "id": "5fdfad93.b1d8b4",
        "type": "json",
        "z": "d65a42c6.df12f",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": true,
        "x": 1230,
        "y": 400,
        "wires": [
            [
                "c4cecae6.b7be98"
            ]
        ]
    },
    {
        "id": "c4cecae6.b7be98",
        "type": "file",
        "z": "d65a42c6.df12f",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.hiveid.json",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "x": 1330,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "88e55a28.5ffc78",
        "type": "inject",
        "z": "d65a42c6.df12f",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 210,
        "y": 200,
        "wires": [
            [
                "b22ac622.eba508"
            ]
        ]
    },
    {
        "id": "77e95678.0dd7a8",
        "type": "watch",
        "z": "d65a42c6.df12f",
        "name": "",
        "files": "/etc/hiveid-ap/conf.hiveid.json",
        "recursive": "",
        "x": 420,
        "y": 160,
        "wires": [
            [
                "b22ac622.eba508"
            ]
        ]
    },
    {
        "id": "3d193b84.ed7754",
        "type": "ui_text_input",
        "z": "d65a42c6.df12f",
        "name": "HiveID Web Address",
        "label": "HiveID Web Address",
        "tooltip": "",
        "group": "2d93584c.72e648",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 840,
        "y": 320,
        "wires": [
            [
                "4e44260a.1a98e8"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "4e44260a.1a98e8",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "Set HIVEID_Config.HiveID_Web",
        "rules": [
            {
                "t": "set",
                "p": "HIVEID_Config.HiveID_Web",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 360,
        "wires": [
            [
                "e82f7a29.794508"
            ]
        ]
    },
    {
        "id": "62d04a23.b80bd4",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "HIVEID_Config.HiveID_Web",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HIVEID_Config.HiveID_Web",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 800,
        "y": 280,
        "wires": [
            [
                "3d193b84.ed7754"
            ]
        ]
    },
    {
        "id": "e2c2ad9c.caed1",
        "type": "ui_text_input",
        "z": "d65a42c6.df12f",
        "name": "HiveID API Key",
        "label": "HiveID API Key",
        "tooltip": "",
        "group": "2d93584c.72e648",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 820,
        "y": 440,
        "wires": [
            [
                "aff72860.1b2878"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "aff72860.1b2878",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "Set HIVEID_Config.HiveID_Key",
        "rules": [
            {
                "t": "set",
                "p": "HIVEID_Config.HiveID_Key",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 480,
        "wires": [
            [
                "e82f7a29.794508"
            ]
        ]
    },
    {
        "id": "2250c2df.a8728e",
        "type": "change",
        "z": "d65a42c6.df12f",
        "name": "HIVEID_Config.HiveID_Key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HIVEID_Config.HiveID_Key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 800,
        "y": 400,
        "wires": [
            [
                "e2c2ad9c.caed1"
            ]
        ]
    },
    {
        "id": "c8cd0273.9f1f4",
        "type": "http in",
        "z": "f1ec9b2a.1f7298",
        "name": "Redirector",
        "url": "/redir",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 80,
        "y": 120,
        "wires": [
            [
                "fed0826d.2117"
            ]
        ]
    },
    {
        "id": "fed0826d.2117",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "checkRedirect",
        "property": "payload.app",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "openrsd",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "phpmyadmin",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "jmri",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "jmri_ops",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "change_log",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 6,
        "x": 240,
        "y": 200,
        "wires": [
            [
                "e5b4b384.ffba8"
            ],
            [
                "b1e60b01.5f1548"
            ],
            [
                "b4f7b12.29c705"
            ],
            [
                "b4f7b12.29c705"
            ],
            [
                "a2eef849.2ba0d8"
            ],
            [
                "f8e90910.c1fb88"
            ]
        ]
    },
    {
        "id": "9596c547.812608",
        "type": "http response",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1110,
        "y": 200,
        "wires": []
    },
    {
        "id": "f27066a1.a44ba8",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set OpenRSD",
        "func": "delete msg.payload;\nmsg.statusCode = 302;\nvar IP = global.get('IP');\nmsg.headers = {\n    \"Location\" : \"http://\" + IP.internalIPv4 + '/openrsd'\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 860,
        "y": 80,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "86aa8688.67b188",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set phpMyAdmin",
        "func": "delete msg.payload;\nmsg.statusCode = 302;\nvar IP = global.get('IP');\nmsg.headers = {\n    \"Location\" : \"http://\" + IP.internalIPv4  + '/phpmyadmin'\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 120,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "7f66e017.f90e1",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set JMRI",
        "func": "var IP = global.get('IP');\nvar JMRI_Config = global.get('JMRI_Config');\nif (JMRI_Config !== undefined && JMRI_Config.JMRI_Web !== undefined) {\n    msg.statusCode = 302;\n    var target = global.get(msg.payload.app.toUpperCase() + '_URL');\n    \n    msg.headers = {\n        \"Location\" : target\n    };\n} else {\n    msg.statusCode = 404;\n}\ndelete msg.payload;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 840,
        "y": 160,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "90a5c2c3.31751",
        "type": "http request",
        "z": "11b2f565.0266ab",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "url": "",
        "tls": "",
        "x": 230,
        "y": 140,
        "wires": [
            [
                "208ccfbb.60cfd",
                "fe524ffe.6821f"
            ]
        ]
    },
    {
        "id": "dc21a5dc.d18fb8",
        "type": "function",
        "z": "11b2f565.0266ab",
        "name": "Set Keyed URL",
        "func": "var config = global.get('HIVEID_Config');\n\nmsg.url = config.HiveID_API + 'nodered?apikey=' + config.HiveID_Key ;\nmsg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 200,
        "y": 100,
        "wires": [
            [
                "90a5c2c3.31751"
            ]
        ]
    },
    {
        "id": "21edbadb.b209a6",
        "type": "ui_button",
        "z": "11b2f565.0266ab",
        "name": "",
        "group": "511f0851.ca4e98",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update Node-Red Flows from Store",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "cloud_download",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 230,
        "y": 60,
        "wires": [
            [
                "dc21a5dc.d18fb8",
                "b6adf091.54a19"
            ]
        ]
    },
    {
        "id": "208ccfbb.60cfd",
        "type": "debug",
        "z": "11b2f565.0266ab",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 750,
        "y": 140,
        "wires": []
    },
    {
        "id": "fe524ffe.6821f",
        "type": "function",
        "z": "11b2f565.0266ab",
        "name": "Link new Nodes",
        "func": "delete msg.url;\nmsg.new_nodes = msg.payload;\nmsg.headers = {'content-type':'application/json'};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 280,
        "y": 180,
        "wires": [
            [
                "b4df86b6.c6b2b8",
                "208ccfbb.60cfd"
            ]
        ]
    },
    {
        "id": "11b0779f.cb8098",
        "type": "function",
        "z": "11b2f565.0266ab",
        "name": "Merge Flows ",
        "func": "var tempObj = {};\nvar foundObj = {};\nfor (var i=0; i<msg.new_nodes.length;i++) {\n    tempObj[msg.new_nodes[i]['id']] = msg.new_nodes[i];\n    foundObj[msg.new_nodes[i]['id']] = 0;\n    \n}\n\nfor (var i=0;i<msg.payload.length;i++) {\n    if (tempObj[msg.payload[i]['id']] !== undefined) {\n        msg.payload[i] = tempObj[msg.payload[i]['id']];\n        foundObj[msg.payload[i]['id']] =1;\n    }\n}\n\nfor (var i in foundObj) {\n    if (foundObj[i] === 0) {\n        msg.payload.push(tempObj[i]);\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 220,
        "wires": [
            [
                "8b922e5e.6f89a",
                "208ccfbb.60cfd"
            ]
        ]
    },
    {
        "id": "b4df86b6.c6b2b8",
        "type": "http request",
        "z": "11b2f565.0266ab",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "url": "http://127.0.0.1:1880/flows",
        "tls": "",
        "x": 310,
        "y": 220,
        "wires": [
            [
                "11b0779f.cb8098",
                "422f15af.c3cc6c"
            ]
        ]
    },
    {
        "id": "8b922e5e.6f89a",
        "type": "http request",
        "z": "11b2f565.0266ab",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "http://127.0.0.1:1880/flows",
        "tls": "",
        "x": 550,
        "y": 260,
        "wires": [
            [
                "208ccfbb.60cfd"
            ]
        ]
    },
    {
        "id": "fca32d87.e092a",
        "type": "file",
        "z": "11b2f565.0266ab",
        "name": "",
        "filename": "",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "false",
        "x": 570,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "a03255ae.66a948",
        "type": "function",
        "z": "11b2f565.0266ab",
        "name": "Setup Backup File Name",
        "func": "msg.filename = '/usr/local/hiveid-ap/backups/nodered.' + msg.timestamp + '.json';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 360,
        "wires": [
            [
                "fca32d87.e092a"
            ]
        ]
    },
    {
        "id": "422f15af.c3cc6c",
        "type": "moment",
        "z": "11b2f565.0266ab",
        "name": "",
        "topic": "",
        "input": "",
        "inputType": "date",
        "inTz": "America/Chicago",
        "adjAmount": 0,
        "adjType": "days",
        "adjDir": "add",
        "format": "YYYYMMDDHHMMSS",
        "locale": "en_US",
        "output": "timestamp",
        "outputType": "msg",
        "outTz": "America/Chicago",
        "x": 540,
        "y": 320,
        "wires": [
            [
                "a03255ae.66a948"
            ]
        ]
    },
    {
        "id": "33658631.e608aa",
        "type": "ui_button",
        "z": "16d0b1f7.5422be",
        "name": "",
        "group": "fbf0d797.e67a78",
        "order": 4,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Update Readers Wirelessly",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-wifi",
        "payload": "currentFirmware",
        "payloadType": "flow",
        "topic": "",
        "x": 200,
        "y": 440,
        "wires": [
            [
                "9c8a89b8.58e198",
                "d395d1f0.e27c2",
                "41f21ebb.07fbd"
            ]
        ]
    },
    {
        "id": "9c8a89b8.58e198",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "sudo /opt/hiveid-ap/dhcpcd_get_leases.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 390,
        "y": 500,
        "wires": [
            [
                "56a59df3.3ee5a4",
                "d395d1f0.e27c2"
            ],
            [],
            []
        ]
    },
    {
        "id": "56a59df3.3ee5a4",
        "type": "csv",
        "z": "16d0b1f7.5422be",
        "name": "",
        "sep": ",",
        "hdrin": "",
        "hdrout": "",
        "multi": "one",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 690,
        "y": 420,
        "wires": [
            [
                "9a8042ce.11b9c",
                "ce7a44f3.fdb208"
            ]
        ]
    },
    {
        "id": "8133a096.b87",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Create OTA Commands",
        "func": "var currentFirmware = flow.get('currentFirmware');\nvar gatewayInfo = global.get('gatewayInfo');\nvar gwIP = gatewayInfo.interfaces[gatewayInfo.gateway.lan.iface];\nvar nodeIP = msg.payload.IP;\nmsg.payload = ' -i ' + nodeIP + ' -I ' + gwIP + ' -p 8266 -a h1v3C0nn3ct -f ' + currentFirmware;\nmsg.notice = \"Updating \" + nodeIP;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 910,
        "y": 500,
        "wires": [
            [
                "a72ea356.dfc17",
                "4bd26c8c.731c44",
                "2045e47f.324a8c"
            ]
        ]
    },
    {
        "id": "5abf151a.f7c80c",
        "type": "http request",
        "z": "16d0b1f7.5422be",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "x": 510,
        "y": 180,
        "wires": [
            [
                "16181bb6.fb2234"
            ]
        ]
    },
    {
        "id": "130cbf91.edc2d",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Set Firmware URL",
        "func": "var config = global.get('TrainTraxx_Config');\nmsg.url = config.TrainTraxx_API + 'autoconnect?current=' + msg.payload + '&apikey=' + config.TrainTraxx_Key ;\nmsg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 140,
        "wires": [
            [
                "5abf151a.f7c80c"
            ]
        ]
    },
    {
        "id": "7d59a86a.56f2c8",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "sudo /opt/hiveid-ap/hiveid_get_binlist.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 560,
        "y": 80,
        "wires": [
            [
                "130cbf91.edc2d"
            ],
            [],
            []
        ]
    },
    {
        "id": "d505e776.cc8988",
        "type": "file",
        "z": "16d0b1f7.5422be",
        "name": "",
        "filename": "",
        "appendNewline": false,
        "createDir": false,
        "overwriteFile": "true",
        "x": 830,
        "y": 200,
        "wires": [
            [
                "243c3d12.726522"
            ]
        ]
    },
    {
        "id": "16181bb6.fb2234",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "",
        "func": "var msg1 = msg;\nvar msg2 = {};\nif (msg.headers !== undefined && msg.headers['content-disposition'] !== undefined) {\n    var tempFile = msg.headers['content-disposition'];\n    tempFile = tempFile.replace(/attachment\\;\\s*filename=/,'').replace(/\\\"/g,'');\n    msg1.filename = '/usr/local/hiveid-ap/ota/' + tempFile;\n    flow.set('currentFirmware', msg1.filename);\n\n    msg2.topic = \"Update Found\";\n    msg2.highlight = \"orange\";\n    msg2.payload = 'Update Downloaded: ' + tempFile;\n    \n} else {\n    if (msg.statusCode >= 500) {\n        msg2.topic=\"Error\";\n        msg2.highlight = \"red\";\n        msg2.payload = \"An error occurred\";\n    } else if (msg.statusCode >= 400) {\n        msg2.topic=\"Error\";\n        msg2.highlight = \"red\";\n        msg2.payload = \"Not Found\";\n    } else if (msg.statusCode >= 300) {\n        msg2.topic=\"Notice\";\n        msg2.highlight = \"yellow\";\n        msg2.payload = \"Resource moved\";\n    } else if (msg.statusCode >= 200) {\n        msg2.topic=\"No Updates\";\n        var currentFirmware = flow.get('currentFirmware');\n        msg2.payload = \"No new firmware received.  Latest firmware is \" + currentFirmware;\n        msg2.highlight=\"orange\";\n    }\n} \n\nreturn [msg1,msg2];",
        "outputs": 2,
        "noerr": 0,
        "x": 530,
        "y": 220,
        "wires": [
            [
                "dae90564.436648"
            ],
            [
                "bf5fd2d3.ecad8"
            ]
        ]
    },
    {
        "id": "4bd26c8c.731c44",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "sudo python /usr/local/hiveid-ap/espota.py ",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 870,
        "y": 560,
        "wires": [
            [
                "c004a83.7c97e58"
            ],
            [],
            [
                "1f6a8f56.0f3ca1",
                "2dc22e8d.c4bbd2"
            ]
        ]
    },
    {
        "id": "c004a83.7c97e58",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1150,
        "y": 560,
        "wires": []
    },
    {
        "id": "23e115c3.0b6e0a",
        "type": "ui_button",
        "z": "16d0b1f7.5422be",
        "name": "",
        "group": "fbf0d797.e67a78",
        "order": 3,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Update Readers Using USB",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "usb",
        "payload": "currentFirmware",
        "payloadType": "flow",
        "topic": "",
        "x": 180,
        "y": 620,
        "wires": [
            [
                "ea289cc4.dfed6",
                "41f21ebb.07fbd",
                "4e95a163.b00df"
            ]
        ]
    },
    {
        "id": "ea289cc4.dfed6",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "sudo /opt/hiveid-ap/hiveid_set_binByUSB.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 865.7499389648438,
        "y": 616.3543090820312,
        "wires": [
            [
                "c004a83.7c97e58"
            ],
            [],
            [
                "1f6a8f56.0f3ca1",
                "2dc22e8d.c4bbd2"
            ]
        ]
    },
    {
        "id": "b072a4f3.c61fa8",
        "type": "inject",
        "z": "16d0b1f7.5422be",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "00 01 * * *",
        "once": false,
        "onceDelay": 0.1,
        "x": 150,
        "y": 80,
        "wires": [
            [
                "7d59a86a.56f2c8"
            ]
        ]
    },
    {
        "id": "4c840e2e.6fb22",
        "type": "ui_toast",
        "z": "16d0b1f7.5422be",
        "position": "dialog",
        "displayTime": "10",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 210,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "8d2eaae4.23cdf8",
        "type": "watch",
        "z": "16d0b1f7.5422be",
        "name": "",
        "files": "/usr/local/hiveid-ap/ota/",
        "recursive": "",
        "x": 160,
        "y": 720,
        "wires": [
            [
                "73f0e379.d7a36c",
                "8450b883.b9f298"
            ]
        ]
    },
    {
        "id": "6f670665.7e0928",
        "type": "ui_button",
        "z": "16d0b1f7.5422be",
        "name": "",
        "group": "fbf0d797.e67a78",
        "order": 1,
        "width": "10",
        "height": "1",
        "passthru": false,
        "label": "Check for Updated Reader Firmware",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 40,
        "wires": [
            [
                "7d59a86a.56f2c8"
            ]
        ]
    },
    {
        "id": "d395d1f0.e27c2",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 510,
        "y": 440,
        "wires": []
    },
    {
        "id": "a72ea356.dfc17",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1130,
        "y": 460,
        "wires": []
    },
    {
        "id": "aac85b05.c667a8",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Get Network Interfaces",
        "func": "var os = global.get('os');\nvar nics = {};\nnics = os.networkInterfaces();\nglobal.set('networkInterfaces',nics);\n\n//var nics = global.get('networkInterfaces');\nmsg.payload =[];\nvar internalIPv4  = '';\nvar tempIP= {};\nfor (var ni in nics ) {\n    if (ni !== 'lo') {\n        for (var i =0; i< nics[ni].length;i++) {\n            if (nics[ni][i].family === \"IPv4\" && nics[ni][i].netmask === \"255.255.255.0\") {\n                tempIP[ni]=nics[ni][i].address;\n                msg.payload.push({\n                    title: '<strong>' + ni + '</strong>&nbsp;'+ nics[ni][i].address \n                });\n            }\n        }\n    }\n}\n\nif (tempIP['wlan1'] !== undefined) {\n    internalIPv4 = tempIP['wlan1'];\n} else if (tempIP['eth0'] !== undefined) {\n    internalIPv4 = tempIP['eth0'];\n} else if  (tempIP['wlan0'] !== undefined) {\n    internalIPv4 = tempIP['wlan0'];\n} else {\n    internalIPv4 = '127.0.0.1';\n}\n\nglobal.set('IP',{'internalIPv4' :  internalIPv4});\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 200,
        "wires": [
            [
                "f564ab88.947548"
            ]
        ]
    },
    {
        "id": "5e56d465.6b35ac",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "",
        "name": "Change Name",
        "x": 1040,
        "y": 140,
        "wires": [
            [
                "e3822aa5.ea2aa8"
            ]
        ]
    },
    {
        "id": "e3822aa5.ea2aa8",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1270,
        "y": 80,
        "wires": [
            [
                "5dec6d17.a36824"
            ],
            [
                "e8ed6bdd.7a0138"
            ]
        ]
    },
    {
        "id": "c3ea8792.391e88",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 730,
        "y": 620,
        "wires": [
            [
                "1ed4aa5a.8af176",
                "320ea1ad.abc7be"
            ],
            [
                "aa3bd5db.6a1368"
            ]
        ]
    },
    {
        "id": "d5da6758.1961a8",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1190,
        "y": 260,
        "wires": [
            [
                "7cb7f74b.562db8"
            ],
            []
        ]
    },
    {
        "id": "f8e90910.c1fb88",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set 404",
        "func": "delete msg.payload;\nmsg.statusCode = 404;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 840,
        "y": 240,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "e5b4b384.ffba8",
        "type": "fs-ops-access",
        "z": "f1ec9b2a.1f7298",
        "name": "Check Directory",
        "path": "/opt/openrsd",
        "pathType": "str",
        "filename": "index.php",
        "filenameType": "str",
        "read": true,
        "write": false,
        "throwerror": false,
        "x": 380,
        "y": 120,
        "wires": [
            [
                "500b5452.219f4c"
            ],
            [
                "f8e90910.c1fb88"
            ]
        ]
    },
    {
        "id": "c9aa36d9.5823f8",
        "type": "cpu",
        "z": "a06855ce.9f5488",
        "name": "",
        "msgCore": true,
        "msgOverall": false,
        "msgArray": false,
        "msgTemp": false,
        "x": 330,
        "y": 860,
        "wires": [
            [
                "fed4cd3c.abeae"
            ]
        ]
    },
    {
        "id": "fed4cd3c.abeae",
        "type": "ui_chart",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "bdaf72c3.2be81",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "Processor Performance",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": "5",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 550,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "42e26548.651efc",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "Timer 1 Second",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 900,
        "wires": [
            [
                "c9aa36d9.5823f8",
                "e4003998.bf2188",
                "a9fea8f7.6b8d68"
            ]
        ]
    },
    {
        "id": "b50ad81b.505278",
        "type": "function",
        "z": "8b10dcf.dc4c82",
        "name": "Set Map",
        "func": "var currentRecords = msg.payload;\nmsg.payload = {\n    'available' : [],\n    'map' : {},\n    'data' : [],\n    'nextID' : 1 \n};\n\nif (currentRecords !== undefined && currentRecords.length > 0) {\n    for (var cID in currentRecords) {\n        var curRecord =  currentRecords[cID];\n        if (msg.topic !== 'trains') {\n            curRecord = currentRecords[cID].data;\n        } \n        if (curRecord.userName === null) {\n            msg.payload.available.push(cID);\n        } else {\n            msg.payload.map[curRecord.userName] = cID;\n        }\n        msg.payload.data[cID] = curRecord;\n        if (curRecord.name !== undefined) {\n            msg.payload.nextID =Number(curRecord.name.replace(/^[^\\d]+/,'')) + 1;\n        } else {\n            delete msg.payload.nextID;\n        }\n    }\n    \n}\n\nmsg.payload.lastLoad = Date.now();\nglobal.set('JMRI.'+msg.topic,msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 605,
        "y": 72.5,
        "wires": [
            []
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "eb4f909e.cddbf",
        "type": "http request",
        "z": "8b10dcf.dc4c82",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 435,
        "y": 72.5,
        "wires": [
            [
                "b50ad81b.505278"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "96e18991.b2fa88",
        "type": "function",
        "z": "8b10dcf.dc4c82",
        "name": "Set the URL",
        "func": "var table = msg.payload;\nvar JMRI_URL = global.get('JMRI_URL');\nmsg.url = JMRI_URL + 'json/' + table;\nmsg.topic=table;\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 235,
        "y": 72.5,
        "wires": [
            [
                "eb4f909e.cddbf"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "302dd467.6f1a0c",
        "type": "OS",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 310,
        "y": 1000,
        "wires": [
            [
                "9ba3f6e7.d8b438"
            ]
        ]
    },
    {
        "id": "e259d39a.d7e68",
        "type": "Drives",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 310,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "a9fea8f7.6b8d68",
        "type": "Uptime",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 320,
        "y": 940,
        "wires": [
            [
                "8a7998a8.747678"
            ]
        ]
    },
    {
        "id": "e4003998.bf2188",
        "type": "Memory",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 320,
        "y": 900,
        "wires": [
            [
                "2e18a81a.662928"
            ]
        ]
    },
    {
        "id": "2a113082.e508b",
        "type": "ui_text",
        "z": "a06855ce.9f5488",
        "group": "17f52c5b.cfb014",
        "order": 6,
        "width": "6",
        "height": "2",
        "name": "",
        "label": "OS Version",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 710,
        "y": 1000,
        "wires": []
    },
    {
        "id": "e23efcbd.33283",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 110,
        "y": 1000,
        "wires": [
            [
                "302dd467.6f1a0c",
                "e259d39a.d7e68"
            ]
        ]
    },
    {
        "id": "80f9695e.4555f8",
        "type": "ui_gauge",
        "z": "a06855ce.9f5488",
        "name": "Memory Guage",
        "group": "bdaf72c3.2be81",
        "order": 3,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "",
        "label": "Available Memory",
        "format": "{{value}}%",
        "min": 0,
        "max": "100",
        "colors": [
            "#ff2600",
            "#e6e600",
            "#008f00"
        ],
        "seg1": "",
        "seg2": "",
        "x": 720,
        "y": 900,
        "wires": []
    },
    {
        "id": "8a7998a8.747678",
        "type": "ui_text",
        "z": "a06855ce.9f5488",
        "group": "bdaf72c3.2be81",
        "order": 1,
        "width": "6",
        "height": "1",
        "name": "",
        "label": "Uptime",
        "format": "{{msg.payload.uptime}} seconds",
        "layout": "row-spread",
        "x": 500,
        "y": 940,
        "wires": []
    },
    {
        "id": "9ba3f6e7.d8b438",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Set OS Version",
        "func": "msg.payload = msg.payload.type + '-' + msg.payload.arch + '-' + msg.payload.release;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 1000,
        "wires": [
            [
                "2a113082.e508b"
            ]
        ]
    },
    {
        "id": "2e18a81a.662928",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Set Memory",
        "func": "msg1={};\nmsg2={};\n\nmsg1.payload ={   \n    totalmem: parseFloat(Number(msg.payload.totalmem)/1024).toFixed(2),\n    freemem: parseFloat(Number(msg.payload.freemem)/1024).toFixed(2)\n};\n\nmsg2.payload = parseFloat(100-Number(msg.payload.memusage)).toFixed(2);\n\nreturn [msg1,msg2];\n",
        "outputs": 2,
        "noerr": 0,
        "x": 510,
        "y": 900,
        "wires": [
            [],
            [
                "80f9695e.4555f8"
            ]
        ]
    },
    {
        "id": "958d130f.9dbf1",
        "type": "function",
        "z": "a40e76b8.4d8a48",
        "name": "Set Data",
        "func": "var curTable = flow.get('curTable');\n\nif (curTable === 'tags_activity') {\n    var tempData = global.get('TrainTraxx.' + curTable);\n    /* Merge the Data */\n    if (tempData !== undefined && tempData.data !== undefined) {\n        for (var dID in tempData.data) {\n            msg.payload['data'][dID] = tempData.data[dID];\n        }\n    }\n}\n\nmsg.payload.lastLoad = Date.now();\n\nvar tempMap = {};\nfor (var i in msg.payload.columns) {\n    tempMap[msg.payload.columns[i]] = i;\n}\nmsg.payload['columnLookup'] = tempMap;\nvar tempMap = {};\nif (msg.payload.meta !== undefined) {\n    for (var i in msg.payload.meta.columns) {\n        tempMap[msg.payload.meta.columns[i]] = i;\n    }\n    msg.payload.meta['columnLookup'] = tempMap;\n}\nvar tempMap = {};\nif (msg.payload.keys !== undefined) {\n    for (var i in msg.payload.keys.columns) {\n        tempMap[msg.payload.keys.columns[i]] = i;\n    }\n    msg.payload.keys['columnLookup'] = tempMap;\n}\n\nglobal.set('TrainTraxx.' + curTable,msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 880,
        "y": 120,
        "wires": [
            []
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "2eadc8b.6e43638",
        "type": "http request",
        "z": "a40e76b8.4d8a48",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 530,
        "y": 140,
        "wires": [
            [
                "f1c39296.374d1"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "91353714.a754e8",
        "type": "function",
        "z": "a40e76b8.4d8a48",
        "name": "Set the URL",
        "func": "var table = msg.payload;\nmsg.topic = table;\nvar config = global.get('TrainTraxx_Config');\nvar urlAppend = '';\nif (table === 'tags_activity') {\n    var TT = global.get('TrainTraxx');\n    if (TT === undefined) {\n        TT = {};\n        TT[table] = {};\n    }\n    if (TT[table] !== undefined && TT[table].newestRecord !== undefined) {\n        urlAppend = '&newestRecord=' + TT[table].newestRecord;\n    }\n}\nmsg.url = config.TrainTraxx_API + table + '?WINDOW=all&apikey=' + config.TrainTraxx_Key + urlAppend; \nflow.set('curTable',table);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 140,
        "wires": [
            [
                "2eadc8b.6e43638"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "8dc0fe46.c010d",
        "type": "http response",
        "z": "5e61e22e.7a581c",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1070,
        "y": 400,
        "wires": []
    },
    {
        "id": "27387db.42dca82",
        "type": "debug",
        "z": "5e61e22e.7a581c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1100,
        "y": 460,
        "wires": []
    },
    {
        "id": "8f95f0f.8bc931",
        "type": "ui_button",
        "z": "5e61e22e.7a581c",
        "name": "Refresh All",
        "group": "a9319cec.7d9c",
        "order": 7,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Refresh All",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 390,
        "y": 100,
        "wires": [
            [
                "eb7a7fef.95ee4",
                "ef86f5e4.672e98"
            ]
        ]
    },
    {
        "id": "ea6d1bc1.e51f88",
        "type": "mosca in",
        "z": "5e61e22e.7a581c",
        "mqtt_port": 1883,
        "mqtt_ws_port": 8080,
        "name": "",
        "username": "",
        "password": "",
        "dburl": "",
        "x": 550,
        "y": 220,
        "wires": [
            [
                "8dc0fe46.c010d",
                "e7682bc7.41dee8",
                "9860fd21.83ed9"
            ]
        ]
    },
    {
        "id": "f6d7de28.90ff4",
        "type": "link in",
        "z": "5e61e22e.7a581c",
        "name": "Configuration Change oLink",
        "links": [],
        "x": 231.111083984375,
        "y": 101.111083984375,
        "wires": [
            [
                "8f95f0f.8bc931"
            ]
        ]
    },
    {
        "id": "eb7a7fef.95ee4",
        "type": "link out",
        "z": "5e61e22e.7a581c",
        "name": "TrainTraxx Data oLink",
        "links": [
            "b1607e3f.fb142",
            "92bfa11.5cbe86"
        ],
        "x": 595,
        "y": 80,
        "wires": []
    },
    {
        "id": "ef86f5e4.672e98",
        "type": "link out",
        "z": "5e61e22e.7a581c",
        "name": "JMRI Data oLink",
        "links": [
            "a309b660.225d08"
        ],
        "x": 595,
        "y": 120,
        "wires": []
    },
    {
        "id": "e7682bc7.41dee8",
        "type": "link out",
        "z": "5e61e22e.7a581c",
        "name": "JMRI Data oLink Activity Only",
        "links": [
            "20a5c666.fa9baa"
        ],
        "x": 775,
        "y": 220,
        "wires": []
    },
    {
        "id": "9860fd21.83ed9",
        "type": "link out",
        "z": "5e61e22e.7a581c",
        "name": "TrainTraxx Activity oLink",
        "links": [
            "bb39a9a4.ceacc8"
        ],
        "x": 773.972412109375,
        "y": 297.2776794433594,
        "wires": []
    },
    {
        "id": "ef8fd901.8301a8",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "setLocalActivityData",
        "func": "var curActivity = global.get('Activity');\nvar TrainTraxx_Config = global.get('TrainTraxx_Config');\nif (curActivity === undefined) {\n    curActivity = [];\n}\nif (TrainTraxx_Config.ACTIVITY_SIZE === undefined) {\n    TrainTraxx_Config.ACTIVITY_SIZE = 10;\n}\n\ncurActivity.unshift(msg.payload.DATA);\n\nwhile (curActivity.length > Number(TrainTraxx_Config.ACTIVITY_SIZE)) {\n    curActivity.pop();\n}\n\nglobal.set('Activity',curActivity);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 300,
        "wires": [
            [
                "6902f9b7.cd47e8",
                "ad4add7.ad9572"
            ]
        ]
    },
    {
        "id": "6902f9b7.cd47e8",
        "type": "debug",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 670,
        "y": 300,
        "wires": []
    },
    {
        "id": "deb73202.c811c",
        "type": "inject",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 210,
        "y": 380,
        "wires": [
            [
                "ad4add7.ad9572",
                "5a4e3756.aa1e78"
            ]
        ]
    },
    {
        "id": "bb39a9a4.ceacc8",
        "type": "link in",
        "z": "7bef0b7b.d5a104",
        "name": "TrainTraxx Activity iLink",
        "links": [
            "9860fd21.83ed9"
        ],
        "x": 255,
        "y": 300,
        "wires": [
            [
                "ef8fd901.8301a8"
            ]
        ]
    },
    {
        "id": "fc758d5.841bd7",
        "type": "ui_template",
        "z": "7bef0b7b.d5a104",
        "group": "3220fafa.330906",
        "name": "TrainTraxx Activity",
        "order": 1,
        "width": "14",
        "height": "15",
        "format": "",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 1010,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "248da61.73dc05a",
        "type": "ui_button",
        "z": "1a726252.d178be",
        "name": "Refresh TrainTraxx",
        "group": "a9319cec.7d9c",
        "order": 5,
        "width": "5",
        "height": "1",
        "passthru": true,
        "label": "Refresh TrainTraxx",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 310,
        "y": 480,
        "wires": [
            [
                "251b3c83.10ad94"
            ]
        ]
    },
    {
        "id": "acfec978.dad798",
        "type": "debug",
        "z": "1a726252.d178be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1190,
        "y": 400,
        "wires": []
    },
    {
        "id": "b1607e3f.fb142",
        "type": "link in",
        "z": "1a726252.d178be",
        "name": "TrainTraxx Data iLink",
        "links": [
            "eb7a7fef.95ee4",
            "e37006db.0ea648",
            "b6ed7646.ea36a8"
        ],
        "x": 235,
        "y": 440,
        "wires": [
            [
                "248da61.73dc05a"
            ]
        ]
    },
    {
        "id": "d3aedf1f.c858c",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "env": [],
        "x": 660,
        "y": 1020,
        "wires": [
            [
                "d82540e3.3f571",
                "8384e2e4.e9412"
            ]
        ]
    },
    {
        "id": "3c4a9a1c.addf66",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Enabled",
        "property": "JMRI_Config.JMRI_ENABLED",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 160,
        "y": 920,
        "wires": [
            [
                "d6522db.4d47bd"
            ]
        ]
    },
    {
        "id": "b0a1d979.9f8538",
        "type": "ui_button",
        "z": "164213bd.e3dd4c",
        "name": "Refresh JMRI",
        "group": "a9319cec.7d9c",
        "order": 3,
        "width": "5",
        "height": "1",
        "passthru": true,
        "label": "Refresh JMRI",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 200,
        "y": 780,
        "wires": [
            [
                "cb778529.c41cc8"
            ]
        ]
    },
    {
        "id": "a309b660.225d08",
        "type": "link in",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Data iLink",
        "links": [
            "391c0a36.ebdac6",
            "ef86f5e4.672e98",
            "d9967b03.2bc018"
        ],
        "x": 195,
        "y": 680,
        "wires": [
            [
                "b0a1d979.9f8538"
            ]
        ]
    },
    {
        "id": "20a5c666.fa9baa",
        "type": "link in",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Data iLink Activity Only",
        "links": [
            "e7682bc7.41dee8"
        ],
        "x": 195,
        "y": 300,
        "wires": [
            [
                "39caeee1.346892"
            ]
        ]
    },
    {
        "id": "c1968950.ab2378",
        "type": "ui_text_input",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx API Endpoint",
        "label": "TrainTraxx API Endpoint",
        "tooltip": "",
        "group": "c39736a3.dcaf08",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 770,
        "y": 280,
        "wires": [
            [
                "6c7bd810.48e988"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "6c7bd810.48e988",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config.TrainTraxx_API",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.TrainTraxx_API",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1070,
        "y": 280,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "67bb3f95.44b5",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Config.TrainTraxx_API",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config.TrainTraxx_API",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 280,
        "wires": [
            [
                "c1968950.ab2378"
            ]
        ]
    },
    {
        "id": "d92d97a6.01bde8",
        "type": "file in",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.traintraxx.json",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 328.99993896484375,
        "y": 164.11111450195312,
        "wires": [
            [
                "1af91b49.c4dee5"
            ]
        ]
    },
    {
        "id": "1af91b49.c4dee5",
        "type": "json",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 549.9999389648438,
        "y": 164.11111450195312,
        "wires": [
            [
                "2fe397d9.3f1218"
            ]
        ]
    },
    {
        "id": "2fe397d9.3f1218",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 738.9999389648438,
        "y": 164.11111450195312,
        "wires": [
            [
                "67bb3f95.44b5",
                "29b4d282.40a57e",
                "639c3c57.932cb4",
                "e054e355.832a2",
                "68c8ebf9.5924f4",
                "58aab300.01211c",
                "c1054d1e.8d906"
            ]
        ]
    },
    {
        "id": "ed5837b0.97eb08",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1420,
        "y": 340,
        "wires": [
            [
                "4aa8df10.db935"
            ]
        ]
    },
    {
        "id": "4aa8df10.db935",
        "type": "json",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": true,
        "x": 1390,
        "y": 380,
        "wires": [
            [
                "bce53b01.90a798"
            ]
        ]
    },
    {
        "id": "bce53b01.90a798",
        "type": "file",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.traintraxx.json",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "x": 1500,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "483610b8.d67bf",
        "type": "inject",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 136.99993896484375,
        "y": 96.11111450195312,
        "wires": [
            [
                "d92d97a6.01bde8"
            ]
        ]
    },
    {
        "id": "f7f13c06.4cea4",
        "type": "watch",
        "z": "fd2ebb8a.240a38",
        "name": "",
        "files": "/etc/hiveid-ap/conf.traintraxx.json",
        "recursive": "",
        "x": 148.49993896484375,
        "y": 224.11111450195312,
        "wires": [
            [
                "d92d97a6.01bde8"
            ]
        ]
    },
    {
        "id": "af7f7821.c09708",
        "type": "ui_text_input",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx Web Address",
        "label": "TrainTraxx Web Address",
        "tooltip": "",
        "group": "c39736a3.dcaf08",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 770,
        "y": 320,
        "wires": [
            [
                "c67eb33e.1b383"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "c67eb33e.1b383",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config.TrainTraxx_Web",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.TrainTraxx_Web",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1070,
        "y": 320,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "29b4d282.40a57e",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Config.TrainTraxx_Web",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config.TrainTraxx_Web",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 320,
        "wires": [
            [
                "af7f7821.c09708"
            ]
        ]
    },
    {
        "id": "bec6eea2.5b2af",
        "type": "ui_text_input",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx API Key",
        "label": "TrainTraxx API Key",
        "tooltip": "",
        "group": "c39736a3.dcaf08",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 750,
        "y": 360,
        "wires": [
            [
                "f62192c2.b1a95"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "f62192c2.b1a95",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config.TrainTraxx_Key",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.TrainTraxx_Key",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1070,
        "y": 360,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "639c3c57.932cb4",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Config.TrainTraxx_Key",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config.TrainTraxx_Key",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 499,
        "y": 361,
        "wires": [
            [
                "bec6eea2.5b2af"
            ]
        ]
    },
    {
        "id": "b6ed7646.ea36a8",
        "type": "link out",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx Configuration Change Data iLink",
        "links": [
            "b1607e3f.fb142"
        ],
        "x": 1415,
        "y": 120,
        "wires": []
    },
    {
        "id": "16b16365.cdab7d",
        "type": "ui_text_input",
        "z": "ed0209cc.523aa8",
        "name": "JMRI API Endpoint",
        "label": "JMRI API Endpoint",
        "tooltip": "",
        "group": "f907e9dd.26a218",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 789,
        "y": 218.88888549804688,
        "wires": [
            [
                "ad528bcc.a124c8"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "ad528bcc.a124c8",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "Set JMRI_Config.JMRI_API",
        "rules": [
            {
                "t": "set",
                "p": "JMRI_Config.JMRI_API",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1057.9999389648438,
        "y": 218.88888549804688,
        "wires": [
            [
                "a4af5b1c.7c9078"
            ]
        ]
    },
    {
        "id": "16ca6d5b.3ce5e3",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "JMRI_Config.JMRI_API",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "JMRI_Config.JMRI_API",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 508,
        "y": 219.88888549804688,
        "wires": [
            [
                "16b16365.cdab7d"
            ]
        ]
    },
    {
        "id": "fe07428b.41ec6",
        "type": "file in",
        "z": "ed0209cc.523aa8",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.jmri.json",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 400,
        "y": 160,
        "wires": [
            [
                "f2093035.96ce4"
            ]
        ]
    },
    {
        "id": "f2093035.96ce4",
        "type": "json",
        "z": "ed0209cc.523aa8",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 610,
        "y": 160,
        "wires": [
            [
                "d8b6e1a9.98737"
            ]
        ]
    },
    {
        "id": "d8b6e1a9.98737",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "Set JMRI_Config",
        "rules": [
            {
                "t": "set",
                "p": "JMRI_Config",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 790,
        "y": 160,
        "wires": [
            [
                "16ca6d5b.3ce5e3",
                "463da7b7.9c90a8",
                "f2f09380.a63d5",
                "1f35f075.13291",
                "995235ce.0f93e8"
            ]
        ]
    },
    {
        "id": "a4af5b1c.7c9078",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "Set JMRI_Config",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "JMRI_Config",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1354.9999389648438,
        "y": 270,
        "wires": [
            [
                "f0028118.46089"
            ]
        ]
    },
    {
        "id": "f0028118.46089",
        "type": "json",
        "z": "ed0209cc.523aa8",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": true,
        "x": 1551,
        "y": 270,
        "wires": [
            [
                "9f616197.f9c29"
            ]
        ]
    },
    {
        "id": "9f616197.f9c29",
        "type": "file",
        "z": "ed0209cc.523aa8",
        "name": "",
        "filename": "/etc/hiveid-ap/conf.jmri.json",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "x": 1750.9999389648438,
        "y": 269,
        "wires": [
            []
        ]
    },
    {
        "id": "f1b7293d.b84518",
        "type": "inject",
        "z": "ed0209cc.523aa8",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 160,
        "wires": [
            [
                "fe07428b.41ec6"
            ]
        ]
    },
    {
        "id": "41410a5f.edaa34",
        "type": "watch",
        "z": "ed0209cc.523aa8",
        "name": "",
        "files": "/etc/hiveid-ap/conf.jmri.json",
        "recursive": "",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "fe07428b.41ec6"
            ]
        ]
    },
    {
        "id": "6f9753bf.52ba0c",
        "type": "ui_text_input",
        "z": "ed0209cc.523aa8",
        "name": "JMRI Web Address",
        "label": "TrainTraxx Web Address",
        "tooltip": "",
        "group": "f907e9dd.26a218",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 785.9999389648438,
        "y": 269,
        "wires": [
            [
                "f2dbddb8.284a7"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "f2dbddb8.284a7",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "Set JMRI_Config.JMRI_Web",
        "rules": [
            {
                "t": "set",
                "p": "JMRI_Config.JMRI_Web",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1054.9998779296875,
        "y": 269,
        "wires": [
            [
                "a4af5b1c.7c9078"
            ]
        ]
    },
    {
        "id": "463da7b7.9c90a8",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "JMRI_Config.JMRI_Web",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "JMRI_Config.JMRI_Web",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 504.99993896484375,
        "y": 270,
        "wires": [
            [
                "6f9753bf.52ba0c"
            ]
        ]
    },
    {
        "id": "7481bb81.5ab614",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "Set JMRI_Config.JMRI_ENABLED",
        "rules": [
            {
                "t": "set",
                "p": "JMRI_Config.JMRI_ENABLED",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1072.9998779296875,
        "y": 318,
        "wires": [
            [
                "a4af5b1c.7c9078"
            ]
        ]
    },
    {
        "id": "f2f09380.a63d5",
        "type": "change",
        "z": "ed0209cc.523aa8",
        "name": "JMRI_Config.JMRI_ENABLED",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "JMRI_Config.JMRI_ENABLED",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 522.9999389648438,
        "y": 319,
        "wires": [
            [
                "3b3f757b.60fd7a"
            ]
        ]
    },
    {
        "id": "3b3f757b.60fd7a",
        "type": "ui_switch",
        "z": "ed0209cc.523aa8",
        "name": "",
        "label": "Enable JMRI",
        "tooltip": "",
        "group": "f907e9dd.26a218",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "decouple": "true",
        "topic": "jmri_switch",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 768,
        "y": 318,
        "wires": [
            [
                "7481bb81.5ab614"
            ]
        ],
        "outputLabels": [
            "flow.payload"
        ]
    },
    {
        "id": "49a65c2c.fd7964",
        "type": "inject",
        "z": "c3e3e66a.322358",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 210,
        "y": 120,
        "wires": [
            [
                "d8e243ba.8292b"
            ]
        ]
    },
    {
        "id": "5e90f355.24e56c",
        "type": "function",
        "z": "c3e3e66a.322358",
        "name": "Make Summary",
        "func": "var JMRI_Config = global.get('JMRI_Config');\n\nvar temp = [];\n\nvar Stores = {\n    \"TrainTraxx\": {\n        \"label\": \"TrainTraxx\",\n        \"enabled\": true,\n        \"elements\": {\n            \"hivegateway\": \"Gateways\",\n            \"hivenode\": \"Readers\",\n            \"tags\": \"Tags\",\n            \"tags_activity\" : \"Activity\",\n            \"inventory\": \"Inventory\",\n            \"locations\": \"Locations\"\n        }\n    },\n    \"JMRI\": {\n        \"label\": \"JMRI\",\n        \"enabled\": JMRI_Config.JMRI_ENABLED,\n        \"elements\": {\n            \"sensors\": \"Sensors\",\n            \"reporters\": \"Reporters\",\n            \"cars\": \"Cars\",\n            \"engines\": \"Engines\",\n            \"locations\": \"Locations\",\n            \"idTag\" : \"Tags\"\n        }\n    }\n};\n\nfor (var store in Stores) {\n    \n    var TStore = global.get(store); \n    temp.push(\"<td colspan=\\\"2\\\" style=\\\"background-color:#f90;color:#fff;\\\"><h3>\" + Stores[store].label + \"</h3></td>\");\n    \n    if (TStore !== undefined && Stores[store].enabled === true) {\n        for (var element in Stores[store].elements) {\n            if (TStore[element] !== undefined && TStore[element].data !== undefined) {\n                var tempLength = 0;\n                if (Array.isArray(TStore[element].data)) {\n                    tempLength = TStore[element].data.length;\n                } else if (typeof TStore[element].data === 'object') {\n                    tempLength = Object.keys(TStore[element].data).length;\n                }\n                temp.push('<td style=\"font-weight:bold;\">' + Stores[store].elements[element] + '</td><td>'+ tempLength + '</td>');\n            } else {\n                temp.push('<td colspan=\"2\">No ' + Stores[store].elements[element] + ' Loaded</td>');        \n            }\n        } \n    } else {\n        temp.push('<td colspan=\"2\">Not Loaded</td>');\n    }\n}\n\nmsg.template = '<table width=\"100%\"><tr>' + temp.join('</tr><tr>') + '</tr></table>' + \n    '<br/><strong>NOTES:</strong>'+\n    '<small><ul><li>JMRI summary will only show the parent location counts</li>' +\n    '<li>TrainTraxx inventory will report under JMRI cars and engines</li>' +\n    '<li>TrainTraxx locations with readers will report under reporters and sensors both.</li>' +\n    '<li>JMRI has an extra sensor</li></ul></small>';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 160,
        "wires": [
            [
                "b6b1b343.577db",
                "df26e46e.307998"
            ]
        ]
    },
    {
        "id": "b6b1b343.577db",
        "type": "debug",
        "z": "c3e3e66a.322358",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 650,
        "y": 200,
        "wires": []
    },
    {
        "id": "df26e46e.307998",
        "type": "ui_template",
        "z": "c3e3e66a.322358",
        "group": "4411c851.baef98",
        "name": "Summary",
        "order": 1,
        "width": "6",
        "height": "12",
        "format": "",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 660,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "6c40f02a.6f059",
        "type": "change",
        "z": "c3e3e66a.322358",
        "name": "Set config.RefreshSummaryEnabled",
        "rules": [
            {
                "t": "set",
                "p": "config.RefreshSummaryEnabled",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "698f0b12.de04a4",
        "type": "ui_switch",
        "z": "c3e3e66a.322358",
        "name": "",
        "label": "Refresh Summary",
        "tooltip": "",
        "group": "4411c851.baef98",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 430,
        "y": 60,
        "wires": [
            [
                "6c40f02a.6f059"
            ]
        ]
    },
    {
        "id": "d8e243ba.8292b",
        "type": "switch",
        "z": "c3e3e66a.322358",
        "name": "",
        "property": "config.RefreshSummaryEnabled",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 250,
        "y": 160,
        "wires": [
            [
                "5e90f355.24e56c"
            ]
        ]
    },
    {
        "id": "aa7fab4d.d03c88",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "41757e63.7ce36",
        "name": "",
        "env": [],
        "x": 497,
        "y": 107,
        "wires": [
            [
                "e50da4ff.21a8f8",
                "7dd91a5.3aaece4"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "30f119af.41a7b6",
        "type": "http in",
        "z": "41757e63.7ce36",
        "name": "JMRI Endpoint",
        "url": "/jmri/v2/:table",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 137,
        "y": 107,
        "wires": [
            [
                "15da7c8.1a6a384"
            ]
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "e50da4ff.21a8f8",
        "type": "http response",
        "z": "41757e63.7ce36",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 690,
        "y": 120,
        "wires": []
    },
    {
        "id": "7dd91a5.3aaece4",
        "type": "debug",
        "z": "41757e63.7ce36",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 690,
        "y": 80,
        "wires": []
    },
    {
        "id": "15da7c8.1a6a384",
        "type": "change",
        "z": "41757e63.7ce36",
        "name": "Set Table",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "req.params.table",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 317,
        "y": 107,
        "wires": [
            [
                "aa7fab4d.d03c88"
            ]
        ]
    },
    {
        "id": "f51f6fd0.01c5d",
        "type": "ui_button",
        "z": "3d602d50.39dab2",
        "name": "TrainTraxx to JMRI",
        "group": "a9319cec.7d9c",
        "order": 9,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "TrainTraxx to JMRI",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "cloud_download",
        "payload": "Clicked",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "509dfa72.51cfc4"
            ]
        ]
    },
    {
        "id": "49f70c72.4b3914",
        "type": "ui_dropdown",
        "z": "9745920.d8a397",
        "name": "Operating Mode",
        "label": "",
        "tooltip": "",
        "place": "Select option",
        "group": "7491149.92351ec",
        "order": 1,
        "width": "6",
        "height": "1",
        "passthru": true,
        "options": [],
        "payload": "",
        "topic": "",
        "x": 200,
        "y": 600,
        "wires": [
            [
                "6e336cdf.141514"
            ]
        ]
    },
    {
        "id": "18316d6a.0b7ff3",
        "type": "wifiscan",
        "z": "9745920.d8a397",
        "name": "",
        "x": 910,
        "y": 640,
        "wires": [
            [
                "6ace129c.3ff03c"
            ]
        ]
    },
    {
        "id": "57136e46.8c841",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "Client Passphrase",
        "label": "Client Passphrase",
        "tooltip": "",
        "group": "8b01491a.1965e8",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "password",
        "delay": "0",
        "topic": "",
        "x": 890,
        "y": 680,
        "wires": [
            [
                "d35706d5.e8d078"
            ]
        ]
    },
    {
        "id": "dcb6ca7.bb4b738",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "",
        "group": "7491149.92351ec",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": true,
        "label": "Commit Changes",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-save",
        "payload": "Are you sure you want to make changes?",
        "payloadType": "str",
        "topic": "",
        "x": 170,
        "y": 1000,
        "wires": [
            [
                "11542bbf.5c74c4"
            ]
        ]
    },
    {
        "id": "11542bbf.5c74c4",
        "type": "ui_toast",
        "z": "9745920.d8a397",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "",
        "name": "",
        "x": 330,
        "y": 1060,
        "wires": [
            [
                "f31c81bb.20231"
            ]
        ]
    },
    {
        "id": "6ace129c.3ff03c",
        "type": "function-npm",
        "z": "9745920.d8a397",
        "name": "Structure Wifi List",
        "func": "var _ = require('lodash');\nmsg.options = [];\n\nvar icons = {\n    'off' : 'signal_wifi_off',\n    'secure' : [\n        'wifi_lock_1',\n        'wifi_lock_2',\n        'wifi_lock_3',\n        'wifi_lock_4',\n        'wifi_lock'\n    ],\n    'unsecure' : [\n        'signal_wifi_0_bar',\n        'signal_wifi_1_bar',\n        'signal_wifi_2_bar',\n        'signal_wifi_3_bar',\n        'signal_wifi_4_bar'\n    ]\n};\n\nvar inPayload =_.sortBy(msg.payload,['signal_level','ssid']);\nmsg.payload = [];\nvar gatewayInfo = global.get('gatewayInfo');\n\nfor (var id in inPayload) {\n    var secKey = (inPayload[id].security === undefined) ?  'unsecure' : 'secure';\n        \n    var strength =0;\n    switch (true) {\n        case (Number(inPayload[id].signal_level) >= -30):\n            strength = 4;\n            break;\n        case (Number(inPayload[id].signal_level) >= -67):\n            strength = 3;\n            break;\n        case (Number(inPayload[id].signal_level) >= -70):\n            strength = 2;\n            break;\n        case (Number(inPayload[id].signal_level) >= -80):\n            strength = 1;\n            break;\n        default:\n            strength = 0;\n    }\n    var isChecked = false;\n    if (gatewayInfo.activeSSID !== undefined) {\n       isChecked=(gatewayInfo.activeSSID === inPayload[id].ssid);\n    }\n    msg.payload.unshift({   \n        icon_name : icons[secKey][strength],\n        title: inPayload[id].ssid,\n        isChecked : isChecked\n    }); \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 600,
        "wires": [
            [
                "b660e9ec.f878a8"
            ]
        ]
    },
    {
        "id": "d7851c8c.0a68a",
        "type": "ui_list",
        "z": "9745920.d8a397",
        "group": "b0d41c89.dd503",
        "name": "Available Networks",
        "order": 1,
        "width": "8",
        "height": "4",
        "lineType": "one",
        "actionType": "click",
        "allowHTML": true,
        "x": 1290,
        "y": 640,
        "wires": [
            [
                "15371b85.ea9044"
            ]
        ]
    },
    {
        "id": "6ea9c20a.3165fc",
        "type": "ui_ui_control",
        "z": "9745920.d8a397",
        "name": "",
        "x": 860,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "f31c81bb.20231",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 1060,
        "wires": [
            [
                "5c2a8500.41db6c",
                "978f2906.85f628"
            ],
            [
                "1cc06905.03dfb7"
            ]
        ]
    },
    {
        "id": "9360a00d.3a1cf",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Setup Command",
        "func": "//  sudo ./hiveid_setup_wifi2wifi.sh\nmsg.payload =   \" -s=\\\"\" + flow.get('AP.SSID') + \"\\\"\" +\n                \" -i=\" + flow.get('AP.NETWORK') +\n                //\" -gip=\" + flow.get('AP.IP') + \n                //\" -gif=\" + flow.get('AP.IFACE') +\n                \" -p=\\\"\" + flow.get('AP.PASSPHRASE') + \"\\\"\" +\n                //\" -ips=\" + flow.get('AP.IP_START') +\n                //\" -ipe=\" + flow.get('AP.IP_END') +\n                \" -gwc=\" + flow.get('AP.CHANNEL') +\n                \" -k=\" + flow.get('AP.KEY_MGMT') +\n                \" -wpa=FALSE\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 1060,
        "wires": [
            [
                "3818ea0.1ba0216"
            ]
        ]
    },
    {
        "id": "1db28431.6f27ec",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Restart Wireless Gateway Service",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "autorenew",
        "payload": "Restarting Gateway Services",
        "payloadType": "str",
        "topic": "",
        "x": 180,
        "y": 1120,
        "wires": [
            [
                "a5662777.20df48",
                "abba8031.890a8"
            ]
        ]
    },
    {
        "id": "a5662777.20df48",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo /etc/network/if-up.d/zzz_hostapd",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 530,
        "y": 1120,
        "wires": [
            [],
            [],
            [
                "7168080e.a7dc48"
            ]
        ]
    },
    {
        "id": "7168080e.a7dc48",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 850,
        "y": 1120,
        "wires": [
            [
                "6d76fe5b.cb776"
            ],
            [
                "f70bb172.44f6b"
            ]
        ]
    },
    {
        "id": "f310e9f5.ec92e8",
        "type": "exec",
        "z": "9745920.d8a397",
        "command": "sudo /opt/hiveid-ap/hiveid_setup_wifi2eth.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1330,
        "y": 1000,
        "wires": [
            [],
            [],
            [
                "36367d64.09fafa"
            ]
        ]
    },
    {
        "id": "5c2a8500.41db6c",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "Switch Operating Mode",
        "property": "mode",
        "propertyType": "flow",
        "rules": [
            {
                "t": "eq",
                "v": "wifi2eth",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "wifi2wifi",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 3,
        "x": 710,
        "y": 1060,
        "wires": [
            [
                "8991baef.ba75c"
            ],
            [
                "9360a00d.3a1cf"
            ],
            [
                "fd94265b.c31f88"
            ]
        ]
    },
    {
        "id": "49f928a1.ffb798",
        "type": "link in",
        "z": "a06855ce.9f5488",
        "name": "Restart Gateway iLink",
        "links": [
            "acd4a1d3.1b2d1"
        ],
        "x": 295,
        "y": 1160,
        "wires": [
            [
                "a5662777.20df48",
                "abba8031.890a8"
            ]
        ]
    },
    {
        "id": "acd4a1d3.1b2d1",
        "type": "link out",
        "z": "9745920.d8a397",
        "name": "Restart Gateway oLink",
        "links": [
            "49f928a1.ffb798"
        ],
        "x": 1755,
        "y": 1000,
        "wires": []
    },
    {
        "id": "a98e6a09.ccb3c8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Update Channel",
        "rules": [
            {
                "t": "set",
                "p": "AP.CHANNEL",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1340,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "4e77f5a5.79a54c",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Update SSID",
        "rules": [
            {
                "t": "set",
                "p": "AP.SSID",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1330,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "18cdedff.4f3582",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Update Passphrase",
        "rules": [
            {
                "t": "set",
                "p": "AP.PASSPHRASE",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1350,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "3818ea0.1ba0216",
        "type": "exec",
        "z": "9745920.d8a397",
        "command": "sudo /opt/hiveid-ap/hiveid_setup_wifi2wifi.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1330,
        "y": 1060,
        "wires": [
            [],
            [],
            [
                "36367d64.09fafa"
            ]
        ]
    },
    {
        "id": "9561984e.66c808",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "Set Hostname to Flow",
        "rules": [
            {
                "t": "set",
                "p": "hostname",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1060,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "5dec6d17.a36824",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "Move the Flow.hostname to payload",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "hostname",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1530,
        "y": 80,
        "wires": [
            [
                "60e46d31.c31c34"
            ]
        ]
    },
    {
        "id": "6a08424c.7b4b1c",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "bdaf72c3.2be81",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Clean Memory",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 100,
        "y": 1660,
        "wires": [
            [
                "e1986986.8508b8"
            ]
        ]
    },
    {
        "id": "e1986986.8508b8",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo /opt/hiveid-ap/free_memory.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 470,
        "y": 1660,
        "wires": [
            [],
            [],
            [
                "6528c9e.07b4038"
            ]
        ]
    },
    {
        "id": "22ec837b.f2089c",
        "type": "ui_form",
        "z": "a06855ce.9f5488",
        "name": "",
        "label": "Change Password",
        "group": "17f52c5b.cfb014",
        "order": 8,
        "width": "6",
        "height": "3",
        "options": [
            {
                "label": "Password",
                "value": "PASS1",
                "type": "password",
                "required": true
            },
            {
                "label": "Confirm",
                "value": "PASS2",
                "type": "password",
                "required": true
            }
        ],
        "formValue": {
            "PASS1": "",
            "PASS2": ""
        },
        "payload": "",
        "submit": "Change",
        "cancel": "Cancel",
        "topic": "",
        "x": 130,
        "y": 1280,
        "wires": [
            [
                "ff08124.c1692f"
            ]
        ]
    },
    {
        "id": "ff08124.c1692f",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Check Passwords",
        "func": "msg1.payload={};\nmsg2.payload={};\nif (msg.payload.PASS1 == msg.payload.PASS2) {\n    msg1.payload.PASSWORD=msg.payload.PASS1;\n    msg2.payload = \"Changing Passwords\";\n} else {\n    msg2.payload = \"Passwords do not match\";\n}\nreturn [msg1,msg2];",
        "outputs": 2,
        "noerr": 0,
        "x": 350,
        "y": 1280,
        "wires": [
            [
                "34c84103.7b175e",
                "af6a3135.8e4cf"
            ],
            [
                "4afead2b.1dd184"
            ]
        ]
    },
    {
        "id": "367077e4.def7a8",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo /opt/hiveid-ap/change_pwd.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1050,
        "y": 1260,
        "wires": [
            [],
            [],
            [
                "b207f0f9.a759a"
            ]
        ]
    },
    {
        "id": "bec6e433.866148",
        "type": "exec",
        "z": "7b5cf843.8f8fc8",
        "command": "sudo /opt/hiveid-ap/dnsmasq_get_leases.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 570,
        "y": 220,
        "wires": [
            [
                "b1933c19.2d82f"
            ],
            [],
            []
        ]
    },
    {
        "id": "b1933c19.2d82f",
        "type": "csv",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "sep": ",",
        "hdrin": "",
        "hdrout": "",
        "multi": "one",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 490,
        "y": 280,
        "wires": [
            [
                "c29072b.60bee9"
            ]
        ]
    },
    {
        "id": "5ea49fdb.c5819",
        "type": "inject",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 190,
        "y": 140,
        "wires": [
            [
                "3d7fd194.53872e"
            ]
        ]
    },
    {
        "id": "3d7fd194.53872e",
        "type": "exec",
        "z": "7b5cf843.8f8fc8",
        "command": "sudo /opt/hiveid-ap/dnsmasq_find_leases.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 510,
        "y": 140,
        "wires": [
            [
                "5f1132a3.8da3ec"
            ],
            [],
            []
        ]
    },
    {
        "id": "5f1132a3.8da3ec",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Assign Lease File",
        "rules": [
            {
                "t": "set",
                "p": "LEASE_FILE",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 830,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "3176c5dc.e897ba",
        "type": "http request",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 550,
        "y": 420,
        "wires": [
            [
                "505e45d0.cb662c"
            ]
        ]
    },
    {
        "id": "5d886417.9ca5ec",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set URL",
        "func": "var curIP =  msg.IP;\nvar curMAC = msg.MAC;\nmsg = {\n    IP : curIP,\n    MAC : curMAC\n};\nmsg.url = 'http://' + curIP + ':8080/info';\nmsg.headers ={'content-type':'text/javascript' };\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 340,
        "wires": [
            [
                "3176c5dc.e897ba"
            ]
        ]
    },
    {
        "id": "6528c9e.07b4038",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "Check Results",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 740,
        "y": 1660,
        "wires": [
            [
                "1d57def3.36f541"
            ],
            [
                "aca14f7e.6d9ab"
            ]
        ]
    },
    {
        "id": "b7ef9aeb.b31358",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "Green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Success Notification",
        "x": 1200,
        "y": 1660,
        "wires": []
    },
    {
        "id": "e992e762.65fa68",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "Red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Failed Notification",
        "x": 1190,
        "y": 1660,
        "wires": []
    },
    {
        "id": "62a9a8a6.197848",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "dialog",
        "displayTime": "0",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "HiveID Upgrade Notification",
        "x": 460,
        "y": 500,
        "wires": [
            [
                "550e8e3f.404b2"
            ]
        ]
    },
    {
        "id": "de578607.2bd608",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "5",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "OS Upgrade Notification",
        "x": 450,
        "y": 380,
        "wires": []
    },
    {
        "id": "7a652293.01ccbc",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Mismatch Notice",
        "x": 770,
        "y": 1300,
        "wires": []
    },
    {
        "id": "f564ab88.947548",
        "type": "ui_list",
        "z": "a06855ce.9f5488",
        "group": "73493f86.f11df",
        "name": "Network Interfaces",
        "order": 1,
        "width": "6",
        "height": "3",
        "lineType": "one",
        "actionType": "none",
        "allowHTML": true,
        "x": 650,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "127b37d8.6c9228",
        "type": "http response",
        "z": "a06855ce.9f5488",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1870,
        "y": 480,
        "wires": []
    },
    {
        "id": "c4eefb13.3f05d8",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Setup Redirect to PHP Processing",
        "func": "delete msg.payload;\nmsg.statusCode = 302;\nvar IP = global.get('IP');\nmsg.headers = {\n    \"Location\" : \"http://\" + IP.internalIPv4 + '/processing.php'\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1640,
        "y": 480,
        "wires": [
            [
                "127b37d8.6c9228"
            ]
        ]
    },
    {
        "id": "6ee73805.11a858",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Show Update Failure",
        "x": 1220,
        "y": 420,
        "wires": []
    },
    {
        "id": "6263486e.492748",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1410,
        "y": 500,
        "wires": [
            [
                "c4eefb13.3f05d8"
            ],
            [
                "4c10fa9f.10ce94"
            ]
        ]
    },
    {
        "id": "550e8e3f.404b2",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 730,
        "y": 500,
        "wires": [
            [
                "60e3884f.3df908",
                "bea700c3.ebb21"
            ],
            [
                "a08dd7de.918c88"
            ]
        ]
    },
    {
        "id": "38766841.5fbec8",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 870,
        "y": 200,
        "wires": [
            [
                "5a9407e8.fa2398"
            ],
            [
                "1850bfe0.d1164"
            ]
        ]
    },
    {
        "id": "abba8031.890a8",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Restarting Gateway Services",
        "x": 500,
        "y": 1080,
        "wires": []
    },
    {
        "id": "4a4d9e53.4b233",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Restart Notice",
        "x": 760,
        "y": 1220,
        "wires": []
    },
    {
        "id": "bd2d57f0.2622f8",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Not rebooting message",
        "x": 1270,
        "y": 200,
        "wires": []
    },
    {
        "id": "d44072e9.fc142",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Restart Editor and Interface",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "autorenew",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 160,
        "y": 1420,
        "wires": [
            [
                "1d5c0d1d.86fb23"
            ]
        ]
    },
    {
        "id": "74ca8036.a5bdb",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "",
        "name": "Restart Node-Red",
        "x": 630,
        "y": 1420,
        "wires": [
            [
                "1ecb5d68.ee8303"
            ]
        ]
    },
    {
        "id": "1ecb5d68.ee8303",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Cancel",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 890,
        "y": 1420,
        "wires": [
            [
                "260fc6de.f3479a",
                "709d461d.ec6a08"
            ],
            [
                "6502f335.cd18fc"
            ]
        ]
    },
    {
        "id": "260fc6de.f3479a",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "sudo service nodered restart",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1160,
        "y": 1420,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "b207f0f9.a759a",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 950,
        "y": 1340,
        "wires": [
            [
                "1d5c0d1d.86fb23"
            ],
            [
                "7b9003e4.dfadec"
            ]
        ]
    },
    {
        "id": "1d72c2d2.dd9c8d",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Password Change Failure",
        "x": 1370,
        "y": 1340,
        "wires": []
    },
    {
        "id": "fe750cdf.f1c19",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Not Restarting Node-Red",
        "x": 1370,
        "y": 1460,
        "wires": []
    },
    {
        "id": "b644d7aa.00e728",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Gateway Restarted",
        "x": 1210,
        "y": 1100,
        "wires": []
    },
    {
        "id": "97476705.d5f628",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Gateway was unable to restart",
        "x": 1250,
        "y": 1140,
        "wires": []
    },
    {
        "id": "a03e3ca8.3c9c3",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Restarting Node-Red",
        "x": 1360,
        "y": 1380,
        "wires": []
    },
    {
        "id": "807662dd.7d8ab",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "Green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Shutting Down",
        "x": 1200,
        "y": 580,
        "wires": []
    },
    {
        "id": "f0e52c51.44523",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Not shutting down",
        "x": 1210,
        "y": 660,
        "wires": []
    },
    {
        "id": "c393816f.5e065",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "Green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Shutdown Requested",
        "x": 1640,
        "y": 600,
        "wires": []
    },
    {
        "id": "63871334.57f6ec",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1230,
        "y": 620,
        "wires": [
            [
                "fa5f799c.9399d8"
            ],
            [
                "4cd63973.95b718"
            ]
        ]
    },
    {
        "id": "c3826261.4667",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "Red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Shutdown Request Failed",
        "x": 1650,
        "y": 640,
        "wires": []
    },
    {
        "id": "e60f8bcd.255b68",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "green",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Upgrade Started",
        "x": 1210,
        "y": 460,
        "wires": []
    },
    {
        "id": "57136f85.b74d3",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Not Upgrading",
        "x": 1200,
        "y": 540,
        "wires": []
    },
    {
        "id": "2223aa48.2be086",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Failed to schedule upgrade",
        "x": 1800,
        "y": 520,
        "wires": []
    },
    {
        "id": "1d5c0d1d.86fb23",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Ready to Restart Editor and Interface?",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Restart Editor?",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 1420,
        "wires": [
            [
                "74ca8036.a5bdb"
            ]
        ]
    },
    {
        "id": "34c84103.7b175e",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Passwords Resetting. Services will restart.",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 1220,
        "wires": [
            [
                "4a4d9e53.4b233"
            ]
        ]
    },
    {
        "id": "4afead2b.1dd184",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Passwords Mismatch",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 1300,
        "wires": [
            [
                "7a652293.01ccbc"
            ]
        ]
    },
    {
        "id": "7b9003e4.dfadec",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Unable to reset all the passwords",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1120,
        "y": 1340,
        "wires": [
            [
                "1d72c2d2.dd9c8d"
            ]
        ]
    },
    {
        "id": "709d461d.ec6a08",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Restarting Editor and Interface",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1120,
        "y": 1380,
        "wires": [
            [
                "a03e3ca8.3c9c3"
            ]
        ]
    },
    {
        "id": "6502f335.cd18fc",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Not restarting Editor and Interface",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1120,
        "y": 1460,
        "wires": [
            [
                "fe750cdf.f1c19"
            ]
        ]
    },
    {
        "id": "f70bb172.44f6b",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Gateway was unable to restart",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1020,
        "y": 1140,
        "wires": [
            [
                "97476705.d5f628"
            ]
        ]
    },
    {
        "id": "6d76fe5b.cb776",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Gateway Restarted",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1020,
        "y": 1100,
        "wires": [
            [
                "b644d7aa.00e728"
            ]
        ]
    },
    {
        "id": "aca14f7e.6d9ab",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 980,
        "y": 1680,
        "wires": [
            [
                "e992e762.65fa68"
            ]
        ]
    },
    {
        "id": "1d57def3.36f541",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 980,
        "y": 1640,
        "wires": [
            [
                "b7ef9aeb.b31358"
            ]
        ]
    },
    {
        "id": "aa3bd5db.6a1368",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Not shutting down",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 660,
        "wires": [
            [
                "f0e52c51.44523"
            ]
        ]
    },
    {
        "id": "320ea1ad.abc7be",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Shutting Down",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 580,
        "wires": [
            [
                "807662dd.7d8ab"
            ]
        ]
    },
    {
        "id": "fa5f799c.9399d8",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Shutdown Requested",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1440,
        "y": 600,
        "wires": [
            [
                "c393816f.5e065"
            ]
        ]
    },
    {
        "id": "4cd63973.95b718",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Shutdown Request Failed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1440,
        "y": 640,
        "wires": [
            [
                "c3826261.4667"
            ]
        ]
    },
    {
        "id": "a08dd7de.918c88",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Not Upgrading",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 540,
        "wires": [
            [
                "57136f85.b74d3"
            ]
        ]
    },
    {
        "id": "4c10fa9f.10ce94",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed to schedule upgrade",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1580,
        "y": 520,
        "wires": [
            [
                "2223aa48.2be086"
            ]
        ]
    },
    {
        "id": "bea700c3.ebb21",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Upgrade Started",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 460,
        "wires": [
            [
                "e60f8bcd.255b68"
            ]
        ]
    },
    {
        "id": "88bdde27.e13aa",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Updates Failed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 420,
        "wires": [
            [
                "6ee73805.11a858"
            ]
        ]
    },
    {
        "id": "1850bfe0.d1164",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "An issue occurred, Not Rebooting",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1040,
        "y": 200,
        "wires": [
            [
                "bd2d57f0.2622f8"
            ]
        ]
    },
    {
        "id": "bf5fd2d3.ecad8",
        "type": "ui_toast",
        "z": "16d0b1f7.5422be",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Firmware Update Notification",
        "x": 760,
        "y": 240,
        "wires": []
    },
    {
        "id": "2f029628.f1b68a",
        "type": "ui_button",
        "z": "11b2f565.0266ab",
        "name": "",
        "group": "17f52c5b.cfb014",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "HiveID Lite Update with Standard Flows",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "cloud_download",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 260,
        "y": 440,
        "wires": [
            [
                "cb5b3377.6d8cd",
                "b6adf091.54a19"
            ]
        ]
    },
    {
        "id": "cb5b3377.6d8cd",
        "type": "exec",
        "z": "11b2f565.0266ab",
        "command": "/opt/hiveid-ap/hiveid_update_lite.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 310,
        "y": 500,
        "wires": [
            [],
            [],
            [
                "28e09cbc.cb9ca4",
                "d95a424c.eb91b"
            ]
        ]
    },
    {
        "id": "28e09cbc.cb9ca4",
        "type": "switch",
        "z": "11b2f565.0266ab",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 270,
        "y": 560,
        "wires": [
            [
                "b71926b7.4d6c68",
                "39759a06.5d9436"
            ],
            [
                "6372dd42.8b5614"
            ]
        ]
    },
    {
        "id": "93535d75.79ef",
        "type": "ui_toast",
        "z": "11b2f565.0266ab",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1370,
        "y": 540,
        "wires": []
    },
    {
        "id": "b71926b7.4d6c68",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "HiveID Successful Update",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HiveID Software Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 920,
        "y": 540,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "38fc9479.9fd71c",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "Flows Successful Update",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HiveID Software Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1090,
        "y": 740,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "6372dd42.8b5614",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "HiveID Failed Update",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HiveID Failed Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Not Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 900,
        "y": 580,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "522e776c.656068",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "Flows Failed Update",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Flows Failed Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Not Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1080,
        "y": 780,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "39759a06.5d9436",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "Editor and UI Reset",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Do you want to replace the existing flows?  HiveID Editor and Interface will be restarted.",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Install Flows",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 620,
        "wires": [
            [
                "fafc95d8.818068"
            ]
        ]
    },
    {
        "id": "fafc95d8.818068",
        "type": "ui_toast",
        "z": "11b2f565.0266ab",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "Cancel",
        "topic": "",
        "name": "Install Flows",
        "x": 370,
        "y": 660,
        "wires": [
            [
                "19f7d2e8.e7113d"
            ]
        ]
    },
    {
        "id": "19f7d2e8.e7113d",
        "type": "switch",
        "z": "11b2f565.0266ab",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 390,
        "y": 700,
        "wires": [
            [
                "d5c9c93d.040dc8"
            ],
            [
                "bf3e9a41.53c138"
            ]
        ]
    },
    {
        "id": "bf3e9a41.53c138",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "Flows Skipped",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Skipping Flow Update",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Flows Skipped",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1060,
        "y": 700,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "d5c9c93d.040dc8",
        "type": "exec",
        "z": "11b2f565.0266ab",
        "command": "echo \"/opt/hiveid-ap/nodered_set_flows.sh\" | at -M now",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 530,
        "y": 760,
        "wires": [
            [],
            [],
            [
                "904041c1.3e299",
                "d95a424c.eb91b"
            ]
        ]
    },
    {
        "id": "904041c1.3e299",
        "type": "switch",
        "z": "11b2f565.0266ab",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 890,
        "y": 760,
        "wires": [
            [
                "38fc9479.9fd71c"
            ],
            [
                "522e776c.656068"
            ]
        ]
    },
    {
        "id": "d95a424c.eb91b",
        "type": "debug",
        "z": "11b2f565.0266ab",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 670,
        "y": 500,
        "wires": []
    },
    {
        "id": "1f6a8f56.0f3ca1",
        "type": "switch",
        "z": "16d0b1f7.5422be",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1150,
        "y": 600,
        "wires": [
            [
                "12146367.ef1a5d"
            ],
            [
                "9708a2a3.9c5fe"
            ]
        ]
    },
    {
        "id": "9708a2a3.9c5fe",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Failure Notice",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed to Update Modules",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Failure",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1340,
        "y": 620,
        "wires": [
            [
                "4ad60835.72eb38"
            ]
        ]
    },
    {
        "id": "12146367.ef1a5d",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Success Notice",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Update Modules",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1340,
        "y": 580,
        "wires": [
            [
                "4ad60835.72eb38"
            ]
        ]
    },
    {
        "id": "4ad60835.72eb38",
        "type": "ui_toast",
        "z": "16d0b1f7.5422be",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1610,
        "y": 420,
        "wires": []
    },
    {
        "id": "86eb29ca.12d938",
        "type": "ui_toast",
        "z": "16d0b1f7.5422be",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 990,
        "y": 660,
        "wires": []
    },
    {
        "id": "41f21ebb.07fbd",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Updating with Target File",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "currentFirmware",
                "tot": "flow"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 780,
        "y": 660,
        "wires": [
            [
                "86eb29ca.12d938"
            ]
        ]
    },
    {
        "id": "73f0e379.d7a36c",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Firmware folder has changed",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Updated Firmware",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 180,
        "y": 760,
        "wires": [
            [
                "4c840e2e.6fb22"
            ]
        ]
    },
    {
        "id": "bf3bd799.4cf2a8",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "Status Timer 1 Min",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 1520,
        "wires": [
            [
                "d80dbb05.2032d8"
            ]
        ]
    },
    {
        "id": "d80dbb05.2032d8",
        "type": "http request",
        "z": "a06855ce.9f5488",
        "name": "",
        "method": "GET",
        "ret": "obj",
        "paytoqs": false,
        "url": "http://localhost/scripts/gatewayInfo.php",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 390,
        "y": 1520,
        "wires": [
            [
                "b1b40989.5d3408"
            ]
        ]
    },
    {
        "id": "b1b40989.5d3408",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "gatewayInfo",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 1520,
        "wires": [
            []
        ]
    },
    {
        "id": "68cb15ae.41839c",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 130,
        "y": 500,
        "wires": [
            [
                "8b1d208.d34f7e"
            ]
        ]
    },
    {
        "id": "6e336cdf.141514",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "wifi2wifi",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "wifi2eth",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 3,
        "x": 370,
        "y": 600,
        "wires": [
            [
                "94906fa9.19fb88"
            ],
            [
                "aaae695a.b63e28"
            ],
            [
                "92c527fb.83854"
            ]
        ]
    },
    {
        "id": "7dd85809.d05ae8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Set Default UI",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"group\":{\"hide\":[\"Network_Mode_Gateway_Settings\"],\"show\":[\"Network_Mode_WiFi_Client_Setup\",\"Network_Mode_Configured_WiFi_Networks\",\"Network_Mode_Scan_for_WiFi_Networks\"],\"focus\":true}}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 720,
        "wires": [
            [
                "6ea9c20a.3165fc",
                "11bd9584.c3dd2a",
                "18316d6a.0b7ff3"
            ]
        ]
    },
    {
        "id": "69f0edc8.770fb4",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Set WiFi to Eth",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"group\":{\"show\":[\"Network_Mode_Gateway_Settings\"],\"hide\":[\"Network_Mode_WiFi_Client_Setup\",\"Network_Mode_Configured_WiFi_Networks\",\"Network_Mode_Scan_for_WiFi_Networks\"],\"focus\":true}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "default_interface",
                "pt": "msg",
                "to": "wlan0",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 640,
        "y": 620,
        "wires": [
            [
                "6ea9c20a.3165fc",
                "c27ed988.853568"
            ]
        ]
    },
    {
        "id": "c1fa0bab.e36ec8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Set WiFi to WiFi",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"group\":{\"show\":[\"Network_Mode_Gateway_Settings\",\"Network_Mode_WiFi_Client_Setup\",\"Network_Mode_Configured_WiFi_Networks\",\"Network_Mode_Scan_for_WiFi_Networks\"],\"focus\":true}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "default_interface",
                "pt": "msg",
                "to": "wlan0",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 520,
        "wires": [
            [
                "6ea9c20a.3165fc",
                "c27ed988.853568",
                "18316d6a.0b7ff3",
                "11bd9584.c3dd2a"
            ]
        ]
    },
    {
        "id": "c27ed988.853568",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Setup Gateway",
        "func": "var gatewayInfo = global.get('gatewayInfo');\nvar AP = flow.get('AP');\n\nif (gatewayInfo !== undefined ) {\n    if (gatewayInfo.hostapd.channel !== undefined) {\n        AP.CHANNEL = gatewayInfo.hostapd.channel;\n    }\n    \n    if (gatewayInfo.hostapd.ssid !== undefined) {\n        AP.SSID = gatewayInfo.hostapd.ssid;\n    }\n    \n    if (gatewayInfo.hostapd.wpa_passphrase !== undefined ) {\n        AP.PASSPHRASE = gatewayInfo.hostapd.wpa_passphrase;\n    }\n    if (gatewayInfo.interfaces[msg.default_interface] !== undefined && gatewayInfo.interfaces[msg.default_interface] !== \"\") {\n        AP.NETWORK  = String(gatewayInfo.interfaces[msg.default_interface]).replace(/\\.\\d+$/g,'');        \n    }\n}\nflow.set('AP',AP);\nvar msg1 = { payload : AP.CHANNEL};\nvar msg2 = { payload : AP.SSID };\nvar msg3 = { payload : AP.PASSPHRASE };\nvar msg4 = { payload : AP.NETWORK  };\nreturn [msg1,msg2,msg3,msg4];",
        "outputs": 4,
        "noerr": 0,
        "x": 880,
        "y": 520,
        "wires": [
            [
                "622978c3.ef9878"
            ],
            [
                "696d72e4.693a7c"
            ],
            [
                "aa288074.16ba6"
            ],
            [
                "a807bd57.50a54"
            ]
        ]
    },
    {
        "id": "79e9d9df.142788",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "Scan WiFi Networks",
        "group": "b0d41c89.dd503",
        "order": 3,
        "width": "8",
        "height": "1",
        "passthru": false,
        "label": "Scan WiFi Networks",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-wifi",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 900,
        "y": 600,
        "wires": [
            [
                "18316d6a.0b7ff3"
            ]
        ]
    },
    {
        "id": "78ef2933.e795a8",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "Add Network",
        "group": "8b01491a.1965e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Add Network",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-plus",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 870,
        "y": 720,
        "wires": [
            [
                "c5bb7ed6.c41da"
            ]
        ]
    },
    {
        "id": "fb7f8aa9.d1a0c8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "Client.WAN_SSID",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1710,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "d35706d5.e8d078",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "set Client.WAN_PASSPHRASE",
        "rules": [
            {
                "t": "set",
                "p": "Client.WAN_PASSPHRASE",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1210,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "c5bb7ed6.c41da",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set Flow Object",
        "func": "var wifiNetworks = flow.get('wifi_networks');\nif (wifiNetworks === undefined ) {\n    wifiNetworks = [];\n}\n\nvar ssid = flow.get('Client.WAN_SSID');\nvar psk = flow.get('Client.WAN_PASSPHRASE');\nvar key_mgmt = flow.get('Client.WAN_KEY_MGMT');\n\nfor (var i=0;i<wifiNetworks.length;i++) {\n    if (wifiNetworks[i].ssid === ssid) {\n        wifiNetworks.slice(i,1);\n        i--;\n    }\n}\nwifiNetworks.unshift({\n    'ssid'      :   ssid,\n    'psk'       :   psk,\n    'key_mgmt'  :   key_mgmt\n});\n\nflow.set('wifi_networks',wifiNetworks);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1160,
        "y": 720,
        "wires": [
            [
                "45696e5e.9f896"
            ]
        ]
    },
    {
        "id": "c258cdac.c9d2",
        "type": "ui_dropdown",
        "z": "9745920.d8a397",
        "name": "",
        "label": "Country Code",
        "tooltip": "",
        "place": "",
        "group": "8b01491a.1965e8",
        "order": 4,
        "width": "0",
        "height": "0",
        "passthru": true,
        "options": [],
        "payload": "",
        "topic": "",
        "x": 1320,
        "y": 800,
        "wires": [
            [
                "604da2e4.60c94c"
            ]
        ]
    },
    {
        "id": "11bd9584.c3dd2a",
        "type": "file in",
        "z": "9745920.d8a397",
        "name": "",
        "filename": "/opt/hiveid-ap/data/CC.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "x": 920,
        "y": 800,
        "wires": [
            [
                "84c5c132.32da7"
            ]
        ]
    },
    {
        "id": "84c5c132.32da7",
        "type": "csv",
        "z": "9745920.d8a397",
        "name": "",
        "sep": ",",
        "hdrin": true,
        "hdrout": false,
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 1130,
        "y": 800,
        "wires": [
            [
                "ae85a3d3.d0052"
            ]
        ]
    },
    {
        "id": "ae85a3d3.d0052",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Create Country Code Options",
        "func": "//var myResults = {};\nmsg.options = [];\nfor (var i in msg.payload) {\n    if (msg.payload[i].ISO2 !== undefined) {\n        var temp = {};\n        temp[msg.payload[i]['Short name']] = msg.payload[i].ISO2;\n        msg.options.push(temp);\n    }\n}\n//msg.options = myResults;\nmsg.payload = \"US\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1330,
        "y": 760,
        "wires": [
            [
                "c258cdac.c9d2"
            ]
        ]
    },
    {
        "id": "604da2e4.60c94c",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Set Client.WAN_WIFI_CC",
        "rules": [
            {
                "t": "set",
                "p": "Client.WAN_WIFI_CC",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1390,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "dae90564.436648",
        "type": "switch",
        "z": "16d0b1f7.5422be",
        "name": "",
        "property": "filename",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 690,
        "y": 200,
        "wires": [
            [
                "d505e776.cc8988"
            ],
            []
        ]
    },
    {
        "id": "8450b883.b9f298",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Set CurrentFirmware",
        "rules": [
            {
                "t": "set",
                "p": "currentFirmware",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 720,
        "wires": [
            [
                "ce501478.c28c58"
            ]
        ]
    },
    {
        "id": "cac1c25.866e24",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "",
        "func": "flow.set('currentFirmware',msg.payload.trim());\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 340,
        "wires": [
            [
                "ce501478.c28c58"
            ]
        ]
    },
    {
        "id": "a29a5b71.a68218",
        "type": "inject",
        "z": "16d0b1f7.5422be",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 110,
        "y": 280,
        "wires": [
            [
                "6fc345c3.70b4dc"
            ]
        ]
    },
    {
        "id": "6fc345c3.70b4dc",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "/opt/hiveid-ap/hiveid_get_newbin.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 210,
        "y": 340,
        "wires": [
            [
                "cac1c25.866e24"
            ],
            [],
            []
        ]
    },
    {
        "id": "784f20e3.ac9e6",
        "type": "ui_list",
        "z": "16d0b1f7.5422be",
        "group": "fbf0d797.e67a78",
        "name": "Firmware Versions",
        "order": 2,
        "width": "10",
        "height": "3",
        "lineType": "one",
        "actionType": "menu",
        "allowHTML": true,
        "x": 890,
        "y": 840,
        "wires": [
            [
                "c5e2ba47.510018",
                "b5bb12b.96430f"
            ]
        ]
    },
    {
        "id": "ce501478.c28c58",
        "type": "fs-ops-dir",
        "z": "16d0b1f7.5422be",
        "name": "OTA Files",
        "path": "/usr/local/hiveid-ap/ota",
        "pathType": "str",
        "filter": "*.bin",
        "filterType": "str",
        "dir": "files",
        "dirType": "msg",
        "x": 480,
        "y": 840,
        "wires": [
            [
                "28f781ed.6efbee",
                "20f138b7.69d9c8"
            ]
        ]
    },
    {
        "id": "b8f3b643.66ddd8",
        "type": "inject",
        "z": "16d0b1f7.5422be",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": "3",
        "x": 130,
        "y": 840,
        "wires": [
            [
                "ce501478.c28c58"
            ]
        ]
    },
    {
        "id": "28f781ed.6efbee",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "",
        "func": "var results = [];\nvar currentFirmware = flow.get('currentFirmware').trim();\nvar tFiles = msg.files.sort().reverse();\nfor (var i in tFiles) {\n    var curFile = tFiles[i].trim();\n    var outFile = '/usr/local/hiveid-ap/ota/' + curFile;\n    if (currentFirmware === \"\") {\n        flow.set('currentFirmware',outFile);\n        currentFirmware = outFile;\n    }\n    results.push({ \n        title: tFiles[i],\n        icon_name : ((outFile === currentFirmware) ? 'fa-check-circle' : 'fa-circle'),\n        menu : [\"Set Active\",\"Delete\"]\n    });\n}\nmsg.payload = results;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 670,
        "y": 840,
        "wires": [
            [
                "784f20e3.ac9e6"
            ]
        ]
    },
    {
        "id": "20f138b7.69d9c8",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 670,
        "y": 800,
        "wires": []
    },
    {
        "id": "c5e2ba47.510018",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 800,
        "wires": []
    },
    {
        "id": "4e95a163.b00df",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 410,
        "y": 580,
        "wires": []
    },
    {
        "id": "b6adf091.54a19",
        "type": "change",
        "z": "11b2f565.0266ab",
        "name": "Update Requested",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Starting the Update Process",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "HiveID Update",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 890,
        "y": 440,
        "wires": [
            [
                "93535d75.79ef"
            ]
        ]
    },
    {
        "id": "533870c4.2662",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Put into flow.Probes",
        "func": "var probes = flow.get('Probes');\nvar probeHistory = flow.get('Probe_History');\n\nif (probes === undefined) {\n    probes = {};\n}\nif (probeHistory === undefined) {\n    probeHistory = {};\n}\nif (probeHistory[msg.MAC] === undefined) {\n    probeHistory[msg.MAC] = {};\n}\nif (msg.MAC !== undefined) {\n    probes[msg.MAC] = msg.payload;\n    var tempKeys = Object.keys(probeHistory[msg.MAC]);\n    if (tempKeys.length >= 10) {\n        delete probeHistory[msg.MAC][tempKeys[0]];\n    }\n    probeHistory[msg.MAC][msg.payload.TIME] = { \n        Success : msg.payload.SUCCESS, \n        Failure : msg.payload.FAILURE \n    };\n    flow.set('Probes',probes);\n    flow.set('Probe_History',probeHistory);\n}\nmsg.payload = probes;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1140,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "273afee4.dd92c2",
        "type": "ui_list",
        "z": "7b5cf843.8f8fc8",
        "group": "873f13f8.22f2b",
        "name": "Node List",
        "order": 1,
        "width": "12",
        "height": "12",
        "lineType": "three",
        "actionType": "menu",
        "allowHTML": true,
        "x": 540,
        "y": 580,
        "wires": [
            [
                "7fe7a3b.bd6b85c"
            ]
        ]
    },
    {
        "id": "9fed95c1.655638",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Setup Rendering",
        "func": "var inProbes = flow.get('Probes');\nvar hive = global.get('hive');\nmsg.payload = [];\nvar inHealth = flow.get('Probe_Health');\nif (inProbes !== undefined && Object.keys(inProbes).length > 0) {\n    for (var i in inProbes) {\n        if (inProbes[i].MAC === undefined) {\n            continue;\n        }\n        var icon = 'wifi';\n        var error ='';\n        if (inHealth[inProbes[i].MAC] === \"EHOSTUNREACH\") {\n            icon = \"error\";\n            error = \"Unable to reach node \" + inProbes[i].IP;\n        }\n        if (inHealth[inProbes[i].MAC] >= 400) {\n            icon = \"error\";\n            error = \"Page Not Found\";\n            if (inHealth[inProbes[i].MAC] >= 500) {    \n                error = \"Application Error\";\n            }\n        }\n        var successRate = 'N/A';\n        var total = inProbes[i].SUCCESS + inProbes[i].FAILURE;\n        if (total > 0) {\n            var tempRate = parseFloat((inProbes[i].SUCCESS*100)/total).toFixed(1);\n            if (icon === \"wifi\" ) {\n                icon = 'done';\n                if (tempRate < 75) {\n                    icon = 'warning';\n                    error = 'Some failures detected';\n                    if (tempRate < 50) {\n                        icon = 'error';\n                        error = 'Excessive errors detected';\n                    }\n                }\n            }\n            successRate = inProbes[i].SUCCESS + '/' + total + ' = ' + String(tempRate) +'%';\n        }\n        var locationName = '';\n        var t_loc = hive.getLocationDetails(inProbes[i].MAC);\n        if (t_loc !== undefined && t_loc.location !== undefined && t_loc.location.NAME !== undefined) {\n            //locationName = t_loc.location.NAME;\n            locationName = hive.traintraxx.getLocationNameByID(t_loc.location.ID);\n        }\n        msg.payload.push({\n           title :  '<div>' +\n                        '<strong>TrainTraxx Location:</strong>' + locationName + '<br/>' +\n                        '<strong>IP:</strong>' + inProbes[i].IP + '<br/>'+ \n                        '<strong>MAC:</strong> ' + inProbes[i].MAC + '<br/>'+ \n                        '<strong>Version: </strong> ' + inProbes[i].VERSION + '<br />' +\n                        '<strong>Endpoint:</strong> ' + inProbes[i].URL + '<br/>' +\n                        '<strong>Signal:</strong> ' + inProbes[i].RSSI + '<br/>' +\n                        '<strong>Success Rate:</strong> ' + successRate + '<br/>' +\n                        ((error !== \"\" ) ? '<strong>Notice:</strong> ' + error : '') +\n                        '<hr/>' +\n                    '</div>',\n           menu : [\"Restart\",\"Reset\",\"Clear Configuration\",\"Update Firmware\",\"Show History\"],\n           icon_name : icon,\n           data : inProbes[i],\n           url : 'http://' + inProbes[i].IP + ':8080/'\n           \n        });\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 580,
        "wires": [
            [
                "273afee4.dd92c2"
            ]
        ]
    },
    {
        "id": "dd94a3fd.ae674",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set Health Messges for Probes",
        "func": "var probes = flow.get('Probe_Health');\nif (probes === undefined) {\n    probes = {};\n}\nprobes[msg.MAC] = msg.statusCode;\nflow.set('Probe_Health',probes);\nmsg.payload = probes;",
        "outputs": 1,
        "noerr": 0,
        "x": 1170,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "7fe7a3b.bd6b85c",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "property": "payload.selected",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Restart",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Clear Configuration",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Reset",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Update Firmware",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Show History",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 5,
        "x": 610,
        "y": 700,
        "wires": [
            [
                "6f1bb70b.a402e8"
            ],
            [
                "7824df0.64d322"
            ],
            [
                "b63b4171.7c8f3"
            ],
            [
                "aaf2f483.ae9c68"
            ],
            [
                "9c780fce.f264e"
            ]
        ]
    },
    {
        "id": "bf09d96.c8e2328",
        "type": "http request",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 1010,
        "y": 660,
        "wires": [
            [
                "712ae40d.6a76ec"
            ]
        ]
    },
    {
        "id": "7824df0.64d322",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set clear URL",
        "func": "msg.url = msg.payload.url + 'clear';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 660,
        "wires": [
            [
                "bf09d96.c8e2328"
            ]
        ]
    },
    {
        "id": "712ae40d.6a76ec",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 4,
        "x": 1210,
        "y": 660,
        "wires": [
            [
                "4226552a.2c89fc"
            ],
            [
                "4226552a.2c89fc"
            ],
            [
                "5d8ec427.76e15c"
            ],
            [
                "1fc4e5f6.cb0fda"
            ]
        ]
    },
    {
        "id": "14527172.13ccbf",
        "type": "ui_toast",
        "z": "7b5cf843.8f8fc8",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1950,
        "y": 660,
        "wires": []
    },
    {
        "id": "5d8ec427.76e15c",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Cleared Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Successfully Cleared",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1570,
        "y": 700,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "63502c95.5de9e4",
        "type": "http request",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 1010,
        "y": 580,
        "wires": [
            [
                "b98ad16b.c90ec"
            ]
        ]
    },
    {
        "id": "6f1bb70b.a402e8",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set Restart URL",
        "func": "msg.url = msg.payload.url + 'restart';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 580,
        "wires": [
            [
                "63502c95.5de9e4"
            ]
        ]
    },
    {
        "id": "b98ad16b.c90ec",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 4,
        "x": 1210,
        "y": 580,
        "wires": [
            [
                "4226552a.2c89fc"
            ],
            [
                "4226552a.2c89fc"
            ],
            [
                "9ab886c2.8e45f8"
            ],
            [
                "1fc4e5f6.cb0fda"
            ]
        ]
    },
    {
        "id": "4226552a.2c89fc",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Error Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "HTTP Error",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Error",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1560,
        "y": 640,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "9ab886c2.8e45f8",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Reset Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Successfully Restart",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1560,
        "y": 600,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "1fc4e5f6.cb0fda",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "No Response",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed to reach system",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "No Response",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1560,
        "y": 560,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "7917b57c.7ef22c",
        "type": "http request",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 1010,
        "y": 740,
        "wires": [
            [
                "c7ab7611.481fc8"
            ]
        ]
    },
    {
        "id": "b63b4171.7c8f3",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set Reset URL",
        "func": "msg.url = msg.payload.url + 'reset';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 740,
        "wires": [
            [
                "7917b57c.7ef22c"
            ]
        ]
    },
    {
        "id": "c7ab7611.481fc8",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 4,
        "x": 1210,
        "y": 740,
        "wires": [
            [
                "4226552a.2c89fc"
            ],
            [
                "4226552a.2c89fc"
            ],
            [
                "8317ae0c.da9d5"
            ],
            [
                "1fc4e5f6.cb0fda"
            ]
        ]
    },
    {
        "id": "8317ae0c.da9d5",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Reset Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Successfully Reset",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1560,
        "y": 760,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "5681ef8f.18bc2",
        "type": "ui_dropdown",
        "z": "de72cd33.d0bc",
        "name": "Select Node",
        "label": "Select node",
        "tooltip": "",
        "place": "Select option",
        "group": "d93a6b1c.d9e2e8",
        "order": 1,
        "width": "12",
        "height": "1",
        "passthru": false,
        "options": [],
        "payload": "",
        "topic": "",
        "x": 330,
        "y": 180,
        "wires": [
            [
                "f9148982.51c698"
            ]
        ]
    },
    {
        "id": "4617c0f6.ec13d",
        "type": "inject",
        "z": "de72cd33.d0bc",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "30",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "78c095e6.19640c"
            ]
        ]
    },
    {
        "id": "78c095e6.19640c",
        "type": "function-npm",
        "z": "de72cd33.d0bc",
        "name": "Get Probe List",
        "func": "var _ = global.get('_');\nvar probes = global.get('Probes');\nvar ip = flow.get('ip');\nmsg.payload = ip;\n\nvar out = [];\nif (probes !== undefined) {\n    probes = _.orderBy(probes, 'IP', 'asc'); \n    for (var i in probes) {\n        out.push(probes[i].IP);\n    }\n}\nmsg.options = out;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 320,
        "y": 140,
        "wires": [
            [
                "5681ef8f.18bc2"
            ]
        ]
    },
    {
        "id": "243c3d12.726522",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 990,
        "y": 140,
        "wires": []
    },
    {
        "id": "ce7a44f3.fdb208",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Validate MAC",
        "func": "var inMac = msg.payload.col2.trim();\nvar inIP = msg.payload.col3.trim();\n\n\nvar TT = global.get('TrainTraxx');\nvar targetKey = null;\n\nvar msg1 = {payload :{}};\nvar msg2 = {\n    payload : \"Unable to access TrainTraxx\",\n    topic: \"Error\",\n    highlight: \"red\"\n};\n\n\nif (TT !== undefined && TT.hivenode !== undefined) {\n    if (TT.hivenode.columns !== undefined) {\n        for (var i in TT.hivenode.columns) {\n            if (TT.hivenode.columns[i] === \"MAC_ADDRESS\") {\n                targetKey = i;\n            } \n        }\n    } else { \n        msg2 = {\n            payload : \"Missing Hivenode Columns\",\n            topic : \"Error\",\n            highlight : \"red\"\n        };\n        return [msg1,msg2];\n    }\n    if (TT.hivenode.data !== undefined && targetKey !== null) {\n        for (var t in TT.hivenode.data) {         \n            if (inMac === TT.hivenode.data[t][targetKey]) {\n                msg1 = {\n                    payload : {\n                        MAC : inMac,\n                        IP  : inIP\n                    }\n                };\n                msg2 = {\n                    payload : \"MAC Validated\",\n                    topic : \"Update\",\n                    highlight : \"green\"\n                };\n            }\n        }\n    } else {\n        msg2 = {\n            payload : \"Missing Hivenode Data or Unable to find MAC Column\",\n            topic : \"Error\",\n            highlight : \"red\"\n        };\n    }   \n}\nreturn [msg1,msg2];\n",
        "outputs": 2,
        "noerr": 0,
        "x": 880,
        "y": 420,
        "wires": [
            [
                "c268dc3f.a1393",
                "ce3e93ca.3579d"
            ],
            [
                "4ad60835.72eb38"
            ]
        ]
    },
    {
        "id": "9a8042ce.11b9c",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 670,
        "y": 380,
        "wires": []
    },
    {
        "id": "c268dc3f.a1393",
        "type": "switch",
        "z": "16d0b1f7.5422be",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 1,
        "x": 890,
        "y": 460,
        "wires": [
            [
                "8133a096.b87",
                "bf2a9b37.851f28"
            ]
        ]
    },
    {
        "id": "ce3e93ca.3579d",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1130,
        "y": 360,
        "wires": []
    },
    {
        "id": "bf2a9b37.851f28",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1130,
        "y": 400,
        "wires": []
    },
    {
        "id": "aa89a911.032608",
        "type": "ui_text_input",
        "z": "7b5cf843.8f8fc8",
        "name": "Update Endpoint",
        "label": "",
        "tooltip": "",
        "group": "873f13f8.22f2b",
        "order": 1,
        "width": "12",
        "height": "1",
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 650,
        "y": 940,
        "wires": [
            [
                "b0f37200.a15da"
            ]
        ]
    },
    {
        "id": "89ae3cce.0e8ef",
        "type": "inject",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "topic": "",
        "payload": "LEASE_FILE",
        "payloadType": "flow",
        "repeat": "30",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 210,
        "y": 220,
        "wires": [
            [
                "bec6e433.866148"
            ]
        ]
    },
    {
        "id": "b0f37200.a15da",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "NEW_URL",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "LEASE_FILE",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 980,
        "wires": [
            [
                "47768455.2a402c"
            ]
        ]
    },
    {
        "id": "8486d1db.95beb",
        "type": "inject",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "topic": "",
        "payload": "http://local.hive-id.com:1880/tracker",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 450,
        "y": 940,
        "wires": [
            [
                "aa89a911.032608"
            ]
        ]
    },
    {
        "id": "47768455.2a402c",
        "type": "exec",
        "z": "7b5cf843.8f8fc8",
        "command": "sudo /opt/hiveid-ap/dnsmasq_get_leases.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 790,
        "y": 1040,
        "wires": [
            [
                "15d09f41.6829b1"
            ],
            [],
            []
        ]
    },
    {
        "id": "15d09f41.6829b1",
        "type": "csv",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "sep": ",",
        "hdrin": "",
        "hdrout": "",
        "multi": "one",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 1050,
        "y": 1040,
        "wires": [
            [
                "6a707d1d.eb1e14"
            ]
        ]
    },
    {
        "id": "6a707d1d.eb1e14",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set URL",
        "func": "var new_url = flow.get('NEW_URL');\nmsg.url = 'http://' + msg.payload.col3 + ':8080/service_url?service_url=' + new_url;\nmsg.topic = msg.payload.col2;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1100,
        "y": 1080,
        "wires": [
            [
                "71656feb.ae931"
            ]
        ]
    },
    {
        "id": "71656feb.ae931",
        "type": "http request",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1150,
        "y": 1120,
        "wires": [
            [
                "4f73c59b.3a925c"
            ]
        ]
    },
    {
        "id": "4f73c59b.3a925c",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 4,
        "x": 1310,
        "y": 1120,
        "wires": [
            [
                "4226552a.2c89fc"
            ],
            [
                "1fc4e5f6.cb0fda"
            ],
            [
                "6a1bac89.34c114"
            ],
            [
                "1fc4e5f6.cb0fda"
            ]
        ]
    },
    {
        "id": "6a1bac89.34c114",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Updated URL",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Successfully Updated",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1480,
        "y": 1120,
        "wires": [
            [
                "14527172.13ccbf"
            ]
        ]
    },
    {
        "id": "1500441d.dabf1c",
        "type": "debug",
        "z": "5e61e22e.7a581c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 540,
        "y": 180,
        "wires": []
    },
    {
        "id": "e605038b.fdb8e",
        "type": "http in",
        "z": "5e61e22e.7a581c",
        "name": "",
        "url": "/tracker",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 180,
        "wires": [
            [
                "7a77d6f7.848b78"
            ]
        ]
    },
    {
        "id": "2fe76b58.5e83e4",
        "type": "function",
        "z": "5e61e22e.7a581c",
        "name": "Tracker Process",
        "func": "var config = global.get('TrainTraxx_Config');\nvar IP = global.get('IP');\nmsg.payload.DATA['GATEWAY_IP'] = IP.internalIPv4;\nmsg.url = config.TrainTraxx_Web + '/tracker.php';\nmsg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 420,
        "wires": [
            [
                "109bc3b3.e3035c"
            ]
        ]
    },
    {
        "id": "109bc3b3.e3035c",
        "type": "http request",
        "z": "5e61e22e.7a581c",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 870,
        "y": 460,
        "wires": [
            [
                "8dc0fe46.c010d",
                "27387db.42dca82"
            ]
        ],
        "inputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "f1f0f366.cd2ea",
        "type": "http in",
        "z": "5e61e22e.7a581c",
        "name": "",
        "url": "/tracker",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 460,
        "wires": [
            [
                "fcbd7750.5d89e8",
                "5d227a0a.b803a4"
            ]
        ]
    },
    {
        "id": "fcbd7750.5d89e8",
        "type": "debug",
        "z": "5e61e22e.7a581c",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 450,
        "y": 460,
        "wires": []
    },
    {
        "id": "a825a8f8.722a68",
        "type": "http response",
        "z": "5e61e22e.7a581c",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 710,
        "y": 500,
        "wires": []
    },
    {
        "id": "5d227a0a.b803a4",
        "type": "function",
        "z": "5e61e22e.7a581c",
        "name": "",
        "func": "msg.payload = \"OK\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 450,
        "y": 500,
        "wires": [
            [
                "a825a8f8.722a68"
            ]
        ]
    },
    {
        "id": "ccd936e6.c33d58",
        "type": "ui_button",
        "z": "7b5cf843.8f8fc8",
        "name": "Flush Node Cache",
        "group": "873f13f8.22f2b",
        "order": 2,
        "width": "12",
        "height": "1",
        "passthru": false,
        "label": "Flush Cache",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-reload",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 660,
        "y": 1120,
        "wires": [
            [
                "d804a10b.2f2a3"
            ]
        ]
    },
    {
        "id": "d804a10b.2f2a3",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Clear Probes",
        "rules": [
            {
                "t": "set",
                "p": "Probe_Health",
                "pt": "flow",
                "to": "{}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "Probe_History",
                "pt": "flow",
                "to": "{}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "Probes",
                "pt": "flow",
                "to": "{}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "Probe_Ignore",
                "pt": "flow",
                "to": "{}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 890,
        "y": 1120,
        "wires": [
            []
        ]
    },
    {
        "id": "66e86250.0a2bcc",
        "type": "switch",
        "z": "16d0b1f7.5422be",
        "name": "",
        "property": "payload.selected",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Set Active",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Delete",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1190,
        "y": 880,
        "wires": [
            [
                "e145d0ca.70fa1",
                "d2c9b332.9f9af"
            ],
            [
                "628f15b0.39eddc"
            ]
        ]
    },
    {
        "id": "628f15b0.39eddc",
        "type": "fs-ops-delete",
        "z": "16d0b1f7.5422be",
        "name": "",
        "path": "",
        "pathType": "str",
        "filename": "filename",
        "filenameType": "msg",
        "x": 1350,
        "y": 920,
        "wires": [
            [
                "5c4908eb.fb3fa8"
            ]
        ]
    },
    {
        "id": "b5bb12b.96430f",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Set Filename",
        "func": "msg.filename = '/usr/local/hiveid-ap/ota/' + msg.payload.title;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 840,
        "wires": [
            [
                "66e86250.0a2bcc",
                "d2c9b332.9f9af"
            ]
        ]
    },
    {
        "id": "5c4908eb.fb3fa8",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Handoff",
        "func": "var curFilename = flow.get('currentFirmware');\nif (msg.filename === curFilename) {\n    flow.set('currentFirmware',\"\");\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1520,
        "y": 920,
        "wires": [
            [
                "ce501478.c28c58"
            ]
        ]
    },
    {
        "id": "e145d0ca.70fa1",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Set currentFirmware",
        "rules": [
            {
                "t": "set",
                "p": "currentFirmware",
                "pt": "flow",
                "to": "filename",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1520,
        "y": 860,
        "wires": [
            [
                "ce501478.c28c58"
            ]
        ]
    },
    {
        "id": "d2c9b332.9f9af",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1350,
        "y": 820,
        "wires": []
    },
    {
        "id": "4794cc59.6fea44",
        "type": "link in",
        "z": "16d0b1f7.5422be",
        "name": "Firmware Wireless Update iLink",
        "links": [
            "1e2d1aa3.003aa5"
        ],
        "x": 715,
        "y": 500,
        "wires": [
            [
                "8133a096.b87"
            ]
        ]
    },
    {
        "id": "1e2d1aa3.003aa5",
        "type": "link out",
        "z": "7b5cf843.8f8fc8",
        "name": "Firmware Wireless Update oLink",
        "links": [
            "4794cc59.6fea44"
        ],
        "x": 895,
        "y": 780,
        "wires": []
    },
    {
        "id": "aaf2f483.ae9c68",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Set IP",
        "rules": [
            {
                "t": "set",
                "p": "payload.IP",
                "pt": "msg",
                "to": "payload.data.IP",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 790,
        "y": 780,
        "wires": [
            [
                "1e2d1aa3.003aa5"
            ]
        ]
    },
    {
        "id": "2d71dfd5.d0012",
        "type": "inject",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": "10",
        "x": 270,
        "y": 520,
        "wires": [
            [
                "9fed95c1.655638"
            ]
        ]
    },
    {
        "id": "2dc22e8d.c4bbd2",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1150,
        "y": 640,
        "wires": []
    },
    {
        "id": "2045e47f.324a8c",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Updating Notice",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "notice",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Update Modules",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1220,
        "y": 500,
        "wires": [
            [
                "4ad60835.72eb38"
            ]
        ]
    },
    {
        "id": "e934ecd8.d8f47",
        "type": "http request",
        "z": "de72cd33.d0bc",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 350,
        "y": 360,
        "wires": [
            [
                "bd1976.0bc2e688"
            ]
        ]
    },
    {
        "id": "a6584227.af16d",
        "type": "function",
        "z": "de72cd33.d0bc",
        "name": "Get History Data",
        "func": "msg.url = 'http://' + msg.payload + ':8080/history_data';\nmsg.headers ={'content-type':'text/javascript' };\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 320,
        "wires": [
            [
                "e934ecd8.d8f47"
            ]
        ]
    },
    {
        "id": "f15d0f2c.85c6b",
        "type": "ui_list",
        "z": "de72cd33.d0bc",
        "group": "d93a6b1c.d9e2e8",
        "name": "Node History",
        "order": 2,
        "width": "12",
        "height": "10",
        "lineType": "one",
        "actionType": "menu",
        "allowHTML": true,
        "x": 470,
        "y": 520,
        "wires": [
            [
                "754c0572.d2d74c",
                "db68af68.0784a"
            ]
        ]
    },
    {
        "id": "bc3ffd46.35405",
        "type": "function",
        "z": "de72cd33.d0bc",
        "name": "Format List",
        "func": "var inData = msg.payload;\n\nvar out = [];\nif (inData === undefined || inData.length === 0) {\n    out.push({\n        title : \"No Data Received\"\n    });\n} else {\n    for (var i in inData) {\n        var status= inData[i][1].match(/^([^\\:]+)/);\n        //inData[i][1]\n        var buffer = \n            status[0] + '<br/>' +\n            '<small>' +\n                '<strong>TIME:</strong>' + inData[i][0].TIME + '<br/>' +\n                '<strong>MAC:</strong>' + inData[i][0].MAC + '<br/>' +\n                '<strong>Signal:</strong>' + inData[i][0].RSSI + '<br/>' +\n                '<strong>UID:</strong>' + inData[i][0].UID + '<br/>' +\n                '<strong>DATA:</strong>' + inData[i][0].DATA + '<hr />' +\n            '</small>';\n        out.push({\n            title : buffer,\n            description: inData[i][0],\n            menu : [\"Resend\",\"See Details\"],\n            history_id : i,\n            ip : inData[i][0].IP,\n            notes: inData[i][1]\n        });\n    }\n}\nmsg.payload = out;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 390,
        "y": 480,
        "wires": [
            [
                "f15d0f2c.85c6b"
            ]
        ]
    },
    {
        "id": "f7496a5.3234698",
        "type": "inject",
        "z": "de72cd33.d0bc",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 130,
        "y": 240,
        "wires": [
            [
                "45dfb1bb.c3615"
            ]
        ]
    },
    {
        "id": "f9148982.51c698",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Set Flow IP",
        "rules": [
            {
                "t": "set",
                "p": "ip",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 370,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "45dfb1bb.c3615",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Get Flow IP",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "ip",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 280,
        "wires": [
            [
                "ed1d99d1.d840e8"
            ]
        ]
    },
    {
        "id": "ed1d99d1.d840e8",
        "type": "switch",
        "z": "de72cd33.d0bc",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 1,
        "x": 450,
        "y": 280,
        "wires": [
            [
                "a6584227.af16d"
            ]
        ]
    },
    {
        "id": "ad39e18a.1bfb7",
        "type": "function",
        "z": "de72cd33.d0bc",
        "name": "Resend History",
        "func": "msg.url = 'http://' + msg.payload.ip + ':8080/resend?history=' + msg.payload.history_id;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 580,
        "wires": [
            [
                "16dedec9.3fe311",
                "19b72d55.670623"
            ]
        ]
    },
    {
        "id": "16dedec9.3fe311",
        "type": "http request",
        "z": "de72cd33.d0bc",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 530,
        "y": 640,
        "wires": [
            [
                "a4c458d0.7ffe38"
            ]
        ]
    },
    {
        "id": "19b72d55.670623",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Resend Notice",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Resending Message",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Resend",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 920,
        "y": 540,
        "wires": [
            [
                "4ba9673a.c0c578"
            ]
        ]
    },
    {
        "id": "4ba9673a.c0c578",
        "type": "ui_toast",
        "z": "de72cd33.d0bc",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1230,
        "y": 640,
        "wires": []
    },
    {
        "id": "a4c458d0.7ffe38",
        "type": "switch",
        "z": "de72cd33.d0bc",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "gte",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 4,
        "x": 730,
        "y": 640,
        "wires": [
            [
                "fc74a717.9d65a8"
            ],
            [
                "f83b8eea.97e57"
            ],
            [
                "8f83ff33.5981c"
            ],
            [
                "2f027c8.3c7cc84"
            ]
        ]
    },
    {
        "id": "2f027c8.3c7cc84",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "No Response",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Unable to resend.  No Response",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Resend",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 920,
        "y": 700,
        "wires": [
            [
                "4ba9673a.c0c578"
            ]
        ]
    },
    {
        "id": "8f83ff33.5981c",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Success",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Message Resent",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Resend",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 900,
        "y": 660,
        "wires": [
            [
                "4ba9673a.c0c578"
            ]
        ]
    },
    {
        "id": "f83b8eea.97e57",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Page Not Found",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Page Not Found",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Resend",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 920,
        "y": 620,
        "wires": [
            [
                "4ba9673a.c0c578"
            ]
        ]
    },
    {
        "id": "fc74a717.9d65a8",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "HTTP Error",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed to send message",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Resed",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 580,
        "wires": [
            [
                "4ba9673a.c0c578"
            ]
        ]
    },
    {
        "id": "fbfb003.14577",
        "type": "inject",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 110,
        "y": 380,
        "wires": [
            [
                "1658cd8e.e99cb2",
                "485b2e60.42677",
                "8586a5d5.fa8178"
            ]
        ]
    },
    {
        "id": "17537b54.bc1095",
        "type": "ui_ui_control",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "x": 1400,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "f83c98d4.e446b8",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Hide OpenRSD Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"hide\":[\"openrsd\"],\"disable\":[\"openrsd\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "OPENRSD_ENABLED",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1070,
        "y": 360,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "9d089e5e.90ecb",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Hide phpMyAdmin Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"hide\":[\"phpmyadmin\"],\"disable\":[\"phpmyadmin\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "PHPMYADMIN_ENABLED",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1080,
        "y": 440,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "6bc44f65.6a8c5",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Hide JMRI Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"hide\":[\"jmri\"],\"disable\":[\"jmri\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "JMRI_ENABLED",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1060,
        "y": 520,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "8586a5d5.fa8178",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Make OpenRSD URL",
        "func": "var IP = global.get('IP');\nmsg.url = \"http://\" + IP.internalIPv4 + '/openrsd';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 480,
        "y": 380,
        "wires": [
            [
                "38ccee17.2a19e2"
            ]
        ]
    },
    {
        "id": "38ccee17.2a19e2",
        "type": "http request",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "authType": "basic",
        "x": 690,
        "y": 380,
        "wires": [
            [
                "48fba23e.2bfeac"
            ]
        ]
    },
    {
        "id": "485b2e60.42677",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Make phpMyAdmin URL",
        "func": "var IP = global.get('IP');\nmsg.url = \"http://\" + IP.internalIPv4 + '/phpmyadmin';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 420,
        "wires": [
            [
                "832d51f1.fe01a"
            ]
        ]
    },
    {
        "id": "832d51f1.fe01a",
        "type": "http request",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "authType": "basic",
        "x": 690,
        "y": 420,
        "wires": [
            [
                "618acb56.9817f4"
            ]
        ]
    },
    {
        "id": "618acb56.9817f4",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 850,
        "y": 420,
        "wires": [
            [
                "9d1ae9f2.015d08"
            ],
            [
                "9d089e5e.90ecb"
            ]
        ]
    },
    {
        "id": "b7691c32.91e9",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Make JMRI URL",
        "func": "var IP = global.get('IP');\nvar JMRI_Config = global.get('JMRI_Config');\nmsg.url = JMRI_Config.JMRI_Web.replace('{{IP}}',IP.internalIPv4);\nglobal.set('JMRI_URL',msg.url);\nglobal.set('JMRI_OPS_URL',msg.url +'operations/trains');\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 460,
        "y": 460,
        "wires": [
            [
                "166cc3c9.4daa9c"
            ]
        ]
    },
    {
        "id": "166cc3c9.4daa9c",
        "type": "http request",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 690,
        "y": 460,
        "wires": [
            [
                "cbb60e9f.4986e"
            ]
        ]
    },
    {
        "id": "cbb60e9f.4986e",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 850,
        "y": 460,
        "wires": [
            [
                "abb88f0b.bd024"
            ],
            [
                "6bc44f65.6a8c5"
            ]
        ]
    },
    {
        "id": "1658cd8e.e99cb2",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "Check JMRI Toggle",
        "property": "JMRI_Config.JMRI_ENABLED",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 250,
        "y": 520,
        "wires": [
            [
                "b7691c32.91e9"
            ],
            [
                "6bc44f65.6a8c5"
            ]
        ]
    },
    {
        "id": "ff5472a3.dc3f6",
        "type": "debug",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1390,
        "y": 320,
        "wires": []
    },
    {
        "id": "48fba23e.2bfeac",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 850,
        "y": 380,
        "wires": [
            [
                "b3162cb0.8a30e"
            ],
            [
                "f83c98d4.e446b8"
            ]
        ]
    },
    {
        "id": "b3162cb0.8a30e",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Show OpenRSD Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"show\":[\"openrsd\"],\"enable\":[\"openrsd\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "OPENRSD_ENABLED",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1080,
        "y": 320,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "9d1ae9f2.015d08",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Show phpMyAdmin Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"show\":[\"phpmyadmin\"],\"enable\":[\"phpmyadmin\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "PHPMYADMIN_ENABLED",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1090,
        "y": 400,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "abb88f0b.bd024",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Show JMRI Tab",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tabs\":{\"show\":[\"jmri\"],\"enable\":[\"jmri\"]}}",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "JMRI_ENABLED",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1060,
        "y": 480,
        "wires": [
            [
                "17537b54.bc1095",
                "ff5472a3.dc3f6"
            ]
        ]
    },
    {
        "id": "c03ebe92.1f1ad",
        "type": "link in",
        "z": "f1ec9b2a.1f7298",
        "name": "JMRI Toggle Link iLink",
        "links": [
            "1f35f075.13291"
        ],
        "x": 95,
        "y": 520,
        "wires": [
            [
                "1658cd8e.e99cb2"
            ]
        ]
    },
    {
        "id": "1f35f075.13291",
        "type": "link out",
        "z": "ed0209cc.523aa8",
        "name": "JMRI Toggle Link oLink",
        "links": [
            "c03ebe92.1f1ad"
        ],
        "x": 975,
        "y": 160,
        "wires": []
    },
    {
        "id": "b4f7b12.29c705",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "Is JMRI Enabled",
        "property": "JMRI_ENABLED",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 600,
        "y": 180,
        "wires": [
            [
                "7f66e017.f90e1"
            ],
            [
                "c9debb12.f2aa48"
            ]
        ]
    },
    {
        "id": "b1e60b01.5f1548",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "Is phpMyAdmin Enabled",
        "property": "PHPMYADMIN_ENABLED",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 630,
        "y": 140,
        "wires": [
            [
                "86aa8688.67b188"
            ],
            [
                "c9debb12.f2aa48"
            ]
        ]
    },
    {
        "id": "500b5452.219f4c",
        "type": "switch",
        "z": "f1ec9b2a.1f7298",
        "name": "Is OpenRSD Enabled",
        "property": "OPENRSD_ENABLED",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 620,
        "y": 100,
        "wires": [
            [
                "f27066a1.a44ba8"
            ],
            [
                "c9debb12.f2aa48"
            ]
        ]
    },
    {
        "id": "c9debb12.f2aa48",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set Not Available",
        "func": "delete msg.payload;\n\nvar IP = global.get('IP');\nmsg.statusCode = 302;\nmsg.headers = {\n    \"Location\" : 'http://'  + IP.internalIPv4 +'/notavailable.html'\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 280,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "d7c57529.0d4a48",
        "type": "ui_list",
        "z": "e5ec0709.570938",
        "group": "f5495812.6a3bb8",
        "name": "Services",
        "order": 0,
        "width": "18",
        "height": "8",
        "lineType": "one",
        "actionType": "menu",
        "allowHTML": true,
        "x": 160,
        "y": 120,
        "wires": [
            [
                "fb7f29d3.860898",
                "f404518b.68585",
                "6f09d0df.e8107"
            ]
        ]
    },
    {
        "id": "bc7ab0a1.fd039",
        "type": "inject",
        "z": "e5ec0709.570938",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "15",
        "crontab": "",
        "once": true,
        "onceDelay": "10",
        "x": 110,
        "y": 40,
        "wires": [
            [
                "5297946e.728bec"
            ]
        ]
    },
    {
        "id": "5297946e.728bec",
        "type": "function-npm",
        "z": "e5ec0709.570938",
        "name": "",
        "func": "var _ = global.get('_');\nvar gatewayInfo = global.get('gatewayInfo');\nmsg.payload = [];\n    \nvar services = {};\nif (gatewayInfo['services'] !== undefined) {\n    services = gatewayInfo['services'];\n}\nif (services === undefined ) {\n    msg.payload.push({ 'title' : 'Service list is not available' });\n    \n} else {\n    var serviceList =_.orderBy(services,['description']);\n    for (var i in serviceList) {\n        var menu = [];\n        var icon_name = '';\n        switch (serviceList[i].SUB) {\n            case 'listening':\n                icon_name = 'hearing';\n                menu.push('Stop','Restart');\n                break;\n            case 'waiting':\n                icon_name = 'hourglass_empty';\n                menu.push('Stop','Restart');\n                break;\n            case 'running':\n                icon_name ='check_circle';\n                menu.push('Stop','Restart');\n                break;\n            case 'active':\n                icon_name ='check_circle';\n                menu.push('Stop','Restart');\n                break;\n            case 'failed':\n                icon_name = 'error_outline';\n                menu.push('Start');\n                break;\n            case 'exited':\n                icon_name='not_interested';\n                menu.push('Start');\n                break;\n            case 'plugged':\n                menu.push('Eject');\n                icon_name = \"eject\";\n                break;\n            case 'mounted': \n                menu.push('Unmount');\n                icon_name = \"eject\";\n                break;\n        }\n        if (serviceList[i].serviceName === 'boot.mount') {\n            menu = null;\n        }\n        msg.payload.push({ \n            'title' : serviceList[i].description,\n            'menu' : menu,\n            'icon_name' : icon_name,\n            'serviceName' : serviceList[i].serviceName\n        });\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 110,
        "y": 80,
        "wires": [
            [
                "d7c57529.0d4a48"
            ]
        ]
    },
    {
        "id": "fb7f29d3.860898",
        "type": "function",
        "z": "e5ec0709.570938",
        "name": "",
        "func": "var inPayload=msg.payload;\nvar verb='';\nswitch (inPayload.selected) {\n    case 'Start':\n        verb = 'start';\n        break;\n    case 'Restart':\n        verb = 'restart';\n        break;\n    default:\n        verb = 'stop';\n}\n\n\nflow.set('action',inPayload.selected);\nflow.set('serviceName',inPayload.serviceName);\n\nmsg.payload = verb + ' ' + inPayload.serviceName;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 190,
        "y": 160,
        "wires": [
            [
                "522c62c7.6a3e3c"
            ]
        ]
    },
    {
        "id": "f404518b.68585",
        "type": "debug",
        "z": "e5ec0709.570938",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 330,
        "y": 120,
        "wires": []
    },
    {
        "id": "522c62c7.6a3e3c",
        "type": "exec",
        "z": "e5ec0709.570938",
        "command": "sudo systemctl",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 260,
        "y": 220,
        "wires": [
            [],
            [],
            [
                "7175628.a53479c"
            ]
        ]
    },
    {
        "id": "6f09d0df.e8107",
        "type": "function",
        "z": "e5ec0709.570938",
        "name": "Create System Message",
        "func": "var inPayload = msg.payload;\nmsg.payload =inPayload.selected + ' ' + inPayload.serviceName;\nmsg.topic = 'System Command';\nmsg.highlight = 'orange';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 390,
        "y": 80,
        "wires": [
            [
                "e16c7e84.1c1f5"
            ]
        ]
    },
    {
        "id": "e16c7e84.1c1f5",
        "type": "ui_toast",
        "z": "e5ec0709.570938",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 950,
        "y": 80,
        "wires": []
    },
    {
        "id": "55b3dff6.2ae17",
        "type": "function",
        "z": "e5ec0709.570938",
        "name": "Create Success Message",
        "func": "var action = flow.get('action');\nvar serviceName = flow.get('serviceName');\nmsg.payload =action + 'ed ' + serviceName;\nmsg.topic = 'System Command';\nmsg.highlight = 'green';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 200,
        "wires": [
            [
                "e16c7e84.1c1f5"
            ]
        ]
    },
    {
        "id": "257ace74.73c632",
        "type": "function",
        "z": "e5ec0709.570938",
        "name": "Create Failed Message",
        "func": "var action = flow.get('action');\nvar serviceName = flow.get('serviceName');\nmsg.payload = 'Failed to ' + action + ' ' + serviceName;\nmsg.topic = 'System Command';\nmsg.highlight = 'red';\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 240,
        "wires": [
            [
                "e16c7e84.1c1f5"
            ]
        ]
    },
    {
        "id": "7175628.a53479c",
        "type": "switch",
        "z": "e5ec0709.570938",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 430,
        "y": 220,
        "wires": [
            [
                "55b3dff6.2ae17"
            ],
            [
                "257ace74.73c632"
            ]
        ]
    },
    {
        "id": "5e3f873c.631bc8",
        "type": "link in",
        "z": "de72cd33.d0bc",
        "name": "Node History iLink",
        "links": [
            "68c172c3.71484c"
        ],
        "x": 55,
        "y": 280,
        "wires": [
            [
                "cfa94c0e.fd54f"
            ]
        ]
    },
    {
        "id": "cfa94c0e.fd54f",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Set IP to Flow",
        "rules": [
            {
                "t": "set",
                "p": "ip",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "{\"tab\":\"Node History\"}",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 120,
        "y": 320,
        "wires": [
            [
                "45dfb1bb.c3615",
                "931f3aa.595e5c8"
            ]
        ]
    },
    {
        "id": "931f3aa.595e5c8",
        "type": "ui_ui_control",
        "z": "de72cd33.d0bc",
        "name": "",
        "x": 140,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "68c172c3.71484c",
        "type": "link out",
        "z": "7b5cf843.8f8fc8",
        "name": "Node History oLink",
        "links": [
            "5e3f873c.631bc8"
        ],
        "x": 895,
        "y": 820,
        "wires": []
    },
    {
        "id": "9c780fce.f264e",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "Set IP",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.data.IP",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 790,
        "y": 820,
        "wires": [
            [
                "68c172c3.71484c"
            ]
        ]
    },
    {
        "id": "8991baef.ba75c",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Setup Command",
        "func": "//  sudo ./hiveid_setup_wifi2eth.sh IP_PREFIX PASSWORD\nmsg.payload =   \" -s=\\\"\" + flow.get('AP.SSID') + \"\\\"\" +\n                \" -i=\" + flow.get('AP.NETWORK') +\n                //\" -gip=\" + flow.get('AP.IP') + \n                //\" -gif=\" + flow.get('AP.IFACE') +\n                \" -p=\\\"\" + flow.get('AP.PASSPHRASE') + \"\\\"\" +\n                //\" -ips=\" + flow.get('AP.IP_START') +\n                //\" -ipe=\" + flow.get('AP.IP_END') +\n                \" -gwc=\" + flow.get('AP.CHANNEL') +\n                //\" -k=\" + flow.get('AP.KEY_MGMT') +\n                //\" -wan=\" + flow.get('Client.WAN_IFACE') +\n                \"\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 1000,
        "wires": [
            [
                "f310e9f5.ec92e8"
            ]
        ]
    },
    {
        "id": "9421521f.fba71",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Setup Command",
        "func": "var CC = flow.get('Client.WAN_WIFI_CC');\nmsg.payload = 'ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\\n' +\n              'update_config=1\\n' +\n              'country=' + CC + '\\n';\n              \nvar wifiNetworks = flow.get('wifi_networks');\n\nfor (var i in wifiNetworks) { \n    msg.payload +=  'network = {\\n' +\n                    '   ssid=\"'     + wifiNetworks[i].ssid      + '\"\\n' + \n                    '   psk=\"'      + wifiNetworks[i].psk       + '\"\\n' + \n                    '   key_mgmt=\"' + wifiNetworks[i].key_mgmt  + '\"\\n' +\n                    '}\\n\\n';\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 450,
        "y": 1340,
        "wires": [
            [
                "63a35640.90a808"
            ]
        ]
    },
    {
        "id": "60b76959.e5b748",
        "type": "exec",
        "z": "9745920.d8a397",
        "command": "sudo cp /usr/local/hiveid-ap/wpa_supplicant.conf /etc/wpa_supplicant/.",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1240,
        "y": 1340,
        "wires": [
            [],
            [],
            [
                "36367d64.09fafa"
            ]
        ]
    },
    {
        "id": "ad579c1a.055678",
        "type": "ui_toast",
        "z": "9745920.d8a397",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1990,
        "y": 1080,
        "wires": []
    },
    {
        "id": "36367d64.09fafa",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1630,
        "y": 1060,
        "wires": [
            [
                "acd4a1d3.1b2d1",
                "fab46a1c.2078f"
            ],
            [
                "e9b12a4b.effa5"
            ]
        ]
    },
    {
        "id": "fab46a1c.2078f",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Success",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Success",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Network Changes Complete",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1800,
        "y": 1040,
        "wires": [
            [
                "ad579c1a.055678",
                "de4995db.6ad218"
            ]
        ]
    },
    {
        "id": "e9b12a4b.effa5",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Failed",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Failed",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Network Changes Failed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1790,
        "y": 1120,
        "wires": [
            [
                "ad579c1a.055678"
            ]
        ]
    },
    {
        "id": "fbdfdfbf.f407a",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Update IP Network",
        "rules": [
            {
                "t": "set",
                "p": "AP.NETWORK",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1350,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "94906fa9.19fb88",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set Flow for WiFi2WiFi",
        "func": "var gatewayInfo = global.get('gatewayInfo');\nflow.set('mode','wifi2wifi');\n\nif (gatewayInfo === undefined || gatewayInfo.gateway === undefined) {\n    flow.set('AP.WAN', 'wlan1');\n    flow.set('AP.LAN', 'wlan0');\n} else {\n    if (gatewayInfo.gateway.wan === undefined ) {\n        flow.set('AP.WAN','wlan1');\n    } else {\n        if (gatewayInfo.gateway.wan.type === 'wifi' ) {\n           flow.set('AP.WAN', 'wlan1');   \n        } else {\n            flow.set('AP.WAN', gatewayInfo.gateway.wan.iface);\n        }\n    }\n    if (gatewayInfo.gateway.lan === undefined) {\n        flow.set('AP.LAN', 'wlan0');\n    } else {\n        flow.set('AP.LAN', gatewayInfo.gateway.lan.iface);\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 600,
        "y": 480,
        "wires": [
            [
                "c1fa0bab.e36ec8"
            ]
        ]
    },
    {
        "id": "8b1d208.d34f7e",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Setup Mode Options",
        "func": "var gatewayInfo = global.get('gatewayInfo');\n\nwhile (gatewayInfo === undefined ) {\n}\n//Set Defaults\nflow.set('AP', {\n   WAN : 'eth0',\n   LAN: 'wlan0', \n   NETWORK : '192.168.6',\n   CHANNEL : 'acs_survey', \n   SSID : gatewayInfo.hostname,\n   PASSPHRASE : 'password' \n});\nvar mode = gatewayInfo.gateway.mode;\n\nmsg.options=[];\nif (mode === undefined) {\n    mode = 'client';\n}\nflow.set('mode',mode);\n\nif (gatewayInfo.interfaces['wlan0'] !== undefined) {\n    msg.options.push({\"Client Only\" : \"client\" });\n    if (gatewayInfo.interfaces['wlan1'] !== undefined) {\n        msg.options.push({\"WiFi to WiFi\" : \"wifi2wifi\"});\n    }    \n    if (gatewayInfo.interfaces['eth0'] !== undefined) {\n        msg.options.push({\"WiFi to Ethernet\" : \"wifi2eth\"});\n    }\n}\nmsg.payload = mode;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 560,
        "wires": [
            [
                "49f70c72.4b3914"
            ]
        ]
    },
    {
        "id": "63a35640.90a808",
        "type": "file",
        "z": "9745920.d8a397",
        "name": "",
        "filename": "/usr/local/hiveid-ap/wpa_supplicant.conf",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 740,
        "y": 1340,
        "wires": [
            [
                "60b76959.e5b748"
            ]
        ]
    },
    {
        "id": "d6213820.be50e8",
        "type": "ui_list",
        "z": "9745920.d8a397",
        "group": "affe8d30.ff20f8",
        "name": "Network List",
        "order": 1,
        "width": "8",
        "height": "8",
        "lineType": "one",
        "actionType": "menu",
        "allowHTML": true,
        "x": 1810,
        "y": 520,
        "wires": [
            [
                "992790b8.d928b8"
            ]
        ]
    },
    {
        "id": "d2bf240f.7728a8",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Build Network List",
        "func": "var wifiNetworks = flow.get('wifi_networks');\nmsg.payload = [];\nif (wifiNetworks === undefined ) {\n    msg.payload.push( { title : \"<strong>No Networks Configured</strong\" });\n} else {\n    if (wifiNetworks.length === 0) { \n        msg.payload.push( { title : \"<strong>No Networks Configured</strong\" });\n    } else {\n        for (var i=0;i<wifiNetworks.length;i++) { \n            var menuItems = [];\n            if (i > 0) {\n                menuItems.push('Move Up');\n            } \n            if (wifiNetworks.length > 1 && i < wifiNetworks.length-1) {\n                menuItems.push('Move Down');\n            }\n            if (wifiNetworks.length > 1) {\n                menuItems.push('Delete');\n            }\n            menuItems.push('Edit');\n            msg.payload.push( {\n                title   :   '<strong>SSID</strong>: ' + wifiNetworks[i].ssid+ '<br/>' + \n                            '<strong>Passphrase</strong>: ' + String(\"*\").repeat(wifiNetworks[i].psk.length)+ '<br/>' + \n                            '<strong>Encryption </strong>: ' +  wifiNetworks[i].key_mgmt+ '<br/>' + \n                            '<hr/>',\n                menu    :   menuItems,\n                pos     :   i\n            });\n        }\n    }\n} \n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1770,
        "y": 480,
        "wires": [
            [
                "d6213820.be50e8"
            ]
        ]
    },
    {
        "id": "aaae695a.b63e28",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set Flow for WiFi2Eth",
        "func": "var gatewayInfo = global.get('gatewayInfo');\nflow.set('mode','wifi2eth');\nif (gatewayInfo === undefined || gatewayInfo.gateway === undefined) {\n    flow.set('AP.WAN', 'eth0');\n    flow.set('AP.LAN', 'wlan0');\n} else {\n    if (gatewayInfo.gateway.wan === undefined ) {\n        flow.set('AP.WAN','eth0');\n    } else {\n        if (gatewayInfo.gateway.wan.type === 'eth' ) {\n           flow.set('AP.WAN', 'eth0');   \n        } else {\n            flow.set('AP.WAN', gatewayInfo.gateway.wan.iface);\n        }\n    }\n    if (gatewayInfo.gateway.lan === undefined) {\n        flow.set('AP.LAN', 'wlan0');\n    } else {\n        flow.set('AP.LAN', gatewayInfo.gateway.lan.iface);\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 600,
        "y": 580,
        "wires": [
            [
                "69f0edc8.770fb4"
            ]
        ]
    },
    {
        "id": "92c527fb.83854",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set Flow for Client",
        "func": "var gatewayInfo = global.get('gatewayInfo');\nflow.set('mode','client');\nif (gatewayInfo.gateway === undefined) {\n    flow.set('AP.WAN', null);\n    flow.set('AP.LAN', null);\n} else {\n    flow.set('AP.WAN', null);   \n    flow.set('AP.LAN', null);\n    flow.set('AP.NETWORK', null);\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 680,
        "wires": [
            [
                "7dd85809.d05ae8"
            ]
        ]
    },
    {
        "id": "2553d537.6bae72",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "Client SSID",
        "label": "Client SSID",
        "tooltip": "",
        "group": "8b01491a.1965e8",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 1690,
        "y": 620,
        "wires": [
            [
                "fb7f8aa9.d1a0c8"
            ]
        ]
    },
    {
        "id": "992790b8.d928b8",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload.selected",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Move Up",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Move Down",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Delete",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Edit",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 5,
        "x": 1830,
        "y": 580,
        "wires": [
            [
                "b5a1a78a.119f28"
            ],
            [
                "ebe0dd7d.136c68"
            ],
            [
                "e1c849bd.6f805"
            ],
            [
                "b863f4fd.de45a8"
            ],
            [
                "a4b39098.f97af"
            ]
        ]
    },
    {
        "id": "88a8cb0d.cc417",
        "type": "ui_dropdown",
        "z": "9745920.d8a397",
        "name": "Security Mode",
        "label": "Security Mode",
        "tooltip": "",
        "place": "Select option",
        "group": "8b01491a.1965e8",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "options": [
            {
                "label": "WPA-PSK",
                "value": "WPA-PSK",
                "type": "str"
            },
            {
                "label": "WPA-EAP",
                "value": "WPA-EAP",
                "type": "str"
            },
            {
                "label": "IEEE8021x",
                "value": "IEEE8021x",
                "type": "str"
            },
            {
                "label": "NONE",
                "value": "NONE",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 2340,
        "y": 800,
        "wires": [
            [
                "bd9072cd.a3d33"
            ]
        ]
    },
    {
        "id": "bd9072cd.a3d33",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "set Client.WAN_KEY_MGMT",
        "rules": [
            {
                "t": "set",
                "p": "Client.WAN_KEY_MGMT",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2420,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "f4e790c3.9bf6e8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Security Mode",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "WPA-PSK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2300,
        "y": 760,
        "wires": [
            [
                "88a8cb0d.cc417"
            ]
        ]
    },
    {
        "id": "cae04228.5509f8",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 2250,
        "y": 720,
        "wires": [
            [
                "f4e790c3.9bf6e8"
            ]
        ]
    },
    {
        "id": "a945392c.afa13",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "Commit Client Changes",
        "group": "affe8d30.ff20f8",
        "order": 4,
        "width": "4",
        "height": "1",
        "passthru": true,
        "label": "Commit Client Changes",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-save",
        "payload": "Are you sure you want to make changes?",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 1340,
        "wires": [
            [
                "9421521f.fba71"
            ]
        ]
    },
    {
        "id": "b5a1a78a.119f28",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Move Up",
        "func": "var wifiNetworks = flow.get('wifi_networks');\nvar temp = wifiNetworks.splice(msg.payload.pos,1);\nwifiNetworks.splice(msg.payload.pos-1,0,temp[0]);\nflow.set('wifi_networks',wifiNetworks);\n\nmsg.payload = wifiNetworks;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2040,
        "y": 480,
        "wires": [
            [
                "45696e5e.9f896"
            ]
        ]
    },
    {
        "id": "ebe0dd7d.136c68",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Move Down",
        "func": "var wifiNetworks = flow.get('wifi_networks');\nvar temp = wifiNetworks.splice(msg.payload.pos,1);\nwifiNetworks.splice(msg.payload.pos+1,0,temp[0]);\nflow.set('wifi_networks',wifiNetworks);\n\nmsg.payload = wifiNetworks;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2050,
        "y": 520,
        "wires": [
            [
                "45696e5e.9f896"
            ]
        ]
    },
    {
        "id": "e1c849bd.6f805",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Delete",
        "func": "var wifiNetworks = flow.get('wifi_networks');\nwifiNetworks.splice(msg.payload.pos,1);\nflow.set('wifi_networks',wifiNetworks);\nmsg.payload = wifiNetworks;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2030,
        "y": 560,
        "wires": [
            [
                "45696e5e.9f896"
            ]
        ]
    },
    {
        "id": "b863f4fd.de45a8",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Edit",
        "func": "var wifiNetworks = flow.get('wifi_networks');\ncurNetwork = wifiNetworks[msg.payload.pos];\nvar msg1 = { payload : curNetwork['ssid']};\nvar msg2 = { payload : curNetwork['psk']};\nvar msg3 = { payload : curNetwork['key_mgmt']};\n\nreturn [msg1,msg2,msg3];",
        "outputs": 3,
        "noerr": 0,
        "x": 2030,
        "y": 620,
        "wires": [
            [
                "2553d537.6bae72"
            ],
            [
                "57136e46.8c841"
            ],
            [
                "88a8cb0d.cc417"
            ]
        ]
    },
    {
        "id": "a4b39098.f97af",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Not Available",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Feature Not Available",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Notice",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2050,
        "y": 680,
        "wires": [
            [
                "86f123e.fab886"
            ]
        ]
    },
    {
        "id": "86f123e.fab886",
        "type": "ui_toast",
        "z": "9745920.d8a397",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 2250,
        "y": 680,
        "wires": []
    },
    {
        "id": "b7cd8110.dac328",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "Clear Networks",
        "group": "affe8d30.ff20f8",
        "order": 2,
        "width": "4",
        "height": "1",
        "passthru": false,
        "label": "Clear Networks",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-trash",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 1760,
        "y": 320,
        "wires": [
            [
                "4c287099.873618"
            ]
        ]
    },
    {
        "id": "4c287099.873618",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "wifi_networks",
                "pt": "flow",
                "to": "[]",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2010,
        "y": 320,
        "wires": [
            [
                "45696e5e.9f896"
            ]
        ]
    },
    {
        "id": "fd94265b.c31f88",
        "type": "exec",
        "z": "9745920.d8a397",
        "command": "/opt/hiveid-ap/hiveid_setup_client.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1310,
        "y": 1120,
        "wires": [
            [],
            [],
            [
                "b5847f86.9b6b8"
            ]
        ]
    },
    {
        "id": "b5847f86.9b6b8",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 450,
        "y": 1260,
        "wires": [
            [
                "9421521f.fba71"
            ],
            [
                "67c51b99.156844"
            ]
        ]
    },
    {
        "id": "67c51b99.156844",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Failed",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Failed",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Failed to change to Client Mode",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1790,
        "y": 1260,
        "wires": [
            [
                "ad579c1a.055678"
            ]
        ]
    },
    {
        "id": "3f5cd993.aaeaa6",
        "type": "watch",
        "z": "a06855ce.9f5488",
        "name": "",
        "files": "/opt/hiveid-ap/nodered/scripts/gatewayInfo.php",
        "recursive": "",
        "x": 200,
        "y": 1480,
        "wires": [
            [
                "d80dbb05.2032d8"
            ]
        ]
    },
    {
        "id": "15371b85.ea9044",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.title",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1500,
        "y": 620,
        "wires": [
            [
                "2553d537.6bae72"
            ]
        ]
    },
    {
        "id": "45696e5e.9f896",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Rebuild",
        "func": "\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1700,
        "y": 400,
        "wires": [
            [
                "d2bf240f.7728a8"
            ]
        ]
    },
    {
        "id": "43bd3df4.753fa4",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "30",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 650,
        "y": 760,
        "wires": [
            [
                "18316d6a.0b7ff3"
            ]
        ]
    },
    {
        "id": "af6a3135.8e4cf",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Set Password",
        "func": "msg.payload = '\"' + msg.payload.PASSWORD + '\"';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 1260,
        "wires": [
            [
                "367077e4.def7a8"
            ]
        ]
    },
    {
        "id": "aa288074.16ba6",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "",
        "label": "Passphrase",
        "tooltip": "",
        "group": "92534c08.7fb13",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "password",
        "delay": "0",
        "topic": "",
        "x": 1150,
        "y": 520,
        "wires": [
            [
                "18cdedff.4f3582",
                "cf1daaf5.782b28"
            ]
        ]
    },
    {
        "id": "696d72e4.693a7c",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "",
        "label": "SSID",
        "tooltip": "",
        "group": "92534c08.7fb13",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 1130,
        "y": 480,
        "wires": [
            [
                "4e77f5a5.79a54c",
                "cf1daaf5.782b28"
            ]
        ]
    },
    {
        "id": "622978c3.ef9878",
        "type": "ui_dropdown",
        "z": "9745920.d8a397",
        "name": "",
        "label": "Channel",
        "tooltip": "",
        "place": "Select option",
        "group": "92534c08.7fb13",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "options": [
            {
                "label": "1*",
                "value": "1",
                "type": "str"
            },
            {
                "label": "2",
                "value": "2",
                "type": "str"
            },
            {
                "label": "3",
                "value": "3",
                "type": "str"
            },
            {
                "label": "4",
                "value": "4",
                "type": "str"
            },
            {
                "label": "5",
                "value": "5",
                "type": "str"
            },
            {
                "label": "6*",
                "value": "6",
                "type": "str"
            },
            {
                "label": "7",
                "value": "7",
                "type": "str"
            },
            {
                "label": "8",
                "value": "8",
                "type": "str"
            },
            {
                "label": "9",
                "value": "9",
                "type": "str"
            },
            {
                "label": "10",
                "value": "10",
                "type": "str"
            },
            {
                "label": "11*",
                "value": "11",
                "type": "str"
            },
            {
                "label": "12",
                "value": "12",
                "type": "str"
            },
            {
                "label": "13",
                "value": "13",
                "type": "str"
            },
            {
                "label": "Auto Channel",
                "value": "acs_survey",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 1140,
        "y": 440,
        "wires": [
            [
                "a98e6a09.ccb3c8",
                "cf1daaf5.782b28"
            ]
        ]
    },
    {
        "id": "cf1daaf5.782b28",
        "type": "debug",
        "z": "9745920.d8a397",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1310,
        "y": 400,
        "wires": []
    },
    {
        "id": "a807bd57.50a54",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "IP Network",
        "label": "IP Network",
        "tooltip": "",
        "group": "92534c08.7fb13",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 1150,
        "y": 560,
        "wires": [
            [
                "fbdfdfbf.f407a",
                "cf1daaf5.782b28"
            ]
        ]
    },
    {
        "id": "1e933340.0afa8d",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "Reset",
        "group": "7491149.92351ec",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Reset",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-reload",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 680,
        "wires": [
            [
                "8b1d208.d34f7e"
            ]
        ]
    },
    {
        "id": "978f2906.85f628",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Starting Updates",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Network Mode Change",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 960,
        "wires": [
            [
                "401f3cf0.347f84"
            ]
        ]
    },
    {
        "id": "401f3cf0.347f84",
        "type": "ui_toast",
        "z": "9745920.d8a397",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1010,
        "y": 940,
        "wires": []
    },
    {
        "id": "1cc06905.03dfb7",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Cancelled",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Network Mode Change",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "orange",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 1000,
        "wires": [
            [
                "401f3cf0.347f84"
            ]
        ]
    },
    {
        "id": "b660e9ec.f878a8",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "options",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1110,
        "y": 640,
        "wires": [
            [
                "d7851c8c.0a68a"
            ]
        ]
    },
    {
        "id": "172675b5.8aa85a",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 200,
        "wires": [
            [
                "aac85b05.c667a8"
            ]
        ]
    },
    {
        "id": "7f06f936.cd37d8",
        "type": "json",
        "z": "de72cd33.d0bc",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 370,
        "y": 440,
        "wires": [
            [
                "bc3ffd46.35405"
            ]
        ]
    },
    {
        "id": "6bb207af.acc748",
        "type": "function",
        "z": "de72cd33.d0bc",
        "name": "Strip out Line Returns",
        "func": "if (typeof msg.payload === \"string\") {\n  msg.payload = String(msg.payload).replace(/\\n/g,\" \");\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 380,
        "y": 400,
        "wires": [
            [
                "7f06f936.cd37d8"
            ]
        ]
    },
    {
        "id": "bd1976.0bc2e688",
        "type": "switch",
        "z": "de72cd33.d0bc",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "500",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 3,
        "x": 610,
        "y": 360,
        "wires": [
            [
                "6bb207af.acc748"
            ],
            [
                "76410a14.88a9b4"
            ],
            [
                "f1041d8.a9ba2e"
            ]
        ]
    },
    {
        "id": "76410a14.88a9b4",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Error Occurred",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "An Error Occurred Getting History",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Error",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 800,
        "y": 340,
        "wires": [
            [
                "d92cf904.8c4698"
            ]
        ]
    },
    {
        "id": "f1041d8.a9ba2e",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "Unable to reach host",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Unable to reach host",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Error",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "d92cf904.8c4698",
        "type": "ui_toast",
        "z": "de72cd33.d0bc",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1050,
        "y": 340,
        "wires": []
    },
    {
        "id": "754c0572.d2d74c",
        "type": "switch",
        "z": "de72cd33.d0bc",
        "name": "",
        "property": "payload.selected",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "See Details",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Resend",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 650,
        "y": 520,
        "wires": [
            [
                "9c6e1dec.f83ac"
            ],
            [
                "ad39e18a.1bfb7"
            ]
        ]
    },
    {
        "id": "1fe4ff49.5cde41",
        "type": "ui_toast",
        "z": "de72cd33.d0bc",
        "position": "dialog",
        "displayTime": "3",
        "highlight": "",
        "outputs": 1,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1210,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "9c6e1dec.f83ac",
        "type": "change",
        "z": "de72cd33.d0bc",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.notes",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Details",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 920,
        "y": 500,
        "wires": [
            [
                "1fe4ff49.5cde41"
            ]
        ]
    },
    {
        "id": "db68af68.0784a",
        "type": "debug",
        "z": "de72cd33.d0bc",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 650,
        "y": 480,
        "wires": []
    },
    {
        "id": "a81a4979.06f088",
        "type": "inject",
        "z": "3d602d50.39dab2",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 540,
        "wires": [
            [
                "5ce0926d.37562c",
                "874355e1.db5228",
                "337e2284.c5ea3e",
                "d619f02a.37bcb",
                "cbce0132.b2547"
            ]
        ]
    },
    {
        "id": "deb0f6c8.09aad8",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Reporters Process",
        "func": "var RFIDRequest = msg.payload;\nvar hive = global.get('hive');\nvar JMRI_URL = global.get('JMRI_URL');\nvar reporter = hive.getReporterName(RFIDRequest.MAC);\nvar tag = hive.getTagName(RFIDRequest.UID);\nreporter['report'] = tag.name;\nreporter['comment'] = global.get('timestamp');\nvar Inv = hive.jmri.getInventoryByUID(RFIDRequest.UID);\nconsole.log('JMRI Reporters Process','reporter',reporter,'tag',tag,'Inv',Inv);\nif (Inv !== undefined && Inv.name !== undefined) {\n    reporter['value'] =  Inv.name;\n    reporter['report'] = Inv.name;\n    reporter['comment'] += ' ' + Inv.name + ' (' + tag.name + ')';\n\n    /* Remove other reporters with same name */\n    var JMRI = global.get('JMRI');\n    if (JMRI !== undefined && JMRI.reporters && JMRI.reporters.data !== undefined && JMRI.reporters.data.length > 0) {\n        for (var rID in JMRI.reporters.data) {\n            var curReporter = JMRI.reporters.data[rID];\n            if (curReporter.report === Inv.name && curReporter.name !== reporter.name) {\n                node.send( {\n                    headers : {'content-type':'application/json'},\n                    url : JMRI_URL + 'json/reporter',\n                    topic : 'reporters',\n                    verb : \"POST\",\n                    payload : {\n                       type: \"reporter\",\n                       data: {\n                           name : reporter.name,\n                           report : null,\n                           comment : \"\"\n                       }\n                    }\n                });\n            }\n        }\n    }\n}\nreporter['state'] = 2;\nvar verb = reporter.verb;\ndelete reporter.verb;\n\n\nnode.send( {\n    headers : {'content-type':'application/json'},\n    url : JMRI_URL + 'json/reporter',\n    topic : 'reporters',\n    verb : verb,\n    payload : {\n       type: \"reporter\",\n       data: reporter\n    }\n});\n\n\n\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 520,
        "wires": [
            [
                "2aac0d87.303432"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "2ad51dda.2abfc2",
        "type": "json",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 390,
        "y": 380,
        "wires": [
            [
                "17868bf3.ddc944",
                "2be808d1.3a5488"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "d1fcbae3.09c268",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Sensor Process",
        "func": "var RFIDRequest = msg.payload;\nvar curSensors = global.get('JMRI.sensors');\nvar hive = global.get('hive');\nvar JMRI_URL = global.get('JMRI_URL');\n\nvar sensor = hive.getSensorName(RFIDRequest.MAC);\nsensor.comment = global.get('timestamp');\n\nvar Inv = hive.jmri.getInventoryByUID(RFIDRequest.UID);\nif (Inv !== undefined && Inv.name !== undefined) {\n    sensor.comment += ' ' + Inv.name;\n}\nconsole.log('JMRI Sensor Process', 'sensor',sensor,'Inv',Inv);\nsensor.state = 2;\nvar verb = sensor.verb;\ndelete sensor.verb;\n\nmsg = {\n    headers :  {'content-type':'application/json'},\n    url : JMRI_URL + 'json/sensor',\n    topic : 'sensors',\n    verb : verb,\n    payload : {\n        type: 'sensor',\n        data: sensor\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 560,
        "wires": [
            [
                "2aac0d87.303432"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "39caeee1.346892",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "Is Enabled",
        "property": "JMRI_Config.JMRI_ENABLED",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 150,
        "y": 340,
        "wires": [
            [
                "d88d214d.ddf25"
            ],
            []
        ],
        "outputLabels": [
            "msg.payload.DATA",
            ""
        ]
    },
    {
        "id": "d88d214d.ddf25",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Move Data to Payload",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.DATA",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 180,
        "y": 380,
        "wires": [
            [
                "2ad51dda.2abfc2"
            ]
        ]
    },
    {
        "id": "5ce0926d.37562c",
        "type": "file in",
        "z": "3d602d50.39dab2",
        "name": "",
        "filename": "/opt/hiveid-ap/data/field_map.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "x": 620,
        "y": 780,
        "wires": [
            [
                "c05715cf.f986d8"
            ]
        ]
    },
    {
        "id": "c05715cf.f986d8",
        "type": "csv",
        "z": "3d602d50.39dab2",
        "name": "",
        "sep": ",",
        "hdrin": true,
        "hdrout": "",
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 990,
        "y": 780,
        "wires": [
            [
                "9a5cfaf0.6b0dd8"
            ]
        ]
    },
    {
        "id": "9a5cfaf0.6b0dd8",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "Set FlowMap",
        "rules": [
            {
                "t": "set",
                "p": "FlowMap",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1150,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "76fe4df1.0e87b4",
        "type": "watch",
        "z": "3d602d50.39dab2",
        "name": "",
        "files": "/opt/hiveid-ap/data/field_map.csv",
        "recursive": "",
        "x": 600,
        "y": 740,
        "wires": [
            [
                "5ce0926d.37562c"
            ]
        ]
    },
    {
        "id": "874355e1.db5228",
        "type": "function-npm",
        "z": "3d602d50.39dab2",
        "name": "Setup Flow Functions",
        "func": "var FlowMap = flow.get('FlowMap');\nvar CarTypeMap = flow.get('CarTypeMap');\nvar RoadNameMap = flow.get('RoadNameMap');\nvar ColorMap = flow.get('ColorMap');\nvar inObject = {};\ninObject.jmri2tt = function(type,key,tt_type) {\n    var myResults = \"\";\n    for (var i in FlowMap) {\n        if (    FlowMap[i].JMRI_Type !== undefined && FlowMap[i].JMRI_Type.toLowerCase() === type.toLowerCase() &&\n                FlowMap[i].JMRI !== undefined && FlowMap[i].JMRI.toLowerCase() === key.toLowerCase() &&\n                FlowMap[i].TrainTraxx_Type !== undefined && FlowMap[i].TrainTraxx_Type.toLowerCase() === tt_type.toLowerCase()\n        ) {\n            myResults = FlowMap[i].TrainTraxx;\n        }\n    }\n    return myResults;\n};\n\ninObject.tt2jmri = function(type,key,jmri_type) {\n    var myResults = \"\";\n    for (var i in FlowMap) {\n        if (    FlowMap[i].TrainTraxx_Type !== undefined && FlowMap[i].TrainTraxx_Type.toLowerCase() === type.toLowerCase()  &&\n                FlowMap[i].TrainTraxx !== undefined && FlowMap[i].TrainTraxx.toLowerCase() === key.toLowerCase() &&\n                FlowMap[i].JMRI_Type !== undefined && FlowMap[i].JMRI_Type.toLowerCase() === jmri_type.toLowerCase()\n        ) {\n            myResults = FlowMap[i].JMRI;\n        }\n    }\n    return myResults;\n};\n\ninObject.tt2jmri_color = function(name) {\n    var myResults = name;\n    for (var i in ColorMap) {\n        if (ColorMap[i].TrainTraxx.toLowerCase() === name.toLowerCase()) {\n            myResults = ColorMap[i].JMRI;\n        }\n    }\n    return myResults;\n};\n\ninObject.tt2jmri_carType = function(name) {\n    var myResults = name;\n    for (var i in CarTypeMap) {\n        if (CarTypeMap[i].col1.toLowerCase() === name.toLowerCase().trim()) {\n            myResults = CarTypeMap[i].col2;\n        }\n    }\n    return myResults;\n};\n\ninObject.tt2jmri_RoadName = function(name) {\n    var myResults = name;\n    for (var i in RoadNameMap) {\n        if (RoadNameMap[i]['Road Name'] === name || RoadNameMap[i]['Road Short Name'] === name ) {\n            myResults = RoadNameMap[i]['Road Short Name'];\n        }\n    }\n    return myResults;\n};\n\nflow.set('sync', inObject);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 140,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "87d6b3a0.2d3b2",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Sync Inventory",
        "func": "var TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\nvar JMRI = global.get('JMRI');\nvar tagLookup = flow.get('tagLookup');\n\nvar curRecord = {};\nvar KeyRecords = {};\nvar InvRecords = {};\nvar curMetaRecord = {};\nmsg.payload = [];\n\nvar columnList = ['NAME'];\nif (TT !== undefined && TT.inventory !== undefined && TT.inventory.data !== undefined) {\n    for (var KeyID in TT.inventory.keys.data) {\n        KeyRecords[KeyID] = hive.array_combine(TT.inventory.keys.columns,TT.inventory.keys.data[KeyID]);\n        KeyRecords[KeyID]['ID'] = KeyID;\n        columnList.push(KeyRecords[KeyID]['meta_key']);\n    }\n    for (var InvID in TT.inventory.data) {\n        var curInv = TT.inventory.data[InvID];\n        \n        var InvRecord = hive.array_combine(TT.inventory.columns,curInv);\n        var tempRecord = {\"JMRI_TAGNAME\" : \"\"};\n        if (tagLookup['ID'][InvID] !== undefined) {\n            tempRecord['JMRI_TAGNAME'] = tagLookup['ID'][InvID];\n        }\n        \n        for (var i in columnList) {\n            var columnName = columnList[i];\n            tempRecord[columnName] = '';\n        }\n        tempRecord['NAME'] = InvRecord.NAME;\n        for (var MetaID in TT.inventory.meta.data[InvID]) {\n            curMetaRecord[MetaID] = hive.array_combine(TT.inventory.meta.columns,TT.inventory.meta.data[InvID][MetaID]);\n            curMetaRecord[MetaID]['key'] = KeyRecords[curMetaRecord[MetaID]['wp_tt_inventorymetakeys_ID']];\n            tempRecord[curMetaRecord[MetaID]['key']['meta_key']] = curMetaRecord[MetaID]['meta_value'];\n        }\n        msg.payload.push(tempRecord);\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 540,
        "y": 300,
        "wires": [
            [
                "9678a17d.f9233"
            ]
        ]
    },
    {
        "id": "505e45d0.cb662c",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "Check Web Response",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ECONNREFUSED",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "EHOSTUNREACH",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "ETIMEDOUT",
                "vt": "str"
            },
            {
                "t": "gte",
                "v": "200",
                "vt": "num"
            },
            {
                "t": "gte",
                "v": "400",
                "vt": "num"
            },
            {
                "t": "gte",
                "v": "500",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": true,
        "outputs": 7,
        "x": 780,
        "y": 420,
        "wires": [
            [
                "dd94a3fd.ae674",
                "533870c4.2662",
                "ea44f051.87de7",
                "730417c4.d8b998"
            ],
            [
                "ea44f051.87de7",
                "533870c4.2662",
                "dd94a3fd.ae674",
                "730417c4.d8b998"
            ],
            [
                "ea44f051.87de7",
                "533870c4.2662",
                "dd94a3fd.ae674",
                "730417c4.d8b998"
            ],
            [
                "533870c4.2662",
                "dd94a3fd.ae674"
            ],
            [
                "ea44f051.87de7",
                "533870c4.2662",
                "dd94a3fd.ae674",
                "730417c4.d8b998"
            ],
            [
                "ea44f051.87de7",
                "533870c4.2662",
                "dd94a3fd.ae674",
                "730417c4.d8b998"
            ],
            [
                "ea44f051.87de7",
                "533870c4.2662",
                "dd94a3fd.ae674",
                "730417c4.d8b998"
            ]
        ]
    },
    {
        "id": "c29072b.60bee9",
        "type": "change",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "IP",
                "pt": "msg",
                "to": "payload.col3",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "MAC",
                "pt": "msg",
                "to": "payload.col2",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 660,
        "y": 280,
        "wires": [
            [
                "844374de.7720c8"
            ]
        ]
    },
    {
        "id": "841793ca.71042",
        "type": "switch",
        "z": "7b5cf843.8f8fc8",
        "name": "Pass Records",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1120,
        "y": 280,
        "wires": [
            [
                "5d886417.9ca5ec"
            ],
            [
                "cd10624b.e083b"
            ]
        ]
    },
    {
        "id": "ea44f051.87de7",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Manage Probe Ignore List",
        "func": "var Probe_Ignore = flow.get('Probe_Ignore');\nif (Probe_Ignore === undefined) {\n    Probe_Ignore = {};\n}\nvar retryCount = 0;\nvar startTimer= Date.now();\nif (Probe_Ignore[msg.MAC] !== undefined) {\n    retryCount = Probe_Ignore[msg.MAC].RetryCount;\n    startTimer = Probe_Ignore[msg.MAC].StartTimer;\n}\nProbe_Ignore[msg.MAC] = { \n    Reason : msg.statusCode,\n    Time : Date.now(),\n    StartTimer : startTimer,\n    RetryCount : ++retryCount\n};  \nflow.set('Probe_Ignore',Probe_Ignore);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "844374de.7720c8",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Check Ignore List",
        "func": "var Probe_Ignore = flow.get('Probe_Ignore');\nif (Probe_Ignore === undefined) {\n    Probe_Ignore = {};\n}\n/* If the probe is over 300 / 5 Minutes, Try again */\n\nvar retry_num = 3;\nvar retry_wait = 300000;\nmsg.payload = true;\n\nif (Probe_Ignore[msg.MAC] !== undefined) {\n    if ((Date.now() - Probe_Ignore[msg.MAC].StartTimer) >= retry_wait) {\n        delete Probe_Ignore[msg.MAC];\n    }\n    if (Probe_Ignore[msg.MAC] !== undefined ) { \n        if (Probe_Ignore[msg.MAC].RetryCount > retry_num) {\n            msg.payload = false;\n        }\n    } \n} \nflow.set('Probe_Ignore',Probe_Ignore);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 280,
        "wires": [
            [
                "841793ca.71042"
            ]
        ]
    },
    {
        "id": "730417c4.d8b998",
        "type": "debug",
        "z": "7b5cf843.8f8fc8",
        "name": "Post Check Web Response Debug",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1180,
        "y": 500,
        "wires": []
    },
    {
        "id": "cd10624b.e083b",
        "type": "debug",
        "z": "7b5cf843.8f8fc8",
        "name": "Probe Ignored",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1400,
        "y": 280,
        "wires": []
    },
    {
        "id": "9678a17d.f9233",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Convert Data",
        "func": "var inData = msg.payload;\nvar JMRI_URL = global.get('JMRI_URL');\nvar JMRI = global.get('JMRI');\nvar sync = flow.get('sync');\nvar hive = flow.get('hive');\nif (inData.length > 0) {\n    for (var i in inData) {\n        var curRecord = inData[i];\n        var type = 'car';\n        if (curRecord['Inventory Type'] !== undefined && curRecord['Inventory Type'] !== \"\") {\n            type = curRecord['Inventory Type'].toLowerCase();    \n        }\n        \n        var temp = {\n            payload : {\n                \"type\" : type,\n                \"data\" : {}\n            },\n            verb : 'PUT',\n            topic : type + 's',\n            url : JMRI_URL + 'json/' + type\n        };\n        \n        for (var fieldName in curRecord) {\n            var targetField = sync.tt2jmri('inventory',fieldName,type);\n            if (targetField !== undefined && targetField !== \"\" && curRecord[fieldName] !== \"\" && curRecord[fieldName] !== null) {\n                temp.payload['data'][targetField] = curRecord[fieldName];\n            }\n        }\n        //console.log(temp.payload);\n        if (temp.payload['data']['carType'] !== undefined) {\n            temp.payload['data']['carType'] = sync.tt2jmri_carType(temp.payload['data']['carType']);\n        }\n        \n        if (temp.payload['data']['color'] !== undefined) {\n            temp.payload['data']['color'] = sync.tt2jmri_color(temp.payload['data']['color']);\n        }\n        \n            \n        if (curRecord['Road Name'] === undefined) {\n            curRecord['Road Name'] = sync.tt2jmri_RoadName(temp.payload['data']['Road Name']);\n        }\n        \n        var name = curRecord['Road Name'] + curRecord['Road Number'];\n        temp.payload['data']['name'] = name;\n        \n        if (curRecord['JMRI_TAGNAME'] !== undefined) {\n            temp.payload['data']['rfid'] = curRecord['JMRI_TAGNAME'];\n        }\n        \n        \n        var exists = false;\n        \n        if (JMRI !== undefined && JMRI.cars !== undefined && JMRI.cars.data !== undefined && JMRI.cars.data.length > 0) {\n            for (var jmriID in JMRI.cars.data) {\n                if (name === JMRI.cars.data[jmriID].name) {\n                    exists = true;\n                }\n            }\n        }\n        if (JMRI !== undefined && JMRI.engines !== undefined && JMRI.engines.data !== undefined && JMRI.engines.data.length > 0) {\n            for (var jmriID in JMRI.engines.data) {\n                if (name === JMRI.engines.data[jmriID].name) {\n                    exists = true;\n                }\n            }\n        }\n        \n        if (exists === true) {\n            temp.verb = 'POST';\n        } \n        \n        node.send(temp);\n    }\n}\nflow.set('active', false);\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 300,
        "wires": [
            [
                "3bd4107f.d2b5a"
            ]
        ]
    },
    {
        "id": "8e6dfe75.eac0d",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Sync Sensors & Reporters",
        "func": "var TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\nvar JMRI_URL = global.get('JMRI_URL');\nvar JMRI = global.get('JMRI');\n\nif (TT !== undefined && TT.hivenode !== undefined && TT.hivenode.data !== undefined) {\n    for (var nodeID in TT.hivenode.data) {\n        var nodeData = hive.array_combine(TT.hivenode.columns,TT.hivenode.data[nodeID]);\n        var mac =  nodeData['MAC_ADDRESS'].toUpperCase();\n    \n        var r_verb = 'PUT';\n        if (JMRI.reporters !== undefined && JMRI.reporters.map !== undefined) {\n            if (JMRI.reporters.map[mac] !== undefined) {\n                r_verb = 'POST';\n            }\n        }\n        \n        var reporterObject = {\n            name : 'IRHIVE' + String(nodeID),\n            userName : mac\n        }\n        \n        node.send({\n            payload : { type: \"reporter\", data : reporterObject},\n            url : JMRI_URL + 'json/reporter',\n            verb : r_verb,\n            topic: \"reporters\"\n        });\n        \n        var s_verb = 'PUT';\n        if (JMRI.sensors !== undefined && JMRI.sensors.map !== undefined) {\n            if (JMRI.sensors.map[mac] !== undefined) {\n                s_verb = 'POST';\n            }\n        }\n        \n        var sensorObject = {\n            name : 'ISHIVE' + String(nodeID),\n            userName : mac\n        }\n\n        node.send({\n            payload : { type : \"sensor\", data : sensorObject},\n            url : JMRI_URL + 'json/sensor',\n            verb : s_verb,\n            topic: \"sensors\"\n        });\n    }\n}\nflow.set('active', false);\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 340,
        "wires": [
            [
                "3bd4107f.d2b5a",
                "2d91fa0e.59f576"
            ]
        ]
    },
    {
        "id": "d939d611.5a0548",
        "type": "debug",
        "z": "3d602d50.39dab2",
        "name": "Sync Results",
        "active": false,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1620,
        "y": 320,
        "wires": []
    },
    {
        "id": "c7a96328.94569",
        "type": "watch",
        "z": "9745920.d8a397",
        "name": "",
        "files": "/opt/hiveid-ap/data/CC.csv",
        "recursive": "",
        "x": 600,
        "y": 800,
        "wires": [
            [
                "11bd9584.c3dd2a"
            ]
        ]
    },
    {
        "id": "337e2284.c5ea3e",
        "type": "file in",
        "z": "3d602d50.39dab2",
        "name": "",
        "filename": "/opt/hiveid-ap/data/traintraxx_to_jmri.cartypes.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "x": 670,
        "y": 700,
        "wires": [
            [
                "2c706ed6.288632"
            ]
        ]
    },
    {
        "id": "2c706ed6.288632",
        "type": "csv",
        "z": "3d602d50.39dab2",
        "name": "",
        "sep": ",",
        "hdrin": false,
        "hdrout": "",
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 990,
        "y": 700,
        "wires": [
            [
                "fe3937c2.70aef8"
            ]
        ]
    },
    {
        "id": "fe3937c2.70aef8",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "Set CarTypeMap",
        "rules": [
            {
                "t": "set",
                "p": "CarTypeMap",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1170,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "8a8c5ab2.004918",
        "type": "watch",
        "z": "3d602d50.39dab2",
        "name": "",
        "files": "/opt/hiveid-ap/data/traintraxx_to_jmri.cartypes.csv",
        "recursive": "",
        "x": 650,
        "y": 660,
        "wires": [
            [
                "337e2284.c5ea3e"
            ]
        ]
    },
    {
        "id": "d619f02a.37bcb",
        "type": "file in",
        "z": "3d602d50.39dab2",
        "name": "",
        "filename": "/opt/hiveid-ap/data/traintraxx_to_jmri.roadnames.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "x": 680,
        "y": 620,
        "wires": [
            [
                "56c30c3b.453964"
            ]
        ]
    },
    {
        "id": "56c30c3b.453964",
        "type": "csv",
        "z": "3d602d50.39dab2",
        "name": "",
        "sep": ",",
        "hdrin": true,
        "hdrout": "",
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 990,
        "y": 620,
        "wires": [
            [
                "cc6a1299.94f3d"
            ]
        ]
    },
    {
        "id": "cc6a1299.94f3d",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "Set RoadNameMap",
        "rules": [
            {
                "t": "set",
                "p": "RoadNameMap",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1170,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "bc56b04e.43706",
        "type": "watch",
        "z": "3d602d50.39dab2",
        "name": "",
        "files": "/opt/hiveid-ap/data/traintraxx_to_jmri.roadnames.csv",
        "recursive": "",
        "x": 660,
        "y": 580,
        "wires": [
            [
                "d619f02a.37bcb"
            ]
        ]
    },
    {
        "id": "17099e33.62b822",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Success Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "topic",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Loaded",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1230,
        "y": 320,
        "wires": [
            [
                "88f82183.257c6"
            ]
        ]
    },
    {
        "id": "a57b40ed.f9d87",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Failed Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "topic",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Failed to load",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1220,
        "y": 360,
        "wires": [
            [
                "88f82183.257c6"
            ]
        ]
    },
    {
        "id": "88f82183.257c6",
        "type": "ui_toast",
        "z": "1a726252.d178be",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1450,
        "y": 340,
        "wires": []
    },
    {
        "id": "5b349664.1dbb58",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "btwn",
                "v": "200",
                "vt": "num",
                "v2": "204",
                "v2t": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1010,
        "y": 340,
        "wires": [
            [
                "17099e33.62b822",
                "acfec978.dad798"
            ],
            [
                "a57b40ed.f9d87",
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "d220cd55.03db3",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "TableList Iterator",
        "func": "var queue = flow.get('queue');\nvar curTable = queue.pop();\nflow.set('queue',queue);    \nmsg.payload = curTable;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 340,
        "wires": [
            [
                "4c451931.da5c48",
                "e1a8c6f1.741178",
                "7a15f834.c09ad8"
            ]
        ]
    },
    {
        "id": "4c451931.da5c48",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "env": [],
        "x": 750,
        "y": 340,
        "wires": [
            [
                "5b349664.1dbb58",
                "881bf492.b6f288"
            ],
            [
                "9a96d660.551768"
            ]
        ]
    },
    {
        "id": "e1a8c6f1.741178",
        "type": "debug",
        "z": "1a726252.d178be",
        "name": "TrainTraxx Request",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 750,
        "y": 260,
        "wires": []
    },
    {
        "id": "251b3c83.10ad94",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Set Defaults",
        "rules": [
            {
                "t": "set",
                "p": "queue",
                "pt": "flow",
                "to": "[     \"images\",\"hivenode\",\"hivegateway\",\"inventory\",\"locations\",\"tags\", \"tags_activity\" ]",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "stored",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "ready",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "sync_TrainTraxx_Running",
                "pt": "global",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 510,
        "y": 520,
        "wires": [
            [
                "99908d40.fdccd"
            ]
        ]
    },
    {
        "id": "d0c91487.a2c9f8",
        "type": "inject",
        "z": "1a726252.d178be",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": ".3",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 230,
        "y": 240,
        "wires": [
            [
                "3b2bff91.5df5c",
                "3ac0182c.2aa1b8"
            ]
        ]
    },
    {
        "id": "6f9cb799.5e91b8",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "Check Queue",
        "property": "queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "nempty"
            },
            {
                "t": "empty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 300,
        "y": 360,
        "wires": [
            [
                "d220cd55.03db3"
            ],
            [
                "1bd17d0c.d85c33"
            ]
        ]
    },
    {
        "id": "a7930ef3.37167",
        "type": "json",
        "z": "1a726252.d178be",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 950,
        "y": 460,
        "wires": [
            [
                "e63d9d41.4e13a"
            ]
        ]
    },
    {
        "id": "7ac3338d.67d9bc",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 740,
        "y": 380,
        "wires": [
            [
                "d0fcfe77.93e15",
                "a138fd5d.814f7",
                "a6d06b01.0ca268",
                "69ebbb16.225d34",
                "a02f6d2c.9c107"
            ]
        ]
    },
    {
        "id": "e63d9d41.4e13a",
        "type": "file",
        "z": "1a726252.d178be",
        "name": "",
        "filename": "/usr/local/hiveid-ap/cache/global.TrainTraxx.json",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 1100,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "7a15f834.c09ad8",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Set running to true",
        "rules": [
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "7a457be0.b5c934",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "IsRunning",
        "property": "running",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 260,
        "y": 320,
        "wires": [
            [
                "8815dd85.1aad7"
            ],
            [
                "6f9cb799.5e91b8"
            ]
        ]
    },
    {
        "id": "881bf492.b6f288",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Set running to false",
        "rules": [
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1230,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "1bd17d0c.d85c33",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "IsStored",
        "property": "stored",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 480,
        "y": 380,
        "wires": [
            [],
            [
                "7ac3338d.67d9bc"
            ]
        ]
    },
    {
        "id": "d0fcfe77.93e15",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Set stored & ready",
        "rules": [
            {
                "t": "set",
                "p": "stored",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "ready",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "sync_TrainTraxx_Running",
                "pt": "global",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 970,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "3f878593.6803ba",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "isReady",
        "property": "ready",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 240,
        "y": 280,
        "wires": [
            [
                "7a457be0.b5c934"
            ],
            []
        ]
    },
    {
        "id": "a83d9cb5.f57d6",
        "type": "inject",
        "z": "1a726252.d178be",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": ".5",
        "x": 330,
        "y": 520,
        "wires": [
            [
                "251b3c83.10ad94"
            ]
        ]
    },
    {
        "id": "4666efa0.8b193",
        "type": "watch",
        "z": "1a726252.d178be",
        "name": "",
        "files": "/usr/local/hiveid-ap/cache/global.TrainTraxx.json",
        "recursive": "",
        "x": 400,
        "y": 560,
        "wires": [
            [
                "99908d40.fdccd"
            ]
        ]
    },
    {
        "id": "b85917e0.96a9d8",
        "type": "file in",
        "z": "1a726252.d178be",
        "name": "",
        "filename": "/usr/local/hiveid-ap/cache/global.TrainTraxx.json",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "x": 470,
        "y": 600,
        "wires": [
            [
                "1908bb15.312be5"
            ]
        ]
    },
    {
        "id": "1908bb15.312be5",
        "type": "json",
        "z": "1a726252.d178be",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 370,
        "y": 640,
        "wires": [
            [
                "982469e0.a9d008"
            ]
        ]
    },
    {
        "id": "982469e0.a9d008",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "sync_TrainTraxx_Running",
                "pt": "global",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 560,
        "y": 640,
        "wires": [
            [
                "a02f6d2c.9c107"
            ]
        ]
    },
    {
        "id": "99908d40.fdccd",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "USE_CACHE",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 690,
        "y": 560,
        "wires": [
            [
                "b85917e0.96a9d8"
            ]
        ]
    },
    {
        "id": "3b2bff91.5df5c",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "USE_CACHE",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 450,
        "y": 240,
        "wires": [
            [
                "3f878593.6803ba"
            ]
        ]
    },
    {
        "id": "d18c15f1.f2b5a8",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config.USE_CACHE",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.USE_CACHE",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1060,
        "y": 500,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "e054e355.832a2",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Config.USE_CACHE",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config.USE_CACHE",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 500,
        "wires": [
            [
                "7e321db7.883104"
            ]
        ]
    },
    {
        "id": "7e321db7.883104",
        "type": "ui_switch",
        "z": "fd2ebb8a.240a38",
        "name": "Offline Mode",
        "label": "Offline Mode",
        "tooltip": "",
        "group": "c39736a3.dcaf08",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "decouple": "true",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 730,
        "y": 500,
        "wires": [
            [
                "d18c15f1.f2b5a8"
            ]
        ]
    },
    {
        "id": "a138fd5d.814f7",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "IsNotEmpty",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 950,
        "y": 420,
        "wires": [
            [
                "a7930ef3.37167"
            ]
        ]
    },
    {
        "id": "38cfc2d.0fa403e",
        "type": "inject",
        "z": "c3e3e66a.322358",
        "name": "",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 190,
        "y": 60,
        "wires": [
            [
                "698f0b12.de04a4"
            ]
        ]
    },
    {
        "id": "2b331372.0578fc",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1110,
        "y": 1080,
        "wires": []
    },
    {
        "id": "fea77fb9.80682",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Success Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "topic",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Loaded",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "green",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1150,
        "y": 1000,
        "wires": [
            []
        ]
    },
    {
        "id": "77fc7701.691628",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Failed Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "topic",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Failed to load",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1140,
        "y": 1040,
        "wires": [
            [
                "864e8e1e.a5359"
            ]
        ]
    },
    {
        "id": "864e8e1e.a5359",
        "type": "ui_toast",
        "z": "164213bd.e3dd4c",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1350,
        "y": 1040,
        "wires": []
    },
    {
        "id": "8384e2e4.e9412",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 930,
        "y": 1020,
        "wires": [
            [
                "fea77fb9.80682",
                "2b331372.0578fc"
            ],
            [
                "77fc7701.691628",
                "2b331372.0578fc"
            ]
        ]
    },
    {
        "id": "4ca45c93.8fc0f4",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "TableList Iterator",
        "func": "var queue = flow.get('queue');\nvar curTable = queue.pop();\nflow.set('queue',queue);    \nmsg.payload = curTable;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 1020,
        "wires": [
            [
                "b5fe78d9.7a6e58",
                "d3aedf1f.c858c"
            ]
        ]
    },
    {
        "id": "b5fe78d9.7a6e58",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Request",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 660,
        "y": 980,
        "wires": []
    },
    {
        "id": "38f814e7.95f47c",
        "type": "inject",
        "z": "164213bd.e3dd4c",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": ".3",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 130,
        "y": 880,
        "wires": [
            [
                "3c4a9a1c.addf66",
                "2347919.8111b6e"
            ]
        ]
    },
    {
        "id": "910e7072.24197",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "Check Queue",
        "property": "queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "nempty"
            },
            {
                "t": "empty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 220,
        "y": 1060,
        "wires": [
            [
                "4ca45c93.8fc0f4",
                "f8b2bdc2.f0e25"
            ],
            [
                "767ca1ff.14e85"
            ]
        ]
    },
    {
        "id": "5209c9f8.ade9a8",
        "type": "json",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 870,
        "y": 1140,
        "wires": [
            [
                "4d27f498.523a5c"
            ]
        ]
    },
    {
        "id": "54e18f30.77cce",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "JMRI",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 660,
        "y": 1060,
        "wires": [
            [
                "1634e571.c471cb",
                "2f44323a.d4024e",
                "87e07238.a48f2",
                "98537cc2.6b418"
            ]
        ]
    },
    {
        "id": "4d27f498.523a5c",
        "type": "file",
        "z": "164213bd.e3dd4c",
        "name": "",
        "filename": "/usr/local/hiveid-ap/cache/global.JMRI.json",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 1010,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "f8b2bdc2.f0e25",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set running to true",
        "rules": [
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "511c17c9.c0ecb8",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "IsRunning",
        "property": "running",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 180,
        "y": 1000,
        "wires": [
            [
                "f15a725e.ee9ed"
            ],
            [
                "910e7072.24197"
            ]
        ]
    },
    {
        "id": "d82540e3.3f571",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set running to false",
        "rules": [
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1150,
        "y": 960,
        "wires": [
            []
        ]
    },
    {
        "id": "767ca1ff.14e85",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "IsStored",
        "property": "stored",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 400,
        "y": 1060,
        "wires": [
            [],
            [
                "54e18f30.77cce",
                "800d24d6.ba7e68"
            ]
        ]
    },
    {
        "id": "1634e571.c471cb",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set stored & ready",
        "rules": [
            {
                "t": "set",
                "p": "stored",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "ready",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "sync_JMRI_Running",
                "pt": "global",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 890,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "d6522db.4d47bd",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "isReady",
        "property": "ready",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 160,
        "y": 960,
        "wires": [
            [
                "511c17c9.c0ecb8"
            ],
            []
        ]
    },
    {
        "id": "2f44323a.d4024e",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "IsNotEmpty",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 870,
        "y": 1100,
        "wires": [
            [
                "5209c9f8.ade9a8"
            ]
        ]
    },
    {
        "id": "26beefe6.cfd83",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Setup Global Functions",
        "func": "var TT = global.get('TrainTraxx');\nvar JMRI = global.get('JMRI');\nvar inObject = { 'jmri' : {}, 'traintraxx': {}};\ninObject.array_combine = function(inKeys,inValues) {\n    var myResults = {};\n    for (var ki=0;ki<inKeys.length;ki++) {\n        myResults[inKeys[ki]] = inValues[ki];\n    }\n    return myResults;\n};\n\ninObject.sleep = function(inSeconds) {\n    var now = new Date().getTime();\n    var endTime = now + inSeconds * 1000;\n    while ( new Date().getTime() < endTime) {}\n\n};\n\ninObject.array_fill = function(keys,defaultValue = null) {\n    var myResults = {};\n    for (var i in keys) {\n        myResults[keys[i]] = defaultValue;\n    }\n    return myResults;\n};\n\ninObject.empty = function(inObject) {\n    if (inObject === undefined || inObject === null || inObject === {} || inObject === \"\") {\n        return true;\n    }\n    return false;\n}\n\ninObject.proper = function(inString) {\n  return inString.replace(/(^|\\s)\\S/g, function(s) { return s.toUpperCase(); });\n};\n\ninObject.getDeviceName = function(deviceType, prefix, mac) {\n    var myResults = {\n        name : \"\",\n        userName : String(mac).toUpperCase(),\n        state : 4,\n        properties: [],\n        comment : null,\n        inverted : false,\n        verb : \"PUT\"\n    };\n    if (JMRI !== undefined && JMRI[deviceType] !== undefined && JMRI[deviceType].data !== undefined && JMRI[deviceType].data.length > 0) {\n        for (var id in JMRI[deviceType].data) {\n            var curDevice = JMRI[deviceType].data[id];\n            if (myResults.userName === curDevice.userName) {\n                myResults.name = curDevice.name;\n                myResults.state = curDevice.state;\n                myResults.verb = 'POST';\n            }\n        }\n    }\n    if (myResults.name === '') {\n        if (TT !== undefined && TT.hivenode !== undefined && TT.hivenode.data !== undefined) {\n            for (var nodeId in TT.hivenode.data) {\n                var curNode = inObject.array_combine(TT.hivenode.columns,TT.hivenode.data[nodeId]);\n                if (String(curNode['MAC_ADDRESS']).toUpperCase() === myResults.userName) { \n                    myResults.name = prefix + String(nodeId);\n                }\n            }\n        }\n    }\n    if (myResults.name === '') {\n        myResults.name = prefix + 'A' + JMRI[deviceType].nextID;\n    }\n    return myResults;\n};\n\ninObject.getSensorName = function(mac) {\n    return inObject.getDeviceName('sensors','ISHIVE',mac);\n};\n\ninObject.getReporterName = function(mac) {\n    return inObject.getDeviceName('reporters','IRHIVE',mac);\n};\n\ninObject.getLocationDetails = function(mac) {\n    var activeHivenode = {};\n    if (TT !== undefined && TT.hivenode !== undefined && TT.hivenode.data !== undefined) {\n        for (var hivenodeID in TT.hivenode.data) {\n            var curHivenode = inObject.array_combine(TT.hivenode.columns, TT.hivenode.data[hivenodeID]);\n            if (String(curHivenode.MAC_ADDRESS).toUpperCase() == String(mac).toUpperCase()) {\n                activeHivenode = curHivenode;\n            }\n        }\n        var activeLocation = {};\n        if (Number(activeHivenode['wp_tt_locations_ID']) > 0) {\n            activeLocation = inObject.array_combine(TT.locations.columns,TT.locations.data[activeHivenode['wp_tt_locations_ID']]);\n            activeLocation['ID'] = activeHivenode['wp_tt_locations_ID'];\n        }\n    }\n    /* Need to find the active location from JMRI */\n    return {\n        hivenode : activeHivenode,\n        location : activeLocation,\n    };\n};\n\ninObject.getInventoryName = function(uid) {\n    var activeTag = {};\n    if (TT !== undefined && TT.tags !== undefined && TT.tags.data !== undefined ) {\n        for (var tagID in TT.tags.data) {\n            var curTag = inObject.array_combine(TT.tags.columns, TT.tags.data[tagID]);\n            if (String(curTag.TAG_UID).toUpperCase() == String(uid).toUpperCase()) {\n                activeTag = curTag;\n            }\n        }\n        \n        var activeInventory = {};\n        if (Number(activeTag['wp_tt_inventory_ID']) > 0) {\n            activeInventory = inObject.array_combine(TT.inventory.columns,TT.inventory.data[activeTag['wp_tt_inventory_ID']]);\n        }\n    }\n    /* Need to find the active inventory from JMRI */\n    return {\n        tag : activeTag,\n        inventory : activeInventory,\n    };    \n};\n\ninObject.getTagName = function(uid) {\n    var myResults = {\n        verb : \"POST\",\n        userName : uid\n    };\n    if (JMRI !== undefined && JMRI.idTag !==undefined) {\n        if (JMRI.idTag.data !== undefined && JMRI.idTag.data.length > 0) {\n            for (var id in JMRI.idTag.data) {\n                var curTag = JMRI.idTag.data[id];\n                if (curTag.userName === uid) {\n                    myResults.name = curTag.name;   \n                }\n            }\n        }\n    \n        if (myResults.name === undefined) {\n            myResults.verb = 'PUT';\n            myResults.name = 'IDHIVEA' + JMRI.idTag.nextID;\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getLocation = function(userName) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in JMRI.locations.data) {\n            var curLocation = JMRI.locations.data[lID];\n            if (curLocation.userName === userName) {\n                myResults = curLocation;\n            }\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getLocationByJMRIName = function(jmriName) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in JMRI.locations.data) {\n            var curLocation = JMRI.locations.data[lID];\n            if (curLocation.name === jmriName) {\n                myResults = curLocation;\n            }\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getSubLocation = function(userName) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in JMRI.locations.data) {\n            var curLocation = JMRI.locations.data[lID];\n            for (var tID in curLocation.track) {\n                var curTrack = curLocation.track[tID];\n                if (curTrack.userName === userName) {\n                    myResults = curTrack;\n                }\n            }\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getSubLocationByJMRIName = function(jmriName) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in JMRI.locations.data) {\n            var curLocation = JMRI.locations.data[lID];\n            for (var tID in curLocation.track) {\n                var curTrack = curLocation.track[tID];\n                if (curTrack.name === jmriName) {\n                    myResults = curTrack;\n                }\n            }\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getReporterNameByLocation = function(userName) {\n    var myResults = \"\";\n    var lookupID = null;\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in TT.locations.data) {\n            var curLocation = inObject.array_combine(TT.locations.columns,TT.locations.data[lID]);\n            if (curLocation.NAME === userName) {\n                lookupID = Number(lID);\n            }\n        }\n        if (Number(lookupID) >0) {\n            for (var nodeID in TT.hivenode.data) {\n                var curNode = inObject.array_combine(TT.hivenode.columns, TT.hivenode.data[nodeID]);\n                if (Number(curNode['wp_tt_locations_ID']) === lookupID) {\n                    var tempResults= inObject.getReporterName(curNode['MAC_ADDRESS']);\n                    myResults = tempResults['name'];\n                }\n            }\n        }\n    }\n    return myResults;\n};\n\ninObject.jmri.getTagByUID= function(uid) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.idTag !== undefined && JMRI.idTag.map !== undefined) {\n        for (var jmID in JMRI.idTag.map) {\n            if (jmID === uid) {\n                myResults = JMRI.idTag.data[JMRI.idTag.map[jmID]];\n            }\n        }\n    }\n    return myResults;   \n};\n\n\ninObject.jmri.getInventoryByTag = function(tagName) {\n    var myResults = {};\n    if (JMRI !== undefined) {\n        if (JMRI.cars !== undefined && JMRI.cars.data.length > 0 ) {\n            for (var cID in JMRI.cars.data ) {\n                var curCar = JMRI.cars.data[cID];\n                if (curCar.rfid !== undefined && curCar.rfid === tagName) {\n                    myResults = curCar;\n                    myResults['type'] = 'car';\n                }\n                \n            }\n        }\n        if (myResults.name === undefined && JMRI.engines !== undefined && JMRI.engines.data.length > 0 ) {\n            for (var eID in JMRI.engines.data ) {\n                var curEngine = JMRI.engines.data[eID];\n                if (curEngine.rfid === tagName) {\n                    myResults = curEngine;\n                    myResults['type'] = 'engine';\n                }\n            }    \n        }\n    }\n    return myResults;   \n};\n\ninObject.jmri.getInventoryByUID = function(uid) {\n    var tempTag =  inObject.jmri.getTagByUID(uid);\n    var myResults = {};\n    if (tempTag !== undefined && tempTag !== {} && tempTag.name !== '') {\n        myResults = inObject.jmri.getInventoryByTag(tempTag.name);\n    }\n    return myResults;\n};\n\ninObject.jmri.getLocationByReporter = function(reporter) {\n    var myResults = {};\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        for (var lID in JMRI.locations.data) {\n            var curLoc = JMRI.locations.data[lID];\n            if (curLoc.reporter !== undefined && curLoc.reporter === reporter) {\n                myResults = { \"name\" : curLoc.name};    \n            } \n            if (curLoc.track !== undefined && curLoc.track.length > 0) {\n                for (var tID in curLoc.track) {\n                    var curTrack = curLoc.track[tID];\n                    if (curTrack.reporter !== undefined && curTrack.reporter === reporter) {\n                        myResults = { \n                            \"name\" : curLoc.name, \n                            \"track\" : { \n                                \"name\" : curTrack.name \n                            }\n                        };    \n                    }\n                }\n            }\n        }\n    }\n    return myResults;\n};\n\n\n\ninObject.traintraxx.getInventoryIDByTag = function(uid) {\n    if (uid !== undefined && uid !== \"\") {\n        for (var t in TT.tags.data) {\n            var curTag = inObject.array_combine(TT.tags.columns,TT.tags.data[t]);\n            if (curTag['TAG_UID'] === uid) {\n                return curTag['wp_tt_inventory_ID'];\n            }\n        }  \n    } \n    return null;\n};\n\ninObject.traintraxx.getHivenodeLocationByMac = function(mac) {\n    if (mac !== undefined && TT !== undefined && TT.hivenode !== undefined && TT.hivenode.data !== undefined) {\n        for (var t in TT.hivenode.data) {\n            var curNode = inObject.array_combine(TT.hivenode.columns,TT.hivenode.data[t]);\n            if (curNode['MAC_ADDRESS'] !== undefined && String(curNode['MAC_ADDRESS']).toUpperCase() === String(mac).toUpperCase()) {\n                return curNode['wp_tt_locations_ID'];\n            }\n        }  \n    } \n    return null;\n};\n\n/* This function is for legacy support without track level Reporter assignment */\ninObject.jmri.getLocationByTrainTraxxMAC = function(mac) {\n    var myResults = { 'userName' : '', 'name' : '', 'track' : {} };\n    var TT_LocID = inObject.traintraxx.getHivenodeLocationByMac(mac);\n    var TT_Loc_Parent ={};\n    if (!inObject.empty(TT_LocID)) {\n        var curLoc = inObject.array_combine(TT.locations.columns,TT.locations.data[TT_LocID]);\n        if (!inObject.empty(curLoc) && Number(curLoc['wp_tt_locations_PARENT_ID']) > 0) {\n            TT_Loc_Parent = inObject.array_combine(TT.locations.columns,TT.locations.data[curLoc['wp_tt_locations_PARENT_ID']]);\n        }\n    }\n    if (JMRI !== undefined && JMRI.locations !== undefined && JMRI.locations.data.length > 0 ) {\n        if (!inObject.empty(TT_Loc_Parent)) { /* Lookup Parent Location first */\n            for (var jID in JMRI.locations.data) {\n                var jLoc = JMRI.locations.data[jID];\n                if (TT_Loc_Parent.NAME === jLoc.userName) {\n                    myResults.userName = jLoc.userName;\n                    myResults.name = jLoc.name;\n                    if (!inObject.empty(jLoc.track) && jLoc.track.length > 0) {\n                        for (var jID2 in jLoc.track) {\n                            var jTrack = jLoc.track[jID2];\n                            if (jTrack.userName === curLoc.NAME) {\n                                myResults.track['userName'] =jTrack.userName;\n                                myResults.track['name'] =jTrack.name;\n                            }\n                        }\n                    }\n                } \n            }\n        } else {\n            for (var jID in JMRI.locations.data) {\n                var jLoc = JMRI.locations.data[jID];\n                if (TT_Loc.NAME === jLoc.userName) {    \n                    myResults.userName = jLoc.userName;\n                    myResults.name = jLoc.name;\n                }\n            }\n        }\n    }\n    return myResults;\n}\n\ninObject.traintraxx.getLocationNameByID = function(lid) {\n    var myResults = '';\n    if (lid !== undefined && lid > 0 && TT !== undefined && TT.locations !== undefined && TT.locations.data !== undefined && TT.locations.data[lid] !== undefined) {\n        var tempLoc = inObject.array_combine(TT.locations.columns,TT.locations.data[lid]);\n        if (tempLoc !== undefined) {\n            if (Number(tempLoc['wp_tt_locations_PARENT_ID']) > 0) {\n                var tempParent = inObject.array_combine(TT.locations.columns,TT.locations.data[tempLoc['wp_tt_locations_PARENT_ID']]);\n                myResults = tempParent['NAME'] + '->';\n            }\n            myResults += tempLoc['NAME'];\n        } else {\n            myResults = 'Unknown';\n        }\n    } else {\n        myResults =  'Not assigned';\n    }\n    return myResults;\n};\n\nglobal.set('hive', inObject);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 80,
        "wires": [
            [
                "5652d958.4bda68"
            ]
        ]
    },
    {
        "id": "509dfa72.51cfc4",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "queue",
                "pt": "flow",
                "to": "[\"TrainTraxx\",\"JMRI\",\"tags\",\"JMRI\",\"inventory\",\"sensors\",\"JMRI\",\"locations\",\"JMRI\",\"tracks\",\"JMRI\"]",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "start",
                "pt": "flow",
                "to": "true",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "6da11f5.6279ae",
        "type": "ui_template",
        "z": "1a726252.d178be",
        "group": "a9319cec.7d9c",
        "name": "TrainTraxx Refresh Status",
        "order": 6,
        "width": "1",
        "height": "1",
        "format": "<div ng-bind-html=\"msg.payload\"></div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 770,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "8815dd85.1aad7",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Processing",
        "func": "msg.template = '<img src=\"/images/processing.png\" height=\"48px\">';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 500,
        "y": 300,
        "wires": [
            [
                "6da11f5.6279ae"
            ]
        ]
    },
    {
        "id": "8f8c1443.c1b888",
        "type": "ui_template",
        "z": "164213bd.e3dd4c",
        "group": "a9319cec.7d9c",
        "name": "JMRI Refresh Status",
        "order": 4,
        "width": "1",
        "height": "1",
        "format": "<div ng-bind-html=\"msg.payload\"></div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 740,
        "y": 880,
        "wires": [
            []
        ]
    },
    {
        "id": "f15a725e.ee9ed",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Processing",
        "func": "msg.template = '<img src=\"/images/processing.png\" height=\"48px\">';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 480,
        "y": 920,
        "wires": [
            [
                "8f8c1443.c1b888"
            ]
        ]
    },
    {
        "id": "e37006db.0ea648",
        "type": "link out",
        "z": "3d602d50.39dab2",
        "name": "TrainTraxx2JMRI Data oLink to TrainTraxx Data iLink",
        "links": [
            "b1607e3f.fb142"
        ],
        "x": 475,
        "y": 180,
        "wires": []
    },
    {
        "id": "391c0a36.ebdac6",
        "type": "link out",
        "z": "3d602d50.39dab2",
        "name": "TrainTraxx2JMRI Data oLink to JMRI Data iLink",
        "links": [
            "a309b660.225d08"
        ],
        "x": 475,
        "y": 220,
        "wires": []
    },
    {
        "id": "30a30fe7.442ff",
        "type": "inject",
        "z": "3d602d50.39dab2",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": ".3",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "x": 130,
        "y": 300,
        "wires": [
            [
                "353f0842.9ef0c8"
            ]
        ]
    },
    {
        "id": "389170d2.26dd4",
        "type": "ui_template",
        "z": "3d602d50.39dab2",
        "group": "a9319cec.7d9c",
        "name": "Sync Refresh Status",
        "order": 10,
        "width": "1",
        "height": "1",
        "format": "",
        "storeOutMessages": false,
        "fwdInMessages": false,
        "templateScope": "local",
        "x": 200,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "17868bf3.ddc944",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "Temp Debug",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 610,
        "y": 340,
        "wires": []
    },
    {
        "id": "3ca5628c.c8f32e",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Setup JMRI Tags",
        "func": "var TT = global.get('TrainTraxx');\nvar JMRI = global.get('JMRI');\nvar JMRI_URL = global.get('JMRI_URL');\nvar hive = global.get('hive');\nvar tagLookup = flow.get('tagLookup');\nif (tagLookup === undefined) {\n    tagLookup = { 'ID' : {}, 'NAME' : {}};\n}\nif (TT !== undefined && TT.tags.data !== undefined) {\n    for (var id in TT.tags.data) {\n        var curTag = hive.array_combine(TT.tags.columns,TT.tags.data[id]);\n        if (curTag['TAG_UID'] !== '') {\n            var invName = \"Unknown\";\n            var jmriName = 'IDHIVE' + String(id);\n            if (curTag['wp_tt_inventory_ID'] !== null && curTag['wp_tt_inventory_ID'] !== \"\" && Number(curTag['wp_tt_inventory_ID']) > 0 && TT.inventory.data[String(curTag['wp_tt_inventory_ID'])] !== undefined) {\n                var curInv = hive.array_combine(TT.inventory.columns,TT.inventory.data[String(curTag['wp_tt_inventory_ID'])]);\n                invName=curInv.NAME;\n                tagLookup.ID[String(curTag['wp_tt_inventory_ID'])] = jmriName;\n                tagLookup.NAME[invName] = jmriName;\n            }\n            var tempData = { \n              \"name\" : jmriName,\n              \"userName\" : curTag['TAG_UID'],\n              \"comment\" : invName\n            };\n            var verb = \"PUT\";\n            if (JMRI !== undefined && JMRI.idTag !== undefined && JMRI.idTag.map !== undefined && JMRI.idTag.map[curTag['TAG_UID']] !== undefined){\n                verb= 'POST';\n            }\n            var tempMsg = {\n                payload : {\n                    \"type\" : 'idTag',\n                    \"data\" : tempData\n                },\n                verb : verb,\n                topic: 'idTag',\n                url : JMRI_URL + 'json/idTag'\n                \n            };\n            node.send(tempMsg);\n        } else {\n            console.log('Tag UID not defined for in TrainTraxx ' + String(id));\n        }\n    }\n}\nflow.set('tagLookup',tagLookup);\nflow.set('active',false);\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 550,
        "y": 260,
        "wires": [
            [
                "3bd4107f.d2b5a",
                "2d91fa0e.59f576"
            ]
        ]
    },
    {
        "id": "3bd4107f.d2b5a",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "",
        "property": "verb",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "PUT",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "POST",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 990,
        "y": 260,
        "wires": [
            [
                "8ae082fc.570fc"
            ],
            [
                "5551a012.29ace"
            ]
        ]
    },
    {
        "id": "80beb66.488e048",
        "type": "http request",
        "z": "3d602d50.39dab2",
        "name": "PUT Record",
        "method": "PUT",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1170,
        "y": 260,
        "wires": [
            [
                "da8a2ab7.df8648"
            ]
        ]
    },
    {
        "id": "1b1d2a52.6a7416",
        "type": "http request",
        "z": "3d602d50.39dab2",
        "name": "POST Record",
        "method": "POST",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1180,
        "y": 340,
        "wires": [
            [
                "da8a2ab7.df8648"
            ]
        ]
    },
    {
        "id": "cbb05792.286828",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "JMRI idTag Process",
        "func": "var RFIDRequest = msg.payload;\n\nvar hive = global.get('hive');\nvar JMRI_Config = global.get('JMRI_Config');\nvar IP = global.get('IP');\n\nvar reporter = hive.getReporterName(RFIDRequest.MAC);\nvar tag = hive.getTagName(RFIDRequest.UID);\ntag[\"reporter\"]= reporter.name;\nmsg.verb = tag.verb;\ndelete tag.verb;\nmsg.payload = {\n    \"type\": \"idTag\",\n    \"data\": tag\n};\nmsg.headers = {'content-type':'application/json'};\nvar config = global.get('JMRI_Config');\nmsg.url = JMRI_Config.JMRI_API.replace('{{IP}}',IP.internalIPv4) + 'idTag';\nmsg.topic = 'idTag';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 600,
        "wires": [
            [
                "2aac0d87.303432"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "7833a144.2c0f9",
        "type": "http request",
        "z": "164213bd.e3dd4c",
        "name": "JMRI POST Call",
        "method": "POST",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1080,
        "y": 540,
        "wires": [
            [
                "7c13c850.93e948",
                "97928ea1.a8499"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "2aac0d87.303432",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "verb",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "POST",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "PUT",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 910,
        "y": 560,
        "wires": [
            [
                "7833a144.2c0f9",
                "7e51bcf1.df3ee4"
            ],
            [
                "874bf5ac.219458",
                "7e51bcf1.df3ee4"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg",
            "msg"
        ]
    },
    {
        "id": "874bf5ac.219458",
        "type": "http request",
        "z": "164213bd.e3dd4c",
        "name": "JMRI PUT Call",
        "method": "PUT",
        "ret": "obj",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1080,
        "y": 580,
        "wires": [
            [
                "7c13c850.93e948",
                "97928ea1.a8499"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "d134657a.d3a028",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1480,
        "y": 600,
        "wires": []
    },
    {
        "id": "f83d3ea6.5e836",
        "type": "moment",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "input": "",
        "inputType": "date",
        "inTz": "America/Chicago",
        "adjAmount": 0,
        "adjType": "days",
        "adjDir": "add",
        "format": "YYYY-MM-DD HH:mm:ss",
        "locale": "en_US",
        "output": "timestamp",
        "outputType": "global",
        "outTz": "America/Chicago",
        "x": 400,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "3519a7e2.480e68",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 40,
        "wires": [
            [
                "f83d3ea6.5e836"
            ]
        ]
    },
    {
        "id": "30bd919d.10fcfe",
        "type": "ui_button",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "group": "3220fafa.330906",
        "order": 3,
        "width": "7",
        "height": "1",
        "passthru": false,
        "label": "Refresh Activity",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 400,
        "y": 400,
        "wires": [
            [
                "ad4add7.ad9572"
            ]
        ]
    },
    {
        "id": "cbce0132.b2547",
        "type": "file in",
        "z": "3d602d50.39dab2",
        "name": "",
        "filename": "/opt/hiveid-ap/data/traintraxx_to_jmri.colors.csv",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "x": 660,
        "y": 540,
        "wires": [
            [
                "8de4ae07.976cd"
            ]
        ]
    },
    {
        "id": "8de4ae07.976cd",
        "type": "csv",
        "z": "3d602d50.39dab2",
        "name": "",
        "sep": ",",
        "hdrin": true,
        "hdrout": "",
        "multi": "mult",
        "ret": "\\n",
        "temp": "",
        "skip": "0",
        "x": 990,
        "y": 540,
        "wires": [
            [
                "347260e5.7d676"
            ]
        ]
    },
    {
        "id": "347260e5.7d676",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "Set ColorMap",
        "rules": [
            {
                "t": "set",
                "p": "ColorMap",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1160,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "ddb5369.8da73c8",
        "type": "watch",
        "z": "3d602d50.39dab2",
        "name": "",
        "files": "/opt/hiveid-ap/data/traintraxx_to_jmri.colors.csv",
        "recursive": "",
        "x": 640,
        "y": 500,
        "wires": [
            [
                "cbce0132.b2547"
            ]
        ]
    },
    {
        "id": "16944a31.10d486",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "eq",
                "v": "TrainTraxx",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "JMRI",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "tags",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "inventory",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "sensors",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "locations",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "tracks",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 8,
        "x": 330,
        "y": 280,
        "wires": [
            [],
            [
                "e37006db.0ea648"
            ],
            [
                "391c0a36.ebdac6"
            ],
            [
                "3ca5628c.c8f32e"
            ],
            [
                "87d6b3a0.2d3b2"
            ],
            [
                "8e6dfe75.eac0d"
            ],
            [
                "b2a607c6.1d2058"
            ],
            [
                "39007a50.147b16"
            ]
        ]
    },
    {
        "id": "353f0842.9ef0c8",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Queue Manager",
        "func": "var start = flow.get('start');\n\nvar queue = flow.get('queue');\nvar active = flow.get('active');\nvar working = flow.get('working');\nvar msg2 = {};\nmsg.payload = \"\";\nmsg2.template = \"\";\nif (queue === undefined) {\n    queue = [];\n}\nif (working === undefined) {\n    working = '';\n}\nif (active === undefined) {\n    active = false;\n}\n\nif (start !== false) {\n    var sync_JMRI_Running =global.get('sync_JMRI_Running');\n    var sync_TrainTraxx_Running = global.get('sync_TrainTraxx_Running');\n    msg2.template = '<img src=\"/images/processing.png\" height=\"48px\">';\n    if ((working === 'JMRI' && sync_JMRI_Running === false) || (working === 'TrainTraxx' && sync_TrainTraxx_Running === false)) {\n         active = false;\n    }\n    if (queue.length > 0) {\n        if (active === false) {\n            msg.payload = queue.shift();\n            working = msg.payload;\n            active = true;\n            node.status({fill:\"green\",shape:\"ring\",text:\"Running - Queue Length \" + queue.length + ' Working on - ' + working});\n        }   \n    } else {\n        node.status({fill:\"red\",shape:\"ring\",text:\"Complete\"});\n        active = false;\n        start = false;\n        working = \"\";\n        msg2.template = \"\";\n    }\n} else {\n    node.status({fill:\"red\",shape:\"ring\",text:\"Idle\"});\n    active = false;\n}\n\nflow.set('working',working);\nflow.set('active',active);\nflow.set('queue',queue);\nflow.set('start',start);\n\nreturn [msg,msg2];",
        "outputs": 2,
        "noerr": 0,
        "x": 160,
        "y": 340,
        "wires": [
            [
                "16944a31.10d486"
            ],
            [
                "389170d2.26dd4"
            ]
        ]
    },
    {
        "id": "a6d06b01.0ca268",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Cache Inv Images",
        "func": "var fs = global.get('fs');\nvar TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\nvar imageCacheFolder = '/var/www/html/imageCache/';\nvar IP = global.get('IP');\nvar imageCacheURL = 'http://' + IP.internalIPv4 + '/imageCache/';\n\nvar ImageKey = null;\nfor (var kID in TT.inventory.keys.data) {\n    var curKey = hive.array_combine(TT.inventory.keys.columns,TT.inventory.keys.data[kID]);\n    if (curKey['meta_key'] === 'Image') {\n        ImageKey = Number(kID);\n    }\n}\nmsg.payload = [];\nvar imageRef_Inv = {};\nfor (var iID in TT.inventory.meta.data ) {\n    for (var vID in TT.inventory.meta.data[iID] ) {\n        var curImage = hive.array_combine(TT.inventory.meta.columns, TT.inventory.meta.data[iID][vID]);\n        if (curImage['wp_tt_inventorymetakeys_ID'] === ImageKey) {\n            var t_sourceURL= curImage['meta_value'].split(/\\|\\|/);\n            var sourceURL = t_sourceURL.pop();\n            var t_fileName = sourceURL.match(/\\/([^\\/]+)$/);\n            var fileName = t_fileName[1];\n            imageRef_Inv[iID] = {\n              url  :  sourceURL,\n              filename :  imageCacheFolder + fileName,\n              localurl   :  imageCacheURL + fileName\n            };\n            \n        }\n    }\n}\nglobal.set('imageRef_Inv',imageRef_Inv);    \n    \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 560,
        "wires": [
            [
                "999959cb.c42498"
            ]
        ]
    },
    {
        "id": "999959cb.c42498",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Send Inv Image Requests",
        "func": "var fs = global.get('fs');\nvar imageRef_Inv = global.get('imageRef_Inv');\n\nfor (var id in imageRef_Inv) {\n    if (!fs.existsSync(imageRef_Inv[id].filename)) {\n        \n        node.send({\n            url : imageRef_Inv[id].url,\n            filename : imageRef_Inv[id].filename\n        });\n    }\n}\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 1230,
        "y": 560,
        "wires": [
            [
                "e9df0f66.66f1e"
            ]
        ]
    },
    {
        "id": "e9df0f66.66f1e",
        "type": "http request",
        "z": "1a726252.d178be",
        "name": "",
        "method": "GET",
        "ret": "bin",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "",
        "x": 1470,
        "y": 560,
        "wires": [
            [
                "16325193.5d5f2e"
            ]
        ]
    },
    {
        "id": "16325193.5d5f2e",
        "type": "file",
        "z": "1a726252.d178be",
        "name": "",
        "filename": "",
        "appendNewline": false,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 1470,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "ad4add7.ad9572",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "Format Activity Data",
        "func": "var activity = global.get('Activity');\nvar TT = global.get('TrainTraxx');\nvar JMRI = global.get('JMRI');\nvar JMRI_Config = global.get('JMRI_Config');\nvar hive = global.get('hive');\nvar imageRef_Inv = global.get('imageRef_Inv');\nvar imageRef_Loc = global.get('imageRef_Loc');\n\nmsg.template =  '<style> ' +\n                '   table, th, td { ' +\n                '      text-align:left;  ' +\n                '      border-bottom: 1px solid #ccc; ' +\n                '      border-spacing: 0px; ' +\n                '   } ' +\n                '   th, td { ' +\n                '       padding: 5px; ' +\n                '       font-size: 10pt; ' +\n                '       background-color:none; ' +\n                '   }' +\n                '   .colorBlock { ' +\n                '       height:30px;' +\n                '       width: 30px;' +\n                '   }' +\n                '</style>' +\n    '<div style=\"height:720px;\"><table width=\"100%\">';\nvar tempRow = {};\nvar types = ['location','destination','finalDestination'];\nfor (var i in activity) {\n    tempRow = { \n        \"Location\" : \"\", \n        \"Name\" : \"\", \n        \"Time\" : \"\", \n        \"Image\" : \"/images/traintraxx_logo.png\",\n        \"LocImage\" : \"/images/traintraxx_logo.png\",\n        \"Road Name\" :\"\",\n        \"Road Number\" : \"\",\n        \"Color\" : \"#ffffff\"\n    };\n    var invID = hive.traintraxx.getInventoryIDByTag(activity[i]['UID']);\n    \n    var locID = hive.traintraxx.getHivenodeLocationByMac(activity[i]['MAC'].toUpperCase());\n    if (locID !== undefined && locID > 0) {\n        tempRow.Location = hive.traintraxx.getLocationNameByID(locID);\n        if (imageRef_Loc !== undefined && imageRef_Loc[locID] !== undefined) {\n            tempRow.LocImage = imageRef_Loc[locID].localurl;\n        }\n    }\n    if (invID !== undefined && invID > 0) {\n        var invInfo = hive.array_combine(TT.inventory.columns,TT.inventory.data[invID]);\n        if (invInfo !== undefined && invInfo.NAME !== undefined) {\n            tempRow.Name = invInfo.NAME;\n        }\n        if (TT.inventory.meta.data[invID] !== undefined ) {\n            var tempData = [];\n            for (var curId in TT.inventory.meta.data[invID]) {\n                if (TT.inventory.meta.data[invID][curId] !== undefined) {\n                    var tempInv =  hive.array_combine(TT.inventory.meta.columns,TT.inventory.meta.data[invID][curId]);\n                    var tempMetaKey = hive.array_combine(TT.inventory.keys.columns,TT.inventory.keys.data[tempInv['wp_tt_inventorymetakeys_ID']]);\n                    tempRow[tempMetaKey['meta_key']] = tempInv['meta_value'];\n                }\n            }\n        }\n        if (imageRef_Inv[invID] !== undefined) {\n            tempRow.Image = imageRef_Inv[invID].localurl;\n        }\n    }\n    var JMRIState = '';\n    /* JMRI is going to need to be refreshed before this is going to work right \n       - After the tag is injected, refresh JMRI \n       - Need to make sure the resync is done before reloading the activity\n    */\n    if (JMRI_Config.JMRI_ENABLED === true) {\n        if (i === 0 || activity[i].jmri === undefined || activity[i].jmri === \"\" || activity[i].jmri === '<strong>JMRI Location: </strong><br/>') {\n            var jmri_inventory = hive.jmri.getInventoryByUID(activity[i]['UID']);\n            var locationTracker = {};\n            for (var typeID in types) {\n                var type = types[typeID];\n                var tempLocation = '';\n                var tempLoc = '';\n                var curColor = '';\n                locationTracker[type] = '';\n                if (jmri_inventory !== undefined && jmri_inventory[type] !== undefined && jmri_inventory[type] !== null) {\n                    if (jmri_inventory[type].userName === undefined && jmri_inventory[type].name !== undefined) {\n                        tempLoc = hive.jmri.getLocationByJMRIName(jmri_inventory[type].name);\n                        if (tempLoc !== undefined && tempLoc.userName !== undefined ) {\n                            jmri_inventory[type].userName = tempLoc.userName;\n                        }\n                    }\n\n                    if (jmri_inventory[type].userName === undefined) {\n                        jmri_inventory[type].userName= \"\";\n                    }\n                    if (type === 'location') {\n                        var tempComment='';\n                        if (jmri_inventory.comment !== undefined && jmri_inventory.comment !== '') {\n                            tempComment = hive.proper(jmri_inventory.comment) + ' ';\n                        }\n                        tempLocation += '(' +tempComment + ((jmri_inventory.load === 'E') ? 'Empty' : 'Loaded') + ') ';\n                    }\n                    if ( jmri_inventory[type].userName !== '') {\n                        tempLocation += jmri_inventory[type].userName;\n                        locationTracker[type] = jmri_inventory[type].userName;\n                    }\n                    if (jmri_inventory[type].track !== undefined && jmri_inventory[type].track !== null) {\n                        if (jmri_inventory[type].track.userName === undefined && jmri_inventory[type].track.name !== undefined ) {\n                            tempLoc = hive.jmri.getSubLocationByJMRIName(jmri_inventory[type].track.name);\n                            if (tempLoc !== undefined && tempLoc.userName !== undefined ) {\n                                jmri_inventory[type].track.userName = tempLoc.userName;\n                            }\n                        }\n                        if (jmri_inventory[type].track.userName !== undefined && jmri_inventory[type].track.userName !== \"\") {\n                            tempLocation += '->' + jmri_inventory[type].track.userName;\n                            locationTracker[type] += jmri_inventory[type].track.userName;\n                        }\n                    }\n                }\n                if (tempLocation !== '') {\n                    JMRIState += '<strong class=\"li-color-' + i + '\">JMRI ' + hive.proper(type) + ': </strong>' + tempLocation + '<br/>';   \n                }\n            }\n            if (locationTracker['location'] !== '' && locationTracker['destination'] !== '' && locationTracker['location'] === locationTracker['destination']) {\n                JMRIState += '<style> .li-color-' + i + ': #0f0;</style>';         \n            }\n            activity[i].jmri=JMRIState;\n        } else {\n            JMRIState=activity[i].jmri;\n        }\n    }\n    /* Need to get the TrainTraxx Locations to show the parent as well */\n    msg.template += '<tr>' +\n        '<td width=\"110px;\"><img width=\"100px\" src=\"' + tempRow.Image + '\"></td>' +\n        '<td width=\"40px\">' + \n            '<div class=\"colorBlock\" style=\"background-color: ' + tempRow.Color + ';\">&nbsp;</div>' +\n        '</td>' +\n        '<td>' +\n            '<div>' +\n                '<strong>Name: </strong>' + tempRow.Name +  '<br/>' +\n                '<strong>Road Name/Number: </strong>' + tempRow['Road Name']  + tempRow['Road Number'] +  '<br/>' +\n                '<strong>Time: </strong>' + activity[i].TIME + '<br/>' + \n                '<strong>Location: </strong>' + tempRow.Location + '<br />' +\n                JMRIState + \n            '</div>' +\n        '</td>' +\n        '<td width=\"110px;\"><img width=\"100px\" src=\"' + tempRow.LocImage + '\"></td>' + \n    '</tr>';\n}\nmsg.template += '</table></div>';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 380,
        "wires": [
            [
                "fc758d5.841bd7"
            ]
        ]
    },
    {
        "id": "69ebbb16.225d34",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Cache Loc Images",
        "func": "var fs = global.get('fs');\nvar TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\nvar imageCacheFolder = '/var/www/html/imageCache/';\nvar IP = global.get('IP');\nvar imageCacheURL = 'http://' + IP.internalIPv4 + '/imageCache/';\n\nvar ImageKey = null;\nfor (var kID in TT.locations.keys.data) {\n    var curKey = hive.array_combine(TT.locations.keys.columns,TT.locations.keys.data[kID]);\n    if (curKey['meta_key'] === 'Image') {\n        ImageKey = Number(kID);\n    }\n}\nmsg.payload = [];\nvar imageRef_Loc = {};\nfor (var iID in TT.locations.meta.data ) {\n    for (var vID in TT.locations.meta.data[iID] ) {\n        var curImage = hive.array_combine(TT.locations.meta.columns, TT.locations.meta.data[iID][vID]);\n        if (curImage['wp_tt_locationmetakeys_ID'] === ImageKey) {\n            var t_sourceURL= curImage['meta_value'].split(/\\|\\|/);\n            var sourceURL = t_sourceURL.pop();\n            var t_fileName = sourceURL.match(/\\/([^\\/]+)$/);\n            var fileName = t_fileName[1];\n            imageRef_Loc[iID] = {\n              url  :  sourceURL,\n              filename :  imageCacheFolder + fileName,\n              localurl   :  imageCacheURL + fileName\n            };\n            \n        }\n    }\n}\nglobal.set('imageRef_Loc',imageRef_Loc);    \n    \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 600,
        "wires": [
            [
                "a7ea6d2a.f807d"
            ]
        ]
    },
    {
        "id": "a7ea6d2a.f807d",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Send Loc Image Requests",
        "func": "var fs = global.get('fs');\nvar imageRef_Loc = global.get('imageRef_Loc');\n\nfor (var id in imageRef_Loc) {\n    if (!fs.existsSync(imageRef_Loc[id].filename)) {\n        \n        node.send({\n            url : imageRef_Loc[id].url,\n            filename : imageRef_Loc[id].filename\n        });\n    }\n}\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 1240,
        "y": 600,
        "wires": [
            [
                "e9df0f66.66f1e"
            ]
        ]
    },
    {
        "id": "28f0eae3.a001c6",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "Change Network Mode",
        "group": "73493f86.f11df",
        "order": 2,
        "width": "6",
        "height": "1",
        "passthru": false,
        "label": "Change Network Mode",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "{\"tab\":\"Network Mode\"}",
        "payloadType": "json",
        "topic": "",
        "x": 150,
        "y": 240,
        "wires": [
            [
                "c4940fa6.420ef"
            ]
        ]
    },
    {
        "id": "c4940fa6.420ef",
        "type": "ui_ui_control",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 460,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "b5990f14.1aa5",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "Service Manager",
        "group": "98512fe8.4ad4",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Service Manager",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "{\"tab\":\"Service Manager\"}",
        "payloadType": "json",
        "topic": "",
        "x": 130,
        "y": 280,
        "wires": [
            [
                "c4940fa6.420ef"
            ]
        ]
    },
    {
        "id": "71695295.13227c",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "Application Settings",
        "group": "98512fe8.4ad4",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Application Settings",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "{\"tab\":\"Application Settings\"}",
        "payloadType": "json",
        "topic": "",
        "x": 140,
        "y": 320,
        "wires": [
            [
                "c4940fa6.420ef"
            ]
        ]
    },
    {
        "id": "45022f28.7c1de",
        "type": "http in",
        "z": "f1ec9b2a.1f7298",
        "name": "Ops Endpoint",
        "url": "/ops",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 90,
        "y": 280,
        "wires": [
            [
                "4b6480eb.41615"
            ]
        ]
    },
    {
        "id": "4b6480eb.41615",
        "type": "change",
        "z": "f1ec9b2a.1f7298",
        "name": "Set to jmri_ops",
        "rules": [
            {
                "t": "set",
                "p": "payload.app",
                "pt": "msg",
                "to": "jmri_ops",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 120,
        "y": 320,
        "wires": [
            [
                "fed0826d.2117"
            ]
        ]
    },
    {
        "id": "68c8ebf9.5924f4",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Config.ACTIVITY_SIZE",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "TrainTraxx_Config.ACTIVITY_SIZE",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 500,
        "y": 460,
        "wires": [
            [
                "65aeae7a.7ab35"
            ]
        ]
    },
    {
        "id": "65aeae7a.7ab35",
        "type": "ui_text_input",
        "z": "fd2ebb8a.240a38",
        "name": "Activity to Display Locally",
        "label": "Activity to Display Locally",
        "tooltip": "",
        "group": "c39736a3.dcaf08",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 771,
        "y": 459,
        "wires": [
            [
                "e99c9bca.0c1528"
            ]
        ],
        "outputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "e99c9bca.0c1528",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set TrainTraxx_Config.ACTIVITY_SIZE",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.ACTIVITY_SIZE",
                "pt": "global",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1130,
        "y": 460,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "bcf9b4a9.b55878",
        "type": "ui_dropdown",
        "z": "7bef0b7b.d5a104",
        "name": "Inventory Name",
        "label": "",
        "tooltip": "",
        "place": "Select Inventory Name",
        "group": "d3d8accc.c9188",
        "order": 1,
        "width": "6",
        "height": "1",
        "passthru": false,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 460,
        "y": 480,
        "wires": [
            [
                "57e61d6.5d4c464"
            ]
        ]
    },
    {
        "id": "5a4e3756.aa1e78",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "Build Inventory Name List",
        "func": "var JMRI = global.get('JMRI');\nvar JMRI_Config = global.get('JMRI_Config');\nvar TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\n\nmsg.options=[];\nif (JMRI_Config !== undefined && JMRI_Config.JMRI_ENABLED !== undefined && JMRI_Config.JMRI_ENABLED === true) {\n    \n    if (JMRI !== undefined && JMRI.cars !== undefined && JMRI.cars.data !== undefined && JMRI.cars.data.length > 0) {\n        for (var cID in JMRI.cars.data) {\n            msg.options.push(String(JMRI.cars.data[cID].name));\n        }\n    }\n    if (JMRI !== undefined && JMRI.engines !== undefined && JMRI.engines.data !== undefined && JMRI.engines.data.length > 0) {\n        for (var eID in JMRI.engines.data) {\n            msg.options.push(String(JMRI.engines.data[eID].name));\n        }\n    }\n    \n    if (JMRI_Config.JMRI_ENABLED === false || msg.options.length === 0) { \n        var metaKeys = {};\n        var rnameKey = null;\n        var rnumKey  = null;\n        if (TT !== undefined && TT.inventory !== undefined && TT.inventory.data !== undefined) {\n            for (var kID in TT.inventory.keys.data) {\n                var curKey = hive.array_combine(TT.inventory.keys.columns,TT.inventory.keys.data[kID]);\n                metaKeys[kID] = curKey;\n                if (curKey['meta_key'] === 'Road Name') {\n                    rnameKey = kID;\n                }\n                if (curKey['meta_key'] === 'Road Number') {\n                    rnumKey = kID;\n                }\n            }\n            for (var iID in TT.inventory.data) {\n                var RNAME = '';\n                var RNUM = '';\n                var curInv = hive.array_combine(TT.inventory.columns,TT.inventory.data[iID]);\n                for (var mID in TT.inventory.meta.data[iID]) {\n                    var curMeta = hive.array_combine(TT.inventory.meta.columns,TT.inventory.meta.data[iID][mID]);\n                    if (curMeta['wp_tt_inventorymetakeys_ID'] === Number(rnameKey)) {\n                        RNAME = curMeta['meta_value'];\n                    }\n                    if (curMeta['wp_tt_inventorymetakeys_ID'] === Number(rnumKey)) {\n                        RNUM = curMeta['meta_value'];\n                    }\n                }\n                if (RNAME !== '' && RNUM !== '' ) {\n                    msg.options.push(RNAME + String(RNUM));\n                } else {\n                    msg.options.push(curInv.NAME);\n                }\n            }\n        }\n    }\n}\nif (msg.options.length >0) {\n    msg.options.sort();\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 440,
        "wires": [
            [
                "bcf9b4a9.b55878"
            ]
        ]
    },
    {
        "id": "994a6f66.58304",
        "type": "link in",
        "z": "7bef0b7b.d5a104",
        "name": "Summary Find Inventory iLink",
        "links": [
            "87e07238.a48f2",
            "a02f6d2c.9c107"
        ],
        "x": 255,
        "y": 440,
        "wires": [
            [
                "5a4e3756.aa1e78"
            ]
        ]
    },
    {
        "id": "97a995d3.1794c8",
        "type": "change",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "template",
                "pt": "msg",
                "to": "",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "SelectedInventory",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 640,
        "wires": [
            [
                "8ef9989f.da8ae8"
            ]
        ]
    },
    {
        "id": "6dab22fb.981f0c",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "Search Inventory",
        "func": "var JMRI = global.get('JMRI');\nvar JMRI_Config = global.get('JMRI_Config');\nvar TrainTraxx_Config = global.get('TrainTraxx_Config');\nvar TT = global.get('TrainTraxx');\nvar hive = global.get('hive');\nvar imageRef_Inv = global.get('imageRef_Inv');\nvar Activity = global.get('Activity');\n\nvar inName = msg.payload;\nvar jmri_Info = '';\nvar tt_Info = '';\n\nmsg.template =  '<style>' +\n                '   .info_header {color:#fff; background-color: #f90;} ' +\n                '   .info_title { font-weight: bold;} ' +\n                '   .colorBlock_sm { height:20px; width: 20px;} ' +\n                '</style>' +\n                '<div style=\"height:720px;\"><table width=\"100%\">';\nif (JMRI_Config.JMRI_ENABLED === true) {\n    var types = ['cars','engines'];\n    msg.template += '<tr><th class=\"info_header\" colspan=\"2\">JMRI Info</th></tr>';\n    for (var typeID in types) {\n        var curType = types[typeID];\n        for (var jID in JMRI[curType].data) {\n            var curCar = JMRI[curType].data[jID];\n            var out = {'location' : 'Not Set', 'destination' : 'Not Set', 'finalDestination' : 'Not Set', 'returnWhenEmpty' : 'Not Set'};\n            for (var outKey in out) {\n                if (curCar[outKey] !== undefined && curCar[outKey] !== null) {\n                    if (curCar[outKey].userName !== undefined) {\n                        out[outKey] = curCar[outKey].userName;\n                        if (curCar[outKey].track !== undefined && curCar[outKey].track.userName !== undefined) {\n                            out[outKey] += '->' + curCar[outKey].track.userName;    \n                        }\n                    }\n                }\n            }\n            \n            \n            if (curCar.name === inName) {\n                msg.template += '<tr><td class=\"info_title\">Name:</td><td>' +curCar.name + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Car Type:</td><td>' + ((curCar.carType === undefined || curCar.carType === \"\") ? 'Unknown' : curCar.carType) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Color:</td><td><div class=\"colorBlock_sm\" style=\"background-color:' + ((curCar.color === undefined) ? '#fff' : curCar.color) + ';\">&nbsp;</div></td></tr>' +\n                            '<tr><td class=\"info_title\">Length:</td><td>' + ((curCar.length === undefined || curCar.length === \"\") ? 'Unknown' : curCar.length) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Weight:</td><td>' + ((curCar.weight === undefined || curCar.weight === \"\") ? 'Unknown' : curCar.weight) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Weight Tons:</td><td>' + ((curCar.weightTons === undefined || curCar.weightTons === \"\") ? 'Unknown' : curCar.weightTons) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Load:</td><td>' + ((curCar.load === undefined || curCar.load === \"\") ? 'Unknown' : curCar.load) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">RFID:</td><td>' + ((curCar.rfid === undefined || curCar.rfid ===\"\") ? 'Not Set' : curCar.rfid ) + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Out of Service:</td><td>' + ((curCar.outOfService === false) ? 'No' : 'Yes') + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Last Location:</td><td>' + out['location'] + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Destination:</td><td>' +  out['destination'] + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Final Destination:</td><td>' +  out['finalDestination'] + '</td></tr>' +\n                            '<tr><td class=\"info_title\">Return When Empty:</td><td>' +  out['returnWhenEmpty'] + '</td></tr>';\n            }\n        }\n    }\n}\n\nvar metaKeys = {};\nfor (var kID in TT.inventory.keys.data) {\n    metaKeys[kID] = hive.array_combine(TT.inventory.keys.columns,TT.inventory.keys.data[kID]);\n}\n\nmsg.template += '<tr><th class=\"info_header\" colspan=\"2\">TrainTraxx Info</th></tr>';\nfor (var iID in TT.inventory.data) {\n    var curInv = hive.array_combine(TT.inventory.columns,TT.inventory.data[iID]);\n    var tempOut = {'Road Name' :'','Road Number' :''};\n    for (var mID in TT.inventory.meta.data[iID]) {\n        var curMeta = hive.array_combine(TT.inventory.meta.columns,TT.inventory.meta.data[iID][mID]);\n        var metaKeyID =curMeta['wp_tt_inventorymetakeys_ID'];\n        var tempVal ='';\n        switch (metaKeys[metaKeyID]['OUTPUT_FORMAT']) {\n            case 'image' :\n            case 'train-image' :    \n                break;\n            case 'color':\n                tempVal = '<div class=\"colorBlock_sm\" style=\"background-color:' + curMeta['meta_value'] + ';\">&nbsp;</div>';\n                break;\n            case 'tickCross':\n                tempVal = (curMeta['meta_value'] === true) ? 'Yes' : 'No';\n                break;\n            default: \n                tempVal = curMeta['meta_value'];\n        }\n        if (tempVal !== '') {\n            tempOut[metaKeys[metaKeyID]['meta_key']] = tempVal;\n        }\n    }\n    if (inName === tempOut['Road Name'] + String(tempOut['Road Number']) || inName === curInv.NAME) {\n        msg.template += '<tr><td class=\"info_title\">Name:</td><td>' + curInv.NAME + '</td></tr>'; \n        if (imageRef_Inv[iID] !== undefined) {\n            msg.template += '<tr><td class=\"info_title\">Image:</td><td><img src=\"' + imageRef_Inv[iID].localurl + '\" width=\"100px\"></td></tr>'; \n        }\n        for (var meta_key in tempOut) {\n            msg.template += '<tr><td class=\"info_title\">' + meta_key + ':</td><td>' + tempOut[meta_key] + '</td></tr>';\n        }\n        var activeTag = { ID : null, UID : null, lastActivity : null, lastNode : null };\n        for (var tID in TT.tags.data) {\n            var curTag = hive.array_combine(TT.tags.columns,TT.tags.data[tID]);\n            if (Number(iID) === Number(curTag['wp_tt_inventory_ID'])) {\n                activeTag.ID = tID; \n                activeTag.UID = curTag['TAG_UID'];\n            }\n        }\n        \n        /* Move these to functions */\n        if (Number(activeTag.ID) > 0) {\n            if (TrainTraxx_Config.USE_CACHE === false) {\n                /* Go through the tags_activity */\n                for (var aID in TT.tags_activity.data) {\n                    var curActivity = hive.array_combine(TT.tags_activity.columns,TT.tags_activity.data[aID]);\n                    if (Number(curActivity.wp_tt_tags_ID) === Number(activeTag.ID)) {\n                        if (activeTag.lastActivity === null || Date.parse(activeTag.lastActivity) < Date.parse(curActivity.A_TIME)) {\n                            activeTag.lastActivity = curActivity.A_TIME;\n                            var actNode = hive.array_combine(TT.hivenode.columns,TT.hivenode.data[String(curActivity.wp_tt_hivenode_ID)]);\n                            activeTag.lastNode = actNode.MAC_ADDRESS;\n                        }\n                    }\n                }\n            } else {\n              for (var actID in Activity) {\n                  if (Activity[actID].UID === activeTag.UID) {\n                      if (activeTag.lastActivity === null || Date.parse(activeTag.lastActivity) < Date.parse(Activity[actID].TIME)) {\n                            activeTag.lastActivity = Activity[actID].TIME;\n                            activeTag.lastNode = Activity[actID].MAC;\n                      }\n                  }\n              }  \n            }\n\n            if (activeTag.lastNode !== null) {\n                var tempLoc = hive.getLocationDetails(activeTag.lastNode);\n                var parentName = '';\n                var parentID = tempLoc.location.wp_tt_locations_PARENT_ID;\n                if (Number(parentID) > 0) {\n                    var parentInfo = hive.array_combine(TT.locations.columns,TT.locations.data[parentID]);\n                    parentName = parentInfo.NAME + '->';\n                }\n                var nameOut = 'Not Set';\n                if (tempLoc.location.NAME !== undefined) {\n                    nameOut = parentName +tempLoc.location.NAME;\n                }\n                msg.template += '<tr><td class=\"info_title\">Last Detected Location: </td><td>' + nameOut + '</td></tr>' +\n                                '<tr><td class=\"info_title\">Last Detected Time: </td><td>' + activeTag.lastActivity + '</td></tr>';\n            }\n        }\n    } \n    \n    /* \n    Find the last reported location \n        This is going to require more information to be pulled from TrainTraxx\n    */\n}\nmsg.template += '</table></div>';\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 1030,
        "y": 520,
        "wires": [
            [
                "8ef9989f.da8ae8",
                "5fe29bf3.652b14"
            ]
        ]
    },
    {
        "id": "8ef9989f.da8ae8",
        "type": "ui_template",
        "z": "7bef0b7b.d5a104",
        "group": "d3d8accc.c9188",
        "name": "Search Results",
        "order": 3,
        "width": "6",
        "height": "14",
        "format": "<div ng-bind-html=\"msg.payload\"></div>",
        "storeOutMessages": false,
        "fwdInMessages": false,
        "templateScope": "local",
        "x": 1280,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "a02f6d2c.9c107",
        "type": "link out",
        "z": "1a726252.d178be",
        "name": "Summary Find Inventory oLink",
        "links": [
            "994a6f66.58304"
        ],
        "x": 915,
        "y": 640,
        "wires": []
    },
    {
        "id": "87e07238.a48f2",
        "type": "link out",
        "z": "164213bd.e3dd4c",
        "name": "Summary Find Inventory oLink",
        "links": [
            "994a6f66.58304"
        ],
        "x": 835,
        "y": 1220,
        "wires": []
    },
    {
        "id": "5fe29bf3.652b14",
        "type": "debug",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1270,
        "y": 520,
        "wires": []
    },
    {
        "id": "f1c39296.374d1",
        "type": "switch",
        "z": "a40e76b8.4d8a48",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 710,
        "y": 140,
        "wires": [
            [
                "958d130f.9dbf1"
            ],
            []
        ]
    },
    {
        "id": "5824b887.3ea998",
        "type": "switch",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 690,
        "y": 480,
        "wires": [
            [
                "30269361.9d143c"
            ],
            [
                "258b1950.c0a4a6"
            ]
        ]
    },
    {
        "id": "d7e7e4d1.7489a8",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "env": [],
        "x": 770,
        "y": 600,
        "wires": [
            [
                "30269361.9d143c"
            ],
            []
        ]
    },
    {
        "id": "30269361.9d143c",
        "type": "change",
        "z": "7bef0b7b.d5a104",
        "name": "Set Selected Inventory",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SelectedInventory",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1020,
        "y": 480,
        "wires": [
            [
                "6dab22fb.981f0c"
            ]
        ]
    },
    {
        "id": "258b1950.c0a4a6",
        "type": "change",
        "z": "7bef0b7b.d5a104",
        "name": "Set Tags Activity",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "tags_activity",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 740,
        "y": 560,
        "wires": [
            [
                "d7e7e4d1.7489a8"
            ]
        ]
    },
    {
        "id": "162cfc56.f88534",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Car/Engine Process",
        "func": "var RFIDRequest = msg.payload;\n\nvar hive = global.get('hive');\nvar JMRI_URL = global.get('JMRI_URL');\n\nvar location = hive.jmri.getLocationByTrainTraxxMAC(RFIDRequest.MAC);\nvar tag = hive.getTagName(RFIDRequest.UID);\nvar inventory = hive.jmri.getInventoryByTag(tag.name);\nvar tempMsg = {};\nif (inventory !== undefined && inventory.name !== undefined) {\n    if (location !== undefined && location.name !== undefined) {\n        tempMsg = {\n          name : inventory.name,\n          location : location,\n          load : inventory.load,\n          comment : inventory.comment\n        };\n        if (inventory.destination !== undefined && inventory.destination !== null && inventory.destination.name !== undefined) {\n            if (inventory.destination.name === location.name) {\n                if (    inventory.destination.track !== undefined && inventory.destination.track !== null && inventory.destination.track.name !== undefined && \n                        location.track !== undefined && location.track !== null && location.track.name !== undefined) {\n                    if (location.track.name === inventory.destination.track.name) {\n                        /* Toggle State */\n                        tempMsg.comment = (inventory.comment === 'arrived') ? 'left' : 'arrived';\n                        if (tempMsg.comment === 'arrived') {\n                            tempMsg.load = (inventory.load === 'E') ? 'L' : 'E';\n                        }\n                    } else {\n                        tempMsg.comment = 'enroute';\n                    }\n                } else {\n                    tempMsg.comment = (inventory.comment === 'arrived') ? 'left' : 'arrived';\n                    if (tempMsg.comment === 'arrived') {\n                        tempMsg.load = (inventory.load === 'E') ? 'L' : 'E';\n                    } else {\n                        tempMsg.comment = 'enroute';\n                    }\n                }\n            }\n        }\n        var type = inventory.type;\n        node.send({\n          headers : {'content-type':'application/json'},\n          url : JMRI_URL + 'json/'+ type,\n          topic : type,\n          verb : 'POST',\n          payload : {\n              type : type,\n              data : tempMsg\n          }\n        });\n    }\n}\n\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 640,
        "wires": [
            [
                "2aac0d87.303432"
            ]
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "2be808d1.3a5488",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "rfid_queue",
                "pt": "flow",
                "to": "[\"reporters\",\"sensors\",\"idtag\",\"inventory\",\"resetJMRIState\",\"refresh\"]",
                "tot": "json"
            },
            {
                "t": "set",
                "p": "rfid_running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "rfid_done",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "message",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "ccd8373c.7b7f08",
        "type": "inject",
        "z": "164213bd.e3dd4c",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": ".3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 130,
        "y": 480,
        "wires": [
            [
                "1c2af215.ee5c3e"
            ]
        ]
    },
    {
        "id": "1c2af215.ee5c3e",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "QueueNotEmpty",
        "property": "rfid_queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 170,
        "y": 520,
        "wires": [
            [
                "c516a97c.430558"
            ]
        ]
    },
    {
        "id": "c516a97c.430558",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "IsNotRunning",
        "property": "rfid_running",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 190,
        "y": 560,
        "wires": [
            [
                "635db4f6.97515c"
            ]
        ]
    },
    {
        "id": "635db4f6.97515c",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Extract Queue",
        "func": "var rfid_queue = flow.get('rfid_queue');\nmsg.topic = rfid_queue.shift();\nflow.set('rfid_queue',rfid_queue);\nmsg.payload = flow.get('message');\n\nif (msg.payload.UID !== undefined && msg.payload.UID !== \"\" && \n    msg.payload.MAC !== undefined && msg.payload.MAC !== \"\") {\n    node.send(msg);\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 220,
        "y": 600,
        "wires": [
            [
                "cbab1184.86b04"
            ]
        ]
    },
    {
        "id": "cbab1184.86b04",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "topic",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "reporters",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "sensors",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "idtag",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "inventory",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "resetJMRIState",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "refresh",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 6,
        "x": 450,
        "y": 600,
        "wires": [
            [
                "deb0f6c8.09aad8"
            ],
            [
                "d1fcbae3.09c268"
            ],
            [
                "cbb05792.286828"
            ],
            [
                "162cfc56.f88534"
            ],
            [
                "a605f456.8e5238"
            ],
            [
                "cb778529.c41cc8"
            ]
        ]
    },
    {
        "id": "9326d651.dcf078",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "RFID Queue is Empty",
        "property": "rfid_queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1420,
        "y": 680,
        "wires": [
            [
                "14f4759a.22740a",
                "5e045e48.a8463"
            ],
            [
                "14f4759a.22740a"
            ]
        ]
    },
    {
        "id": "5e045e48.a8463",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set RFID Done",
        "rules": [
            {
                "t": "set",
                "p": "rfid_done",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1640,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "14f4759a.22740a",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set RFID Running False",
        "rules": [
            {
                "t": "set",
                "p": "rfid_running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1670,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "14999e7.da8fb62",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "Clean Cache",
        "group": "a9319cec.7d9c",
        "order": 1,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Clean Cache",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "delete",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 90,
        "y": 1580,
        "wires": [
            [
                "3570e4ea.63c73c"
            ]
        ]
    },
    {
        "id": "3570e4ea.63c73c",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "Clean House",
        "rules": [
            {
                "t": "delete",
                "p": "Activity",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "JMRI",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "Probe_Health",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "Probe_History",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "Probes",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "TrainTraxx",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "imageRef",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "imageRef_Inv",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "imageRef_Loc",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "sync_JMRI_Running",
                "pt": "global"
            },
            {
                "t": "delete",
                "p": "sync.TrainTraxx_Running",
                "pt": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 390,
        "y": 1580,
        "wires": [
            [
                "e1986986.8508b8",
                "f727db45.f34038",
                "da040670.af7ff8",
                "42c8554f.d642ac",
                "2e0d514c.6cd8ce"
            ]
        ]
    },
    {
        "id": "f727db45.f34038",
        "type": "link out",
        "z": "a06855ce.9f5488",
        "name": "JMRI Data Clean oLink",
        "links": [
            "7d4b34cc.654fec"
        ],
        "x": 555,
        "y": 1560,
        "wires": []
    },
    {
        "id": "da040670.af7ff8",
        "type": "link out",
        "z": "a06855ce.9f5488",
        "name": "TrainTraxx Data Clean oLink",
        "links": [
            "829d7cac.b3072"
        ],
        "x": 595,
        "y": 1580,
        "wires": []
    },
    {
        "id": "829d7cac.b3072",
        "type": "link in",
        "z": "1a726252.d178be",
        "name": "TrainTraxx Data Clean iLink",
        "links": [
            "da040670.af7ff8"
        ],
        "x": 155,
        "y": 80,
        "wires": [
            [
                "6bd63222.fa808c"
            ]
        ]
    },
    {
        "id": "6bd63222.fa808c",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "TrainTraxx Cleaned",
        "rules": [
            {
                "t": "delete",
                "p": "queue",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "ready",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "running",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "stored",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "sync_TrainTraxx_Running",
                "pt": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 325,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "7d4b34cc.654fec",
        "type": "link in",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Data Clean iLink",
        "links": [
            "f727db45.f34038"
        ],
        "x": 95,
        "y": 160,
        "wires": [
            [
                "629b2638.618908"
            ]
        ]
    },
    {
        "id": "629b2638.618908",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Clean JMRI",
        "rules": [
            {
                "t": "delete",
                "p": "message",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "queue",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "ready",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "running",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "stored",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "rfid_done",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "rfid_queue",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "rfid_running",
                "pt": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 290,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "78979090.cc80c",
        "type": "link in",
        "z": "3d602d50.39dab2",
        "name": "TrainTraxx to JMRI Sync Clean iLink",
        "links": [
            "42c8554f.d642ac"
        ],
        "x": 55,
        "y": 60,
        "wires": [
            [
                "2adbcf37.a3793"
            ]
        ]
    },
    {
        "id": "2adbcf37.a3793",
        "type": "change",
        "z": "3d602d50.39dab2",
        "name": "Clean TrainTraxx to Flow Cache",
        "rules": [
            {
                "t": "delete",
                "p": "active",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "queue",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "start",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "tagLookup",
                "pt": "flow"
            },
            {
                "t": "delete",
                "p": "working",
                "pt": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 410,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "42c8554f.d642ac",
        "type": "link out",
        "z": "a06855ce.9f5488",
        "name": "TrainTraxx to JMRI Sync Clean oLink",
        "links": [
            "78979090.cc80c"
        ],
        "x": 555,
        "y": 1600,
        "wires": []
    },
    {
        "id": "5af99042.1aa4c",
        "type": "change",
        "z": "7bef0b7b.d5a104",
        "name": "Clear Template",
        "rules": [
            {
                "t": "set",
                "p": "template",
                "pt": "msg",
                "to": "",
                "tot": "str"
            },
            {
                "t": "delete",
                "p": "selectedInventory",
                "pt": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 700,
        "y": 140,
        "wires": [
            [
                "fc758d5.841bd7"
            ]
        ]
    },
    {
        "id": "d64a561f.a26af8",
        "type": "link in",
        "z": "7bef0b7b.d5a104",
        "name": "Clear TrainTraxx Template iLink",
        "links": [
            "2e0d514c.6cd8ce"
        ],
        "x": 315,
        "y": 140,
        "wires": [
            [
                "5af99042.1aa4c"
            ]
        ]
    },
    {
        "id": "2e0d514c.6cd8ce",
        "type": "link out",
        "z": "a06855ce.9f5488",
        "name": "Clear TrainTraxx Template oLink",
        "links": [
            "d64a561f.a26af8"
        ],
        "x": 595,
        "y": 1620,
        "wires": []
    },
    {
        "id": "800d24d6.ba7e68",
        "type": "link out",
        "z": "164213bd.e3dd4c",
        "name": "TrainTraxx Activity Refresh oLink",
        "links": [
            "4cf16bd9.60c0c4"
        ],
        "x": 595,
        "y": 1100,
        "wires": []
    },
    {
        "id": "4cf16bd9.60c0c4",
        "type": "link in",
        "z": "7bef0b7b.d5a104",
        "name": "TrainTraxx Activity Refresh iLink",
        "links": [
            "800d24d6.ba7e68"
        ],
        "x": 255,
        "y": 340,
        "wires": [
            [
                "ad4add7.ad9572"
            ]
        ]
    },
    {
        "id": "b9140f6f.1330e",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "2",
        "x": 110,
        "y": 1620,
        "wires": [
            [
                "e1986986.8508b8"
            ]
        ]
    },
    {
        "id": "34e8c9d3.9b8406",
        "type": "ui_button",
        "z": "7bef0b7b.d5a104",
        "name": "Clear Activity",
        "group": "3220fafa.330906",
        "order": 2,
        "width": "7",
        "height": "1",
        "passthru": false,
        "label": "Clear Activity",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "delete",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 190,
        "y": 80,
        "wires": [
            [
                "7ab4dcfd.fab8d4"
            ]
        ]
    },
    {
        "id": "7ab4dcfd.fab8d4",
        "type": "change",
        "z": "7bef0b7b.d5a104",
        "name": "Clear Activity",
        "rules": [
            {
                "t": "delete",
                "p": "Activity",
                "pt": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 80,
        "wires": [
            [
                "5af99042.1aa4c"
            ]
        ]
    },
    {
        "id": "5652d958.4bda68",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "Set Version",
        "rules": [
            {
                "t": "set",
                "p": "Version",
                "pt": "global",
                "to": "20190924.0001",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Version",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 630,
        "y": 80,
        "wires": [
            [
                "1c7f4e71.b72dd2"
            ]
        ]
    },
    {
        "id": "1c7f4e71.b72dd2",
        "type": "ui_text",
        "z": "a06855ce.9f5488",
        "group": "17f52c5b.cfb014",
        "order": 2,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "HiveID Version",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 820,
        "y": 80,
        "wires": []
    },
    {
        "id": "a605f456.8e5238",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Reset JMRI Activity State",
        "func": "var RFIDRequest = msg.payload;\n\nvar hive = global.get('hive');\nvar Activity = global.get('Activity');\nif (!hive.empty(Activity) && Activity.length > 0) {\n    for (var aID in Activity) {\n        if (Activity[aID].TIME == RFIDRequest.TIME && Activity[aID].MAC == RFIDRequest.MAC && Activity[aID].UID == RFIDRequest.UID) {\n            Activity[aID].jmri ='';        \n        }\n    }\n}\nglobal.set('Activity',Activity);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 680,
        "wires": [
            [
                "9326d651.dcf078"
            ]
        ]
    },
    {
        "id": "f97f1289.0ba4a",
        "type": "function",
        "z": "5e61e22e.7a581c",
        "name": "Redundant Read Reduction",
        "func": "var hive = global.get('hive');\nmsg.payload.pass = true;\nvar Activity = global.get('Activity');\nvar curDate = Date.parse(msg.payload.DATA['TIME']);\nif (!hive.empty(Activity) && Activity.length > 0) {\n    for (var aID in Activity) {\n        if (Activity[aID].MAC === msg.payload.DATA.MAC && Activity[aID].UID === msg.payload.DATA.UID) {\n            console.log('Date Compare', curDate,Date.parse(Activity[aID].TIME),curDate-Date.parse(Activity[aID].TIME));\n            if ((curDate - Date.parse(Activity[aID].TIME)) < 3000) {\n                msg.payload.pass= false;\n            }\n        }\n    }\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 240,
        "y": 260,
        "wires": [
            [
                "1500441d.dabf1c",
                "443de3c8.17f85c"
            ]
        ]
    },
    {
        "id": "443de3c8.17f85c",
        "type": "switch",
        "z": "5e61e22e.7a581c",
        "name": "Should I Pass the message",
        "property": "payload.pass",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 280,
        "y": 300,
        "wires": [
            [
                "e7682bc7.41dee8",
                "9860fd21.83ed9",
                "1500441d.dabf1c",
                "6aa1ae41.17382"
            ],
            [
                "b9f859cf.53b5f8"
            ]
        ]
    },
    {
        "id": "b9f859cf.53b5f8",
        "type": "http response",
        "z": "5e61e22e.7a581c",
        "name": "",
        "statusCode": "409",
        "headers": {},
        "x": 260,
        "y": 340,
        "wires": []
    },
    {
        "id": "7a77d6f7.848b78",
        "type": "json",
        "z": "5e61e22e.7a581c",
        "name": "",
        "property": "payload.DATA",
        "action": "obj",
        "pretty": false,
        "x": 310,
        "y": 180,
        "wires": [
            [
                "bb2325ab.4eb048"
            ]
        ]
    },
    {
        "id": "bb2325ab.4eb048",
        "type": "moment",
        "z": "5e61e22e.7a581c",
        "name": "",
        "topic": "",
        "input": "",
        "inputType": "date",
        "inTz": "America/Chicago",
        "adjAmount": 0,
        "adjType": "days",
        "adjDir": "add",
        "format": "YYYY-MM-DD HH:mm:ss",
        "locale": "en_US",
        "output": "payload.DATA.TIME",
        "outputType": "msg",
        "outTz": "America/Chicago",
        "x": 200,
        "y": 220,
        "wires": [
            [
                "f97f1289.0ba4a"
            ]
        ]
    },
    {
        "id": "caa3617a.baa06",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "Setup/Update JMRI",
        "group": "17f52c5b.cfb014",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Setup/Update JMRI",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "train",
        "payload": "JMRI is upgrading, once completed it will request a reboot.",
        "payloadType": "str",
        "topic": "",
        "x": 140,
        "y": 700,
        "wires": [
            [
                "6c1c07e9.b08868",
                "6c97017c.caa18"
            ]
        ]
    },
    {
        "id": "6c1c07e9.b08868",
        "type": "exec",
        "z": "a06855ce.9f5488",
        "command": "/opt/hiveid-ap/setup_jmri.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 420,
        "y": 700,
        "wires": [
            [],
            [],
            [
                "928dc5c7.9f6db8"
            ]
        ]
    },
    {
        "id": "928dc5c7.9f6db8",
        "type": "switch",
        "z": "a06855ce.9f5488",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 650,
        "y": 700,
        "wires": [
            [
                "5a9407e8.fa2398"
            ],
            [
                "751c7ff8.4e3c4"
            ]
        ]
    },
    {
        "id": "fbc8aba4.a7ccb8",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "3",
        "highlight": "red",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Show Update Failure",
        "x": 1220,
        "y": 700,
        "wires": []
    },
    {
        "id": "751c7ff8.4e3c4",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Updates Failed",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1000,
        "y": 700,
        "wires": [
            [
                "fbc8aba4.a7ccb8"
            ]
        ]
    },
    {
        "id": "24524c24.b32784",
        "type": "json",
        "z": "5e61e22e.7a581c",
        "name": "",
        "property": "payload.DATA",
        "action": "str",
        "pretty": true,
        "x": 770,
        "y": 380,
        "wires": [
            [
                "2fe76b58.5e83e4"
            ]
        ]
    },
    {
        "id": "6aa1ae41.17382",
        "type": "switch",
        "z": "5e61e22e.7a581c",
        "name": "Offline Mode",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 570,
        "y": 380,
        "wires": [
            [
                "f8417fa7.a9bef"
            ],
            [
                "24524c24.b32784"
            ]
        ]
    },
    {
        "id": "f8417fa7.a9bef",
        "type": "http response",
        "z": "5e61e22e.7a581c",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 780,
        "y": 340,
        "wires": []
    },
    {
        "id": "b2a607c6.1d2058",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Format Locations Parents",
        "func": "var TT = global.get('TrainTraxx');\nvar JMRI = global.get('JMRI');\nvar JMRI_URL = global.get('JMRI_URL');\nvar hive = global.get('hive');\n//var _ = global.get('_');\nvar FlowMap = flow.get('FlowMap');\nmsg.topic = 'location';\nvar metaKeys = {};\nif (TT !== undefined && TT.locations !== undefined && TT.locations.data !== undefined) {\n    var keyColumns = TT.locations.keys.columns;\n    for (var keyID in TT.locations.keys.data) {\n        var curKey = TT.locations.keys.data[keyID];    \n        metaKeys[keyID] =  hive.array_combine(keyColumns,curKey);\n    }\n    \n    var locationColumns = TT.locations.columns;\n    var tempTrack = [];\n    for (var locationID in TT.locations.data) {\n        var curLocation = hive.array_combine(locationColumns,TT.locations.data[locationID]);\n        curLocation.userName = curLocation['NAME'];\n        var parentID = curLocation['wp_tt_locations_PARENT_ID'];\n        if (parentID === undefined || parentID === null || Number(parentID) === 0) {\n            var metaColumns = TT.locations.meta.columns;\n            if (TT.locations.meta.data[locationID] !== undefined ) {\n                for (var metaID in TT.locations.meta.data[locationID]) {\n                    var curMeta =  hive.array_combine(metaColumns,TT.locations.meta.data[locationID][metaID]);\n                    curLocation[metaKeys[curMeta['wp_tt_locationmetakeys_ID']]['meta_key']] = curMeta['meta_value'];\n                }\n            }\n            /* Translate Fields */\n            for (var i in FlowMap) {\n                var curMap = FlowMap[i];\n                if (curMap.TrainTraxx_Type === 'locations' && curLocation[curMap.TrainTraxx] !== undefined) {\n                    curLocation[curMap.JMRI] = curLocation[curMap.TrainTraxx];\n                }\n            }\n            /* Get Reporter */\n            var tempReporter = hive.jmri.getReporterNameByLocation(curLocation.userName);\n            if (tempReporter !== undefined && tempReporter !== \"\") {\n                curLocation.reporter = tempReporter;\n            }\n            /* Clean out unused entries */\n            var validFields = ['userName','name','comment','length','location','reporter','type', 'carType','reporterObj'];\n            var tempComment = [];\n            for (var a in curLocation) {\n                var flag = false;\n                for (var b in validFields) {\n                    if (a === validFields[b]) {\n                        flag = true;\n                    }\n                }\n                if (flag === false) {\n                    tempComment.push(a + ': ' + curLocation[a]);\n                    delete curLocation[a];\n                }\n            }\n            if (curLocation['comment'] === undefined) {\n                curLocation['comment'] = \"\";\n            }\n            curLocation['comment'] += tempComment.join('\\n');\n            jmriLocation = hive.jmri.getLocation(curLocation.userName);\n            delete curLocation.type;\n            var message = {\n                type : 'location',\n                data : curLocation\n            };\n            var verb = 'PUT';\n            if (jmriLocation.name !== undefined) {\n                message.data['name'] = jmriLocation.name;\n                verb = 'POST';\n            } \n            node.send({ \n                verb : verb,\n                payload : message,\n                topic: 'locations',\n                url :  JMRI_URL + 'json/location',\n                headers : {'content-type':'application/json'}\n            });\n        }\n    }\n}\n\nflow.set('active', false);\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 380,
        "wires": [
            [
                "3bd4107f.d2b5a"
            ]
        ]
    },
    {
        "id": "39007a50.147b16",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Format Location Tracks",
        "func": "var TT = global.get('TrainTraxx');\nvar JMRI = global.get('JMRI');\nvar JMRI_URL = global.get('JMRI_URL');\nvar hive = global.get('hive');\nvar _ = global.get('_');\nvar FlowMap = flow.get('FlowMap');\nvar metaKeys = {};\nvar newID = {};\nif (TT !== undefined && TT.locations !== undefined && TT.locations.data !== undefined) {\n    \n    var keyColumns = TT.locations.keys.columns;\n    for (var keyID in TT.locations.keys.data) {\n        var curKey = TT.locations.keys.data[keyID];    \n        metaKeys[keyID] =  hive.array_combine(keyColumns,curKey);\n    }\n    \n    var locationColumns = TT.locations.columns;\n    var tempTrack = [];\n    for (var locationID in TT.locations.data) {\n        var curLocation = hive.array_combine(locationColumns,TT.locations.data[locationID]);\n        curLocation.userName = curLocation['NAME'];\n        var parentID = curLocation['wp_tt_locations_PARENT_ID'];\n        var metaColumns = TT.locations.meta.columns;\n        if (TT.locations.meta.data[locationID] !== undefined ) {\n            for (var metaID in TT.locations.meta.data[locationID]) {\n                var curMeta =  hive.array_combine(metaColumns,TT.locations.meta.data[locationID][metaID]);\n                curLocation[metaKeys[curMeta['wp_tt_locationmetakeys_ID']]['meta_key']] = curMeta['meta_value'];\n            }\n        }\n        /* Translate Fields */\n        for (var i in FlowMap) {\n            var curMap = FlowMap[i];\n            if (curMap.TrainTraxx_Type === 'locations' && curLocation[curMap.TrainTraxx] !== undefined) {\n                curLocation[curMap.JMRI] = curLocation[curMap.TrainTraxx];\n            }\n        }\n        /* Get Reporter */\n        var tempReporter = hive.jmri.getReporterNameByLocation(curLocation.userName);\n        if (tempReporter !== undefined && tempReporter !== \"\") {\n            curLocation.reporter = tempReporter;\n        }\n        /* Clean out unused entries */\n        var validFields = ['userName','name','comment','length','location','reporter','type', 'carType','reporterObj'];\n        var tempComment = [];\n        for (var a in curLocation) {\n            var flag = false;\n            for (var b in validFields) {\n                if (a === validFields[b]) {\n                    flag = true;\n                }\n            }\n            if (flag === false) {\n                tempComment.push(a + ': ' + curLocation[a]);\n                delete curLocation[a];\n            }\n        }\n        if (curLocation['comment'] === undefined) {\n            curLocation['comment'] = \"\";\n        }\n        curLocation['comment'] += tempComment.join('\\n');\n    \n        if (Number(parentID) > 0) {\n            /* Need to append to POST or PUT depending on if it exists or the parent exists\n                Location can be defined based on extracting the parent as well which will define\n                its assoc array key\n            */\n            var parent = hive.array_combine(TT.locations.columns,TT.locations.data[parentID]);\n            \n            var JMRIParent = {};\n            var verb = 'PUT';\n            if (JMRI.locations.map[parent.NAME] !== undefined) {\n                JMRIParent = JMRI.locations.data[JMRI.locations.map[parent.NAME]];\n                curLocation['location'] = JMRIParent.name;\n            }\n            /* Check if it already exists and get Next ID just in case it doesn't  */\n            if (JMRIParent.name !== undefined) {\n                if (JMRIParent.track !== undefined && JMRIParent.track.length > 0) {\n                    for (var pID in JMRIParent.track) {\n                        var tempID = JMRIParent.track[pID].name.match(/(\\d+)$/);\n                        if (tempID[1] !== undefined && Number(tempID[1]) > newID[parentID]) {\n                            newID[parentID] = Number(tempID[1]) +1 ;\n                        }\n                        if (JMRIParent.track[pID].userName === curLocation.userName) {\n                            verb = 'POST';\n                            curLocation.name = JMRIParent.track[pID].name;\n                        }\n                    }\n                } else {\n                    if (newID[parentID] === undefined) {\n                        newID[parentID] = 1;\n                    } else {\n                        newID[parentID] +=1;\n                    }\n                }\n            }\n\n            if (curLocation.name === undefined || curLocation.name === \"\") {\n                curLocation.name = JMRIParent.name + 's' + newID[parentID];\n            }\n            var message = { 'type' : 'track', 'data' : curLocation };\n            node.send({ \n                verb : verb,\n                payload : message,\n                topic: \"track\",\n                url :  JMRI_URL + 'json/track',\n                headers : {'content-type':'application/json'}\n            });\n            \n        } \n    }\n}\nflow.set('active', false);\nreturn;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 420,
        "wires": [
            [
                "3bd4107f.d2b5a"
            ]
        ]
    },
    {
        "id": "da8a2ab7.df8648",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "IsGoodResponse",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1390,
        "y": 300,
        "wires": [
            [
                "7e6bf024.4ff5a"
            ],
            [
                "d939d611.5a0548"
            ]
        ]
    },
    {
        "id": "28304277.30a6ce",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Merge Info",
        "func": "var JMRI = global.get('JMRI.' + msg.topic);\nvar flag = false;\n\nif (JMRI === undefined || JMRI.data === undefined) {\n    console.log('JMRI Data was missing for ' +msg.topic);\n    JMRI = { data : [], map : {}, nextID : 1 ,lastLoad : 0  };\n}\n\nif (msg.payload === undefined || msg.payload.data === undefined || msg.payload.data.name === undefined) {\n    console.log('Unable to merge ',msg.payload );\n    return false;\n}\n    \nfor (var dID in JMRI.data) { \n    var curData = JMRI.data[dID];\n    if (msg.payload.data.name === curData.name) {\n        flag=true;   \n        JMRI.data[dID] = msg.payload.data;\n    }\n}\nif (flag === false) {\n    JMRI.data.push(msg.payload.data);\n    JMRI.map[msg.payload.data.name] = JMRI.data.length - 1;\n    var match = msg.payload.data.name.match(/(\\d+)$/);\n    if (match[1] !== undefined && Number(match[1]) > 0) {\n        JMRI.nextID = Number(match[1]) + 1;\n    }\n}\nJMRI.lastLoad = Date.now();\nglobal.set('JMRI.' + msg.topic,JMRI);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1610,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "5b606c06.85ad64",
        "type": "link in",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Data iLink - Single",
        "links": [],
        "x": 135,
        "y": 820,
        "wires": [
            [
                "6c33a47d.c05f5c"
            ]
        ]
    },
    {
        "id": "8e3205c5.5dc048",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set Defaults for JMRI Refresh",
        "rules": [
            {
                "t": "set",
                "p": "stored",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "ready",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "running",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "sync_JMRI_Running",
                "pt": "global",
                "to": "JMRI_Config.JMRI_ENABLED",
                "tot": "global"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 820,
        "wires": [
            [
                "9326d651.dcf078"
            ]
        ]
    },
    {
        "id": "6c33a47d.c05f5c",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Add to Queue ",
        "func": "var queue =flow.get('queue');\nif (queue !== undefined && queue.length > 0  ) {\n    var flag = false;\n    for (var i in queue) {\n        if (queue[i] === msg.payload) {\n            flag=true;\n        }\n    }\n    if (flag === false) {\n        queue.push(msg.payload);\n    }\n} else {\n    queue = [msg.payload];\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 415,
        "y": 820,
        "wires": [
            [
                "8e3205c5.5dc048"
            ]
        ]
    },
    {
        "id": "cb778529.c41cc8",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Set All to Queue",
        "rules": [
            {
                "t": "set",
                "p": "queue",
                "pt": "flow",
                "to": "[\"cars\",\"engines\",\"locations\",\"trains\",\"reporters\",\"sensors\",\"idTag\"]",
                "tot": "json"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 780,
        "wires": [
            [
                "8e3205c5.5dc048"
            ]
        ]
    },
    {
        "id": "7e6bf024.4ff5a",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "IsNotTracks",
        "property": "topic",
        "propertyType": "msg",
        "rules": [
            {
                "t": "neq",
                "v": "track",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 1,
        "x": 1610,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "44555692.009968",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "5",
        "x": 1930,
        "y": 940,
        "wires": [
            [
                "de4995db.6ad218"
            ]
        ]
    },
    {
        "id": "de4995db.6ad218",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set QR Info",
        "func": "var gatewayInfo = global.get('gatewayInfo.hostapd');\nmsg.payload = \"\";\nif (gatewayInfo !== undefined && gatewayInfo.wpa_key_mgmt !== undefined) {\n    var tempSec = gatewayInfo.wpa_key_mgmt.split(/\\-/);\n    msg.payload = '\"WIFI:S:' + gatewayInfo.ssid + ';T:' + tempSec[0] +';P:'+ gatewayInfo.wpa_passphrase + ';;\"'; \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1970,
        "y": 980,
        "wires": [
            [
                "bea6969b.ca8e38"
            ]
        ]
    },
    {
        "id": "84b71b62.f45d08",
        "type": "exec",
        "z": "9745920.d8a397",
        "command": "qrencode -o /var/www/html/qr/wifi.png",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 2420,
        "y": 980,
        "wires": [
            [],
            [],
            [
                "54624b9a.52caf4"
            ]
        ]
    },
    {
        "id": "54624b9a.52caf4",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload.code",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 2130,
        "y": 1040,
        "wires": [
            [
                "6176f5b2.17747c"
            ],
            []
        ]
    },
    {
        "id": "6176f5b2.17747c",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set WiFi QR",
        "func": "var IP = global.get('IP');\nvar gatewayInfo = global.get('gatewayInfo.hostapd');\nmsg.template = '<center><img width=\"80%\" src=\"http://' + IP.internalIPv4 + '/qr/wifi.png\">' + \n                '<hr/>Connect to ' + gatewayInfo.ssid + '</center>';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 2330,
        "y": 1040,
        "wires": [
            [
                "42892d41.58e624"
            ]
        ]
    },
    {
        "id": "42892d41.58e624",
        "type": "ui_template",
        "z": "9745920.d8a397",
        "group": "73493f86.f11df",
        "name": "QR Code",
        "order": 3,
        "width": "6",
        "height": "6",
        "format": "<div ng-bind-html=\"msg.payload\"></div>",
        "storeOutMessages": false,
        "fwdInMessages": false,
        "templateScope": "local",
        "x": 2540,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "ca44cb8b.516748",
        "type": "debug",
        "z": "9745920.d8a397",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 2330,
        "y": 940,
        "wires": []
    },
    {
        "id": "98537cc2.6b418",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Generate Train Links",
        "func": "var JMRI = global.get('JMRI');\nvar trains = {};\nif (JMRI !== undefined && JMRI.trains !== undefined) {\n    trains = JMRI.trains;\n}\nvar JMRI_URL = global.get('JMRI_URL');\nvar IP = global.get('IP');\nvar list = [];\nif (trains !== {} && trains.data !== undefined && trains.data.length > 0) {\n    for (var tID in trains.data) {\n        var curTrain = trains.data[tID];\n        \n        var manifestFile = 'train_'+ curTrain.name + '_manifest.png';\n        var manifestLink = JMRI_URL +'operations/manifest/' + curTrain.name + '?format=html';\n        var manifestImage = '/var/www/html/qr/' + manifestFile;\n        node.send({\n            payload : ' -o ' + manifestImage + ' \"' + manifestLink + '\"',\n            topic: 'link'\n        });\n        \n        var conductorFile = 'train_'+ curTrain.name + '_conductor.png';\n        var conductorLink = JMRI_URL +'operations/trains/' + curTrain.name + '/conductor';\n        var conductorImage = '/var/www/html/qr/' + conductorFile;\n        node.send({\n            payload : ' -o ' + conductorImage + ' \"' + conductorLink + '\"',\n            topic: 'link'\n        });\n        \n        list.push(\n            ' <tr><td><strong>' + curTrain.userName + '</strong><br/>' +  ((curTrain.description !== undefined) ? curTrain.description : '') +\n                '<br/><select onchange=\"if (this.value !== \\'Select View \\') {window.open(this.value,\\'_blank\\');}\">' + \n                '<option>Select View</option><option value=\"' + manifestLink +'\">Manifest</option><option value=\"' + conductorLink +'\">Conductor</option></select></td>' + \n            '   <td>Engine ' + \n                    ((curTrain.leadEngine !== undefined) ? curTrain.leadEngine : '') + \n                        ' From <br/>' + \n                    ((curTrain.trainDepartsName !== undefined) ? curTrain.trainDepartsName : '') + \n                        ' at ' + \n                    ((curTrain.departureTime !== undefined) ? curTrain.departureTime : '') + \n                        ' <br/>Terminates at ' + \n                    ((curTrain.trainTerminatesName !== undefined) ? curTrain.trainTerminatesName : '') +\n                        ' by<br/>Route ' + \n                    ((curTrain.route !== undefined) ? curTrain.route : '') +\n            '   <td>' + ((curTrain.status !== undefined) ? curTrain.status : '') + '</td>' + \n            '   <td><img width=\"200px\" src=\"http://' + IP.internalIPv4  + '/qr/' + manifestFile + '\"></td>' +\n            '   <td><img width=\"200px\" src=\"http://' + IP.internalIPv4  + '/qr/' + conductorFile + '\"></td>' +\n            ' </tr>'\n        );\n        \n    }\n    \n    node.send({\n        template : \n            '<table class=\"table\">' +\n            ' <tr><th scope=\"col\">Name</th><th scope=\"col\">Details</th><th scope=\"col\">Status</th><th scope=\"col\">Manifest</th><th scope=\"col\">Conductor</td></tr>' +\n            list.join('') +\n            '</table>',\n        topic: 'list'\n    });\n} else {\n    node.send({\n        template : '<strong>No Trains are currently defined</strong>',\n        topic : 'list'\n    })\n}\n\nreturn;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 920,
        "y": 1260,
        "wires": [
            [
                "d5c68b3.53e5978"
            ]
        ]
    },
    {
        "id": "d5c68b3.53e5978",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "topic",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "link",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "list",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1110,
        "y": 1260,
        "wires": [
            [
                "3006416c.5ff20e"
            ],
            [
                "edaa7ba.706fd88"
            ]
        ]
    },
    {
        "id": "3006416c.5ff20e",
        "type": "exec",
        "z": "164213bd.e3dd4c",
        "command": "qrencode",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1260,
        "y": 1220,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "edaa7ba.706fd88",
        "type": "ui_template",
        "z": "164213bd.e3dd4c",
        "group": "2a4e66db.9da7fa",
        "name": "Trains",
        "order": 0,
        "width": "24",
        "height": "12",
        "format": "<div ng-bind-html=\"msg.payload\"></div>",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 1250,
        "y": 1280,
        "wires": [
            []
        ]
    },
    {
        "id": "a2eef849.2ba0d8",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set Change Log",
        "func": "var IP = global.get('IP');\nvar JMRI_Config = global.get('JMRI_Config');\nif (JMRI_Config !== undefined && JMRI_Config.JMRI_Web !== undefined) {\n    msg.statusCode = 302;\n    \n    msg.headers = {\n        \"Location\" : 'http://' + IP.internalIPv4 + '/change_log.html'\n    };\n} else {\n    msg.statusCode = 404;\n}\ndelete msg.payload;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 860,
        "y": 200,
        "wires": [
            [
                "9596c547.812608"
            ]
        ]
    },
    {
        "id": "6c97017c.caa18",
        "type": "ui_toast",
        "z": "a06855ce.9f5488",
        "position": "top right",
        "displayTime": "5",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "JMRI Upgrade Notification",
        "x": 420,
        "y": 660,
        "wires": []
    },
    {
        "id": "58aab300.01211c",
        "type": "switch",
        "z": "fd2ebb8a.240a38",
        "name": "Is USE_CACHE Empty",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "empty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 160,
        "wires": [
            [
                "98594e32.01c36"
            ]
        ]
    },
    {
        "id": "98594e32.01c36",
        "type": "change",
        "z": "fd2ebb8a.240a38",
        "name": "Set USE_CACHE To False",
        "rules": [
            {
                "t": "set",
                "p": "TrainTraxx_Config.USE_CACHE",
                "pt": "global",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1270,
        "y": 160,
        "wires": [
            [
                "ed5837b0.97eb08"
            ]
        ]
    },
    {
        "id": "7c13c850.93e948",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
        "property": "statusCode",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "200",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 1270,
        "y": 560,
        "wires": [
            [
                "9326d651.dcf078"
            ],
            [
                "d134657a.d3a028",
                "9326d651.dcf078",
                "e5f31f54.fb78e"
            ]
        ]
    },
    {
        "id": "8ae082fc.570fc",
        "type": "delay",
        "z": "3d602d50.39dab2",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "3",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1150,
        "y": 220,
        "wires": [
            [
                "80beb66.488e048"
            ]
        ]
    },
    {
        "id": "5551a012.29ace",
        "type": "delay",
        "z": "3d602d50.39dab2",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "3",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1150,
        "y": 300,
        "wires": [
            [
                "1b1d2a52.6a7416"
            ]
        ]
    },
    {
        "id": "2d91fa0e.59f576",
        "type": "debug",
        "z": "3d602d50.39dab2",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 990,
        "y": 340,
        "wires": []
    },
    {
        "id": "c1271aeb.e43838",
        "type": "catch",
        "z": "3d602d50.39dab2",
        "name": "",
        "scope": [
            "39007a50.147b16",
            "b2a607c6.1d2058",
            "3ca5628c.c8f32e",
            "87d6b3a0.2d3b2",
            "8e6dfe75.eac0d"
        ],
        "uncaught": false,
        "x": 90,
        "y": 140,
        "wires": [
            [
                "ee6181c6.4d728"
            ]
        ]
    },
    {
        "id": "ee6181c6.4d728",
        "type": "debug",
        "z": "3d602d50.39dab2",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": true,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 230,
        "y": 140,
        "wires": []
    },
    {
        "id": "bea6969b.ca8e38",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 1,
        "x": 2150,
        "y": 980,
        "wires": [
            [
                "84b71b62.f45d08",
                "ca44cb8b.516748"
            ]
        ]
    },
    {
        "id": "47a06ffc.43f61",
        "type": "change",
        "z": "1a726252.d178be",
        "name": "Clear Refresh",
        "rules": [
            {
                "t": "set",
                "p": "template",
                "pt": "msg",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 160,
        "wires": [
            [
                "6da11f5.6279ae"
            ]
        ]
    },
    {
        "id": "c1054d1e.8d906",
        "type": "switch",
        "z": "fd2ebb8a.240a38",
        "name": "If USE_CACHE is false",
        "property": "TrainTraxx_Config.USE_CACHE",
        "propertyType": "global",
        "rules": [
            {
                "t": "false"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1020,
        "y": 120,
        "wires": [
            [
                "8f4b57b4.4e5a18"
            ]
        ]
    },
    {
        "id": "8f4b57b4.4e5a18",
        "type": "switch",
        "z": "fd2ebb8a.240a38",
        "name": "TrainTraxx_Key is set",
        "property": "TrainTraxx_Config.TrainTraxx_Key",
        "propertyType": "global",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1260,
        "y": 120,
        "wires": [
            [
                "b6ed7646.ea36a8"
            ]
        ]
    },
    {
        "id": "995235ce.0f93e8",
        "type": "switch",
        "z": "ed0209cc.523aa8",
        "name": "JMRI_ENABLED",
        "property": "JMRI_Config.JMRI_ENABLED",
        "propertyType": "global",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1040,
        "y": 120,
        "wires": [
            [
                "d9967b03.2bc018"
            ]
        ]
    },
    {
        "id": "d9967b03.2bc018",
        "type": "link out",
        "z": "ed0209cc.523aa8",
        "name": "JMRI Config to Data iLink",
        "links": [
            "a309b660.225d08"
        ],
        "x": 1175,
        "y": 120,
        "wires": []
    },
    {
        "id": "9a0f81c9.da719",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "Clear Template",
        "rules": [
            {
                "t": "set",
                "p": "template",
                "pt": "msg",
                "to": "",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 520,
        "y": 880,
        "wires": [
            [
                "8f8c1443.c1b888"
            ]
        ]
    },
    {
        "id": "3ac0182c.2aa1b8",
        "type": "switch",
        "z": "1a726252.d178be",
        "name": "Queue Empty",
        "property": "queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "empty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 330,
        "y": 160,
        "wires": [
            [
                "47a06ffc.43f61"
            ]
        ]
    },
    {
        "id": "2347919.8111b6e",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "Queue Empty",
        "property": "queue",
        "propertyType": "flow",
        "rules": [
            {
                "t": "empty"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 320,
        "y": 880,
        "wires": [
            [
                "9a0f81c9.da719"
            ]
        ]
    },
    {
        "id": "9a96d660.551768",
        "type": "debug",
        "z": "1a726252.d178be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 950,
        "y": 260,
        "wires": []
    },
    {
        "id": "6ec8d260.15dccc",
        "type": "ui_toast",
        "z": "164213bd.e3dd4c",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "",
        "x": 1510,
        "y": 540,
        "wires": []
    },
    {
        "id": "e5f31f54.fb78e",
        "type": "change",
        "z": "164213bd.e3dd4c",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Unable to update JMRI with Tag Read",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "highlight",
                "pt": "msg",
                "to": "red",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1480,
        "y": 500,
        "wires": [
            [
                "6ec8d260.15dccc"
            ]
        ]
    },
    {
        "id": "7e51bcf1.df3ee4",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1070,
        "y": 500,
        "wires": []
    },
    {
        "id": "97928ea1.a8499",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1270,
        "y": 500,
        "wires": []
    },
    {
        "id": "57e61d6.5d4c464",
        "type": "ui_text_input",
        "z": "7bef0b7b.d5a104",
        "name": "Inventory Name Input",
        "label": "Inventory Name",
        "tooltip": "",
        "group": "d3d8accc.c9188",
        "order": 2,
        "width": "6",
        "height": "1",
        "passthru": true,
        "mode": "text",
        "delay": "0",
        "topic": "",
        "x": 480,
        "y": 540,
        "wires": [
            [
                "5824b887.3ea998",
                "97a995d3.1794c8"
            ]
        ]
    }
]