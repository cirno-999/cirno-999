// Array of cat info
var catInfo = [
    'Kot birmański, znany również jako "Święty Kot Birmy", to rasa o niepowtarzalnym czarze, której korzenie sięgają południowo-wschodniej Azji. Znane są z delikatnej, aksamitnej sierści, której kolor najczęściej oscyluje wokół odcieni kremu lub złota, a kontrastujące ciemniejsze "maski" na twarzy, uszach, nogach i ogonie tworzą wyjątkowo elegancki wygląd. Birmanki, jak często są nazywane, są pełne energii i towarzyskie, uwielbiają bawić się i interakcje z ludźmi. Są również zrównoważone i spokojne, co czyni je idealnymi towarzyszami dla rodzin. Słyną z głębokich, błękitnych oczu, które patrzą z niezwykłą ciekawością i zrozumieniem na świat wokół nich. Biorąc pod uwagę ich wyjątkową inteligencję i łatwość w nauce, nie powinno dziwić, że są często uważane za jedne z najbardziej uroczych i ulubionych ras kotów na świecie.',
    'Turecki van to niezwykle unikalna i rzadka rasa kota, która pochodzi z regionu Van w Turcji. Charakteryzują się krępą budową ciała, długą, puszystą sierścią i jaskrawo niebieskimi lub orzechowymi oczami – a niektóre z nich mają nawet jedno oko każdego koloru, co jest zjawiskiem znanym jako heterochromia. Co ciekawe, Tureckie Vany są jednymi z niewielu ras kotów, które wykazują naturalną skłonność do pływania! Uwielbiają zabawę w wodzie, co jest rzadkością w świecie kotów. Mają one zazwyczaj biały kolor sierści z charakterystycznymi "rękawami" i "czapeczką" o kolorach czerwonym, kremowym lub niebieskim. Są to koty bardzo aktywne, inteligentne i towarzyskie, choć mogą okazać się nieco niezależne. Mimo to, ich lojalność i przywiązanie do właścicieli są niezwykłe, co czyni je doskonałymi towarzyszami dla tych, którzy szukają kota z charakterem.',
    'Kot europejski krótkowłosy, często zwany po prostu kotem europejskim, to jedna z najbardziej naturalnych i najstarszych ras kota. Te koty, które mają swoje korzenie w Europie, są znane z ich silnej budowy, krótkiej, gęstej sierści i szerokiej gamy kolorów i wzorów. Co ciekawe, nie jest to rasa stworzona przez człowieka, ale raczej produkt naturalnej selekcji, co czyni je niezwykle zdrowymi i odpornymi. Są to koty o wyjątkowo zrównoważonym charakterze - są spokojne, ale jednocześnie pełne energii, niezależne, ale też bardzo oddane swoim właścicielom. Ich inteligencja i zróżnicowany charakter sprawiają, że doskonale nadają się do życia w różnych warunkach, czy to na wsi, czy w mieście. Koty europejskie krótkowłosy są również znane ze swojej skłonności do zabawy, co czyni je doskonałymi towarzyszami dla dzieci.',
    'Kot brytyjski krótkowłosy to urocza i uznana rasa kota, która wywodzi się z Wielkiej Brytanii. Charakteryzuje się muskularną budową ciała, szeroką klatką piersiową i krótką, gęstą sierścią o jednolitym kolorze. Jego głowa jest szeroka, a oczy duże i wyraziste. Brytyjczyk posiada spokojny i łagodny charakter, co czyni go doskonałym towarzyszem dla rodzin i osób samotnych. Są bardzo przyjacielskie, lojalne i dobrze odnajdują się w domowym środowisku. Cechuje je także umiarkowany poziom aktywności, więc nie wymagają zbyt wiele miejsca do biegania. Brytyjczyki są zazwyczaj ciche, niezależne i łatwe do pielęgnacji, co czyni je popularnym wyborem dla wielu miłośników kotów. Ich czułe i czułe usposobienie sprawia, że są doskonałymi towarzyszami na długie chwile spędzone na przytulaniu się i relaksowaniu się.',
    'Rasa Kota Pomarańczowego, chociaż nie oficjalnie uznana, jest powszechnie znana i ukochana przez wielu miłośników kotów. Ich intensywny, pomarańczowy kolor sierści, który wydaje się niemal mienić odcieniami złota w słonecznym świetle, jest naprawdę niepowtarzalny.\n\n' +
    'Koty Pomarańczowe są znane ze swojego niezależnego i nieco niegrzecznego charakteru. Są inteligentne, ciekawe świata i mają niezaprzeczalny talent do wpadania w tarapaty. Ich psoty często obejmują chowanie się w niewłaściwym miejscu, zabawę z niedostępnymi przedmiotami lub nieoczekiwane skoki na wysokie półki.\n\n' +
    'Mimo ich nieco szelmowskiego zachowania, Koty Pomarańczowe są niezwykle lojalne i affektywne. Chociaż są niezależne, cieszą się również z towarzystwa swoich ludzkich domowników. Są doskonałymi towarzyszami, którzy potrafią okazać miłość i przywiązanie na wiele różnych sposobów.',
    'Kot japoński bobtail to wyjątkowa i urocza rasa kota, która ma swoje korzenie w Japonii. Jego najbardziej charakterystyczną cechą jest krótki, pomponowaty ogon, który jest wynikiem naturalnej mutacji genetycznej. Ogony japońskich bobtaili mają różne kształty i długości, co nadaje im niepowtarzalny wygląd i osobowość. Są to koty średniej wielkości z delikatną sylwetką, zwinne i eleganckie. Ich futro może występować w różnych kolorach i wzorach, w tym klasycznym białym z plamami lub cętkami. Koty japońskie bobtail są niezwykle inteligentne, żywiołowe i towarzyskie. Z łatwością nawiązują więź z ludźmi i innymi zwierzętami, co czyni je doskonałymi towarzyszami. Są pełne energii i uwielbiają zabawy, zarówno z zabawkami, jak i z członkami rodziny. Ich radosny charakter sprawia, że są doskonałymi towarzyszami dla aktywnych i ciekawych świata osób, które cenią sobie niezwykłe osobowości i wyjątkowy wygląd kotów.',
    'Kot burmski, pochodzący z Birmy (obecnie Myanmar), to rasa o ujmującym wyglądzie i niezwykłym charakterze. Burmanki są średniej wielkości, muskularne i mają krągłe kształty, co nadaje im przyjemny dotyk i wspaniały balans. Ich sierść jest krótka, gładka i jedwabista, często w intensywnych odcieniach miodowego lub ciemnego brązu. Ich oczy są duże, wyraziste i mają intensywny kolor złotego, bursztynowego lub zielonego. Burmanki słyną ze swojego czułego i przyjacielskiego charakteru. Są niezwykle oddane swoim właścicielom i chętnie spędzają czas na przytulaniu się i dawaniu miłości. Są też aktywne i uwielbiają zabawę, więc dostarczają wiele radości i rozrywki w domu. Burmanki są inteligentne, łatwe do szkolenia i szybko nawiązują więź z ludźmi. To koty, które doskonale nadają się do życia w rodzinie i stanowią wspaniałych towarzyszy na co dzień.',
    'Kot egejski, nazywany również kotem z Egejskich Wysp, to urocza rasa pochodząca z regionu Morza Egejskiego. Charakteryzuje się średniej wielkości ciałem, zwinnością i eleganckim wyglądem. Ich sierść jest krótka, gęsta i o pięknej fakturze, występująca w różnorodnych kolorach i wzorach. Koty egejskie słyną z ich żywiołowego i energicznego charakteru. Są pełne życia, aktywne i lubią zabawę. Lubią także być w centrum uwagi i cieszyć się interakcjami z ludźmi. Są inteligentne, towarzyskie i łatwo nawiązują więź z członkami rodziny. Koty egejskie są również zazwyczaj zdrowe i odporne na różne choroby, co czyni je doskonałymi towarzyszami na długie lata. Z ich ciekawym temperamentem i pięknym wyglądem, koty egejskie są z pewnością doskonałym wyborem dla miłośników kotów, którzy szukają energicznego, inteligentnego i kochającego towarzysza.',
    'Kot amerykański curl to wyjątkowa rasa kota, znana głównie ze swoich charakterystycznych zwiniętych uszu. Ta niezwykła cecha jest wynikiem naturalnej mutacji genetycznej. Koty amerykańskiego curla występują w różnych kolorach i wzorach sierści, od krótkiej do długiej, puszystej. Ich futro jest miękkie i jedwabiste w dotyku. Oprócz swoich niezwykłych uszu, amerykańskie curle są również doceniane za swoje wspaniałe usposobienie. Są to koty inteligentne, ciekawskie i pełne wdzięku. Lubią towarzystwo ludzi i łatwo nawiązują więź z rodziną. Są też aktywne i uwielbiają interakcje, zarówno zabawy z zabawkami, jak i pogawędki z właścicielami. Koty amerykańskiego curla są także znane ze swojej łagodności i łatwości w nauce, co czyni je doskonałymi uczniami podczas treningu. Z ich uroczymi uszami i przyjaznym charakterem, koty amerykańskiego curla są wyjątkowymi towarzyszami dla rodzin i osób, które poszukują niezwykłego i czułego kota w swoim życiu.',
    'Kot arabski Mau to piękna rasa kota, którą można odnaleźć w rejonie Półwyspu Arabskiego. Charakteryzuje się elegancką sylwetką, smukłymi kończynami i umięśnionym ciałem. Jego sierść jest krótka i gładka, a dostępne są różne odmiany kolorystyczne, takie jak srebrne, brązowe, czarne i niebieskie. Jednak najbardziej charakterystyczną cechą kota arabskiego Mau są jego wielkie, migoczące oczy o intensywnym kolorze, które dodają mu wyjątkowej urody. To inteligentne i energiczne koty, które uwielbiają bawić się i eksplorować. Są towarzyskie, lojalne i często wiążą się silną więzią ze swoimi właścicielami. Koty arabskiego Mau mają także zdolność dostosowania się do różnych sytuacji i otoczenia. Są znane ze swojej szybkości i zwinności, co czyni je wspaniałymi myśliwymi. Ze swoim egzotycznym wyglądem i pełnym energii charakterem, koty arabskiego Mau są niewątpliwie wspaniałymi towarzyszami dla miłośników kotów, którzy szukają niezwykłej rasy, która przyniesie im radość i fascynację.',
];

