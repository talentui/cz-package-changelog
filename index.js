"format cjs";
// update ci 1
var engine = require('./engine');
var conventionalCommitTypes = require('@talentui/commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
