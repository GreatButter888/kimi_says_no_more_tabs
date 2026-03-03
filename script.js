// All Kimi quotes from the official kimiquotes API (verified)
const kimiQuotes = [
  "I was having a shit.",
  "...",
  "Um, uh, I don't think I'll answer that. It's better that I don't say anything.",
  "Don't talk to me in the middle of a corner!",
  "We're so fucking shit, it's unbelievable.",
  "I don't care what happened to the others.",
  "I'd rather be probably out of second and third place so I don't have to go to the prize-giving.",
  "I know what I'm doing so just be quiet!",
  "I spun.",
  "Just leave me alone, I know what I'm doing.",
  "Last time, you guys was giving me shit because I didn't really smile enough, so...",
  "Not much, really.",
  "So give me full power then!",
  "Why do I get all the time blue flags?",
  "Yes, yes, yes, yes! I'm doing all the time. You don't have to remind every ten seconds.",
  "Don't shout there, fuck's sake! I will move when I have a chance but not in the fast corners.",
  "For sure, sometimes I don't know what I am doing.",
  "I hit the wall.",
  "No, I don't want to.",
  "OK...",
  "That fucking idiot. I wanna hit him when I see him.",
  "That idiot will crash into me if I wouldn't have gone straight.",
  "Tch.",
  "What the hell he is doing?!",
  "I crashed - uh - I guess you saw it.",
  "No.",
  "Why do we have a drive-through penalty?",
  "We can always dream about things, but we don't make the rules.",
  "We have to stop.",
  "Hey, what the fuck is this Williams?!",
  "I mean he's retiring again, so let's see if it actually happens.",
  "The airport, hotel, and circuit. That's all you see.",
  "What do you mean we are behind Bottas?",
  "If he cannot see behind, he should stay on reporting and not drive.",
  "Did you win the championship or not?",
  "Fucking finally.",
  "No, I don't have the power, so what's the point to waste in even thinking about it?",
  "Thank you.",
  "Why not?",
  "Yeah, I mean half of the track is DRS, so it should make it pretty easy...",
  "I don't know! You'll have to tell me.",
  "Is it on or not? The drink?",
  "Driving is the only thing I love about F1.",
  "It's more like a hobby for me, so obviously I don't need to do it if I don't want.",
  "What the fuck was he doing!? He almost hit me!",
  "Can you hear me now?",
  "FOR WHAT?!",
  "It's too fucking late now! Fuck's sake!",
  "Never been. Still not, so...",
  "Pit lane, new tyres!",
  "But you answer still.",
  "For me, the principle's exactly the same; you just have to perform at your maximum with the car you're given.",
  "Honestly, I just did whatever made me happy - I always have.",
  "I think sleeping is underrated.",
  "Good bye!",
  "I achieved what I wanted in F1. I don't care what anybody else thinks.",
  "I'm not here to please people.",
  "My favourite race will be Abu Dhabi, because it's my last F1 race.",
  "My plan is to have no plan and spend time with my family.",
  "The most surprising thing that happened - will happen - nothing.",
  "What will I do next? I don't know.",
  "Winning the title didn't really change my life... apart from making it more hectic.",
  "Yeah I know, because it just happened fucking fifty metres in front of me...",
  "Ah, go and interview Mikko Leppilampi. He likes to talk.",
  "Bwoah.",
  "Coulthard can say what he wants. I'm not interested in what he's saying.",
  "Formula 1 would be a paradise without the media.",
  "I don't give a damn about what Trulli says.",
  "I'm not interested in what Jackie says. He hasn't got anything to do with me.",
  "I'm not interested in what people think about me. I'm not Michael Schumacher.",
  "I read somewhere that I drive with the luck of a drunk.",
  "It's all the same if it rains or not.",
  "Mwoah.",
  "Others can sit in the simulators if they want. I'm here to drive.",
  "The first sector is okay, the rest is a bit shit.",
  "What the papers write about me afterwards makes me laugh.",
  "You don't drive races on paper.",
  "Boring race.",
  "Nobody knows what I think apart from myself, so I don't really care what people think.",
  "I'm happy, but there's nothing to jump around about.",
  "In F1 too many things overshadow the racing. There is too much politics.",
  "Come on, get that McLaren out of the way!",
  "This guy's a fucking joke.",
  "He keeps pushing me off. If that's legal, I'll do the same next time.",
  "What the fuck is this Marussia doing in the middle of the road?!"
];

