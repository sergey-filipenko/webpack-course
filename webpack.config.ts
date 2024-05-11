import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}
export default (env: EnvVariables): webpack.Configuration => {
  const isDev = env.mode !== 'production';
  const isProd = !isDev;
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };
  return buildWebpack({
    mode: env.mode || 'development',
    platform: env.platform || 'desktop',
    port: env.port || 3000,
    analyzer: env.analyzer,
    isDev,
    isProd,
    paths,
  });
};
