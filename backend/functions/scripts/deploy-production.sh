#!/bin/bash
firebase login:use daria.rucka@programystic.dev
firebase use production
firebase deploy --only functions