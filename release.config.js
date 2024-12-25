module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    "@semantic-release/npm",
    [
      '@semantic-release/changelog',
      {
        changelogFile: './docs/CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['./docs/CHANGELOG.md'],
      },
    ],
  ],
};
