/*   STEP 1   */
export const leagueID = "1257464457521541120"; // your league ID
export const leagueName = "BoKnowsDegenerates"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <h3>Week 3 Power Rankings</h3>
  <p>Alright, you glorious train wrecks. Three weeks are in the books, and the lines are being drawn. The contenders are rising, the pretenders are being exposed, and a few of you are already staring into the abyss of a truly pathetic season. Let's break down the chaos.</p>

  <h3>The Undefeated Gods Among Men</h3>
  <p>At the top, sitting on a throne of vanquished opponents, we have two teams at a perfect 3-0.</p>
  <p><strong>1. robbyhenry (Robby Henry):</strong> Well, well, well. Look who's back. The reigning champ clearly wasn't satisfied with just taking your money last year; now he's decided to take your dignity, too. He’s not even scoring the most points, he’s just… winning. It’s sickening, really. The crown sits heavy, but Robby’s making it look easy.</p>
  <p><strong>2. FreeLuigi (alxharris):</strong> Hold the phone… Alex Harris?! A member of the notoriously pedestrian "Soccer Firm" is undefeated?! What timeline are we in? Did you accidentally auto-draft a superteam, or did you sell your soul for this? We’re all waiting for the inevitable collapse, but for now, enjoy the view from the top.</p>

  <h3>The "Yeah, We're Good" Blob (The 2-1 Crowd)</h3>
  <p>This is where the real action is. A massive pile-up of teams who have tasted both sweet victory and bitter defeat.</p>
  <p><strong>3. CeeDeez Nutz (jfutrell):</strong> Jake, my man, you are the Points Scored KING, leading the league with a massive 376.5 PF. But that "1" in the loss column proves that points don't always equal perfection. It’s like having a Ferrari with a flat tire. Looks great, but you’re not getting where you need to go just yet.</p>
  <p><strong>4. Show Me Them TDs (TheTanMan41):</strong> Right behind Jake is Tanner, the league's second-highest scorer. You're putting up video game numbers, but a 2-1 record means one of your opponents actually remembered to set their lineup. Tough break.</p>
  <p><strong>7. oliverguice (Oliver Guice):</strong> LET'S TALK ABOUT LUCK! Oliver has the LOWEST Points Against in the entire league by a country mile (200.38?!). Your opponents’ teams apparently just fall apart when they play you. You magnificent, lucky bastard. You are winning with smoke, mirrors, and your opponents having catastrophic bye weeks.</p>
  <p>Shoutout to <strong>mbrett2012</strong> and <strong>BUTT STUFF (ColeFink)</strong> for hanging tough in the 2-1 bracket as well. You're still in the fight.</p>

  <h3>The Panic Button Tier (1-2)</h3>
  <p>This is where the anxiety starts to creep in.</p>
  <p><strong>8. Top of the Epstein List (hyswon):</strong> A questionable team name for a questionable record. You're teetering on the edge of disaster, Steven.</p>
  <p><strong>9. Horrendous Henry's (stephensalex2):</strong> From championship runner-up to this. Alex, you're looking more "Horrendous" than "Henry" right now. Time for a team meeting.</p>

  <h3>WELCOME TO THE DUMPSTER FIRE (0-3)</h3>
  <p>Oh, this is beautiful. A trifecta of misery. The winless wonders.</p>
  <p><strong>10. Butker? I hardly know her (dimeandaquarter):</strong> Dyer! My sweet prince! Last year's regular-season champion is now the league's doormat. From the penthouse to the outhouse. You're scoring points, but your defense against other teams is apparently optional. A truly spectacular fall from grace.</p>
  <p><strong>11. Samwell Goodell (sbmcintosh98):</strong> THE COMMISSIONER! IN THE MUD! Sam, you run this league, but you can't seem to run your own team. You're like a cop who keeps getting speeding tickets. The hypocrisy is delicious.</p>
  <p><strong>12. Palmer Reed (Not Pictured):</strong> And then there's Palmer. So far in last place, you didn't even make the screenshot. You are the foundation upon which this league is built—a firm, reliable source of wins for everyone else. We salute you.</p>

  <p>Week 4 is coming. The undefeated will be tested, and the winless will pray for a miracle. Good luck, you degenerates. You'll need it.</p>
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
    
