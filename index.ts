#!/usr/bin/env node

import * as commander from 'commander'

function main(args: string[]) {
  let config = commander
      .description(
          'Create obvious, powerfull and easily maintainable yaml templates')
      .option('-f, --file', 'Input file')
      .option('-o, --output', 'Output file')
      .parse(args)

  console.log(config.input)
  console.log(config.output)
}

main(process.argv)
