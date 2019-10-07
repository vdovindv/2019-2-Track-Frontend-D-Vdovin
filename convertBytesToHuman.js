/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if(isNaN(bytes)){
    return false 
  }
  if(bytes==Infinity){
    return false
  }
  if(bytes==-Infinity){
    return false
  }
  if(bytes<0){
    return false
  }
  if(typeof bytes != 'number'){ 
    return false
  }
  if(!Number.isInteger(bytes)){
    return false
  }
  var ind = 0;
  var labels = [' B' ,' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB']
  if(bytes>=1024){
    do{
      bytes = bytes/1024;
      ind++;
    }while (bytes>=1024)
  }
  return bytes+labels[ind];
}