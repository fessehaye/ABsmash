import React from 'react';
import {Grid,Panel,Accordion} from 'react-bootstrap';

const title = (
  <h3>Information And Rulesets</h3>
);

const Information = props => {

  
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

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="//www.youtube.com/embed/7A2iUozS97A"></iframe>
                        </div>

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
                        <li>Battlefield*</li>
                        <li>Final Destination**</li>
                        <li>Lylat Cruise</li>
                        <li>Smashville</li>
                        <li>Town & City</li>
                    </ul>
                    <h5>Counterpick</h5>
                    <ul>
                        <li>Dream Land 64*</li>
                        <li>Omega Stages**</li>
                    </ul>
                    * Treated as Battlefield in striking phase. If Battlefield is struck, Dream Land 64 is also struck and vice-versa. 
                    ** Treated as Final Destination in striking phase. If Final Destination is struck, Omega Stages are struck and vice versa. You may only choose the following Omega Stages: Midgar, Suzaku Castle and Wily Castle.


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
                <Panel header="Project M Ruleset (3.6)" eventKey="5">
                    <h3>GENERAL RULES</h3>
                    <ul>
                        <li>Items off and set to none, 8 Minutes, 4 Stocks, Buffer off, auto-L cancelling off.</li>
                        <li>No excessive stalling.</li>
                        <li>Double blind character pick is offered at request (one player whispers their choice to a neutral 3rd party, then the other chooses, then the first player selects the character they originally whispered).</li>
                        <li>DSR: You cannot counter pick to any stage you have won on.</li>
                        <li>Gentleman's Clause: Any stage may be played on if both players agree to it.</li>
                        <li>If a match times out, the winner is determined by remaining stocks, then lowest percentage on the same stock.</li>
                        <li>If percentage is also tied, a 3 minute, 1 stock overtime match will be played. If that is also a tie (down to percent), the winner will be decided by Rock-Paper-Scissors.</li>
                        <li>Pausing Results in a stock loss, at the discretion of the opponent.</li>
                        <li>Winning player is not locked into the same character for the next match, but has to pick before loser selects character.</li>
                        <li>If each player has one stock remaining and the match ends due to a suicide move (Ganon's side-B, DDD's swallow, holding someone in a grab on a platform as it moves out of the boundaries, etc.), the player who initiated the move wins.</li>
                        <li>No Giga Bowser, No Warioman (SoPo is fine).</li>
                    </ul>

                    <h3>STAGE STRIKING</h3>
                    <ul>
                        <li>Rock-Paper-Scissors for first strike. The order is 1-2-2-1 (winner of RPS strikes one stages, loser strikes two stages, then the winner of RPS strikes the last stage).</li>
                        <li>The stages for games 2+ are decided by winner of the previous game banning stages, then the loser choosing the stage, and then character select (winner, then loser).</li>
                        <li>Best 1 out of 3 sets will have two bans. Best 3 out of 5 sets will have one ban.</li>
                    </ul>

                    <h3>Single Stages</h3>
                    <h5>Starter Stages</h5>
                    <ul>
                        <li>Battlefield</li>
                        <li>Delfino's Secret</li>
                        <li>Pokemon Stadium 2</li>
                        <li>Smashville</li>
                        <li>Green Hill Zone</li>
                    </ul>

                    <h5>Counterpick Stages</h5>
                    <ul>
                        <li>Dreamland 64</li>
                        <li>Final Destination</li>
                        <li>Fountain of Dreams</li>
                        <li>Warioland</li>
                    </ul>

                    <h3>Doubles Stages</h3>
                    <h5>Starter Stages</h5>
                    <ul>
                        <li>Battlefield</li>
                        <li>Dreamland 64</li>
                        <li>Pokemon Stadium 2</li>
                        <li>Smashville</li>
                        <li>Green Hill Zone</li>
                    </ul>

                    <h5>Counterpick Stages</h5>
                    <ul>
                        <li>Delfino's Secret</li>
                        <li>Final Destination</li>
                        <li>Fountain of Dreams</li>
                        <li>Norfair</li>
                    </ul>

                </Panel>
            </Accordion>
        </Panel>
      </Grid>
    );
  
}

export default Information;
