
test
e2e_protractor_homework
All tests

protractor protractor.conf.js


Single test
protractor protractor.conf.js --specs src/specs/depositCapitalix.spec.js (default url: http://localhost:4200)


All tests via Selenium-Ui 
protractor protractor_circleci.conf.js (default url: http://localhost:4200) (seleniumAddress: 'http://selenium-ui.dev-blackrockng.com:4444/#/')



ДЗ
- Запустить тест с обеими конфигурациями: protractor.conf.js, protractor_selenoid.conf.js
- Дописать текущий кейс, добавить проверки на то что ящик создан(понадобится еще одна пейджа)
- *** Написать еще одну спеку для любого другого сайта