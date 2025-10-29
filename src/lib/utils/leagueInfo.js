/*   STEP 1   */
export const leagueID = "1257464457521541120"; // your league ID
export const leagueName = "BoKnowsDegenerates"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <video width="100%" controls autoplay muted loop playsinline>
  <source src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/mlb/m3jhdhqhlb2avjmupmdh.mp4" type="video/mp4">
  Your browser does not support the video tag.
  </video>
  <h3>WEEK 8 RECAP: The King is Dead & The Collusion is Real</h3>
  <p>Gentlemen, the official Week 8 standings are in, and the playoff picture is taking shape. It is <strong>grim</strong> for some of you. With only <strong>three weeks left</strong> until the playoffs, the panic is real. The top eight teams get a ticket to the dance. Seven wins guarantees you a spot, which means one man (Alex Harris) is already laughing at the rest of us from his penthouse. For others... well, this was a week of pure, unadulterated humiliation.</p>
   
  <h3>THE WEEK 8 DISASTERS & VICTORIES</h3>
  <p><strong>Oliver's Bama Boys (117.72) def. The Commish (109.76)</strong><br>The league is in shambles. The Commissioner, Sam McIntosh, is officially <strong>OUT</strong> of the playoff picture. After spending all last week playing "Fantasy Judge," staging a sham trial, and allegedly engaging in secret, 18-minute-long "collusion calls" with his cousin, he <strong>forgot to manage his actual team.</strong> He falls to 3-5 and <strong>9th place</strong>. He is a corrupt <i>and</i> incompetent leader. Oliver Guice—the NOLA/Bama fan—gets the last laugh as his star, Rashee Rice, came through in the clutch to seal the Commish's fate. Pathetic.</p>
   
  <p><strong>Tanner's Used Cars (102.38) def. hyswon (100.52)</strong><br>Good. Lord. What a week for Steven Won. First, he gets dragged into Fantasy Court for his 2:30 AM trade shenanigans. He watches his own lawyer, Jerome, prove to the entire league that he's an "emotional, impulsive fool." He gets exposed as a pawn in Robby's "chaos" game. Then, after that public humiliation, he has to play a match. And who? <strong>Tanner Maycumber.</strong> Won loses <strong>another</strong> soul-crushing squeaker to the man who ended his season last year by 0.02 points. This time, he loses by 1.86 points, sealed by a <strong>final-drive Marcus Mariota interception</strong>. Tanner doesn't just live rent-free in Won's head; he owns the deed, has remodeled the kitchen, and is building a guest house.</p>
   
  <p><strong>Robby's Chaos Crew (129.56) def. Jake's Freefall (119.42)</strong><br>Look who's having fun now! Robby "Hollywood" Henry, fresh off his victory in Fantasy Court, proves that "chaos" is a winning strategy. He admitted in open court (via text) that he just wanted to "let chaos ensue" and that "ngl this is fun." Well, he got the chaos, the trade was voided, <i>and</i> he puts up the league-high score. That’s two wins in a row, moving him to a commanding <strong>6-2 record in 2nd place</strong>. The villain won.</p>
   
  <p><strong>Alex Harris (107.22) def. Dyer's Wedding Planners (96.38)</strong><br>Alex Harris is just mocking us at this point. The man is <strong>7-1</strong>, has the highest PF, and has officially <strong>CLINCHED</strong> a playoff spot. He started a team of benchwarmers and <i>still</i> won. He is a fantasy god walking among insects. Meanwhile, Dyer McWhorter falls to <strong>2-6</strong> and 11th place. His season is over. Go back to your wedding seating charts, Dyer.</p>
   
  <p><strong>Alex Stephens' Horrendous Henrys (114.00) def. Palmer's 50-Piece (50.98)</strong><br>My God. Palmer, what is this? <strong>50.98 POINTS.</strong> You are the <strong>1-7</strong> laughingstock of the league. You scored 50. In a full-PPR league. Alex Stephens didn't even have to try. You lost by 63 points. This is an embarrassment. You are the Washington Generals of this league.</p>
   
  <p><strong>Brett's Clean Water (111.22) def. Cole's Cousins (94.32)</strong><br>Brett Newton (4-4) gets a solid win and secures his 7th-place playoff footing. But the real story is Cole Fink. Despite the loss, Cole (3-5) is clinging to the <strong>8th and final playoff spot</strong> thanks to his tiebreaker over the Commish. He is the bubble. He is the gatekeeper. And right now, he looks incredibly shaky.</p>
   
  <h3>🔮 WEEK 9 PREVIEW: Judgement Day 🔮</h3>
  <p>Look ahead, degenerates. The matchups for Week 9 are set, and the playoff implications are massive.</p>
   
  <p><strong>MATCHUP OF THE WEEK</strong><br><strong>FreeLuigi (alxharris, 7-1) vs. Team oliverguice (5-3)</strong><br>The 7-1, clinched-and-untouchable juggernaut faces the 5-3 'BAMA fan. This is a battle for a top seed. Sleeper <i>still</i> disrespects Alex Harris, giving him only a 43% chance to win. Can Oliver pull off the upset? (No. No, he can't.)</p>
   
  <p><strong>THE "DEAR GOD, MY EYES" TOILET BOWL</strong><br><strong>Samwell Goodell (sbmcintosh98, 3-5) vs. Butker? I hardly know her (dimeandaquarter, 2-6)</strong><br>This is it. The loser-leaves-town match. This is the Commish's entire season. At 3-5 in 9th place, a loss to the 2-6 Dyer is a literal season-ender. The Commish is a massive 87% favorite with his new, panic-traded team. If he screws this up, he should be impeached.</p>
   
  <p><strong>THE PUBLIC EXECUTION</strong><br><strong>Nawfside Beaner (palmerreed, 1-7) vs. robby henry (6-2)</strong><br>The 1-7 team that just scored 50 points now faces the red-hot, 6-2, 2nd-place team. This is a scheduled bye week for Robby. Palmer, just... just try not to get outscored by 60 again.</p>
   
  <p><strong>THE BUBBLE BATTLES (WIN-OR-GO-HOME)</strong><br>These three games will decide who is in and who is out.<br>
   * <strong>Tanner (5-3) vs. Cole (3-5):</strong> This is Cole's <i>season</i>. As the 8th seed, a loss to the 3rd-place Tanner (a 90% favorite) almost certainly ends his hopes.<br>
   * <strong>Won (5-3) vs. Brett (4-4):</strong> Won needs to bounce back from his Week from Hell, while Brett (7th) needs a win to keep his 4-4 ass from falling out of the playoffs.<br>
   * <strong>Alex Stephens (3-5) vs. Jake (4-4):</strong> A desperate battle. Jake (6th) is trying to stop his freefall. Alex S. (10th) <i>must</i> win to have any shot at leapfrogging the Commish and Cole.</p>
 
