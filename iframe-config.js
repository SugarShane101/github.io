import { Z as ZincVersion } from './zinc-api-f0859f9f.js';

const config = {
  title: 'iQ Pro Tokenizer',
  fallbackDisableSubmit: false,
  description: 'Tokenizer component which securely tokenizes user payments',
  iconUrl: 'rich-text',
  groupName: 'Visual',
  pluginAuthor: 'Your Name',
  version: ZincVersion.CurrentVersion,
  properties: {
    apiKey: {
      type: 'string',
      title: 'API Key',
      description: 'Public API key for the iQ Pro Tokenizer',
    },
  },
  standardProperties: {
    readOnly: true,
    required: true,
    description: true,
  },
};

export { config };
