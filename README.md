# Planning Poker Bot

The idea is as follows:

/bot vote <ticket url> # optional ticket url

--> announces - we have async vote on ticket url (first from repo if not specified) "title", please DM me 1 (simple), 2 (medium) or 3 (hard) - discussion in ticket or here as you prefer :slightly_smiling_face:

then needs to be able to receive inputs from people - slack DMs? or expose web interface (could do react there?) and then post back to slack ...

whole thing could be non-slack to start with to reduce complexity?


people vote on tickets

so we have an AsyncVote, which consists of a ticket with a title and url, and then there are a number of votes, which have a value, and come from an individual and might have an explanation, and when the number of votes reaches a set value (e.g. 3) then the full results are revealed, and the ticket value is set if there is agreement, or we prompt more discussion ....

Anyhow, the code here is just me playing around with testing a node/express/mongo app based on https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb
