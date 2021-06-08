#!/usr/bin/env bash
yarn node-sass --output-style expanded \
          --source-map true \
          --source-map-contents true \
          --precision 6 \
          ./packages/ui/scss/infopiphany.scss \
          dist/bootstrap-vue.css