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
3.) index.htindex.html sayfasında sayfa ilk açıldığında css'lerin yüklenebilmesi için yeni oluşan styles.css dosyasını <link> olarak eklemen lazım yoksa css yüklenmez.
4.) npm run serve => ile çalıştır bakalım.

-----------Artık bunu git' gönderelim------
git status
git add .
git commit -m "..."
git push
------------------Production web server with EXPRESS----------
yarn add express@4.15.4
1.) server.js oluşturdun artık konsolda node server/server.js diye çalıştırdın ve 3000 portuna gittiğinde boş ekran görebilirsin.
    sebebi assets dosyalarının olmaması styes.css yok bunun için yarn run build:prod çalıştırınca bundle.js ve style.css oluşuyordu bunu yap.
    prod build çalıştırdıktan sonra node server/server.js çalıştırınca görürsün projeni.

---------------------------HEROKU--------------------------
1.) heroku --version yaz eğer yoksa heroku cli download yapman gerekir.
2.) heroku login
3.) heroku create react-expensify-app-with-test (=>First up behind the scenes Heroku is getting up your new application =>Second adding a new remote to your local repository)
4.) git remote dersen gitin yanında artık herokununda olduğunu görürsün.
5.) Heroku çalıştırmak için start scripti aricak. package.json'da bunu tanımlamamız gerekli.
6.) herokuya webpackide öğretmemiz için package.json'da "heroku-postbuild": "yarn run build:prod" => yazarak webpackbproduction build is going to run on the Heroku server. 
7.) üst satırda heroku server'ında yarn build:prod çalışacağından dolayı yani bundle.js ve styles.css dosyaları oluşacağından dolayı bunları .gitignore alıyoruz.
 çünkü zaten heroku serverı ayağ kalktıında build:prod yapacağından bunları oluşturucaktır.
8.) git status
9.) git add .
10.) git commit -m "setup production and server"
11.) git push
12.) git push heroku master(bunu yaptığımda package.lock.json ve yarn.lock her ikiside olduğundan hata verdi. .lock.json sil düzelir. )

(git remote rm heroku yazarsan remote'lardan heroku olanı silersin. Tekrar heroku create react-expensify-app-with-test ile oluşturup git push heroku master dersen sorun çıkmaz.)
13.) heroku open (heroku logs ile logları görebilirsin.)


--------------------GÜNCELLEME---------
herhangi bir değişiklik yaptığında herokuya deoloy için;
1.) git status => git add . => git commit -m "message" => git push => git push heroku master => heroku open


-------------------------Heroku config ayarları setleme----------
1.) heroku config => var olanları gösterir.
2.) heroku config:set KEY=value => bunu set eder eğer görmek istersen tekrar heroku config çalıştır.
3.) "heroku config:unset KEY" => bu set ettiğini kaldırmayaa yarar tekrar heroku config dersen kalktığını görürsün.
heroku'dda env'leri tnaıtmal için ise develpment'daki db bilgilerini set etmemiz gerekli birer boşluk bırakarak yazıyoruz.

heroku config:set FIREBASE_API_KEY=AIzaSyAQNlY7ZnDIgLBmhDr7oC0_zjqgANuP8L4 FIREBASE_API_KEY=AIzaSyAQNlY7ZnDIgLBmhDr7oC0_zjqgANuP8L4 FIREBASE_DATABASE_URL=https://exp
ensify-7fd97.firebaseio.com FIREBASE_PROJECT_ID=expensify-7fd97 FIREBASE_STORAGE_BUCKET=expensify-7fd97.appspot.com FIREBASE_MESSAGING_SENDER_ID=465999650962 FIREBASE_APP_ID=1:465999650962:web:9b27a343ef25f383aec6
4b FIREBASE_MEASUREMENT_ID=G-MF4REPEPP6

---------------------------------------------------------------------  
