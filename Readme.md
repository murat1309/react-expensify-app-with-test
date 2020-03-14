--------------GLOBAL---------
1.) babel src/app.js --out-file=public/scripts/app.js --presets=env,react (public -> scripts -> app.js 'e çalıştırmak istediğin js dosyasını veriyosun. )
2.) babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch (çalışa dursun) (canlı değişiklikk algılamak için)
3.) yeni sekmede => live-server public 

------------lOCAL------------(Tercih Et)
1.) yarn run serve
2.) yarn run build-babel (bunlar package.json'daki scriptlerden geliyor.)

--------with webpack------
1.) yarn run build
2.) yarn run serve

---------------then webpack-dev-server"---------
1.) yarn run dev-server (webpack.config'e eklediğimiz devServer sayesinde wepack'ide çalıştırıyor live-server'ıda.)
                         (ancak bundkle.js oluşmuyor memoryde kullanıyor bunu. prod'a çıkmak için oluşturmn gerekebilir bunun için) => yarn run build



-----------test scriptini çalıştırısan tests dosyaları çalışır.------
yarn add jest@20.0.4 (fonksiyonlar için)
yarn add react-test-renderer@16.0.0 (componentler için)
in package json => "test": "jest"
 
 ====> yarn test -- --watch diye çalıştırırsan her saniye değişiklikleri görerek testlerini çalışırır.
 
 (COMPONENTLER İÇİN YENİ ÖZELLİK)
 
yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2 
yarn add enzyme-to-json@3.0.1 

create "setupTests.js" and "jest.config.json"
in package json => "test": "jest --config=jest.config.json"

=====> yarn test -- --watch 

---------------------DEOPLOY---------------
1.) git pc'de yoksa "https://git-scm.com/downloads" sitesinden indir konsolda "git --version" kontrolünü yap
2.) git init
3.) "git status" yaptın nelerin gidiceğini gördün ancak gitmesini istemediğin dosyaları için mesela node_modules .gitignore oluşturdun.
4.) tekrar "git status" yap ve .gitignore klasöründe eklediğin dosyaların bu sefer görünmediğini görüceksin.
5.) "git add ." ile herşeyi aldım dedin. git status ile kontrol ettin.
 
