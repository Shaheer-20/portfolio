const urls = [
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
  'https://images.unsplash.com/photo-1503376760367-11ea8eb2763f',
  'https://images.unsplash.com/photo-1542362567-b07e54358753',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c',
  'https://images.unsplash.com/photo-1469285994282-454ceb49e63c',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
  'https://images.unsplash.com/photo-1501594907296-38b47a469562',
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d'
];
Promise.all(urls.map(u => fetch(u, {method: 'HEAD'}).then(r => console.log(u, r.status))));
