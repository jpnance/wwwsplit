// todo
// * warmup mode
// * load other splits
// * be able to save splits from unfinished runs

var data = {
	game: 'Super Mario 64',
	goal: '16-Star',

	segments: [{"name":"Bob-Omb Battlefield (1)","best":{"split":107060,"duration":{"individual":99069,"run":107060}},"history":[99069,99072,99094,99224,99444,99592,100152,100183,100231,100233,100253,100261,100440,100444,100586,100597,100603,100727,100835,100896,100974,101026,101149,101317,101615,101667,101789,102134,102150,102671,102948,102997,103190,103696,104588,107060,107271,107328,107398,107418,107828,108213,108246,108276,108369,108402,108436,108441,108589,109007,109247,109392,109455,109497,109524,109590,109593,109624,109629,110196,110264,110372,110514,110714,111239,111564,111684,112593,112902,113059,114227,114324,114545,114708,114785,115066,115094,115227,115440,115462,115491,115553,115800,115863,115863,116164,116272,116331,116847,116908,117020,117030,117237,117454,118958,119017,120144,120568,120680,120717,120779,120879,121006,121132,121362,121749,121801,122153,123276,123812,123828,123869,124211,124617,124625,124679,124686,124823,125131,125365,125494,125790,126027,126035,128849,128892,129264,129287,129622,129698,131986,132048,132253,132469,135150,163504]},{"name":"Whomp's Fortress (6)","best":{"split":313135,"duration":{"individual":202073,"run":206075}},"history":[202073,202730,202963,204507,204570,204770,205146,205152,205471,205854,206075,206143,206313,206321,206338,207035,207069,207164,207166,207228,207257,207359,207479,207711,207770,207869,207899,208020,208140,208310,208317,208334,208414,208475,208501,208636,209076,209125,209180,209788,209946,210047,210050,210060,210075,210109,210244,210715,210812,210940,211035,211044,211164,211260,211261,211385,211401,211837,211898,212345,212378,212407,212617,212670,213020,213309,213539,213587,213627,213670,214654,214714,215414,215837,216173,216285,216478,217884,218074,218468,218519,218782,219069,219294,221251,221569,221797,221809,221953,223069,223416,224184,225266,225277,225368,225654,227287,229211,229664,229754,232081,232089,233398,236632,237280,237691,241834,243803,244280,245106,246522,249774,254393,255769,257214,258504,265655,266485,275192,282519]},{"name":"Cool Cool Mountain (8)","best":{"split":397838,"duration":{"individual":83872,"run":84703}},"history":[83872,84154,84285,84414,84507,84542,84572,84703,84704,84782,84797,84828,84926,85119,85212,85322,85370,85373,85542,85694,85696,85728,85729,85793,85837,85910,85920,85982,86140,86200,86205,86299,86336,86672,86751,86753,86811,86844,86940,87003,87067,87221,87332,87392,87421,87561,87613,87807,87868,88048,88252,88260,88411,88563,88603,88610,88697,88702,88740,88799,88960,89053,89118,89185,89220,89245,89267,89373,89781,89822,89983,90143,90170,90206,90364,90525,90589,90589,90750,91105,91106,92030,92213,92415,92538,93274,93313,94081,94207,94812,94878,94878,94903,94974,95072,95580,95581,96287,96381,96606,99355,100093,100452,101102,101472,104670,106173,107485,108231,110143,110343,110527,110781,117211,119308,124479,124958,125761,154612,156192]},{"name":"Bowser in the Dark World (9)","best":{"split":492718,"duration":{"individual":null,"run":null}},"history":[]},{"name":"Shifting Sand Land (11)","best":{"split":585513,"duration":{"individual":87765,"run":92795}},"history":[87765,87936,87996,88062,88062,88542,88638,88672,88892,88927,88937,89054,89078,89148,89185,89270,89277,89305,89314,89535,89536,89589,89595,89664,89715,89748,89753,89924,90045,90142,90174,90204,90205,90241,90301,90301,90303,90379,90396,90421,90497,90623,90782,90803,90813,90850,91228,91278,91295,91295,91390,91453,91454,91455,91510,91551,91704,91708,91709,91959,92073,92167,92288,92350,92508,92512,92579,92638,92690,92695,92795,93215,93415,93530,93567,93569,94049,94112,94283,94463,94973,94974,95166,95323,95416,95602,96092,96328,96570,96830,97218,97838,97925,99101,99264,100493,100540,101175,101413,102301,102493,102528,102735,103131,103385,104061,104190,104255,104477,105821,108260,108413,108927,109533,109982,110267,111800,112127,113694,114907,116221,119123,120285,121370,122396,127546,128445,129085,139310,142783,147486,169944]},{"name":"Lethal Lava Land (12)","best":{"split":620584,"duration":{"individual":33088,"run":35071}},"history":[33088,33183,33517,33629,33695,33790,33794,33885,33887,33887,33917,33955,33981,34013,34014,34015,34047,34047,34109,34110,34114,34140,34150,34169,34192,34208,34211,34239,34241,34265,34271,34303,34304,34323,34330,34335,34335,34347,34366,34399,34403,34432,34451,34463,34494,34494,34496,34529,34529,34529,34556,34559,34559,34559,34560,34592,34621,34626,34640,34654,34656,34673,34684,34690,34690,34714,34717,34757,34782,34783,34784,34787,34815,34818,34819,34850,34910,34940,34944,34976,35005,35038,35041,35071,35073,35095,35167,35167,35296,35300,35327,35365,35388,35488,35549,35552,35648,35743,35777,35780,35810,35830,35870,35903,35935,35935,35972,36190,36222,36253,36257,36285,36382,36444,36448,36510,36510,36541,36541,36542,36566,36733,36925,37024,37218,37344,37824,38300,38728,40419,40863,56513]},{"name":"Hazy Maze Cave (15)","best":{"split":759769,"duration":{"individual":null,"run":null}},"history":[]},{"name":"Dire Dire Docks (16)","best":{"split":853856,"duration":{"individual":91806,"run":94087}},"history":[91806,93511,93585,94087,94407,94900,95486,95679,95839,95966,95998,96250,96448,96477,96702,97055,97472,97730,97753,98085,98233,98686,98743,98943,99197,99810,99860,100636,100639,101174,101405,101968,102131,102310,102414,102433,102588,103425,104222,104225,104284,104289,104617,105279,105369,105513,105694,105853,105950,106044,106268,106329,107538,107740,107810,107970,108095,108130,108159,108183,108252,108350,108396,108541,108734,109147,109182,110077,110153,110172,110267,110366,110433,110591,110715,111518,111550,111579,111617,111630,112539,112640,113119,113180,113215,113309,113562,114048,114172,114215,114369,114498,115228,115446,115742,116733,116774,116892,117343,117374,117440,117533,117694,117726,118173,118238,118781,121332,122621,122751,123004,124061,124127,124222,124733,125661,125851,127087,127516,127805,129631,131670,133122,134499,135611,135737,136450,139004,143070,149342,160541,161501,162654,168123]},{"name":"Bowser in the Fire Sea","best":{"split":949984,"duration":{"individual":95464,"run":96128}},"history":[95464,95485,95775,95900,95964,96093,96128,96286,96288,96318,96416,96421,96443,96447,96449,96455,96458,96507,96543,96573,96702,96727,96760,96764,96799,96862,96894,96896,96927,96988,97060,97086,97118,97147,97217,97276,97403,97438,97504,97567,97594,97596,97730,97759,97762,97855,97947,97950,97957,98299,98356,98398,98498,98506,98654,98686,98717,99039,99136,99375,99378,99453,99455,99614,99614,100188,100410,100862,101150,101728,102303,102750,103386,103866,104055,104574,104702,105560,105624,106140,106493,108833,109694,110561,110879,110911,111484,111551,111645,112252,112500,112996,113056,113597,113638,114331,114391,114909,115709,115873,115935,115965,116734,116795,117592,118071,118310,119167,119423,121468,123279,124122,125066,125605,126783,131071,132316,132864,133023,134787,134973,137788,138045,142431,142816,143644,147609,155804,157263,157814,159135,187868,198872,213178,246782]},{"name":"Bowser in the Sky","best":{"split":1127738,"duration":{"individual":176985,"run":177754}},"history":[176985,177248,177754,180607,183707,185372,187579,187805,188052,188957,189627,192071,194421,196804,198072,198234,199242,199806,204537,204923,205533,205853,206938,207962,208036,208918,208953,209406,209980,212815,213818,214681,216235,217763,218810,219160,219707,219836,220383,220983,223067,223638,224285,224604,225945,226399,227552,229337,229980,230805,232326,232410,233143,233372,233977,235066,236950,237015,240602,240794,241787,243130,243636,244051,244828,244962,250426,250427,250493,251971,252095,252606,252698,255676,256333,256508,256509,257690,257700,257883,258713,258830,259673,260254,262000,264760,266810,267103,270926,271022,271780,274362,279293,281084,281144,289371,290110,292925,298196,300203,300312,300987,302773,303102,303409,308855,309139,310073,312087,315127,317695,319513,322880,325541,325679,328013,329890,331548,341376,341914,342076,342616,343737,347480,349145,350807,389589,389748,393453,396152,418358,463416,479639,488530,548787,616566]}]

	// no-bitdw reds splits
	//segments: [{"name":"Bob-Omb Battlefield (1)","best":{"split":107060,"duration":{"individual":99069,"run":107060}},"history":[99069,99072,99094,99224,99444,99592,100152,100183,100231,100233,100253,100261,100440,100444,100586,100597,100603,100727,100835,100896,100974,101026,101149,101317,101615,101667,101789,102134,102150,102671,102948,102997,103190,103696,104588,107060,107271,107328,107398,107418,107828,108213,108246,108276,108369,108402,108436,108441,108589,109007,109247,109392,109455,109497,109524,109590,109593,109624,109629,110196,110264,110372,110514,110714,111239,111564,111684,112593,112902,113059,114227,114324,114545,114708,114785,115066,115094,115227,115440,115462,115491,115553,115800,115863,115863,116164,116272,116331,116847,116908,117020,117030,117237,117454,118958,119017,120144,120568,120680,120717,120779,120879,121006,121132,121362,121749,121801,122153,123276,123812,123828,123869,124211,124617,124625,124679,124686,124823,125131,125365,125494,125790,126027,126035,128849,128892,129264,129287,129622,129698,131986,132048,132253,132469,135150,163504]},{"name":"Whomp's Fortress (6)","best":{"split":313135,"duration":{"individual":202073,"run":206075}},"history":[202073,202730,202963,204507,204570,204770,205146,205152,205471,205854,206075,206143,206313,206321,206338,207035,207069,207164,207166,207228,207257,207359,207479,207711,207770,207869,207899,208020,208140,208310,208317,208334,208414,208475,208501,208636,209076,209125,209180,209788,209946,210047,210050,210060,210075,210109,210244,210715,210812,210940,211035,211044,211164,211260,211261,211385,211401,211837,211898,212345,212378,212407,212617,212670,213020,213309,213539,213587,213627,213670,214654,214714,215414,215837,216173,216285,216478,217884,218074,218468,218519,218782,219069,219294,221251,221569,221797,221809,221953,223069,223416,224184,225266,225277,225368,225654,227287,229211,229664,229754,232081,232089,233398,236632,237280,237691,241834,243803,244280,245106,246522,249774,254393,255769,257214,258504,265655,266485,275192,282519]},{"name":"Cool Cool Mountain (8)","best":{"split":397838,"duration":{"individual":83872,"run":84703}},"history":[83872,84154,84285,84414,84507,84542,84572,84703,84704,84782,84797,84828,84926,85119,85212,85322,85370,85373,85542,85694,85696,85728,85729,85793,85837,85910,85920,85982,86140,86200,86205,86299,86336,86672,86751,86753,86811,86844,86940,87003,87067,87221,87332,87392,87421,87561,87613,87807,87868,88048,88252,88260,88411,88563,88603,88610,88697,88702,88740,88799,88960,89053,89118,89185,89220,89245,89267,89373,89781,89822,89983,90143,90170,90206,90364,90525,90589,90589,90750,91105,91106,92030,92213,92415,92538,93274,93313,94081,94207,94812,94878,94878,94903,94974,95072,95580,95581,96287,96381,96606,99355,100093,100452,101102,101472,104670,106173,107485,108231,110143,110343,110527,110781,117211,119308,124479,124958,125761,154612,156192]},{"name":"Bowser in the Dark World (K1)","best":{"split":492718,"duration":{"individual":94880,"run":94880}},"history":[94880,95295,95454,95582,96027,96029,96097,96105,96151,96189,96421,96829,96930,97119,97187,97214,97222,97259,97344,97454,97463,97471,97600,97692,97838,97883,97885,97979,98113,98139,98335,98461,98526,98531,98728,98751,98783,98875,98932,98932,99037,99099,99299,99327,99334,99355,99388,99454,99488,99629,99634,99646,100280,100349,100480,100740,100862,101022,101151,101214,101276,101450,101710,101787,101884,101947,102142,102311,102465,102497,102500,102595,102620,102651,102653,102709,102942,103008,103050,103069,103232,103263,103327,103974,104160,104190,104829,105023,105030,105053,105152,105631,105801,106526,106558,106748,106975,107519,108470,108543,109119,109139,109370,109405,109410,109502,109664,110047,110432,111102,111454,111934,115133,115988,120669,121249,122717,126014,133886,135708,137213,137640,137980,143402,144585,146877,150653,150718,154456,155261,157752,169610,171097,177404,184544]},{"name":"Shifting Sand Land (10)","best":{"split":585513,"duration":{"individual":87765,"run":92795}},"history":[87765,87936,87996,88062,88062,88542,88638,88672,88892,88927,88937,89054,89078,89148,89185,89270,89277,89305,89314,89535,89536,89589,89595,89664,89715,89748,89753,89924,90045,90142,90174,90204,90205,90241,90301,90301,90303,90379,90396,90421,90497,90623,90782,90803,90813,90850,91228,91278,91295,91295,91390,91453,91454,91455,91510,91551,91704,91708,91709,91959,92073,92167,92288,92350,92508,92512,92579,92638,92690,92695,92795,93215,93415,93530,93567,93569,94049,94112,94283,94463,94973,94974,95166,95323,95416,95602,96092,96328,96570,96830,97218,97838,97925,99101,99264,100493,100540,101175,101413,102301,102493,102528,102735,103131,103385,104061,104190,104255,104477,105821,108260,108413,108927,109533,109982,110267,111800,112127,113694,114907,116221,119123,120285,121370,122396,127546,128445,129085,139310,142783,147486,169944]},{"name":"Lethal Lava Land (11)","best":{"split":620584,"duration":{"individual":33088,"run":35071}},"history":[33088,33183,33517,33629,33695,33790,33794,33885,33887,33887,33917,33955,33981,34013,34014,34015,34047,34047,34109,34110,34114,34140,34150,34169,34192,34208,34211,34239,34241,34265,34271,34303,34304,34323,34330,34335,34335,34347,34366,34399,34403,34432,34451,34463,34494,34494,34496,34529,34529,34529,34556,34559,34559,34559,34560,34592,34621,34626,34640,34654,34656,34673,34684,34690,34690,34714,34717,34757,34782,34783,34784,34787,34815,34818,34819,34850,34910,34940,34944,34976,35005,35038,35041,35071,35073,35095,35167,35167,35296,35300,35327,35365,35388,35488,35549,35552,35648,35743,35777,35780,35810,35830,35870,35903,35935,35935,35972,36190,36222,36253,36257,36285,36382,36444,36448,36510,36510,36541,36541,36542,36566,36733,36925,37024,37218,37344,37824,38300,38728,40419,40863,56513]},{"name":"Hazy Maze Cave (15)","best":{"split":759769,"duration":{"individual":115233,"run":139185}},"history":[115233,115331,115741,116062,116129,116159,116195,116409,116571,117004,117046,117241,117330,117404,117438,117480,117629,117631,117631,117638,117650,117653,117723,117826,117854,117854,117861,117951,118333,118362,118497,118591,118715,118843,118878,118940,119005,119010,119025,119033,119040,119049,119099,119100,119135,119250,119323,119419,119549,119553,119648,119805,119870,119902,119967,119993,120150,120164,120255,120281,120346,120382,120399,120447,120450,120507,120606,120607,120658,120989,121150,121212,121438,121458,121600,121657,121661,121725,121949,121951,121957,122110,122205,122220,122365,122430,122658,122842,122909,122911,123038,123386,123615,123871,123964,124032,124512,125309,125544,126463,126590,126844,126912,127486,127489,129660,131329,132037,132638,133549,137470,139005,139185,139196,139998,140214,141788,143157,143421,143584,143616,145306,146849,147072,147643,147649,149024,152701,153019,154556,157269,172796,184606]},{"name":"Dire Dire Docks (16)","best":{"split":853856,"duration":{"individual":91806,"run":94087}},"history":[91806,93511,93585,94087,94407,94900,95486,95679,95839,95966,95998,96250,96448,96477,96702,97055,97472,97730,97753,98085,98233,98686,98743,98943,99197,99810,99860,100636,100639,101174,101405,101968,102131,102310,102414,102433,102588,103425,104222,104225,104284,104289,104617,105279,105369,105513,105694,105853,105950,106044,106268,106329,107538,107740,107810,107970,108095,108130,108159,108183,108252,108350,108396,108541,108734,109147,109182,110077,110153,110172,110267,110366,110433,110591,110715,111518,111550,111579,111617,111630,112539,112640,113119,113180,113215,113309,113562,114048,114172,114215,114369,114498,115228,115446,115742,116733,116774,116892,117343,117374,117440,117533,117694,117726,118173,118238,118781,121332,122621,122751,123004,124061,124127,124222,124733,125661,125851,127087,127516,127805,129631,131670,133122,134499,135611,135737,136450,139004,143070,149342,160541,161501,162654,168123]},{"name":"Bowser in the Fire Sea (K2)","best":{"split":949984,"duration":{"individual":95464,"run":96128}},"history":[95464,95485,95775,95900,95964,96093,96128,96286,96288,96318,96416,96421,96443,96447,96449,96455,96458,96507,96543,96573,96702,96727,96760,96764,96799,96862,96894,96896,96927,96988,97060,97086,97118,97147,97217,97276,97403,97438,97504,97567,97594,97596,97730,97759,97762,97855,97947,97950,97957,98299,98356,98398,98498,98506,98654,98686,98717,99039,99136,99375,99378,99453,99455,99614,99614,100188,100410,100862,101150,101728,102303,102750,103386,103866,104055,104574,104702,105560,105624,106140,106493,108833,109694,110561,110879,110911,111484,111551,111645,112252,112500,112996,113056,113597,113638,114331,114391,114909,115709,115873,115935,115965,116734,116795,117592,118071,118310,119167,119423,121468,123279,124122,125066,125605,126783,131071,132316,132864,133023,134787,134973,137788,138045,142431,142816,143644,147609,155804,157263,157814,159135,187868,198872,213178,246782]},{"name":"Bowser in the Sky (K3)","best":{"split":1127738,"duration":{"individual":176985,"run":177754}},"history":[176985,177248,177754,180607,183707,185372,187579,187805,188052,188957,189627,192071,194421,196804,198072,198234,199242,199806,204537,204923,205533,205853,206938,207962,208036,208918,208953,209406,209980,212815,213818,214681,216235,217763,218810,219160,219707,219836,220383,220983,223067,223638,224285,224604,225945,226399,227552,229337,229980,230805,232326,232410,233143,233372,233977,235066,236950,237015,240602,240794,241787,243130,243636,244051,244828,244962,250426,250427,250493,251971,252095,252606,252698,255676,256333,256508,256509,257690,257700,257883,258713,258830,259673,260254,262000,264760,266810,267103,270926,271022,271780,274362,279293,281084,281144,289371,290110,292925,298196,300203,300312,300987,302773,303102,303409,308855,309139,310073,312087,315127,317695,319513,322880,325541,325679,328013,329890,331548,341376,341914,342076,342616,343737,347480,349145,350807,389589,389748,393453,396152,418358,463416,479639,488530,548787,616566]}]

	// no-cannonless splits
	//segments: [{"name":"Bob-Omb Battlefield (1)","best":{"split":100974,"duration":{"individual":100183,"run":100974}},"history":[129698,132469,100261,112593,117237,109007,124211,100183,100231,121006,100974,132253,125790,123812,123869,115066]},{"name":"Whomp's Fortress (5)","best":{"split":281184,"duration":{"individual":171380,"run":180210}},"history":[180344,172253,172314,172121,183228,176351,179195,188539,175932,172837,180210,182172,186168,182974,174685]},{"name":"Cool Cool Mountain (8)","best":{"split":411294,"duration":{"individual":128280,"run":130110}},"history":[132477,132796,134397,135645,143035,138585,130077,129564,163358,137813,130110,135517,155897,130102,160058,128280]},{"name":"Bowser in the Dark World (K1)","best":{"split":513004,"duration":{"individual":97214,"run":101710}},"history":[100740,101022,99388,97885,102142,98526,97214,146877,101947,97883,101710,105030,137980,101884,144585,105053]},{"name":"Shifting Sand Land (10)","best":{"split":602274,"duration":{"individual":88542,"run":89270}},"history":[91959,112127,128445,113694,91390,94049,105821,90782,88542,88638,89270,119123,169944,114907,97838,97925]},{"name":"Lethal Lava Land (11)","best":{"split":638464,"duration":{"individual":33183,"run":36190}},"history":[35296,33981,34335,36222,35167,34015,34241,35903,34211,34559,36190,33794,33629,33517,34403,33183]},{"name":"Hazy Maze Cave (15)","best":{"split":758614,"duration":{"individual":118107,"run":120150}},"history":[118843,120507,118497,125544,123964,119993,133549,120255,119099,122205,120150,123386,123871,120399,120606,143157]},{"name":"Dire Dire Docks (16)","best":{"split":871254,"duration":{"individual":102414,"run":112640}},"history":[168123,117374,108095,107538,110366,108396,102414,110172,108541,111550,112640,161501,105369,135737,115446,122621]},{"name":"Bowser in the Fire Sea (K2)","best":{"split":968984,"duration":{"individual":95678,"run":97730}},"history":[116734,96093,100862,96862,213178,97438,98717,96799,97596,96573,97730,99039,198872,142816,112996,147609]},{"name":"Bowser in the Sky (K3)","best":{"split":1188144,"duration":{"individual":210648,"run":219160}},"history":[342616,250493,244051,281144,266810,300203,315127,312087,396152,250426,219160,240794,300987,393453,328013,214681]}]

	/*
		[
			100974,	100974	// bob
			281184,	180210	// wf
			411294, 130110	// ccm
			513004, 101710	// bitdw
			602274, 89270	// ssl
			638464, 36190	// lll
			758614, 120150	// hmc
			871254, 112640	// ddd
			968984, 97730	// bitfs
			1188144, 219160	// bits
		]
	*/
	/*
	segments: [
		{ name: 'Bob-Omb Battlefield (1)', best: { split: 126652, duration: 120696 } },
		{ name: 'Whomp\'s Fortress (5)', best: { split: 317706, duration: 307716 } },
		{ name: 'Cool Cool Mountain (8)', best: { split: 468701, duration: 449047 } },
		{ name: 'Bowser in the Dark World (K1)', best: { split: 605900, duration: 572457 } },
		{ name: 'Shifting Sand Land (10)', best: { split: 712457, duration: 679620 } },
		{ name: 'Lethal Lava Land (11)', best: { split: 747978, duration: 715022 } },
		{ name: 'Hazy Maze Cave (15)', best: { split: 889593, duration: 847101 } },
		{ name: 'Dire Dire Docks (16)', best: { split: 1056052, duration: 998589 } },
		{ name: 'Bowser in the Fire Sea (K2)', best: { split: 1191107, duration: 1112590 } },
		{ name: 'Bowser in the Sky (K3)', best: { split: 1538684, duration: 1538684 } }
	],
	*/
	/*
	segments: [
		{ name: 'Bob-Omb Battlefield (1)', best: { split: 4000, duration: { individual: 2000, run: 4000 } } },
		{ name: 'Whomp\'s Fortress (5)', best: { split: 8000, duration: { individual: 4000, run: 8000 } } },
		{ name: 'Cool Cool Mountain (8)', best: { split: 12000, duration: { individual: 4000, run: 12000 } } },
		{ name: 'Bowser in the Dark World (K1)', best: { split: 16000, duration: { individual: 4000, run: 16000 } } },
		{ name: 'Shifting Sand Land (10)', best: { split: 20000, duration: { individual: 4000, run: 20000 } } },
		{ name: 'Lethal Lava Land (11)', best: { split: 24000, duration: { individual: 4000, run: 24000 } } },
		{ name: 'Hazy Maze Cave (15)', best: { split: 28000, duration: { individual: 4000, run: 28000 } } },
		{ name: 'Dire Dire Docks (16)', best: { split: 32000, duration: { individual: 4000, run: 32000 } } },
		{ name: 'Bowser in the Fire Sea (K2)', best: { split: 36000, duration: { individual: 4000, run: 36000 } } },
		{ name: 'Bowser in the Sky (K3)', best: { split: 40000, duration: { individual: 4000, run: 40000 } } }
	],
	*/
	/*
	segments: [
		{ name: 'Bob-Omb Battlefield (1)' },
		{ name: 'Whomp\'s Fortress (5)' },
		{ name: 'Cool Cool Mountain (8)' },
		{ name: 'Bowser in the Dark World (K1)' },
		{ name: 'Shifting Sand Land (10)' },
		{ name: 'Lethal Lava Land (11)' },
		{ name: 'Hazy Maze Cave (15)' },
		{ name: 'Dire Dire Docks (16)' },
		{ name: 'Bowser in the Fire Sea (K2)' },
		{ name: 'Bowser in the Sky (K3)' },
	],
	*/
}

