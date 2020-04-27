
import { resolve } from 'path';
import { realpathSync, readFileSync } from 'fs';

import DataModel from './src/models/Data';
import setupDatabase from './src/utils/setUpDatabase';

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

const passedArgs = process.argv && process.argv.slice(2);

const filePath = passedArgs[0];

const runSeed = async () => {
  try {
    await setupDatabase();

    const jsonPath = resolveApp(filePath);
    const data = JSON.parse(readFileSync(jsonPath));
    
    DataModel.insertMany(data, () => {
      console.log('Data inserted successfully.');
      process.exit();
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

runSeed();
