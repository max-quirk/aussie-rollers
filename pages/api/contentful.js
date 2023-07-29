import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  const { contentType, locale, projectSlug } = req.query;

  try {
    const entries = await client.getEntries({ content_type: contentType, locale, 'fields.projectSlug': projectSlug });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
