#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';
import search from '..';

const execute = async () => {
  try {
    await search();
  } catch (e) {
    console.error('😞  Rut ro, an error occurred');
    console.error(e);
  }
};

program.version(pkg.version)
  .description('CLI to return languages that GitHub identifies')
  .parse(process.argv);

execute();
