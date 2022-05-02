<template>
<div id="app">

        <!--<h1 id="colonyH1">{{title}}</h1>-->

        <div id="blocks-Artists">

            <div v-for="(item, i) in colony" v-bind:key="i">

            

            <div class="block-Artists">
                <p class="block-Artists-header"><img v-bind:src="item.pic"/>{{item.name}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-bio break_long_text">{{item.bio}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-website break_long_text"><a v-bind:href="item.website" target="_blank">{{item.websiteShow}}</a></p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-title break_long_text">Featured {{item.feat}}.</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-email break_long_text">{{item.email}}</p>
                <hr class="colonyHr">
                <p class="block-Artists-link artist-rec break_long_text">{{item.pronoun}}</p>
                <br>
            </div>

        </div>
</div>
<slot/>
</div>
</template>


<script>

export default {
    name: "VolvoxColony",
    data: function() {
        return {
            title: "Colony",
            colony: [
            {
                name: 'Tiana Dueck',
                feat: 'in everything',
                bio: 'Website maker, community enthusiast, & more. (aka algae)',
                email: 'tiana@volvoxvault.com',
                website: 'https://tiana.computer/',
                websiteShow: 'tiana.computer',
                pronoun: 'she/they',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Ftiana.png?v=1621626077335',
            },
            {
                name: 'Ari Lotter',
                bio: 'Computer.',
                website: 'https://ari.computer/',
                websiteShow: 'ari.computer',
                feat: 'on the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Farilotter.png?v=1621627984943',
            },

            {
                name: 'Jeremy Franczyk',
                feat: 'in heart',
                bio: 'Fashionista and friend.',
                email: '@jeremyfranczyk',
                website: 'https://jeremyfranczyk.myportfolio.com/',
                websiteShow: 'jeremyfranczyk.myportfolio.com',
                pronoun: 'he/him',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Romina Malta',
                feat: 'in heart and volvox times',
                bio: 'An art director and music lover.',
                email: 'hi@hi-malta.com',
                website: 'https://www.door.link/',
                websiteShow: 'door.link',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Luísa Cruz',
                feat: 'in heart',
                bio: 'Artist and friend',
                email: '',
                website: 'https://www.instagram.com/lupsc/',
                websiteShow: '@lupsc',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Mivan Makia',
                feat: 'in heart',
                bio: 'Artist and friend',
                email: '',
                website: 'https://www.instagram.com/mivsmak/',
                websiteShow: '@mivsmak',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Leslie Liu',
                feat: 'in heart',
                bio: 'Designer based in St. Louism dedicated to silly and serious things.',
                email: ' liuleslie@wustl.edu',
                website: 'https://lliu.site/',
                websiteShow: 'lliu.site',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Kristoffer Tjalve',
                feat: 'in heart',
                bio: 'Dad.',
                email: 'kristoffer@naiveweekly.com',
                website: 'https://kristoffer.substack.com/',
                websiteShow: 'kristoffer.substack.com',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Ana Santl',
                feat: 'in heart',
                bio: 'I am a Slovenian photographer, currently based in Copenhagen.',
                email: 'hello@iamnotana.com',
                website: 'https://www.iamnotana.com/',
                websiteShow: 'iamnotana.com',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Seán Krow',
                feat: 'in heart',
                bio: 'A Laniakean care-taker living amongst dinosaurs in a town named after a dead whale rotting on a beach.',
                email: 'are.na/sean',
                website: 'https://umhi.xyz/sean/',
                websiteShow: 'umhi.xyz',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Leah Maldonado',
                feat: 'in heart',
                bio: 'Designer?',
                email: 'hi@leahmaldo.com',
                website: 'https://www.are.na/leah-maldonado',
                websiteShow: 'are.na/leah-maldonado',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Samuel Letnik',
                feat: 'in heart',
                bio: 'I make stuff & take photos.',
                email: 'letniksamuel@gmail.com',
                website: 'https://www.cuffgod.com/',
                websiteShow: 'cuffgod.com',
                pronoun: 'he/him',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Carling Bulger',
                feat: 'in heart',
                bio: 'wizard ✿❀❁❣︎❤︎☀︎☆☄︎☔︎☮︎☼☺︎♪♫⚛︎࿊',
                email: '@portcarling',
                website: 'https://www.instagram.com/portcarling/',
                websiteShow: 'portcarling',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Spirit Josh',
                feat: 'in heart',
                bio: 'A toronto based band.',
                email: '@spirit.josh',
                website: 'https://linktr.ee/spiritjosh',
                websiteShow: 'spirit josh website',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Norman',
                feat: 'in volvox times',
                bio: 'Art and community at Teal Process.',
                email: 'heyo@wadeful.net',
                website: 'http://wadeful.net/heyo',
                websiteShow: 'wadeful.net',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },
            {
                name: 'Yatu',
                feat: 'in volvox times',
                bio: 'I enjoy putting energy towards Teal Process & Company.',
                email: 'WhosYatu@gmail.com ',
                website: 'http://yatu.xyz/',
                websiteShow: 'yatu.xyz',
                pronoun: '',
                pic: 'https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/usr.png?v=1651526023814',
            },


            {
                name: 'Julie MoontidePoet',
                feat: 'in horoscopes.',
                bio: 'Heart-made Poetry for the Big Wide World...',
                email: '@moontidepoet',
                website: '/horoscopes',
                websiteShow: 'horoscopes ☽',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjulie.png?v=1629598753643',
            },
            {
                name: 'Beatrice Douaihy',
                bio: 'Digital pagan and techno-nostalgist.',
                website: 'https://uncaughtinpromise.bandcamp.com/',
                websiteShow: 'Uncaught (in promise)',
                feat: 'in Identity, Aggregate, & website',
                email: 'beatrice.douaihy@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fbea.png?v=1621622044084',
            },
            {
                name: 'Adrian Pop',
                feat: 'in Metamorphosis',
                bio: 'Filmmaker.',
                email: '-',
                website: 'https://www.instagram.com/_adrianpop/',
                websiteShow: '_adrianpop',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fadrian.png?v=1627753588996',
            },
            {
                name: 'Kayla Esser',
                feat: 'in Metamorphosis',
                bio: 'Seamstress, baker, yogi, friend.',
                email: '-',
                website: 'https://www.instagram.com/kay.esser/',
                websiteShow: 'kay.esser',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkayla.png?v=1627754183810',
            },
            {
                name: 'Henry Holtgeerts',
                feat: 'in Metamorphosis',
                bio: 'Web developer & artist.',
                email: 'henryholtgeerts@gmail.com',
                website: 'https://www.henryholtgeerts.com/',
                websiteShow: 'henryholtgeerts.com',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fhenry.png?v=1627753588962',
            },
            {
                name: 'Khalil Stemmler',
                feat: 'in Metamorphosis',
                bio: 'Computer wizard.',
                email: '-',
                website: 'https://khalilstemmler.com/',
                websiteShow: 'khalilstemmler.com',
                pronoun: 'He/Him',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkhalil.png?v=1627753589030',
            },
            {
                name: 'Shannon Kennedy',
                feat: 'in Metamorphosis',
                bio: 'Artist.',
                email: '-',
                website: 'https://www.instagram.com/sketchyshan/',
                websiteShow: 'sketchyshan',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fshannon.png?v=1627753589114',
            },
            {
                name: 'Ada Bierling',
                feat: 'in Metamorphosis',
                bio: 'Artist.',
                email: '-',
                website: '-',
                websiteShow: '-',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fada.png?v=1627754269090',
            },
            {
                name: 'Jake Fee',
                feat: 'in Metamorphosis',
                bio: 'Likes mud walks and knitting.',
                email: 'http://fee.cool/note/',
                website: 'http://fee.cool/',
                websiteShow: 'fee.cool',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271',
            },
            
            {
                name: 'e-worm.club',
                feat: 'in Metamorphosis',
                bio: 'friends',
                email: '-',
                website: 'https://e-worm.club/',
                websiteShow: 'e-worm.club',
                pronoun: '-',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Feworm.png?v=1627754078232',
            },
            {
                name: 'Em Biggs',
                feat: 'in horoscopes, Identity, Proximity, & website',
                bio: 'Probably looking at the moon. - Email for tarot and natal chart reading inquiries!',
                email: 'themoonthestarsandem@gmail.com',
                website: '/horoscopes',
                websiteShow: 'horoscopes ☽',
                pronoun: 'she/they',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fem.jpg?v=1621623775914',
            },
            {
                name: 'Aidan Mcteague',
                bio: 'I am Aidan and I want to hear your weirdest thoughts.',
                website: '/horoscopes',
                websiteShow: 'No website.',
                feat: 'in Identity',
                email: 'mcteague.aidan@gmail.com',
                pronoun: 'he/they',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Faidan.png?v=1621623774880',
            },
            {
                name: 'John Bengtsson',
                bio: 'Stockholm based graphic deisgner. HTML lover.',
                website: 'https://johnbengtsson.com/',
                websiteShow: 'johnbengtsson.com',
                feat: 'in Aggregate and Volvox Times',
                email: 'sundaysites.cafe',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjohn.png?v=1621622044501',
            },
            {
                name: 'Josie Eccleston',
                bio: 'Artist.',
                website: 'https://josieeccleston.format.com/',
                websiteShow: 'josieeccleston.format.com',
                feat: 'on the website',
                email: 'eccjosie@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjs.jpg?v=1621623106323',
            },
            {
                name: 'Sofia Lagrotta',
                bio: 'Artist.',
                website: 'https://volvoxvault.com/articles/2021/noPlace/',
                websiteShow: 'There\'s No Place Like Home',
                feat: 'on the website',
                email: 'sofiamlagrotta@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjs.jpg?v=1621623106323',
            },
            {
                name: 'Astra King',
                bio: 'RAPSTAR ROCKSTAR POPSTAR SUPERSTAR',
                website: 'https://astraking.bandcamp.com/',
                websiteShow: 'astraking.bandcamp.com',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fastra.png?v=1621626078191',
            },
            {
                name: 'Alex Nunes',
                bio: 'Musician and artist.',
                website: 'https://alexnunes.bandcamp.com/releases',
                websiteShow: 'alexnunes.bandcamp.com',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Falex.png?v=1621626077426',
            },
            {
                name: 'Jonah Grindler',
                bio: 'computer boy',
                website: 'https://grindler.design/',
                websiteShow: 'grindler.design',
                feat: 'in Volvox Times',
                email: 'jonahgrindler@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjoanh.png?v=1621627985341',
            },
            {
                name: 'William Wilkinson',
                bio: 'Photographer & designer.',
                website: 'https://williamwilkinson.com/',
                websiteShow: 'williamwilkinson.com',
                feat: 'in Volvox Times',
                email: 'william@williamwilkinson.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fwillwill.png?v=1621628181499',
            },
            {
                name: 'Matt Dowdy',
                bio: 'Artist and candle.',
                website: 'http://www.mattdowdy.online/',
                websiteShow: 'mattdowdy.online',
                feat: 'in Volvox Times',
                email: 'mattdowdy1@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fmatt.png?v=1621626077219',
            },
            {
                name: 'Liza Pittard',
                bio: 'Artist and cook.',
                website: 'http://lizas.kitchen/',
                websiteShow: 'lizas.kitchen',
                feat: 'in Volvox Times',
                email: 'lizapittard@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fliza.png?v=1621626077088',
            },
            {
                name: 'Madeline Link',
                bio: 'Musician',
                website: 'https://packstheband.com/',
                websiteShow: 'packstheband.com',
                feat: 'in Volvox Times',
                email: 'she/her',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fmad.png?v=1621626077953',
            },
            {
                name: 'Virgo Rising',
                bio: 'Virgo rising is emily, lauren, and jenna.',
                website: 'https://virgorisingband.bandcamp.com/album/sixteenth-sapphire',
                websiteShow: 'virgorisingband.bandcamp.com',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvirgo.png?v=1621626076291',
            },
            {
                name: 'Casey Wei',
                bio: 'Interdisciplinary artist, musician, and writer based in vancouver.',
                website: 'https://agonyklub.com/2021/02/23/casey-wei-ed-friend-poems/',
                websiteShow: 'friend poems',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fcasey.png?v=1621626077793',
            },
            {
                name: 'Jacob Nico',
                bio: 'Musician',
                website: 'https://jacobnico.bandcamp.com/',
                websiteShow: 'jacobnico.bandcamp.com',
                feat: 'in Volvox Times',
                email: 'jacob-nicholas@outlook.com',
                pronoun: 'they/them',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjacob.png?v=1621628526669',
            },
            {
                name: 'PonyHAUS',
                bio: 'Where Evie, Emjay, and friends host audio/visual livestream shows for neighsayers.',
                website: 'https://ponyhaus.com/',
                websiteShow: 'ponyhaus.com',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FponyHAUS.png?v=1621626075650',
            },
            {
                name: 'Justin Chean',
                bio: 'Hair Artist.',
                website: 'mailto:justinbchean@gmail.com',
                websiteShow: 'justinbchean@gmail.com',
                feat: 'in Volvox Times',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjustin.png?v=1621628372517',
            },
            {
                name: 'Natan Lawson',
                bio: 'Artist.',
                website: 'https://natanlawson.com/',
                websiteShow: 'natanlawson.com',
                feat: 'in Aggregate',
                email: 'hello@natanlawson.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fnatan.png?v=1621622042467',
            },
            {
                name: 'Austin Boulton',
                bio: 'Comics maker and illustrator.',
                website: 'https://ko-fi.com/basementlagoon',
                websiteShow: 'ko-fi.com/basementlagoon',
                feat: 'in Proximity',
                email: '@basement_lagoon',
                pronoun: 'he/they',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Faustin.png?v=1621626077782',
            },
            {
                name: 'Kiyel (Yelim Ki)',
                bio: 'Peace and love.',
                website: 'http://kiyel.care/',
                websiteShow: 'kiyel.care',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkiyel.png?v=1621622043224',
            },
            {
                name: 'Inwoo Jung',
                bio: 'Cologne based multi-disciplinary artist.',
                website: 'https://76666.world/',
                websiteShow: '76666.world',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Finwoo.png?v=1621622042295',
            },
            {
                name: 'Rue Yi',
                bio: 'Artist and model.',
                website: 'https://www.are.na/rue-yi/',
                websiteShow: 'are.na/rue-yi',
                feat: 'in Aggregate and Volvox Times',
                email: '-',
                pronoun: 'they/them',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Frue.png?v=1621622042581',
            },
            {
                name: 'Lynne',
                bio: 'Toronto based designer & graduate from ryerson’s fashion design program.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Flynnne.png?v=1621622043334',
            },
            {
                name: 'Joseph G',
                bio: 'Fashion.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Flynne.png?v=1621622043713',
            },
            {
                name: 'Nayake',
                bio: 'Curious multimedia creator.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fnayake.png?v=1621622043509',
            },
            {
                name: 'Cecilia de los Rios',
                bio: 'Seth cohen from the o.c.',
                website: 'https://webspace.ocad.ca/~3180013/finalwebpage/webpage.html',
                websiteShow: 'webpage',
                feat: 'in Aggregate',
                email: 'ceciliadelosrios@rogers.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fceci.png?v=1621622041942',
            },
            {
                name: 'Ana María Romero',
                bio: 'Energetic, smart, determined.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate and Volvox Times',
                email: 'anamaria257257@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fanna.png?v=1621622042964',
            },
            {
                name: 'AJ Wright',
                bio: 'Musician.',
                website: 'https://jjeroboam.bandcamp.com/',
                websiteShow: 'jjeroboam.bandcamp.com',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Faj.png?v=1621622042695',
            },
            {
                name: 'Shelby Bourbonnais',
                bio: 'Psychiatric nursing student & maker.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: 'shelbykbourbonnais@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fshelby.png?v=1621622042927',
            },
            {
                name: 'Kalil Haddad',
                bio: 'Filmmaker & sad boy.',
                website: 'https://kalilhaddad.com/',
                websiteShow: 'kalilhaddad.com',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fkalil.png?v=1621622043547',
            },
            {
                name: 'Taylor Abela',
                bio: 'Fashionista.',
                website: 'https://www.instagram.com/fruitmarket_to/',
                websiteShow: 'Fruit Market Vintage',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Ftaylor.png?v=1621626075778',
            },
            {
                name: 'Day Carter',
                bio: 'Queer artist and succubus.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fday.png?v=1621622043088',
            },
            {
                name: 'Will Sheppard',
                bio: 'Filmmaker & photographer.',
                website: '',
                websiteShow: '-',
                feat: 'on the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fwill.png?v=1621626726384',
            },
            {
                name: 'Jes Young',
                bio: 'Artist, educator and program developer. currently in Toronto.',
                website: 'http://jesyoung.ca/',
                websiteShow: 'jesyoung.ca',
                feat: 'in Proximity',
                email: 'jesyoung.art@gmail.com',
                pronoun: 'they/them',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjes.png?v=1621623775258',
            },
            {
                name: 'Schaefer Genco',
                bio: 'Here for a good time.',
                website: 'http://www.schaefern.com/',
                websiteShow: 'schaefern.com',
                feat: 'in Aggregate',
                email: 'tgj.schaefern@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fschaefer.png?v=1621622043974',
            },
            {
                name: 'Lara O\'Lanik',
                bio: 'Writer, comedian, and costume designer',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: 'larakolanik@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Flara.png?v=1621622042908',
            },
            {
                name: 'Noah Bradbury',
                bio: 'A fun and nice guy.',
                website: '',
                websiteShow: '-',
                feat: 'in Aggregate',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fnoah.png?v=1621629402085',
            },
            {
                name: 'Ari Kim',
                bio: 'Serial hobbyist.',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: 'she/her',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Farikim.png?v=1621623774846',
            },
            {
                name: 'Will Agnew',
                bio: 'Musician.',
                website: 'https://horsechampion.bandcamp.com/releases',
                websiteShow: 'horsechampion.bandcamp.com',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fwillagnew.jpg?v=1621626806987',
            },
            {
                name: 'Tom Valkanas',
                bio: 'Musician.',
                website: 'https://youtu.be/zK9c2fcyCGM',
                websiteShow: 'Lemonia - Live Instrumental Set 11/02',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Ftom.jpg?v=1621627153488',
            },
            {
                name: 'Joel Rodriguez',
                bio: 'Documentarian and master of chill..',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjoel.jpg?v=1621627153340',
            },
            {
                name: 'Chris Borges',
                bio: 'Photographer, musician, artist.',
                website: 'https://pooryou.bandcamp.com/',
                websiteShow: 'poor you',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fchris.jpg?v=1621627153411',
            },
            {
                name: 'Nicole Cipriani',
                bio: 'Artist.',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fnicole.png?v=1621626078503',
            },
            {
                name: 'Noah Sauer',
                bio: 'Mix engineer & multimedia producer.',
                website: 'http://noahsauer.com/',
                websiteShow: 'noahsauer.com',
                feat: 'on the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fdither_it_noah.png?v=1625841540409',
            },
            {
                name: 'Rebecca Clarke',
                bio: 'Filmmaker and writer.',
                website: 'https://www.instagram.com/_becca_clarke/',
                websiteShow: '_becca_clarke',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Frebecca.png?v=1621626075682',
            },
            {
                name: 'Zoe de Grand\'Maison',
                bio: 'Painter, performer, writer ~ artist.',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fzoe.png?v=1621626078459',
            },
            {
                name: 'Elliott Cost',
                bio: 'Artist. Enjoys all bodies of water (puddles, ponds, lakes, oceans...).',
                website: 'https://elliott.computer/',
                websiteShow: 'elliott.computer',
                feat: 'in Proximity and on the website',
                email: 'elliott@treehouse.email',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Felliott.png?v=1621627985081',
            },
            {
                name: 'Laurel Schwulst',
                bio: 'An American artist, educator, and writer.',
                website: 'https://laurelschwulst.com/',
                websiteShow: 'laurelschwulst.com',
                feat: 'in Proximity and on the website',
                email: 'laurel.schwulst@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Flaurel.png?v=1621627984943',
            },
            {
                name: 'Susan Le',
                bio: 'Artist and fashion lover.',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fsusan.png?v=1621626076015',
            },
            {
                name: 'Ryan Luke',
                bio: 'Musician & fashionista.',
                website: '',
                websiteShow: '-',
                feat: 'on the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fryan.png?v=1621626078088',
            },
            {
                name: 'Adam Collier',
                bio: 'Musician.',
                website: 'https://soundcloud.com/colliersir',
                websiteShow: 'soundcloud.com/colliersir',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fadam.png?v=1621628651923',
            },
            {
                name: 'Liam Beauchamp',
                bio: 'Filmmaker & artist.',
                website: 'https://secondguessing.bandcamp.com/',
                websiteShow: '-',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fliam.png?v=1621626076852',
            },
            {
                name: 'Vincent Shore',
                bio: 'Musician.',
                website: 'http://www.thebandgold.com/',
                websiteShow: 'thebandgold.com',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvincentshore.png?v=1621626076348',
            },
            {
                name: 'Vincent Ha',
                bio: 'Fashionista.',
                website: '',
                websiteShow: '-',
                feat: 'in Identity and the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvincentha.png?v=1621626075889',
            },
            {
                name: 'Andrei Pora',
                bio: 'Filmmaker, artist, writer.',
                website: 'https://exc-19.com/artists/andrei-pora/',
                websiteShow: 'exc-19',
                feat: 'in Proximity',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fandrei.png?v=1621626076419',
            },
            {
                name: 'Daniel Maluka',
                bio: 'Artist and writer.',
                website: '',
                websiteShow: 'Water Lily',
                feat: 'in Identity and the website',
                email: 'danielhectormaluka@gmail.com',
                pronoun: 'he/him',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fdaniel.png?v=1621623776177',
            },
            {
                name: 'Hannah Polinski',
                bio: 'Writer, photographer, playwright.',
                website: 'https://existentialembarrassment.wordpress.com/',
                websiteShow: 'existentialembarrassment.wordpress.com',
                feat: 'in Proximity',
                email: 'hannah_28_@hotmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fhannah.png?v=1621623775742',
            },
            {
                name: 'Etienne Bolduc',
                bio: 'Montreal physicist and new media scientist.',
                website: 'https://www.myclothingarchive.net/',
                websiteShow: 'My Clothing Archive',
                feat: 'in Identity and Proximity',
                email: 'myclothingarchive@gmail.com',
                pronoun: 'he/him',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fetienne.png?v=1621623775629',
            },
            {
                name: 'Rae Bundy',
                bio: 'Cinematographer & photographer. I love fashion. sometimes I write poetry.',
                website: '',
                websiteShow: '-',
                feat: 'in Identity and Proximity',
                email: 'raebundy4@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Frae.png?v=1621623775485',
            },
            {
                name: 'Charlie Weare',
                bio: 'Music composition for rain.',
                website: 'https://monarchmuzzy.bandcamp.com/',
                websiteShow: 'monarchmuzzy.bandcamp.com',
                feat: 'in Proximity',
                email: 'charlie.weare1@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fcharlie.png?v=1621623774949',
            },
            {
                name: 'Zoë Mills',
                bio: 'Very good at skee-ball.',
                website: 'https://forfrances.medium.com/',
                websiteShow: 'forfrances.medium.com',
                feat: 'in Proximity',
                email: 'zoemarionm@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fzoemills.png?v=1621623774765',
            },
            {
                name: 'Oliver Thompson',
                bio: 'Musician, screenwriter, journalist & teacher. creative writing is my game.',
                website: '',
                websiteShow: '-',
                feat: 'in Proximity',
                email: 'thompsonoliver1811@gmail.com',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Foliverthom.png?v=1621628813126',
            },
            {
                name: 'Maxwell Matchim',
                bio: 'Artist and naturalist.',
                website: 'https://www.friendsofmineprogram.com/',
                websiteShow: 'Friends of Mine',
                feat: 'in Identity and Aggregate',
                email: 'maxwellmatchim@gmail.com',
                pronoun: 'he/they',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fmax.png?v=1621622043836',
            },
            {
                name: 'Shane Brennan',
                bio: 'Overflowing with little machines that sometimes make me laugh or write or make music.',
                website: 'https://twothirtygabber.bandcamp.com/',
                websiteShow: 'twothirtygabber.bandcamp.com',
                feat: 'in Identity',
                email: 'shanembrennan5@gmail.com',
                pronoun: 'they/he',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fshane.png?v=1621627555449',
            },
            {
                name: 'Brooke Rachelle Hess',
                bio: 'A modern dancer and performance artist based in winnipeg, manitoba.',
                website: 'https://www.instagram.com/brooke_hess/',
                websiteShow: '@brooke_hess',
                feat: 'in Identity',
                email: 'brookehess99@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fbrooke.png?v=1621623775466',
            },
            {
                name: 'Deanna Armenti',
                bio: 'Printmaker, zinester, casual poet, digital collage & design, production designer, costumes/props fabricator, director/writer, photographer/ cinematographer.',
                website: 'https://girlwthemoviecamera.wixsite.com/mysite',
                websiteShow: 'girlwthemoviecamera',
                feat: 'in Identity',
                email: 'deannaarmenti7@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fdeanna.png?v=1621623775009',
            },
            {
                name: 'Frijke Coumans',
                bio: 'Agitation in my head and unanswered questions do not fit in harmonious and controlled environments',
                website: 'https://www.frijkecoumans.co.uk/',
                websiteShow: 'frijkecoumans.co.uk',
                feat: 'in Identity',
                email: 'frijkecoumans@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Ffrijke.png?v=1621623775107',
            },
            {
                name: 'Paige Walker',
                bio: 'Artist?',
                website: '',
                websiteShow: '-',
                feat: 'in Identity',
                email: 'paigelynwalk@gmail.com',
                pronoun: 'she/her',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fpaige.png?v=1621623775995',
            },
            {
                name: 'Jerome Manguba',
                bio: 'Fashion designer & artist',
                website: '',
                websiteShow: '-',
                feat: 'on the website',
                email: '-',
                pronoun: '',
                pic: 'https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjerome.png?v=1621627555413',
            },
            ]
    };
},

};

</script>




<style>

.break_long_text {
    word-break: break-all;
    word-break: break-word;
    hyphens: auto;
}

#colonyH1 {
  color: grey;
  font-size: 20pt;
  font-weight: normal;
  margin: 20px;
  margin-bottom: 0px;
  padding: 0;
}

.colonyHr {
  border: 0px;
  border-bottom: 1px solid yellowgreen;
}

/* BLOCKS */
#blocks-Artists {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  margin: 20px;
  padding: 0;
  word-wrap: break-word;
  line-height: 1.5;
}

.block-Artists {
  border: 1px solid yellowgreen;
    border-collapse: collapse;
  overflow: auto;
  height: 200px;
  word-wrap: break-word;
  background-color: #f0f7de;
}

.block-Artists img {
  float: right; 
  width: 30%; 
  padding-left: 10px;
  padding-bottom: 10px;
}


.block-Artists-header {
  color: grey;
  font-size: 12pt;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 5px;
  padding-top: 13px;
  align-items: center;
}

.block-Artists-link {
  font-size: 12pt;
  color: grey;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
}

.block-Artists-link a{
  color: #9879a6;
  text-decoration: none;
}

.block-Artists-link a:hover{
  text-decoration: underline;
  cursor: pointer;
}



@media(max-width: 800px) {

  #blocks-Artists {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 20px;
    padding: 0;
  }

}

@media only screen and (max-device-width: 566px) {

#blocks-Artists {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 20px;
  padding: 0;
}

}

</style>