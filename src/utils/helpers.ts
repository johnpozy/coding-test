import { IRecipients } from './recipients';

/**
 * findMatching
 * 
 * @param data IRecipients
 * @returns Array<string>
 * @description this function uses a for loop to iterate over the recipients array. 
 * It uses another for loop to compare each recipient with every other recipient. 
 * If the two recipients have 2 or more common tags, the result is added to the results array as a string in the required format. 
 * Finally, the results array is returned.
 */
export const findMatching = (data: IRecipients) => {
  let results = [];

  for (let i = 0; i < data.recipients.length; i++) {
    for (let j = i + 1; j < data.recipients.length; j++) {
      let commonTags = data.recipients[i].tags.filter((tag) =>
        data.recipients[j].tags.includes(tag)
      );

      if (commonTags.length >= 2) {
        results.push(
          `${data.recipients[i].name}, ${
            data.recipients[j].name
          } - [${commonTags.join(", ")}]`
        );
      }
    }
  }

  return results;
};
