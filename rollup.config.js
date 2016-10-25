import rollupBabel from 'rollup-plugin-babel';
import rollupUglify from 'rollup-plugin-uglify';

export default {
	entry: 'src/main.js',
	dest: 'event-listeners.js',
	format: 'iife',
	plugins: [
		rollupBabel({
			presets: [
				['es2015', {
					modules: false
				}]
			]
		}),
		rollupUglify({
			mangle: {
				keep_fnames: true
			}
		})
	]
};