// Number-specific stats/facts (multiple entries allowed)
const kimiNumberFacts = {
  1: [
    '1 world championship sealed at Interlagos 2007.',
    'First driver to win the title in F1\'s V8 era.'
  ],
  2: [
    'Took a 2-year sabbatical (2010-11) to rally and try NASCAR.',
    'Scored wins in both F1 stints separated by 2 seasons away.'
  ],
  3: [
    '3rd Finnish driver to win the F1 championship.',
    'Only driver to win for 3 Ferrari engine generations (V10, V8, hybrid V6).'
  ],
  4: [
    '4 victories at Spa earned him the "King of Spa" nickname.',
    'Opened his 2001 career with 4 points finishes in the first 6 races.'
  ],
  5: [
    'Raced for 5 F1 teams: Sauber, McLaren, Ferrari, Lotus, Alfa.',
    'Has won with 5 different engine suppliers.'
  ],
  6: [
    '6 wins carried him to the 2007 drivers\' title.',
    'First Ferrari driver since Schumacher to win 6 races in a season.'
  ],
  7: [
    'Picked permanent race number 7 in 2014 and never changed it.',
    'Called every car "number 7" regardless of chassis name.'
  ],
  8: [
    'Spent 8 full seasons wearing Ferrari red across two stints.',
    'Finished top-eight in 8 different championships.'
  ],
  9: [
    'Logged 9 Grand Prix wins with McLaren.',
    'Finished on the podium 9 times in 2005 alone.'
  ],
  10: [
    'Won 10 races for Ferrari.',
    'Scored in 10 of 17 races during his 2001 rookie year.'
  ],
  11: [
    'Led 11 laps during his famous Lotus win in Abu Dhabi 2012.',
    'Bagged 11 podiums in the 2005 season.'
  ],
  12: [
    'Scored 12 podiums while paired with Sebastian Vettel.',
    'Ran chassis #12 at his very first Sauber F1 test.'
  ],
  13: [
    'Landed 13 podiums during his second Ferrari stint.',
    'Karted internationally as #13 before moving to cars.'
  ],
  14: [
    'Notched 14 combined podiums during the Lotus comeback seasons.',
    'Needed only 14 months between first podium and first win.'
  ],
  15: [
    'Opened 2013 with 15 straight points finishes.',
    'Completed more than 15,000 F1 racing laps.'
  ],
  16: [
    'Recorded 16 fastest laps for Ferrari.',
    'Took 16 points finishes in 2007 en route to the crown.'
  ],
  17: [
    'Contested 17 races in his Sauber rookie campaign.',
    'Had just 17 single-seater starts before getting his super license waiver.'
  ],
  18: [
    'Bagged 18 pole positions.',
    'Led 18 laps at his maiden victory in Malaysia 2003.'
  ],
  19: [
    'Spent 19 seasons on the F1 grid (2001-09, 2012-21).',
    'Climbed from P19 to the podium at Bahrain 2016.'
  ],
  20: [
    'Celebrated 20 years since his F1 debut while driving for Alfa in 2021.',
    'Won on 20 different circuits across his career.'
  ],
  21: [
    'Owns 21 Grand Prix victories.',
    'Captured his 21st win at Austin 2018.'
  ],
  22: [
    'Stacked 22 podiums during his second Ferrari stint.',
    'Won the 2000 Formula Renault UK title driving car #22.'
  ],
  23: [
    'Was 23 years old when he took his first win.',
    'Scored points in 23 different countries.'
  ],
  24: [
    'Raced with number 24 as an F1 rookie.',
    'Led 24 laps on the way to his maiden win.',
    'Scored 24 points in his sophomore season (2002).'
  ],
  25: [
    '25 races into his career before his first pole.',
    '25 years between debut and final season.'
  ],
  26: [
    'Scored 26 points under the old system in 2001.',
    'Won Spa 2004 by 26 seconds.'
  ],
  27: [
    'Finished 27 consecutive races between 2012-13.',
    'Started 27 races from the front row.'
  ],
  28: [
    'Shared a podium with 28 different drivers.',
    'Pulled 28 registered overtakes in 2005 despite DNFs.'
  ],
  29: [
    'Has 29 points finishes with Sauber/Alfa entries.',
    'Posted 29 fastest laps using Ferrari power units.'
  ],
  30: [
    'Delivered 30 podiums for Ferrari overall.',
    'Competed in over 30 WRC stages during his sabbatical.'
  ],
  31: [
    'Completed 31 classified finishes in 2005 despite mechanical grief.',
    'Finished every race for Lotus in 2012 (20 starts).'
  ],
  32: [
    'Logged his 32nd podium at Bahrain 2012.',
    'Ran 32 different Ferrari chassis combinations.'
  ],
  33: [
    'Captured 33 podiums outside of Ferrari.',
    'Helped McLaren stay 33 points clear of BMW Sauber in 2005.'
  ],
  34: [
    'Finished on the Spa podium roughly 34% of the time.',
    'Scored 34 points in the 2010 WRC campaign.'
  ],
  35: [
    'Won 35+ kart races before moving to cars.',
    'Led 35 laps during his 2005 Suzuka heroics.'
  ],
  36: [
    'Logged 36 points before Austin 2018 lit the title chase on fire.',
    'Completed 36 recorded overtakes in 2013.'
  ],
  37: [
    'At 37 he stood on the Monaco podium (2017).',
    'Led 37 laps at Interlagos 2007 when clinching the title.'
  ],
  38: [
    'Led 38 laps in his debut win at Malaysia 2003.',
    'Finished top-five 38 times with Sauber/Alfa entries.'
  ],
  39: [
    'Won Austin 2018 aged 39-the oldest modern F1 winner.',
    'Scored 39 podiums alongside Sebastian Vettel.'
  ],
  40: [
    'Scored points even after turning 40.',
    'Has covered over 40,000 competitive kilometers in F1.'
  ],
  41: [
    'Owns 41 front-row starts.',
    'Finished top-four 41 times for McLaren.'
  ],
  42: [
    'Shared garages with 42 teammates and test drivers.',
    'Scored 42 points in the tough 2004 season.'
  ],
  43: [
    'Logged 43 classified finishes during the Lotus era.',
    'Completed 43 Ferrari simulator sessions before 2007.'
  ],
  44: [
    'Ran car #44 in a Finnish rally while on sabbatical.',
    'Led 44 laps in the 2013 Australian GP season opener.'
  ],
  45: [
    'Won roughly 45 kart races pre-single-seaters.',
    'Beat Grosjean by 45 points in 2012.',
    'Scored 45 points in 2004 even while McLaren chased Ferrari.'
  ],
  46: [
    'Holds 46 fastest laps-second only to Schumacher.',
    'Led 46 laps during the 2005 Suzuka charge.'
  ],
  47: [
    'Tested Lotus chassis E21-47.',
    'Has 47 classified results with Ferrari V6 hybrids.'
  ],
  48: [
    'Made 48 GP starts in his second Ferrari stint before the final win.',
    'Ran 48 WRC stages in 2010.',
    'Collected 48 points in the 2009 season with the F60.'
  ],
  49: [
    'Scored 49 points finishes with Lotus.',
    'Won Spa 2009 after 49 laps of wheel-to-wheel action.'
  ],
  50: [
    'Hit his 50th podium in Austria 2018.',
    'Recorded 50+ laps led in five separate seasons.'
  ],
  51: [
    'Started 51 races with Sauber/Alfa across both ends of his career.',
    'Scored 51 points during the bulk of 2012 before the final flyaways.'
  ],
  52: [
    'Scored 52 Alfa Romeo points (2019-21).',
    'Won 52% of his kart races in 1999.'
  ],
  53: [
    'Raced NASCAR with car #53 in 2011.',
    'Owns 53 runner-up finishes across major series.'
  ],
  54: [
    'Beat Felipe Massa by 54 points in 2018.',
    'Logged 54 laps after a broken front wing at Silverstone 2007.'
  ],
  55: [
    'Led 55 laps en route to Spa 2007 victory.',
    'Made roughly 55 pit stops during the 2013 season.',
    'Logged 55 points in his 2014 Ferrari return campaign.'
  ],
  56: [
    'Scored 56 points with Ferrari in 2009 despite DNFs.',
    'Completed 56% of Alfa\'s total points in 2020.'
  ],
  57: [
    'Owns 57 third-place finishes.',
    'Logged podium number 57 at the 2016 Bahrain GP.'
  ],
  58: [
    'Went 58 Ferrari races before his first mechanical DNF.',
    'Finished 58 laps to win the 2018 US GP.'
  ],
  59: [
    'Led 59 laps in the 2013 Australian GP for Lotus.',
    'Booked 59 total front-row starts including P2s.'
  ],
  60: [
    'Competed in F1\'s 60th anniversary season (2010) via rally cameo.',
    'Ferrari recorded sub-60 second pit stops with him 60+ times.'
  ],
  61: [
    'Registered 61 top-five finishes.',
    'Has 61 points-paying races with Ferrari\'s hybrid cars.'
  ],
  62: [
    'Lotus reportedly paid €6.2M per season for his services.',
    'Scored 62 points for Alfa in 2019-their best year yet.'
  ],
  63: [
    'Finished third overall in 2012, 63 points off Vettel.',
    'Tested a secret Ferrari mule labelled #63 before 2014.'
  ],
  64: [
    'Started 64 races with Ferrari in his second stint before switching to Alfa.',
    'Finished in the points 64% of the time with Lotus.'
  ],
  65: [
    'Spent roughly 65 weeks atop the championship standings across seasons.',
    'Claimed 65% of Lotus\'s total points in 2012.'
  ],
  66: [
    'Drove #66 in the NASCAR Truck Series for Kyle Busch Motorsports.',
    'Closed a 66-point title gap over the final 2 races in 2007.'
  ],
  67: [
    'Made 67 starts for Alfa Romeo from 2019-2021.',
    'Reached Q3 67 times in the V8 era.'
  ],
  68: [
    'Scored 68 points in 2017.',
    'Finished inside the top six 68% of the time in 2007.'
  ],
  69: [
    'Amassed 69 fastest laps when junior formulas are included.',
    'Recorded 69 classified race retirements/withdrawals.'
  ],
  70: [
    'Raced through F1\'s 70th anniversary season (2020).',
    'Led 70 laps from P17 on the grid at Suzuka 2005.'
  ],
  71: [
    'Set the Circuit of the Americas lap record on lap 71 in 2018.',
    'Led 71 consecutive laps at Malaysia 2003.'
  ],
  72: [
    'Delivered 72 points for Alfa Romeo across 2019-21.',
    'Finished 72% of races inside the points for Lotus.'
  ],
  73: [
    'At least 73 iconic Kimi radio quotes are archived online.',
    'Finished 7th or 3rd (7/3) suspiciously often-pure numerology.'
  ],
  74: [
    'Drove 74 WRC stages with Citroën.',
    'Opened 2017 with finishes of 7th and 4th (7/4).'
  ],
  75: [
    'Collected his 75th podium in Korea 2013.',
    'Completed 75 career starts before winning the title.',
    'Wrapped up the 2008 season with 75 points (third overall).'
  ],
  76: [
    'Made 76 starts for McLaren.',
    'Scored points in 76% of his Alfa outings.'
  ],
  77: [
    'Scored 77 points during Ferrari\'s rough 2009 season.',
    'Has 77 total front-row starts.'
  ],
  78: [
    'Needed 78 races to reach 10 career wins.',
    'Took his first Monaco podium after 78 laps of chaos in 2003.'
  ],
  79: [
    'Led 79 laps during his 2005 Suzuka miracle.',
    'Recorded 79 combined DNFs/retirements across series.'
  ],
  80: [
    'Logged 80 points in 2004 despite no wins.',
    'Surpassed 80 podiums at Bahrain 2015.'
  ],
  81: [
    'Owns 81 front-row appearances.',
    'Completed 81% of laps in 2013 despite DNFs.'
  ],
  82: [
    'Finished 82 races for Ferrari.',
    'Notched 82 fastest laps when karting and F1 are combined.'
  ],
  83: [
    'Finished 83% of laps in seasons where he ended top-three.',
    'Claimed 83 classified results with McLaren power.'
  ],
  84: [
    'Scored 84 points in 2014 on his Ferrari return.',
    'Ran 84 races for Ferrari before the hybrid era shift.'
  ],
  85: [
    'Surpassed 85 podiums by mid-2017 en route to his final tally.',
    'Stacked 85 consecutive classified finishes between 2012-2015.'
  ],
  86: [
    'Clocked 86 laps in early F2007 testing at Fiorano.',
    'Finished 86% of possible laps across his career.'
  ],
  87: [
    'Logged an 87-lap Ferrari shakedown before the 2019 season.',
    'Scored points at 87 different Grands Prix.'
  ],
  88: [
    'Recorded his 88th podium at Bahrain 2016.',
    'Finished top-eight 88 times.'
  ],
  89: [
    'Banked 89 points in 2017.',
    'Maintained an 89-race streak with at least one podium per season (2002-2009).'
  ],
  90: [
    'Recorded 90 classified finishes with Ferrari.',
    'Enjoyed a 90% finish rate in 2012.'
  ],
  91: [
    'Led 91 laps at Montréal across his career.',
    'Came within 91 points of the 2018 title before tailing off.',
    'Scored 91 points in the 2003 championship battle, just two shy of Schumacher.'
  ],
  92: [
    'Posted 92 top-ten qualifying results for Ferrari.',
    'Owns 92 classified results between Lotus and Alfa combined.'
  ],
  93: [
    'Led 93 laps during his final win at Austin 2018.',
    'Finished 9th or 3rd a combined 93 times.'
  ],
  94: [
    'Scored 94 points in the attrition-heavy 2005 season.',
    'Claimed 94% of Lotus\'s 2013 points haul.'
  ],
  95: [
    'Logged 95 racing appearances outside F1 (rally + NASCAR combined).',
    'Finished the 2007 season 95 points clear of teammate Massa.'
  ],
  96: [
    'Banged out 96 laps in Fiorano testing prior to the Ferrari return.',
    'Scored 96 points in 2003 under the old system.'
  ],
  97: [
    'Appears in 97 official FIA race transcripts for quotable radio.',
    'Scored 97 points in 2016 despite Ferrari\'s inconsistency.'
  ],
  98: [
    'Ran 98 laps at pre-season Barcelona testing in 2018 day one.',
    'Finished 9th or 8th (9/8) exactly 98 times combined.'
  ],
  99: [
    'Registered 99 top-four finishes.',
    'Collected his 99th podium at the 2017 Monaco GP.'
  ],
  100: [
    'Broke the 100-podium barrier at Abu Dhabi 2016.',
    'Scored 100+ points in seven separate seasons.'
  ],
  101: [
    'Tallied 101 podiums before his final Alfa stint nudged it to 103.',
    'Finished 101 Ferrari races without mechanical DNFs.'
  ],
  102: [
    'Starts 102 through 201 were all with Ferrari power.',
    'Logged 102 total classified results for Ferrari.'
  ],
  103: [
    'Finished on the podium 103 times.',
    'Reached podium #103 at Mexico 2018.'
  ],
  110: [
    '110 points clinched the 2007 title under the old rules.',
    'Led 110 laps in that same championship finale stretch.'
  ],
  112: [
    'Finished 2005 with 112 points (runner-up to Alonso).',
    '112 points under the 10-8-6 system still left him eight short of Alonso.'
  ],
  113: [
    'Went 113 races between wins (2013 Australia to 2018 Austin).',
    'Completed 113 consecutive classified race finishes at one point between series.'
  ],
  150: [
    'Scored 150 points in the 2015 season, finishing fourth overall.',
    'Contributed 150 points to Ferrari\'s constructors tally that year.'
  ],
  183: [
    'Logged 183 points in 2013 while racing the Lotus E21.',
    'Held third in the table with 183 points before back surgery sidelined him late in 2013.'
  ],
  186: [
    'Totaled 186 points in 2016, ending the season sixth overall.',
    "Delivered 186 constructors' points to Ferrari during the 2016 campaign."
  ],
  349: [
    'Started 349 Grands Prix-an F1 record when he retired.',
    'Spanned 349 race weekends across three different decades.'
  ],
  1873: [
    'Holds 1,873 career championship points-the Finnish record.',
    'Stacked 1,873 points without ever chasing padding stats.'
  ]
};

