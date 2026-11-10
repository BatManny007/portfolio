---
title: I couldn't find my card number in Grey, so I tested it with 20 people
date: 2026-11-09
summary: A findability test of Grey's Cards screen. Everyone found their card details, but only 14% went straight to Details. More than half tapped the card itself, which does nothing.
kicker: A follow-up to my Grey send-flow case study
tags: Grey, Research
image: ../assets/images/grey-card-details-02-first-taps.jpg
imageAlt: Tap map of first taps on Grey's Cards screen. Most land on the card image, a few on Details. Card image 55%, Details 14%.
thumbnail: ../assets/images/grey-card-details.jpg
---

<div class="hero-meta" style="margin-top: 0;">
  <div class="meta-card"><span class="meta-label">Role</span><div class="meta-value">Solo: research, prototype, test platform and analysis</div></div>
  <div class="meta-card"><span class="meta-label">When</span><div class="meta-value">Plan committed 7 November 2026, sessions 7 to 8 November 2026</div></div>
  <div class="meta-card"><span class="meta-label">Method</span><div class="meta-value">Unmoderated first-click and findability test on a copy of the Cards screen, 20 finished sessions</div></div>
  <div class="meta-card"><span class="meta-label">Headline result</span><div class="meta-value">Everyone found their card details, but only 14% tapped Details first. 55% tapped the card itself, which does nothing</div></div>
</div>

<p class="disclaimer">This is self-initiated research for my portfolio. I am not affiliated with Grey, and Grey did not commission or review this work. The screen tested is my copy of Grey's Cards screen, built from screenshots of the live app.</p>

## One person getting stuck is a lead, not a finding

I was paying for something online when checkout asked for my Grey card number, expiry date and CVV.

I opened Grey, went to Cards and tapped the card. Nothing happened.

I eventually found a button labelled "Details", but it took longer than I expected. And honestly, I wondered why getting something as basic as my card details required that much searching.

My first thought was that perhaps I was missing something.

But was I?

Before jumping into a redesign, I wanted to see whether other people would run into the same problem. More importantly, I wanted to understand what they expected to happen when they landed on that screen.

