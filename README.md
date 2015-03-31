# heroku build env var demo

## Installation instructions

1. Clone this repository.
2. Move ```pre-push``` into ```./.git/hooks/```
3. Add a Heroku app as a remote: ```heroku git:remote -a your-heroku-app-name```
4. Add an empty commit: ```git commit --allow-empty -m "commit time"```
5. Push: ```git push heroku master```

