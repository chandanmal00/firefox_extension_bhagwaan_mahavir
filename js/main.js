(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const bhagwan_mahavir_images = [ "m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg", "m6.jpg"]

  const quotes = [
    {
      quote: "Live and Let Live",
      author: "Lord Mahavir",
    },
    {
      quote: "",
      author: "Lord Mahavir",
    },
    {
      quote: "It is better to win over the self than to win over a million enemies.",
      author: "Lord Mahavir",
    },
    {
      quote: "Only the one who has transcended fear can experience equanimity",
      author: "Lord Mahavir",
    },
    {
      quote: "जियो और जीने दो",
      author: "Lord Mahavir",
    },
    {
      quote: "क्षमा वीरस्य भूषणम्",
      author: "Lord Mahavir",
    },
    {
      quote: "Silence and Self-control is non-violence",
      author: "Lord Mahavir",
    },
    {
      quote: "All souls are equal and alike and have the similar nature and qualities.",
      author: "Lord Mahavir",
    },
    {
      quote: "All are my friends. I have no enemies.",
      author: "Lord Mahavir",
    },
    {
      quote: "Do not deprive someone of his livelihood. This is a sinful",
      author: "Lord Mahavir",
    },
    {
      quote: "Respect for all living beings is non‑violence",
      author: "Lord Mahavir",
    },
     {
      quote: "A man is seated on top of a tree in the midst of a burning forest. He sees all living beings perish. But he doesn’t realize that the same fate is soon to overtake him also. That man is fool",
      author: "Lord Mahavir",
    },

    {
      quote: "Soul is the central point of spiritual discipline.",
      author: "Lord Mahavir",
    },
    {
      quote: "Have compassion towards all living beings. Hatred leads destruction",
      author: "Lord Mahavir",
    },
     {
      quote: "Start the practice of self-control with some penance; begin with fasting.",
      author: "Lord Mahavir",
    },

    {
      quote: "Anger begets more anger, and forgiveness and love lead to more forgiveness and love",
      author: "Lord Mahavir",
    },
    {
      quote: "All human beings are miserable due to their own faults, and they themselves can be happy by correcting these faults.",
      author: "Lord Mahavir",
    },
     {
      quote: "Live and allow others to live; hurt no one; life is dear to all living beings",
      author: "Lord Mahavir",
    },

    {
      quote: "Fight with yourself, why fight with external foes? He, who conquers himself through himself, will obtain happiness",
      author: "Lord Mahavir",
    },
    {
      quote: "जिस प्रकार आग ईंधन से नहीं बुझाई जाती, उसी प्रकार कोई जीवित प्राणी तीनो दुनिया की सारी दौलत से संतुष्ट नहीं हो सकता",
      author: "Lord Mahavir",
    },
    {
      quote: "हर एक जीवित प्राणी के प्रति दया रखो, घृणा से विनाश होता है ",
      author: "Lord Mahavir",
    },
    {
      quote: "प्रत्येक आत्मा स्वयं में सर्वज्ञ और आनंदमय है. आनंद बाहर से नहीं आता",
      author: "Lord Mahavir",
    },
    {
      quote: "अहिंसा सबसे बड़ा धर्म है.",
      author: "Lord Mahavir",
    },
    {
      quote: "एक व्यक्ति जलते हुए जंगल के मध्य में एक ऊँचे वृक्ष पर बैठा है. वह सभी जीवित प्राणियों को मरते हुए देखता है. लेकिन वह यह नहीं समझता की जल्द ही उसका भी यही हस्र होने वाला है. वह आदमी मूर्ख है.",
      author: "Lord Mahavir",
    },
    {
      quote: "स्वयं से लड़ो , बाहरी दुश्मन से क्या लड़ना ? वह जो स्वयम पर विजय कर लेगा उसे आनंद की प्राप्ति होगी.",
      author: "Lord Mahavir",
    },
    {
      quote: "अहिंसा परमोधर्म है",
      author: "Lord Mahavir",
    },
    {
      quote: "आपकी आत्मा से परे कोई भी शत्रु नहीं है. असली शत्रु आपके भीतर रहते हैं , वो शत्रु हैं क्रोध , घमंड , लालच ,आसक्ति और नफरत.",
      author: "Lord Mahavir",
    },
    {
      quote: "आत्मा अकेले आती है अकेले चली जाती है , न कोई उसका साथ देता है न कोई उसका मित्र बनता है.",
      author: "Lord Mahavir",
    },
    {
      quote: "जिस प्रकार धागे से बंधी (ससुत्र) सुई खो जाने से सुरक्षित है, उसी प्रकार स्व-अध्ययन (ससुत्र) में लगा व्यक्ति खो नहीं सकता है।",
      author: "Lord Mahavir",
    },
    {
      quote: "वो जो सत्य जानने में मदद कर सके, चंचल मन को नियंत्रित कर सके, और आत्मा को शुद्ध कर सके उसे ज्ञान कहते हैं.",
      author: "Lord Mahavir",
    },
    {
      quote: "जितना अधिक आप पाते हैं, उतना अधिक आप चाहते हैं. लाभ के साथ-साथ लालच बढ़ता जाता है. जो २ ग्राम सोने से पूर्ण किया जा सकता है वो दस लाख से नहीं किया जा सकता.",
      author: "Lord Mahavir",
    },
      ];

  function newQuote(quotes) {
    let n = getRandomInt(0, quotes.length);
    let m = getRandomInt(0, bhagwan_mahavir_images.length);
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const bhagwaan_mahaveer_img_id = document.getElementById("bhagwaan_id");
    if (quote && author) {
      quote.innerText = quotes[n].quote;
      author.innerText = "—" + quotes[n].author;
      bhagwaan_mahaveer_img_id.src = "icons/" + bhagwan_mahavir_images[m]
    }
  }

  newQuote(quotes);
})();
