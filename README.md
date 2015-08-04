# wwwsplit
A completely browser-based timer intended for speedruns.

## Demo
A demo of wwwsplit can be viewed at http://jpnance.github.io/wwwsplit/. This is usable and will save your splits as long as you're using the same computer and browser each time you open it. It is, on the other hand, always going to represent the most current version of wwwsplit and your data will not necessarily be backwards-compatible as the project continues to evolve. I'll do my best to preserve it, though, as I use this timer, too.

## Controls
All functions of wwwsplit are controlled by the keyboard. Note that all commands are case-sensitive.
* Start timer (spacebar when the timer is stopped)
* Stop timer (spacebar on the final segment or otherwise uppercase 'R' when the timer is running)
* Reset timer (uppercase 'R' when the timer is stopped)
* Split segment (spacebar when the timer is running; this also stops the timer if used on the final segment)
* Unsplit segment (backspace when the timer is running; this has no meaning if the timer is on the first segment)
* Skip segment (lowercase 's' when the timer is running)
* Save splits (uppercase 'S' when the timer is stopped)
* Quick-load segments (numbers 1-9 when the timer is stopped)
* Add set of segments (lowercase 'a' when the timer is stopped)
* Edit set of segments (lowercase 'e' when the timer is stopped)

## Limitations
wwwsplit is a very young project that has so far been modified only according to my personal needs. As such, there are currently some major limitations that I'd like to document. I hope to make this list much shorter as the project matures.
* Once you have a set of segments set up, you can't trust wwwsplit to do much beyond change a segment's name. Specifically, you can't (yet) remove, reorder, or duplicate a segment.
* Because wwwsplit is browser-based, it requires a third-party program in order to support hotkeys (e.g. [BetterTouchTool](http://www.bettertouchtool.net/) on Mac OS X). Without hotkeys, wwwsplit's browser window must be focused in order to interact with it.
* It's essentially untested in anything besides Firefox and Chrome on Mac OS X (Yosemite).

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
* Completely browser-based, using plain old HTML, CSS, and JavaScript (with jQuery). This has a couple of huge benefits.
  * wwwsplit works--and works the same way--on any platform that supports a web browser, whether it be Windows, Mac OS X, Linux, or otherwise.
  * With no development stack to set up, the overhead for contributors is as low as it can be.
* Utilizes the localStorage object to save your segment data and splits.
* A clean, minimal aesthetic that's easily modifiable by anybody familiar with CSS.
* More meaningful names for the standard speedrun timer statistics.
  * "Perfect Run" is equivalent to "Sum of Best Segments," showing what your best possible overall time is by adding up the best segment durations from each of your segments.
  * "Still Possible" is equivalent to "Predicted Time (Best)," showing, mid-run, what your best possible ending time is by adding up the best segment durations from each of the segments remaining in the run.
  * "More Likely"  would be equivalent to "Predicted Time (Median)," showing, mid-run, a reasonable expectation of your ending time by adding up the median segment durations from each of the segments remaining in the run.

## Wish List
These are the features that I'm most interested in adding to wwwsplit, roughly in order.
* Anchor the final segment to the bottom of the segment list display so that it's always clear what your PB is.
* Fully fleshed-out "slow load" and "quick load" features; wwwsplit currently has simple quick load support.
* The ability to delete a set of segments.
* The ability to manipulate existing segments.
  * Delete
  * Reorder
  * Duplicate
  * Merge
* More stats, maybe even converting "More Likely" into a rolling average.
  * Possible time save
  * Previous segment
  * Percentile needed to PB
* Best splits mode wherein you're racing against your best splits for each segment rather than your fastest overall run.
* Practice mode that focuses on timing one particular new trick, similar in concept to the "lap" function on many stopwatches.
* Support for user-supplied CSS, especially on a per-splits level.
* Re-imagine the timer interface in general to always be a particular height, maybe predominantly showing the current segment with a little bit of information about the previous and next segments.
* Collapsible segment groups so you can, for instance, combine "1-1," "1-2," and "1-3" into one group called "World 1."
* splits.io and/or pbtracker.net integration. The restriction on cross-domain AJAX will make this tricky unless, for instance, one of those sites is willing to host wwwsplit. There are, however, ways around it that I may look in to.
* Some brand of unit-testing so I can actually be confident that everything still works when I make changes.
* A pause timer control.

## What's Next
My main focus is allowing the user to create their own sets of segments without having to modify wwwsplit's JavaScript code.