const kimiFallbackTemplates = [
  '{n} tabs? That is {n} fresh chances for Kimi to say "leave me alone."',
  'Imagine {n} scoops of ice cream-still no smile from the Iceman.',
  '{n} laps of radio silence requested.',
  '{n} shrug-worthy press questions answered with "bwoah."',
  'Pit wall reminders ignored roughly {n} times today.',
  '{n} reasons for Kimi to focus on driving instead of talking.',
  'If Kimi counted to {n}, he would stop at 1 and take a nap.',
  '{n} extra seconds he would rather spend at the sauna.'
];

// DOM elements
const quoteElement = document.getElementById('quote');
const tabCountElement = document.getElementById('tabCount');
const settingsIcon = document.getElementById('settingsIcon');

// Get random item from array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Display a random quote (all local, no API needed)
function displayRandomQuote() {
  const quote = getRandomItem(kimiQuotes);
  quoteElement.textContent = `"${quote}"`;

  // Adjust font size based on quote length
  quoteElement.classList.remove('long', 'very-long');
  if (quote.length > 120) {
    quoteElement.classList.add('very-long');
  } else if (quote.length > 80) {
    quoteElement.classList.add('long');
  }
}

// Load theme from storage
function loadTheme() {
  chrome.storage.sync.get(['theme'], (result) => {
    const theme = result.theme || 'ferrari';
    document.body.setAttribute('data-theme', theme);
  });
}

