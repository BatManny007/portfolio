/**
 * i18n.js — Internationalization (EN / FR / ES / DE / JA) system for Batmanny Portfolio
 */

(function () {
  const STORAGE_KEY = 'batmanny_lang';

  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'de', 'ja'];

  const FLAGS = {
    en: '🇬🇧',
    fr: '🇫🇷',
    es: '🇪🇸',
    de: '🇩🇪',
    ja: '🇯🇵'
  };

  const translations = {
    en: {
      // General / Nav
      'nav.home': 'HOME',
      'nav.work': 'WORK',
      'nav.about': 'ABOUT',
      'nav.contact': 'CONTACT',

      // Loader
      'loader.loading': 'Loading',
      'loader.start': 'Start',

      // Hero
      'hero.headline': 'Designing products people trust with their money, time, and attention.',
      'hero.sub': 'Product Designer with 4+ years of experience across Web3, Gaming, and AI.',
      'hero.stat': 'Redesigned Razor DAO onboarding, contributing to <strong>100K+ users in 72 hours</strong>.',
      'hero.btn.work': 'View Work',
      'hero.btn.contact': 'Send the Bat-Signal',

      // Work section & Filter tabs
      'filter.all': 'All',
      'filter.caseStudy': 'Case Study',
      'filter.vibeCoded': 'Vibe-Coded',
      'filter.sideQuests': 'Side Quests',
      'filter.brandVisual': 'Brand & Visual',
      'filter.empty': 'NO PROJECTS IN THIS CATEGORY YET',

      // Project Cards
      'card.razor.title': 'Redesigned onboarding, contributing to 100K+ users in 72 hours',
      'card.razor.desc': 'Reduced friction during wallet creation and built a scalable design system.',
      'card.elite.title': 'Onboarding That Feels Like a Conversation, Not a Form',
      'card.elite.desc': 'A 14-screen onboarding and payoff flow designed to feel like a conversation, making a complex AI job-matching experience clearer and more trustworthy.',
      'card.pendax.title': 'Making Crypto-to-Naira Transfers Feel as Safe as Banking',
      'card.pendax.desc': 'A mobile-first fintech flow that makes crypto-to-bank transfers feel familiar, secure, and easy to understand for everyday users.',
      'card.cosmic.title': 'A Game UI Built to Stay Readable at Full Throttle',
      'card.cosmic.desc': 'A game UI case study focused on onboarding, scoring, and a lighter interface that stays readable and responsive while the action is moving.',

      // About Section
      'about.heading': 'ABOUT ME',
      'about.p1': 'I’m Emmanuel, a product designer who likes to get close to the work: sketching the idea, shaping the interface, and sometimes building the thing myself.',
      'about.p2': 'I enjoy products that have a bit of character. The kind where the empty states, buttons, motion, and tiny details all feel like someone actually cared. That is the part of design I keep coming back to: making useful things feel clear, alive, and easy to trust.',
      'about.p3': 'Most of my work sits around product design, UI systems, visual design, and front-end implementation. I have worked across Web3, fintech, games, dashboards, and experimental tools, usually in places where the product needs to feel sharp without becoming confusing.',
      'about.p4': 'I also make illustrations and brand visuals, so I think a lot about mood and personality, not just screens. Sometimes the right visual language can explain a product faster than another paragraph ever could.',
      'about.p5': 'I use tools like Figma, HTML, CSS, JavaScript, Codex, and Claude Code to move from rough idea to working prototype quickly. I like teams that care about taste, clarity, and shipping work that feels considered.',

      // Contact Section
      'contact.heading': 'CONTACT',
      'contact.lead': 'If you’re building something ambitious (or you want your product to feel like it has a pulse), let’s talk. I’m open to product design, interaction design, and design-engineering collaborations.',
      'contact.btn.message': 'MESSAGE ME',
      'contact.btn.copy': 'COPY EMAIL',
      'contact.quick': 'QUICK MESSAGE',
      'contact.label.name': 'NAME',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MESSAGE',
      'contact.ph.name': 'Your name',
      'contact.ph.email': 'you@email.com',
      'contact.ph.message': 'What are we building?',
      'contact.btn.send': 'SEND',
      'contact.btn.sending': 'SENDING...',
      'contact.btn.reset': 'RESET',
      'toast.emailCopied': 'EMAIL COPIED',
      'toast.copyFailed': 'COPY FAILED',
      'toast.fillAll': 'FILL ALL FIELDS',
      'toast.openingMail': 'OPENING EMAIL APP',
      'toast.mailFailed': 'EMAIL APP FAILED',

      // Shared Case Study UI
      'cs.back': 'Back',
      'cs.backWork': 'Back to work',
      'cs.backTop': 'Back to top',
      'cs.home': 'Home',
      'cs.moreWork': 'More work',
      'cs.footer': 'Built as part of the Batmanny portfolio.',

      // Razor Wallet case study
      'razor.eyebrow': 'Case Study · Razor Wallet',
      'razor.kicker': 'Desktop-first onboarding for a browser wallet',
      'razor.title': 'Razor Wallet',
      'razor.subhead': 'Designing a Web3 onboarding flow that does not lose the user before they begin',
      'razor.lede': 'Razor Wallet is a browser extension wallet for the Movement blockchain. The redesign focused on reducing friction without softening the security steps that make a non-custodial wallet trustworthy.',
      'razor.meta.product': 'Product',
      'razor.meta.productValue': 'Browser extension wallet for Movement',
      'razor.meta.role': 'Role',
      'razor.meta.roleValue': 'Product design, UX writing, interaction design',
      'razor.meta.scope': 'Scope',
      'razor.meta.scopeValue': 'Splash to wallet creation confirmation',
      'razor.meta.outcome': 'Outcome',
      'razor.meta.outcomeValue': '1,000 users in 24 hours, 50,000 in 72 hours',
      'razor.overview.title': 'Overview',
      'razor.overview.p1': 'Web3 wallets often ask people to make three high-stakes decisions before they have a real sense of the product: accept terms, create a password, and store a recovery phrase. The original Razor Wallet flow had more steps than it needed, which gave users more chances to drop off.',
      'razor.overview.p2': 'The goal was to cut the flow down, keep every security requirement, and make each screen feel clear instead of intimidating.',
      'razor.overview.callout': 'Security steps do not have to feel like obstacles. The harder part is explaining why they matter at the exact moment the user needs that context.',
      'razor.problem.title': 'The Problem',
      'razor.problem.p1': 'The standard wallet onboarding pattern asks too much too early. Users are expected to agree to terms, create a password they cannot recover, and write down a 12-word phrase that controls access to their funds before they have had a single meaningful interaction with the product.',
      'razor.problem.p2': 'For a devnet launch aimed at developers and early adopters, that means every abandoned sign-up is a lost signal. For a mainnet launch aimed at general users, it becomes a lost customer.',
      'razor.problem.briefTitle': 'The brief',
      'razor.problem.briefBody': 'Cut the flow down, keep every security requirement, and make users feel informed rather than overwhelmed at each step.',
      'razor.argument.title': 'The Central Argument',
      'razor.argument.p1': 'Most wallets bury the reason for each step in a help article no one reads. This redesign puts the explanation beside the action, on the same screen, at the moment the user needs it.',
      'razor.argument.callout': 'The question is not whether to include security steps. The question is how to frame them so users understand why they matter.',
      'razor.flow.title': 'The Flow',
      'razor.flow.screen': 'Screen',
      'razor.flow.purpose': 'Purpose',
      'razor.flow.r1': '1. Splash - Terms of Service',
      'razor.flow.r1p': 'Entry gate with legal acknowledgement',
      'razor.flow.r2': '2. Welcome - Wallet Choice',
      'razor.flow.r2p': 'Route returning vs new users',
      'razor.flow.r3': '3. Create a Password',
      'razor.flow.r3p': 'Security layer 1 - local access',
      'razor.flow.r4': '4. Secret Recovery Phrase',
      'razor.flow.r4p': 'Security layer 2 - wallet ownership',
      'razor.flow.r5': '5. Congratulations',
      'razor.flow.r5p': 'Confirmation and entry into the product',
      'razor.screening.title': 'Screen By Screen',
      'razor.s1.title': 'Screen 1 - Splash / Terms of Service',
      'razor.s1.p1': 'The first screen establishes the product identity and gates entry behind a single consent action. It is almost entirely negative space: brand, one sentence, one checkbox, one CTA.',
      'razor.s1.p2': 'That is deliberate friction. The checkbox forces an active acknowledgement instead of a passive scroll-past, but nothing else competes for attention.',
      'razor.s1.noteTitle': 'What it avoids',
      'razor.s1.noteBody': 'A full-screen terms modal, a wall of legal text, or multiple actions on the same screen.',
      'razor.s2.title': 'Screen 2 - Welcome / Wallet Choice',
      'razor.s2.p1': 'The copy matters here because the buttons are really user self-identification statements. A returning user should know instantly which path is theirs; a new user should feel clearly invited to continue.',
      'razor.s2.p2': 'The main weakness in the current draft is tone. The screen works, but the body copy leans too far into marketing language for a flow that is otherwise plain and functional.',
      'razor.s2.noteTitle': 'Better body copy',
      'razor.s2.noteBody': 'Razor Wallet lets you store, send, and manage assets on Movement Chain.',
      'razor.s3.title': 'Screen 3 - Create a Password',
      'razor.s3.p1': 'This is the first moment where a user might pause and ask why the product needs more from them. The layout answers that question without forcing them into a separate help screen.',
      'razor.s3.p2': 'The left panel handles the action. The right panel handles the explanation. That separation keeps the screen calm, readable, and easy to scan.',
      'razor.s3.noteTitle': 'What it avoids',
      'razor.s3.noteBody': 'A modal, a separate help screen, or tooltip-only explanations that do not work well on mobile.',
      'razor.s4.title': 'Screen 4 - Secret Recovery Phrase',
      'razor.s4.p1': 'This is the most consequential screen in the entire flow. The design has to avoid both extremes: warning overload and under-explaining the risk.',
      'razor.s4.p2': 'The structure returns to the same two-panel layout, which gives the user visual familiarity after Screen 3. The left panel handles the phrase. The right panel answers the actual questions people have in the moment.',
      'razor.s4.noteTitle': 'Security note',
      'razor.s4.noteBody': 'The support line should make phishing risk explicit. Razor support will never ask for your recovery phrase.',
      'razor.s5.title': 'Screen 5 - Congratulations',
      'razor.s5.p1': 'The final screen closes the loop, confirms success, and gives the user one clear way forward. The Razor logo appears here as a reward signal after the effort of the setup flow.',
      'razor.s5.p2': 'The CTA should stay final and simple. Done works better than any eager onboarding language because it ends the chapter instead of opening a new one.',
      'razor.s5.noteTitle': 'What this screen avoids',
      'razor.s5.noteBody': 'Upsells, notification prompts, social sharing prompts, or any secondary action.',
      'razor.work.title': 'What Made This Redesign Work',
      'razor.work.1': 'Two-panel education',
      'razor.work.1body': 'Every security-heavy screen pairs action on one side with explanation on the other. Users who want context get it; users who do not are not slowed down.',
      'razor.work.2': 'Friction with purpose',
      'razor.work.2body': 'The legal acknowledgement and the hidden recovery phrase are deliberate friction. Everything else is reduced.',
      'razor.work.3': 'Commitment copy',
      'razor.work.3body': '"I have saved my secret phrase" turns a button into an affirmation. That changes the tone of the action.',
      'razor.work.4': 'Visual consistency',
      'razor.work.4body': 'Amber becomes the system language for primary actions, so the user learns the pattern once and keeps moving.',
      'razor.critiques.title': 'Honest Critiques',
      'razor.critiques.1': 'Screen 2 body copy still sounds too much like marketing and should be revised to something more functional.',
      'razor.critiques.2': 'The flow needs a progress indicator. A simple step counter would reduce abandonment anxiety.',
      'razor.critiques.3': 'The two-panel layout is elegant on desktop, but the right panel will need a mobile treatment.',
      'razor.critiques.4': 'The "Copy to clipboard" action on Screen 4 is risky and could probably be removed entirely.',
      'razor.outcome.title': 'Outcome',
      'razor.outcome.p1': 'The redesigned flow launched on devnet.',
      'razor.outcome.1': '1,000 users onboarded in the first 24 hours',
      'razor.outcome.2': '50,000 users onboarded in 72 hours',
      'razor.outcome.p2': 'The result was a five-minute reduction in average onboarding time without removing any of the security steps that make a non-custodial wallet trustworthy.',
      'razor.outcome.p3': 'Devnet users are not casual. They have seen enough wallets to recognise bad onboarding quickly, which makes the numbers here meaningful.',
      'razor.takeaway.title': 'Key Takeaway',
      'razor.takeaway.p1': 'Security and simplicity are not opposites in Web3 onboarding. The better question is whether you explain the why at the right moment, on the right screen, in plain language.',
      'razor.takeaway.callout': 'This flow answers the question where it is asked, instead of pushing the user off to a help article they will never open.',
      'razor.footer': 'UX Case Study · Razor Wallet · Browser Extension Onboarding · Solo Design · 2026',
      'razor.bonus.title': 'Bonus Graphics',
      'razor.bonus.p': 'A few extra mascot explorations from the Razor world, kept here as a small visual appendix after the case study.',
      'razor.bonus.1': 'Bonus 01 · Razor Wallet promo art',
      'razor.bonus.2': 'Bonus 02 · Seasonal Razor DAO art',
      'razor.bonus.3': 'Bonus 03 · Razor DAO new year art',

      // Elite Global case study
      'elite.eyebrow': 'Case Study · Elite Global AI',
      'elite.kicker': 'Desktop-first, responsive mobile',
      'elite.title': 'Elite Global AI',
      'elite.subhead': 'Designing an onboarding flow that feels like a conversation',
      'elite.lede': 'Elite Global AI is a 14-screen onboarding and payoff experience for an AI job-matching product. The flow collects only the minimum data needed to make the matching feel intelligent, personal, and trustworthy while still working cleanly on desktop and mobile.',
      'elite.meta.product': 'Product',
      'elite.meta.productValue': 'Elite Global AI, a conversational onboarding flow for AI-powered job matching',
      'elite.meta.scope': 'Scope',
      'elite.meta.scopeValue': '10 onboarding steps plus a 4-screen payoff sequence',
      'elite.meta.platform': 'Platform',
      'elite.meta.platformValue': 'Desktop-first with responsive mobile behaviour',
      'elite.meta.focus': 'Focus',
      'elite.meta.focusValue': 'Conversational UX, sequencing, trust, and information architecture',
      'elite.01.title': '01 — Overview',
      'elite.01.p1': 'The product consists of 14 screens in total: 10 onboarding screens and 4 payoff screens. The opening set gathers the minimum viable profile data; the final set shows the AI processing that data, returning a match, and closing the loop with job results.',
      'elite.02.title': '02 — The Brief',
      'elite.02.p1': 'Elite Global AI was designed to respond to a familiar problem: job applications often feel fragmented, repetitive, and disconnected from the actual value the platform is trying to deliver. The matching system needed candidate information, but the interface had to make that data collection feel conversational rather than burdensome.',
      'elite.02.p2': 'The brief was to build a flow that feels like a recruiter-led intake: ask the right questions in the right order, minimise friction, keep the user oriented, and make sure the final recommendation feels earned.',
      'elite.02.callout': 'The design constraints were clear: desktop-first, responsive on mobile, one question at a time, skip available throughout, and only the minimum data needed for useful matching.',
      'elite.03.title': '03 — The Core Design Decision: Conversational UI',
      'elite.03.p1': 'The strongest decision in the flow is the choice to present it as a conversation instead of a traditional form. The prompt language, the spacing, and the progressive reveal of fields all work together to make the experience feel guided.',
      'elite.03.quote': 'The interface does not ask the user to fill a form. It asks them to answer a sequence of simple questions, one at a time, like they are talking to a recruiter who already knows what matters.',
      'elite.03.p2': 'That shift matters. A form feels transactional. A conversation feels supported. For first-time users, especially in a hiring context, that difference determines whether they keep going.',
      'elite.04.title': '04 — The Sequencing Strategy',
      'elite.04.p1': 'The sequencing uses a simple foot-in-the-door structure. The early screens ask for easy, low-friction information before the flow moves into more personal and more valuable data.',
      'elite.04.phaseTitle': 'How the flow is staged',
      'elite.04.phase1': 'Identity',
      'elite.04.phase1body': 'Steps 1 to 2 establish who the user is and start the relationship with very low effort.',
      'elite.04.phase2': 'Preferences',
      'elite.04.phase2body': 'Steps 3 to 7 gather the user’s career context, working preference, industry, and employment type.',
      'elite.04.phase3': 'Extras',
      'elite.04.phase3body': 'Steps 8 to 10 collect the more specific details that help the AI return a sharper match.',
      'elite.04.note': 'The step indicator and the Skip option work together here. Progress is visible, but the user never feels trapped.',
      'elite.05.title': '05 — Screen-by-Screen Analysis',
      'elite.05.s1.title': 'Screen 1 — Name Input',
      'elite.05.s1.prompt': 'The prompt: "Let\'s start with your name"',
      'elite.05.s1.p1': 'The first screen does exactly what a good opener should do: it feels easy. Asking for a name is low-friction, familiar, and personal enough to feel human without becoming intrusive.',
      'elite.05.s1.p2': 'The name field also serves a second purpose: it establishes the AI’s tone. The screen is not cold or corporate; it is welcoming, direct, and quick to answer.',
      'elite.05.s2.title': 'Screen 2 — Document Upload (Empty State)',
      'elite.05.s2.prompt': 'The prompt: "Upload your CV and certificate"',
      'elite.05.s2.p1': 'The empty state turns a potentially dull action into something understandable at a glance. Two dashed upload zones communicate that the screen expects separate files and that both are equally important.',
      'elite.05.s2.p2': 'The Add another file option gives the user a clear sense that the interface can scale beyond the first upload without making the initial state feel crowded.',
      'elite.05.s3.title': 'Screen 3 — Document Upload (In-Progress State)',
      'elite.05.s3.prompt': 'The behaviour: CV upload in progress with a visible percentage and time remaining',
      'elite.05.s3.p1': 'This state is important because it removes uncertainty. The user can see that the platform is processing the file, how far along it is, and that the wait is finite.',
      'elite.05.s3.p2': 'Small progress cues like this are trust builders. They tell the user the system is active rather than frozen.',
      'elite.05.s4.title': 'Screen 4 — Document Upload (Completed State)',
      'elite.05.s4.prompt': 'The state: both documents now appear as completed items',
      'elite.05.s4.p1': 'Completion state matters just as much as loading state. Listing the uploaded files with delete icons makes the system feel editable instead of permanent.',
      'elite.05.s4.p2': 'The user sees evidence that the platform has accepted their input, and that the flow is advancing.',
      'elite.05.s5.title': 'Screen 5 — Experience Level',
      'elite.05.s5.prompt': 'The prompt: "How many years of experience do you have?"',
      'elite.05.s5.p1': 'Radio options with supporting descriptions make the decision easier. The user is not left to interpret vague labels; each option clarifies what kind of candidate it represents.',
      'elite.05.s5.p2': 'The screen keeps the cognitive load low while still gathering useful screening data for the matching engine.',
      'elite.05.s6.title': 'Screen 6 — Preferred Working Condition',
      'elite.05.s6.prompt': 'The prompt: "Where would you like to work?"',
      'elite.05.s6.p1': 'Remote and Relocate are positioned as clear, mutually understandable options. The wording stays practical, not vague, which is important in a hiring flow.',
      'elite.05.s6.p2': 'If I were iterating this further, I would likely add a hybrid option, but the current structure still communicates the product’s intent well.',
      'elite.05.s7.title': 'Screen 7 — Preferred Industry',
      'elite.05.s7.prompt': 'The prompt: "Which industries are you open to?"',
      'elite.05.s7.p1': 'Multiple choice is the right pattern here because the user may be open to more than one career path. The screen makes that flexibility obvious without feeling messy.',
      'elite.05.s7.p2': 'The wording keeps the flow aspirational rather than restrictive.',
      'elite.05.s8.title': 'Screen 8 — Employment Type',
      'elite.05.s8.prompt': 'The prompt: "What kind of employment are you looking for?"',
      'elite.05.s8.p1': 'This screen follows the same multi-select logic as the industry screen, which helps the flow feel predictable. Consistency here reduces friction.',
      'elite.05.s8.p2': 'The user understands that the system is learning preferences, not forcing a single answer.',
      'elite.05.s9.title': 'Screen 9 — Salary Expectations',
      'elite.05.s9.prompt': 'The prompt: "What salary range are you expecting?"',
      'elite.05.s9.p1': 'Salary is one of the more sensitive inputs in the flow, so the screen needs to feel calm and unpressured. A simple numeric input and a short helper line do that job well.',
      'elite.05.s9.p2': 'The fact that the question appears late in the sequence also helps. By this point, the user has already received value and is more likely to answer honestly.',
      'elite.05.s10.title': 'Screen 10 — Professional Links',
      'elite.05.s10.prompt': 'The prompt: "You can share important links here"',
      'elite.05.s10.p1': 'This is the least demanding screen in the flow, and that is intentional. After the salary question, ending on optional inputs gives the user a sense of relief.',
      'elite.05.s10.p2': 'LinkedIn, a personal website or portfolio, and GitHub cover the three most useful public proof points without making the user feel over-asked.',
      'elite.06.title': '06 — Interaction Patterns Used Across the Flow',
      'elite.06.p1': 'Across the 10 onboarding screens, the design uses a small set of interaction patterns and matches each one to the kind of information being requested. That discipline is one of the best things about the flow.',
      'elite.06.text': 'Text input',
      'elite.06.textBody': 'Name and links use text input because they are open-ended and familiar.',
      'elite.06.upload': 'File upload with states',
      'elite.06.uploadBody': 'The document flow clearly separates empty, active, and completed states.',
      'elite.06.radio': 'Radio buttons with descriptions',
      'elite.06.radioBody': 'Experience level is mutually exclusive, so radio buttons are the right fit.',
      'elite.06.checkbox': 'Checkboxes with descriptions',
      'elite.06.checkboxBody': 'Working condition and industry allow more than one answer when appropriate.',
      'elite.06.progress': 'Progress bar',
      'elite.06.progressBody': 'The payoff sequence uses loading states to make the AI\'s work visible.',
      'elite.06.link': 'Link input',
      'elite.06.linkBody': 'Professional links are structured open-ended inputs, so text fields are enough.',
      'elite.06.note': 'The whitespace is deliberate. Each step asks one question, so the layout leaves room for the interaction to breathe.',
      'elite.07.title': '07 — Step Indicator & Skip: Balancing Commitment and Autonomy',
      'elite.07.p1': 'The step indicator and Skip link appear on every screen, and that consistency does a lot of emotional work. One tells the user how far they have come; the other tells them they still have control.',
      'elite.07.p2': 'The step indicator communicates progression without making the user feel overwhelmed, and the Skip link signals that the user is not trapped. That combination is what keeps the flow feeling collaborative instead of coercive.',
      'elite.08.title': '08 — Visual Design Language',
      'elite.08.p1': 'The visual language is intentionally restrained. The screens rely on soft surfaces, light blue input fields, rounded controls, and a calm background so that the user stays focused on answering the current question.',
      'elite.08.background': 'Background',
      'elite.08.backgroundDecision': 'Soft light grey',
      'elite.08.backgroundRationale': 'Calm, softer than pure white, easy on the eyes',
      'elite.08.inputs': 'Inputs',
      'elite.08.inputsDecision': 'Light blue tint with no hard border',
      'elite.08.inputsRationale': 'Modern and calm',
      'elite.08.prompt': 'Prompt',
      'elite.08.promptDecision': 'White chat-style bubble',
      'elite.08.promptRationale': 'Reinforces the conversational framing',
      'elite.08.cta': 'Primary CTA',
      'elite.08.ctaDecision': 'Deep blue pill button',
      'elite.08.ctaRationale': 'Clear, repeatable, easy to find',
      'elite.08.progress': 'Progress',
      'elite.08.progressDecision': 'Blue dot indicator with active pill',
      'elite.08.progressRationale': 'Clear but unobtrusive',
      'elite.08.skip': 'Skip',
      'elite.08.skipDecision': 'Top-right text link',
      'elite.08.skipRationale': 'Available without being over-promoted',
      'elite.08.note': 'The whitespace is deliberate. Each step asks one question, so the layout leaves room for the interaction to breathe.',
      'elite.09.title': '09 — The Payoff Sequence: Closing the Loop',
      'elite.09.p1': 'Instead of ending with a generic confirmation screen, the flow gives the user a four-screen payoff sequence. That makes the AI feel active and makes the value of the onboarding visible.',
      'elite.09.s11.title': 'Screen 11 — Analyzing Your Data',
      'elite.09.s11.p1': 'The first loading state makes the AI visible. The user can see that the system is doing something with their input rather than disappearing into a blank wait state.',
      'elite.09.s11.p2': 'The copy also sets expectations. If the process takes a little while, the screen has already told the user why.',
      'elite.09.s12.title': 'Screen 12 — Finding Companies That Match Your Profile',
      'elite.09.s12.p1': 'This second loading state moves the story forward. The language shifts from analysis to action, which makes the process feel like the AI is actively working on the user’s behalf.',
      'elite.09.s12.p2': 'Two distinct loading states create a stronger sense of momentum than a single spinner ever could.',
      'elite.09.s13.title': 'Screen 13 — Match Result & Optimisation Prompt',
      'elite.09.s13.p1': 'The match result is the trust peak of the whole flow. It confirms value first, then introduces a secondary action: optimisation.',
      'elite.09.s13.p2': 'Because the user has already been shown a concrete result, the suggestion to improve the CV and cover letter lands as helpful advice rather than a sales pitch.',
      'elite.09.s14.title': 'Screen 14 — Job Results',
      'elite.09.s14.p1': 'The final screen closes the loop. It does not just list jobs; it frames them as roles the user has a high chance of landing, which makes the result feel personalised and credible.',
      'elite.09.s14.p2': 'The job list is concise, readable, and focused on the facts the user needs to make a decision.',
      'elite.10.title': '10 — What I Would Do Differently',
      'elite.10.1': 'Add a hybrid working option alongside Remote and Relocate.',
      'elite.10.2': 'Standardise the multi-select helper copy so every similar screen uses the same language.',
      'elite.10.3': 'Consider a salary range input instead of a single figure to reduce pressure on the user.',
      'elite.11.title': '11 — Conclusion',
      'elite.11.p1': 'What makes Elite Global AI worth studying is the way the whole flow stays coherent. Every screen reinforces the same idea: the AI is working for the user, not the other way around.',
      'elite.11.p2': 'The conversational prompts make the intake feel human. The sequencing earns trust before asking for sensitive data. The loading states make the system visible. The match result delivers a believable outcome. And the final job list closes the loop on the promise made at the start.',
      'elite.11.p3': 'Together, those decisions turn a 10-step form into a guided introduction to a smarter job search experience.',
      'elite.footer': 'UI/UX Case Study · Elite Global AI · Full Onboarding & Payoff Flow · Solo Design · 2025'
    },

    fr: {
      // General / Nav
      'nav.home': 'ACCUEIL',
      'nav.work': 'PROJETS',
      'nav.about': 'À PROPOS',
      'nav.contact': 'CONTACT',

      // Loader
      'loader.loading': 'Chargement',
      'loader.start': 'Démarrer',

      // Hero
      'hero.headline': 'Conception de produits auxquels les gens confient leur argent, leur temps et leur attention.',
      'hero.sub': 'Product Designer avec plus de 4 ans d’expérience dans le Web3, le jeu vidéo et l’IA.',
      'hero.stat': 'Refonte de l’onboarding de Razor DAO, contribuant à <strong>plus de 100K utilisateurs en 72h</strong>.',
      'hero.btn.work': 'Voir mes projets',
      'hero.btn.contact': 'Envoyer le Bat-Signal',

      // Work section & Filter tabs
      'filter.all': 'Tous',
      'filter.caseStudy': 'Étude de cas',
      'filter.vibeCoded': 'Code Vibe',
      'filter.sideQuests': 'Projets annexes',
      'filter.brandVisual': 'Marque & Visuel',
      'filter.empty': 'AUCUN PROJET DANS CETTE CATÉGORIE POUR LE MOMENT',

      // Project Cards
      'card.razor.title': 'Refonte de l’onboarding, contribuant à +100K utilisateurs en 72 heures',
      'card.razor.desc': 'Friction réduite lors de la création de portefeuille et création d’un système de design évolutif.',
      'card.elite.title': 'Un onboarding perçu comme une conversation, pas comme un formulaire',
      'card.elite.desc': 'Un parcours d’intégration de 14 écrans conçu comme un dialogue, rendant l’expérience de jumelage d’emplois par IA claire et digne de confiance.',
      'card.pendax.title': 'Sécuriser les transferts Crypto vers Naira comme des opérations bancaires',
      'card.pendax.desc': 'Un flux fintech mobile qui rend les transferts crypto-vers-banque familiers, sécurisés et intuitifs pour tous.',
      'card.cosmic.title': 'Une interface de jeu lisible même en plein cœur de l’action',
      'card.cosmic.desc': 'Une étude de cas d’interface de jeu axée sur l’intégration, le score et une UI fluide qui reste lisible à toute vitesse.',

      // About Section
      'about.heading': 'À PROPOS DE MOI',
      'about.p1': 'Je m’appelle Emmanuel, un product designer qui aime s’investir pleinement dans le travail : esquisser l’idée, façonner l’interface et parfois développer le produit moi-même.',
      'about.p2': 'J’apprécie les produits qui ont du caractère. Ceux où les états vides, les boutons, les animations et les moindres détails montrent une réelle attention. C’est cet aspect du design qui me passionne : rendre les choses utiles claires, vivantes et inspirant la confiance.',
      'about.p3': 'La majeure partie de mon travail tourne autour du product design, des systèmes d’interface (UI), du design visuel et du développement front-end. J’ai travaillé dans le Web3, la fintech, les jeux vidéo, les tableaux de bord et les outils expérimentaux, toujours là où le produit doit être percutant tout en restant fluide.',
      'about.p4': 'Je réalise aussi des illustrations et des visuels de marque. Je pense donc beaucoup à l’atmosphère et à la personnalité, pas seulement aux écrans. Parfois, le bon langage visuel explique un produit plus rapidement qu’un long paragraphe.',
      'about.p5': 'J’utilise des outils comme Figma, HTML, CSS, JavaScript, Codex et Claude Code pour passer rapidement d’une idée brute à un prototype fonctionnel. J’aime travailler avec des équipes qui valorisent le goût, la clarté et la qualité.',

      // Contact Section
      'contact.heading': 'CONTACT',
      'contact.lead': 'Si vous construisez quelque chose d’ambitieux (ou si vous voulez donner une vraie âme à votre produit), discutons-en. Je suis ouvert aux collaborations en product design, interaction design et design-engineering.',
      'contact.btn.message': 'CONTACTEZ-MOI',
      'contact.btn.copy': 'COPIER L’EMAIL',
      'contact.quick': 'MESSAGE RAPIDE',
      'contact.label.name': 'NOM',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MESSAGE',
      'contact.ph.name': 'Votre nom',
      'contact.ph.email': 'vous@email.com',
      'contact.ph.message': 'Que construisons-nous ensemble ?',
      'contact.btn.send': 'ENVOYER',
      'contact.btn.sending': 'ENVOI EN COURS...',
      'contact.btn.reset': 'RÉINITIALISER',
      'toast.emailCopied': 'EMAIL COPIÉ',
      'toast.copyFailed': 'ÉCHEC DE LA COPIE',
      'toast.fillAll': 'REMPLISSEZ TOUS LES CHAMPS',
      'toast.openingMail': 'OUVERTURE DE L’APPLICATION EMAIL',
      'toast.mailFailed': 'ÉCHEC DE L’APP EMAIL',

      // Shared Case Study UI
      'cs.back': 'Retour',
      'cs.backWork': 'Retour aux projets',
      'cs.backTop': 'Haut de page',
      'cs.home': 'Accueil',
      'cs.moreWork': 'Autres projets',
      'cs.footer': 'Conçu dans le cadre du portfolio Batmanny.'
    },

    es: {
      // General / Nav
      'nav.home': 'INICIO',
      'nav.work': 'PROYECTOS',
      'nav.about': 'SOBRE MÍ',
      'nav.contact': 'CONTACTO',

      // Loader
      'loader.loading': 'Cargando',
      'loader.start': 'Iniciar',

      // Hero
      'hero.headline': 'Diseñando productos en los que la gente confía su dinero, tiempo y atención.',
      'hero.sub': 'Diseñador de Productos con más de 4 años de experiencia en Web3, videojuegos e IA.',
      'hero.stat': 'Rediseñé la incorporación de Razor DAO, contribuyendo a <strong>más de 100K usuarios en 72 horas</strong>.',
      'hero.btn.work': 'Ver Proyectos',
      'hero.btn.contact': 'Enviar la Bat-Señal',

      // Work section & Filter tabs
      'filter.all': 'Todos',
      'filter.caseStudy': 'Caso de Estudio',
      'filter.vibeCoded': 'Código Vibe',
      'filter.sideQuests': 'Proyectos Secundarios',
      'filter.brandVisual': 'Marca y Visual',
      'filter.empty': 'NO HAY PROYECTOS EN ESTA CATEGORÍA TODAVÍA',

      // Project Cards
      'card.razor.title': 'Rediseño de incorporación, contribuyendo a más de 100K usuarios en 72 horas',
      'card.razor.desc': 'Reduje la fricción durante la creación de carteras y creé un sistema de diseño escalable.',
      'card.elite.title': 'Una incorporación que se siente como una conversación, no como un formulario',
      'card.elite.desc': 'Un flujo de 14 pantallas diseñado como un diálogo, haciendo que la experiencia de coincidencia de empleo con IA sea clara y confiable.',
      'card.pendax.title': 'Transferencias de Cripto a Naira tan seguras como la banca',
      'card.pendax.desc': 'Un flujo fintech enfocado en móviles que hace que las transferencias cripto a banco se sientan familiares y seguras.',
      'card.cosmic.title': 'Una interfaz de juego diseñada para mantenerse legible a máxima velocidad',
      'card.cosmic.desc': 'Caso de estudio de interfaz enfocado en incorporación, puntuación y una UI ligera que se mantiene clara durante la acción.',

      // About Section
      'about.heading': 'SOBRE MÍ',
      'about.p1': 'Soy Emmanuel, un diseñador de productos al que le gusta estar cerca del proceso: bocetar la idea, dar forma a la interfaz y a veces construirla yo mismo.',
      'about.p2': 'Disfruto de los productos con personalidad. Esos donde los estados vacíos, botones, animaciones y pequeños detalles muestran un cuidado real. Ese es el aspecto del diseño al que siempre vuelvo.',
      'about.p3': 'La mayor parte de mi trabajo abarca diseño de productos, sistemas UI, diseño visual e integración front-end en Web3, fintech, videojuegos y herramientas experimentales.',
      'about.p4': 'También hago ilustraciones y gráficos de marca, por lo que pienso mucho en el tono y la personalidad. A veces, el lenguaje visual adecuado explica un producto más rápido que un párrafo.',
      'about.p5': 'Utilizo herramientas como Figma, HTML, CSS, JavaScript, Codex y Claude Code para crear prototipos funcionales rápidamente. Me gustan los equipos que valoran el gusto, la claridad y el trabajo bien hecho.',

      // Contact Section
      'contact.heading': 'CONTACTO',
      'contact.lead': 'Si estás construyendo algo ambicioso, hablemos. Estoy abierto a colaboraciones en diseño de producto, diseño de interacción e ingeniería de diseño.',
      'contact.btn.message': 'ENVIAR MENSAJE',
      'contact.btn.copy': 'COPIAR EMAIL',
      'contact.quick': 'MENSAJE RÁPIDO',
      'contact.label.name': 'NOMBRE',
      'contact.label.email': 'EMAIL',
      'contact.label.message': 'MENSAJE',
      'contact.ph.name': 'Tu nombre',
      'contact.ph.email': 'tu@email.com',
      'contact.ph.message': '¿Qué vamos a construir?',
      'contact.btn.send': 'ENVIAR',
      'contact.btn.sending': 'ENVIANDO...',
      'contact.btn.reset': 'REINICIAR',
      'toast.emailCopied': 'EMAIL COPIADO',
      'toast.copyFailed': 'ERROR AL COPIAR',
      'toast.fillAll': 'LLENA TODOS LOS CAMPOS',
      'toast.openingMail': 'ABRIENDO CORREO',
      'toast.mailFailed': 'ERROR DE CORREO',

      // Shared Case Study UI
      'cs.back': 'Volver',
      'cs.backWork': 'Volver a proyectos',
      'cs.backTop': 'Ir arriba',
      'cs.home': 'Inicio',
      'cs.moreWork': 'Más proyectos',
      'cs.footer': 'Construido como parte del portafolio de Batmanny.'
    },

    de: {
      // General / Nav
      'nav.home': 'START',
      'nav.work': 'PROJEKTE',
      'nav.about': 'ÜBER MICH',
      'nav.contact': 'KONTAKT',

      // Loader
      'loader.loading': 'Laden',
      'loader.start': 'Starten',

      // Hero
      'hero.headline': 'Entwicklung von Produkten, denen Menschen ihr Geld, ihre Zeit und ihre Aufmerksamkeit anvertrauen.',
      'hero.sub': 'Product Designer mit mehr als 4 Jahren Erfahrung in Web3, Gaming und KI.',
      'hero.stat': 'Neugestaltung des Razor DAO Onboardings mit <strong>über 100.000 Nutzern in 72 Stunden</strong>.',
      'hero.btn.work': 'Projekte Ansehen',
      'hero.btn.contact': 'Bat-Signal Senden',

      // Work section & Filter tabs
      'filter.all': 'Alle',
      'filter.caseStudy': 'Fallstudie',
      'filter.vibeCoded': 'Vibe-Code',
      'filter.sideQuests': 'Nebenprojekte',
      'filter.brandVisual': 'Marke & Visuelles',
      'filter.empty': 'NOCH KEINE PROJEKTE IN DIESER KATEGORIE',

      // Project Cards
      'card.razor.title': 'Onboarding-Neugestaltung für über 100K Nutzer in 72 Stunden',
      'card.razor.desc': 'Reduzierung von Hürden bei der Wallet-Erstellung und Aufbau eines skalierbaren Design-Systems.',
      'card.elite.title': 'Ein Onboarding, das sich wie ein Gespräch anfühlt, nicht wie ein Formular',
      'card.elite.desc': 'Ein 14-Bildschirm-Ablauf, der als Dialog gestaltet ist und KI-Job-Matching klarer und vertrauenswürdiger macht.',
      'card.pendax.title': 'Krypto-zu-Naira Überweisungen so sicher wie Bankgeschäfte',
      'card.pendax.desc': 'Ein Mobile-First Fintech-Ablauf, der Krypto-Überweisungen vertraut und einfach verständlich macht.',
      'card.cosmic.title': 'Eine Spiel-UI, die auch bei voller Geschwindigkeit lesbar bleibt',
      'card.cosmic.desc': 'Eine Spiel-UI Fallstudie mit Fokus auf Onboarding, Punktesystem und eine übersichtliche Benutzeroberfläche.',

      // About Section
      'about.heading': 'ÜBER MICH',
      'about.p1': 'Ich bin Emmanuel, ein Product Designer, der gerne nah am Projekt arbeitet: Ideen skizzieren, Interfaces gestalten und Dinge selbst bauen.',
      'about.p2': 'Ich mag Produkte mit Charakter. Solche, bei denen leere Zustände, Buttons, Motion und kleine Details echte Sorgfalt zeigen. Das ist der Teil des Designs, der mich begeistert.',
      'about.p3': 'Mein Schwerpunkt liegt auf Product Design, UI-Systemen, visuellem Design und Frontend-Entwicklung in Web3, Fintech, Spielen und experimentellen Tools.',
      'about.p4': 'Ich erstelle auch Illustrationen und Markenauftritte und denke viel über Stimmung und Persönlichkeit nach. Manchmal erklärt eine gute Bildsprache ein Produkt schneller als ein Text.',
      'about.p5': 'Mit Figma, HTML, CSS, JavaScript, Codex und Claude Code erstelle ich schnell funktionierende Prototypen. Ich mag Teams, die Wert auf Geschmack, Klarheit und Qualität legen.',

      // Contact Section
      'contact.heading': 'KONTAKT',
      'contact.lead': 'Wenn Sie etwas Ambitioniertes bauen, lassen Sie uns sprechen. Ich bin offen für Kooperationen in Product Design, Interaction Design und Design-Engineering.',
      'contact.btn.message': 'NACHRICHT SENDEN',
      'contact.btn.copy': 'E-MAIL KOPIEREN',
      'contact.quick': 'SCHNELLE NACHRICHT',
      'contact.label.name': 'NAME',
      'contact.label.email': 'E-MAIL',
      'contact.label.message': 'NACHRICHT',
      'contact.ph.name': 'Ihr Name',
      'contact.ph.email': 'ihre@email.com',
      'contact.ph.message': 'Was bauen wir?',
      'contact.btn.send': 'SENDEN',
      'contact.btn.sending': 'SENDEN...',
      'contact.btn.reset': 'ZURÜCKSETZEN',
      'toast.emailCopied': 'E-MAIL KOPIERT',
      'toast.copyFailed': 'KOPIEREN FEHLGESCHLAGEN',
      'toast.fillAll': 'ALLE FELDER AUSFÜLLEN',
      'toast.openingMail': 'E-MAIL APP WIRD GEÖFFNET',
      'toast.mailFailed': 'E-MAIL APP FEHLER',

      // Shared Case Study UI
      'cs.back': 'Zurück',
      'cs.backWork': 'Zurück zu Projekten',
      'cs.backTop': 'Nach oben',
      'cs.home': 'Start',
      'cs.moreWork': 'Weitere Projekte',
      'cs.footer': 'Erstellt als Teil des Batmanny Portfolios.'
    },

    ja: {
      // General / Nav
      'nav.home': 'ホーム',
      'nav.work': '実績',
      'nav.about': '私について',
      'nav.contact': 'お問い合わせ',

      // Loader
      'loader.loading': '読み込み中',
      'loader.start': 'スタート',

      // Hero
      'hero.headline': 'お金、時間、注意を安心して託せるプロダクトをデザインする。',
      'hero.sub': 'Web3、ゲーム、AI領域で4年以上の実績を持つプロダクトデザイナー。',
      'hero.stat': 'Razor DAOのオンボーディングを再設計し、<strong>72時間で10万人以上のユーザー獲得に貢献</strong>。',
      'hero.btn.work': '実績を見る',
      'hero.btn.contact': 'バットシグナルを送る',

      // Work section & Filter tabs
      'filter.all': 'すべて',
      'filter.caseStudy': 'ケーススタディ',
      'filter.vibeCoded': 'バイブコード',
      'filter.sideQuests': 'サイドクエスト',
      'filter.brandVisual': 'ブランド＆ビジュアル',
      'filter.empty': 'このカテゴリーのプロジェクトはまだありません',

      // Project Cards
      'card.razor.title': 'オンボーディングの再設計により72時間で10万人以上のユーザー獲得に貢献',
      'card.razor.desc': 'ウォレット作成時の摩擦を削減し、拡張可能なデザインシステムを構築。',
      'card.elite.title': 'フォームではなく、会話のように感じられるオンボーディング',
      'card.elite.desc': 'AIマッチング体験をより明確で信頼できるものにする、14画面の会話型フロー。',
      'card.pendax.title': '暗号資産からナイラへの送金を銀行並みに安全に',
      'card.pendax.desc': '暗号資産から銀行口座への送金を親しみやすく安全に感じさせるモバイルファーストのUI。',
      'card.cosmic.title': '全速力でも読みやすさを保つゲームUI',
      'card.cosmic.desc': 'アクションが激しく動く中でも高い視認性とレスポンスを維持するゲームUIケーススタディ。',

      // About Section
      'about.heading': '私について',
      'about.p1': '私はエマニュエルです。アイデアのスケッチ、UIの設計、時には自らコードを書いて開発まで手がけるプロダクトデザイナーです。',
      'about.p2': '空の状態、ボタン、モーション、細部に至るまでこだわりが感じられる、個性あるプロダクトが好きです。それこそがデザインで私が探求し続ける部分です。',
      'about.p3': 'Web3、フィンテック、ゲーム、ダッシュボード領域で、プロダクトデザイン、UIシステム、フロントエンド実装を担当してきました。',
      'about.p4': 'イラストやブランドビジュアルも制作しており、単なる画面構成だけでなく雰囲気や世界観も大切にしています。言葉以上に適切なビジュアル言語が雄弁に語ることもあります。',
      'about.p5': 'Figma、HTML、CSS、JavaScript、Codex、Claude Codeを活用し、アイデアから動くプロトタイプへ迅速に落とし込みます。品質と美意識を重視するチームでの作業を愛しています。',

      // Contact Section
      'contact.heading': 'お問い合わせ',
      'contact.lead': '野心的なプロダクトの開発やデザインコラボレーションについて、ぜひお気軽にご相談ください。',
      'contact.btn.message': 'メッセージを送る',
      'contact.btn.copy': 'メールをコピー',
      'contact.quick': 'クイックメッセージ',
      'contact.label.name': 'お名前',
      'contact.label.email': 'メールアドレス',
      'contact.label.message': 'メッセージ',
      'contact.ph.name': 'お名前を入力',
      'contact.ph.email': 'example@email.com',
      'contact.ph.message': '制作内容について記述してください',
      'contact.btn.send': '送信',
      'contact.btn.sending': '送信中...',
      'contact.btn.reset': 'リセット',
      'toast.emailCopied': 'メールアドレスをコピーしました',
      'toast.copyFailed': 'コピーに失敗しました',
      'toast.fillAll': 'すべての項目を入力してください',
      'toast.openingMail': 'メールアプリを起動しています',
      'toast.mailFailed': 'メールアプリの起動に失敗しました',

      // Shared Case Study UI
      'cs.back': '戻る',
      'cs.backWork': '実績一覧へ戻る',
      'cs.backTop': 'ページ上部へ',
      'cs.home': 'ホーム',
      'cs.moreWork': '他の実績を見る',
      'cs.footer': 'Batmanny Portfolioの一部として制作されました。'
    }
  };

  /**
   * Get current selected language
   */
  function getLanguage() {
    // 1. Check URL query parameter
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = (urlParams.get('lang') || '').toLowerCase();
      if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    } catch (e) {}

    // 2. Check saved choice in localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) return saved;

    // 3. Automatic browser language detection
    const userLangs = Array.from(navigator.languages || [navigator.language || '']);
    for (let l of userLangs) {
      const code = (l || '').toLowerCase().slice(0, 2);
      if (SUPPORTED_LANGS.includes(code)) return code;
    }

    return 'en';
  }

  /**
   * Translate the DOM elements
   */
  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations.en;

    // Plain text replacements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.hasAttribute('data-typewriter')) {
          el.setAttribute('data-text', dict[key]);
          if (el.textContent.trim() !== '') {
            el.textContent = dict[key];
          }
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // HTML content replacements
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Alt text
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) {
        el.setAttribute('alt', dict[key]);
      }
    });

    // Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Update dropdown button label (flag + code)
    const upperCode = lang.toUpperCase();
    document.querySelectorAll('.lang-current').forEach((el) => {
      el.textContent = upperCode;
    });
    document.querySelectorAll('.lang-current-flag').forEach((el) => {
      el.textContent = FLAGS[lang] || '';
    });

    // Mark active option
    document.querySelectorAll('.lang-option').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });

    const path = window.location.pathname;
    if (path.includes('/work/razor-wallet.html')) {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });
    } else if (path.includes('/work/elite-global.html')) {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
      });
      document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });
    }
  }

  /**
   * Change current language
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  // Global helper for toast messages or dynamic JS strings
  window.i18n = {
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    t: function (key) {
      const lang = getLanguage();
      const dict = translations[lang] || translations.en;
      return dict[key] || translations.en[key] || key;
    }
  };

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    const currentLang = getLanguage();
    applyLanguage(currentLang);

    // Event delegation for language dropdown toggle
    document.body.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.lang-dropdown-btn');
      if (toggleBtn) {
        e.stopPropagation();
        const dropdown = toggleBtn.closest('.lang-dropdown');
        const isExpanded = dropdown.classList.contains('open');

        // Close all other dropdowns
        document.querySelectorAll('.lang-dropdown').forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove('open');
            d.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          }
        });

        dropdown.classList.toggle('open', !isExpanded);
        toggleBtn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        return;
      }

      // Handle selecting a language option
      const optionBtn = e.target.closest('.lang-option');
      if (optionBtn) {
        const lang = optionBtn.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
          const dropdown = optionBtn.closest('.lang-dropdown');
          if (dropdown) {
            dropdown.classList.remove('open');
            dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          }
        }
        return;
      }

      // Click outside to close dropdowns
      document.querySelectorAll('.lang-dropdown.open').forEach((dropdown) => {
        dropdown.classList.remove('open');
        dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      });
    });

    // Press Escape to close dropdowns
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.lang-dropdown.open').forEach((dropdown) => {
          dropdown.classList.remove('open');
          dropdown.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
        });
      }
    });
  });
})();
