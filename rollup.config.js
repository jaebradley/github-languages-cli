import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import filesize from 'rollup-plugin-filesize';
import hashbang from 'rollup-plugin-hashbang';
import includePaths from 'rollup-plugin-includepaths';
import cleaner from 'rollup-plugin-cleaner';
import { plugin as analyze } from 'rollup-plugin-analyzer';
import commonjs from '@rollup/plugin-commonjs';
import json from 'rollup-plugin-json';

import pkg from './package.json';

const config = {
  input: './src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    name: pkg.name,
    globals: [
      '@babel/runtime/helpers/asyncToGenerator',
      '@babel/runtime/regenerator',
      'chalk',
      'commander',
      'github-languages-client',
      'inquirer',
      'inquirer-autocomplete-prompt',
    ],
  },
  external: [
    '@babel/runtime/helpers/asyncToGenerator',
    '@babel/runtime/regenerator',
    'chalk',
    'commander',
    'github-languages-client',
    'inquirer',
    'inquirer-autocomplete-prompt',
  ],
  plugins: [
    cleaner({
      targets: ['./build'],
    }),
    includePaths({
      paths: [
        'src/',
      ],
      exclude: [
        '@babel/runtime/helpers/asyncToGenerator',
        '@babel/runtime/regenerator',
        'chalk',
        'commander',
        'github-languages-client',
        'inquirer',
        'inquirer-autocomplete-prompt',
      ],
    }),
    json({
      exclude: ['node_modules/**'],
      preferConst: true,
      indent: '  ',
    }),
    hashbang(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    localResolve(),
    resolve({
      module: true,
      jsnext: true,
      main: true,
      preferBuiltins: true,
      browser: true,
      modulesOnly: true,
    }),
    commonjs(),
    filesize(),
    analyze(),
  ],
};

export default config;
