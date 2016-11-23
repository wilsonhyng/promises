/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseFunctions = require('./promiseConstructor.js');
var GitHubFunctions = require('./promisification.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseFunctions.pluckFirstLineFromFileAsync(readFilePath)
  .then(function(username) {
    // console.log(username);
    return GitHubFunctions.getGitHubProfileAsync(username);
  })
  .then(function(info) {
    fs.writeFileSync(writeFilePath, JSON.stringify(info));
  });
  // .then(function(info) {
  //   // console.log(info);
  //   return new Promise(function(resolve, reject) {
  //     fs.appendFile(writeFilePath, info, function(err, data) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         console.log(data);
  //         resolve(data);
  //       }
  //     });
  //   });
  // });

  // var writeFile = fs.appendFile()
  // return new Promise((resolve, reject) => {
  //   return promiseFunctions.pluckFirstLineFromFileAsync(readFilePath);
  // })
  // .then((userName) => {
  //   return GitHubFunctions.getGitHubProfileAsync(userName);
  // })
  // .then((information) => {
  //   return 
  // });
  // .then(GitHubFunctions.getGitHubProfileAsync())
  // .then(promiseFunctions.readFileAndMakeItFunny(writeFilePath));

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
