"format cjs";
// update ci 0
var engine = require('./engine');
var conventionalCommitTypes = require('@talentui/commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
