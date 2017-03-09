var request = require('request');
var cheerio = require('cheerio');
var jsonframe = require('jsonframe-cheerio');

request("https://www.leboncoin.fr/caravaning/offres/rhone_alpes/?th=1&q=van&parrot=0&ps=15&pe=21", function(error, response, body) {
    if(error) {
        console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    jsonframe($);

   var frame = {  
      "vans": {
        _s: "li",
        _d: [{
          "name": "h2.item_title",
          "where": "p.item_supp[itemprop=availableAtOrFrom]",
          "price": "h3.item_price[itemprop=price]",
          "updatedAt": {
              _s: "p.item_supp[itemprop=availabilityStarts]",
            _p: /\d{1,2}\/\d{1,2\/\d{2,4}/
          },
          "url": {
            _s: "a",
            _a: "href"
          }
        }]
      }

    };

    var vansList = $('.tabsContent>ul').scrape(frame);  
    console.log(vansList); // Output the data in the terminal
});

//sample of data from https://www.leboncoin.fr/caravaning/offres/rhone_alpes/?th=1&q=van&parrot=0&ps=15&pe=21
/*
<section class="tabsContent block-white dontSwitch">
   <ul>
      <li itemscope="" itemtype="http://schema.org/Offer">
         <a href="//www.leboncoin.fr/caravaning/1102771287.htm?ca=22_s" title="Vw Transporter T5 aménagé" class="list_item clearfix trackable" data-info="{&quot;event_type&quot; : &quot;selfpromotion&quot;, &quot;campaign&quot; : &quot;ad_search&quot;, &quot;ad_listid&quot; : &quot;1102771287&quot;, &quot;ad_location&quot; : &quot;list_content&quot;, &quot;ad_position&quot; : &quot;1&quot;, &quot;ad_type&quot; : &quot;offres&quot;, &quot;ad_offres&quot; : &quot;part&quot;}">
            <!-- Listing item image -->
            <div class="item_image">
               <span class="item_imagePic">
               <span class="lazyload loaded" style="display:block; width:100%; height:100%;" data-imgsrc="//img6.leboncoin.fr/ad-thumb/638dcba1116d047ea7e4b3c9dfcd5bddcce0ff4d.jpg" data-imgalt="Vw Transporter T5 aménagé"><img itemprop="image" content="//img6.leboncoin.fr/ad-thumb/638dcba1116d047ea7e4b3c9dfcd5bddcce0ff4d.jpg" src="//img6.leboncoin.fr/ad-thumb/638dcba1116d047ea7e4b3c9dfcd5bddcce0ff4d.jpg" alt="Vw Transporter T5 aménagé"></span>
               </span>
               <span class="item_imageNumber">
               <i class="icon-camera icon-2x nomargin"></i>
               <span>3</span>
               </span>
            </div>
            <!-- Save ad (Mes annonces) -->
            <div title="" class="saveAd" data-savead-id="1102771287">
               <div class="saveMsg"><i class="showTip mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Sauvegarder l'annonce"></i></div>
               <div class="savedMsg"><i class="showTip red icon-heart icon-2x nomargin" data-position="left" data-text="Annonce sauvegardée"></i></div>
               <div class="disabledLink"><i class="showTip disabled mediumgrey icon-heart icon-2x nomargin" data-position="left" data-text="Le nombre maximum d'annonces sauvegardées a été atteint."></i></div>
               <div class="failedMsg"><i class="showTip disabled mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Fonctionnalité indisponible pour le moment."></i></div>
            </div>
            <!-- Listing item info -->
            <section class="item_infos">
               <h2 class="item_title" itemprop="name" style="outline: rgb(51, 102, 153) none 0px;">
                  Vw Transporter T5 aménagé
               </h2>
               <p class="item_supp" itemprop="category" content="" style="outline: rgb(26, 26, 26) none 0px;">
               </p>
               <p class="item_supp nd___highlighted" itemprop="availableAtOrFrom" itemscope="" itemtype="http://schema.org/Place" style="outline: rgb(204, 0, 0) dashed 2px;">
                  La Tronche
                  /
                  <meta itemprop="address" content="La Tronche">
                  Isère
                  <meta itemprop="address" content="Isère">
               </p>
               <meta itemprop="priceCurrency" content="EUR">
               <h3 class="item_price" itemprop="price" content="15500">
                  15 500&nbsp;€
               </h3>
               <aside class="item_absolute">
                  <p class="item_supp" itemprop="availabilityStarts" content="2017-03-06" style="outline: rgb(26, 26, 26) none 0px;">
                     6 mars, 10:55
                  </p>
               </aside>
            </section>
         </a>
      </li>
      <li itemscope="" itemtype="http://schema.org/Offer">
         <a href="//www.leboncoin.fr/caravaning/1101077124.htm?ca=22_s" title="Nissan Primastar aménagé DCI 115" class="list_item clearfix trackable" data-info="{&quot;event_type&quot; : &quot;selfpromotion&quot;, &quot;campaign&quot; : &quot;ad_search&quot;, &quot;ad_listid&quot; : &quot;1101077124&quot;, &quot;ad_location&quot; : &quot;list_content&quot;, &quot;ad_position&quot; : &quot;2&quot;, &quot;ad_type&quot; : &quot;offres&quot;, &quot;ad_offres&quot; : &quot;part&quot;}">
            <!-- Listing item image -->
            <div class="item_image">
               <span class="item_imagePic">
               <span class="lazyload loaded" style="display:block; width:100%; height:100%;" data-imgsrc="//img0.leboncoin.fr/ad-thumb/c75945243db995f8a934c6bbb751ab959a0e2214.jpg" data-imgalt="Nissan Primastar aménagé DCI 115"><img itemprop="image" content="//img0.leboncoin.fr/ad-thumb/c75945243db995f8a934c6bbb751ab959a0e2214.jpg" src="//img0.leboncoin.fr/ad-thumb/c75945243db995f8a934c6bbb751ab959a0e2214.jpg" alt="Nissan Primastar aménagé DCI 115"></span>
               </span>
               <span class="item_imageNumber">
               <i class="icon-camera icon-2x nomargin"></i>
               <span>3</span>
               </span>
            </div>
            <!-- Save ad (Mes annonces) -->
            <div title="" class="saveAd" data-savead-id="1101077124">
               <div class="saveMsg"><i class="showTip mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Sauvegarder l'annonce"></i></div>
               <div class="savedMsg"><i class="showTip red icon-heart icon-2x nomargin" data-position="left" data-text="Annonce sauvegardée"></i></div>
               <div class="disabledLink"><i class="showTip disabled mediumgrey icon-heart icon-2x nomargin" data-position="left" data-text="Le nombre maximum d'annonces sauvegardées a été atteint."></i></div>
               <div class="failedMsg"><i class="showTip disabled mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Fonctionnalité indisponible pour le moment."></i></div>
            </div>
            <!-- Listing item info -->
            <section class="item_infos">
               <h2 class="item_title" itemprop="name" style="outline: rgb(51, 102, 153) none 0px;">
                  Nissan Primastar aménagé DCI 115
               </h2>
               <p class="item_supp" itemprop="category" content="" style="outline: rgb(26, 26, 26) none 0px;">
               </p>
               <p class="item_supp nd___highlighted" itemprop="availableAtOrFrom" itemscope="" itemtype="http://schema.org/Place" style="outline: rgb(204, 0, 0) dashed 2px;">
                  Lyon 3ème
                  /
                  <meta itemprop="address" content="Lyon 3ème">
                  Rhône
                  <meta itemprop="address" content="Rhône">
               </p>
               <meta itemprop="priceCurrency" content="EUR">
               <h3 class="item_price" itemprop="price" content="12000">
                  12 000&nbsp;€
               </h3>
               <aside class="item_absolute">
                  <p class="item_supp" itemprop="availabilityStarts" content="2017-03-02" style="outline: rgb(26, 26, 26) none 0px;">
                     2 mars, 23:15
                  </p>
               </aside>
            </section>
         </a>
      </li>
      <li itemscope="" itemtype="http://schema.org/Offer">
         <a href="//www.leboncoin.fr/caravaning/1099817535.htm?ca=22_s" title="PL IVECO Unic aménagé" class="list_item clearfix trackable" data-info="{&quot;event_type&quot; : &quot;selfpromotion&quot;, &quot;campaign&quot; : &quot;ad_search&quot;, &quot;ad_listid&quot; : &quot;1099817535&quot;, &quot;ad_location&quot; : &quot;list_content&quot;, &quot;ad_position&quot; : &quot;3&quot;, &quot;ad_type&quot; : &quot;offres&quot;, &quot;ad_offres&quot; : &quot;part&quot;}">
            <!-- Listing item image -->
            <div class="item_image">
               <span class="item_imagePic">
               <span class="lazyload loaded" style="display:block; width:100%; height:100%;" data-imgsrc="//img0.leboncoin.fr/ad-thumb/5c2b73a90c8814fd9bc01b0eecd1bb428c332cd9.jpg" data-imgalt="PL IVECO Unic aménagé"><img itemprop="image" content="//img0.leboncoin.fr/ad-thumb/5c2b73a90c8814fd9bc01b0eecd1bb428c332cd9.jpg" src="//img0.leboncoin.fr/ad-thumb/5c2b73a90c8814fd9bc01b0eecd1bb428c332cd9.jpg" alt="PL IVECO Unic aménagé"></span>
               </span>
               <span class="item_imageNumber">
               <i class="icon-camera icon-2x nomargin"></i>
               <span>3</span>
               </span>
            </div>
            <!-- Save ad (Mes annonces) -->
            <div title="" class="saveAd" data-savead-id="1099817535">
               <div class="saveMsg"><i class="showTip mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Sauvegarder l'annonce"></i></div>
               <div class="savedMsg"><i class="showTip red icon-heart icon-2x nomargin" data-position="left" data-text="Annonce sauvegardée"></i></div>
               <div class="disabledLink"><i class="showTip disabled mediumgrey icon-heart icon-2x nomargin" data-position="left" data-text="Le nombre maximum d'annonces sauvegardées a été atteint."></i></div>
               <div class="failedMsg"><i class="showTip disabled mediumgrey icon-heart-outline icon-2x nomargin" data-position="left" data-text="Fonctionnalité indisponible pour le moment."></i></div>
            </div>
            <!-- Listing item info -->
            <section class="item_infos">
               <h2 class="item_title" itemprop="name" style="outline: rgb(51, 102, 153) none 0px;">
                  PL IVECO Unic aménagé
               </h2>
               <p class="item_supp" itemprop="category" content="" style="outline: rgb(26, 26, 26) none 0px;">
               </p>
               <p class="item_supp nd___highlighted" itemprop="availableAtOrFrom" itemscope="" itemtype="http://schema.org/Place" style="outline: rgb(204, 0, 0) dashed 2px;">
                  Viuz-en-Sallaz
                  /
                  <meta itemprop="address" content="Viuz-en-Sallaz">
                  Haute-Savoie
                  <meta itemprop="address" content="Haute-Savoie">
               </p>
               <meta itemprop="priceCurrency" content="EUR">
               <h3 class="item_price" itemprop="price" content="17500">
                  17 500&nbsp;€
               </h3>
               <aside class="item_absolute">
                  <p class="item_supp" itemprop="availabilityStarts" content="2017-02-28" style="outline: rgb(26, 26, 26) none 0px;">
                     28 fév, 11:21
                  </p>
               </aside>
            </section>
         </a>
      </li>
   </ul>
</section>
*/