#!/bin/bash
npm run build
git add build -f
git commit -m "Build: $(date)"
git subtree push --prefix build origin build
