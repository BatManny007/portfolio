---
title: I couldn't find my card number in Grey, so I tested it with 20 people
date: 2026-11-09
summary: A findability test of Grey's Cards screen. Everyone found their card details, but only 14% tapped Details first. 55% tapped the card, which does nothing.
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

I was paying for something online, and the checkout asked for my Grey card's number, expiry date and CVV. I opened Grey, went to Cards, and got stuck. I tapped the card and nothing happened. It took me longer than it should have to find a button called "Details".

Before redesigning anything, I wanted to know whether other people got stuck too, and why.

![Grey's Cards screen, annotated: the card shows •••• 9733 but does nothing when tapped, the details sit behind a Details button with an i icon, and Show PIN sits beside it](../assets/images/grey-card-details-01-cards-screen-annotated.jpg "Grey's Cards screen today, with the three things I suspected.")

## A test that could prove me wrong

I built a clickable copy of Grey's Cards screen from screenshots of the live app, without changing anything. Tapping the card does nothing, as in the real app. Tapping Details opens a new screen with the card details.

Each person got one task: *"You're paying for something online and the checkout asks for your Grey card's number, expiry date and CVV. Find them in the app."*

Before anyone took part, I wrote down four possible reasons for the problem and what result would point to each one, and committed that plan to git so the date was on record. I also wrote down what would prove me wrong: if 60% or more tapped Details first and the average ease rating was 5.5 out of 7 or higher, the problem was just me.

The main measure was each person's **first tap** on the Cards screen. In first-click research, people whose first click is right are about twice as likely to finish the task as people whose first click is wrong. Where people tap first also shows what they expected to find there.

## Everyone got there. Almost nobody went straight there.

All 20 people who finished found their card details. Only 3 of the 22 people who tapped something on the Cards screen went to Details first. 12 tapped the card image first, and over the whole session, 16 of 25 people tapped the card at some point, even though it does nothing.

<div class="stat-grid">
  <div class="stat"><span class="stat-label">Tapped Details first</span><span class="stat-value">14%</span><span class="stat-note">3 of 22 · 95% range 5 to 33%</span></div>
  <div class="stat"><span class="stat-label">Tapped the card first</span><span class="stat-value">55%</span><span class="stat-note">12 of 22 · 95% range 35 to 73%</span></div>
  <div class="stat"><span class="stat-label">Median time to find</span><span class="stat-value">25s</span><span class="stat-note">range 6.5 to 114 seconds</span></div>
  <div class="stat"><span class="stat-label">Median wrong taps</span><span class="stat-value">4</span><span class="stat-note">before reaching Details, range 0 to 39</span></div>
</div>

So it wasn't just me. And the problem wasn't failure, it was the route: most people went to the card, tapped it, nothing happened, and then they hunted around.

> "Not sure what just happened"
> -- Participant, after tapping the card twice, then Show PIN, then Freeze

When I asked where they first expected to find the card number, 10 of 18 said "by tapping the card itself". What people said matched what they did.

Against the rules I set beforehand:

- **"It's just me" was ruled out.** 14% tapped Details first, against the 60% bar, and the average ease was 5.4, just under the 5.5 bar.
- **"People expect the card itself to reveal its details" was supported.** The card was the most common first tap, four times as common as Details.
- **Show PIN was the second most common detour.** 10 of 25 people tried it on the way.

The ease ratings were kinder than what people did. Two people took over 100 seconds and made 18 or more wrong taps, then still rated the task 7 out of 7. If I'd only asked people how easy it was, I'd have missed the problem.

![Key numbers: 100% found their details, 14% tapped Details first, 55% tapped the card image first, 64% tapped the card at some point, 25 seconds median time to find, 4 median wrong taps](../assets/images/grey-card-details-03-key-numbers.jpg "20 finished sessions, 7 to 8 November 2026. Ranges are 95% confidence intervals.")

## What other card apps do

Next I looked at how 20 other card and banking apps handle this, using Mobbin. Grey's layout, a card with buttons below it, is common, so the layout isn't the problem. Two things are different:

- **The label.** Other apps say what you'll get: "View card details", "Reveal card details", "Card details". Only N26 uses a bare "Details", and it pairs it with a card icon. None of the apps I looked at uses an "i".
- **The card.** Seven apps show the details on the card itself. X, Venmo and Brex put the control right on the card, which is where most of my participants tapped first.

![Screens from X, Neo and Revolut showing card details on the card face, and from N26, Lloyds, Wise and Monzo using a named button below the card](../assets/images/grey-card-details-04-industry-check.jpg "App screens © their owners: X Corp, Neo Financial, Revolut, N26, Lloyds Banking Group, Wise and Monzo. Used here for commentary. Captured via Mobbin.")

## A suggested fix, not tested

I'm not claiming this works. But the data and the industry check point at the same two changes, and both are small.

1. **Make the card respond.** Tapping the card, or a "Show details" pill on it, shows the number, expiry and CVV in place, with copy buttons for checkout.
2. **Name the button for what it shows.** Change "Details" with an "i" to "Card details" with an eye icon.

Any security check Grey uses today would still come before the details appear. If someone tests this, my study is the baseline: 14% went to Details first, the median time to find was 25 seconds, and the median was 4 wrong taps.

![Grey's Cards screen today next to two concept screens: the card has a Show details pill and the button reads Card details with an eye icon; tapping either shows the number, expiry and CVV on the card with copy buttons](../assets/images/grey-card-details-05-suggested-fix.jpg "Today, and the concept in two states. The concept is untested.")

## What this study can't tell you

- **It used a copy of the app, not the real thing.** Other buttons said "isn't part of this test", which may have shortened some searches.
- **Few participants were Grey users.** I aimed for at least 8. Only 5 took part, all occasional users, and nobody in the sample had a Grey card. The results mostly describe people seeing this screen for the first time.
- **The sample was narrow:** all on phones, mostly aged 18 to 24 and in Nigeria.
- **20 people show patterns, not precise rates.** Even so, the top of the range for "tapped Details first" (33%) is well below the 60% bar.

## What I took from it

My own frustration was the starting point, but I didn't let it be the evidence. Writing down beforehand what would prove me wrong is what makes the result worth reading. The other lesson is that asking how easy something was isn't enough. Watching where people actually tap is what showed the problem.

For the redesign and A/B test of Grey's send flow, see [the Grey case study](../work/grey.html).
