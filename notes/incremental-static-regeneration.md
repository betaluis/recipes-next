# Incremental Static Regeneration

If we make changes to our code, it won't be shown on our hosted site because the static site has already been built.

You can manually add it by pushing to repository.

**Next.js generates new pages and regenerates current pages on the fly when data is updated.** 

 - Update the page on contentful.
 - There is no change on first visit after the content is changed.
 - The page visit triggers Next.js to re-fetch the page data in the background.
 - The static page is regenerated ready for the next visit.
 - It only regenrates pages that already exists; does not create new ones.

### Go to [slug].js and index.js

- revalidate: 1,
- git commit -m isr
- git push