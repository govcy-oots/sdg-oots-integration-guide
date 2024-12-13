const fs = require('fs');
const path = require('path');

module.exports = () => {
  // Adjust the path to correctly locate package.json
  const packagePath = path.join(__dirname, '..', '..', 'package.json');
  const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  return {
    version: packageData.version
  };
};
