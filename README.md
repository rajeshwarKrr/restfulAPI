# restfulAPI

Building a Restful API which sends sms

Building a Restful API

Backend Spec:

1. the API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE AND HEAD
2. The API allows a client to connect, then create a new user, then edit and delete that user
3. The API allows a user to "sign in" which gives them a token that they can use for subsequent authenticated requests
4. The API allows the user to "sign out" which invalidates their token.
5. The Api allows a signed-in user to use their token to create a new "check"
6. The API allows a signed-in user to edit or delete any of their checks.
7. In the background, workers perform all the "checks" at the appropriate times, and send alerts to the users when a check changes its state from "up" to "down", or vise versa.

Twilio API to send messages
