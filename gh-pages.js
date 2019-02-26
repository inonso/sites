const ghpages = require('gh-pages');

ghpages.publish('moneyquest', {
    branch: 'test',
    repo: 'git@github.com:inonso/sites.git'
}, err => { console.log(err) })