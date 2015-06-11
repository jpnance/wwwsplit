// todo
// * warmup mode
// * load other splits
// * be able to save splits from unfinished runs

var data = {
	game: 'Super Mario 64',
	goal: '16-Star',

	segments: [{"name":"Bob-Omb Battlefield (1)","best":{"split":107199,"duration":{"individual":98588,"run":107199}},"history":[98588,99069,99072,99094,99189,99218,99224,99317,99320,99444,99592,99614,99636,99670,100152,100183,100231,100233,100253,100261,100367,100440,100444,100486,100586,100597,100603,100727,100835,100896,100974,101026,101149,101317,101615,101667,101789,102134,102150,102671,102844,102948,102997,103073,103190,103696,104588,104658,107060,107199,107271,107295,107328,107356,107398,107418,107769,107795,107828,108213,108238,108246,108276,108276,108369,108402,108436,108441,108589,108791,109007,109123,109247,109392,109455,109497,109524,109590,109593,109624,109629,110196,110264,110372,110514,110714,111239,111564,111684,112593,112902,113059,114198,114227,114324,114358,114458,114518,114545,114696,114708,114739,114785,114973,115066,115094,115118,115227,115229,115324,115440,115462,115491,115553,115671,115790,115800,115852,115863,115863,115958,116164,116272,116331,116847,116908,117020,117030,117237,117454,118016,118958,119017,120011,120144,120568,120680,120717,120779,120879,121006,121028,121132,121362,121749,121801,122153,122933,123276,123574,123670,123812,123828,123869,123927,124211,124340,124397,124502,124617,124625,124679,124686,124823,124831,125131,125365,125494,125790,126027,126035,126590,128849,128892,129264,129287,129622,129698,129703,130693,131986,132048,132253,132469,135150,163504]},{"name":"Whomp's Fortress (6)","best":{"split":319664,"duration":{"individual":199965,"run":212465}},"history":[199965,200507,200542,201881,202073,202136,202331,202730,202963,203226,203675,203772,203872,204219,204507,204570,204635,204770,204793,204859,205146,205148,205152,205371,205471,205485,205525,205530,205724,205854,206075,206143,206313,206321,206327,206338,206361,206815,207035,207069,207164,207166,207228,207257,207359,207410,207479,207513,207643,207711,207770,207869,207899,208020,208140,208310,208317,208334,208414,208475,208475,208501,208636,208662,208986,209076,209125,209180,209788,209946,210047,210050,210060,210075,210109,210244,210360,210587,210715,210812,210940,211035,211044,211164,211260,211261,211385,211401,211645,211675,211837,211898,212345,212378,212407,212465,212617,212670,212820,213020,213309,213539,213587,213627,213670,213986,214100,214654,214714,215005,215193,215321,215414,215837,216173,216285,216478,217884,218074,218468,218519,218782,219069,219294,220282,220823,221251,221569,221797,221809,221953,223069,223355,223416,224184,225266,225277,225368,225626,225654,225776,226042,227287,227394,228599,229211,229664,229754,229846,232081,232089,233398,234810,236632,237280,237691,241834,243803,244280,245106,246522,249774,254393,255769,257214,258504,265655,266485,275192,282519]},{"name":"Cool Cool Mountain (8)","best":{"split":408075,"duration":{"individual":82654,"run":88411}},"history":[82654,83045,83420,83643,83773,83872,84029,84154,84285,84414,84507,84542,84572,84703,84704,84782,84797,84797,84828,84894,84926,84926,84933,85020,85087,85119,85212,85243,85277,85322,85342,85370,85373,85406,85406,85542,85566,85693,85694,85696,85728,85729,85793,85837,85887,85910,85920,85982,86140,86200,86205,86299,86336,86365,86395,86504,86623,86672,86747,86751,86753,86811,86844,86879,86940,87003,87067,87131,87221,87332,87332,87392,87421,87561,87613,87772,87807,87868,88048,88252,88260,88382,88411,88411,88448,88563,88603,88607,88610,88637,88697,88702,88740,88799,88960,89053,89118,89185,89220,89245,89267,89335,89373,89562,89781,89822,89983,90143,90170,90206,90267,90364,90525,90565,90589,90589,90750,91105,91106,91266,91711,92030,92213,92382,92408,92415,92538,93052,93274,93313,93884,94081,94207,94812,94878,94878,94903,94974,95072,95294,95580,95581,96287,96381,96606,96800,99355,100093,100452,100924,101102,101472,102175,104670,106173,107485,108231,110014,110143,110343,110527,110781,116125,117211,119308,124479,124958,125761,154612,156192]},{"name":"Bowser in the Dark World (9)","best":{"split":535784,"duration":{"individual":125917,"run":127709}},"history":[125917,125979,126101,126203,126302,126491,126620,126784,127229,127396,127475,127647,127697,127709,127868,127896,128157,128445,129374,130232,130463,130529,130617,130620,130684,131102,131837,133180,134682,135321,135479,136352,138076,138237,138301,139868,141406,141498,143902,145119,145373,153249,162482,167362,188694,220310,232244,237913,238683,284952]},{"name":"Shifting Sand Land (11)","best":{"split":623973,"duration":{"individual":87677,"run":88189}},"history":[87677,87765,87936,87996,88039,88061,88062,88062,88189,88259,88318,88382,88450,88538,88542,88638,88671,88672,88760,88892,88893,88897,88927,88937,89054,89078,89083,89148,89185,89213,89270,89276,89277,89305,89314,89411,89504,89535,89536,89589,89595,89664,89715,89748,89753,89759,89856,89924,90045,90141,90142,90174,90204,90204,90205,90234,90241,90268,90301,90301,90303,90379,90396,90421,90497,90504,90623,90750,90782,90803,90813,90850,91134,91194,91228,91278,91295,91295,91390,91453,91454,91455,91488,91510,91551,91704,91708,91709,91959,92073,92156,92158,92167,92189,92288,92350,92508,92512,92579,92638,92690,92695,92795,92959,93021,93057,93215,93415,93474,93530,93567,93569,93661,94049,94112,94283,94304,94463,94682,94973,94974,95166,95200,95323,95416,95480,95602,96092,96318,96328,96570,96830,97218,97838,97925,99101,99225,99264,100493,100540,101175,101413,102301,102493,102528,102735,103131,103385,104061,104190,104255,104477,105628,105821,108250,108260,108413,108927,109533,109982,110267,111800,112127,113694,114907,116221,116230,118651,119078,119123,119804,120285,121370,122396,127546,128445,129085,137789,139310,142783,147486,169944]},{"name":"Lethal Lava Land (12)","best":{"split":659789,"duration":{"individual":33088,"run":35816}},"history":[33088,33183,33214,33337,33407,33411,33497,33517,33566,33582,33597,33629,33630,33631,33632,33658,33693,33695,33695,33729,33757,33790,33794,33828,33876,33885,33887,33887,33888,33917,33952,33955,33981,33981,34013,34014,34015,34047,34047,34049,34079,34109,34110,34114,34140,34150,34169,34172,34176,34176,34179,34192,34208,34211,34239,34241,34265,34271,34299,34303,34304,34323,34330,34333,34335,34335,34347,34366,34369,34398,34399,34399,34403,34432,34451,34460,34460,34463,34464,34490,34494,34494,34496,34529,34529,34529,34556,34559,34559,34559,34560,34592,34621,34626,34640,34654,34656,34673,34684,34687,34688,34690,34690,34714,34717,34757,34782,34783,34784,34787,34815,34818,34819,34843,34847,34850,34910,34940,34944,34976,35005,35038,35041,35071,35073,35074,35095,35105,35167,35167,35229,35296,35300,35327,35365,35388,35488,35549,35552,35648,35743,35777,35780,35810,35816,35830,35870,35902,35903,35935,35935,35972,36123,36190,36222,36253,36257,36285,36292,36382,36444,36448,36510,36510,36541,36541,36542,36566,36733,36925,37024,37147,37218,37344,37824,38300,38728,39487,40419,40863,41165,56513]},{"name":"Hazy Maze Cave (15)","best":{"split":743011,"duration":{"individual":77471,"run":83222}},"history":[77471,79036,79066,79147,79231,79357,79869,79947,80161,80443,80446,80478,80917,80922,81087,81275,81376,81378,81664,82016,82201,82334,82367,82697,82719,82913,83103,83137,83222,83605,84191,84348,85179,85794,85806,86562,86621,87612,87903,88100,88926,90170,92285,92541,95998,103902,105439,106365,116382,117919]},{"name":"Dire Dire Docks (16)","best":{"split":839648,"duration":{"individual":91165,"run":96637}},"history":[91165,91805,91806,92001,92702,93511,93585,93754,94087,94365,94407,94900,95038,95454,95486,95679,95712,95773,95839,95966,95998,96064,96250,96448,96477,96637,96702,97055,97472,97730,97744,97753,97947,98085,98233,98686,98743,98943,99197,99810,99860,100574,100636,100639,100731,100796,100928,100991,101174,101212,101405,101471,101566,101887,101968,102131,102310,102414,102433,102558,102588,103425,104222,104225,104255,104284,104289,104447,104617,104635,104734,104932,105279,105369,105403,105513,105694,105853,105950,106044,106268,106329,107050,107538,107740,107810,107970,108095,108130,108159,108183,108252,108350,108396,108541,108734,109052,109119,109147,109182,110045,110077,110153,110172,110267,110366,110433,110591,110715,110811,111453,111518,111550,111579,111613,111617,111630,112345,112539,112640,112956,113119,113180,113215,113309,113372,113562,114048,114172,114215,114369,114498,114645,115228,115446,115742,115840,116733,116774,116892,117343,117374,117440,117533,117694,117726,118173,118238,118781,119710,121332,121460,122397,122621,122751,123004,124061,124127,124222,124292,124733,125661,125851,127087,127218,127516,127805,129631,131670,133122,134499,134884,135611,135737,136450,137087,139004,143070,147901,149342,160541,161501,162654,168123]},{"name":"Bowser in the Fire Sea","best":{"split":935234,"duration":{"individual":95357,"run":95586}},"history":[95357,95452,95464,95485,95515,95586,95736,95775,95900,95964,96093,96128,96190,96213,96270,96286,96287,96288,96318,96381,96416,96421,96443,96447,96449,96455,96458,96507,96543,96573,96604,96702,96727,96760,96764,96766,96796,96799,96831,96862,96886,96889,96890,96894,96896,96927,96988,97060,97086,97118,97147,97217,97276,97310,97338,97403,97438,97504,97563,97567,97594,97596,97727,97730,97759,97762,97855,97947,97950,97957,98014,98044,98168,98203,98204,98299,98356,98398,98498,98506,98654,98684,98686,98717,99039,99100,99136,99164,99334,99375,99378,99453,99455,99614,99614,100092,100157,100188,100410,100862,101150,101728,102303,102750,102942,103386,103866,104055,104574,104702,105560,105624,106014,106140,106493,107197,108833,108923,109694,110561,110879,110911,111181,111356,111484,111551,111645,111776,112252,112500,112996,113056,113597,113638,114331,114391,114909,115709,115873,115935,115965,116734,116795,117592,117596,118071,118310,119167,119261,119423,120254,121468,123279,124122,125066,125605,126783,129046,131071,131324,132316,132864,133023,134787,134973,135230,137788,138045,142431,142816,143644,146588,147609,152924,155804,157263,157814,159135,169854,179450,187868,198872,213178,237942,246782]},{"name":"Bowser in the Sky","best":{"split":1121209,"duration":{"individual":173602,"run":185975}},"history":[173602,176985,177248,177754,177884,178206,178334,180378,180607,183707,183942,185150,185372,185752,185754,185975,186616,187579,187805,188052,188957,189627,191749,191932,192071,194421,195836,196804,198072,198206,198234,199242,199806,201184,204537,204829,204923,205371,205533,205596,205853,205881,205981,206938,207962,208036,208632,208918,208953,209406,209459,209980,211353,212815,212857,212861,213818,214681,216235,217266,217763,218810,218894,219130,219160,219707,219836,220383,220412,220983,221696,222363,222812,223067,223638,224285,224604,225274,225945,226399,226431,227552,229337,229980,230716,230805,232326,232410,233143,233372,233977,235066,236492,236950,237015,239408,240602,240794,241787,242302,243130,243636,244051,244828,244962,245626,250426,250427,250493,251971,252095,252491,252606,252698,255676,256333,256508,256509,257690,257700,257883,258713,258830,259673,260254,262000,264760,266394,266810,267103,270926,271022,271605,271780,274362,279293,281084,281144,281177,287195,289243,289371,290110,292250,292925,298196,300203,300312,300987,302773,303102,303409,308855,309139,310073,312087,315127,317695,319513,322880,325541,325679,328013,329890,331548,341376,341914,342076,342616,343737,346730,347480,349145,350807,359904,389589,389748,393453,396152,396597,418358,463416,479639,488530,548787,616566]}]
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

var data2 = {
	game: 'Super Mario World 2: Yoshi\'s Island',
	goal: 'Any% Warpless',
	segments: [
		{ name: "1-1: Make Eggs, Throw Eggs" },
		{ name: "1-2: Watch Out Below!" },
		{ name: "1-3: The Cave of Chomp Rock" },
		{ name: "1-4: Burt the Bashful's Fort" },
		{ name: "1-5: Hop! Hop! Donut Lifts" },
		{ name: "1-6: Shy-Guys On Stilts" },
		{ name: "1-7: Touch Fuzzy Get Dizzy" },
		{ name: "1-8: Salvo the Slime's Castle" },
		{ name: "1-E: Poochy Ain't Stupid" },
		{ name: "2-1: Visit Koopa and Para-Koopa" },
		{ name: "2-2: The Baseball Boys" },
		{ name: "2-3: What's Gusty Taste Like" },
		{ name: "2-4: Bigger Boo's Fort" },
		{ name: "2-5: Watch Out For Lakitu!" },
		{ name: "2-6: The Cave of the Mystery Maze" },
		{ name: "2-7: Lakitu's Wall" },
		{ name: "2-8: The Potted Ghost's Castle" },
		{ name: "2-E: Hit That Switch!!" },
		{ name: "3-1: Welcome to Monkey Island" },
		{ name: "3-2: Jungle Rhythm . . ." },
		{ name: "3-3: Nep-Enuts' Domain" },
		{ name: "3-4: Prince Froggy's Fort" },
		{ name: "3-5: Jammin' Through The Trees" },
		{ name: "3-6: The Cave Of Harry Hedgehog" },
		{ name: "3-7: Monkeys' Favorite Lake" },
		{ name: "3-8: Naval Piranha's Castle" },
		{ name: "3-E: More Monkey Madness" },
		{ name: "4-1: GO! GO! MARIO! !" },
		{ name: "4-2: The Cave Of The Lakitus" },
		{ name: "4-3: Don't Look Back!" },
		{ name: "4-4: Marching Milde's Fort" },
		{ name: "4-5: Chomp Rock Zone" },
		{ name: "4-6: Lake Shore Paradise" },
		{ name: "4-7: Ride Like The Wind" },
		{ name: "4-8: Hookbill The Koopa's Castle" },
		{ name: "4-E: The Impossible? Maze" },
		{ name: "5-1: BLIZZARD! ! !" },
		{ name: "5-2: Ride The Sky Lifts" },
		{ name: "5-3: Danger, Icy Conditions Ahead!" },
		{ name: "5-4: Sluggy The Unshaven's Fort" },
		{ name: "5-5: Goonie Rides!" },
		{ name: "5-6: Welcome To Cloud World" },
		{ name: "5-7: Shifting Platforms Ahead" },
		{ name: "5-8: Raphael The Raven's Castle" },
		{ name: "5-E: Kamek's Revenge" },
		{ name: "6-1: Scary Skeleton Goonies!" },
		{ name: "6-2: The Cave Of The Bandits" },
		{ name: "6-3: Beware The Spinning Logs" },
		{ name: "6-4: Tap-Tap The Red Nose's Fort" },
		{ name: "6-5: The Very Loooooong Cave" },
		{ name: "6-6: The Deep, Underground Maze" },
		{ name: "6-7: KEEP MOVING! ! ! !" },
		{ name: "6-8: King Bowser's Castle" },
		{ name: "6-E: Castles - Masterpiece Set" }
	]
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
		localStorage.setItem('data', JSON.stringify(run.data, run.replacer));
	}

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
