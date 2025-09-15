const fs = require('fs');
const path = require('path');

const bathroomDir = '/Users/fahadkiani/Desktop/development/sunvic/public/images/bathroom';

// Read all files in the directory
fs.readdir(bathroomDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for image files (jpeg, jpg, png, etc.)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpeg', '.jpg', '.png', '.gif', '.webp'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} image files to rename:`);
  imageFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file}`);
  });

  // Rename files sequentially
  imageFiles.forEach((file, index) => {
    const oldPath = path.join(bathroomDir, file);
    const ext = path.extname(file);
    const newName = `${index + 1}${ext}`;
    const newPath = path.join(bathroomDir, newName);

    // Check if new file already exists
    if (fs.existsSync(newPath)) {
      console.log(`Warning: ${newName} already exists, skipping ${file}`);
      return;
    }

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file} to ${newName}:`, err);
      } else {
        console.log(`✓ Renamed: ${file} → ${newName}`);
      }
    });
  });

  console.log('\nRenaming complete!');
});