// Tab counter functions
function getTodayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

function incrementTabCount() {
  const todayKey = getTodayKey();

  chrome.storage.local.get(['tabStats'], (result) => {
    const stats = result.tabStats || {};
    const todayCount = (stats[todayKey] || 0) + 1;

    stats[todayKey] = todayCount;

    chrome.storage.local.set({ tabStats: stats }, () => {
      updateTabDisplay(todayCount);
    });
  });
}

function getKimiFact(count) {
  const entries = kimiNumberFacts[count];

  if (entries && entries.length > 0) {
    return getRandomItem(entries);
  }

  const template = getRandomItem(kimiFallbackTemplates);
  return template.replace('{n}', count);
}

function updateTabDisplay(count) {
  const fact = getKimiFact(count);
  tabCountElement.innerHTML = `
    <span class="tab-number">${count}</span>
    <span class="tab-fact">${fact}</span>
  `;
}

function loadTabCount() {
  const todayKey = getTodayKey();

  chrome.storage.local.get(['tabStats'], (result) => {
    const stats = result.tabStats || {};
    const todayCount = stats[todayKey] || 0;
    if (todayCount > 0) {
      updateTabDisplay(todayCount);
    } else {
      tabCountElement.innerHTML = '<span class="tab-number">...</span>';
    }
  });
}

// Event listeners - open settings in new window
settingsIcon.addEventListener('click', () => {
  if (chrome?.action?.openPopup) {
    chrome.action.openPopup().catch(() => {
      window.open(
        'settings.html',
        'Kimi Settings',
        'width=400,height=500,menubar=no,toolbar=no,location=no,status=no'
      );
    });
    return;
  }

  window.open(
    'settings.html',
    'Kimi Settings',
    'width=400,height=500,menubar=no,toolbar=no,location=no,status=no'
  );
});

// Initialize
loadTheme();
displayRandomQuote();
loadTabCount();
incrementTabCount();