var run = {
	activateSegment: function(segmentId) {
		this.data.segments[segmentId].active = true;

		delete this.data.segments[segmentId].split;
		delete this.data.segments[segmentId].duration;
		delete this.data.segments[segmentId].ignored;

		if (!this.data.segments[segmentId].start) {
			this.data.segments[segmentId].start = this.clock.runningTime();
		}
	},
	activeSegmentId: function() {
		for (segmentId in this.data.segments) {
			if (this.data.segments[segmentId].active) {
				return parseInt(segmentId);
			}
		}

		return null;
	},
	advanceActiveSegment: function() {
		var activeSegmentId = this.activeSegmentId();

		if (activeSegmentId != null) {
			var nextSegmentId = activeSegmentId + 1;

			this.splitSegment(activeSegmentId);

			if (this.data.segments.length > nextSegmentId) {
				this.activateSegment(nextSegmentId);
			}
			else {
				this.stop();
			}

		}
		else {
			this.activateSegment(0);
		}
	},
	backfill: function(splits) {
		for (splitId in splits) {
			var time = splits[splitId];

			var minutes = time[0];
			var seconds = time[1];
			var centiseconds = time[2];

			if (splitId == 0) {
				this.data.segments[splitId].start = 0;
			}
			else {
				this.data.segments[splitId].start = this.data.segments[splitId - 1].split;
			}

			this.data.segments[splitId].split = this.clock.unformatMilliseconds(minutes, seconds, centiseconds);
			this.data.segments[splitId].duration = this.data.segments[splitId].split - this.data.segments[splitId].start;
		}
	},
	calculatePotentialBestRun: function() {
		var sumOfBestSegmentDurations = 0;

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];

			if (segment.best && segment.best.duration.individual) {
				sumOfBestSegmentDurations += segment.best.duration.individual;
			}
		}

		return sumOfBestSegmentDurations;
	},
	calculatePotentialBestRunRemaining: function() {
		var sumOfCurrentSegmentDurations = 0;
		var sumOfBestSegmentDurations = 0;

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];

			if (segment.duration) {
				sumOfCurrentSegmentDurations += segment.duration;
			}
			else if (segment.best && segment.best.duration.individual) {
				sumOfBestSegmentDurations += segment.best.duration.individual;
			}
		}

		return sumOfCurrentSegmentDurations + sumOfBestSegmentDurations;
	},
	calculatePredictedBestRunRemaining: function() {
		var sumOfCurrentSegmentDurations = 0;
		var sumOfPredictedSegmentDurations = 0;

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];

			if (segment.duration) {
				sumOfCurrentSegmentDurations += segment.duration;
			}
			else if (segment.history) {
				var sumOfSegmentRecentHistoryDurations = 0;

				for (historyId in segment.history) {
					sumOfSegmentRecentHistoryDurations += segment.history[historyId];
				}

				sumOfPredictedSegmentDurations += Math.round(sumOfSegmentRecentHistoryDurations / segment.history.length);
			}
		}

		return sumOfCurrentSegmentDurations + sumOfPredictedSegmentDurations;
	},
	calculateMedianRunRemaining: function() {
		var sumOfCurrentSegmentDurations = 0;
		var sumOfPredictedSegmentDurations = 0;

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];

			if (segment.duration) {
				sumOfCurrentSegmentDurations += segment.duration;
			}
			else if (segment.history) {
				var median = 0;
				var history = segment.history.sort(function(a, b) { return a - b; });
				var length = history.length;

				if (length % 2 == 0) {
					var medianLow = history[(history.length - 2) / 2];
					var medianHigh = history[history.length / 2];

					median = Math.round((medianLow + medianHigh) / 2);
				}
				else {
					median = history[(length - 1) / 2];
				}

				sumOfPredictedSegmentDurations += median;
			}
		}

		return sumOfCurrentSegmentDurations + sumOfPredictedSegmentDurations;
	},
	clock: {
		anchor: null,
		date: null,
		elapsed: function(since) {
			return this.formatMilliseconds(this.time() - this.anchor);
		},
		elapsedSince: function(time) {
			return this.formatMilliseconds(this.time() - this.anchor - time, true);
		},
		formatMilliseconds: function(milliseconds, explicitSign) {
			milliseconds = Math.round(milliseconds / 10) * 10;

			var sign = (milliseconds < 0) ? '-' : (explicitSign ? '+' : '');

			milliseconds = Math.abs(milliseconds);

			var hours = Math.floor(milliseconds / (1000 * 60 * 60));
			var minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
			var seconds = Math.floor(milliseconds / 1000) % 60;
			var centiseconds = Math.floor((milliseconds % 1000) / 10);

			var formattedTime;

			if (centiseconds < 10) {
				centiseconds = '0' + centiseconds;
			}

			if (centiseconds == 100) {
				centiseconds = '00';
			}

			formattedTime = centiseconds;

			if (seconds > 0) {
				if (minutes > 0 && seconds < 10) {
					seconds = '0' + seconds;
				}

				formattedTime = seconds + '.' + formattedTime;
			}
			else if (seconds == 0) {
				if (minutes > 0) {
					formattedTime = '00' + '.' + formattedTime;
				}
				else {
					formattedTime = '0' + '.' + formattedTime;
				}
			}

			if (minutes > 0) {
				if (hours > 0 && minutes < 10) {
					minutes = '0' + minutes;
				}

				formattedTime = minutes + ':' + formattedTime;
			}

			if (hours > 0) {
				formattedTime = hours + ':' + formattedTime;
			}

			return sign + formattedTime;
		},
		interval: null,
		runningTime: function() {
			return this.time() - this.anchor;
		},
		start: function(callback) {
			this.anchor = this.time();
			this.interval = setInterval(callback, 10);
		},
		stop: function() {
			clearInterval(this.interval);
		},
		time: function() {
			delete this.date;
			this.date = new Date();
			return this.date.getTime();
		},
		unformatMilliseconds: function(minutes, seconds, centiseconds) {
			return (minutes * 60 * 1000) + (seconds * 1000) + (centiseconds * 10 + 4);
		}
	},
	deactivateSegment: function(segmentId) {
		this.data.segments[segmentId].active = false;
		delete this.data.segments[segmentId].start;
		delete this.data.segments[segmentId].duration;
		delete this.data.segments[segmentId].ignored;
	},
	finalizeRunTable: function() {
		var elapsedTime = 0;

		if (!this.running) {
			$('table#run tr.segment').removeClass('active');
		}

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];
			var $segment = $('table#run tr#segment' + segmentId);
			$segment.find('td.difference').text('').removeClass('ahead behind gaining losing new-best');

			var previousSegment = (segmentId > 0) ? this.data.segments[segmentId - 1] : null;

			if (segment.split && segment.best && segment.best.split) {
				var difference = this.clock.formatMilliseconds(segment.split - segment.best.split, true);

				$segment.find('td.difference').text(difference);

				if (difference[0] == '-') {
					$segment.find('td.difference').removeClass('behind').addClass('ahead');

				}
				else {
					$segment.find('td.difference').removeClass('ahead').addClass('behind');
				}

				if (previousSegment && previousSegment.best) {
					if (segment.split - segment.best.split > previousSegment.split - previousSegment.best.split) {
						$segment.find('td.difference').removeClass('gaining').addClass('losing');
					}
					else if (segment.split - segment.best.split < previousSegment.split - previousSegment.best.split) {
						$segment.find('td.difference').removeClass('losing').addClass('gaining');
					}
				}
			}

			if (segment.duration && segment.best && segment.best.duration.individual) {
				if (segment.duration < segment.best.duration.individual && (!segment.ignored || !segment.ignored.duration)) {
					$segment.find('td.difference').addClass('new-best');
				}
			}

			if (segment.duration) {
				$segment.find('td.time').text(this.clock.formatMilliseconds(segment.duration));
			}

			if (segment.split) {
				$segment.find('td.split').text(this.clock.formatMilliseconds(segment.split));

				if (segment.split > elapsedTime) {
					elapsedTime = segment.split;
				}
			}
			else {
				if (segment.best && segment.best.split) {
					$segment.find('td.split').text(this.clock.formatMilliseconds(segment.best.split));
				}
				else {
					$segment.find('td.split').text('-');
				}
			}

			if (!segment.active && segment.ignored && segment.ignored.split) {
				$segment.addClass('ignored');
				$segment.find('td.difference').text('-').removeClass('ahead behind gaining losing new-best');
				$segment.find('td.split').text('-');
			}
			else {
				$segment.removeClass('ignored');
			}

		}

		$('table#run tr.clock td.total').text(this.clock.formatMilliseconds(elapsedTime));
		$('table#run tr.possible td.remaining').text(this.clock.formatMilliseconds(this.calculatePotentialBestRunRemaining()));
		//$('table#run tr.possible td.predicted').text(this.clock.formatMilliseconds(this.calculatePredictedBestRunRemaining()));
		$('table#run tr.possible td.predicted').text(this.clock.formatMilliseconds(this.calculateMedianRunRemaining()));
	},
	generateRunTable: function() {
		$('table#run').remove();

		var $run = $('<table id="run">');

		var $gameHeader = $('<tr class="header"><th class="game" colspan="3">' + this.data.game + '</th></tr>');
		var $goalHeader = $('<tr class="header"><th class="goal" colspan="3">' + this.data.goal + '</th></tr>');

		$run.append($gameHeader).append($goalHeader);

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];
			var $segment = $('<tr id="segment' + segmentId + '" class="segment">');

			$segment.append('<td class="name">' + segment.name + '</td>');
			$segment.append('<td class="difference"><br /></td>');
			$segment.append('<td class="split">' + (segment.best && segment.best.split ? this.clock.formatMilliseconds(segment.best.split) : '-') + '</td>');
			//$segment.append('<td class="split">' + this.clock.formatMilliseconds(segment.best.duration.run - segment.best.duration.individual) + '</td>');

			$run.append($segment);
		}

		var $totalTime = $('<tr class="clock"><td class="total" colspan="3">0.00</td></tr>');
		$run.append($totalTime);

		if (this.calculatePotentialBestRun() > 0) {
			var $possiblePerfectTime = $('<tr class="possible"><td class="">Perfect Run</td><td class="perfect" colspan="2">' + this.clock.formatMilliseconds(this.calculatePotentialBestRun()) + '</td></tr>');
			var $possibleRemainingTime = $('<tr class="possible"><td class="">Still Possible</td><td class="remaining" colspan="2">' + this.clock.formatMilliseconds(this.calculatePotentialBestRunRemaining()) + '</td></tr>');
			//var $possiblePredictedTime = $('<tr class="possible"><td class="">More Likely</td><td class="predicted" colspan="2">' + this.clock.formatMilliseconds(this.calculatePredictedBestRunRemaining()) + '</td></tr>');
			var $possiblePredictedTime = $('<tr class="possible"><td class="">More Likely</td><td class="predicted" colspan="2">' + this.clock.formatMilliseconds(this.calculateMedianRunRemaining()) + '</td></tr>');

			$run.append($possiblePerfectTime);
			$run.append($possibleRemainingTime);
			$run.append($possiblePredictedTime);
		}

		$run.find('tr.segment:even').addClass('odd');
		$run.find('tr.segment:first').addClass('first');
		$run.find('tr.segment:last').addClass('last');
		$run.find('tr.possible:first').addClass('first');
		$run.find('tr.possible:last').addClass('last');

		$('body').html($run);
	},
	ignoreSegmentSplit: function(segmentId) {
		if (!this.data.segments[segmentId].ignored) {
			this.data.segments[segmentId].ignored = {};
		}

		this.data.segments[segmentId].ignored.split = true;
	},
	ignoreSegmentDuration: function(segmentId) {
		if (!this.data.segments[segmentId].ignored) {
			this.data.segments[segmentId].ignored = {};
		}

		this.data.segments[segmentId].ignored.duration = true;
	},
	regressActiveSegment: function() {
		var activeSegmentId = this.activeSegmentId();

		if (activeSegmentId != null && activeSegmentId != 0) {
			var previousSegmentId = activeSegmentId - 1;

			this.deactivateSegment(activeSegmentId);
			this.activateSegment(previousSegmentId);
		}
	},
	replacer: function(key, value) {
		switch (key) {
			case 'game':
			case 'goal':
				return value;

			case 'segments':
				var segments = [];

				for (segmentId in value) {
					var segment = value[segmentId];
					segments.push({
						name: segment.name,
						best: segment.best,
						history: segment.history
					});
				}

				return segments;
		}

		return value;
	},
	reset: function() {
		if (!this.saved) {
			//confirm('Reset without saving?');
		}

		this.generateRunTable();

		for (segmentId in this.data.segments) {
			delete this.data.segments[segmentId].active;
			delete this.data.segments[segmentId].split;
			delete this.data.segments[segmentId].start;
			delete this.data.segments[segmentId].duration;
			delete this.data.segments[segmentId].ignored;
		}

		this.finalizeRunTable();

		this.saved = true;
	},
	revert: function() {
		localStorage.setItem('data', JSON.stringify(data, this.replacer));
	},
	running: false,
	save: function() {
		if (this.saved) {
			return;
		}

		var totalRunDuration = this.data.segments[this.data.segments.length - 1].split;
		var totalBestRunDuration = null;

		if (this.data.segments[this.data.segments.length - 1].best) {
			totalBestRunDuration = this.data.segments[this.data.segments.length - 1].best.split;
		}

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];
			var ignoreDuration = segment.ignored && segment.ignored.duration;
			var ignoreSplit = segment.ignored && segment.ignored.split;

			if (!segment.best) {
				this.data.segments[segmentId].best = { split: null, duration: {} };
			}

			if (!segment.best.duration.individual || segment.duration < segment.best.duration.individual) {
				if (!ignoreDuration) {
					this.data.segments[segmentId].best.duration.individual = segment.duration;
				}
			}

			if (!totalBestRunDuration || totalRunDuration < totalBestRunDuration) {
				if (!ignoreSplit) {
					this.data.segments[segmentId].best.split = this.data.segments[segmentId].split;
				}
				else {
					this.data.segments[segmentId].best.split = null;
				}

				if (!ignoreDuration) {
					this.data.segments[segmentId].best.duration.run = this.data.segments[segmentId].duration;
				}
				else {
					this.data.segments[segmentId].best.duration.run = null;
				}
			}

			if (!segment.history) {
				segment.history = [];
				this.data.segments[segmentId].history = [];
			}

			if (!ignoreDuration) {
				this.data.segments[segmentId].history.push(segment.duration);
			}
		}

		localStorage.setItem('data', JSON.stringify(this.data, this.replacer));
		this.saved = true;
	},
	saved: true,
	skipSplit: function() {
		// make sure we disregard all of the active split's time data...
		var activeSegmentId = this.activeSegmentId();
		this.ignoreSegmentSplit(activeSegmentId);
		this.ignoreSegmentDuration(activeSegmentId);

		// ...then advance the split...
		this.advanceActiveSegment();

		// ...and then ignore that split's duration data
		activeSegmentId = this.activeSegmentId();
		this.ignoreSegmentDuration(activeSegmentId);

		this.finalizeRunTable();
	},
	split: function() {
		this.advanceActiveSegment();
		this.finalizeRunTable();
	},
	splitSegment: function(segmentId) {
		this.data.segments[segmentId].active = false;
		this.data.segments[segmentId].split = this.clock.runningTime();
		this.data.segments[segmentId].duration = this.data.segments[segmentId].split - this.data.segments[segmentId].start;

	},
	start: function() {
		this.running = true;
		this.saved = false;
		this.clock.start(this.updateRunTable);
		this.advanceActiveSegment();
	},
	stop: function() {
		this.running = false;
		this.clock.stop();
		this.finalizeRunTable();
	},
	unsplit: function() {
		this.regressActiveSegment();
		this.finalizeRunTable();
	},
	unsplitSegment: function(segmentId) {
		this.data.segments[segmentId].active = false;
		this.data.segments[segmentId].split = this.clock.runningTime();
		this.data.segments[segmentId].duration = this.data.segments[segmentId].split - this.data.segments[segmentId].start;

	},
	updateRunTable: function() {
		$('table#run tr.segment').removeClass('active');

		var activeSegmentId = run.activeSegmentId();
		var $activeSegment = $('table#run tr#segment' + activeSegmentId + '.segment').addClass('active');
		var $clock = $('table#run tr.clock');

		//$activeSegment.find('td.split').text(run.clock.elapsed());
		$clock.find('td.total').text(run.clock.elapsed());

		if (run.data.segments[activeSegmentId].best && run.data.segments[activeSegmentId].best.split) {
			var difference = run.clock.elapsedSince(run.data.segments[activeSegmentId].best.split);

			$activeSegment.find('td.difference').text(difference);

			if (difference[0] == '-') {
				$activeSegment.find('td.difference').removeClass('behind').addClass('ahead');
			}
			else {
				$activeSegment.find('td.difference').removeClass('ahead').addClass('behind');
			}
		}
	},
	timeSaves: function() {
		var sum = 0;

		for (segmentId in this.data.segments) {
			var segment = this.data.segments[segmentId];
			var timeSave = segment.best.duration.run - segment.best.duration.individual;

			sum += timeSave;

			console.log(segment.name + ': ' + this.clock.formatMilliseconds(timeSave));
		}
		console.log('Total: ' + this.clock.formatMilliseconds(sum));
	}
};

