let alphabet = ['z', 'c', 'd', 'a', 'y', 'a', 'w'];
alphabet.sort(function(a,b){
  if(a>b)return 1;
  if(a<b)return -1;
  return 0;
});
console.log(alphabet);

// second method


let arr =  ['z', 'c', 'd', 'a', 'y', 'a', 'w'];

for(let i = 0; i <arr.length;i++){
  for(let j = i+1; j <arr.length;j++){
    if(arr[i]>arr[j]){
      temp = arr+[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);