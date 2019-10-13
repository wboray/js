/*
Сделать страницу, при загрузке которой, у пользователя просят ввести дату его рождения в формате “ДД.ММ.ГГ.”
Показать пользователю на экране его возраст, и сколько дней осталось до его дня рождения. В случае если день его рождения совпадает с текущим - поздравить :)
*/
let title = 'Сколько вам лет? Введите в формате ДД.ММ.ГГ.';

function getBirthday(attemption = 1, titleError = false)
{
  try {
    let q =  prompt((((attemption == 1) ? title : title + ` Неверный ввод, попытка ${attemption} из 3-х. `) + (titleError ? titleError : '')), '12.10.2017.');
    let objBirthday;
    if (typeof(q) === 'string' && (objBirthday = q.match(/^([0-9]{2})\.([0-9]{2})\.([0-9]{2,4})\.$/))){
      let date = new Date();
      date.setFullYear(objBirthday[3], objBirthday[2] - 1, objBirthday[1]);
      date.setHours(0, 0, 0, 0);
      if (objBirthday[3]!=date.getFullYear() || objBirthday[2]!=(date.getMonth() + 1) || objBirthday[1]!=date.getDate()) {
        throw new Error('enter no exist date');
      };
      return date;
    }else throw new Error('bad format date');
  } catch (e) {
    attemption++;
    if (attemption <= 3)
    {
      getBirthday(attemption, e.message);
    }else{
      throw e;
    }
  }
}
//setHours(hour, [min], [sec], [ms])
try {
  let result;
  if (result = getBirthday()){
    //возраст
    
    let age = new Date();
    //console.log(Date.now());
    //console.log(result);
    age.setTime(Date.now() - result.getTime());
    console.log((age.getFullYear() - 1970) + ' полных лет');
    
    //сколько дней до ДР
    console.log(result);
    //let dayTo = Object.assign({}, result);
    let dayTo = new Date(result.getTime());
    dayTo.setFullYear(0);
    dayTo.setHours(0, 0, 0, 0);
    let now = new Date();
    now.setFullYear(0);
    now.setHours(0, 0, 0, 0);
    if (now.getTime() - dayTo.getTime() == 0){
      console.log('поздравляю');
    }else if(now.getTime() - dayTo.getTime() > 0){
      console.log('до вашего др осталось ' + (now.getTime() - dayTo.getTime())/1000/60/60/24 + ' дней, на след год оно');
    }else if(now.getTime() - dayTo.getTime() < 0){
      console.log('до вашего др осталось ' + Math.abs((now.getTime() - dayTo.getTime())/1000/60/60/24) + ' дней, в этом году оно');
    }
    
  }else{
    console.log('Ошибка ввода формата');
  } 
} catch (e) {
  alert( "исключение во внешнем catch: " + e ); // ловим
}