$(document).ready(function() {
	run.data = JSON.parse(localStorage.getItem('data'));

	if (run.data == null) {
		run.data = data;
	}

	/*
	run.data = data;
	localStorage.setItem('data', JSON.stringify(run.data, run.replacer));
	*/

	run.generateRunTable();

	$('body').keydown(function(e) {
		//console.log(e);

		switch (e.keyCode) {
			case 8: /* backspace is for going back to the last split */
				e.preventDefault();
				if (run.running) {
					run.unsplit();
				}
				break;

			case 32: /* spacebar is for start/split */
				if (!run.running) {
					// don't start a new run until the previous one has been saved or reset
					if (!run.saved) {
						return;
					}

					run.reset();
					run.start();
				}
				else {
					run.split();
				}

				break;

			case 76: /* l is for load */
				break;

			case 79: /* o is for output segment data */
				console.log('segments: ' + JSON.stringify(run.data.segments));
				console.log('segments: ' + JSON.stringify(run.data.segments, run.replacer, '\t'));
				break;

			case 82: /* R is for reset */
				if (e.shiftKey) {
					if (run.running) {
						run.stop();
					}
					else {
						run.reset();
					}
				}

				break;

			case 83: /* s is for skip; S is for save */
				if (e.shiftKey) {
					if (!run.running && !run.saved) {
						run.save();
					}
				}
				else {
					if (run.running) {
						run.skipSplit();
					}
				}

				break;
		}
	});
});
