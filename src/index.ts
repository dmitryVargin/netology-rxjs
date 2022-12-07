import { ajax } from 'rxjs/ajax';

const data$ = ajax.getJSON('https://api.github.com/search/repositories?q=netology');

data$.subscribe((value) => console.log('data$ value', value));

const jsonPlaceholderData$ = ajax.getJSON('https://jsonplaceholder.typicode.com/todos');

jsonPlaceholderData$.subscribe((value) => console.log('jsonplaceholderData$ value', value));
