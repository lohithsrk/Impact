#!/bin/bash

git add .
git commit -m changes
git push origin dev
npm run build
firebase deploy
open https://impactpodcast.in