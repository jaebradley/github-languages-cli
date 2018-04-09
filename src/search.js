import GitHubLanguagesClient from 'github-languages-client';
import inquirer from 'inquirer';
import InquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import formatLanguageDetails from './formatLanguageDetails';

inquirer.registerPrompt('autocomplete', InquirerAutocompletePrompt);

const client = new GitHubLanguagesClient();

const search = async () => (
  inquirer.prompt([
    {
      type: 'autocomplete',
      name: 'gitHubLanguage',
      message: 'Search for GitHub language',
      source: async (answersSoFar, searchTerm) => client.search(searchTerm || '').map(result => formatLanguageDetails(result)),
    },
  ])
);

export default search;
