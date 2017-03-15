import React, { Component } from 'react';
import {Grid,Panel,Accordion} from 'react-bootstrap';

const title = (
  <h3>Information And Rulesets</h3>
);

class Information extends Component {

  render() {
    return (
      <Grid>
        <Panel header={title} bsStyle="primary">
            <Accordion>
                <Panel header="Newcomers" eventKey="1">
                    <h3>Who can join tournaments?</h3>
                    <p>Anyone! You don’t have to be a certain age or skill level to join a tournament in Alberta. The only exception is for Arcadian-style events (held occasionally), which only allow newcomers and up-and-coming players.
                    Some tournaments may require pre-registration, but anyone can pre-register. Check with each individual event to see which ones are Arcadians or require pre-registration.</p>

                    <h3>I don’t think I’m very good, should I go to a tournament?</h3>
                    <p>Yes! Smash has gotten huge over the last few years, and there are tournament communities all around the province. Traveling to tournaments far away can be expensive, but going to one in your own town is fairly inexpensive as a hobby.
                    The only way to improve is to keep playing. See how you do! And if you get eliminated from the tournament, you can still stick around and play as many friendlies as you want with other people. Most people are more than happy to give you pointers, too. Nobody is going to judge anyone for their perceived skill level. Play lots of matches, make lots of friends, let us make it an unforgettable experience for you!</p>

                    <h3>What is a “smashfest”?</h3>
                    <p>It’s where a bunch of Smash players get together and just play casual matches with each other. Not a tournament, it’s all freeplay.</p>

                    <h3>Do these things cost money?</h3>
                    <p>Generally, yes. Entrance to a Smash event usually consists of a venue fee, plus an event fee. Depending on the size of the tournament you may be paying anywhere up to 10 dollars for a day to 100 dollars for a weekend.
                    The venue fee is a set amount of money you pay to get into the actual location of the tournament, which is used to pay off the price we have to pay to use the building. Most smashfests and tournaments will have a venue fee.
                    The event fee applies to whatever brackets you want to participate in. If the tournament is having 3 events, but you only want to join 1 or 2 of them, you only pay for the events you want to enter.
                    So, for example, a tournament with a $5 venue fee that has a Melee bracket and a PM bracket each at $10 entry fee would cost you $25 if you want to play both events. If you only want to play one game or the other, it would cost you $15.
                    Some smashfests and free tournaments have a venue fee, but no entry fee since there’s no tournament.</p>

                    <h3>How does the tournament work?</h3>
                    <p>Everyone shows up to the venue, pays the venue fee to the tournament organizer or venue owner to get into the building, and then pays the tournament entry fee to the tournament organizer for each game that they want to join (Singles, doubles, side event, whatever is there). Once registration closes, the tournament organizers seed the bracket (which means they rank everyone on perceived skill level and set up the bracket so that people who are historically the best do not face each other early). This means that newer players, for better or for worse, will likely face some of our region’s top talent at their first tournament – don’t get discouraged by this! Whether you win or lose, you’re going to learn and improve.
                    Most tournaments are played in sets of best-of-3-games and are double elimination, which means you keep playing until you’ve lost TWO best-of-3 sets. (That means don’t leave when you lose a set, you’re still in the tournament!)</p>

                    <h3>Which Smash game should I play?</h3>
                    <p>Whichever one(s) you like the best! It all depends on personal preference and what playstyles you find the most enjoyable. Alberta in particular has a active Smash community for every game in the series as well as Project M, so there’s lots to choose from. Check the Facebook groups for your region to see what games are the most popular.
                    If you’re just getting into Smash, try attending an event for each game, and try them all out. Some people play every Smash game competitively, while others only stick to one or two. While in the global Smash community there is some hostility between game-specific communities, here in Alberta people are generally respectful of each other’s choices.</p>

                    <h3>Will I be the only person of (certain gender/race/age group/etc)?</h3>
                    <p>Most likely not. The Smash community in Alberta is very diverse.</p>
                </Panel>
                <Panel header="CASE Details/Membership" eventKey="2">
                    
                    <p>CASE is located at 9910 67
                        Ave, and is a clean and
                        comfortable 5000 sq. venue that
                        can hold up to 450 players.
                        Events start Friday nights at 6 PM
                        and end at 11 PM. The nightly
                        venue fee for joining a paid bracket
                        is $5, and a $20 membership gives
                        you full access for 4 months.</p>

                        <p>
                            Each player is required to bring their own controller to participate.
                        </p>

                        <p>For the most current information about
                        upcoming events, join our facebook
                        group.</p>

                </Panel>
                <Panel header="Melee Ruleset" eventKey="3">
                    <h3>General Rules</h3>
                    <ul>
                        <li>Game Settings: 4 Stocks, 8 Minute Time Limit</li>
                        <li>Items are disabled.</li>
                        <li>Stalling with moves such as Jigglypuff's Rising Pound or Peach's Wall Bomber is banned</li>
                        <li>Glitches such as Ice Climbers’s Freeze Glitch and Mewtwo’s Soul Stunner are banned.</li>
                        <li>Pause option is disabled in the game menu. If left on, accidental pausing mid match forfeits a stock.</li>
                        <li>You may not choose any stage you have won on during a set, unless agreed by both players.
                        A tie is determined by most stocks, and then if still tied, by percentage. If percentage is tied, the match is fully replayed.
                        Playing as Master Hand is banned</li>
                    </ul>

                    <h3>Doubles Rules</h3>
                    <ul>
                        <li>Friendly Fire enabled</li>
                        <li>Life stealing stocks from a teammate is allowed</li>
                    </ul>

                    <h3>Stage List</h3>
                    <h5>Neutral Stages</h5>
                    <ul>
                        <li>Final Destination</li>
                        <li>Battlefield</li>
                        <li>Yoshi’s Story</li>
                        <li>Dream Land</li>
                        <li>Fountain of Dreams [Singles Only]</li>
                        <li>Pokemon Stadium [Doubles Only]</li>
                    </ul>
                    <h5>Counter-Pick Stages</h5>
                    <ul><li>Pokemon Stadium [Singles Only]</li></ul>


                    <h3>Match Procedure</h3>
                    <ol>
                        <li>Players select their characters. Either player may choose to Blind Pick. In this case, each player secretly tells a third player their character before picking with the third player verifying their selections.</li>
                        <li>Players play Rock-Paper-Scissors. Winner chooses between selecting controller port or first Stage Strike</li>
                        <li>Players take turns removing stages from the Neutral Stages list above based upon the results of the previous rule. The first player to strike removes one(1) stage from the list, the second player removes two(2), and the first player then chooses from the remaining two(2) stages.</li>
                        <li>The players play the first match of the set</li>
                        <li>Winning player of the preceding match bans a stage from the full list of stages, both Neutral and Counter-Pick. Does not apply to Best of 5 sets.</li>
                        <li>The Losing player of the preceding match picks a stage for the next match. Cannot choose the stage banned in the previous step, nor a stage they've already won on during this set, unless agreed.</li>
                        <li>The winning player of the preceding match may choose to change characters.</li>
                        <li>The losing player of the preceding match may choose to change characters.</li>
                        <li>The losing player of the preceding match may change their controller port.</li>
                        <li>The next match is played</li>
                        <li>Repeat Steps 5 through 10 for all subsequent matches until the set is complete.</li>
                    </ol>

                    <p>Stage Clause: A player/team may not counterpick any stage they previously won on during the set, unless agreed upon by the opponent.</p>
                    <p>Neutral Start: The following ports are to be used when a player/team invokes the neutral start clause. Any necessary port combinations must be enforced by the neutral start invoking player for each different stage throughout the set.</p>

                </Panel>
                <Panel header="Wii U Ruleset" eventKey="4">
                    <h3>Wii U Game Settings</h3>

                    <ul>
                        <li>Singles: 2 stocks and 6:00 minutes</li>
                        <li>Doubles: 3 stocks and 8:00 minutes</li>
                        <li>Custom Fighters are banned</li>
                        <li>Custom Moves are banned</li>
                        <li>Custom Equips are banned</li>
                        <li>Mii Fighters are legal. Each setup will have 1-1-1-1 Mii Brawlers/Swordsmen/Gunners available for use (Using Default A Mii).</li>
                        <li>No other specials for Mii Fighters will be allowed. Players are not allowed to transfer any existing Miis to a setup.</li>    
                    </ul>
                    <h3>Wii U Stagelist</h3>
                    <h5>Starter</h5>

                    <ul>
                        <li>Battlefield/Miiverse *</li>
                        <li>Final Destination</li>
                        <li>Lylat Cruise</li>
                        <li>Smashville</li>
                        <li>Town & City</li>
                    </ul>
                    <h5>Counterpick</h5>
                    <ul>
                        <li>Dream Land 64</li>
                        <li>Duck Hunt</li>
                    </ul>
                    * Miiverse is treated as Battlefield during the stage ban phase. If Battlefield is banned, then Miiverse is also banned, and vice versa.
                    ** All Omega stages are banned.

                    <h3>Wii U Details</h3>
                    <ul>
                        <li>Stage Striking: Players/teams eliminate stages from the Starter stagelist until there is one stage remaining. The player who strikes first may be determined by RPS (rock, paper, scissors) best of one. The winning player/team strikes the first stage. Then the other player/team strikes two stages. Then the winning player/team strikes one more stage and the remaining stage is used for the first game of the set.</li>
                        <li>Stage Clause: A player/team may not pick any stage they previously won on during the set, unless agreed upon by the opponent.</li>
                        <li>Stage Bans: During the stage ban phase, the winning player may ban one stage from the stagelist. All stage bans affect both players, meaning players who banned a stage may NOT counterpick that stage themselves later in the set.</li>
                        <li>Self-Destruct Moves: If a match ends with the successful use of a character’s self-destruct move, the results screen will determine the winner.</li>
                        <li>Team Colors: Players’ character colors must match their team’s color when possible, to avoid confusion (ex: Luigi on the green team must use the green costume).</li>
                        <li>DLC Characters: All DLC characters are legal in addition to the entire cast of characters on the select screen.</li>
                        <li>Wireless Controllers: Wireless controllers of all kinds are banned, including the Wii U Pro, Gamepad, Nintendo 3DS, and Nintendo 2DS. The only legal controller is the wired GameCube controller.</li>
                        <li>Glitches: Any glitches that freeze the game are banned, and the player who initiated the glitch is subject to forfeiture of the match.</li>
                    </ul>
                </Panel>
                <Panel header="Project M Ruleset" eventKey="5">
                    TBA
                </Panel>
            </Accordion>
        </Panel>
      </Grid>
    );
  }
}

export default Information;
