import program from 'commander';
import search from './search';

const execute = async () => {
  try {
    await search();
  } catch (e) {
    console.error('😞  Rut ro, an error occurred');
    console.error(e);
  }
};

program.version('0.0.0-development')
  .description('CLI to return languages that GitHub identifies')
  .parse(process.argv);

execute();
