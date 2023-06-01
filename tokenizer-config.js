const config = {
    title: "iQ Pro Tokenizer",
    fallbackDisableSubmit: false,
    description: "iQ Pro Tokenizer component for processing transactions",
    iconUrl: "rich-text",
    groupName: "Visual",
    pluginAuthor: "Your Name",
    version: "1.0.0",
    properties: {
      height: {
        type: "number",
        title: "Height",
        description: "Height of the iframe",
        default: 500,
      },
    },
    standardProperties: {
      readOnly: true,
      required: true,
      description: true,
    },
  };
  
  export { config };
  