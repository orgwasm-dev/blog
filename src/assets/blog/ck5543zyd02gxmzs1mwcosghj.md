## Anarchitecture

# Development in Post-Agile, Managerless Teams

Software teams often need a personnel as a bridge to the world of businesses and customers. However do they really need these bridging professionals who have likely never developed any non-trivial software to also *manage* enterprise software teams? Can a team, especially a software team, self-organize?

## Managers of Bullsh*t

Anthropologist David Graeber argues in his book aptly named *Bullshit Jobs* about the existence and social harm of meaningless jobs. Among the five types of entirely pointless jobs, non-technical professionals managing software teams would fall into the 'box tickers' and 'taskmasters' categories. These managers use paperwork and shallow documentations as a proxy for actually needed actions. They may even create extra work, unnecessary burden, avoidable tight deadlines and management strategies unsuited for a creative and technical team. I have known and worked with brilliant project managers over the years who definitely do not belong to these categories but I have also seen from distance the enormity of harm from these managers of bullshit and their similarly bullshit management techniques.

'Uncle Bob' Martin, one of the authors of the original [Agile Manifesto](https://agilemanifesto.org/), in his talk cum rant ['The Future of Programming'](https://youtu.be/ecIWPzGEbFc) explains precisely why most software development teams are facing this manager invasion problem. He draws from multiple decades of living what we now learn as history of software development and pin-points that software development professionals have in the modern days come to be workers without a self managing and risk handling discipline. You can see in this writeup how his talk leads to the post-agile sentiment I am bringing forth here:

## Businesses created this mess 

> "...business understands discipline... so business really liked scrum. They like scrum because of the discipline. They like scrum because it was simple and obvious - you could do these little sprints and you could do all these meetings and you could do these plannings and it made sense to the business and the business thought, "Yes, this certification thing is a great idea. We need to certify people." 

## ... because they do not understand our craft and disciplines

> "But the business does not understand us - doesn't understand programmers and in particular the business does not understand our disciplines. Business understands scrum disciplines. Business does not understand pair programming, ... test driven development, ... refactoring, ... simple design. These technical disciplines are not within the expertise of business and they shouldn't be. They belong to us; they are a part of our expertise. So business cannot approve or endorse them... or evaluate the risks. The risk frankly is ours to take... so we have to take the risk as part of our normal professional operations, as professionals. And that's what a professional does." 

## ... and because they made agile movement a managerial mess

> " ... [but then] there was the invasion of the project managers caused by certification. Certification turned into this siren song and attracted, frankly, all the wrong people. Agile was developed by technical people. It was a creation of the software industry. Programmers sat in that room and created the agile manifesto and agile principles. And then came certification and with certification, hordes and hordes of project managers started to get certified. They would sit for two days in a class and get a piece of paper and feel that that was somehow significant. And they literally took over the agile movement. The agile movement shifted dramatically towards the project management side."

## ... which paved the way for the post-agile world

> "When you think now about the stuff going on in agile, you are thinking about kanban and, you know, lean this and, you know, lean startup that. Where's the technical discipline? Where's [sic] the programmers? Frankly, the programmers have all fled. If you go to an agile conference now, you don't see an awful lot of programmers there and you don't see lots of technical tracks there. Although they try... 

> Kent Beck said at Snowbird, 

>> "The goal for Agile was to heal the divide between business and programming" 

> and I believe that the [agile movement] has completely failed... Somebody has to take the lead... Civilization depends on us in ways it doesn't yet understand. In ways we don't yet understand."


# Take the lead?

So who should be the somebody that takes the lead? Would it be the technical XPers and craftsmen or would it be the businesses with their newfound love in a bastardized agility? Could it be both?

Martin Fowler explains in his article on [FlaccidScrum](https://martinfowler.com/bliki/FlaccidScrum.html) about how scrum, albeit not a technical framework, can accommodate the craftsmanship best practices and discipline of, say, XP or TDD.  

> "In defense of Scrum, it's important to point out that just because it doesn't include technical activities within its scope should not lead anyone to conclude that it doesn't think they are important. Whenever I've listened to prominent Scrummers they've always emphasized that you must have good technical practices to succeed with a Scrum project. They don't mandate what those technical practices should be, but you do need them... 

> I always like to point out that it isn't methodologies that succeed or fail, it's teams that succeed or fail... Many people are looking to Lean as the Next Big Agile Thing. But the more popular lean becomes the more it will run into the same kind of issues as Scrum is facing now. That doesn't make Lean (or Scrum) worthless, 
>> it just reminds us **Individuals and Interactions are more valuable than Processes and Tools.**"


# The Manifesto, XP and Failures

The [Agile Manifesto](https://agilemanifesto.org/) reads:

> We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:

> - Individuals and interactions over processes and tools
- Working software over comprehensive documentation
- Customer collaboration over contract negotiation
- Responding to change over following a plan

> That is, while there is value in the items on the right, we value the items on the left more.

XP values feedback, simplicity, communication, courage and respect. Agile's original best practices include standups, stories, retrospectives, iterations, estimates, tests, refactors and continuous deployments. 

Most teams fail because of lack of XP values and/or the managerial world view that prioritizes shipping faster - under the guise of pragmatism- over shipping with agile discipline - under the disparaging label of ideology. Some failures are softer and, in my experience, are caused by managers who make their developers so disconnected from business problems over time that they are no different from machine or telephone operators from the days of past. Then there are those managers who promote the idea that QA tools and tests are not part of getting the job done but rather a luxury. 

However the biggest and most cliched failure source is viewing programmers as a species that
 - does not know how to talk
 - does not have 'social skills'
 - cannot understand clients' complex requirements

Hence businesses create the need to bring forth a magical middleman with their own non-technical management strategies and their greedy algorithm based product shipment strategies. These would also be the managers who will never agree to epics and tasks centered around code refactoring let alone complete overhauls and rewrites. Effectively, these are also the managers that cannot make rational risk management decisions owing to their lack of in-depth technical knowledge. 

# Developer Driven Development and *DD

Post-agile movement is primarily about removal of these aforementioned categories of managers. We do not need business managers leading software teams certified after a few weeks of training about software development management principles. We instead need an inversion whereby software developers learn management principles suited for their domain. And yes, this applies for even the junior most developers in the team since domain specific management principles are useful to know for everybody in the domain.

Another profound realization that led to Fred George's vision of the post-agile programmer anarchy is the fact that partnerships between the customer and the development team to drive the software development project is inherently flawed and cripplingly slow. Partnership with the customer should be about defining their problems and desirable features of the solutions, nothing more. Otherwise we would be in the business of building the fabled horse carriages of customer's dreams when we could be building them cars or even star ships that the customers do not yet know about. 

This radical departure from the classical and agile status quo is possible because development teams understand business metrics, customer oriented development and follow the supremely powerful continuous feedback-continuous deployment cycle. 

On a more fundamental level, it is the realization that 
> **if you are going for a drive, you need to put the driver in the driver's seat**. 

Secondly if the driver is an experienced professional whom you have told where to take you, 
> **the backseat drivers are not needed**.

Over the decades we have identified that we need Test, Feature, Behavior, Acceptance Test, Data, Domain, Design, Model or, if you will, * Driven Development. Perhaps one or more of these apply to your team's needs but none of it will go into practice if the developers themselves cannot drive the development practices. As both of the Martins above would say, the teams fail not the tools and this responsibility of applying the correct technical tools is a technical team's responsibility not a business domain concern.



# Developer Anarchy, Self-Organization and Anarchitecture

As separation of concerns is a dearly held value and a common meta-design pattern among developers, developers need to use this same principle for the architecture of their software and the development team's communication structures. These two are known to be inseparable and mutually influencing according to [Conway's law](https://www.thoughtworks.com/insights/blog/applying-conways-law-improve-your-software-development).

## Anarchy: Seeds and Needs 

Businesses will always need to be lead by business managers. Software development will always need to be lead by software developers and architects. Businesses need not be concerned with the solutions and therefore should invert the control of solution design back to the developers to maintain orthogonality. Businesses can still partner with software teams in an agile way to properly define the problems and agree upon the desired features for any possible solution that may emerge in the solution space after enough iterations.

This is obviously only going to work if your development team has enough senior developers with industry experience and if there is enough communication among all its members. Working as a professional is very different from actually becoming a professional. But once you are lucky to have a team of professionals and younglings eager enough to become professionals, every developer can rightfully be **an architect** for their own region of the system they are building. You do not always have to go for a micro-service architecture for this to be possible. Simply let the most experienced developers create a functional core and everyone else develop their own parts of the imperative shell around it as efficient and well-integrated plugins. More trusted developers would get the responsibility of pairing up with the developers of the more important plugins.

## Self-Organizing Superorganisms

This so-called 'post-agile' technique is still very much compliant with the original agile manifesto. However there are no managers of programmers whose wrongly placed formality and misplaced rules may constrain technical innovation and creativity. As these developers will like to fail as much as possible in the early iterations, the classical managers will have no reliable metrics of progress anyways. The ideal anarchic development team has team members jumping up to take responsibilities that no outsider manager could even have possibly foreseen. Such a team could democratically divide work based on the particular sub-specializations, interests and expertise of the team member instead of forcing everyone to see through a story or task's completion from top to bottom of the tech-stack owing to the assigned 'user stories'. These developers would work directly with the product owner or the customer and build more trust than what waterfall or impure agile derivatives can provide. 

It follows that one big change in the development team's architecture would be the fact that development can no longer be story driven. As mentioned earlier, customers should produce formal, comprehensive problem descriptions and perhaps the desired features of the solutions but never directly participate in solution designs and technical specs. Anarchic teams cannot allow for customer side stories that disconnect developers from the actual problems the customers face. **Neither customers nor managers know enough to tell the developers what or how the solution should be. If they did, the programming part would already have been automated or made into a business manager friendly automation DSL or UI.** Developers who understand the problem clearly can empathize better with the end users and come up with better specs and deadlines for the solutions. They might also be able to squeeze in enough room for early failures and experimentation. Overall, such teams will behave as self-organizing superorganisms.

## Anarchy to Anarchitecture

Lastly, neither Fred George nor the two Martins are advocating radical anarchy or complete departure from the lessons learned from scrum and other agile frameworks, be it managerial or technical. Even the anarchists are supposed to converse and ask each other. Anarchic teams have emergent leaderships and self-organization strategies rather than pre-ordained leadership or lack of well-suited organizational strategies. 

How would the architecture of a system produced by an anarchic team look like? Surely the anarchy would leak into the architecture itself. Perhaps there will be an explosion of plugin and microservice architectures. Perhaps not. But I am sure that software architecture itself will be radically affected. What kind of architecture allows for flexible micro-architectures? The best kind. Probably. Could we still call it an architecture? Once again, the solution emerges from the problem definition itself.

We could call it ***anarchitecture***.