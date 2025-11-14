/*   STEP 1   */
export const leagueID = "1257464457521541120"; // your league ID
export const leagueName = "BoKnowsDegenerates"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <video width="100%" controls autoplay muted loop playsinline>
  <source src="https://youtu.be/nswEqNh1ILE?si=MjMYX0eVm61Di14X" type="video/mp4">
  Your browser does not support the video tag.
  </video>
  <h3>WEEK 10 RECAP: The Gobbler Returns</h3>
   
  <p>In the fantasy football league known as BoKnowsDegenerates, the managers are separated by two distinct groups: <strong>The High Rollers</strong> playing for the championship, and <strong>The Folded</strong> who are just trying to survive. This week, the game got real. These are their stories.</p>

<p style="text-align: center; font-weight: bold; margin: 20px 0;">DUN DUN</p>

<h3>💀 Special Victims Unit: The DegenerateGames - Episode 2 💀</h3>

<p>The air in the cold office hung thick with the metallic scent of despair. Detective Ice-T sighed, rubbing the bridge of his nose. "Last week, we called it the Week 9 execution of <strong>Palmer Reed (1-8)</strong>. It was quick, clean—a warning shot. This... this is ritual."</p>

<p>The M.E. nodded, his voice low. "The victim is <strong>Dyer McWhorter</strong>. Record 3-7. He fought, Detective. He pulled off a 104-91 <strong>win over Cole Fink</strong>. He won the battle, but the math was merciless. The system claimed him anyway."</p>

<p>Dyer's body hung suspended, his gold wedding band glinting uselessly in the harsh fluorescent light. His shirt was ripped, exposing a final, cruel act of humiliation. Ice-T stared at the evidence.</p>

<p>"Epstein Files," the detective read aloud, glancing at the suspicious folder tucked under Dyer's foot—a cynical trophy left by <strong>Steven Won’s</strong> shadow.</p>

<p>Then he focused on the victim's chest, where the message was scrawled:</p>

<p><strong style="color: #cf6679; font-size: 1.5em; font-style: italic;">"Let me see dem tiddies"</strong></p>

<p>"He won his last game, and he *still* gets marked by a juvenile insult tied to <strong>Tanner Maycumber's ('Show Me Them TDs')</strong> team name," Ice-T growled, his jaw tight. "The brutality in this league is escalating. They leave nothing sacred."</p>

<p>Dyer's elimination was sealed. The **DegenerateGames** claimed another soul—one who died for a victory that didn't matter.</p>

<hr>

<h3>📢 The Commissioner's Decree 📢</h3>

<p>Back at the BoKnowsDegenerates corporate headquarters, the mood was devotional, not mournful. Commissioner <strong>Sam McIntosh (sbmcintosh98)</strong> stood, his face unreadable, ready to deliver the final word on the living.</p>

<p>The lights dimmed. A chilling, wet, rattling **GOBBLE** echoed from the ventilation shafts. It vibrated in the floorboards. This wasn't a seasonal sound; this was <strong>The Gobbler</strong>, the embodiment of playoff anxiety, come to feast on hope before Thanksgiving.</p>

<p>"Hear ye, degenerates! <strong>Alex Harris (8-2)</strong> and **Robby Henry (8-2)** have breached the wall. You are <strong>CLINCHED</strong>! The Gobbler will spare you... for now."</p>

<p>"The tiebreaker is <strong>head-to-head wins</strong>, and after that, it's <strong>total points for</strong>. Two weeks left to survive!."</p>

<h4>Current Playoff Picture:</h4>
<ul>
    <li><strong>The Clinched (8-2):</strong> Robby Henry, Alex Harris.</li>
    <li><strong>The Safe Zone (6-4):</strong> Steven Won, Tanner Maycumber, Oliver Guice.</li>
    <li><strong style="color: #cf6679;">The Elimination Bubble:</strong> <strong>Brett Newton, Sam McIntosh, Jake Futrell, Cole Fink, and Alex Stephens</strong>. Five of you are fighting for the last three tickets.</li>
</ul>

<hr>

<h3>⚔️ The Final Ritual ⚔️</h3>

<p>The three 6-4 managers—**Won, Tanner, and Oliver**—stepped away from the light, their eyes cold. Then, the five bubble managers—**Brett, Sam, Jake, Cole, and Alex Stephens**—were forcefully herded into a tight circle in the center of the headquarters.</p>

<p>The safe managers began to circle them like wolves, their voices rising in a slow, hypnotic rhythm. **Robby** and **Alex Harris** led the chilling devotion:</p>

<p style="text-align: center; font-size: 1.5em; margin: 20px 0; color: #03dac6;"><strong>THREE WILL FEAST, TWO WILL STARVE!</strong></p>

<p style="text-align: center; font-size: 1.5em; margin: 20px 0; color: #03dac6;"><strong>THREE WILL FEAST, TWO WILL STARVE!</strong></p>

<p>Inside the circle, fear was physical. <strong>Brett Newton (mbrett2012)</strong>, the clean water engineer, was a trembling mess of statistical anxiety. He dug his fingers into <strong>Jake Futrell’s</strong> arm.</p>

<p>"It hunts the desperate, Jake! It targeted <strong>Cole Fink</strong> right before the playoffs last year—killed his momentum! **The Gobbler** consumes hope! It will eat our points and leave us with nothing but gravy stains!"</p>

<p>Cole, already reliving the anguish of last year's collapse, couldn't move. The chant grew LOUDER, and The Gobbler’s cries, fueled by the rising panic, shook the very foundation of the building. The sound was deafening, terrifying, and final.</p>

<p><strong>It's maximum nut crunch time. One weeks left to join the feast.</strong></p>

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
    
