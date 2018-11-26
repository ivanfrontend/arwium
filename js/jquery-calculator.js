// Массив настроек 1
var massLi = [
  {
    id: '0',
    fno: 'Выбрать',
    value: '',
    personal: '',
    blankLine: ''
},
  {
    id: '1', // id
    fno: 'Единый налог', // налогообложения
    value: '15', // Цена за налогообложения
    personal: '25', // количество сотрудников
    blankLine: '5'

},
  {
    id: '2',
    fno: 'Упрощенная система налогообложения',
    value: '25',
    personal: '25',
    blankLine: '5'
},
  {
    id: '3',
    fno: 'УСН с НДС',
    value: '45',
    personal: '25',
    blankLine: '5'
},
  {
    id: '4',
    fno: 'Подоходный налог',
    value: '60',
    personal: '25',
    blankLine: ''
},
  {
    id: '5',
    fno: 'Подоходный налог с НДС',
    value: '60',
    personal: '25',
    blankLine: ''
}
 ];
 // Конец

// Массив настроек 2
 var massLi2 = [
   {
     id: '0',
     fno: 'Выбрать',
     value: '',
     personal: '25',
     blankLine: ''
 },
   {
     id: '1',
     fno: 'Упрощенная система налогообложения',
     value: '40',
     personal: '25',
     blankLine: ''
 },
   {
     id: '2',
     fno: 'УСН с НДС',
     value: '60',
     personal: '25',
     blankLine: ''
 },
   {
     id: '3',
     fno: 'ОСН',
     value: '100',
     personal: '25',
     blankLine: ''
 },

  ];

// Конец

// Функция для выподающего списка
function clickOpen() {

	if(jQuery(this).parent().hasClass('open')){
			jQuery(this).parent().toggleClass('open');
			var text = jQuery(this).text();
			var dataId = jQuery(this).data("id");
			var dataValue = jQuery(this).data("value");
			jQuery(this).siblings('li:first-child').text(text);
			jQuery(this).siblings('li:first-child').attr("data-id", dataId);
			jQuery(this).siblings('li:first-child').attr("data-value", dataValue);
			// console.log('Закрыто');
	// ЗАКРЫТО
	}else{
    $('.my_delit_class ul').removeClass('open');
		jQuery('.fora-sob ul').removeClass('open');
		jQuery(this).parent().toggleClass('open');
		jQuery(this).parent().find('li:first-child').text('Выбрать');
		// jQuery(this).attr("data-id", '0');
		// console.log('открыто');
	// ОТКРЫТО
	}
};
// Конец

// Вызов функции выподающего списка
jQuery('.fora-sob ul li').on('click', clickOpen);
// Конец


// Функция количество сотрудников
function input_jobs(ths, mass) {
  $('.mylabelDelInput').remove();
  mass.map(function (i, item){
    if(ths == i.id){
      if(i.personal !== '' && i.personal !== undefined){
        console.log(typeof(i.personal));
        $('.input-jobs').append('<label class="mylabel mylabelDelInput" for="from">Кол-во сотрудников:</label>');
        $('.input-jobs').append('<input type="text" class="form-control  only_number mylabelDelInput" id="from-place" placeholder="Укажите число"/>');
      }
      if(i.blankLine !== '' && i.blankLine !== undefined){
        $('.blank_line').append('<label class="mylabel mylabelDelInput" for="class">Бланки строгой отчётности: </label>');
        $('.blank_line').append('<div class="wrap_label mylabelDelInput"><div class="wrap_radio blank_line_yes_no"></div></div>');
        $('.blank_line_yes_no').append('<label class="myStyleLabel"><span class="label">Да'+i.blankLine+'</span><input  class="checkbox radioYes delit_disabled" data-role="100" name="dzen0" type="radio" value="dzen"><span class="checkbox-custom"></span></label>');
        $('.blank_line_yes_no').append('<label class="myStyleLabel"><span class="label">Нет'+i.blankLine+'</span><input class="checkbox radioNo delit_disabled" data-role="100" name="dzen0" type="radio" value="dzen"><span class="checkbox-custom"></span></label>');
      }
    }
  });
  // Отключение возможности вода цифер
  jQuery(".only_number").keypress(function(e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
    return false;
    }
  });
}
// Конец



function funIP(clickOpen, mass) {
  // Удоление налогообложения
  $('.mylabelDel').remove();
  $('.click-chaild').remove();
  // Конец

  $('.mylabelDelInput').remove();

  // Создание списка налогообложения
  $('.click_wrap_section_servis').append('<label class="mylabel mylabelDel" for="class">Услуги</label>');
  $('.click_wrap_section_servis').append('<div class="wrap click-chaild ch2 my_delit_class"><ul></ul></div>');
  // Конец

  // Создаём input для Кол-во сотрудников с свойством disabled="disabled"
  $('.input-jobs').append('<label class="mylabel mylabelDelInput" for="from">Кол-во сотрудников:</label>');
  $('.input-jobs').append('<input type="text" class="form-control only_number mylabelDelInput" disabled="disabled" id="from-place" placeholder="Укажите число"/>');
  // Конец

  // создаём бланки строкой отчётности
  $('.blank_line').append('<label class="mylabel mylabelDelInput" for="class">Бланки строгой отчётности: </label>');
  $('.blank_line').append('<div class="wrap_label mylabelDelInput"><div class="wrap_radio blank_line_yes_no"></div></div>');
  $('.blank_line_yes_no').append('<label class="myStyleLabel"><span class="label">Да</span><input  class="checkbox radioYes delit_disabled" disabled="disabled" data-role="100" name="dzen0" type="radio" value="dzen"><span class="checkbox-custom"></span></label>');
  $('.blank_line_yes_no').append('<label class="myStyleLabel"><span class="label">Нет</span><input class="checkbox radioNo delit_disabled" disabled="disabled" data-role="100" name="dzen0" type="radio" value="dzen"><span class="checkbox-custom"></span></label>');
  // Конец



  // map по объектам
  mass.map(function (i, item) {
    $('.ch2 ul').append('<li data-id="'+i.id+'" data-value="'+i.value+'">'+i.fno+'</li>');
  });
  // Конец

  // Вызов функции клик "форма собственности"
  $('.click-chaild ul li').on('click', clickOpen);
  // Конец


// Вызов функции для сознания input Кол-во сотрудников
  $('.click-chaild ul li').on('click', function() {
      var ths = $(this).data('id');
      input_jobs(ths, mass);
  });
  // Конец



};

// Вызов функции для ИП
$('.funIP').on('click', function() {
    funIP(clickOpen, massLi);
});
// Конец

// Вызов функции для ЧУП, ООО
$('.funCHUP').on('click', function() {
    funIP(clickOpen, massLi2);
});
// Конец