var imageBoxes = Array.from(document.querySelectorAll('.image-box'));
var infoBox = document.getElementById('info-box');
var infoText = infoBox.querySelector('.info-text');
var closeButton = infoBox.querySelector('.close-button');

function checkMobileView() {
  return window.innerWidth <= 1600;
}

function toggleInfoBox(index) {
  infoText.innerText = catInfo[index];
  if(infoBox.style.opacity === '0' || infoBox.style.opacity === ''){
    infoBox.style.opacity = '1';
  } else {
    infoBox.style.opacity = '0';
  }
}

function hideInfoBox() {
  infoBox.style.opacity = '0';
}

  infoBox.style.opacity = '0';

var eventHandlers = imageBoxes.map(function(_, index) {
  return {
    click: function() { toggleInfoBox(index); },
    mouseenter: function() { infoText.innerText = catInfo[index]; infoBox.style.opacity = '1'; },
    mouseleave: hideInfoBox
  };
});

function updateEventListeners(isMobileView){
  for (let i = 0; i < imageBoxes.length; i++) {
    if (isMobileView) {
      imageBoxes[i].addEventListener('click', eventHandlers[i].click);
      imageBoxes[i].removeEventListener('mouseenter', eventHandlers[i].mouseenter);
      imageBoxes[i].removeEventListener('mouseleave', eventHandlers[i].mouseleave);
    } else {
      imageBoxes[i].removeEventListener('click', eventHandlers[i].click);
      imageBoxes[i].addEventListener('mouseenter', eventHandlers[i].mouseenter);
      imageBoxes[i].addEventListener('mouseleave', eventHandlers[i].mouseleave);
    }
  }
}

window.addEventListener('resize', function () {
  var isMobileView = checkMobileView();
  updateEventListeners(isMobileView);
});

var isMobileView = checkMobileView();
updateEventListeners(isMobileView);

closeButton.addEventListener('click', function () {
  infoBox.style.opacity = '0';
});