<h3>⚖️ SPECIAL REPORT: The Trial of the Century (RECAP)</h3>
<p>As a reminder, the "Fantasy Court" case of <strong>Robby vs. Won</strong> is officially closed. It was a sham. Won started it with his 2:30 AM "hold the trade" text. But he was out-maneuvered. The case revealed a secret 18-minute "collusion call" between the Commish and Robby. It revealed Robby's <i>true</i> motive was "buyer's remorse" and a desire for "chaos." Won, who started this whole thing with his "clapping cheeks" testimony, was reduced to a crying, blubbering mess, proven by his <i>own lawyer</i> to be an "emotional, impulsive fool." The trade is <strong>VOIDED</strong>. Robby keeps his player. Won keeps his. And the Commish's (and Robby's) integrity is forever tarnished.</p>
 
<h3>🚨 SPECIAL REPORT: The Commissioner's PANIC!</h3>
<p>Speaking of the Commish, his 3-5 record has sent him into a full-on, team-destroying panic. He has made a flurry of trades that reek of desperation.<br>
 1. <strong>FIRE SALE:</strong> He traded <strong>Bijan Robinson</strong> to Tanner for Puka Nacua and Quinshon Judkins.<br>
 2. <strong>THE CHARITY CASE:</strong> He then traded <strong>AJ Brown, Deebo Samuel, AND Zach Charbonnet</strong> to... <i>Palmer</i>? (The 50-point guy?) for Ashton Jeanty. Is this pity? Is this money laundering? An impeachable offense.<br>
 3. <strong>THE HAIL MARY:</strong> He then immediately flipped <strong>Puka, Judkins, and Drake Maye</strong> for <strong>Christian McCaffrey and Ladd McConkey.</strong><br>
 This is a complete mental breakdown, live for all of us to see.</p>
 
<p>The playoffs are in 3 weeks. Good luck, gentlemen.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
