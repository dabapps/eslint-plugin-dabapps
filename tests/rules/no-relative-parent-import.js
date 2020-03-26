/* global */

const { RuleTester } = require('eslint');
const noRelativeParentImport = require('../../src/rules/no-relative-parent-import');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-relative-parent-import', noRelativeParentImport, {
  valid: [
    'import * as React from "react";',
    'import { StoreState } from "./store/types";',
    'import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";',
  ],
  invalid: [
    {
      code: 'import parent from "../parent";',
      errors: [
        'Do not import parent modules with relative "../". Use the "^/" alias.',
      ],
    },
  ],
});
