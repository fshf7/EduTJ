function configureDropDownLists(ddl1,ddl2) {
   let uni_1 = ['Программное обеспечение информационных технологий', 
                  'Информационные системы и технологии', 
                  'Информационная безопасность',
                  'Разработка интеллектуальных систем',
                  'Коммуникационные сети и обмен информацией',
                  'ИТ и управление в технических системах'];
   let uni_2 = ['Прикладная информатика',
               'Компьютерная безопасность',
               'Экономическая кибернетика',
               'Информационные технологии и системы',
               'Программное обеспечение информационных технологий'];
   let uni_3 = ['Программное обеспечение информационных технологий',
               'Коммуникационные сети и обмен информацией',
               'Компьютерная безопасность',
               'Автоматизация систем управления',
               'Экономическая кибернетика'];
   let uni_4 = ['Искусственный интеллект', 
               'Программная инженерия', 
               'Системы безопасности данных',
               'Компьютерные системы и интернет-технологии',
               'Программное обеспечение информационных технологий',
               'Программное обеспечение автоматизированного производства'];

   switch (ddl1.value) {
      case 'University1':
         ddl2.options.length = 0;
         for (i = 0; i < uni_1.length; i++) {
            createOption(ddl2, uni_1[i], uni_1[i]);
         }
         break;
      case 'University2':
         ddl2.options.length = 0; 
      for (i = 0; i < uni_2.length; i++) {
            createOption(ddl2, uni_2[i], uni_2[i]);
         }
         break;
      case 'University3':
         ddl2.options.length = 0;
         for (i = 0; i < uni_3.length; i++) {
            createOption(ddl2, uni_3[i], uni_3[i]);
         }
         break;
      case 'University4':
         ddl2.options.length = 0;
         for (i = 0; i < uni_4.length; i++) {
            createOption(ddl2, uni_4[i], uni_4[i]);
         }
      break;
         default:
            ddl2.options.length = 0;
         break;
   }

}

function createOption(ddl, text, value) {
   let opt = document.createElement('option');
   opt.value = value;
   opt.text = text;
   ddl.options.add(opt);
}

window.onload = function () {
   document.body.classList.add('loaded_hiding');
     window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
     }, 500);
}


