/**
 * Previous save output for this block.
 *
 * Class names were built by interpolating attributes directly, so a block whose
 * attribute was never set carried the literal text "undefined" in its class
 * list. The current save omits those classes instead, which would make existing
 * content fail validation. Keeping the old save here lets WordPress recognise
 * that markup and migrate it silently on next edit.
 */
import attributes from './attributes.js';
import SaveV1 from './save-v1';

export default [
    {
        attributes,
        save: SaveV1,
    },
];
