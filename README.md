# convert-to-compact

`convert-to-compact` is a utility package that converts large numbers into a more readable format using abbreviations like K (for thousands), M (for millions), and B (for billions).

This package is perfect for simplifying large numbers in user interfaces, reports, or analytics, making them more digestible.

## Installation

You can install `convert-to-compact` via NPM:

```bash
npm install convert-to-compact
```

## Usage TypeScript

```bash

const {convertToKMB} = require("convert-to-compact");

const result1 = convertToKMB(224000);
console.log(result1); // Output: '224K'

const result2 = convertToKMB(1500000);
console.log(result2); // Output: '1.5M'

const result3 = convertToKMB(5000000000);
console.log(result3); // Output: '5B'

```

## Usage JavaScript

```bash

import { convertToKMB } from 'convert-to-compact';

const result1 = convertToKMB(224000);
console.log(result1); // Output: '224K'

const result2 = convertToKMB(1500000);
console.log(result2); // Output: '1.5M'

const result3 = convertToKMB(5000000000);
console.log(result3); // Output: '5B'

```