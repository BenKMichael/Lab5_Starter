# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Setup: Name/s

Benjamin Michael

## Explore Part 3 : Questions

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. This is a robust functionality of the application that might be too complex for unit-testing. Unit-testing is typically reserved for easiliy isolatable functions/features within a project. Something like text-box formatting could be something that can be unit-tested within this functionality.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. This is a simple feature that can be easiliy isolated and tested independently of other project featrues. Unit-testing would allow faster iterative development in this case.