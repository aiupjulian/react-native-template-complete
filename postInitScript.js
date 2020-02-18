#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

exec('git rev-parse --is-inside-work-tree', (err, _, stderr) => {
  if (err || stderr) {
    exec('git init', (err, _, stderr) => {
      if (err || stderr) {
        console.error('\x1b[41m\x1b[33m%s\x1b[0m', 'There was an issue installing Husky git hooks, please initialize a git repo and then install husky again!');
      } else {
        console.log('Husky git hooks installed correctly!');
      }
    });
  } else {
    console.log('Husky git hooks installed correctly!');
  }
});

// these files don't get renamed by rncli
const UNDERSCORED_DOTFILES = ["editorconfig", "huskyrc", "env", "env.example"];

UNDERSCORED_DOTFILES.forEach(dotfile => {
  renameFile(
    path.join(process.cwd(), `_${dotfile}`),
    `_${dotfile}`,
    `.${dotfile}`
  );
});

function renameFile(filePath, oldName, newName) {
  const newFileName = path.join(
    path.dirname(filePath),
    path.basename(filePath).replace(new RegExp(oldName, 'g'), newName),
  );

  console.log(`Renaming ${filePath} -> file:${newFileName}`);

  fs.renameSync(filePath, newFileName);
}
