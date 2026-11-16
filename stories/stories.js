/* Story text. Retold in simple words from the events in The Sealed Nectar (Ar-Raheeq Al-Makhtum).
   Each story: id, icon, title, scenes (one text per picture, English + Urdu), questions, a weekly habit,
   and where to find the event in the book. To add a story, add an entry here and matching pictures in scenes/scenes.js. */
(function () {
  const SN = (window.SN = window.SN || {});

  SN.ritual = {
    open: {
      en: "Bismillah. In the name of Allah, the Most Kind, the Most Merciful.",
      ur: "بسم اللہ الرحمٰن الرحیم۔"
    },
    close: {
      en: "May the peace and blessings of Allah be upon him.",
      ur: "صلی اللہ علیہ وسلم۔"
    }
  };

  SN.stories = [
    {
      id: "elephant", icon: "eleph",
      title: { en: "The Year of the Elephant", ur: "ہاتھی والا سال" },
      scenes: [
        { en: "Long, long ago, in a valley between rocky hills, stood a simple house made of stone: the Ka'bah. It was built for the worship of Allah, and people travelled for weeks across the desert just to see it. But far away in the south, a king heard about it, and he was not pleased. What was he planning?",
          ur: "بہت پرانی بات ہے۔ پتھریلے پہاڑوں کے بیچ ایک وادی میں پتھروں کا بنا ایک سادہ سا گھر تھا: کعبہ۔ یہ اللہ کی عبادت کے لیے بنایا گیا تھا، اور لوگ اسے دیکھنے کے لیے ہفتوں صحرا کا سفر کرتے تھے۔ مگر دور جنوب میں ایک بادشاہ نے اس کے بارے میں سنا، اور اسے یہ بات اچھی نہ لگی۔ وہ کیا کرنے والا تھا؟" },
        { en: "The king's name was Abraha. He had built a grand building of his own, and he wanted everyone to visit that instead. So he gathered a great army and marched towards Makkah to pull the Ka'bah down. And at the front of his army walked something the people of Makkah had never faced before. Can you see what it is?",
          ur: "اس بادشاہ کا نام ابرہہ تھا۔ اس نے اپنی ایک شاندار عمارت بنائی تھی، اور وہ چاہتا تھا کہ سب لوگ کعبہ کے بجائے وہاں آئیں۔ چنانچہ اس نے ایک بڑی فوج جمع کی اور کعبہ کو گرانے کے لیے مکہ کی طرف چل پڑا۔ اور اس کی فوج کے سب سے آگے ایک ایسی چیز چل رہی تھی جس کا سامنا مکہ والوں نے پہلے کبھی نہیں کیا تھا۔ کیا تم دیکھ سکتے ہو وہ کیا ہے؟" },
        { en: "An elephant! Huge, and strong enough to push down walls. The people of Makkah were few. They could not fight such an army, so they climbed up into the hills and waited. The army reached the edge of Makkah. The elephant was turned to face the Ka'bah. And what do you think it did?",
          ur: "ایک ہاتھی! بہت بڑا، اتنا طاقتور کہ دیواریں گرا دے۔ مکہ کے لوگ تھوڑے تھے۔ وہ اتنی بڑی فوج سے نہیں لڑ سکتے تھے، اس لیے وہ پہاڑوں پر چڑھ گئے اور انتظار کرنے لگے۔ فوج مکہ کے کنارے پہنچ گئی۔ ہاتھی کا رخ کعبہ کی طرف کیا گیا۔ اور تمہارے خیال میں اس نے کیا کیا؟" },
        { en: "It knelt down, and it would not move! They turned it to the south, and it ran. To the north, and it ran. To the east, and it ran. But towards the Ka'bah? It knelt again and would not take a single step. Then the sky began to grow dark. Something was coming. Look up! What is it?",
          ur: "وہ بیٹھ گیا، اور ہلا تک نہیں! انہوں نے اس کا رخ جنوب کی طرف کیا تو وہ دوڑ پڑا۔ شمال کی طرف کیا تو دوڑ پڑا۔ مشرق کی طرف کیا تو دوڑ پڑا۔ مگر کعبہ کی طرف؟ وہ پھر بیٹھ گیا اور ایک قدم بھی نہ اٹھایا۔ پھر آسمان پر اندھیرا چھانے لگا۔ کچھ آ رہا تھا۔ اوپر دیکھو! وہ کیا ہے؟" },
        { en: "Birds! Flock after flock, sent by Allah, filling the sky. Each bird carried three tiny stones, no bigger than a chickpea: one in its beak and two in its claws. They dropped them on the army, and the mighty army was broken. It never reached the Ka'bah. So who was it that kept the House safe?",
          ur: "پرندے! جھنڈ کے جھنڈ، اللہ کے بھیجے ہوئے، جنہوں نے آسمان بھر دیا۔ ہر پرندے کے پاس چنے کے دانے جتنی تین ننھی کنکریاں تھیں: ایک چونچ میں اور دو پنجوں میں۔ انہوں نے وہ کنکریاں فوج پر گرائیں، اور وہ طاقتور فوج تباہ ہو گئی۔ وہ کعبہ تک کبھی نہ پہنچ سکی۔ تو اس گھر کی حفاظت کس نے کی؟" },
        { en: "Allah did. The House has a Lord, and He kept it safe. The Arabs never forgot that year. They named it the Year of the Elephant. And in that very year, in a small house in Makkah, something even greater happened. A baby was born. Do you know who he was? Touch the star to find out.",
          ur: "اللہ نے۔ اس گھر کا ایک رب ہے، اور اسی نے اسے محفوظ رکھا۔ عرب اس سال کو کبھی نہ بھولے۔ انہوں نے اس کا نام ہاتھی والا سال رکھا۔ اور اسی سال، مکہ کے ایک چھوٹے سے گھر میں، اس سے بھی بڑی بات ہوئی۔ ایک بچہ پیدا ہوا۔ جانتے ہو وہ کون تھے؟ جاننے کے لیے ستارے کو چھوؤ۔" }
      ],
      ask: { en: ["Which animal sat down and would not walk?", "Who kept the Ka'bah safe?"],
             ur: ["کون سا جانور بیٹھ گیا اور آگے نہ بڑھا؟", "کعبہ کو کس نے محفوظ رکھا؟"] },
      habit: { en: "Each night we thank Allah for keeping us safe.", ur: "ہر رات ہم اللہ کا شکر ادا کرتے ہیں کہ اس نے ہمیں محفوظ رکھا۔" },
      book: "The Elephant incident, in the part on the Prophet's lineage and family."
    },
    {
      id: "birth", icon: "moon",
      title: { en: "A baby is born in Makkah", ur: "مکہ میں ایک بچہ پیدا ہوا" },
      scenes: [
        { en: "In Makkah lived a gentle lady named Aminah. Her husband, Abdullah, had gone on a journey and died far from home, before their baby was born. Aminah waited for her baby in her small house.",
          ur: "مکہ میں آمنہ نام کی ایک نیک خاتون رہتی تھیں۔ ان کے شوہر عبداللہ ایک سفر پر گئے اور بچے کی پیدائش سے پہلے ہی گھر سے دور وفات پا گئے۔ آمنہ اپنے چھوٹے سے گھر میں اپنے بچے کا انتظار کرتی رہیں۔" },
        { en: "Then, on a Monday morning in the month of Rabi' al-Awwal, in the Year of the Elephant, the baby was born. A beautiful baby boy.",
          ur: "پھر ربیع الاول کے مہینے میں، ہاتھی والے سال، پیر کی صبح بچہ پیدا ہوا۔ ایک پیارا سا بچہ۔" },
        { en: "Aminah sent the happy news to the baby's grandfather, Abdul Muttalib. He was so glad! He carried the baby to the Ka'bah, and there he prayed and thanked Allah.",
          ur: "آمنہ نے یہ خوشخبری بچے کے دادا عبدالمطلب کو بھیجی۔ وہ بہت خوش ہوئے! وہ بچے کو اٹھا کر کعبہ لے گئے، وہاں دعا کی اور اللہ کا شکر ادا کیا۔" },
        { en: "Grandfather chose a name for him that was new to the Arabs. He named him Muhammad. It means: the one who is praised.",
          ur: "دادا نے ان کے لیے ایک ایسا نام چنا جو عربوں کے لیے نیا تھا۔ انہوں نے نام رکھا: محمد۔ اس کا مطلب ہے: جس کی تعریف کی جائے۔" },
        { en: "Allah had chosen this baby for something very great. One day he would be the Messenger of Allah, and bring mercy to the whole world. Peace and blessings be upon him.",
          ur: "اللہ نے اس بچے کو ایک بہت بڑے کام کے لیے چنا تھا۔ ایک دن وہ اللہ کے رسول بنیں گے اور ساری دنیا کے لیے رحمت لائیں گے۔ صلی اللہ علیہ وسلم۔" }
      ],
      ask: { en: ["What name did his grandfather give him?", "On which day was he born?"],
             ur: ["دادا نے ان کا کیا نام رکھا؟", "وہ کس دن پیدا ہوئے؟"] },
      habit: { en: "When we hear his name, we say: sallallahu alayhi wa sallam.", ur: "جب ہم ان کا نام سنتے ہیں تو کہتے ہیں: صلی اللہ علیہ وسلم۔" },
      book: "His birth, in the part on his birth and forty years before prophethood."
    },
    {
      id: "halimah", icon: "tent",
      title: { en: "In the desert with Halimah", ur: "حلیمہ کے ساتھ صحرا میں" },
      scenes: [
        { en: "In those days, families in Makkah sent their babies to grow up in the desert. The air was clean there, and children grew strong. Women from the desert came to Makkah to take babies home and care for them.",
          ur: "ان دنوں مکہ کے لوگ اپنے بچوں کو صحرا میں پلنے کے لیے بھیجتے تھے۔ وہاں کی ہوا صاف تھی اور بچے مضبوط ہوتے تھے۔ صحرا کی عورتیں مکہ آتیں اور بچوں کو پالنے کے لیے اپنے ساتھ لے جاتیں۔" },
        { en: "A woman named Halimah came with her husband. Their donkey was thin and slow. Their old camel gave no milk. They were poor and tired. Halimah took the baby Muhammad, peace be upon him, who had no father, to care for him.",
          ur: "حلیمہ نام کی ایک خاتون اپنے شوہر کے ساتھ آئیں۔ ان کا گدھا کمزور اور سست تھا۔ ان کی بوڑھی اونٹنی دودھ نہیں دیتی تھی۔ وہ غریب اور تھکے ہوئے تھے۔ حلیمہ نے ننھے محمد صلی اللہ علیہ وسلم کو، جن کے والد نہیں تھے، پالنے کے لیے لے لیا۔" },
        { en: "And then good things began to happen! The old camel gave plenty of milk. The slow donkey trotted so fast that it passed all the others on the way home.",
          ur: "اور پھر اچھی اچھی باتیں ہونے لگیں! بوڑھی اونٹنی نے خوب دودھ دیا۔ سست گدھا اتنا تیز چلا کہ گھر کے راستے میں سب سے آگے نکل گیا۔" },
        { en: "At home in the desert, the land was dry. But every evening Halimah's goats came back full of milk. Allah had sent blessings with this little child.",
          ur: "صحرا میں ان کے گھر کی زمین خشک تھی۔ مگر ہر شام حلیمہ کی بکریاں دودھ سے بھری ہوئی واپس آتیں۔ اللہ نے اس ننھے بچے کے ساتھ برکتیں بھیجی تھیں۔" },
        { en: "Little Muhammad, peace be upon him, grew strong and healthy in the open desert, under the wide sky and the bright stars. Halimah and her family loved him very much.",
          ur: "ننھے محمد صلی اللہ علیہ وسلم کھلے صحرا میں، وسیع آسمان اور چمکتے ستاروں کے نیچے، مضبوط اور تندرست ہوتے گئے۔ حلیمہ اور ان کا گھرانا ان سے بہت محبت کرتا تھا۔" }
      ],
      ask: { en: ["What happened to the slow donkey?", "Who sent the blessings?"],
             ur: ["سست گدھے کو کیا ہوا؟", "برکتیں کس نے بھیجیں؟"] },
      habit: { en: "We say Alhamdulillah for our food and milk.", ur: "ہم اپنے کھانے اور دودھ پر الحمدللہ کہتے ہیں۔" },
      book: "Babyhood, with Halimah of Bani Sa'd."
    },
    {
      id: "family", icon: "palm",
      title: { en: "His grandfather and his uncle", ur: "دادا اور چچا" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was about five years old, he came back from the desert to Makkah, to live with his mother Aminah. She loved him dearly.",
          ur: "جب محمد صلی اللہ علیہ وسلم تقریباً پانچ سال کے ہوئے تو وہ صحرا سے مکہ واپس اپنی والدہ آمنہ کے پاس آ گئے۔ وہ ان سے بہت محبت کرتی تھیں۔" },
        { en: "When he was six, his mother took him on a journey to the town of Yathrib to visit family. On the way home she became ill, and she died. He was a small boy, and he was very sad.",
          ur: "جب وہ چھ سال کے تھے تو ان کی والدہ انہیں رشتہ داروں سے ملانے یثرب کے سفر پر لے گئیں۔ واپسی کے راستے میں وہ بیمار ہوئیں اور وفات پا گئیں۔ وہ چھوٹے سے بچے تھے، اور بہت غمگین ہوئے۔" },
        { en: "His grandfather, Abdul Muttalib, took him home and loved him more than anyone. Grandfather had a special mat in the shade of the Ka'bah. Nobody else sat on it. But he let his grandson sit right beside him.",
          ur: "ان کے دادا عبدالمطلب انہیں اپنے گھر لے آئے اور سب سے بڑھ کر ان سے محبت کی۔ کعبہ کے سائے میں دادا کا ایک خاص بچھونا تھا۔ اس پر کوئی اور نہیں بیٹھتا تھا۔ مگر وہ اپنے پوتے کو اپنے بالکل پاس بٹھاتے تھے۔" },
        { en: "When he was eight, his grandfather died too. Then his uncle, Abu Talib, took him in. Abu Talib was not rich and had many children, but he cared for him like his own son, and even more.",
          ur: "جب وہ آٹھ سال کے ہوئے تو دادا بھی وفات پا گئے۔ پھر ان کے چچا ابو طالب نے انہیں اپنے پاس رکھ لیا۔ ابو طالب امیر نہ تھے اور ان کے بہت سے بچے تھے، مگر انہوں نے اپنے بیٹوں کی طرح، بلکہ ان سے بھی بڑھ کر ان کا خیال رکھا۔" },
        { en: "Allah was always looking after him. In the Qur'an, Allah reminds him: Did He not find you an orphan, and give you a home? That is why we are always kind to children who have no mother or father.",
          ur: "اللہ ہمیشہ ان کی حفاظت کرتا رہا۔ قرآن میں اللہ انہیں یاد دلاتا ہے: کیا اس نے آپ کو یتیم نہ پایا، پھر ٹھکانا دیا؟ اسی لیے ہم ان بچوں سے ہمیشہ پیار کرتے ہیں جن کے ماں باپ نہیں ہوتے۔" }
      ],
      ask: { en: ["Who looked after him after his mother?", "Where did grandfather let him sit?"],
             ur: ["والدہ کے بعد ان کا خیال کس نے رکھا؟", "دادا انہیں کہاں بٹھاتے تھے؟"] },
      habit: { en: "We are gentle with children who are sad or alone.", ur: "ہم ان بچوں سے نرمی کرتے ہیں جو اداس یا اکیلے ہوں۔" },
      book: "Back to his mother; to his grandfather; to his uncle Abu Talib."
    },
    {
      id: "shepherd", icon: "sheep",
      title: { en: "The young shepherd", ur: "ننھا چرواہا" },
      scenes: [
        { en: "As a boy, Muhammad, peace be upon him, wanted to help his uncle Abu Talib, who did not have much money. So he worked. He looked after sheep for the people of Makkah, for a small pay.",
          ur: "بچپن میں محمد صلی اللہ علیہ وسلم اپنے چچا ابو طالب کی مدد کرنا چاہتے تھے، جن کے پاس زیادہ پیسے نہ تھے۔ اس لیے انہوں نے کام کیا۔ وہ تھوڑی سی مزدوری پر مکہ والوں کی بکریاں چراتے تھے۔" },
        { en: "Every day he took the sheep out to the hills to eat. He watched them all day long. If one wandered away, he gently brought it back.",
          ur: "ہر روز وہ بکریوں کو چرانے پہاڑیوں پر لے جاتے۔ سارا دن ان پر نظر رکھتے۔ اگر کوئی بکری دور نکل جاتی تو اسے نرمی سے واپس لے آتے۔" },
        { en: "Looking after sheep takes patience. Sheep are slow and weak, and they must be kept safe. A shepherd has to be gentle and watchful.",
          ur: "بکریاں چرانا صبر کا کام ہے۔ بکریاں سست اور کمزور ہوتی ہیں، اور ان کی حفاظت کرنی پڑتی ہے۔ چرواہے کو نرم دل اور ہوشیار ہونا پڑتا ہے۔" },
        { en: "Out in the quiet hills there was time to look at the sky, the mountains and the stars, and to think about the One who made them all.",
          ur: "خاموش پہاڑیوں میں آسمان، پہاڑوں اور ستاروں کو دیکھنے کا، اور ان سب کے بنانے والے کے بارے میں سوچنے کا وقت ملتا تھا۔" },
        { en: "Later he told his friends that every prophet had looked after sheep. Caring for the small and the weak was how Allah got them ready to care for people.",
          ur: "بعد میں انہوں نے اپنے ساتھیوں کو بتایا کہ ہر نبی نے بکریاں چرائی ہیں۔ چھوٹوں اور کمزوروں کا خیال رکھ کر اللہ نے انہیں لوگوں کا خیال رکھنے کے لیے تیار کیا۔" }
      ],
      ask: { en: ["What animals did he look after?", "What did he do when one wandered away?"],
             ur: ["وہ کن جانوروں کا خیال رکھتے تھے؟", "جب کوئی بکری دور چلی جاتی تو وہ کیا کرتے؟"] },
      habit: { en: "We are gentle with animals and help at home.", ur: "ہم جانوروں سے نرمی کرتے ہیں اور گھر کے کاموں میں مدد کرتے ہیں۔" },
      book: "His early work as a shepherd."
    },
    {
      id: "amin", icon: "key",
      title: { en: "Al-Amin, the trusted one", ur: "الامین، بھروسے والے" },
      scenes: [
        { en: "Muhammad, peace be upon him, grew into a young man in Makkah. And everybody noticed something about him. He always told the truth. Always.",
          ur: "محمد صلی اللہ علیہ وسلم مکہ میں جوان ہوئے۔ اور سب نے ان کی ایک بات دیکھی۔ وہ ہمیشہ سچ بولتے تھے۔ ہمیشہ۔" },
        { en: "He never cheated. He never broke a promise. When he said he would do something, he did it.",
          ur: "وہ کبھی دھوکا نہیں دیتے تھے۔ کبھی وعدہ نہیں توڑتے تھے۔ جب کہتے کہ یہ کام کروں گا، تو ضرور کرتے۔" },
        { en: "So the people of Makkah gave him two special names. As-Sadiq, the Truthful. And Al-Amin, the Trustworthy.",
          ur: "اس لیے مکہ کے لوگوں نے انہیں دو خاص نام دیے۔ الصادق، یعنی سچے۔ اور الامین، یعنی امانت دار۔" },
        { en: "When people had something precious, they brought it to him to keep it safe. They knew that with Al-Amin, nothing would ever be lost.",
          ur: "جب لوگوں کے پاس کوئی قیمتی چیز ہوتی تو وہ اسے حفاظت کے لیے ان کے پاس رکھواتے۔ وہ جانتے تھے کہ الامین کے پاس کوئی چیز کبھی گم نہیں ہوگی۔" },
        { en: "He was kind to everyone, too. He helped the weak, he was good to his neighbours, and he welcomed guests. This is how we want to be: truthful and trusted.",
          ur: "وہ سب پر مہربان بھی تھے۔ کمزوروں کی مدد کرتے، پڑوسیوں سے اچھا سلوک کرتے اور مہمانوں کی خاطر کرتے۔ ہم بھی ایسے ہی بننا چاہتے ہیں: سچے اور بھروسے والے۔" }
      ],
      ask: { en: ["What does Al-Amin mean?", "Why did people leave their precious things with him?"],
             ur: ["الامین کا کیا مطلب ہے؟", "لوگ اپنی قیمتی چیزیں ان کے پاس کیوں رکھواتے تھے؟"] },
      habit: { en: "We tell the truth, even when it is hard.", ur: "ہم سچ بولتے ہیں، چاہے مشکل ہی کیوں نہ ہو۔" },
      book: "His character before prophethood: As-Sadiq and Al-Amin."
    },
    {
      id: "syria", icon: "camel",
      title: { en: "The journey to Syria", ur: "شام کا سفر" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was twelve, his uncle Abu Talib got ready for a long trading trip to Syria, far away in the north. He took his nephew with him.",
          ur: "جب محمد صلی اللہ علیہ وسلم بارہ سال کے تھے تو ان کے چچا ابو طالب نے تجارت کے لیے دور شمال میں ملک شام کے لمبے سفر کی تیاری کی۔ وہ اپنے بھتیجے کو بھی ساتھ لے گئے۔" },
        { en: "The caravan walked for many days across the desert. The camels carried the goods. At night everyone rested under the stars.",
          ur: "قافلہ کئی دن صحرا میں چلتا رہا۔ اونٹ سامان اٹھائے ہوئے تھے۔ رات کو سب ستاروں کے نیچے آرام کرتے۔" },
        { en: "At last they reached a town called Busra. A monk named Bahira lived there. He never came out to meet the caravans. But this time, he came out.",
          ur: "آخر وہ بصریٰ نام کے ایک شہر پہنچے۔ وہاں بحیرا نام کا ایک راہب رہتا تھا۔ وہ قافلوں سے ملنے کبھی باہر نہیں آتا تھا۔ مگر اس بار وہ باہر آیا۔" },
        { en: "Bahira looked at the boy and knew he was special. He told Abu Talib that this boy would be a messenger from Allah, a mercy for all people. He asked him to take the boy home and keep him safe.",
          ur: "بحیرا نے اس بچے کو دیکھا اور پہچان گیا کہ یہ خاص ہے۔ اس نے ابو طالب کو بتایا کہ یہ بچہ اللہ کا رسول ہوگا، سب لوگوں کے لیے رحمت۔ اس نے کہا کہ بچے کو گھر واپس لے جائیں اور اس کی حفاظت کریں۔" },
        { en: "So Abu Talib sent him back to Makkah, safe and sound. His uncle loved him and always protected him.",
          ur: "چنانچہ ابو طالب نے انہیں خیریت سے مکہ واپس بھیج دیا۔ چچا ان سے محبت کرتے تھے اور ہمیشہ ان کی حفاظت کرتے تھے۔" }
      ],
      ask: { en: ["Which animals carried the goods?", "What did Bahira say about the boy?"],
             ur: ["سامان کون سے جانور اٹھاتے تھے؟", "بحیرا نے بچے کے بارے میں کیا کہا؟"] },
      habit: { en: "We say a dua before we travel.", ur: "ہم سفر سے پہلے دعا پڑھتے ہیں۔" },
      book: "Bahira the monk."
    },
    {
      id: "khadijah", icon: "coins",
      title: { en: "The honest trader", ur: "سچے تاجر" },
      scenes: [
        { en: "In Makkah lived a noble and wise lady named Khadijah, may Allah be pleased with her. She was a trader. She sent goods to faraway markets to be sold.",
          ur: "مکہ میں خدیجہ رضی اللہ عنہا نام کی ایک معزز اور سمجھدار خاتون رہتی تھیں۔ وہ تاجر تھیں۔ وہ اپنا سامان بیچنے کے لیے دور کے بازاروں میں بھیجتی تھیں۔" },
        { en: "She heard about a young man who was truthful and trustworthy: Muhammad, peace be upon him. She asked him to take her goods to Syria, and sent her helper Maysarah with him.",
          ur: "انہوں نے ایک سچے اور امانت دار نوجوان کے بارے میں سنا: محمد صلی اللہ علیہ وسلم۔ انہوں نے ان سے کہا کہ ان کا سامان شام لے جائیں، اور اپنے غلام میسرہ کو ان کے ساتھ بھیجا۔" },
        { en: "He traded honestly. He did not cheat anyone, not even a little. And the trade earned more than it ever had before.",
          ur: "انہوں نے ایمانداری سے تجارت کی۔ کسی کو ذرا سا بھی دھوکا نہ دیا۔ اور تجارت میں پہلے سے کہیں زیادہ نفع ہوا۔" },
        { en: "When they came home, Maysarah told Khadijah everything he had seen: how honest, how kind and how gentle Muhammad was, peace be upon him.",
          ur: "جب وہ واپس آئے تو میسرہ نے خدیجہ کو وہ سب بتایا جو اس نے دیکھا تھا: کہ محمد صلی اللہ علیہ وسلم کتنے سچے، کتنے مہربان اور کتنے نرم دل ہیں۔" },
        { en: "Khadijah admired his good character, and they were married. He was twenty-five years old. They lived together with love and kindness.",
          ur: "خدیجہ کو ان کے اچھے اخلاق بہت پسند آئے، اور ان دونوں کی شادی ہو گئی۔ اس وقت ان کی عمر پچیس سال تھی۔ وہ محبت اور مہربانی کے ساتھ رہے۔" }
      ],
      ask: { en: ["How did he trade?", "Who told Khadijah about his good character?"],
             ur: ["انہوں نے تجارت کیسے کی؟", "خدیجہ کو ان کے اچھے اخلاق کے بارے میں کس نے بتایا؟"] },
      habit: { en: "We are fair when we share and when we play.", ur: "ہم بانٹتے اور کھیلتے وقت انصاف کرتے ہیں۔" },
      book: "His trade journey for Khadijah and their marriage."
    },
    {
      id: "stone", icon: "stone",
      title: { en: "The Black Stone", ur: "حجرِ اسود" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was thirty-five, a flood damaged the walls of the Ka'bah. The people of Makkah decided to build it again. Every family helped to carry the stones.",
          ur: "جب محمد صلی اللہ علیہ وسلم پینتیس سال کے تھے تو ایک سیلاب نے کعبہ کی دیواروں کو نقصان پہنچایا۔ مکہ والوں نے اسے دوبارہ بنانے کا فیصلہ کیا۔ ہر قبیلے نے پتھر اٹھانے میں مدد کی۔" },
        { en: "The walls grew higher and higher. Then it was time to put the Black Stone back in its place. It was a very special stone, and every family wanted the honour of lifting it.",
          ur: "دیواریں اونچی ہوتی گئیں۔ پھر حجرِ اسود کو اس کی جگہ رکھنے کا وقت آیا۔ یہ بہت خاص پتھر تھا، اور ہر قبیلہ چاہتا تھا کہ اسے اٹھانے کی عزت اسی کو ملے۔" },
        { en: "They argued for days and nearly began to fight. Then an old man said: let the first person who walks in through the gate decide for us. Everyone agreed.",
          ur: "وہ کئی دن جھگڑتے رہے اور لڑائی ہونے ہی والی تھی۔ پھر ایک بزرگ نے کہا: جو شخص سب سے پہلے دروازے سے اندر آئے، وہی ہمارا فیصلہ کرے۔ سب مان گئے۔" },
        { en: "The first to walk in was Muhammad, peace be upon him. They were so happy! They said: it is Al-Amin. We are pleased with whatever he decides.",
          ur: "سب سے پہلے اندر آنے والے محمد صلی اللہ علیہ وسلم تھے۔ سب بہت خوش ہوئے! انہوں نے کہا: یہ تو الامین ہیں۔ یہ جو فیصلہ کریں، ہمیں منظور ہے۔" },
        { en: "He spread out a cloth and put the Black Stone in the middle. He asked the leaders to hold the edges and lift it together. Then he set the stone in its place with his own hands. Everyone shared the honour, and nobody fought.",
          ur: "انہوں نے ایک چادر بچھائی اور حجرِ اسود کو اس کے بیچ میں رکھا۔ انہوں نے سرداروں سے کہا کہ چادر کے کنارے پکڑ کر مل کر اٹھائیں۔ پھر انہوں نے اپنے ہاتھوں سے پتھر کو اس کی جگہ رکھ دیا۔ سب کو عزت ملی، اور کوئی نہ لڑا۔" }
      ],
      ask: { en: ["Why were the families arguing?", "How did he help everyone share?"],
             ur: ["قبیلے کیوں جھگڑ رہے تھے؟", "انہوں نے سب کو کیسے شریک کیا؟"] },
      habit: { en: "When we disagree, we look for a way to share.", ur: "جب ہماری بات نہ ملے تو ہم مل بانٹنے کا راستہ ڈھونڈتے ہیں۔" },
      book: "Rebuilding the Ka'bah and the arbitration issue."
    },
    {
      id: "hira", icon: "cave",
      title: { en: "The cave of Hira", ur: "غارِ حرا" },
      scenes: [
        { en: "In Makkah, many people prayed to statues made of stone and wood. Muhammad, peace be upon him, knew this was wrong. He never did it, not even once.",
          ur: "مکہ میں بہت سے لوگ پتھر اور لکڑی کے بنے بتوں کی پوجا کرتے تھے۔ محمد صلی اللہ علیہ وسلم جانتے تھے کہ یہ غلط ہے۔ انہوں نے ایسا کبھی نہیں کیا، ایک بار بھی نہیں۔" },
        { en: "He loved to go somewhere quiet, to think and to worship Allah. High on a mountain near Makkah there is a small cave. It is called the cave of Hira.",
          ur: "انہیں کسی خاموش جگہ جا کر سوچنا اور اللہ کی عبادت کرنا پسند تھا۔ مکہ کے قریب ایک پہاڑ کی اونچائی پر ایک چھوٹا سا غار ہے۔ اسے غارِ حرا کہتے ہیں۔" },
        { en: "He would take food and water and stay there for many nights, most of all in the month of Ramadan. And when a poor person came by, he shared his food.",
          ur: "وہ کھانا اور پانی لے کر وہاں کئی کئی راتیں ٹھہرتے، خاص طور پر رمضان کے مہینے میں۔ اور جب کوئی غریب وہاں آتا تو اسے اپنے کھانے میں شریک کرتے۔" },
        { en: "From the cave he could see the hills and the great wide sky. He thought about the One who made it all.",
          ur: "غار سے انہیں پہاڑیاں اور کھلا وسیع آسمان نظر آتا۔ وہ ان سب کے بنانے والے کے بارے میں سوچتے۔" },
        { en: "Then his dreams began to come true, as clear as the light of morning. Something very great was about to happen.",
          ur: "پھر ان کے خواب سچے ہونے لگے، صبح کی روشنی کی طرح صاف۔ ایک بہت بڑی بات ہونے والی تھی۔" }
      ],
      ask: { en: ["What is the cave called?", "What did he do when a poor person came?"],
             ur: ["غار کا کیا نام ہے؟", "جب کوئی غریب آتا تو وہ کیا کرتے؟"] },
      habit: { en: "We sit quietly for a moment each day and remember Allah.", ur: "ہم ہر روز کچھ دیر خاموش بیٹھ کر اللہ کو یاد کرتے ہیں۔" },
      book: "In the cave of Hira."
    },
    {
      id: "read", icon: "light",
      title: { en: "\"Read!\"", ur: "\"پڑھو!\"" },
      scenes: [
        { en: "One night in Ramadan, when Muhammad, peace be upon him, was forty years old, he was in the cave of Hira. Suddenly the angel Jibril came to him.",
          ur: "رمضان کی ایک رات، جب محمد صلی اللہ علیہ وسلم چالیس سال کے تھے، وہ غارِ حرا میں تھے۔ اچانک فرشتہ جبریل ان کے پاس آئے۔" },
        { en: "The angel said: Read! He answered: I cannot read. The angel held him tight, then let him go, and said again: Read! This happened three times.",
          ur: "فرشتے نے کہا: پڑھو! انہوں نے جواب دیا: میں پڑھنا نہیں جانتا۔ فرشتے نے انہیں زور سے بھینچا، پھر چھوڑ دیا، اور دوبارہ کہا: پڑھو! ایسا تین بار ہوا۔" },
        { en: "Then the angel recited the very first words of the Qur'an: Read, in the name of your Lord who created.",
          ur: "پھر فرشتے نے قرآن کے سب سے پہلے الفاظ پڑھے: پڑھو، اپنے رب کے نام سے جس نے پیدا کیا۔" },
        { en: "His heart was beating fast. He hurried down the mountain, home to Khadijah, and said: Cover me! Cover me! She wrapped him in a blanket until he felt calm.",
          ur: "ان کا دل تیز تیز دھڑک رہا تھا۔ وہ جلدی سے پہاڑ سے اتر کر گھر خدیجہ کے پاس آئے اور کہا: مجھے چادر اوڑھا دو! مجھے چادر اوڑھا دو! انہوں نے چادر اوڑھا دی، یہاں تک کہ انہیں سکون آ گیا۔" },
        { en: "He told her what had happened. Khadijah said: Allah will never let you down. You are good to your family. You tell the truth. You help the poor and the weak, and you welcome your guests. Now he was the Messenger of Allah, peace and blessings be upon him.",
          ur: "انہوں نے خدیجہ کو سارا واقعہ سنایا۔ خدیجہ نے کہا: اللہ آپ کو کبھی اکیلا نہیں چھوڑے گا۔ آپ رشتہ داروں سے اچھا سلوک کرتے ہیں۔ سچ بولتے ہیں۔ غریبوں اور کمزوروں کی مدد کرتے ہیں، اور مہمانوں کی خاطر کرتے ہیں۔ اب وہ اللہ کے رسول تھے، صلی اللہ علیہ وسلم۔" }
      ],
      ask: { en: ["What was the first word the angel said?", "How did Khadijah comfort him?"],
             ur: ["فرشتے نے سب سے پہلا لفظ کیا کہا؟", "خدیجہ نے انہیں کیسے تسلی دی؟"] },
      habit: { en: "We open a book every day, starting with Bismillah.", ur: "ہم ہر روز بسم اللہ پڑھ کر کتاب کھولتے ہیں۔" },
      book: "Gabriel brings down the Revelation."
    },
    {
      id: "first", icon: "stars",
      title: { en: "The first to believe", ur: "سب سے پہلے ایمان لانے والے" },
      scenes: [
        { en: "The Messenger of Allah, peace be upon him, began to tell people: there is only one God, Allah. Worship Him alone, and be good to each other. He began with the people closest to him.",
          ur: "اللہ کے رسول صلی اللہ علیہ وسلم نے لوگوں کو بتانا شروع کیا: معبود صرف ایک ہے، اللہ۔ صرف اسی کی عبادت کرو، اور ایک دوسرے سے اچھا سلوک کرو۔ انہوں نے اپنے سب سے قریبی لوگوں سے شروع کیا۔" },
        { en: "The very first to believe was his wife, Khadijah, may Allah be pleased with her.",
          ur: "سب سے پہلے ایمان لانے والی ان کی بیوی خدیجہ رضی اللہ عنہا تھیں۔" },
        { en: "Then young Ali, his cousin who lived in his home, and Zayd, who was like a son to him. May Allah be pleased with them.",
          ur: "پھر ننھے علی، ان کے چچا زاد بھائی جو ان کے گھر میں رہتے تھے، اور زید، جو ان کے لیے بیٹے جیسے تھے۔ اللہ ان سے راضی ہو۔" },
        { en: "And his dear friend Abu Bakr, may Allah be pleased with him. He believed straight away. Then he told his own friends, and they believed too.",
          ur: "اور ان کے پیارے دوست ابوبکر رضی اللہ عنہ۔ وہ فوراً ایمان لے آئے۔ پھر انہوں نے اپنے دوستوں کو بتایا، اور وہ بھی ایمان لے آئے۔" },
        { en: "One by one, like lamps being lit in the night, more people came to Islam. And the light kept spreading, all the way to us.",
          ur: "ایک ایک کر کے، جیسے رات میں چراغ جلتے جائیں، اور لوگ اسلام میں آتے گئے۔ اور یہ روشنی پھیلتی رہی، یہاں تک کہ ہم تک پہنچ گئی۔" }
      ],
      ask: { en: ["Who was the very first to believe?", "Which friend believed straight away?"],
             ur: ["سب سے پہلے کون ایمان لایا؟", "کون سا دوست فوراً ایمان لے آیا؟"] },
      habit: { en: "We share something good we learned with someone we love.", ur: "ہم جو اچھی بات سیکھتے ہیں وہ اپنے پیاروں کو بتاتے ہیں۔" },
      book: "The early converts, in the secret call."
    }
  ];
})();
