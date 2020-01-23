#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// these files don't get renamed by rncli
const UNDERSCORED_DOTFILES = ["editorconfig", "huskyrc"];

console.log(process.cwd());


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
