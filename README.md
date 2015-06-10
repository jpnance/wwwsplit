# wwwsplit
A completely browser-based timer intended for speedruns.

## Controls
All functions of wwwsplit are controlled by the keyboard. Note that all commands are case-sensitive.
* Start timer (spacebar when the timer is stopped)
* Stop timer (spacebar on the final segment or otherwise uppercase 'R' when the timer is running)
* Reset timer (uppercase 'R' when the timer is stopped)
* Split segment (spacebar when the timer is running; this also stops the timer if used on the final segment)
* Unsplit segment (backspace when the timer is running; this has no meaning if the timer is on the first segment)
* Skip segment (lowercase 's' when the timer is running)
* Save splits (uppercase 'S' when the timer is stopped)

## Limitations
wwwsplit is a very young project that has so far been modified only according to my personal needs. As such, there are currently some major limitations that I'd like to document. I hope to make this list much shorter as the project matures.
* Unless you're willing to modify the JavaScript (a relatively simple change), wwwsplit only supports segment data for my particular Super Mario 64 16-star route.
* Because wwwsplit is browser-based, it requires a third-party program in order to support hotkeys (e.g. BetterTouchTool on Mac OS X). Without hotkeys, wwwsplit's browser window must be focused in order to interact with it.
* It's essentially untested in anything besides Firefox on Mac OS X (Yosemite).

## Features
Despite wwwsplit's youth, there are still some things that I quite like about it. Naturally, I hope to make this list much longer as the project matures.
* A totally functional timer with a basic set of controls, all of which are quickly documented above in the "Controls" section.
  * Start timer
  * Stop timer
  * Reset timer
  * Split segment
  * Unsplit segment
  * Skip segment
  * Save splits
* Completely browser-based, using plain old HTML, CSS, and JavaScript (with jQuery). With no development stack to set up, the overhead for contributors is as low as it can be.
* Utilizes the localStorage object to save your segment data and splits.
* A clean, minimal aesthetic that's easily modifiable by anybody familiar with CSS.
* More meaningful names for the standard speedrun timer statistics.
  * "Perfect Run" is equivalent to "Sum of Best Segments," showing what your best possible overall time is by adding up the best segment durations from each of your segments.
  * "Still Possible" is equivalent to "Predicted Time (Best)," showing, mid-run, what your best possible ending time is by adding up the best segment durations from each of the segments remaining in the run.
  * "More Likely"  would be equivalent to "Predicted Time (Median)," showing, mid-run, a reasonable expectation of your ending time by adding up the median segment durations from each of the segments remaining in the run.

## Wish List
These are the features that I'm most interested in adding to wwwsplit, roughly in order.
* The ability to create your own segments without having to know any JavaScript.
* Support for particularly long sets of segments. This could be accomplished a couple of ways.
  * The segments part of the interface should be made scrollable and the interface should be able to automatically scroll to where it needs to be.
  * Re-imagine the timer interface in general to always be a particular height, maybe predominantly showing the current segment with a little bit of information about the previous and next segments.
* Best splits mode wherein you're racing against your best splits for each segment rather than your fastest overall run.
* Practice mode that focuses on timing one particular new trick, similar in concept to the "lap" function on many stopwatches.
* Support for user-supplied CSS, especially on a per-splits level.
* Collapsible segment groups so you can, for instance, combine "1-1," "1-2," and "1-3" into one group called "World 1."
* splits.io and/or pbtracker.net integration. The restriction on cross-domain AJAX will make this tricky unless, for instance, one of those sites is willing to host wwwsplit. There are, however, ways around it that I may look in to.
* Some brand of unit-testing so I can actually be confident that everything still works when I make changes.

## What's Next
I'm planning on learning a new game soon that will necessitate me adding support for long sets of segments and I'm going to do my best to implement segment creation at the same time (i.e. I'll need the first two items from the Wish List if I want to use wwwsplit with Yoshi's Island any% warpless).