import chalk from 'chalk';

const LANGUAGE_TYPE_TO_EMOJI = {
  programming: '🖥️',
  data: '📊',
  markup: '📓',
  prose: '🖋️',
};

const formatLanguageDetails = ({
  name,
  languageId,
  type,
  color,
  group,
  searchable,
}) => {
  const formattedName = color ? chalk.hex(color).bold(name) : chalk.bold.cyanBright(name);

  let details = `${LANGUAGE_TYPE_TO_EMOJI[type]}  ${formattedName}`;

  if (group) {
    details += ` ${chalk.bold.yellowBright('|')} 👨‍👩‍👧‍👦  ${chalk.bold.blueBright(group)}`;
  }

  details += ` ${chalk.bold.yellowBright('|')} 🆔  ${chalk.bold.magentaBright(languageId)}`;

  if (searchable) {
    details += ` ${chalk.bold.yellowBright('|')} 🔍 `;
  }

  return details;
};

export default formatLanguageDetails;
