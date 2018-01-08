import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'captionFilter'
})

@Injectable()
export class CaptionFilter implements PipeTransform {

	transform(str, wordSensitive, limit, start): String {

		str = str || '';
		wordSensitive = wordSensitive || false;
		limit = limit || 0;
		start = start || 0;

		let pretty_str = '';

		if (str.length > limit) {
			let pretty_str_arr = str.substring(start, limit).split(' ');
			pretty_str_arr.pop();
			pretty_str = pretty_str_arr.join(' ') + "...";
		} else {
			pretty_str = str;
		}
		
		return pretty_str;
	}

}