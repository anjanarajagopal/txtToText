var substitute = (function() {
	"use strict";
	var replacements, ignore, i, replacementObjects, original;
	replacements = [
		['txt', 'text'],
		['lol', 'laugh out loud'],
		['brb', 'be right back'],
		['hmu', 'hit me up'],
		['rofl', 'rolling on floor laughing'],
		['stfu', 'shut the f*** up'],
		['lmk', 'let me know'],
		['ily', 'I love you'],
		['txt', 'text'],
		['gtg', 'got to go'],
		['afk', 'away from keyboard'],
		['hbu', 'How about you?'],
		['aak', 'asleep at keyboard'],
		['aap', 'always a pleasure'],
		['aas', 'alive and smiling'],
		['abd', 'already been done'],
		['abt', 'about'],
		['adih', 'another day in hell'],
		['afc', 'away from computer'],
		['afap', 'as far as possible'],
		['asap', 'as soon as possible'],
		['ah', 'at home'],
		['aka', 'also known as'],
		['aml', 'all my love'],
		['arg', 'argument'],
		['atm', 'at the moment'],
		['b', 'be'],
		['bf', 'boyfriend or best friend'],
		['b4', 'before'],
		['bae', 'before anyone else'],
		['bau', 'business as usual'],
		['bc', 'because'],
		['b/c', 'because'],
		['bday', 'Birthday'],
		['brb', 'be right back'],
		['btw', 'by the way'],
		['byob', 'bring your own beer'],
		['bytm', 'better you than me'],
		['chk', 'check'],
		['cld', 'could'],
		['cm', 'call me'],
		['cos', 'because'],
		['cuz', 'because'],
		['crb', 'come right back'],
		['crz', 'crazy'],
		['cu', 'see you'],
		['cya', 'see you'],
		['dm', 'does not matter'],
		['dnt', 'do not'],
		['dorbs', 'adorable'],
		['enuf', 'enough'],
		['eod', 'end of day'],
		['eot', 'end of transmission'],
		['eta', 'estimated time of arrival'],
		['fab', 'fabulous'],
		['fb', 'Facebook'],
		['fbm', 'fine by me'],
		['fcol', 'for crying out loud'],
		['fimh', 'forever in my heart'],
		['fomc', 'falling off my chair'],
		['fml', 'f*** my life'],
		['foaf', 'friend of a friend'],
		['frt', 'for real though'],
		['ftw', 'f*** the world or for the win'],
		['fu', 'f*** you'],
		['fubar', 'f***ed up beyond all recognition'],
		['fw', 'forward'],
		['fwb', 'friends with benefits'],
		['fwiw', 'for what it is worth'],
		['fwm', 'fine by me'],
		['fya', 'for your amusement'],
		['fyi', 'for your information'],
		['g2g', 'got to go'],
		['gd', 'good'],
		['gg', 'gotta go'],
		['gj', 'good job'],
		['gl', 'good luck'],
		['gn', 'good night'],
		['gnite', 'good night'],
		['gomb', 'got off of my back'],
		['gr8', 'great'],
		['gratz', 'congratulations'],
		['gtfo', 'get the f*** off'],
		['gud', 'good'],
		['hak', 'hug and kiss'],
		['hau', 'how about you'],
		['hagn', 'have a good night'],
		['hf', 'have fun'],
		['hru', 'how are you'],
		['hw', 'homework'],
		['hwk', 'homework'],
		['iae', 'in any event'],
		['ic', 'I see'],
		['icam', 'I could not agree more'],
		['idbi', 'I do not believe it'],
		['idc', 'I do not care'],
		['idts', 'I do not think so'],
		['ifyp', 'I feel your pain'],
		['gtr', 'got to run'],
		['iirc', 'if I remember correctly'],
		['ik', 'I know'],
		['ilu', 'I love you'],
		['im', 'instant message'],
		['imho', 'in my humble opinion'],
		['imo', 'in my opinion'],
		['imu', 'I miss you'],
		['irl', 'in real life'],
		['irmc', 'I rest my case'],
		['iyo', 'in your opinion'],
		['jac', 'just a second'],
		['jc', 'just checking'],
		['jdi', 'just do it'],
		['jff', 'just for fun'],
		['jic', 'just in case'],
		['jj', 'just joking'],
		['jk', 'just kidding'],
		['jw', 'just wondering'],
		['k', 'okay'],
		['kewl', 'cool'],
		['kfy', 'kiss for you'],
		['l8r', 'later'],
		['ltr', 'later'],
		['lho', 'laughing head off'],
		['lic', 'like I care'],
		['lmao', 'laughing my a** off'],
		['lmfao', 'laughing my f***ing a** off'],
		['lmbo', 'laughing my butt off'],
		['loa', 'list of acronyms'],
		['lolo', 'lots of love'],
		['lqtm', 'laughing quietly to myself'],
		['ltd', 'living the dream'],
		['ltns', 'long time no see'],
		['lulz', 'laughing out loud'],
		['ly', 'love you'],
		['m8', 'mate'],
		['mgmt', 'management'],
		['mirl', 'meet in real life'],
		['mkay', 'mmm, okay'],
		['mnc', 'mother nature calls'],
		['mod', 'moderator'],
		['msg', 'message'],
		['mtf', 'more to follow'],
		['mu', 'miss you'],
		['myo', 'mind your own (business)'],
		['myob', 'mind your own business'],
		['newb', 'newbie (beginner)'],
		['noob', 'newbie (beginner)'],
		['nbd', 'no big deal'],
		['nfw', 'not for work'],
		['nsfw', 'not safe for work'],
		['nigi', 'now I get it'],
		['nlt', 'no later than'],
		['nm', 'nothing much'],
		['noyb', 'none of your business'],
		['np', 'no problem'],
		['nsa', 'no strings attached'],
		['nts', 'note to self'],
		['nvm', 'nevermind'],
		['nvr', 'never'],
		['nw', 'no way'],
		['ofc', 'of course'],
		['obv', 'obviously'],
		['og', 'original gangster'],
		['oj', 'only joking'],
		['omfg', 'oh my f***ing God'],
		['omg', 'oh my gosh'],
		['otw', 'off to work'],
		['pda', 'physical display of affection'],
		['peeps', 'people'],
		['pic', 'picture'],
		['plmk', 'please let me know'],
		['pls', 'please'],
		['plu', 'people like us'],
		['plz', 'please'],
		['pm', 'private message'],
		['pov', 'point of view'],
		['ppl', 'people'],
		['probs', 'probably'],
		['prolly', 'probably'],
		['pts', 'praise the Lord'],
		['pwn', 'owned: https://www.youtube.com/watch?v=Fhb89V43KWc'],
		['pyt', 'pretty young thing'],
		['qc', 'quality control'],
		['rip', 'rest in peace'],
		['rl', 'real life'],
		['rly', 'really'],
		['rme', 'rolling my eyes'],
		['rotfl', 'rolling on the floor laughin'],
		['ru', 'are you'],
		['sc', 'stay cool'],
		['so', 'significant other']
		
	];

	   function matchCase(text, pattern) {
        var result = '';
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);
            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }
        return result;
    }
    replacementsObject = [];
    for (i = replacements.length - 1; i >= 0; i--) {
        original = new RegExp("\\b" + replacements[i][0] + "\\b", "gi");
        replacementsObject.push([original, replacements[i][1]]);
    }
    return function(node) {
        var i;
        var ignore = {
            "STYLE": 0,
            "SCRIPT": 0,
            "NOSCRIPT": 0,
            "IFRAME": 0,
            "OBJECT": 0,
            "INPUT": 0,
            "FORM": 0,
            "TEXTAREA": 0
        };
        if (node.tagName in ignore) {
            return;
        }
        for (i = replacementsObject.length - 1; i >= 0; i--) {
            node.nodeValue = node.nodeValue.replace(replacementsObject[i][0], function(match) {
            	return replacementsObject[i][1];
                // return matchCase(replacementsObject[i][1], match);
            });
        }
    };
})();

var node, iter;
var iter = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
while ((node = iter.nextNode())) {
    substitute(node);
}