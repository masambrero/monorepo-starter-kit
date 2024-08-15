module.exports = {
  dependencyTypes: [
    'dev',
    'prod',
    'peer',
    'pnpmOverrides',
    'resolutions',
    'local',
    'overrides',
  ],
  filter: '^(?!(@monorepo-starter)).*',
  indent: '  ',
  semverGroups: [],
  semverRange: '',
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'resolutions',
    'scripts',
  ],
  sortFirst: ['name', 'description', 'version', 'author'],
  source: [],
  versionGroups: [],
};
