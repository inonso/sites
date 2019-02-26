const ghpages = require('gh-pages');

ghpages.publish('moneyquest', {
    branch: 'moneyquest',
    repo: 'git@github.com:inonso/sites.git'
}, err => { console.log(err) })