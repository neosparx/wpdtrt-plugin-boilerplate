/**
 * File: gulp-modules/documentation.js
 *
 * Gulp tasks to generate documentation.
 */

import exec from './exec';

// internal modules
import taskHeader from './task-header';

/**
 * Group: Tasks
 * _____________________________________
 */

/**
 * Function: naturalDocs
 *
 * Generate JS & PHP documentation.
 */
async function naturalDocs() {
  taskHeader(
    '5a',
    'Documentation',
    'Documentation',
    'Natural Docs (JS & PHP)'
  );

  // Quotes escape space better than backslash on Travis
  const naturalDocsPath = 'Natural Docs/NaturalDocs.exe';

  const { stdout, stderr } = await exec( `mono "${naturalDocsPath}" ./config/naturaldocs` );
  console.log( stdout );
  console.error( stderr );
}

export default naturalDocs;