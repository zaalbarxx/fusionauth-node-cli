import {Command} from "commander";
import {copy} from "fs-extra";
import {v4} from "uuid";
import chalk from "chalk";

export const emailDuplicate = new Command('email:duplicate')
    .description('Duplicate an email template')
    .argument('<emailTemplateId>', 'The email template id to duplicate')
    .option('-o, --output <output>', 'The output directory', './emails/')
    .action(async (emailTemplateId: string, options) => {
        const {output} = options;

        console.log(`Duplicating email template ${emailTemplateId} in ${output}`);

        const newEmailTemplateId = v4();
        const emailTemplateDirectory = `${output}/${newEmailTemplateId}/`;

        // Copy directory
        await copy(`${output}/${emailTemplateId}`, emailTemplateDirectory);

        console.log(chalk.green(`Email template created in ${emailTemplateDirectory}`));
    });