![Grey's Cards screen, annotated: the card shows •••• 9733 but does nothing when tapped, the details sit behind a Details button with an i icon, and Show PIN sits beside it](../assets/images/grey-card-details-01-cards-screen-annotated.jpg "Grey's Cards screen today, with the three things I suspected.")

## A test that could prove me wrong

I built a clickable copy of Grey's Cards screen using screenshots of the live app. I deliberately left the interface unchanged. The card still did nothing when tapped, just like the original.

Participants were given one task:

*"You're paying for something online and the checkout asks for your Grey card's number, expiry date and CVV. Find them in the app."*

Before anyone participated, I documented four possible explanations for the problem, along with the results that would support or challenge each one.

I also set a condition that would prove my initial suspicion wrong: if at least 60% of participants tapped Details first and the average ease rating was 5.5 out of 7 or higher, then perhaps this was just a me problem.

I wanted the research to have room to disagree with me.

## Everyone got there. Almost nobody went straight there.

All 20 participants eventually found their card details. That's the good news.

26 people opened the test. 25 reached the Cards screen, 22 tapped something there, and 20 finished the task. That's why the numbers below don't all share the same total.

The interesting part was how they got there.

Only 3 of the 22 people who tapped something on the Cards screen went to Details first. Twelve tapped the card image, expecting something to happen.

It didn't.

And across the sessions, 16 of 25 participants tapped the card at some point.

<div class="stat-grid">
  <div class="stat"><span class="stat-label">Tapped Details first</span><span class="stat-value">14%</span><span class="stat-note">3 of 22 · 95% range 5 to 33%</span></div>
  <div class="stat"><span class="stat-label">Tapped the card first</span><span class="stat-value">55%</span><span class="stat-note">12 of 22 · 95% range 35 to 73%</span></div>
  <div class="stat"><span class="stat-label">Median time to find</span><span class="stat-value">25s</span><span class="stat-note">range 6.5 to 114 seconds</span></div>
  <div class="stat"><span class="stat-label">Median wrong taps</span><span class="stat-value">4</span><span class="stat-note">before reaching Details, range 0 to 39</span></div>
</div>

The pattern was hard to ignore: people weren't necessarily struggling to understand the screen. They were interacting with it in ways the interface didn't support.

So it wasn't just me. More importantly, the problem wasn't that people couldn't find their details. It was that the interface wasn't meeting their expectations.

One participant summed up the experience rather well:

> "Not sure what just happened."

They had tapped the card twice, then tried Show PIN, then Freeze.

I also asked participants where they initially expected to find their card number. Ten of the 18 who answered said they expected to get it by tapping the card itself.

Their actions and their explanations were telling the same story.

![Key numbers: 100% found their details, 14% tapped Details first, 55% tapped the card image first, 64% tapped the card at some point, 25 seconds median time to find, 4 median wrong taps](../assets/images/grey-card-details-03-key-numbers.jpg "20 finished sessions, 7 to 8 November 2026. Ranges are 95% confidence intervals.")

## What other card apps do

I wanted to know whether Grey's approach was unusual, so I looked at 20 other card and banking apps using Mobbin.

Interestingly, Grey's general layout wasn't the problem. A card with actions positioned underneath it is quite common.

What caught my attention were two differences.

First, how the action was labelled. Most of the apps used clearer descriptions like "View card details" or "Reveal card details". Grey's shorter "Details" label, paired with an information icon, didn't communicate quite as much.

Second, where the interaction happened. Seven apps allowed users to reveal their details directly on the card.

That was particularly interesting because it aligned with what most of my participants had already tried to do.

![Screens from X, Neo and Revolut showing card details on the card face, and from N26, Lloyds, Wise and Monzo using a named button below the card](../assets/images/grey-card-details-04-industry-check.jpg "App screens © their owners: X Corp, Neo Financial, Revolut, N26, Lloyds Banking Group, Wise and Monzo. Used here for commentary. Captured via Mobbin.")

## A suggested fix, not tested

At this point, I had a fairly clear direction. I wasn't looking to reinvent Grey's Cards screen. I wanted to make the existing interaction feel more obvious.

I'd explore two small changes:

1. **Make the card interactive.** Allow users to tap the card, or a "Show details" pill on it, to reveal their card number, expiry date and CVV, with convenient copy actions.
2. **Make the button clearer.** Replace "Details" with "Card details" and use an eye icon to communicate the action more directly.

Of course, any existing security checks should remain in place before sensitive card information is revealed.

These are proposed improvements, not validated solutions. I'd want to prototype them, test them with users and ideally run an A/B test before claiming they've improved anything.

![Grey's Cards screen today next to two concept screens: the card has a Show details pill and the button reads Card details with an eye icon; tapping either shows the number, expiry and CVV on the card with copy buttons](../assets/images/grey-card-details-05-suggested-fix.jpg "Today, and the concept in two states. The concept is untested.")

## What this study can't tell you

There are a few limitations worth acknowledging.

- The test used a copy of Grey's interface rather than the actual app. Some inactive buttons may have shortened participants' search paths.
- Only five participants were existing Grey users, and none had a Grey card.
- The sample was narrow: all participants used phones, most were aged 18–24, and most were in Nigeria.
- Twenty completed sessions are useful for identifying patterns, but not enough to claim precise population-wide behaviour.

The findings are a starting point for further investigation, not the final word on how Grey users behave.

## What I took from it

This started with a small frustration while trying to make an online payment. It could easily have ended with me redesigning the screen based on what I personally thought would work.

But I wanted to know whether the problem existed beyond my own experience.

One thing I particularly appreciated about this exercise was having to define what would prove me wrong before collecting responses. It forced me to separate what I suspected from what the evidence actually showed.

It also reminded me that asking people whether something is easy doesn't always tell the full story. Sometimes, watching where they tap tells you much more.

And perhaps that's the bigger takeaway: good interface design isn't just about making things look understandable. It's about making the next action feel obvious.

For the redesign and A/B test of Grey's send flow, see [the Grey case study](../work/grey.html).
