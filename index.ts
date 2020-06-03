#!/usr/local/bin/node

import {Command} from 'commander'

function main(args: string[]): Config {
  let config =
      new Command()
          .description(
              'Create obvious, powerfull and easily maintainable yaml templates')
          .option('-f, --file <file>', 'Input file')
          .option('-o, --output <file>', 'Output file')
          .usage(
              'yaml-template --input=template/deployment.yaml --output=k8s/deployment.yaml')

    let file = ''
    let output = ''
    args = args.slice(2)

    return {file: "", output: ""}
}

type Config = {
  file: string,
  output: string
}

main(process.argv)
