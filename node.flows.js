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
        "id": "727c7bb6.e94204",
        "type": "tab",
        "label": "Admin Console - WiFi to Ethernet Gateway",
        "disabled": false,
        "info": ""
    },
    {
        "id": "a8734d01.d65fe",
        "type": "tab",
        "label": "Admin Cosole - WiFi 2 WiFi Gateway",
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
        "id": "49e2d5c0.49790c",
        "type": "subflow",
        "name": "Reporters to JRMI",
        "info": "",
        "category": "JMRI",
        "in": [
            {
                "x": 114.75,
                "y": 162,
                "wires": [
                    {
                        "id": "4369543.5731eac"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 1272,
                "y": 240,
                "wires": [
                    {
                        "id": "82f1526e.9323b",
                        "port": 0
                    },
                    {
                        "id": "b6bbb1e6.4ca5f",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1272,
                "y": 400,
                "wires": [
                    {
                        "id": "5b9a0.b59166604",
                        "port": 0
                    },
                    {
                        "id": "dd61c8d5.569b88",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [],
        "icon": "node-red/inject.png"
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
        "id": "a493d433.024998",
        "type": "subflow",
        "name": "Tracker Proxy",
        "info": "",
        "category": "TrainTraxx",
        "in": [],
        "out": [
            {
                "x": 560,
                "y": 142.5,
                "wires": [
                    {
                        "id": "4dfa5b69.319274",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1000,
                "y": 122.5,
                "wires": [
                    {
                        "id": "3d89b1af.dec3ae",
                        "port": 0
                    }
                ]
            }
        ],
        "outputLabels": [
            "",
            "msg"
        ],
        "icon": "node-red/white-globe.png"
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
                "x": 1040,
                "y": 140,
                "wires": [
                    {
                        "id": "958d130f.9dbf1",
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
            "allowSwipe": "true",
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
        "tab": "b654d5df.424178",
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
        "icon": "apps",
        "order": 5,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "5ffcbee0.a5304",
        "type": "ui_group",
        "z": "",
        "name": "HiveID RFID Module",
        "tab": "b654d5df.424178",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "652de07e.0d453",
        "type": "ui_group",
        "z": "",
        "name": "WiFi to Ethernet Gateway",
        "tab": "95d2bc1b.6b456",
        "order": 4,
        "disp": true,
        "width": "12",
        "collapse": false
    },
    {
        "id": "8b01491a.1965e8",
        "type": "ui_group",
        "z": "",
        "name": "WiFi to WiFi Gateway",
        "tab": "95d2bc1b.6b456",
        "order": 3,
        "disp": true,
        "width": "12",
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
        "order": 8
    },
    {
        "id": "8e968283.a2d29",
        "type": "ui_link",
        "z": "",
        "name": "JMRI",
        "link": "/redir?app=jmri",
        "icon": "train",
        "target": "iframe",
        "order": 7
    },
    {
        "id": "6efda0bd.72343",
        "type": "ui_link",
        "z": "",
        "name": "OpenRSD",
        "link": "/redir?app=openrsd",
        "icon": "fa-cogs",
        "target": "iframe",
        "order": 9
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
        "order": 6
    },
    {
        "id": "12a9f286.0bbd9d",
        "type": "ui_link",
        "z": "",
        "name": "TrainTraxx Store",
        "link": "https://www.traintraxx.com/product-category/traintraxx-products/",
        "icon": "shopping_cart",
        "target": "newtab",
        "order": 11
    },
    {
        "id": "82d159ac.42e4b8",
        "type": "ui_tab",
        "z": "",
        "name": "System Summary",
        "icon": "dashboard",
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
        "order": 2,
        "disabled": false,
        "hidden": false
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
        "icon": "dashboard",
        "order": 4,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "b654d5df.424178",
        "type": "ui_tab",
        "z": "",
        "name": "Updates",
        "icon": "update",
        "order": 12,
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
        "collapse": true
    },
    {
        "id": "3220fafa.330906",
        "type": "ui_group",
        "z": "",
        "name": "Activity",
        "tab": "1aab9ee9.8893d1",
        "order": 1,
        "disp": true,
        "width": "12",
        "collapse": false
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
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
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
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "e96b9c3.af2826",
        "type": "ui_tab",
        "z": "",
        "name": "Node Manger",
        "icon": "dashboard",
        "order": 3,
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
        "y": 100,
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
        "y": 100,
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
        "y": 100,
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
        "y": 100,
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
        "y": 100,
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
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Reboot",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "autorenew",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 100,
        "y": 280,
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
        "x": 1370,
        "y": 280,
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
        "order": 3,
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
        "y": 580,
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
        "y": 580,
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
        "group": "df05b319.59cad",
        "order": 4,
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
        "y": 380,
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
        "y": 380,
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
        "y": 380,
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
        "group": "df05b319.59cad",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update HiveID Code",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "These upgrades will take time to load and the application will be unavailable during hte upgrades.  Do you want continue?",
        "payloadType": "str",
        "topic": "",
        "x": 140,
        "y": 460,
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
        "y": 460,
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
        "x": 110,
        "y": 160,
        "wires": [
            [
                "e8ed6bdd.7a0138",
                "aac85b05.c667a8"
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
        "topic": "Ready to Reboot?",
        "name": "Reboot",
        "x": 980,
        "y": 280,
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
        "y": 580,
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
        "x": 700,
        "y": 140,
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
        "x": 770,
        "y": 180,
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
        "x": 660,
        "y": 100,
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
        "x": 330,
        "y": 140,
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
        "x": 290,
        "y": 180,
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
        "x": 370,
        "y": 220,
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
        "x": 1080,
        "y": 300,
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
        "x": 1090,
        "y": 340,
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
        "x": 1190,
        "y": 380,
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
        "x": 130,
        "y": 220,
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
        "x": 280,
        "y": 100,
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
        "x": 700,
        "y": 260,
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
        "x": 770,
        "y": 300,
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
        "x": 660,
        "y": 220,
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
        "x": 680,
        "y": 380,
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
        "x": 770,
        "y": 420,
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
        "x": 660,
        "y": 340,
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
        "x": 220,
        "y": 40,
        "wires": [
            [
                "fed0826d.2117",
                "372dacb9.a08e74"
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
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 4,
        "x": 240,
        "y": 200,
        "wires": [
            [
                "e5b4b384.ffba8"
            ],
            [
                "86aa8688.67b188"
            ],
            [
                "7f66e017.f90e1"
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
        "x": 990,
        "y": 200,
        "wires": []
    },
    {
        "id": "372dacb9.a08e74",
        "type": "debug",
        "z": "f1ec9b2a.1f7298",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 990,
        "y": 40,
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
        "x": 680,
        "y": 80,
        "wires": [
            [
                "9596c547.812608",
                "372dacb9.a08e74"
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
        "x": 690,
        "y": 140,
        "wires": [
            [
                "9596c547.812608",
                "372dacb9.a08e74"
            ]
        ]
    },
    {
        "id": "7f66e017.f90e1",
        "type": "function",
        "z": "f1ec9b2a.1f7298",
        "name": "Set JRMI",
        "func": "delete msg.payload;\n\nvar IP = global.get('IP');\nvar JMRI_Config = global.get('JMRI_Config');\nif (JMRI_Config !== undefined && JRMI_Config.JMRI_Web !== undefined) {\n    msg.statusCode = 302;\n    msg.headers = {\n        \"Location\" : \"http://\" + JMRI_Config.JMRI_Web \n    };\n} else {\n    msg.statusCode = 404;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 660,
        "y": 200,
        "wires": [
            [
                "9596c547.812608",
                "372dacb9.a08e74"
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
        "group": "df05b319.59cad",
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
                "dc21a5dc.d18fb8"
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
        "group": "5ffcbee0.a5304",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update Readers Wirelessly",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "fa-wifi",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 160,
        "y": 320,
        "wires": [
            [
                "e47e8d5c.512fd",
                "695a152e.efd0ec"
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
        "x": 210,
        "y": 460,
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
        "x": 470,
        "y": 480,
        "wires": [
            [
                "8133a096.b87"
            ]
        ]
    },
    {
        "id": "8133a096.b87",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Create OTA Commands",
        "func": "msg.MAC = msg.payload.col2;\nmsg.IP = msg.payload.col3;\n\nvar TT = global.get('TrainTraxx');\n\nvar targetKey = null;\nmsg.flag = false;\n\nfor (var i in TT.hivenode.columns) {\n    if (TT.hivenode.columns[i] === \"MAC_ADDRESS\") {\n        targetKey = i;\n    }\n}\nmsg.curMacA= [];\nfor (var t in TT.hivenode.data) {\n    var curMac = TT.hivenode.data[t][targetKey];\n    msg.curMacA.push(curMac);\n    if (curMac.toLowerCase().trim() == msg.MAC.toLowerCase().trim()) {\n        msg.flag = true;\n        // -P is the host port\n        msg.payload = ' -i ' + msg.IP + ' -I 192.168.2.1 -p 8266 -a h1v3C0nn3ct -s -f ' + msg.filename + ' -d -r';\n    }\n}\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 710,
        "y": 480,
        "wires": [
            [
                "6964cb7.b194a34",
                "a72ea356.dfc17"
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
        "func": "var config = global.get('TrainTraxx_Config');\nflow.set('currentFirmware', msg.payload);\nmsg.url = config.TrainTraxx_API + 'autoconnect?current=' + msg.payload + '&apikey=' + config.TrainTraxx_Key ;\nmsg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;\n",
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
        "x": 540,
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
        "x": 570,
        "y": 260,
        "wires": [
            [
                "18150761.7a23b9"
            ]
        ]
    },
    {
        "id": "18150761.7a23b9",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 730,
        "y": 140,
        "wires": []
    },
    {
        "id": "16181bb6.fb2234",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "",
        "func": "var msg1 = msg;\nvar msg2 = {};\nif (msg.headers !== undefined) {\n    var tempFile = msg.headers['content-disposition'];\n    tempFile = tempFile.replace(/attachment\\;\\s*filename=/,'').replace(/\\\"/g,'');\n    msg1.filename = '/usr/local/hiveid-ap/ota/' + tempFile;\n} else {\n    if (msg.statusCode >= 500) {\n        msg2.topic=\"Error\";\n        msg2.highlight = \"red\";\n        msg2.payload = \"An error occurred\";\n    } else if (msg.statusCode >= 400) {\n        msg2.topic=\"Error\";\n        msg2.highlight = \"red\";\n        msg2.payload = \"Not Found\";\n    } else if (msg.statusCode >= 300) {\n        msg2.topic=\"Notice\";\n        msg2.highlight = \"yellow\";\n        msg2.payload = \"Resource moved\";\n    } else if (msg.statusCode >= 200) {\n        msg2.topic=\"No Updates\";\n        var currentFirmware = flow.get('currentFirmware');\n        msg2.payload = \"No new firmware received.  Latest firmware is \" + currentFirmware;\n        msg2.highlight=\"orange\";\n    }\n} \n\nreturn [msg1,msg2];",
        "outputs": 1,
        "noerr": 0,
        "x": 530,
        "y": 220,
        "wires": [
            [
                "d505e776.cc8988",
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
                "d480b3e5.18cbf",
                "dff80caf.85559"
            ],
            [],
            []
        ]
    },
    {
        "id": "6964cb7.b194a34",
        "type": "switch",
        "z": "16d0b1f7.5422be",
        "name": "NodeExists",
        "property": "flag",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": true,
        "outputs": 2,
        "x": 950,
        "y": 480,
        "wires": [
            [
                "4bd26c8c.731c44"
            ],
            [
                "9095b7d0.f5b318"
            ]
        ]
    },
    {
        "id": "c004a83.7c97e58",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1370,
        "y": 600,
        "wires": []
    },
    {
        "id": "2af64c41.95a824",
        "type": "ui_text",
        "z": "16d0b1f7.5422be",
        "group": "5ffcbee0.a5304",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Update Status Messages",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 1190,
        "y": 320,
        "wires": []
    },
    {
        "id": "d480b3e5.18cbf",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Handle Results",
        "func": "if (!msg.payload.match(/ERROR/)) {\n    msg.payload =  msg.IP + \" Updated Successfully\\n\";\n} else {\n    msg.payload =  msg.IP + \" Update Failed\\n\";\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1180,
        "y": 600,
        "wires": [
            [
                "c004a83.7c97e58",
                "2af64c41.95a824"
            ]
        ]
    },
    {
        "id": "695a152e.efd0ec",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Clear Box",
        "func": "msg.payload = '';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 900,
        "y": 320,
        "wires": [
            [
                "2af64c41.95a824"
            ]
        ]
    },
    {
        "id": "abacc62d.40cf58",
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
        "x": 970,
        "y": 260,
        "wires": [
            [
                "695a152e.efd0ec"
            ]
        ]
    },
    {
        "id": "23e115c3.0b6e0a",
        "type": "ui_button",
        "z": "16d0b1f7.5422be",
        "name": "",
        "group": "5ffcbee0.a5304",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update Readers Using USB",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "usb",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 172.5,
        "y": 618.8543090820312,
        "wires": [
            [
                "25037935.913206",
                "695a152e.efd0ec"
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
                "d480b3e5.18cbf"
            ],
            [],
            []
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
        "x": 640.7290649414062,
        "y": 723.9584350585938,
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
        "x": 158.47915649414062,
        "y": 723.2291870117188,
        "wires": [
            [
                "d03f3a23.5bbcf8"
            ]
        ]
    },
    {
        "id": "d03f3a23.5bbcf8",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "New Version Notice",
        "func": "msg.topic = 'TrainTraxx';\nmsg.payload = 'A new firmware version is available';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 405.2291564941406,
        "y": 723.9583740234375,
        "wires": [
            [
                "4c840e2e.6fb22"
            ]
        ]
    },
    {
        "id": "6f670665.7e0928",
        "type": "ui_button",
        "z": "16d0b1f7.5422be",
        "name": "",
        "group": "5ffcbee0.a5304",
        "order": 1,
        "width": 0,
        "height": 0,
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
        "id": "25037935.913206",
        "type": "exec",
        "z": "16d0b1f7.5422be",
        "command": "/opt/hiveid-ap/hiveid_get_newbin.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 492.2291564941406,
        "y": 617.2918090820312,
        "wires": [
            [
                "ea289cc4.dfed6"
            ],
            [],
            []
        ]
    },
    {
        "id": "e47e8d5c.512fd",
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
        "y": 380,
        "wires": [
            [
                "7011f363.68bd1c",
                "5bdf3fa0.0437d"
            ],
            [],
            []
        ]
    },
    {
        "id": "7011f363.68bd1c",
        "type": "change",
        "z": "16d0b1f7.5422be",
        "name": "Set Filename",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 470,
        "y": 380,
        "wires": [
            [
                "9c8a89b8.58e198"
            ]
        ]
    },
    {
        "id": "5bdf3fa0.0437d",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 470,
        "y": 340,
        "wires": []
    },
    {
        "id": "d395d1f0.e27c2",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 490,
        "y": 440,
        "wires": []
    },
    {
        "id": "dff80caf.85559",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1170,
        "y": 560,
        "wires": []
    },
    {
        "id": "a72ea356.dfc17",
        "type": "debug",
        "z": "16d0b1f7.5422be",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 950,
        "y": 440,
        "wires": []
    },
    {
        "id": "9095b7d0.f5b318",
        "type": "function",
        "z": "16d0b1f7.5422be",
        "name": "Node Not Registered",
        "func": "msg.payload = msg.IP + ' is not a valid hive node';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1435.5,
        "y": 438,
        "wires": [
            [
                "2af64c41.95a824"
            ]
        ]
    },
    {
        "id": "7ded79ad.bc2b78",
        "type": "ui_text",
        "z": "727c7bb6.e94204",
        "group": "652de07e.0d453",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "WiFi to Ethernet Gateway Status",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 1548.1111145019531,
        "y": 306.9999752044678,
        "wires": []
    },
    {
        "id": "ab23a5cf.ad9588",
        "type": "exec",
        "z": "727c7bb6.e94204",
        "command": "sudo /opt/hiveid-ap/hiveid_setup_wifi2eth.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 849.6667327880859,
        "y": 307.9999976158142,
        "wires": [
            [],
            [],
            [
                "7ded79ad.bc2b78"
            ]
        ]
    },
    {
        "id": "213f3d14.4789c2",
        "type": "inject",
        "z": "727c7bb6.e94204",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 310,
        "y": 420,
        "wires": [
            [
                "bc89ef70.46dcc"
            ]
        ]
    },
    {
        "id": "473f953e.2720cc",
        "type": "exec",
        "z": "727c7bb6.e94204",
        "command": "sudo /opt/hiveid-ap/hostapd_set_psk.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1140.7777824401855,
        "y": 424.7142987251282,
        "wires": [
            [],
            [],
            [
                "7ded79ad.bc2b78"
            ]
        ]
    },
    {
        "id": "d084d6de.494cc8",
        "type": "exec",
        "z": "727c7bb6.e94204",
        "command": "sudo /opt/hiveid-ap/hostapd_set_cnl.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 1141.7777824401855,
        "y": 483.0000042915344,
        "wires": [
            [],
            [],
            [
                "7ded79ad.bc2b78"
            ]
        ]
    },
    {
        "id": "bc89ef70.46dcc",
        "type": "exec",
        "z": "727c7bb6.e94204",
        "command": "sudo /opt/hiveid-ap/hostapd_get_cnl.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 557.9206962585449,
        "y": 483.7142376899719,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "e4fe3b19.11d2c8",
        "type": "comment",
        "z": "727c7bb6.e94204",
        "name": "Get Passphrase from file ",
        "info": "",
        "x": 570,
        "y": 160,
        "wires": []
    },
    {
        "id": "e3b3bbb8.4a2938",
        "type": "debug",
        "z": "a8734d01.d65fe",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 750,
        "y": 200,
        "wires": []
    },
    {
        "id": "d39b1a23.f43d68",
        "type": "exec",
        "z": "a8734d01.d65fe",
        "command": "sudo /opt/hiveid-ap/hiveid_setup_wifi2wifi.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 430,
        "y": 140,
        "wires": [
            [
                "e3b3bbb8.4a2938"
            ],
            [
                "e3b3bbb8.4a2938"
            ],
            [
                "e3b3bbb8.4a2938"
            ]
        ]
    },
    {
        "id": "2cb20bbe.97d6c4",
        "type": "exec",
        "z": "a8734d01.d65fe",
        "command": "sudo /opt/hiveid-ap/wpaclient_set_ssid.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 430,
        "y": 220,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "aac85b05.c667a8",
        "type": "function",
        "z": "a06855ce.9f5488",
        "name": "Get Network Interfaces",
        "func": "var nics = global.get('networkInterfaces');\nmsg.payload =[];\nconsole.log(nics);\nvar internalIPv4  = '';\nvar tempIP= {};\nfor (var ni in nics ) {\n    console.log(ni);\n    if (nics[ni][0].address !== undefined) {\n        tempIP[ni]=nics[ni][0].address;\n        if (ni !== 'lo') {\n            msg.payload.push({\n                title: '<strong>' + ni + '</strong>&nbsp;'+ nics[ni][0].address \n            });\n        }\n    }\n}\n\nif (tempIP['wlan1'] !== undefined) {\n    internalIPv4 = tempIP['wlan1'];\n} else if (tempIP['eth0'] !== undefined) {\n    internalIPv4 = tempIP['eth0'];\n} else if  (tempIP['wlan0'] !== undefined) {\n    internalIPv4 = tempIP['wlan0'];\n} else {\n    internalIPv4 = tempIP['lo'];\n}\n\nglobal.set('IP',{'internalIPv4' :  internalIPv4});\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 160,
        "wires": [
            [
                "21cd203b.6f37c",
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
        "y": 100,
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
        "y": 40,
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
        "y": 580,
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
        "x": 1150,
        "y": 280,
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
        "x": 660,
        "y": 240,
        "wires": [
            [
                "9596c547.812608",
                "372dacb9.a08e74"
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
        "x": 400,
        "y": 100,
        "wires": [
            [
                "f27066a1.a44ba8"
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
        "y": 740,
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
        "order": 1,
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
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "42e26548.651efc",
        "type": "inject",
        "z": "a06855ce.9f5488",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 110,
        "y": 780,
        "wires": [
            [
                "c9aa36d9.5823f8",
                "e4003998.bf2188",
                "a9fea8f7.6b8d68"
            ]
        ]
    },
    {
        "id": "82f1526e.9323b",
        "type": "http request",
        "z": "49e2d5c0.49790c",
        "name": "",
        "method": "POST",
        "ret": "obj",
        "url": "",
        "tls": "",
        "x": 1102,
        "y": 200,
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
        "id": "511bdb33.ee5724",
        "type": "function",
        "z": "49e2d5c0.49790c",
        "name": "JRMI Reporters Process",
        "func": "var RFIDRequest = msg.payload;\nvar curReporters = global.get('JMRI.reporters');\nmsg.verb = 'PUT';\nvar reporterName = 'FR' + String(curReporters.nextID);\nif (curReporters.map[RFIDRequest.MAC] !== undefined) {\n    var reporterId = curReporters.map[RFIDRequest.MAC];\n    reporterName = curReporters.data[reporterId].name;\n    msg.verb = 'POST';\n} else if (curReporters.available.length > 0) {\n    var reporterId = curReporters.available.pop();\n    reporterName = curReporters.data[reporterId].name;\n    msg.verb = 'POST';\n}\nmsg.payload = {\n    \"type\": \"reporter\",\n    \"data\": {\n      \"name\": reporterName,\n      \"userName\": RFIDRequest.MAC,\n      \"state\": 4,\n      \"comment\":  String(Date.now()),\n      \"report\": RFIDRequest.UID\n    }\n};\nmsg.headers = {'content-type':'application/json'};\nvar config = global.get('JMRI_Config');\nmsg.url = config.JMRI_API + 'reporter';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 682,
        "y": 240,
        "wires": [
            [
                "7964a429.ca37ac"
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
        "id": "3cde87df.2bf038",
        "type": "json",
        "z": "49e2d5c0.49790c",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 462,
        "y": 320,
        "wires": [
            [
                "511bdb33.ee5724",
                "cf82d6f2.a988c8"
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
        "id": "7964a429.ca37ac",
        "type": "switch",
        "z": "49e2d5c0.49790c",
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
        "repair": false,
        "outputs": 2,
        "x": 882,
        "y": 240,
        "wires": [
            [
                "82f1526e.9323b"
            ],
            [
                "b6bbb1e6.4ca5f"
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
        "id": "b6bbb1e6.4ca5f",
        "type": "http request",
        "z": "49e2d5c0.49790c",
        "name": "",
        "method": "PUT",
        "ret": "obj",
        "url": "",
        "tls": "",
        "x": 1102,
        "y": 280,
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
        "id": "5b9a0.b59166604",
        "type": "http request",
        "z": "49e2d5c0.49790c",
        "name": "",
        "method": "POST",
        "ret": "obj",
        "url": "",
        "tls": "",
        "x": 1102,
        "y": 360,
        "wires": [
            []
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "cf82d6f2.a988c8",
        "type": "function",
        "z": "49e2d5c0.49790c",
        "name": "JRMI Sensors Process",
        "func": "var RFIDRequest = msg.payload;\nvar curSensors = global.get('JMRI.sensors');\nmsg.verb = 'PUT';\nvar sensorName = 'FS' + String(curSensors.nextID);\nif (curSensors.map[RFIDRequest.MAC] !== undefined) {\n    var sensorId = curSensors.map[RFIDRequest.MAC];\n    sensorName = curSensors.data[sensorId].name;\n    msg.verb = 'POST';\n} else if (curSensors.available.length > 0) {\n    var sensorId = curSensors.available.pop();\n    sensorName = curSensors.data[sensorId].name;\n    msg.verb = 'POST';\n}\nmsg.payload = {\n    \"type\": \"sensor\",\n    \"data\": {\n      \"name\": sensorName,\n      \"userName\": RFIDRequest.MAC,\n      \"state\": 4,\n      \"comment\":  RFIDRequest.UID\n    }\n};\nmsg.headers = {'content-type':'application/json'};\nvar config = global.get('JMRI_Config');\nmsg.url = config.JMRI_API + 'sensor';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680.75,
        "y": 400,
        "wires": [
            [
                "787abb70.82ed24"
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
        "id": "787abb70.82ed24",
        "type": "switch",
        "z": "49e2d5c0.49790c",
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
        "repair": false,
        "outputs": 2,
        "x": 882,
        "y": 400,
        "wires": [
            [
                "5b9a0.b59166604"
            ],
            [
                "dd61c8d5.569b88"
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
        "id": "dd61c8d5.569b88",
        "type": "http request",
        "z": "49e2d5c0.49790c",
        "name": "",
        "method": "PUT",
        "ret": "obj",
        "url": "",
        "tls": "",
        "x": 1102,
        "y": 440,
        "wires": [
            []
        ],
        "inputLabels": [
            "msg"
        ],
        "outputLabels": [
            "msg"
        ]
    },
    {
        "id": "4369543.5731eac",
        "type": "switch",
        "z": "49e2d5c0.49790c",
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
        "repair": false,
        "outputs": 2,
        "x": 151,
        "y": 294,
        "wires": [
            [
                "d84e2602.59e048"
            ],
            []
        ],
        "outputLabels": [
            "msg.payload.DATA",
            ""
        ]
    },
    {
        "id": "d84e2602.59e048",
        "type": "change",
        "z": "49e2d5c0.49790c",
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
        "x": 237,
        "y": 367,
        "wires": [
            [
                "3cde87df.2bf038"
            ]
        ]
    },
    {
        "id": "b50ad81b.505278",
        "type": "function",
        "z": "8b10dcf.dc4c82",
        "name": "Set Map",
        "func": "var currentRecords = msg.payload;\nmsg.payload = {\n    'available' : [],\n    'map' : {},\n    'data' : [],\n    'nextID' : 1 \n};\n\nfor (var i = 0; i < currentRecords.length; i++) {\n    console.log(i,currentRecords[i]);\n    if (currentRecords[i].data !== undefined) {\n        if (currentRecords[i].data.userName === null) {\n            msg.payload.available.push(i); \n        } else {\n            msg.payload.map[currentRecords[i].data.userName] = i;\n        }\n        msg.payload.data[i] = currentRecords[i].data;\n        if (currentRecords[i].data.name !== undefined) {\n            msg.payload.nextID =Number(currentRecords[i].data.name.replace(/^[^\\d]+/,'')) + 1;\n        } else {\n            delete msg.payload.nextID;\n        }\n    }\n}  \n\nvar curTable = flow.get('curTable');\nmsg.payload.lastLoad = Date.now();\nglobal.set('JMRI.'+curTable,msg.payload);\nreturn msg;",
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
        "url": "",
        "tls": "",
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
        "func": "var table = msg.payload;\nvar config = global.get('JMRI_Config');\nmsg.url = config.JMRI_API + table;\nflow.set('curTable',table)\nreturn msg;",
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
        "y": 880,
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
        "y": 920,
        "wires": [
            [
                "bdc61a3b.3e7758"
            ]
        ]
    },
    {
        "id": "a9fea8f7.6b8d68",
        "type": "Uptime",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 320,
        "y": 820,
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
        "y": 780,
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
        "order": 2,
        "width": "6",
        "height": "2",
        "name": "",
        "label": "OS Version",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 710,
        "y": 880,
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
        "y": 880,
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
        "y": 780,
        "wires": []
    },
    {
        "id": "8a7998a8.747678",
        "type": "ui_text",
        "z": "a06855ce.9f5488",
        "group": "17f52c5b.cfb014",
        "order": 4,
        "width": "6",
        "height": "1",
        "name": "",
        "label": "Uptime",
        "format": "{{msg.payload.uptime}} seconds",
        "layout": "row-spread",
        "x": 500,
        "y": 820,
        "wires": []
    },
    {
        "id": "bdc61a3b.3e7758",
        "type": "debug",
        "z": "a06855ce.9f5488",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 510,
        "y": 920,
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
        "y": 880,
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
        "y": 780,
        "wires": [
            [],
            [
                "80f9695e.4555f8"
            ]
        ]
    },
    {
        "id": "4dfa5b69.319274",
        "type": "http in",
        "z": "a493d433.024998",
        "name": "Tracker",
        "url": "/tracker",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 82.5,
        "wires": [
            [
                "a7fdb95b.17a5d8"
            ]
        ],
        "outputLabels": [
            "req"
        ]
    },
    {
        "id": "a7fdb95b.17a5d8",
        "type": "function",
        "z": "a493d433.024998",
        "name": "Tracker Process",
        "func": "var config = global.get('TrainTraxx_Config');\nmsg.payload = { \n     DATA: msg.payload.DATA, \n     apikey : config.TrainTraxx_Key \n};\nmsg.url = config.TrainTraxx_Web + '/tracker.php';\nmsg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 640,
        "y": 82.5,
        "wires": [
            [
                "3d89b1af.dec3ae"
            ]
        ]
    },
    {
        "id": "3d89b1af.dec3ae",
        "type": "http request",
        "z": "a493d433.024998",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 851,
        "y": 81.5,
        "wires": [
            []
        ],
        "inputLabels": [
            "msg.payload"
        ]
    },
    {
        "id": "958d130f.9dbf1",
        "type": "function",
        "z": "a40e76b8.4d8a48",
        "name": "Set Data",
        "func": "var curTable = flow.get('curTable');\nmsg.payload.lastLoad = Date.now();\nvar tempMap = {};\nfor (var i in msg.payload.columns) {\n    tempMap[msg.payload.columns[i]] = i;\n}\nmsg.payload['columnLookup'] = tempMap;\nvar tempMap = {};\nif (msg.payload.meta !== undefined) {\n    for (var i in msg.payload.meta.columns) {\n        tempMap[msg.payload.meta.columns[i]] = i;\n    }\n    msg.payload.meta['columnLookup'] = tempMap;\n}\nvar tempMap = {};\nif (msg.payload.keys !== undefined) {\n    for (var i in msg.payload.keys.columns) {\n        tempMap[msg.payload.keys.columns[i]] = i;\n    }\n    msg.payload.keys['columnLookup'] = tempMap;\n}\n\nglobal.set('TrainTraxx.' + curTable,msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 860,
        "y": 140,
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
        "url": "",
        "tls": "",
        "x": 670,
        "y": 140,
        "wires": [
            [
                "958d130f.9dbf1"
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
        "id": "19c3a31e.2e8aad",
        "type": "change",
        "z": "a40e76b8.4d8a48",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "url",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 470,
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
        "id": "91353714.a754e8",
        "type": "function",
        "z": "a40e76b8.4d8a48",
        "name": "Set the URL",
        "func": "var table = msg.payload;\nvar config = global.get('TrainTraxx_Config');\nmsg.payload = config.TrainTraxx_API + table + '?apikey=' + config.TrainTraxx_Key;\nflow.set('curTable',table)\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 290,
        "y": 140,
        "wires": [
            [
                "19c3a31e.2e8aad"
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
        "id": "ec4da317.03502",
        "type": "ui_ui_control",
        "z": "a06855ce.9f5488",
        "name": "",
        "x": 320,
        "y": 1000,
        "wires": [
            []
        ]
    },
    {
        "id": "e80fb98c.dccd08",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "17f52c5b.cfb014",
        "order": 3,
        "width": "6",
        "height": "1",
        "passthru": false,
        "label": "Go to Updates",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "{\"tab\":\"Updates\"}",
        "payloadType": "json",
        "topic": "",
        "x": 120,
        "y": 1000,
        "wires": [
            [
                "ec4da317.03502"
            ]
        ]
    },
    {
        "id": "6291a610.4d4dc8",
        "type": "subflow:a493d433.024998",
        "z": "5e61e22e.7a581c",
        "name": "",
        "x": 368.4762725830078,
        "y": 421.7618713378906,
        "wires": [
            [
                "e7682bc7.41dee8",
                "9860fd21.83ed9"
            ],
            [
                "8dc0fe46.c010d",
                "27387db.42dca82"
            ]
        ]
    },
    {
        "id": "8dc0fe46.c010d",
        "type": "http response",
        "z": "5e61e22e.7a581c",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 647.0317840576172,
        "y": 384.3174133300781,
        "wires": []
    },
    {
        "id": "27387db.42dca82",
        "type": "debug",
        "z": "5e61e22e.7a581c",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 666.0318145751953,
        "y": 428.09521484375,
        "wires": []
    },
    {
        "id": "8f95f0f.8bc931",
        "type": "ui_button",
        "z": "5e61e22e.7a581c",
        "name": "Refresh All",
        "group": "a9319cec.7d9c",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Refresh All",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 408.25408935546875,
        "y": 185.87289428710938,
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
        "x": 330.00408935546875,
        "y": 315.3728942871094,
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
        "links": [
            "b6ed7646.ea36a8"
        ],
        "x": 249.36517333984375,
        "y": 186.98397827148438,
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
            "b1607e3f.fb142"
        ],
        "x": 595,
        "y": 160,
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
        "y": 220,
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
        "x": 616.0316772460938,
        "y": 318.09521484375,
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
        "x": 616.5079345703125,
        "y": 478.8888854980469,
        "wires": []
    },
    {
        "id": "ef8fd901.8301a8",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "setLocalActivityData",
        "func": "var curActivity = global.get('Activity');\nif (curActivity === undefined) {\n    curActivity = [];\n}\ncurActivity.unshift(msg.payload.DATA);\n\nwhile (curActivity.length > 10) {\n    curActivity.pop();\n}\n\nglobal.set('Activity',curActivity);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 240,
        "wires": [
            [
                "d4deb1b2.f1eb5",
                "6902f9b7.cd47e8"
            ]
        ]
    },
    {
        "id": "6902f9b7.cd47e8",
        "type": "debug",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "64bf2bc4.ffd124",
        "type": "json",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "property": "payload.DATA",
        "action": "",
        "pretty": false,
        "x": 370,
        "y": 160,
        "wires": [
            [
                "682e65b1.37211c"
            ]
        ]
    },
    {
        "id": "d4deb1b2.f1eb5",
        "type": "function",
        "z": "7bef0b7b.d5a104",
        "name": "Format Activity Data",
        "func": "var activity = global.get('Activity');\nvar TT = global.get('TrainTraxx');\n\nvar array_key = function(keys,vals) {\n    var myResults = {};\n    for (var x in keys) {\n        myResults[keys[x]] = vals[x];\n    }\n    return myResults;\n};\n\nvar getInvIDbyTag = function(uid) {\n    if (uid !== undefined && uid !== \"\") {\n        var tagCol = TT.tags.columnLookup['TAG_UID'];\n        var invCol = TT.tags.columnLookup['wp_tt_inventory_ID'];\n        for (var t in TT.tags.data) {\n            var tuid = TT.tags.data[t][tagCol];\n            if (tuid === uid) {\n                return TT.tags.data[t][invCol];\n            }\n        }  \n    } \n    return null;\n};\n\nvar getHNLocByMac = function(mac) {\n    if (mac !== undefined) {\n        for (var t in TT.hivenode.data) {\n            var tmac = TT.hivenode.data[t][TT.hivenode.columnLookup['MAC_ADDRESS']];\n            if (tmac === mac) {\n                return TT.hivenode.data[t][TT.hivenode.columnLookup['wp_tt_locations_ID']];\n            }\n        }  \n    } \n    return null;\n};\n\nvar getLocNameByID = function(lid) {\n    if (lid !== undefined && lid > 0) {\n        var tempLoc = array_key(TT.locations.columns,TT.locations.data[lid]);\n        if (tempLoc !== undefined) {\n            return tempLoc['NAME'];\n        }\n    }\n    return null;\n};\nmsg.template =  '<style> ' +\n                '   table, th, td { ' +\n                '      border: 1px solid #ccc; ' +\n                '      text-align:center;  ' +\n                '      border-spacing: 0px; ' +\n                '   }' +\n                '   th, td { ' +\n                '       padding: 5px; ' +\n                '       background-color:none; ' +\n                '   }' +\n                '</style>' +\n    '<div style=\"height:720px;\"><table>' +\n    '<tr><th>Image</th><th>Time</th><th>Name</th><th>Location</th></tr>';\nvar tempRow = {};\nfor (var i in activity) {\n    tempRow = { \"Location\" : \"\", \"Name\" : \"\", \"Time\" : \"\", \"Image\" : \"\"};\n    var invID = getInvIDbyTag(activity[i]['UID']);\n    \n    var locID = getHNLocByMac(activity[i]['MAC']);\n    if (locID !== undefined && locID > 0) {\n        tempRow.Location = getLocNameByID(locID);\n    }\n    if (invID !== undefined && invID > 0) {\n        var invInfo = array_key(TT.inventory.columns,TT.inventory.data[invID]);\n        if (invInfo !== undefined && invInfo.NAME !== undefined) {\n            tempRow.Name = invInfo.NAME;\n        }\n        if (TT.inventory.meta.data[invID] !== undefined ) {\n            var tempData = [];\n            for (var curId in TT.inventory.meta.data[invID]) {\n                if (TT.inventory.meta.data[invID][curId] !== undefined) {\n                    var tempInv =  array_key(TT.inventory.meta.columns,TT.inventory.meta.data[invID][curId]);\n                    var tempMetaKey = array_key(TT.inventory.keys.columns,TT.inventory.keys.data[tempInv['wp_tt_inventorymetakeys_ID']]);\n                    tempRow[tempMetaKey['meta_key']] = tempInv['meta_value'];\n                }\n            }\n        }\n    }\n    msg.template += '<tr>' +\n        '<td><img src=\"' + tempRow.Image + '\"></td>' +\n        '<td>' + activity[i].TIME + '</td>' +\n        '<td>' + tempRow.Name + '</td>' + \n        '<td>' + tempRow.Location + '</td></tr>';\n}\nmsg.template += '</table></div>';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 480,
        "y": 280,
        "wires": [
            [
                "b7ca5c16.bde28",
                "fc758d5.841bd7"
            ]
        ]
    },
    {
        "id": "682e65b1.37211c",
        "type": "moment",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "topic": "",
        "input": "",
        "inputType": "date",
        "inTz": "America/Chicago",
        "adjAmount": 0,
        "adjType": "days",
        "adjDir": "add",
        "format": "YYYY-MM-DD hh:mm:ss",
        "locale": "en_US",
        "output": "payload.DATA.TIME",
        "outputType": "msg",
        "outTz": "America/Chicago",
        "x": 400,
        "y": 200,
        "wires": [
            [
                "ef8fd901.8301a8"
            ]
        ]
    },
    {
        "id": "b7ca5c16.bde28",
        "type": "debug",
        "z": "7bef0b7b.d5a104",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 710,
        "y": 200,
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
        "x": 310,
        "y": 320,
        "wires": [
            [
                "d4deb1b2.f1eb5"
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
        "y": 160,
        "wires": [
            [
                "64bf2bc4.ffd124"
            ]
        ]
    },
    {
        "id": "fc758d5.841bd7",
        "type": "ui_template",
        "z": "7bef0b7b.d5a104",
        "group": "3220fafa.330906",
        "name": "TrainTraxx Activity",
        "order": 0,
        "width": "0",
        "height": "0",
        "format": "",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 530,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "cde5452b.0a9148",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 344.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "3269a1eb.1446ee",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Inventory",
        "func": "msg.payload = 'inventory';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 493.3333740234375,
        "y": 344.4444580078125,
        "wires": [
            [
                "cde5452b.0a9148"
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
        "id": "af088ea1.5922c",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Locations",
        "func": "msg.payload = 'locations';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 503.3333740234375,
        "y": 384.4444580078125,
        "wires": [
            [
                "b39cf6ea.e288a8"
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
        "id": "69df09ea.12f168",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Tags",
        "func": "msg.payload = 'tags';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 483.3333740234375,
        "y": 424.4444580078125,
        "wires": [
            [
                "1e02b589.644c4a"
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
        "id": "b39cf6ea.e288a8",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 384.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "1e02b589.644c4a",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 424.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "d90b9ce9.5206e",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 304.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "6b1f2358.c1b3ec",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Hivegateway",
        "func": "msg.payload = 'hivegateway';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 513.3333740234375,
        "y": 304.4444580078125,
        "wires": [
            [
                "d90b9ce9.5206e"
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
        "id": "854f0a6f.328a88",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 264.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "98175d0.98d66a",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Hivenode",
        "func": "msg.payload = 'hivenode';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 503.3333740234375,
        "y": 264.4444580078125,
        "wires": [
            [
                "854f0a6f.328a88"
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
        "id": "20862159.6fab0e",
        "type": "subflow:a40e76b8.4d8a48",
        "z": "1a726252.d178be",
        "name": "",
        "x": 723.3333740234375,
        "y": 224.4444580078125,
        "wires": [
            [
                "acfec978.dad798"
            ]
        ]
    },
    {
        "id": "12f5f078.d26ae",
        "type": "function",
        "z": "1a726252.d178be",
        "name": "Set Images",
        "func": "msg.payload = 'images';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 493.3333740234375,
        "y": 224.4444580078125,
        "wires": [
            [
                "20862159.6fab0e"
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
        "id": "248da61.73dc05a",
        "type": "ui_button",
        "z": "1a726252.d178be",
        "name": "Refresh TrainTraxx",
        "group": "a9319cec.7d9c",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Refresh TrainTraxx",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 217.77783203125,
        "y": 318.8889465332031,
        "wires": [
            [
                "12f5f078.d26ae",
                "98175d0.98d66a",
                "6b1f2358.c1b3ec",
                "3269a1eb.1446ee",
                "af088ea1.5922c",
                "69df09ea.12f168"
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
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1044.000244140625,
        "y": 319.5555725097656,
        "wires": []
    },
    {
        "id": "b1607e3f.fb142",
        "type": "link in",
        "z": "1a726252.d178be",
        "name": "TrainTraxx Data iLink",
        "links": [
            "eb7a7fef.95ee4"
        ],
        "x": 195,
        "y": 260,
        "wires": [
            [
                "248da61.73dc05a"
            ]
        ]
    },
    {
        "id": "1d5514d.8e83eeb",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Reporters",
        "func": "msg.payload = 'reporters';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 608.888916015625,
        "y": 370,
        "wires": [
            [
                "629617.5b00f9e8"
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
        "id": "7e5966b.6a5d998",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 848.888916015625,
        "y": 410,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "caab416.28359c",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Sensors",
        "func": "msg.payload = 'sensors';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 598.888916015625,
        "y": 410,
        "wires": [
            [
                "7e5966b.6a5d998"
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
        "id": "629617.5b00f9e8",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 848.888916015625,
        "y": 370,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "41492e9b.c0ccc",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Engine",
        "func": "msg.payload = 'engines';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 598.888916015625,
        "y": 250,
        "wires": [
            [
                "2cfec4dc.7dbadc"
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
        "id": "2cfec4dc.7dbadc",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 853.888916015625,
        "y": 250,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "709e363a.e33718",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Cars",
        "func": "msg.payload = 'cars';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 588.888916015625,
        "y": 210,
        "wires": [
            [
                "d3aedf1f.c858c"
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
        "id": "d3aedf1f.c858c",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 848.888916015625,
        "y": 210,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "8572684d.002f18",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Trains",
        "func": "msg.payload = 'trains';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 588.888916015625,
        "y": 329,
        "wires": [
            [
                "d69f8500.af92a8"
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
        "id": "d69f8500.af92a8",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 848.888916015625,
        "y": 330,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "40385e28.6afcf",
        "type": "function",
        "z": "164213bd.e3dd4c",
        "name": "Set Locations",
        "func": "msg.payload = 'locations';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 608.888916015625,
        "y": 290,
        "wires": [
            [
                "1fcc12f.b4a5ced"
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
        "id": "1fcc12f.b4a5ced",
        "type": "subflow:8b10dcf.dc4c82",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 848.888916015625,
        "y": 290,
        "wires": [
            [
                "304356e3.df8eba"
            ]
        ]
    },
    {
        "id": "304356e3.df8eba",
        "type": "debug",
        "z": "164213bd.e3dd4c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1131.5556640625,
        "y": 312.22222900390625,
        "wires": []
    },
    {
        "id": "3c4a9a1c.addf66",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
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
        "x": 347.77789306640625,
        "y": 310.9999694824219,
        "wires": [
            [
                "709e363a.e33718",
                "41492e9b.c0ccc",
                "40385e28.6afcf",
                "8572684d.002f18",
                "1d5514d.8e83eeb",
                "caab416.28359c"
            ]
        ]
    },
    {
        "id": "b0a1d979.9f8538",
        "type": "ui_button",
        "z": "164213bd.e3dd4c",
        "name": "Refresh JMRI",
        "group": "a9319cec.7d9c",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "label": "Refresh JMRI",
        "tooltip": "",
        "color": "#fff",
        "bgcolor": "#f90",
        "icon": "refresh",
        "payload": "true",
        "payloadType": "bool",
        "topic": "",
        "x": 176.66668701171875,
        "y": 312.2221374511719,
        "wires": [
            [
                "3c4a9a1c.addf66"
            ]
        ]
    },
    {
        "id": "a309b660.225d08",
        "type": "link in",
        "z": "164213bd.e3dd4c",
        "name": "JMRI Data iLink",
        "links": [
            "ef86f5e4.672e98"
        ],
        "x": 41.111114501953125,
        "y": 312.22222900390625,
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
        "x": 38.88893127441406,
        "y": 402.22222900390625,
        "wires": [
            [
                "79ba309.678a2d"
            ]
        ]
    },
    {
        "id": "79ba309.678a2d",
        "type": "switch",
        "z": "164213bd.e3dd4c",
        "name": "",
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
        "x": 156.66672261555988,
        "y": 402.2222730848524,
        "wires": [
            [
                "2e9b3ddd.033352"
            ]
        ]
    },
    {
        "id": "2e9b3ddd.033352",
        "type": "subflow:49e2d5c0.49790c",
        "z": "164213bd.e3dd4c",
        "name": "",
        "x": 350,
        "y": 400,
        "wires": [
            [
                "1d5514d.8e83eeb"
            ],
            [
                "caab416.28359c"
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
        "x": 763,
        "y": 241,
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
        "x": 1041.9999389648438,
        "y": 241,
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
        "x": 492,
        "y": 242,
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
                "639c3c57.932cb4"
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
        "x": 1318.9999389648438,
        "y": 292.1111145019531,
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
        "x": 1505,
        "y": 292.1111145019531,
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
        "x": 1724.9999389648438,
        "y": 291.1111145019531,
        "wires": [
            [
                "b6ed7646.ea36a8"
            ]
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
        "x": 759.9999389648438,
        "y": 291.1111145019531,
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
        "x": 1038.9998779296875,
        "y": 291.1111145019531,
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
        "x": 488.99993896484375,
        "y": 292.1111145019531,
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
        "x": 737.9999389648438,
        "y": 340.1111145019531,
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
        "x": 1036.9998779296875,
        "y": 340.1111145019531,
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
        "x": 486.99993896484375,
        "y": 341.1111145019531,
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
        "name": "Configuration Change iLink",
        "links": [
            "f6d7de28.90ff4"
        ],
        "x": 1682,
        "y": 364,
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
        "x": 354.99993896484375,
        "y": 142,
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
        "x": 595.9999389648438,
        "y": 142,
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
        "x": 774.9999389648438,
        "y": 142,
        "wires": [
            [
                "16ca6d5b.3ce5e3",
                "463da7b7.9c90a8",
                "f2f09380.a63d5"
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
        "x": 182.99993896484375,
        "y": 74,
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
        "x": 174.49993896484375,
        "y": 202,
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
        "decouple": "false",
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
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "5",
        "x": 180,
        "y": 160,
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
        "func": "var JMRI_Config = global.get('JMRI_Config');\n\nvar temp = [];\n\nvar Stores = {\n    \"TrainTraxx\": {\n        \"label\": \"TrainTraxx\",\n        \"enabled\": true,\n        \"elements\": {\n            \"hivenode\": \"Readers\",\n            \"tags\": \"Tags\",\n            \"inventory\": \"Inventory\",\n            \"locations\": \"Locations\"\n        }\n    },\n    \"JMRI\": {\n        \"label\": \"JMRI\",\n        \"enabled\": JMRI_Config.JMRI_ENABLED,\n        \"elements\": {\n            \"sensors\": \"Sensors\",\n            \"reporters\": \"Reporters\",\n            \"cars\": \"Cars\",\n            \"engines\": \"Engines\",\n            \"locations\": \"Locations\"\n        }\n    }\n};\n\nfor (var store in Object.keys(Stores)) {\n    console.log(store);\n    var TStore = global.get(store); \n    temp.push(\"<td colspan=\\\"2\\\"><h3>\" + Stores[store].label + \"</h3></td>\");\n    \n    if (TStore !== undefined && Stores[store].enabled === true) {\n        for (var element in Object.keys(Stores[store].elements)) {\n            if (TStore[element] !== undefined && TStore[element].data !== undefined) {\n                temp.push('<td style=\"font-weight:bold\">' + Stores[store].elements[element] + '</td><td>'+ Object.keys(TStore[element].data).length + '</td>');\n            } else {\n                temp.push('<td colspan=\"2\">No ' + Stores[store].elements[element] + ' Loaded</td>');        \n            }\n        } \n    } else {\n        temp.push('<td colspan=\"2\">Not Loaded</td>');\n    }\n}\n\nmsg.template = '<table width=\"100%\"><tr>' + temp.join('</tr><tr>') + '</tr></table>';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 220,
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
        "x": 778.0000610351562,
        "y": 165.4166259765625,
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
        "height": "8",
        "format": "",
        "storeOutMessages": false,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 783.0001220703125,
        "y": 219.6666259765625,
        "wires": [
            []
        ]
    },
    {
        "id": "1134ccf2.362973",
        "type": "ui_button",
        "z": "c3e3e66a.322358",
        "name": "",
        "group": "4411c851.baef98",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Refresh Summary",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 290,
        "y": 300,
        "wires": [
            [
                "5e90f355.24e56c"
            ]
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
        "y": 100,
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
        "x": 410,
        "y": 100,
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
        "x": 340,
        "y": 220,
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
        "x": 687,
        "y": 147,
        "wires": []
    },
    {
        "id": "7dd91a5.3aaece4",
        "type": "debug",
        "z": "41757e63.7ce36",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 687,
        "y": 67,
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
        "id": "cccdade7.ec80b",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "parseInventory",
        "func": "var TT = global.get('TrainTraxx');\n\nvar keyArray = function(inKeys,inValues) {\n    global.set('here','keyArray start');\n    var myResults = {};\n    \n    for (var ki=0;ki<inKeys.length;i++) {\n        myResults[inKeys[ki]] = inValues[ki];\n    }\n    global.set('here','keyArray done');\n    return myResults;\n};\n\nvar arrayFlip = function(inObject) {\n    node.log('arrayFlip');\n    var myResults = {};\n    for (var ai in inObject) {\n        myResults[inObject[ai]] = parseInt(ai);\n    }\n    return myResults;\n};\n\nvar TT_InvDataColumns = TT.inventory.columns;\nvar invIDs = Object.keys(TT.inventory.data);\nvar TT_InvMetaKeyColumns = TT.inventory.keys.columns;\nvar iLookup = TT.inventory.columnLookup;\nvar mLookup = TT.inventory.meta.columnLookup;\nvar mkLookup = TT.inventory.keys.columnLookup;\nvar i = 0;\nmsg.payload.DATA = [];\nfor (var curID in TT.inventory.data) { \n    var temp = {};\n    temp=keyArray(TT_InvDataColumns,TT.inventory.data[curID]);        \n    temp['ID'] = curID;\n    temp['NAME'] = TT.inventory.data[curID][iLookup['NAME']];\n    var keysWVals = Object.keys(TT.inventory.meta.data[curID]);\n    for (var j=0; j< keysWVals.length;j++) {\n        var curKeyID=keysWVals[j];\n        var keyName = TT.inventory.keys.data[curKeyID][mkLookup['meta_key']];\n        temp[keyName] = TT.inventory.meta.data[curID][curKeyID][mLookup['meta_value']];\n    }\n    node.send({\"payload\": { \"activeInv\" : temp}});\n    i++;\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 395.71435546875,
        "y": 112.85711669921875,
        "wires": [
            [
                "87df2a6f.156728"
            ]
        ]
    },
    {
        "id": "b5cb9bf3.aba9a8",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Format Engine",
        "func": "var temp =  {\n    \"type\": \"engine\",\n    \"data\": {\n      \"id\": msg.payload.activeInv['Road Mark'] + msg.payload.activeInv['Road Number'],\n      \"number\": msg.payload.activeInv['Road Number'],\n      \"road\": msg.payload.activeInv['Road Mark'],\n      \"type\": msg.payload.activeInv['Car Type'],\n      \"length\": msg.payload.activeInv['Length'],\n      \"color\": msg.payload.activeInv['Color'],\n      \"model\": ((msg.payload.activeInv['Model'] !== undefined) ? msg.payload.activeInv['Model'] : null)\n    }\n  };\nmsg.payload = temp;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 860.71435546875,
        "y": 87.85711669921875,
        "wires": [
            [
                "783ce65.3454618"
            ]
        ]
    },
    {
        "id": "55a4af9.b32635",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Format Car",
        "func": "var temp =  {\n    \"type\": \"car\",\n    \"data\": {\n      \"id\": msg.payload.activeInv['Road Mark'] + msg.payload.activeInv['Road Number'],\n      \"number\": msg.payload.activeInv['Road Number'],\n      \"road\": msg.payload.activeInv['Road Mark'],\n      \"type\": msg.payload.activeInv['Car Type'],\n      \"length\": msg.payload.activeInv['Length'],\n      \"color\": msg.payload.activeInv['Color'],\n      \"load\": ((msg.payload.activeInv['Initial Load State'] !== undefined) ? msg.payload.activeInv['Initial Load State'] : \"E\"),\n      \"hazardous\": ((msg.payload.activeInv['Hazardous'] !== undefined) ? msg.payload.activeInv['Hazardous'] : false),\n      \"utility\": ((msg.payload.activeInv['Utility'] !== undefined)? msg.payload.activeInv['Utility'] : false),\n      \"returnWhenEmpty\": ((msg.payload.activeInv['Return When Empty'] !== undefined) ?  msg.payload.activeInv['Return When Empty'] : null),\n      \"status\": ((msg.payload.activeInv['Initial Status'] !== undefined) ? msg.payload.activeInv['Initial Status'] : \"\")\n    }\n  };\nmsg.payload = temp;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 849.71435546875,
        "y": 127.85711669921875,
        "wires": [
            [
                "783ce65.3454618"
            ]
        ]
    },
    {
        "id": "87df2a6f.156728",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "Split Inv Type",
        "property": "payload.activeInv.Type",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Engine",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 629.71435546875,
        "y": 112.85711669921875,
        "wires": [
            [
                "b5cb9bf3.aba9a8"
            ],
            [
                "55a4af9.b32635"
            ]
        ]
    },
    {
        "id": "c1f39a87.2b8348",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "Format Locations",
        "func": "var JMRI = global.get('JMRI'); \nvar addFlag = true;\nvar changeFlag = false;\nfor (var i in JMRI.locations.data) {\n    var tempData = JMRI.locations.data[i];\n    if (msg.payload.activeLoc['NAME'] === tempData['name']) {\n        addFlag = false;\n        if ((msg.payload.activeLoc['Length'] !== undefined && tempData['length'] != msg.payload.activeLoc['Length']) || (msg.payload.activeLoc['Comment'] !== undefined && tempData['comment'] != msg.payload.activeLoc['Comment'])) {\n            changeFlag = true;\n        }\n    }\n}\nif (addFlag === true) {\n    msg.verb = 'POST'; // 'PUT';\n} \nif (changeFlag === true) {\n    msg.verb = 'POST'; \n}\n\nmsg.headers = {'content-type':'application/json'};\nvar config = global.get('JMRI_Config');\nmsg.url = config.JMRI_API + 'locations';\n\nvar temp =  {\n    \"type\": \"location\",\n    \"data\": {\n        \"id\": msg.payload.activeLoc['ID'],\n        \"name\": msg.payload.activeLoc['NAME'],\n        \"length\": ((msg.payload.activeLoc['Length'] !== undefined) ? msg.payload.activeLoc['Length'] : 0 ),\n        \"comment\":  ((msg.payload.activeLoc['Comment'] !== undefined) ? msg.payload.activeLoc['Comment'] : 0 )\n    }\n};\nmsg.payload = temp;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 860.71435546875,
        "y": 175.85711669921875,
        "wires": [
            [
                "783ce65.3454618",
                "adddbe9.5de4a4"
            ]
        ]
    },
    {
        "id": "ee7a4b50.bf36e8",
        "type": "comment",
        "z": "3d602d50.39dab2",
        "name": "Sample Car Object",
        "info": "msg.payload =  {\n    \"type\": \"car\",\n    \"data\": {\n      \"id\": \"AA123\",\n      \"number\": \"123\",\n      \"road\": \"AA\",\n      \"type\": \"Baggage\",\n      \"length\": \"32\",\n      \"color\": \"Black\",\n      \"owner\": \"\",\n      \"comment\": \"\",\n      \"location\": {\n        \"name\": \"Test Location\",\n        \"id\": \"1\",\n        \"route\": null,\n        \"track\": {\n          \"name\": \"Test Spur 1\",\n          \"id\": \"1s1\"\n        }\n      },\n      \"destination\": null,\n      \"load\": \"E\",\n      \"hazardous\": false,\n      \"removeComment\": \"\",\n      \"addComment\": \"\",\n      \"kernel\": \"\",\n      \"utility\": false,\n      \"finalDestination\": {\n        \"name\": \"Test Location\",\n        \"id\": \"1\",\n        \"route\": null,\n        \"track\": {\n          \"name\": \"Test Spur 1\",\n          \"id\": \"1s1\"\n        }\n      },\n      \"returnWhenEmpty\": null,\n      \"status\": \"\"\n    }\n  };\nreturn msg;",
        "x": 124.57144165039062,
        "y": 224.85714721679688,
        "wires": []
    },
    {
        "id": "5f1626e1.e0ab68",
        "type": "comment",
        "z": "3d602d50.39dab2",
        "name": "Sample Engine Object",
        "info": "msg.payload =  {\n    \"type\": \"engine\",\n    \"data\": {\n      \"id\": \"ACL1234\",\n      \"number\": \"1234\",\n      \"road\": \"ACL\",\n      \"type\": \"Diesel\",\n      \"length\": \"54\",\n      \"color\": \"\",\n      \"owner\": \"\",\n      \"comment\": \"\",\n      \"location\": null,\n      \"destination\": null,\n      \"model\": \"E8\",\n      \"consist\": \"\"\n    }\n  };\n  \n \nreturn msg;",
        "x": 133.57144165039062,
        "y": 341.8571472167969,
        "wires": []
    },
    {
        "id": "75824d8a.676ee4",
        "type": "comment",
        "z": "3d602d50.39dab2",
        "name": "Sample Locations Object",
        "info": "msg.payload =    {\n    \"type\": \"location\",\n    \"data\": {\n      \"name\": \"Test Location\",\n      \"id\": \"1\",\n      \"length\": 40,\n      \"comment\": \"\"\n    }\n  };\nreturn msg;",
        "x": 143.57144165039062,
        "y": 302.8571472167969,
        "wires": []
    },
    {
        "id": "3289e031.08b23",
        "type": "comment",
        "z": "3d602d50.39dab2",
        "name": "Sample Train Object",
        "info": "msg.payload =  {\n    \"type\": \"train\",\n    \"data\": {\n      \"name\": \"Test Train 1\",\n      \"iconName\": \"Test Train 1\",\n      \"id\": \"1\",\n      \"departureTime\": \"03:00\",\n      \"description\": \"Test Train \",\n      \"comment\": \"\",\n      \"route\": \"Test Route\",\n      \"routeId\": \"1\",\n      \"locations\": [\n        {\n          \"id\": \"1r2\",\n          \"name\": \"Test Location\",\n          \"trainDirection\": \"East\",\n          \"comment\": \"\",\n          \"sequenceId\": 2,\n          \"expectedArrivalTime\": \"03:00\",\n          \"expectedDepartureTime\": \"03:00\",\n          \"location\": {\n            \"name\": \"Test Location\",\n            \"id\": \"1\",\n            \"length\": 40,\n            \"comment\": \"\"\n          }\n        }\n      ],\n      \"engines\": [],\n      \"cars\": [\n        {\n          \"id\": \"AA123\",\n          \"number\": \"123\",\n          \"road\": \"AA\",\n          \"type\": \"Baggage\",\n          \"length\": \"32\",\n          \"color\": \"Black\",\n          \"owner\": \"\",\n          \"comment\": \"\",\n          \"location\": {\n            \"name\": \"Test Location\",\n            \"id\": \"1\",\n            \"route\": null,\n            \"track\": {\n              \"name\": \"Test Spur 1\",\n              \"id\": \"1s1\"\n            }\n          },\n          \"destination\": null,\n          \"load\": \"E\",\n          \"hazardous\": false,\n          \"removeComment\": \"\",\n          \"addComment\": \"\",\n          \"kernel\": \"\",\n          \"utility\": false,\n          \"finalDestination\": {\n            \"name\": \"Test Location\",\n            \"id\": \"1\",\n            \"route\": null,\n            \"track\": {\n              \"name\": \"Test Spur 1\",\n              \"id\": \"1s1\"\n            }\n          },\n          \"returnWhenEmpty\": null,\n          \"status\": \"\"\n        }\n      ],\n      \"trainDepartsName\": \"Test Location\",\n      \"trainTerminatesName\": \"Test Location\",\n      \"location\": \"\",\n      \"status\": \"\",\n      \"statusCode\": 65535,\n      \"length\": 0,\n      \"weight\": 0,\n      \"caboose\": \"\"\n    }\n  };\nreturn msg;",
        "x": 124.57144165039062,
        "y": 263.8571472167969,
        "wires": []
    },
    {
        "id": "717d881.3195878",
        "type": "http request",
        "z": "3d602d50.39dab2",
        "name": "",
        "method": "POST",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 1338.71435546875,
        "y": 100.85711669921875,
        "wires": [
            [
                "bf6aa2b.c3b3b6"
            ]
        ]
    },
    {
        "id": "783ce65.3454618",
        "type": "switch",
        "z": "3d602d50.39dab2",
        "name": "Route Verb",
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
        "repair": false,
        "outputs": 2,
        "x": 1151.71435546875,
        "y": 128.85711669921875,
        "wires": [
            [
                "717d881.3195878"
            ],
            [
                "1912be33.f43e72"
            ]
        ]
    },
    {
        "id": "1912be33.f43e72",
        "type": "http request",
        "z": "3d602d50.39dab2",
        "name": "",
        "method": "PUT",
        "ret": "txt",
        "url": "",
        "tls": "",
        "x": 1334.71435546875,
        "y": 159.85711669921875,
        "wires": [
            [
                "bf6aa2b.c3b3b6"
            ]
        ]
    },
    {
        "id": "bf6aa2b.c3b3b6",
        "type": "debug",
        "z": "3d602d50.39dab2",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 1501.4286804199219,
        "y": 128.5714111328125,
        "wires": []
    },
    {
        "id": "f51f6fd0.01c5d",
        "type": "ui_button",
        "z": "3d602d50.39dab2",
        "name": "",
        "group": "a9319cec.7d9c",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "TrainTraxx to JMRI",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "cloud_download",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 122.85714721679688,
        "y": 175.71429443359375,
        "wires": [
            [
                "dbf25248.8540c"
            ]
        ]
    },
    {
        "id": "adddbe9.5de4a4",
        "type": "debug",
        "z": "3d602d50.39dab2",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "x": 816.857177734375,
        "y": 232.42852783203125,
        "wires": []
    },
    {
        "id": "dbf25248.8540c",
        "type": "function",
        "z": "3d602d50.39dab2",
        "name": "parseLocations",
        "func": "var TT = global.get('TrainTraxx');\n\nvar keyArray = function(inKeys,inValues) {\n    global.set('here','keyArray start');\n    var myResults = {};\n    \n    for (var ki=0;ki<inKeys.length;ki++) {\n        myResults[inKeys[ki]] = inValues[ki];\n    }\n    global.set('here','keyArray done');\n    return myResults;\n};\n/*\nvar TT_LocDataColumns = TT.locations.columns;\nvar locIDs = Object.keys(TT.locations.data);\nvar TT_LocMetaKeyColumns = TT.locations.keys.columns;\nvar iLookup = TT.locations.columnLookup;\nvar mLookup = TT.locations.meta.columnLookup;\nvar mkLookup = TT.locations.keys.columnLookup;\n*/\nfor (var curID in TT.locations.data) { \n    var temp = keyArray(TT.locations.columns,TT.locations.data[curID]);        \n    temp['ID'] = curID;\n    for (var j in TT.locations.meta.data[curID]) {\n        var tempMeta = keyArray(TT.locations.meta.columns,TT.locations.meta.data[curID][j]);        \n        var tempMetaKey = keyArray(TT.locations.keys.columns,TT.locations.keys.data[tempMeta['wp_tt_locationmetakeys_ID']]);        \n        temp[tempMetaKey['meta_key']] = tempMeta['meta_value'];\n    }\n    node.send({\"payload\": { \"activeLoc\" : temp}});\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 397.7833251953125,
        "y": 175.33331298828125,
        "wires": [
            [
                "adddbe9.5de4a4",
                "c1f39a87.2b8348"
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
        "passthru": false,
        "options": [
            {
                "label": "WiFi to Ethernet Gateway",
                "value": "wifi2eth",
                "type": "str"
            },
            {
                "label": "WiFi to WiFi Gateway",
                "value": "wifi2wifi",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 460,
        "y": 140,
        "wires": [
            [
                "f4e268bc.464438",
                "53212cd0.a7eb04"
            ]
        ]
    },
    {
        "id": "18316d6a.0b7ff3",
        "type": "wifiscan",
        "z": "9745920.d8a397",
        "name": "",
        "x": 370,
        "y": 660,
        "wires": [
            [
                "334b87f0.5ca348",
                "6ace129c.3ff03c"
            ]
        ]
    },
    {
        "id": "57136e46.8c841",
        "type": "ui_text_input",
        "z": "9745920.d8a397",
        "name": "",
        "label": "Passphrase",
        "tooltip": "",
        "group": "8b01491a.1965e8",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "password",
        "delay": "0",
        "topic": "",
        "x": 450,
        "y": 780,
        "wires": [
            [
                "1f28ded0.9135c1"
            ]
        ]
    },
    {
        "id": "334b87f0.5ca348",
        "type": "debug",
        "z": "9745920.d8a397",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 630,
        "y": 660,
        "wires": []
    },
    {
        "id": "dcb6ca7.bb4b738",
        "type": "ui_button",
        "z": "9745920.d8a397",
        "name": "",
        "group": "92534c08.7fb13",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": true,
        "label": "Submit",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "Would you like to change modes?",
        "payloadType": "str",
        "topic": "",
        "x": 900,
        "y": 440,
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
        "x": 930,
        "y": 480,
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
        "func": "var _ = require('lodash');\nmsg.options = [];\n\nvar icons = {\n    'off' : 'signal_wifi_off',\n    'secure' : [\n        'wifi_lock_1',\n        'wifi_lock_2',\n        'wifi_lock_3',\n        'wifi_lock_4',\n        'wifi_lock'\n    ],\n    'unsecure' : [\n        'signal_wifi_0_bar',\n        'signal_wifi_1_bar',\n        'signal_wifi_2_bar',\n        'signal_wifi_3_bar',\n        'signal_wifi_4_bar'\n    ]\n};\n\nvar inPayload =_.sortBy(msg.payload,['signal_level','ssid']);\nmsg.payload = [];\nvar activeSSID = flow.get('SSID');\nfor (var id in inPayload) {\n    var secKey = (inPayload[id].security === undefined) ?  'unsecure' : 'secure';\n        \n    var strength =0;\n    switch (true) {\n        case (Number(inPayload[id].signal_level) >= -30):\n            strength = 4;\n            break;\n        case (Number(inPayload[id].signal_level) >= -67):\n            strength = 3;\n            break;\n        case (Number(inPayload[id].signal_level) >= -70):\n            strength = 2;\n            break;\n        case (Number(inPayload[id].signal_level) >= -80):\n            strength = 1;\n            break;\n        default:\n            strength = 0;\n    }\n    msg.payload.unshift({   \n        icon_name : icons[secKey][strength],\n        title: inPayload[id].ssid,\n        isChecked : (activeSSID.title === inPayload[id].ssid)\n    }); \n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 700,
        "wires": [
            [
                "334b87f0.5ca348",
                "d7851c8c.0a68a"
            ]
        ]
    },
    {
        "id": "d7851c8c.0a68a",
        "type": "ui_list",
        "z": "9745920.d8a397",
        "group": "8b01491a.1965e8",
        "name": "Available Networks",
        "order": 5,
        "width": "12",
        "height": "4",
        "lineType": "one",
        "actionType": "check",
        "allowHTML": false,
        "x": 470,
        "y": 740,
        "wires": [
            [
                "3fabea93.85d8b6"
            ]
        ]
    },
    {
        "id": "6ea9c20a.3165fc",
        "type": "ui_ui_control",
        "z": "9745920.d8a397",
        "name": "",
        "x": 720,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "f4e268bc.464438",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Show/Hide Elements",
        "func": "switch (msg.payload) {\n    case 'wifi2wifi':\n        msg.payload = {\n            \"group\" : {\n                \"hide\": [\n                    \"Network_Mode_WiFi_to_Ethernet_Gateway\"\n                ], \n                \"show\": [\n                    \"Network_Mode_WiFi_to_WiFi_Gateway\"\n                ], \n                \"focus\": true\n            }\n        };\n        break;\n    case 'wifi2eth':\n        msg.payload = {\n            \"group\" : {\n                \"hide\": [\n                    \"Network_Mode_WiFi_to_WiFi_Gateway\"\n                ], \n                \"show\": [\n                    \"Network_Mode_WiFi_to_Ethernet_Gateway\"\n                ], \n                \"focus\": true\n            }\n        };\n        break;\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 720,
        "y": 140,
        "wires": [
            [
                "6ea9c20a.3165fc"
            ]
        ]
    },
    {
        "id": "46154f4.93c9eb",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 190,
        "y": 660,
        "wires": [
            [
                "18316d6a.0b7ff3"
            ]
        ]
    },
    {
        "id": "3fabea93.85d8b6",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set WiFi SSID to Connect To",
        "func": "flow.set('SSID',msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 780,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "1f28ded0.9135c1",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set WiFi Passphrase to Connect To",
        "func": "flow.set('passphrase',msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 780,
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
        "x": 950,
        "y": 520,
        "wires": [
            [
                "5c2a8500.41db6c",
                "a74e6db4.a0c8d"
            ],
            [
                "1f13c357.2674dd"
            ]
        ]
    },
    {
        "id": "9360a00d.3a1cf",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Set Information",
        "func": "msg.payload  ={\n    'SSID' :flow.get(\"SSID\"),\n    'passphrase' : flow.get('passphrase')\n};\n    \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1260,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "53212cd0.a7eb04",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Set Operating Mode",
        "rules": [
            {
                "t": "set",
                "p": "OperatingMode",
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
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "23b61d89.9da062",
        "type": "inject",
        "z": "9745920.d8a397",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "3",
        "x": 990,
        "y": 60,
        "wires": [
            [
                "acafe7f9.82cb98",
                "83a7951c.8f1198"
            ]
        ]
    },
    {
        "id": "7d87a0e7.9f49d",
        "type": "ui_ui_control",
        "z": "9745920.d8a397",
        "name": "",
        "x": 1060,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "acafe7f9.82cb98",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Hide Elements",
        "func": "msg.payload = {\n    \"group\" : {\n        \"hide\": [\n            \"Network_Mode_Gateway_Settings\",\n            \"Network_Mode_WiFi_to_Ethernet_Gateway\",\n            \"Network_Mode_WiFi_to_WiFi_Gateway\"\n        ],\n        \"focus\": false\n    }\n};\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1020,
        "y": 100,
        "wires": [
            [
                "7d87a0e7.9f49d"
            ]
        ]
    },
    {
        "id": "1db28431.6f27ec",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 1,
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
        "y": 1080,
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
        "command": "sudo service hostapd restart",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 500,
        "y": 1080,
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
        "x": 730,
        "y": 1080,
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
        "x": 1570,
        "y": 680,
        "wires": [
            [],
            [],
            []
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
                "value": 1,
                "type": "num"
            },
            {
                "label": "2",
                "value": 2,
                "type": "num"
            },
            {
                "label": "3",
                "value": 3,
                "type": "num"
            },
            {
                "label": "4",
                "value": 4,
                "type": "num"
            },
            {
                "label": "5",
                "value": 5,
                "type": "num"
            },
            {
                "label": "6*",
                "value": 6,
                "type": "num"
            },
            {
                "label": "7",
                "value": 7,
                "type": "num"
            },
            {
                "label": "8",
                "value": 8,
                "type": "num"
            },
            {
                "label": "9",
                "value": 9,
                "type": "num"
            },
            {
                "label": "10",
                "value": 10,
                "type": "num"
            },
            {
                "label": "11*",
                "value": 11,
                "type": "num"
            },
            {
                "label": "12",
                "value": 12,
                "type": "num"
            },
            {
                "label": "13",
                "value": 13,
                "type": "num"
            },
            {
                "label": "Auto Channel",
                "value": "acs_survey",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 1820,
        "y": 80,
        "wires": [
            [
                "a98e6a09.ccb3c8"
            ]
        ]
    },
    {
        "id": "5c2a8500.41db6c",
        "type": "switch",
        "z": "9745920.d8a397",
        "name": "Switch Operating Mode",
        "property": "OperatingMode",
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
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1050,
        "y": 560,
        "wires": [
            [],
            [
                "9360a00d.3a1cf"
            ]
        ]
    },
    {
        "id": "1f13c357.2674dd",
        "type": "function-npm",
        "z": "9745920.d8a397",
        "name": "Extract Hostapd Config",
        "func": "var fs = require('fs');\nvar ini = require('ini');\n\nvar config = ini.parse(fs.readFileSync('/etc/hostpad/hostapd.conf', 'utf-8'))\n\nflow.set('AP',config);\n//fs.writeFileSync('./config_modified.ini', ini.stringify(config, { section: 'section' }))",
        "outputs": 1,
        "noerr": 0,
        "x": 1470,
        "y": 100,
        "wires": [
            [
                "fe9e4655.a725e8",
                "8912a30e.fa783",
                "378892a2.c7b34e",
                "6de2917a.45472"
            ]
        ]
    },
    {
        "id": "83a7951c.8f1198",
        "type": "fs-ops-access",
        "z": "9745920.d8a397",
        "name": "Check Read on Hostapd",
        "path": "/etc/hostapd",
        "pathType": "str",
        "filename": "hostapd.conf",
        "filenameType": "str",
        "read": true,
        "write": false,
        "throwerror": false,
        "x": 1430,
        "y": 60,
        "wires": [
            [
                "1f13c357.2674dd"
            ],
            []
        ]
    },
    {
        "id": "fe9e4655.a725e8",
        "type": "function",
        "z": "9745920.d8a397",
        "name": "Show Gateway Settings",
        "func": "msg.payload = {\n    \"group\" : {\n        \"show\": [\n            \"Network_Mode_Gateway_Settings\"\n        ], \n        \"focus\": true\n    }\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1490,
        "y": 140,
        "wires": [
            [
                "db021a9c.e18778"
            ]
        ]
    },
    {
        "id": "db021a9c.e18778",
        "type": "ui_ui_control",
        "z": "9745920.d8a397",
        "name": "",
        "x": 1460,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "8912a30e.fa783",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Get Channel",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AP.channel",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1810,
        "y": 40,
        "wires": [
            [
                "622978c3.ef9878"
            ]
        ]
    },
    {
        "id": "378892a2.c7b34e",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Get SSID",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AP.ssid",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1800,
        "y": 160,
        "wires": [
            [
                "696d72e4.693a7c"
            ]
        ]
    },
    {
        "id": "6de2917a.45472",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Get Passphrase",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AP.wpa_passphrase",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1820,
        "y": 280,
        "wires": [
            [
                "aa288074.16ba6"
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
        "passthru": true,
        "mode": "text",
        "delay": 300,
        "topic": "",
        "x": 1810,
        "y": 200,
        "wires": [
            [
                "4e77f5a5.79a54c"
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
        "passthru": true,
        "mode": "password",
        "delay": 300,
        "topic": "",
        "x": 1830,
        "y": 320,
        "wires": [
            [
                "18cdedff.4f3582"
            ]
        ]
    },
    {
        "id": "a74e6db4.a0c8d",
        "type": "fs-ops-access",
        "z": "9745920.d8a397",
        "name": "Check RW on Hostapd",
        "path": "/etc/hostapd",
        "pathType": "str",
        "filename": "hostapd.conf",
        "filenameType": "str",
        "read": true,
        "write": true,
        "throwerror": true,
        "x": 1310,
        "y": 460,
        "wires": [
            [
                "c7eeb9b5.728988"
            ],
            [
                "82e35654.d406b8"
            ]
        ]
    },
    {
        "id": "c7eeb9b5.728988",
        "type": "function-npm",
        "z": "9745920.d8a397",
        "name": "Update Hostapd Config",
        "func": "var fs = require('fs');\nvar ini = require('ini');\nvar AP = flow.get('AP');\n\nfs.writeFileSync('/etc/hostpad/hostapd.conf', ini.stringify(AP))",
        "outputs": 1,
        "noerr": 0,
        "x": 1350,
        "y": 500,
        "wires": [
            [
                "acd4a1d3.1b2d1"
            ]
        ]
    },
    {
        "id": "fbe25c85.8ae56",
        "type": "ui_toast",
        "z": "9745920.d8a397",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "Unable to Update",
        "x": 1610,
        "y": 500,
        "wires": []
    },
    {
        "id": "82e35654.d406b8",
        "type": "change",
        "z": "9745920.d8a397",
        "name": "Error Message",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Unable to update configuration",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Error",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1560,
        "y": 460,
        "wires": [
            [
                "fbe25c85.8ae56"
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
        "y": 1120,
        "wires": [
            [
                "a5662777.20df48"
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
        "x": 1535,
        "y": 540,
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
                "p": "AP.channel",
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
        "x": 1860,
        "y": 120,
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
                "p": "AP.ssid",
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
        "x": 1850,
        "y": 240,
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
                "p": "AP.wpa_passphrase",
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
        "x": 1870,
        "y": 360,
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
        "x": 1570,
        "y": 600,
        "wires": [
            [],
            [],
            []
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
        "y": 40,
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
        "y": 40,
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
        "order": 3,
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
        "x": 120,
        "y": 680,
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
        "x": 490,
        "y": 680,
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
        "order": 5,
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
        "y": 1240,
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
        "y": 1240,
        "wires": [
            [
                "6a34c3ad.5b1e0c",
                "34c84103.7b175e"
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
        "command": "/opt/hiveid-ap/change_pwd.sh",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 970,
        "y": 1220,
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
        "id": "33a0dcf.5102a24",
        "type": "debug",
        "z": "7b5cf843.8f8fc8",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 810,
        "y": 280,
        "wires": []
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
                "33a0dcf.5102a24",
                "5d886417.9ca5ec"
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
        "payloadType": "global",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 220,
        "y": 220,
        "wires": [
            [
                "bec6e433.866148"
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
        "x": 850,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "4b1c0f98.05edc",
        "type": "ui_template",
        "z": "7b5cf843.8f8fc8",
        "group": "873f13f8.22f2b",
        "name": "",
        "order": 0,
        "width": "12",
        "height": "6",
        "format": "<div layout=\"row\" layout-align=\"space-between\">\n  <strong>{{msg.payload.IP_ADDRESS}}</strong>&nbsp;\n  {{msg.payload.MAC_ADDRESS}}\n</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 880,
        "y": 400,
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
        "authType": "basic",
        "x": 630,
        "y": 400,
        "wires": [
            [
                "4b1c0f98.05edc",
                "33a0dcf.5102a24"
            ]
        ]
    },
    {
        "id": "5d886417.9ca5ec",
        "type": "function",
        "z": "7b5cf843.8f8fc8",
        "name": "Set URL",
        "func": "msg.url = 'http://' + msg.payload.col3 + ':8080/info';\nmsg.headers ={'content-type':'text/javascript' };\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
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
        "x": 760,
        "y": 680,
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
        "x": 1220,
        "y": 660,
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
        "x": 1210,
        "y": 700,
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
        "y": 460,
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
        "y": 340,
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
        "y": 1260,
        "wires": []
    },
    {
        "id": "21cd203b.6f37c",
        "type": "debug",
        "z": "a06855ce.9f5488",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 610,
        "y": 200,
        "wires": []
    },
    {
        "id": "7a6bde0d.90a08",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "73493f86.f11df",
        "order": 1,
        "width": "6",
        "height": "1",
        "passthru": false,
        "label": "Update Interfaces",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 220,
        "wires": [
            [
                "aac85b05.c667a8"
            ]
        ]
    },
    {
        "id": "f564ab88.947548",
        "type": "ui_list",
        "z": "a06855ce.9f5488",
        "group": "73493f86.f11df",
        "name": "Network Interfaces",
        "order": 2,
        "width": "6",
        "height": "4",
        "lineType": "one",
        "actionType": "none",
        "allowHTML": true,
        "x": 650,
        "y": 160,
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
        "y": 440,
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
        "y": 440,
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
        "y": 380,
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
        "y": 460,
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
        "y": 460,
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
        "x": 830,
        "y": 220,
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
        "y": 1040,
        "wires": []
    },
    {
        "id": "6a34c3ad.5b1e0c",
        "type": "change",
        "z": "a06855ce.9f5488",
        "name": "Set Password",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.PASSWORD",
                "tot": "msg"
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
                "367077e4.def7a8"
            ]
        ]
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
        "y": 1180,
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
        "x": 1230,
        "y": 220,
        "wires": []
    },
    {
        "id": "d44072e9.fc142",
        "type": "ui_button",
        "z": "a06855ce.9f5488",
        "name": "",
        "group": "98512fe8.4ad4",
        "order": 2,
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
        "y": 1380,
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
        "y": 1380,
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
        "y": 1380,
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
        "y": 1380,
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
        "y": 1300,
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
        "y": 1300,
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
        "y": 1420,
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
        "x": 1090,
        "y": 1060,
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
        "x": 1130,
        "y": 1100,
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
        "y": 1340,
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
        "y": 540,
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
        "y": 620,
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
        "y": 560,
        "wires": []
    },
    {
        "id": "63871334.57f6ec",
        "type": "switch",
        "z": "a06855ce.9f5488",
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
        "x": 1230,
        "y": 580,
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
        "y": 600,
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
        "y": 420,
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
        "y": 500,
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
        "y": 480,
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
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 1380,
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
        "y": 1180,
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
        "y": 1260,
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
        "y": 1300,
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
        "y": 1340,
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
        "y": 1420,
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
        "x": 900,
        "y": 1100,
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
        "x": 900,
        "y": 1060,
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
        "x": 1000,
        "y": 700,
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
        "x": 1000,
        "y": 660,
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
        "y": 620,
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
        "y": 540,
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
        "y": 560,
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
        "y": 600,
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
        "y": 500,
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
        "y": 480,
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
        "y": 420,
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
        "y": 380,
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
        "x": 1000,
        "y": 220,
        "wires": [
            [
                "bd2d57f0.2622f8"
            ]
        ]
    },
    {
        "id": "8da72a0d.b45588",
        "type": "file in",
        "z": "9745920.d8a397",
        "name": "",
        "filename": "",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "x": 170,
        "y": 280,
        "wires": [
            []
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
        "x": 860,
        "y": 220,
        "wires": []
    },
    {
        "id": "2f029628.f1b68a",
        "type": "ui_button",
        "z": "11b2f565.0266ab",
        "name": "",
        "group": "df05b319.59cad",
        "order": 1,
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
        "y": 660,
        "wires": [
            [
                "cb5b3377.6d8cd"
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
        "y": 720,
        "wires": [
            [],
            [],
            [
                "28e09cbc.cb9ca4"
            ]
        ]
    },
    {
        "id": "28e09cbc.cb9ca4",
        "type": "switch",
        "z": "11b2f565.0266ab",
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
        "x": 270,
        "y": 780,
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
        "x": 1230,
        "y": 820,
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
        "y": 760,
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
        "x": 910,
        "y": 960,
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
        "y": 800,
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
        "x": 900,
        "y": 1000,
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
        "y": 840,
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
        "y": 880,
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
        "y": 920,
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
        "x": 880,
        "y": 920,
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
        "command": "/opt/hiveid-ap/nodered_set_flows.sh",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 470,
        "y": 980,
        "wires": [
            [],
            [],
            [
                "904041c1.3e299"
            ]
        ]
    },
    {
        "id": "904041c1.3e299",
        "type": "switch",
        "z": "11b2f565.0266ab",
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
        "x": 710,
        "y": 980,
        "wires": [
            [
                "38fc9479.9fd71c"
            ],
            [
                "522e776c.656068"
            ]
        ]
    }
]