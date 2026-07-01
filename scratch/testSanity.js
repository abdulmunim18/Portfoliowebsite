const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'ids6txyg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skdUcrnE9kmg1y3vmsanC5L0gZAhLJpHLFpJq2XjftzD9tSj8UKZWZogZGeIrilADGUt8D2gofKtsfa6HYIGnJm7MjjU4JRTcC58jwyA9npwvQacuzz8CUrGsQ2MqjQ37Z20usTUavd7RZidYI0qivMQLF0NAKVETRUhPoG9PmOsv5z8tGyC',
  useCdn: false,
});

async function main() {
  try {
    // Fetch all documents to see what exists in their database
    const allDocs = await client.fetch(`*[]`);
    console.log('--- All Documents in Database ---');
    console.log(allDocs.map(d => ({ id: d._id, type: d._type })));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

main();
