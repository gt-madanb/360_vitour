var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "元智大學門口(Entrance)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5836549387502892,
        "pitch": -0.2558081882389054,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.07224335330604958,
          "pitch": 0.06653505917267921,
          "rotation": 0,
          "target": "0-the-direction-from-entrance-to-slope"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9379381244548952,
          "pitch": 0.1167872985168934,
          "title": "元智大學網站首頁(Yuan Ze University)",
          "text": "<a href=\"https://www.yzu.edu.tw/index_en.html\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },  {
      "id": "0-the-direction-from-entrance-to-slope",
      "name": "大門往斜坡方向(The direction from entrance to slope)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1492255254366821,
        "pitch": -0.031147115946431825,
        "fov": 1.3896156264663486
      },
      "linkHotspots": [
        {
          "yaw": 0.006273616967618523,
          "pitch": 0.022347339259958687,
          "rotation": 0,
          "target": "1-slope-"
        },
        {
          "yaw": 2.774362921715481,
          "pitch": 0.03136931218048389,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-slope-",
      "name": "坡道(Slope) ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0015079558012019,
        "pitch": 0.07279854979993061,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.8990179984470625,
          "pitch": 0.12979265065025913,
          "rotation": 0,
          "target": "2-entrance-of-the-main-camps-"
        },
        {
          "yaw": -2.243890086207987,
          "pitch": 0.04412428094926213,
          "rotation": 0,
          "target": "0-the-direction-from-entrance-to-slope"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance-of-the-main-camps-",
      "name": "主校區入口(Entrance of the main camps) ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7143916057949387,
        "pitch": -0.134388193218399,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.7515541573649607,
          "pitch": 0.04569403178243725,
          "rotation": 0,
          "target": "3-1the-red-brick-road-to-the-front-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": -2.3931656763168245,
          "pitch": 0.11768623946354673,
          "rotation": 0,
          "target": "1-slope-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1the-red-brick-road-to-the-front-door-of-the-yuan-ze-building-1",
      "name": "往一館前門的紅磚道(The red brick road to the front door of the Yuan Ze Building 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.796795458560693,
        "pitch": -0.26491631776348434,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.852464367307614,
          "pitch": -0.00035509629913299534,
          "rotation": 0,
          "target": "4-1the-front-door-of-the-yuan-ze-building-1-"
        },
        {
          "yaw": -1.9938735484276062,
          "pitch": 0.049950324317212136,
          "rotation": 0,
          "target": "8-1the-red-brick-road-to-the-back-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": -1.0938735484276062,
          "pitch": 0.049950324317212136,
          "rotation": 0,
          "target": "0-the-direction-from--the-yuan-ze-building-1-to-road-of-sakura"
        },
        {
          "yaw": 1.2004661079292696,
          "pitch": 0.04019200877167428,
          "rotation": 0,
          "target": "2-entrance-of-the-main-camps-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1the-front-door-of-the-yuan-ze-building-1-",
      "name": "元智大學一館前門(The front door of the Yuan Ze Building 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.686783087428582,
          "pitch": 0.017564028575653978,
          "rotation": 0,
          "target": "3-1the-red-brick-road-to-the-front-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": 0.1180962704484358,
          "pitch": -0.050468289297254785,
          "rotation": 1.5707963267948966,
          "target": "5-the-stairs-from-the-first-floor-to-the-second-floor-of-the-front-door"
        }
        ,
        {
          "yaw": 0.0010962704484358,
          "pitch": -0.050468289297254785,
          "rotation": 0,
          "target": "7--the-front-door-platform-on-1f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-the-stairs-from-the-first-floor-to-the-second-floor-of-the-front-door",
      "name": "前門的一樓往二樓的樓梯(The stairs from the first floor to the second floor of the front door)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.097477773398589,
        "pitch": 0.04035996480440396,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.838497796782522,
          "pitch": 0.16534662299449998,
          "rotation": 10.995574287564278,
          "target": "4-1the-front-door-of-the-yuan-ze-building-1-"
        },
        {
          "yaw": -2.6223614482456608,
          "pitch": 0.14858109160726407,
          "rotation": 0,
          "target": "10-2the-stairs-from-the-second-floor-to-the-third-floor-of-the-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-stairs-from-the-first-floor-to-the-second-floor-of-the-back-door",
      "name": "一樓後門樓梯入口(The entrance of the back door staircase on 1F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },

      "linkHotspots": [
        {
          "yaw": 0.45421833541795387,
          "pitch": 0.2703280916723898,
          "rotation": 0,
          "target": "9--the-entrance-of-the-back-door-elevator-on-1f"
        },
        {
          "yaw": 1.9659920723180733,
          "pitch": 0.13415515708541648,
          "rotation": 0,
          "target": "7-1the-back-door-of-the-yuan-ze-building-1"
        },
        ],
      "infoHotspots": []
    },
    {
      "id": "7-1the-back-door-of-the-yuan-ze-building-1",
      "name": "元智大學一館後門(The back door of the Yuan Ze Building 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7659825557621396,
        "pitch": 0.05006686496650481,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.5062513496005465,
          "pitch": 0.005907365543837528,
          "rotation": 0,
          "target": "8-1the-red-brick-road-to-the-back-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": -2.700781329977133,
          "pitch": -0.017384828364821914,
          "rotation": 0,
          "target": "6-the-stairs-from-the-first-floor-to-the-second-floor-of-the-back-door"
        }
      ], 
      "infoHotspots": []
    },
    {
      "id": "8-1the-red-brick-road-to-the-back-door-of-the-yuan-ze-building-1",
      "name": "往一館後門的紅磚道(The red brick road to the back door of the Yuan Ze Building 1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.2583168485774276,
        "pitch": -0.2438134896302664,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.8757392275439795,
          "pitch": -0.012303421575367679,
          "rotation": 0,
          "target": "7-1the-back-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": 1.8326270512963303,
          "pitch": 0.09698735276419868,
          "rotation": 0,
          "target": "3-1the-red-brick-road-to-the-front-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": 1.0326270512963303,
          "pitch": 0.09698735276419868,
          "rotation": 0,
          "target": "0-the-direction-from--the-yuan-ze-building-1-to-road-of-sakura"
        },
        {
          "yaw": -1.165523928838141,
          "pitch": 0.015218263146838495,
          "rotation": 6.283185307179586,
          "target": "0-the-yzu-logo-in-front-of-the-roundabout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-elevator-entrance-from-the-2-floor-to-the-7-floor",
      "name": "二樓前門電梯入口(The entrance of the front door elevator on 2F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          
          "yaw": -2.7729048274788326,
          "pitch": 0.05835097770724573,
          "rotation": 0,
          "target": "10-2the-stairs-from-the-second-floor-to-the-third-floor-of-the-front-door"
        },
        {"yaw": 1.777359152638114494,
        "pitch": 0.05877098204308373,
        "rotation": 0,
        
          "target": "14--the-entrance-of-the-front-door-elevator-on-3f"
        },
        {
          "yaw": 1.777359152638114494,
          "pitch": 0.15840391744223952,
          "rotation": 3.141592653589793,
          "target": "8--the-entrance-of-the-front-door-elevator-on-1f"
        },
        {
          "yaw": -0.17731991071472564,
          "pitch": -0.03135342077840697,
          "rotation": 0,
          "target": "10-1201a--the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2the-stairs-from-the-second-floor-to-the-third-floor-of-the-front-door",
      "name": "前門的二樓樓梯口(The stairs from the second floor to the third floor of the front door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3098043958677597,
        "pitch": -0.0009275995658875047,
        "fov": 1.2914008327074018
      },
      "linkHotspots": [
        {
          
          "yaw": -0.3588351280732347,
          "pitch": 0.37298019274405014,
          "rotation": 10.210176124166829,
          "target": "5-the-stairs-from-the-first-floor-to-the-second-floor-of-the-front-door"
        },
        {
          
          "yaw": 1.39326260085965,
          "pitch": 0.021734418805984035,
          "rotation": 4.71238898038469,
          "target": "20-office-entrance-of-registration-section"
        },
        {
          "yaw": -3.0456917949800886,
          "pitch": -0.02545636185973521,
          "rotation": 1.5707963267948966,
          "target": "11-office-entrance-of-admission-section"
        },
        {
          "yaw": 0.28795633030012624,
          "pitch": 0.039572810426438565,
          "rotation": 4.71238898038469,
          "target": "9-elevator-entrance-from-the-2-floor-to-the-7-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-office-entrance-of-admission-section",
      "name": "1206招生組門口(The entrance of the admission section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6694634734986895,
        "pitch": 0.09582188338726283,
        "fov": 1.2914008327074018
      },
      "linkHotspots": [
        {
          "yaw": -2.8483484174317972,
          "pitch": 0.20697895595019844,
          "rotation": 0,
          "target": "12-admission-section-1206r"
        },
        {
          "yaw": 2.0541702934185917,
          "pitch": 0.23357061180337269,
          "rotation": 0,
          "target": "10-2the-stairs-from-the-second-floor-to-the-third-floor-of-the-front-door"
        },
        {
          "yaw": -1.1395780105847741,
          "pitch": 0.09676758801279206,
          "rotation": 0,
          "target": "14-office-entrance-of-academic-affairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8503086541620757,
          "pitch": 0.3954166671694761,
          "title": "Admission Section",
          "text": "<a href=\"http://underadmissions.yzu.edu.tw/enroll/new/\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },
    {
      "id": "12-admission-section-1206r",
      "name": "1206招生組(Admission section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1336859873055927,
        "pitch": -0.0008194402025409886,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.002023609938739,
          "pitch": 0.11872320511236367,
          "rotation": 4.71238898038469,
          "target": "13-office-of-the-director-of-the-admission-section"
        },
        {
          "yaw": 0.9551724677864595,
          "pitch": 0.17454319112743732,
          "rotation": 4.71238898038469,
          "target": "11-office-entrance-of-admission-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-office-of-the-director-of-the-admission-section",
      "name": "1206招生組組長辦公室(The office of the director of the admission section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.06838153748124043,
        "pitch": 0.009749535929355346,
        "fov": 1.3896156264663486
      },
      "linkHotspots": [
        {
          "yaw": 1.2078223305569757,
          "pitch": 0.038549003937998094,
          "rotation": 0,
          "target": "12-admission-section-1206r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-office-entrance-of-academic-affairs",
      "name": "1208教務處處本部門口(The entrance of the academic affairs)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.748770967686358,
          "pitch": 0.174037419305634,
          "rotation": 0,
          "target": "17-office-entrance-of-curriculum-section"
        },
        {
          "yaw": 0.2584951830729061,
          "pitch": 0.15838974429076558,
          "rotation": 0,
          "target": "15-office-of-academic-affairs-1208r"
        },
        {
          "yaw": -1.356606310503592,
          "pitch": 0.13205852318439248,
          "rotation": 0,
          "target": "11-office-entrance-of-admission-section"
        }
      ],
      
      "infoHotspots": [
        {
          "yaw": 0.203086541620757,
          "pitch": 0.3954166671694761,
          "title": "Academic affairs",
          "text": "<a href=\"https://www.yzu.edu.tw/admin/aa/index.php/tw/\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },
    {
      "id": "15-office-of-academic-affairs-1208r",
      "name": "1208教務處處本部(Academic affairs)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.822510664699541,
        "pitch": -0.08793223711991871,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.6981593353105779,
          "pitch": 0.08093452471906026,
          "rotation": 4.71238898038469,
          "target": "16-office-of-the-provost-office-of-academic-affairs"
        },
        {
          "yaw": 0.5916263364307568,
          "pitch": 0.07355797437846334,
          "rotation": 0,
          "target": "14-office-entrance-of-academic-affairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-office-of-the-provost-office-of-academic-affairs",
      "name": "1208教務長辦公室(The office of the Provost)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.926037032296472,
        "pitch": 0.10447862582527989,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.8459982329866271,
          "pitch": 0.04323295521622761,
          "rotation": 1.5707963267948966,
          "target": "15-office-of-academic-affairs-1208r"
        }
      ],
      
      "infoHotspots": [
        {
          "yaw": 2.9782691731466873,
          "pitch": 0.35992788709496715,
          "title": "Provost Speech",
          "text":"<a href=\"https://www.youtube.com/watch?v=mwqgTlWttrI\" target=\"_blank\">Provost Speech</a><br>"
        },
        {
          "yaw": -2.982047399972199,
          "pitch": 0.3799706451073632,
          "title": "Provost Course",
          "text": "<a href=\"https://www.youtube.com/watch?v=_BikqAwbh0c\" target=\"_blank\">Provost Course</a><br>"
        }
      ]
    },
    {
      "id": "17-office-entrance-of-curriculum-section",
      "name": "1210課務組門口(The entrance of the curriculum section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.903665277518531,
        "pitch": -0.04830197649137524,
        "fov": 1.2914008327074018
      },
      "linkHotspots": [
        {
          "yaw": 1.8260491556387644,
          "pitch": 0.12292683103693491,
          "rotation": 0,
          "target": "14-office-entrance-of-academic-affairs"
        },
        {
          "yaw": -2.450558441815083,
          "pitch": 0.15889006288325547,
          "rotation": 0,
          "target": "18-curriculum-section-1210r"
        },
        {
          "yaw": -1.7084018986447465,
          "pitch": 0.05379623057224592,
          "rotation": 10.995574287564278,
          "target": "23-2the-stairs-from-the-second-floor-to-the-third-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-curriculum-section-1210r",
      "name": "1210課務組(Curriculum section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09022199959947663,
        "pitch": 0,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 1.7521845931183,
          "pitch": 0.14057511073818674,
          "rotation": 0,
          "target": "19-office-of-the-director-of-the-curriculum-section"
        },
        {
          "yaw": -1.3403675106129214,
          "pitch": 0.2174019384563053,
          "rotation": 0,
          "target": "17-office-entrance-of-curriculum-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-office-of-the-director-of-the-curriculum-section",
      "name": "1210課務組組長辦公室(The office of the director of the curriculum section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7875142869059406,
        "pitch": 0.41056325218995404,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 1.1270852610134892,
          "pitch": 0.1673552771092588,
          "rotation": 0,
          "target": "18-curriculum-section-1210r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-office-entrance-of-registration-section",
      "name": "1209註冊組門口(The entrance of the registration section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5679999362997137,
        "pitch": -0.027263770540479015,
        "fov": 1.2914008327074018
      },
      "linkHotspots": [
        {
          "yaw": -2.1356209424718973,
          "pitch": 0.12777786720749518,
          "rotation": 0,
          "target": "10-2the-stairs-from-the-second-floor-to-the-third-floor-of-the-front-door"
        },
        {
          "yaw": 0.8356209424718973,
          "pitch": 0.12777786720749518,
          "rotation": 0,
          "target": "23-2the-stairs-from-the-second-floor-to-the-third-floor"
        },
        {
          "yaw": 0.04054319849171151,
          "pitch": 0.1472786607349441,
          "rotation": 0,
          "target": "21-registration-section-1209r"
        },
      ],"infoHotspots": [
        {
          "yaw": 0.0347545474694293,
          "pitch": 0.2727070678634238,
          "title": "註冊組(Registration Section)",
          "text": "<a href=\"https://www.yzu.edu.tw/admissions/index.php/tw/\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },
    {
      "id": "21-registration-section-1209r",
      "name": "1209註冊組(Registration section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.111154146771163,
        "pitch": 0.07914733539904972,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.4828828911952563,
          "pitch": 0.11363063931314166,
          "rotation": 4.71238898038469,
          "target": "22-office-of-the-director-of-the-registration-section"
        },
        {
          "yaw": 0.756829437917073,
          "pitch": 0.006734121648985791,
          "rotation": 1.5707963267948966,
          "target": "20-office-entrance-of-registration-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-office-of-the-director-of-the-registration-section",
      "name": "1209註冊組組長辦公室(The office of the director of the registration section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7114857935899703,
        "pitch": 0.3415516127436451,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 0.8206267133803422,
          "pitch": 0.22671769081700077,
          "rotation": 0,
          "target": "21-registration-section-1209r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-2the-stairs-from-the-second-floor-to-the-third-floor",
      "name": "二樓後門走廊(The back door hallway on 2F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.211545940236821,
        "pitch": -0.09403076324274195,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.6059664127012958,
          "pitch": -0.060916399634464824,
          "rotation": 1.5707963267948966,
          "target": "20-office-entrance-of-registration-section"
        },
        {
          "yaw": -3.0742971637903675,
          "pitch": -0.04386539542253587,
          "rotation": 4.71238898038469,
          "target": "17-office-entrance-of-curriculum-section"
        },
        {
          "yaw": 2.0887828279032945,
          "pitch": -0.03146295481533201,
          "rotation": 4.71238898038469,
          "target": "12---the-entrance-of-the-back-door-staircase-on-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-elevator-entrance-from-the-2-floor-to-the-7-floor-of-the-back-door",
      "name": "二樓後門電梯入口(The entrance of the back door elevator 2F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.112797937796591,
        "pitch": 0.15555003697288328,
        "fov": 1.2914008327074018
      },
      "linkHotspots": [
        {
          "yaw": 3.074143043881902,
          "pitch": 0.16792201055677047,
          "rotation": 0,
          "target": "33--the-entrance-of-the-back-door-elevator-on-3f"
        },
        {
          "yaw": 3.074143043881902,
          "pitch": 0.33792201055677047,
          "rotation": 3.141592653589793,
          "target": "9--the-entrance-of-the-back-door-elevator-on-1f"
        },
        {
          
          "yaw": 1.4589385725603634,
          "pitch": 0.19830369825749727,
          "rotation": 10.995574287564278,
          "target": "23-2the-stairs-from-the-second-floor-to-the-third-floor"
        },
        {
          "yaw": -2.053932729772935,
          "pitch": 0.21112808550604178,
          "rotation": 10.210176124166829,
          "target": "6-the-stairs-from-the-first-floor-to-the-second-floor-of-the-back-door"
        },
        
      ],
      "infoHotspots": []
    },
    {
      "id": "25-elevator-entrance-from-the-7-floor-to-the-2-floor-2",
      "name": "七樓前門電梯入口(The entrance of the front door elevator on 7F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4797069895445407,
        "pitch": 0.00478579549742264,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -3.106501606304839,
          "pitch": 0.18540502477415366,
          "rotation": 3.141592653589793,
          "target": "45--the-entrance-of-the-back-door-elevator-on-5f"
        },
        {
          "yaw": 1.6296636559394342,
          "pitch": 0.12707640993223102,
          "rotation": 0,
          "target": "26-7entrance-of-the-office-of-academic-affairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-7entrance-of-the-office-of-academic-affairs",
      "name": "七樓前門走廊(The front door hallway on 7F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.11277512089809427,
        "pitch": 0.044249770937764055,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.1903485139158061,
          "pitch": 0.1276977976676985,
          "rotation": 0,
          "target": "27-tec_office-entrance-of-teaching-excellence-center-and-teaching-services-section"
        },
        {
          "yaw": -1.5915425086618011,
          "pitch": 0.0880486788357846,
          "rotation": 0,
          "target": "25-elevator-entrance-from-the-7-floor-to-the-2-floor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-tec_office-entrance-of-teaching-excellence-center-and-teaching-services-section",
      "name": "1711、1713教學卓越中心(TEC)與教服組門口(The entrance of teaching excellence center & teaching services section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6168209944519241,
          "pitch": 0.3617046541435922,
          "rotation": 0,
          "target": "28-teaching-services-section"
        },
        {
          "yaw": -0.8542105110264107,
          "pitch": 0.22360986820639184,
          "rotation": 0,
          "target": "30-tecteaching-excellence-center-1711r"
        },
        {
          "yaw": -1.4677067479418646,
          "pitch": 0.07387504866222372,
          "rotation": 0,
          "target": "32-7entrance-of-the-office-of-academic-affairs"
        },
        {
          "yaw": 1.6062773805019956,
          "pitch": 0.13395651983494794,
          "rotation": 0,
          "target": "26-7entrance-of-the-office-of-academic-affairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-teaching-services-section",
      "name": "1713教服組(Teaching services section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2179642772435972,
        "pitch": 0.13767836369401643,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.6974837682443109,
          "pitch": 0.10873807641826438,
          "rotation": 0,
          "target": "29-office-of-the-director-of-the-teaching-services-section"
        },
        {
          "yaw": -2.770098407834279,
          "pitch": 0.03688388623837113,
          "rotation": 4.71238898038469,
          "target": "27-tec_office-entrance-of-teaching-excellence-center-and-teaching-services-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-office-of-the-director-of-the-teaching-services-section",
      "name": "1713教服組組長辦公室(The office of the director of teaching services section)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9849017971826104,
        "pitch": 0.18762386190432423,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.6761476415538077,
          "pitch": 0.14191544347891139,
          "rotation": 0,
          "target": "28-teaching-services-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-tecteaching-excellence-center-1711r",
      "name": "1711教學卓越中心(TEC)(Teaching excellence center(TEC))",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08263356593767135,
          "pitch": 0.09639786556713759,
          "rotation": 0,
          "target": "31-tecr0010437office-of-the-director-of-the-teaching-excellence-center"
        },
        {
          "yaw": 1.7931402389017386,
          "pitch": 0.22607848458688196,
          "rotation": 1.5707963267948966,
          "target": "27-tec_office-entrance-of-teaching-excellence-center-and-teaching-services-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-tecr0010437office-of-the-director-of-the-teaching-excellence-center",
      "name": "1711教學卓越中心組長辦公室(The office of the director of teaching excellence center)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.512670548827362,
        "pitch": 0.12233153457384205,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 1.5385132682717488,
          "pitch": 0.11740401983951365,
          "rotation": 0,
          "target": "30-tecteaching-excellence-center-1711r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-7entrance-of-the-office-of-academic-affairs",
      "name": "七樓後門走廊(The back door hallway on 7F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.159615456675061,
        "pitch": -0.06268717549516367,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.9449077346513146,
          "pitch": 0.21408804906279855,
          "rotation": 4.71238898038469,
          "target": "33-elevator-entrance-from-the-7-floor-to-the-2-floor"
        },
        {
          "yaw": -0.24015002990738488,
          "pitch": 0.06613456705144394,
          "rotation": 0,
          "target": "27-tec_office-entrance-of-teaching-excellence-center-and-teaching-services-section"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-elevator-entrance-from-the-7-floor-to-the-2-floor",
      "name": "七樓後門電梯入口(The entrance of the front door elevator on 7F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.037022071910469,
        "pitch": 0.062373121898138706,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -3.0670331407572764,
          "pitch": 0.13555289120878733,
          "rotation": 3.141592653589793,
          "target": "9-elevator-entrance-from-the-2-floor-to-the-7-floor"
        },
        {
          "yaw": -1.6776188732033361,
          "pitch": 0.13982101707771477,
          "rotation": 0,
          "target": "32-7entrance-of-the-office-of-academic-affairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-the-yzu-logo-in-front-of-the-roundabout",
      "name": "圓環前標誌(The YZU logo in front of the roundabout)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.030964976738641,
        "pitch": 0.0864505042638708,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.2511299823849065,
          "pitch": -0.06495009670010887,
          "rotation": 0,
          "target": "8-1the-red-brick-road-to-the-back-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": 2.3240467338836215,
          "pitch": 0.06872626298641826,
          "rotation": 1.5707963267948966,
          "target": "1-the-entrance-to-the--yuan-ze-building-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-the-entrance-to-the--yuan-ze-building-7",
      "name": "往七館入口(The entrance to the  Yuan Ze Building 7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2777557158895565,
        "pitch": -0.14985942736494806,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.9772831046153208,
          "pitch": 0.15948451288044474,
          "rotation": 4.71238898038469,
          "target": "0-the-yzu-logo-in-front-of-the-roundabout"
        },
        {
          "yaw": 0.12375281032690566,
          "pitch": 0.02777223603966128,
          "rotation": 0,
          "target": "2-the-north-side-of-the-rock-of-innovation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-the-north-side-of-the-rock-of-innovation",
      "name": "思新石北側(The north side of the Rock of Innovation)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.45186592445549856,
        "pitch": -0.22252014171590595,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.6939640215532457,
          "pitch": 0.15959413328117833,
          "rotation": 0,
          "target": "1-the-entrance-to-the--yuan-ze-building-7"
        },
        {
          "yaw": 0.39793488551952194,
          "pitch": 0.06281711700521342,
          "rotation": 0,
          "target": "4-the-west-side-of-the-rock-of-innovation"
        },


        {
          "yaw": -0.39793488551952194,
          "pitch": 0.06281711700521342,
          "rotation": 0,
          "target": "3-the-south-side-of-the-rock-of-innovation"
        }
        
      ],
      "infoHotspots": []
    },
    {
      "id": "3-the-south-side-of-the-rock-of-innovation",
      "name": "思新石南側(The south side of the Rock of Innovation)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3493958188845667,
        "pitch": 0.013576634264985898,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.666145687926491,
          "pitch": 0.05854515966657381,
          "rotation": 0,
          "target": "2-the-north-side-of-the-rock-of-innovation"
        },
        {
          "yaw": -2.666145687926491,
          "pitch": 0.05854515966657381,
          "rotation": 0,
          "target": "4-the-west-side-of-the-rock-of-innovation"
        },
        {
          "yaw": 1.3493958188845667,
          "pitch": 0.013576634264985898,
          "rotation": 0,
          "target": "4-the-red-brick-road-front-the-yuan-ze-building-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-the-red-brick-road-front-the-yuan-ze-building-7",
      "name": "七館前紅磚道(The red brick road front the Yuan Ze Building 7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5862626842243195,
        "pitch": -0.26991699492554133,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.9441607180583489,
          "pitch": -0.03432058488312251,
          "rotation": 0,
          "target": "5-the-square-front-the-yuan-ze-building-7"
        },
        {
          "yaw": 0.9953505488705172,
          "pitch": 0.08588606376492791,
          "rotation": 0,
          "target": "3-the-south-side-of-the-rock-of-innovation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-the-square-front-the-yuan-ze-building-7",
      "name": "七館前廣場(The square front the Yuan Ze Building 7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0271330706003177,
          "pitch": 0.05639174742892017,
          "rotation": 6.283185307179586,
          "target": "4-the-red-brick-road-front-the-yuan-ze-building-7"
        },
        {
          "yaw": -0.14068634488858223,
          "pitch": -0.05552983239279463,
          "rotation": 0,
          "target": "6-the-yuan-ze-building-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-yuan-ze-building-7",
      "name": "元智七館(The Yuan Ze Building 7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.841248655000575,
        "pitch": -0.06943198588101751,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.9142352883774834,
          "pitch": -0.002905548785772538,
          "rotation": 0,
          "target": "7-the-stairs-from-the-first-floor-to-the-second-floor"
        },
        {
          "yaw": -0.2464855019995671,
          "pitch": 0.06070310538636292,
          "rotation": 0,
          "target": "5-the-square-front-the-yuan-ze-building-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-the-stairs-from-the-first-floor-to-the-second-floor",
      "name": "一樓往二樓的樓梯(The stairs from the first floor to the second floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.033550170810498,
        "pitch": 0.018691889664449235,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -3.114992735974015,
          "pitch": 0.011921375299294823,
          "rotation": 0,
          "target": "8-the-staircase-from-the-first-floor-to-the-second-floor"
        },
        {
          "yaw": 1.9327073908929808,
          "pitch": 0.36793795822675257,
          "rotation": 6.283185307179586,
          "target": "14-the-direction-to-the-global-lounge"
        },
        {
          "yaw": -0.03393960753373726,
          "pitch": 0.10717969745806499,
          "rotation": 0,
          "target": "6-the-yuan-ze-building-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-the-staircase-from-the-first-floor-to-the-second-floor",
      "name": "一樓往二樓的樓梯間(The staircase from the first floor to the second floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7436537471319529,
        "pitch": -0.07219229616250544,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.866461785773451,
          "pitch": 0.06630041469235337,
          "rotation": 0,
          "target": "9-the-second-floor-of-the-yuan-ze-building-7"
        },
        {
          "yaw": -0.29625564491547784,
          "pitch": 0.4086348055408493,
          "rotation": 0,
          "target": "7-the-stairs-from-the-first-floor-to-the-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-the-second-floor-of-the-yuan-ze-building-7",
      "name": "元智七館二樓(The second floor of the Yuan Ze Building 7)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6936013475439466,
        "pitch": -0.24195312860376106,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 1.2237120725391843,
          "pitch": 0.42613005824964567,
          "rotation": 1.5707963267948966,
          "target": "8-the-staircase-from-the-first-floor-to-the-second-floor"
        },
        {
          "yaw": -2.1534795528955364,
          "pitch": 0.09548183840839286,
          "rotation": 0,
          "target": "10-office-entrance-of--the-global-affairs-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-office-entrance-of--the-global-affairs-office",
      "name": "全球事務處辦公室門口(Office entrance of  the global affairs office)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.327403573660959,
        "pitch": -0.05246768039301486,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.511601131188362,
          "pitch": 0.1129642288060353,
          "rotation": 6.283185307179586,
          "target": "9-the-second-floor-of-the-yuan-ze-building-7"
        },
        {
          "yaw": -1.2706375191027988,
          "pitch": 0.26665069769197736,
          "rotation": 0,
          "target": "11-global-affairs-office-headquarters-r70207"
        },
        {
          "yaw": 1.981321809022985,
          "pitch": 0.416622996797571,
          "rotation": 0,
          "target": "13-_overseas-and-mainland-chinese-unit_international-cooperation-unit-r70208"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.301321809022985,
          "pitch": 0.416622996797571,
          "title": "Global affairs office",
          "text": "<a href=\"https://gao.yzu.edu.tw/index.php/tw\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },
    {
      "id": "11-global-affairs-office-headquarters-r70207",
      "name": "全球事務處本部辦公室(Global Affairs Office Headquarters)-70207R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.73745417328079,
          "pitch": 0.12603216564466635,
          "rotation": 0,
          "target": "10-office-entrance-of--the-global-affairs-office"
        },
        {
          "yaw": 1.701724931218565,
          "pitch": 0.12046816340207833,
          "rotation": 4.71238898038469,
          "target": "12-the-office-of-cgo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-the-office-of-cgo",
      "name": "國際長辦公室(The office of CGO)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4863099182276667,
        "pitch": 0.22135285051873232,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.9801096468288026,
          "pitch": 0.1781130784348619,
          "rotation": 4.71238898038469,
          "target": "11-global-affairs-office-headquarters-r70207"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-_overseas-and-mainland-chinese-unit_international-cooperation-unit-r70208",
      "name": "大陸暨橋生交流組_國際合作組辦公室(Overseas and Mainland Chinese Unit_International Cooperation Unit)-70208R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.134902646978694,
          "pitch": 0.1664300739801341,
          "rotation": 0,
          "target": "10-office-entrance-of--the-global-affairs-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-the-direction-to-the-global-lounge",
      "name": "前往全球交誼廳方向(The direction to the global lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.231052954596013,
        "pitch": 0.15519472248954358,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.4884211313944373,
          "pitch": 0.25277046953127424,
          "rotation": 0,
          "target": "7-the-stairs-from-the-first-floor-to-the-second-floor"
        },
        {
          "yaw": -1.3697229603666976,
          "pitch": 0.04807319421271927,
          "rotation": 6.283185307179586,
          "target": "15-entrance-of-the-global-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-entrance-of-the-global-lounge",
      "name": "全球交誼廳門口(Entrance of the global lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7343228367330106,
        "pitch": 0.08140748663537778,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -2.596441379909141,
          "pitch": 0.1355820299238406,
          "rotation": 0,
          "target": "16-global-lounge"
        },
        {
          "yaw": 0.044923519217160646,
          "pitch": 0.09907152866821889,
          "rotation": 1.5707963267948966,
          "target": "14-the-direction-to-the-global-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-global-lounge",
      "name": "全球交誼廳(Global lounge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7721721605059884,
          "pitch": 0.02012410123680297,
          "rotation": 1.5707963267948966,
          "target": "17-the-direction-to-the-prayer-room"
        },
        {
          "yaw": 2.1374020895521566,
          "pitch": 0.040836501500674416,
          "rotation": 0,
          "target": "15-entrance-of-the-global-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.301321809022985,
          "pitch": 0.416622996797571,
          "title": "Global Lounge",
          "text": "<a href=\"https://www.youtube.com/watch?v=ZFXmiBbCZGo\" target=\"_blank\">Click here for more information</a>"
        }
      ]
    },
    {
      "id": "17-the-direction-to-the-prayer-room",
      "name": "往祈禱室方向(The direction to the prayer room)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09135725730841848,
        "pitch": 0.27882652418418985,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.2932665853338694,
          "pitch": 0.20300062113239115,
          "rotation": 0,
          "target": "18-prayer-room"
        },
        {
          "yaw": 1.3923936575366813,
          "pitch": 0.140991631330472,
          "rotation": 0,
          "target": "16-global-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-prayer-room",
      "name": "祈禱室(Prayer room)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7821047092309854,
        "pitch": 0.148829420897842,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": 2.813158957091505,
          "pitch": -0.1556725995022319,
          "rotation": 0,
          "target": "17-the-direction-to-the-prayer-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-the-direction-from--the-yuan-ze-building-1-to-road-of-sakura",
      "name": "元智一館往櫻花道方向(The direction from  the Yuan Ze Building 1 to road of sakura)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2493427358779403,
        "pitch": 0.19865516240795422,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 0.002589706663963298,
          "pitch": 0.07284224029822184,
          "rotation": 0,
          "target": "1-road-of-sakura"
        },
        {
          "yaw": -2.5295738471038263,
          "pitch": -0.011190341859970587,
          "rotation": 1.5707963267948966,
          "target": "8-1the-red-brick-road-to-the-back-door-of-the-yuan-ze-building-1"
        },
        {
          "yaw": 2.148063637801461,
          "pitch": -0.02654493895676069,
          "rotation": 4.71238898038469,
          "target": "3-1the-red-brick-road-to-the-front-door-of-the-yuan-ze-building-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-road-of-sakura",
      "name": "櫻花道(Road of sakura)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7796901433281924,
        "pitch": -0.12934585210913951,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 1.3591358844082677,
          "pitch": 0.03401583442827061,
          "rotation": 0,
          "target": "0-the-direction-from--the-yuan-ze-building-1-to-road-of-sakura"
        },
        {
          "yaw": -1.7909711655190037,
          "pitch": 0.08812024169383292,
          "rotation": 0,
          "target": "2-the-direction-from-road-of-sakura--to-the-yuan-ze-building-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-the-direction-from-road-of-sakura--to-the-yuan-ze-building-3",
      "name": "櫻花道往元智三館方向((The direction from road of sakura  to the Yuan Ze Building 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1733871014711603,
        "pitch": -0.1398876753311633,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -2.234006717790834,
          "pitch": -0.04263512781865231,
          "rotation": 0,
          "target": "3-the-side-door-of-the-yuan-ze-building-3"
        },
        {
          "yaw": 0.940704424542421,
          "pitch": 0.06448213451293938,
          "rotation": 0,
          "target": "1-road-of-sakura"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-the-side-door-of-the-yuan-ze-building-3",
      "name": "元智三館側門入口(The side door of the Yuan Ze Building 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1308106051461646,
        "pitch": -0.04347860179211871,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -0.12524626193751054,
          "pitch": -0.028014143964250948,
          "rotation": 0,
          "target": "9-elevator-entrance-of-the-right-side-first-floor"
        },
        {
          "yaw": 3.004335617930633,
          "pitch": 0.15502118724459457,
          "rotation": 0,
          "target": "2-the-direction-from-road-of-sakura--to-the-yuan-ze-building-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-the-west-side-of-the-rock-of-innovation",
      "name": "思新石西側(The west side of the Rock of Innovation)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0527728645944467,
        "pitch": 0.09659527102004262,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 3.1333028388913924,
          "pitch": -0.07182808000221641,
          "rotation": 0,
          "target": "5-the-direcition-to-the-yuan-ze-building-3"
        },
        
        {
          "yaw": 5.148063637801461,
          "pitch": -0.02654493895676069,
          "rotation": 4.71238898038469,
          "target":"2-the-north-side-of-the-rock-of-innovation"
        },
        {
          "yaw": -5.5295738471038263,
          "pitch": -0.011190341859970587,
          "rotation": 1.5707963267948966,
          "target": "3-the-south-side-of-the-rock-of-innovation"
        }
        
      ],
      "infoHotspots": []
    },
    {
      "id": "5-the-direcition-to-the-yuan-ze-building-3",
      "name": "往元智三館正門方向(The direcition to the Yuan Ze Building 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],"faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.122061829758959,
        "pitch": -0.5272786434384038,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -3.074129683854002,
          "pitch": -0.10780746041942457,
          "rotation": 0,
          "target": "6-the-entrance-of-the-yuan-ze-building-3"
          
        },
        {
          "yaw": 0.08410613762652375,
          "pitch": 0.007393430140938406,
          "rotation": 0,
          "target": "4-the-west-side-of-the-rock-of-innovation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-entrance-of-the-yuan-ze-building-3",
      "name": "元智三館正門入口((The entrance of the Yuan Ze Building 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0049101553571873,
        "pitch": -0.2563856556181605,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -1.2687067645793437,
          "pitch": 0.020888288656209397,
          "rotation": 0,
          "target": "7-the-lobby-of-the-yuan-ze-building-3"
        },
        {
          "yaw": 2.207897845309871,
          "pitch": 0.08018335102887164,
          "rotation": 0,
          "target": "4-the-west-side-of-the-rock-of-innovation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-the-lobby-of-the-yuan-ze-building-3",
      "name": "元智三館正門大廳((The lobby of the Yuan Ze Building 3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.018090370335469785,
        "pitch": -0.30056946456288536,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -3.052143198837067,
          "pitch": 0.061246194323523184,
          "rotation": 0,
          "target": "6-the-entrance-of-the-yuan-ze-building-3"
        },
        {
          "yaw": 1.55008597250632,
          "pitch": 0.0664041570767182,
          "rotation": 4.71238898038469,
          "target": "8-the-direction-to-the-elevator-of-right-side"
        },
        {
          "yaw": -1.5479466288445547,
          "pitch": 0.009000597910073793,
          "rotation": 1.5707963267948966,
          "target": "10-the-direction-to-the-elevator-of-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-the-direction-to-the-elevator-of-right-side",
      "name": "正門往右側電梯方向(The direction to the elevator of right side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.000116414898076,
        "pitch": 0.012856257098221135,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -1.0826791940382634,
          "pitch": 0.05002206942150522,
          "rotation": 0,
          "target": "7-the-lobby-of-the-yuan-ze-building-3"
        },
        {
          "yaw": 2.050581103744154,
          "pitch": 0.08957805622056547,
          "rotation": 0,
          "target": "9-elevator-entrance-of-the-right-side-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-elevator-entrance-of-the-right-side-first-floor",
      "name": "一樓右側電梯入口(Elevator entrance of the right side first floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.916006284059746,
        "pitch": -0.09993045670365142,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 1.8474651989688855,
          "pitch": 0.058020353070448394,
          "rotation": 0,
          "target": "3-the-side-door-of-the-yuan-ze-building-3"
        },
        {
          "yaw": -1.256465360540174,
          "pitch": 0.08014557275435408,
          "rotation": 0,
          "target": "12-the-stairs-from-the-first-floor-to-the-third-floor"
        },
        {
          "yaw": -2.0222097833303962,
          "pitch": 0.01738189922241773,
          "rotation": 4.71238898038469,
          "target": "8-the-direction-to-the-elevator-of-right-side"
        },
        {
          "yaw": -2.9220162008153103,
          "pitch": 0.12704189336599114,
          "rotation": 0,
          "target": "16-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-right-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-the-direction-to-the-elevator-of-left-side",
      "name": "正門左側往電梯方向(The direction to the elevator of left side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.128115981918582,
        "pitch": 0.29018861627991654,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -3.0260040274617097,
          "pitch": 0.10719833991634431,
          "rotation": 0,
          "target": "11-elevator-entrance-from-the-first-floor-to-the-third-floor-of-the-left-side"
        },
        {
          "yaw": 0.06845864259716272,
          "pitch": 0.1143314489979641,
          "rotation": 0,
          "target": "7-the-lobby-of-the-yuan-ze-building-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-elevator-entrance-from-the-first-floor-to-the-third-floor-of-the-left-side",
      "name": "一樓往三樓左側電梯入口(Elevator entrance from the first floor to the third floor of the left side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.994725029999538,
        "pitch": 0.10530516090143216,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 1.4802792429753868,
          "pitch": 0.10626552481645923,
          "rotation": 0,
          "target": "12-the-stairs-from-the-first-floor-to-the-third-floor"
        },
        {
          "yaw": -3.1001444665365625,
          "pitch": 0.10946573999212283,
          "rotation": 0,
          "target": "13-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-left-side"
        },
        {
          "yaw": 2.4428697498602654,
          "pitch": 0.1027827613731489,
          "rotation": 0,
          "target": "10-the-direction-to-the-elevator-of-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-the-stairs-from-the-first-floor-to-the-third-floor",
      "name": "一樓往三樓樓梯口(The stairs from the first floor to the third floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0773981346332357,
        "pitch": -0.017013365918650436,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 3.0773981346332357,
          "pitch": -0.017013365918650436,
          "rotation": 0,
          "target": "17-the-stairs-from-the-third-floor-to-the-first-floor"
        },
        {
          "yaw": 1.5750761962763393,
          "pitch": 0.08613081053419869,
          "rotation": 0,
          "target": "9-elevator-entrance-of-the-right-side-first-floor"
        },
        {
          "yaw": -1.5599801395606452,
          "pitch": 0.07294771568185787,
          "rotation": 0,
          "target": "11-elevator-entrance-from-the-first-floor-to-the-third-floor-of-the-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-left-side",
      "name": "三樓往一樓左側電梯入口(Elevator entrance from the third floor to  the first floor of the left side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.206465837506757,
        "pitch": -0.04911069796500023,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 0.6712964706753777,
          "pitch": 0.154951889088629,
          "rotation": 0,
          "target": "14-3301entrance-of-the-3301r-computer-classroom"
        },
        {
          "yaw": -0.3577051930310091,
          "pitch": 0.08150658509829256,
          "rotation": 0,
          "target": "17-the-stairs-from-the-third-floor-to-the-first-floor"
        },
        {
          "yaw": 1.3961344669285065,
          "pitch": 0.15661518211276615,
          "rotation": 3.141592653589793,
          "target": "11-elevator-entrance-from-the-first-floor-to-the-third-floor-of-the-left-side"
        },
        {
          "yaw": -1.482887457305468,
          "pitch": 0.07930005421492936,
          "rotation": 0,
          "target": "18-3308the-direction-to-3308r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-3301entrance-of-the-3301r-computer-classroom",
      "name": "3301電腦教室門口(Entrance of the 3301R computer classroom)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5025075874325591,
          "pitch": 0.2684230152961611,
          "rotation": 0,
          "target": "15-3301computer-classroom-3301r"
        },
        {
          "yaw": 1.559623399083236,
          "pitch": 0.13195811345423536,
          "rotation": 0,
          "target": "13-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-3301computer-classroom-3301r",
      "name": "3301電腦教室(Computer classroom)-3301R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8285678560417775,
        "pitch": 0.15169832654473048,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 1.0831188598233616,
          "pitch": 0.011373679496504252,
          "rotation": 4.71238898038469,
          "target": "14-3301entrance-of-the-3301r-computer-classroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9588732952394636,
          "pitch": -0.0838505478998961,
          "title": "Provost Course",
          "text": "<a href=\"https://www.youtube.com/watch?v=_BikqAwbh0c\" target=\"_blank\">期末成果發表影片-YouTube</a><br>"
        }
      ]
    
    },
    {
      "id": "16-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-right-side",
      "name": "三樓往一樓右側電梯入口(Elevator entrance from the third floor to  the first floor of the right side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1076538578553228,
        "pitch": -0.06286016908311787,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -1.6111306241090233,
          "pitch": 0.12236447531206629,
          "rotation": 18.84955592153877,
          "target": "17-the-stairs-from-the-third-floor-to-the-first-floor"
        },
        {
          "yaw": 3.0690977916783098,
          "pitch": 0.19145822655032596,
          "rotation": 3.141592653589793,
          "target": "9-elevator-entrance-of-the-right-side-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-the-stairs-from-the-third-floor-to-the-first-floor",
      "name": "三樓往一樓樓梯口(The stairs from the third floor to the first floor)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0953974943424889,
        "pitch": -0.032655333807227294,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 1.5597060120385642,
          "pitch": 0.09826271475267845,
          "rotation": 0,
          "target": "16-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-right-side"
        },
        {
          "yaw": -1.339482272708171,
          "pitch": 0.0755443094317041,
          "rotation": 0,
          "target": "13-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-left-side"
        },
        {
          "yaw": -0.9764006736548705,
          "pitch": 0.06794853220513986,
          "rotation": 1.5707963267948966,
          "target": "18-3308the-direction-to-3308r"
        },
        {
          "yaw": -1.8055370086006057,
          "pitch": 0.07123464964643311,
          "rotation": 4.71238898038469,
          "target": "14-3301entrance-of-the-3301r-computer-classroom"
        }
      
        
      ],
      "infoHotspots": []
    },
    {
      "id": "18-3308the-direction-to-3308r",
      "name": "往3308教室方向(The direction to 3308R)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.785643832673385,
        "pitch": -0.1187212261564774,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -3.049062148497166,
          "pitch": 0.07729430071103494,
          "rotation": 0,
          "target": "19-3308aentrance-of-the-3308ar-maker-space"
        },
        {
          "yaw": -0.46496290506178184,
          "pitch": 0.2115942810867928,
          "rotation": 17.27875959474387,
          "target": "17-the-stairs-from-the-third-floor-to-the-first-floor"
        },
        {
          "yaw": 0.09013426823861614,
          "pitch": 0.04826580677665149,
          "rotation": 0,
          "target": "13-elevator-entrance-from-the-third-floor-to--the-first-floor-of-the-left-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-3308aentrance-of-the-3308ar-maker-space",
      "name": "3308A創客基地門口(Entrance of the 3308AR Maker Space)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.20231711980437517,
        "pitch": -0.061779644904245146,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": -0.010246014374835966,
          "pitch": 0.009240452386922726,
          "rotation": 0,
          "target": "20-3308amaker-space-3308ar"
        },
        {
          "yaw": 3.023571661641922,
          "pitch": 0.17005143132854528,
          "rotation": 0,
          "target": "18-3308the-direction-to-3308r"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-3308amaker-space-3308ar",
      "name": "3308A創客基地(Maker Space)-3308AR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9841771989074317,
        "pitch": -0.0018903739909621464,
        "fov": 1.4385746071217929
      },
      "linkHotspots": [
        {
          "yaw": 3.0786725463474376,
          "pitch": 0.04448933996790849,
          "rotation": 0,
          "target": "19-3308aentrance-of-the-3308ar-maker-space"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-the-entrance-of-the-front-door-elevator-on-b1",
      "name": "地下一樓前門電梯入口(The entrance of the front door elevator on B1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3971472822551405,
        "pitch": 0.13391801305364837,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.966263292363955,
          "pitch": 0.151031981486069,
          "rotation": 0,
          "target": "8--the-entrance-of-the-front-door-elevator-on-1f"
        },
        {
          "yaw": -1.3917403670367001,
          "pitch": 0.0703128535179971,
          "rotation": 10.995574287564278,
          "target": "1-the-front-door-hallway-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-the-front-door-hallway-on-b1",
      "name": "地下一樓前門走廊(The front door hallway on B1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0408648749507607,
        "pitch": 0.02911563139601192,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -2.2326515366097883,
          "pitch": 0.014728275040310379,
          "rotation": 1.5707963267948966,
          "target": "2-1008the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 2.001887444785293,
          "pitch": 0.0666759392124483,
          "rotation": 4.71238898038469,
          "target": "0-the-entrance-of-the-front-door-elevator-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1008the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering",
      "name": "1008資工系電腦教室門口(The entrance of the computer classroom of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.05526840571278946,
        "pitch": 0.013584881575061658,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -0.03040962088890886,
          "pitch": -0.03887283708180789,
          "rotation": 6.283185307179586,
          "target": "3-1008the-computer-classroom-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 0.9503431126726678,
          "pitch": 0.19006462565657145,
          "rotation": 1.5707963267948966,
          "target": "1-the-front-door-hallway-on-b1"
        },
        {
          "yaw": -0.9521283628500683,
          "pitch": 0.1964600053901595,
          "rotation": 4.71238898038469,
          "target": "4-the-back-door-hallway-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1008the-computer-classroom-of-department-of-computer-science--engineering",
      "name": "1008資工系電腦教室(The computer classroom of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.471813306253222,
        "pitch": 0.17633476870625664,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.321000421857663,
          "pitch": 0.021197866293086065,
          "rotation": 0,
          "target": "2-1008the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-the-back-door-hallway-on-b1",
      "name": "地下一樓後門走廊(The back door hallway on B1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.685992842847968,
        "pitch": 0.10338558662464159,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -2.333229832493654,
          "pitch": 0.057293760411610606,
          "rotation": 4.71238898038469,
          "target": "5-the-entrance-of-the-back-door-staircase-on-b1"
        },
        {
          "yaw": 0.1003690256150378,
          "pitch": 0.09587373874239447,
          "rotation": 0,
          "target": "2-1008the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-the-entrance-of-the-back-door-staircase-on-b1",
      "name": "地下一樓後門樓梯入口(The entrance of the back door staircase on B1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.028371367441437,
        "pitch": 0.12524902453409048,
        "fov": 1.4247958001385153
      },
      "linkHotspots": [
        {
          "yaw": -3.0605823045978173,
          "pitch": 0.1983260757626617,
          "rotation": 1.5707963267948966,
          "target": "4-the-back-door-hallway-on-b1"
        },
        {
          "yaw": 1.038943062190743,
          "pitch": 0.12998935355106056,
          "rotation": 4.71238898038469,
          "target": "6-the-entrance-of-the--back-door-elevator-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-the-entrance-of-the--back-door-elevator-on-b1",
      "name": "地下一樓後門電梯入口(The entrance of the  back door elevator on B1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4649662611798959,
        "pitch": 0,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -0.16142296662281908,
          "pitch": 0.11922530765660255,
          "rotation": 0,
          "target": "9--the-entrance-of-the-back-door-elevator-on-1f"
        },
        {
          "yaw": -2.133182753390397,
          "pitch": 0.0852003577054603,
          "rotation": 10.995574287564278,
          "target": "5-the-entrance-of-the-back-door-staircase-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7--the-front-door-platform-on-1f",
      "name": "一樓前門平台 (The front door platform on 1F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2375118980414399,
          "pitch": 0.06657036147762696,
          "rotation": 10.995574287564278,
          "target": "8--the-entrance-of-the-front-door-elevator-on-1f"
        },
        {
          "yaw": 3.0702987371108197,
          "pitch": 0.10162565606466423,
          "rotation": 1.5707963267948966,
          "target": "4-1the-front-door-of-the-yuan-ze-building-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8--the-entrance-of-the-front-door-elevator-on-1f",
      "name": "一樓前門電梯入口 (The entrance of the front door elevator on 1F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5639214755782316,
          "pitch": 0.08887043567117914,
          "rotation": 4.71238898038469,
          "target": "7--the-front-door-platform-on-1f"
        },
        {
          "yaw": -0.17731991071472564,
          "pitch": -0.03135342077840697,
          "rotation": 0,
          "target": "9-elevator-entrance-from-the-2-floor-to-the-7-floor"
        },
        {
          "yaw": -0.17595022037628816,
          "pitch": 0.1404129114838213,
          "rotation": 3.141592653589793,
          "target": "0-the-entrance-of-the-front-door-elevator-on-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9--the-entrance-of-the-back-door-elevator-on-1f",
      "name": "一樓後門電梯入口 (The entrance of the back door elevator on 1F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9125347970891333,
        "pitch": 0.04668100333829983,
        "fov": 1.4247958001385153
      },
      "linkHotspots": [
        {
          "yaw": 2.9307841709057367,
          "pitch": 0.08627343888742445,
          "rotation": 0,
          "target": "24-elevator-entrance-from-the-2-floor-to-the-7-floor-of-the-back-door"
        },
        {
          "yaw": 2.931888441321984,
          "pitch": 0.25915013632990025,
          "rotation": 3.141592653589793,
          "target": "6-the-entrance-of-the--back-door-elevator-on-b1"
        },
        {
          "yaw": 1.415368970483728,
          "pitch": 0.046740526154641415,
          "rotation": 4.71238898038469,
          "target": "6-the-stairs-from-the-first-floor-to-the-second-floor-of-the-back-door"
        }
      ],
    
      "infoHotspots": []
    },
    {
      "id": "10-1201a--the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering",
      "name": "1201A資工系電腦教室門口  (The entrance of the computer classroom of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.0704154342146435,
        "pitch": 0.04705212194113351,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -3.0756448263635434,
          "pitch": 0.18232657507466143,
          "rotation": 6.283185307179586,
          "target": "11-1201a-the-computer-classroom-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -0.6368147684705026,
          "pitch": 0.03879255223281142,
          "rotation": 1.5707963267948966,
          "target": "9-elevator-entrance-from-the-2-floor-to-the-7-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1201a-the-computer-classroom-of-department-of-computer-science--engineering",
      "name": "1201A資工系電腦教室 (The computer classroom of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0613318992586764,
        "pitch": 0.0609666626831995,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.9058851915698334,
          "pitch": 0.1051020891108756,
          "rotation": 1.5707963267948966,
          "target": "10-1201a--the-entrance-of-the-computer-classroom-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12---the-entrance-of-the-back-door-staircase-on-2f",
      "name": "二樓後門樓梯入口  (The entrance of the back door staircase on 2F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.213551586345865,
          "pitch": -0.1315867452772892,
          "rotation": 4.71238898038469,
          "target": "23-2the-stairs-from-the-second-floor-to-the-third-floor"
        },
        {
          "yaw": 0.9785593841978226,
          "pitch": 0.04312278849083384,
          "rotation": 1.5707963267948966,
          "target": "24-elevator-entrance-from-the-2-floor-to-the-7-floor-of-the-back-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13--the-entrance-of-the-front-door-staircase-on-3f",
      "name": "三樓前門樓梯入口 (The entrance of the front door staircase on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4477832450982202,
        "pitch": 0.06367649403464348,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 0.7341359682800448,
          "pitch": 0.02189336237520223,
          "rotation": 4.71238898038469,
          "target": "14--the-entrance-of-the-front-door-elevator-on-3f"
        },
        {
          "yaw": 1.9922180397776144,
          "pitch": 0.14868718499653433,
          "rotation": 1.5707963267948966,
          "target": "18--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14--the-entrance-of-the-front-door-elevator-on-3f",
      "name": "三樓前門電梯入口 (The entrance of the front door elevator on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.19073460474029424,
        "pitch": 0.055882505466120946,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.063653083905585,
          "pitch": 0.1946007900161284,
          "rotation": 1.5707963267948966,
          "target": "13--the-entrance-of-the-front-door-staircase-on-3f"
        },
        {
          "yaw": 0.08174525871286065,
          "pitch": 0.07201283756326049,
          "rotation": 0,
          "target": "34--the-entrance-of-the-front-door-elevator-on-5f"
        },
        {
          "yaw": -0.7397772017019406,
          "pitch": 0.1434858630083724,
          "rotation": 4.71238898038469,
          "target": "15-1301a1301b-the-entrance-of-the-computer-classroom-of-the-department-of-computer-science-and-engineering"
        },
        {
          "yaw": 0.07755039755420157,
          "pitch": 0.3233715764504961,
          "rotation": 3.141592653589793,
          "target": "9-elevator-entrance-from-the-2-floor-to-the-7-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1301a1301b-the-entrance-of-the-computer-classroom-of-the-department-of-computer-science-and-engineering",
      "name": "1301A、1301B資工系電腦教室門口 (The entrance of the computer classroom of the Department of Computer Science and Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2759935799371753,
        "pitch": -0.07157261684930916,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -0.7557526513039825,
          "pitch": 0.01265477071325094,
          "rotation": 0,
          "target": "16-1301aic-the-ic-design-computer-classroom-of-the-department-of-computer-science--engineering"
        },
        {
          "yaw": 0.4395974536418805,
          "pitch": 0.012783348950858198,
          "rotation": 0,
          "target": "17-1301b-the-computer-classroom-of-the-department-of-computer-science--engineering"
        },
        {
          "yaw": 1.1214625967908098,
          "pitch": 0.08415365805109687,
          "rotation": 1.5707963267948966,
          "target": "14--the-entrance-of-the-front-door-elevator-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-1301aic-the-ic-design-computer-classroom-of-the-department-of-computer-science--engineering",
      "name": "1301A資工系IC設計電腦教室 (The IC design computer classroom of the Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2435531940164175,
        "pitch": 0.07308905543284894,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.0075701749127948,
          "pitch": 0.08758807447238759,
          "rotation": 1.5707963267948966,
          "target": "15-1301a1301b-the-entrance-of-the-computer-classroom-of-the-department-of-computer-science-and-engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-1301b-the-computer-classroom-of-the-department-of-computer-science--engineering",
      "name": "1301B資工系電腦教室 (The computer classroom of the Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.118124767438413,
        "pitch": 0.11661803920972424,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.3540922576346048,
          "pitch": 0.09859017715123919,
          "rotation": 4.71238898038469,
          "target": "15-1301a1301b-the-entrance-of-the-computer-classroom-of-the-department-of-computer-science-and-engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18--the-central-hallway-on-3f",
      "name": "三樓中央走廊 (The Central hallway on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9378458007675867,
        "pitch": 0.08796337691805789,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -1.6612250950635605,
          "pitch": 0.06662459714727653,
          "rotation": 0,
          "target": "19-1305-the-entrance-of-the-office-of-international-bachelor-program-in-informatics"
        },
        {
          "yaw": -1.2764041225165137,
          "pitch": 0.04412669969934413,
          "rotation": 0,
          "target": "22-1307-the-entrance-of-the-office-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 3.0723879204199065,
          "pitch": 0.06192787468964056,
          "rotation": 1.5707963267948966,
          "target": "13--the-entrance-of-the-front-door-staircase-on-3f"
        },
        {
          "yaw": -0.10914291748709815,
          "pitch": 0.044036416707509574,
          "rotation": 1.5707963267948966,
          "target": "26--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-1305-the-entrance-of-the-office-of-international-bachelor-program-in-informatics",
      "name": "1305資英系系辦公室門口 (The entrance of the office of International Bachelor Program in Informatics)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7704654375199755,
        "pitch": 0.11393192069889402,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -2.0046962024941664,
          "pitch": -0.005043046241333116,
          "rotation": 0,
          "target": "22-1307-the-entrance-of-the-office-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -2.6914297110716845,
          "pitch": -0.08665041725473799,
          "rotation": 6.283185307179586,
          "target": "20-1305-the-office-of-international-bachelor-program-in-informatics"
        },
        {
          "yaw": -0.5371326205281406,
          "pitch": -0.09310259536051113,
          "rotation": 1.5707963267948966,
          "target": "18--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-1305-the-office-of-international-bachelor-program-in-informatics",
      "name": "1305資英系系辦公室 (The office of International Bachelor Program in Informatics)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.519226301133008,
        "pitch": 0.05613478870544064,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.858542888790468,
          "pitch": 0.05610976557285774,
          "rotation": 4.71238898038469,
          "target": "19-1305-the-entrance-of-the-office-of-international-bachelor-program-in-informatics"
        },
        {
          "yaw": -2.365972145775057,
          "pitch": 0.07807023548762615,
          "rotation": 0,
          "target": "21-1305-the-seminar-room-of-international-bachelor-program-in-informatics"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-1305-the-seminar-room-of-international-bachelor-program-in-informatics",
      "name": "1305資英系研討室 (The seminar room of International Bachelor Program in Informatics)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.15261036972207087,
        "pitch": -0.024545881163479777,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.4113997176808457,
          "pitch": 0.05035481180222234,
          "rotation": 4.71238898038469,
          "target": "20-1305-the-office-of-international-bachelor-program-in-informatics"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-1307-the-entrance-of-the-office-of-department-of-computer-science--engineering",
      "name": "1307資工系系辦公室門口 (The entrance of the office of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03124670590974077,
        "pitch": 0,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -0.48576275832281546,
          "pitch": 0.20009642736528122,
          "rotation": 0,
          "target": "23-1307-the-office-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -1.4545481599308125,
          "pitch": 0.14911042856824608,
          "rotation": 0,
          "target": "19-1305-the-entrance-of-the-office-of-international-bachelor-program-in-informatics"
        },
        {
          "yaw": -2.4819249038439217,
          "pitch": 0.07636827631101539,
          "rotation": 0,
          "target": "18--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-1307-the-office-of-department-of-computer-science--engineering",
      "name": "1307資工系系辦公室 (The office of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.089296274796581,
          "pitch": 0.21699691964465906,
          "rotation": 0,
          "target": "22-1307-the-entrance-of-the-office-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 1.6381685608866974,
          "pitch": 0.06985371483748892,
          "rotation": 0,
          "target": "24-1307-the-entrance-of-the-chairman-office-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-1307-the-entrance-of-the-chairman-office-of-department-of-computer-science--engineering",
      "name": "1307資工系系主任辦公室門口 (The entrance of the chairman office of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1568751879690886,
        "pitch": 0.13991349371754147,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.170770546457927,
          "pitch": 0.2479546988018697,
          "rotation": 1.5707963267948966,
          "target": "23-1307-the-office-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 3.0942266724649627,
          "pitch": 0.3718696977966349,
          "rotation": 0,
          "target": "25-1307-the-chairman-office-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-1307-the-chairman-office-of-department-of-computer-science--engineering",
      "name": "1307資工系系主任辦公室 (The chairman office of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.30390923599250996,
        "pitch": 0.305676169542366,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.5846873663095877,
          "pitch": 0.08101833163458494,
          "rotation": 1.5707963267948966,
          "target": "24-1307-the-entrance-of-the-chairman-office-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26--the-central-hallway-on-3f",
      "name": "三樓中央走廊 (The Central hallway on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7722667239438934,
        "pitch": 0.14567812774844846,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -2.777419760481404,
          "pitch": 0.07150190060727368,
          "rotation": 4.71238898038469,
          "target": "18--the-central-hallway-on-3f"
        },
        {
          "yaw": -1.7377940044094657,
          "pitch": 0.08565321591023256,
          "rotation": 0,
          "target": "27-1309-the-entrance-of-the-staircase-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -1.388902205997713,
          "pitch": 0.07660620858058564,
          "rotation": 0,
          "target": "29-1311-the-entrance-of-the-meeting-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -0.3243199341766321,
          "pitch": 0.1027183304606254,
          "rotation": 1.5707963267948966,
          "target": "31--the-back-door-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-1309-the-entrance-of-the-staircase-room-of-department-of-computer-science--engineering",
      "name": "1309資工系階梯教室門口 (The entrance of the staircase room of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.03918364123498819,
        "pitch": 0.00579958446794393,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 0.05986365356916501,
          "pitch": 0.14814316603975541,
          "rotation": 0,
          "target": "28-1309-the-staircase-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 0.8411615222973285,
          "pitch": 0.10159450328899844,
          "rotation": 6.283185307179586,
          "target": "29-1311-the-entrance-of-the-meeting-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": -2.338750687554491,
          "pitch": 0.044101748377027405,
          "rotation": 6.283185307179586,
          "target": "26--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-1309-the-staircase-room-of-department-of-computer-science--engineering",
      "name": "1309資工系階梯教室 (The staircase room of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1261427061529687,
        "pitch": -0.21357172597189233,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.1974917193241374,
          "pitch": 0.05301018022424486,
          "rotation": 4.71238898038469,
          "target": "27-1309-the-entrance-of-the-staircase-room-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-1311-the-entrance-of-the-meeting-room-of-department-of-computer-science--engineering",
      "name": "1311資工系會議室門口 (The entrance of the meeting room of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9528890207934477,
        "pitch": 0.048096511873341186,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.8856499053024134,
          "pitch": 0.1809229651210149,
          "rotation": 0,
          "target": "30-1311-the-meeting-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 2.012713779714023,
          "pitch": 0.10224351627236672,
          "rotation": 6.283185307179586,
          "target": "27-1309-the-entrance-of-the-staircase-room-of-department-of-computer-science--engineering"
        },
        {
          "yaw": 1.510453082049617,
          "pitch": 0.06958482316462522,
          "rotation": 4.71238898038469,
          "target": "26--the-central-hallway-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-1311-the-meeting-room-of-department-of-computer-science--engineering",
      "name": "1311資工系會議室 (The meeting room of Department of Computer Science & Engineering)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0971608292552784,
        "pitch": 0.023761202769142287,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -1.518863463159981,
          "pitch": 0.13858694035709007,
          "rotation": 1.5707963267948966,
          "target": "29-1311-the-entrance-of-the-meeting-room-of-department-of-computer-science--engineering"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31--the-back-door-hallway-on-3f",
      "name": "三樓後門走廊 (The back door hallway on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4477297520845607,
        "pitch": 0.1102762779588371,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 2.992129758750276,
          "pitch": 0.07947877983974827,
          "rotation": 4.71238898038469,
          "target": "26--the-central-hallway-on-3f"
        },
        {
          "yaw": -0.36586663146504605,
          "pitch": 0.15447890566032818,
          "rotation": 1.5707963267948966,
          "target": "32--the-entrance-of-the-back-door-staircase-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32--the-entrance-of-the-back-door-staircase-on-3f",
      "name": "三樓後門樓梯入口 (The entrance of the back door staircase on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2894525949645548,
        "pitch": 0.11347629472748189,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": -0.6443320428806008,
          "pitch": 0.03753344969747019,
          "rotation": 10.995574287564278,
          "target": "31--the-back-door-hallway-on-3f"
        },
        {
          "yaw": 2.93034401885277,
          "pitch": 0.0820777816289997,
          "rotation": 1.5707963267948966,
          "target": "33--the-entrance-of-the-back-door-elevator-on-3f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33--the-entrance-of-the-back-door-elevator-on-3f",
      "name": "三樓後門電梯入口 (The entrance of the back door elevator on 3F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9729445258350955,
        "pitch": -0.028959709623119778,
        "fov": 1.3936211278546693
      },
      "linkHotspots": [
        {
          "yaw": 1.4764301574673198,
          "pitch": 0.02877325740525194,
          "rotation": 4.71238898038469,
          "target": "32--the-entrance-of-the-back-door-staircase-on-3f"
        },
        {
          "yaw": 2.99267853414589,
          "pitch": -0.03964448179153912,
          "rotation": 0,
          "target": "45--the-entrance-of-the-back-door-elevator-on-5f"
        },
        {
          "yaw": 2.99267853414589,
          "pitch": -0.20964448179153912,
          "rotation": -3.141592653589793,
          "target": "24-elevator-entrance-from-the-2-floor-to-the-7-floor-of-the-back-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34--the-entrance-of-the-front-door-elevator-on-5f",
      "name": "五樓前門電梯入口 (The entrance of the front door elevator on 5F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11980652244530887,
          "pitch": 0.03293385778007263,
          "rotation": 0,
          "target": "46-the-entrance-of-the-front-door-elevator-on-6f"
        },
        {
          "yaw": -0.12247726284098448,
          "pitch": 0.26496449995759264,
          "rotation": 3.141592653589793,
          "target": "14--the-entrance-of-the-front-door-elevator-on-3f"
        },
        {
          "yaw": 1.1993580244986628,
          "pitch": 0.09335093275003281,
          "rotation": 1.5707963267948966,
          "target": "38--wi-fi-zone"
        },
        {
          "yaw": -1.4470612947005712,
          "pitch": 0.054509600266044345,
          "rotation": 4.71238898038469,
          "target": "35-1501a1501b-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-1501a1501b-the-entrance-of-the-classroom-of-department-of-information-management",
      "name": "1501A、1501B資管系教室門口 (The entrance of the classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14977491765167628,
          "pitch": 0.1183971206936203,
          "rotation": 0,
          "target": "36-1501a-the-classroom-of-department-of-information-management-r1501a"
        },
        {
          "yaw": 1.035081347238183,
          "pitch": 0.116509725367548,
          "rotation": 0,
          "target": "37-1501b-the-classroom-of-department-of-information-management-r1501b"
        },
        {
          "yaw": 2.545218192717102,
          "pitch": 0.04985006305045658,
          "rotation": 1.5707963267948966,
          "target": "34--the-entrance-of-the-front-door-elevator-on-5f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-1501a-the-classroom-of-department-of-information-management-r1501a",
      "name": "1501A資管系教室 (The classroom of Department of Information Management-R1501A)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.769386753022797,
          "pitch": 0.034186146429451725,
          "rotation": 1.5707963267948966,
          "target": "35-1501a1501b-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-1501b-the-classroom-of-department-of-information-management-r1501b",
      "name": "1501B資管系教室 (The classroom of Department of Information Management-R1501B)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1748008996729844,
          "pitch": 0.10125326738127072,
          "rotation": 4.71238898038469,
          "target": "35-1501a1501b-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38--wi-fi-zone",
      "name": "無線上網區 (Wi-Fi Zone)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7998116749723003,
          "pitch": 0.2016173214793504,
          "rotation": 1.5707963267948966,
          "target": "34--the-entrance-of-the-front-door-elevator-on-5f"
        },
        {
          "yaw": 1.5316312882835987,
          "pitch": 0.09762042747033917,
          "rotation": 0,
          "target": "39-1502-the-entrance-of-the-office-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-1502-the-entrance-of-the-office-of-department-of-information-management",
      "name": "1502資管系系辦公室門口 (The entrance of the office of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9766527272416834,
          "pitch": 0.23163474484057467,
          "rotation": 0,
          "target": "38--wi-fi-zone"
        },
        {
          "yaw": -2.201443368961767,
          "pitch": 0.17329978788466427,
          "rotation": 0,
          "target": "40-1503-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-1503-the-entrance-of-the-classroom-of-department-of-information-management",
      "name": "1503資管系特色教學研討室門口 (The entrance of the classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0518915548348415,
          "pitch": 0.03918056920729285,
          "rotation": 4.71238898038469,
          "target": "42--the-front-door-hallway-on-5f"
        },
        {
          "yaw": -2.0922954541785685,
          "pitch": 0.10813799820089542,
          "rotation": 0,
          "target": "39-1502-the-entrance-of-the-office-of-department-of-information-management"
        },
        {
          "yaw": -0.7882308657726167,
          "pitch": 0.056810004960102134,
          "rotation": 0,
          "target": "41-1503--the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-1503--the-classroom-of-department-of-information-management",
      "name": "1503資管系特色教學研討室  (The classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.490980284599443,
          "pitch": 0.07559491559227283,
          "rotation": 4.71238898038469,
          "target": "40-1503-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42--the-front-door-hallway-on-5f",
      "name": "五樓前門走廊 (The front door hallway on 5F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2763051754930714,
          "pitch": 0.0670034027791857,
          "rotation": 0,
          "target": "40-1503-the-entrance-of-the-classroom-of-department-of-information-management"
        },
        {
          "yaw": -2.348905332900788,
          "pitch": 0.05319198843764994,
          "rotation": 4.71238898038469,
          "target": "43--the-central-hallway-on-5f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43--the-central-hallway-on-5f",
      "name": "五樓中央走廊 (The central hallway on 5F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17007153501967487,
          "pitch": -0.002107123657417276,
          "rotation": 1.5707963267948966,
          "target": "44--the-entrance-of-the-back-door-staircase-on-5f"
        },
        {
          "yaw": -3.0182929942612127,
          "pitch": 0.005276002502800026,
          "rotation": 4.71238898038469,
          "target": "42--the-front-door-hallway-on-5f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44--the-entrance-of-the-back-door-staircase-on-5f",
      "name": "五樓後門樓梯入口 (The entrance of the back door staircase on 5F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.708945103841227,
          "pitch": 0.08268393050863843,
          "rotation": 1.5707963267948966,
          "target": "45--the-entrance-of-the-back-door-elevator-on-5f"
        },
        {
          "yaw": 0.7688444782086137,
          "pitch": 0.04602750240692899,
          "rotation": 4.71238898038469,
          "target": "43--the-central-hallway-on-5f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45--the-entrance-of-the-back-door-elevator-on-5f",
      "name": "五樓後門電梯入口 (The entrance of the back door elevator on 5F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0932326000531507,
        "pitch": 0.008165284315289512,
        "fov": 1.4247958001385153
      },
      "linkHotspots": [
        {
          "yaw": -3.0293002755267118,
          "pitch": 0.09049596971585672,
          "rotation": 0,
          "target": "54--the-entrance-of-the-back-door-elevator-on-6f"
        },
        {
          "yaw": -3.0293509022348406,
          "pitch": 0.34233571036022603,
          "rotation": 3.141592653589793,
          "target": "33--the-entrance-of-the-back-door-elevator-on-3f"
        },
        {
          "yaw": 1.7246666825204375,
          "pitch": 0.060735775259312064,
          "rotation": 4.71238898038469,
          "target": "44--the-entrance-of-the-back-door-staircase-on-5f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-the-entrance-of-the-front-door-elevator-on-6f",
      "name": "六樓前門電梯入口(The entrance of the front door elevator on 6F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17095510186173257,
          "pitch": 0.09170246609081367,
          "rotation": 0,
          "target": "33-elevator-entrance-from-the-7-floor-to-the-2-floor"
        },
        {
          "yaw": -0.1720569871119615,
          "pitch": 0.3374151919589714,
          "rotation": 3.141592653589793,
          "target": "34--the-entrance-of-the-front-door-elevator-on-5f"
        },
        {
          "yaw": 1.3819773913559494,
          "pitch": 0.12161363153725979,
          "rotation": 1.5707963267948966,
          "target": "47-the-front-door-hallway-on-6f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-the-front-door-hallway-on-6f",
      "name": "六樓前門走廊(The front door hallway on 6F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3331519465369137,
          "pitch": 0.12104476004387799,
          "rotation": 0,
          "target": "46-the-entrance-of-the-front-door-elevator-on-6f"
        },
        {
          "yaw": -0.07283736493833715,
          "pitch": 0.08182157078771901,
          "rotation": 1.5707963267948966,
          "target": "48-1608athe-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-1608athe-entrance-of-the-classroom-of-department-of-information-management",
      "name": "1608A資管系特色教學研討室門口(The entrance of the classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.388839932156401,
          "pitch": 0.09729543901847393,
          "rotation": 1.5707963267948966,
          "target": "47-the-front-door-hallway-on-6f"
        },
        {
          "yaw": -1.0965092546786455,
          "pitch": 0.15052802477346106,
          "rotation": 4.71238898038469,
          "target": "50-16101611-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-1608a-the-classroom-of-department-of-information-management",
      "name": "1608A資管系特色教學研討室 (The classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 724,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "50-16101611-the-entrance-of-the-classroom-of-department-of-information-management",
      "name": "1610、1611資管系電腦教室門口 (The entrance of the classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6218234764276112,
          "pitch": 0.19683911440607815,
          "rotation": 0,
          "target": "51-1610-the-classroom-of-department-of-information-management"
        },
        {
          "yaw": 0.5378990155999439,
          "pitch": 0.13733600064409046,
          "rotation": 0,
          "target": "52-1611-the-classroom-of-department-of-information-management"
        },
        {
          "yaw": 1.2928379701399297,
          "pitch": 0.045901081275705025,
          "rotation": 1.5707963267948966,
          "target": "53--the-entrance-of-the-back-door-staircase-on-6f"
        },
        {
          "yaw": -1.371863379779592,
          "pitch": 0.043973246196197024,
          "rotation": 4.71238898038469,
          "target": "48-1608athe-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-1610-the-classroom-of-department-of-information-management",
      "name": "1610資管系電腦教室 (The classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9145054092824054,
          "pitch": 0.06058557997127956,
          "rotation": 4.71238898038469,
          "target": "50-16101611-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-1611-the-classroom-of-department-of-information-management",
      "name": "1611資管系電腦教室 (The classroom of Department of Information Management)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.834673657354367,
          "pitch": -0.013321627684785398,
          "rotation": 1.5707963267948966,
          "target": "50-16101611-the-entrance-of-the-classroom-of-department-of-information-management"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53--the-entrance-of-the-back-door-staircase-on-6f",
      "name": "六樓後門樓梯入口 (The entrance of the back door staircase on 6F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.599929793868288,
          "pitch": 0.08911819651820707,
          "rotation": 1.5707963267948966,
          "target": "50-16101611-the-entrance-of-the-classroom-of-department-of-information-management"
        },
        {
          "yaw": 1.1724847810500982,
          "pitch": 0.06820153556520125,
          "rotation": 4.71238898038469,
          "target": "54--the-entrance-of-the-back-door-elevator-on-6f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54--the-entrance-of-the-back-door-elevator-on-6f",
      "name": "六樓後門電梯入口 (The entrance of the back door elevator on 6F)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6252623152989507,
          "pitch": 0.07328744307530144,
          "rotation": 5.497787143782138,
          "target": "53--the-entrance-of-the-back-door-staircase-on-6f"
        },
        {
          "yaw": 0.0293002755267118,
          "pitch": 0.09049596971585672,
          "rotation": 0,
          "target": "25-elevator-entrance-from-the-7-floor-to-the-2-floor-2"
        },
        {
          "yaw": 0.0293509022348406,
          "pitch": 0.34233571036022603,
          "rotation": 3.141592653589793,
          "target": "45--the-entrance-of-the-back-door-elevator-on-5f"
        },
        
      ],
      "infoHotspots": []
    }


  ],
  "name": "Office_v1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
