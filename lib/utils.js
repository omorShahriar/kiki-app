export const generateAdditionalMetaTagsArray = (tags) => {
  if (tags.length === 0) {
    return null;
  } else {
    return tags.map((tag) => ({
      [tag.type]: tag.value,
      content: tag.content,
    }));
  }
};
