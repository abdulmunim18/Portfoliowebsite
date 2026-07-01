/**
 * Custom Desk Structure for Sanity Studio.
 * Enforces siteSettings as a singleton document (only one config can exist).
 */
export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton item for Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // Filter out singleton from the list of all documents
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId())
      ),
    ])
