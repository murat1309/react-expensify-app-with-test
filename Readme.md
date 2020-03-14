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

---------------------DEOPLOY --GİT--SSH--Webpack-----------------


1.) git pc'de yoksa "https://git-scm.com/downloads" sitesinden indir konsolda "git --version" kontrolünü yap
2.) git init
3.) "git status" yaptın nelerin gidiceğini gördün ancak gitmesini istemediğin dosyaları için mesela node_modules .gitignore oluşturdun.
4.) tekrar "git status" yap ve .gitignore klasöründe eklediğin dosyaların bu sefer görünmediğini görüceksin.
5.) "git add ." ile herşeyi aldım dedin. git status ile kontrol ettin.
6.) "git commit -m "Initial commit" (note => gşt log ile yapılan commit'leri görebilirsin.)

-----------#Git Commands#--------------
git init => Create a new git repo
git status => View the changes to your project code
git add . => Add files to staging area
git commit => Create a new commit with files from staging area
 git log => View recent commits

---------------Setting SSH and Github-----------------
1.) Create a new repository
2.) proje dizinine gidip git bash başlat ve "ls -a ~/.ssh" komutu çalıştır. (zaten varsa listelenecektir.)
3.) ssh-keygen -t rsa -b 4096 -C "muratcan.gokyokus@hotmail.com" (yukardakinde zaten görünüyorsa tekrar oluşturmana gerek yok)
4.) olsada olmasada bu adımdan devam => eval $(ssh-agent -s) (Ssh-agent'ın çalıştığından emin oluyoruz. Bir pid nuaraı görünüyor.)
5.) ssh-add ~/.ssh/id_rsa (Add your SSH private key to the ssh-agent.)
6.) clip < ~/.ssh/id_rsa.pub (keyi kopyaladık 6.1' maddede yapıştırcaz)
 6.1) githuba geç => settings => SSH and GPG keys => New SSH key =>  burda yapıştırıyoruz.
7.) artık githubdaki şu 2 maddeyi yapabiliriz. (Https değil ssh olanı seçtikten sonra 2 maddenin ilkini yapıştırıyorum aşağıdaki maddede)
 7.1) git remote add origin git@github.com:murat1309/react-expensify-app-with-test.git
 7.2) git push -u origin master (artık github'da kodlarını görebilirsin.)
 
----------------Webpack-----
1.)package.json ve webpack.config dosyalarında production için bazı yarlamalar yaptık (webpck -p --env production)

----------------CSS----------
1.) yarn add extract-text-webpack-plugin@3.0.0 
    Bundle js içindeki css yükünden kurtulmak için kütüphane yüklüyoruz.
    Böylece style'lar artık JS paketinde değil, ayrı bir CSS dosyası (styles.css) içine alınmıştır. 
    Toplam style sayfası biriminiz büyükse, CSS paketi JS paketine paralel olarak yüklendiği için daha hızlı olacaktır.
    
2.) webpack.config.js'de ilgili düzenlemeler yapıldıktan sonra tekrar npm run build:prod çalıştırırsan artık css dosyaların styles.css altında çalışacaktır.     
3.) index.html sayfasında sayfa ilk açıldığında css'lerin yüklenebilmesi için yeni oluşan styles.css dosyasını <link> olarak eklemen lazım yoksa css yüklenmez..   
4.) npm run serve => ile çalıştır bakalım.


