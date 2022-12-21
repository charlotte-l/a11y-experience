import development from './settings-development';
import production from './settings-production';

const settings = {
  development,
  production,
  test: development,
}[process.env.NODE_ENV];

export default settings;
