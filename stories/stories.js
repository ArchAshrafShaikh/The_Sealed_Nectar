/* Story text. Short retellings in simple words, in English and Urdu.
   Stories 4 onward follow the events in The Sealed Nectar (Ar-Raheeq Al-Makhtum). The first three are from hadith; each lists its source.
   Each story has:
     scenes  one text per picture. Every text ends on a "find it" question; touching the answer turns the page.
     why     a question to think about at the end (followed by a silence)
     lesson  the lesson in one sentence;  habit  what we practise this week;  dua  a one-line prayer
     ask     two questions for the grown-up to ask: one about the story, one about his own life
     book    where the grown-up can check it
   To add a story, add an entry here and matching pictures in scenes/scenes.js. */
(function () {
  const SN = (window.SN = window.SN || {});

  SN.ritual = {
    open: { en: "Bismillah. In the name of Allah, the Most Kind, the Most Merciful.", ur: "بسم اللہ الرحمٰن الرحیم۔" },
    close: { en: "May the peace and blessings of Allah be upon him.", ur: "صلی اللہ علیہ وسلم۔" },
    together: { en: "This is a new story. Go and bring Mama or Baba, and hear it together. Then touch the light to begin.", ur: "یہ ایک نئی کہانی ہے۔ جاؤ، امی یا ابو کو بلا لاؤ، اور مل کر سنو۔ پھر شروع کرنے کے لیے روشنی کو چھوؤ۔" }
  };

  SN.stories = [
    {
      id: "bird", icon: "bird",
      title: { en: "The little bird", ur: "ننھی چڑیا" },
      scenes: [
        { en: "This really happened, long ago, in the city of Madinah. There lived a small boy called Abu Umayr. He had a little bird, and he loved to play with it. Can you find his little bird?",
          ur: "یہ سچ مچ ہوا تھا، بہت پہلے، مدینہ شہر میں۔ وہاں ابو عمیر نام کا ایک چھوٹا سا لڑکا رہتا تھا۔ اس کے پاس ایک ننھی چڑیا تھی، اور اسے اس کے ساتھ کھیلنا بہت پسند تھا۔ کیا تم اس کی ننھی چڑیا ڈھونڈ سکتے ہو؟" },
        { en: "The Prophet Muhammad, peace be upon him, was the leader of all the Muslims, and the busiest of people. But he came to visit this family. And every time he saw the little boy, he asked him kindly: Abu Umayr, what has your little bird been doing? Can you find the house he came to visit?",
          ur: "حضرت محمد صلی اللہ علیہ وسلم سب مسلمانوں کے رہنما تھے، اور سب سے زیادہ مصروف۔ مگر وہ اس گھرانے سے ملنے آتے تھے۔ اور جب بھی اس ننھے لڑکے کو دیکھتے تو پیار سے پوچھتے: ابو عمیر، تمہاری ننھی چڑیا نے کیا کیا؟ کیا تم وہ گھر ڈھونڈ سکتے ہو جہاں وہ ملنے آتے تھے؟" },
        { en: "Sometimes the time for prayer came while he was in their house. They swept the mat and sprinkled it with water, and he led them in prayer, right there in their home. Can you find the mat they made ready?",
          ur: "کبھی کبھی نماز کا وقت ہو جاتا اور وہ انہی کے گھر میں ہوتے۔ وہ چٹائی جھاڑتے اور اس پر پانی چھڑکتے، اور آپ وہیں ان کے گھر میں انہیں نماز پڑھاتے۔ کیا تم وہ چٹائی ڈھونڈ سکتے ہو جو انہوں نے تیار کی؟" }
      ],
      why: { en: "Why do you think he asked a small boy about his bird?", ur: "تمہارے خیال میں انہوں نے ایک چھوٹے سے بچے سے اس کی چڑیا کے بارے میں کیوں پوچھا؟" },
      lesson: { en: "He was the best of all people, and he had time for the smallest child. When we care about what others love, they feel happy.", ur: "وہ سب لوگوں میں سب سے اچھے تھے، اور سب سے چھوٹے بچے کے لیے بھی ان کے پاس وقت تھا۔ جب ہم دوسروں کی پسند کا خیال رکھتے ہیں تو وہ خوش ہوتے ہیں۔" },
      habit: { en: "This week, we ask someone smaller than us about something they love.", ur: "اس ہفتے ہم اپنے سے چھوٹے کسی سے اس کی پسند کی چیز کے بارے میں پوچھیں گے۔" },
      dua: { en: "O Allah, make us gentle, as he was gentle.", ur: "اے اللہ، ہمیں ویسا ہی نرم دل بنا جیسے وہ تھے۔" },
      ask: { en: ["What did the little boy have?", "What do you love that you would like someone to ask you about?"],
             ur: ["اس چھوٹے لڑکے کے پاس کیا تھا؟", "تمہیں کون سی چیز پسند ہے جس کے بارے میں تم چاہتے ہو کوئی تم سے پوچھے؟"] },
      book: "Hadith of Anas ibn Malik: Sahih al-Bukhari 6203 (also in Sahih Muslim). Not from The Sealed Nectar."
    },
    {
      id: "camelcry", icon: "tear",
      title: { en: "The camel that cried", ur: "رونے والا اونٹ" },
      scenes: [
        { en: "One day in Madinah, the Prophet, peace be upon him, walked into a garden full of palm trees. Can you find a tall palm tree?",
          ur: "ایک دن مدینہ میں نبی صلی اللہ علیہ وسلم کھجور کے درختوں سے بھرے ایک باغ میں تشریف لے گئے۔ کیا تم کھجور کا ایک اونچا درخت ڈھونڈ سکتے ہو؟" },
        { en: "In the garden stood a camel. When the camel saw him, it made a sad, crying sound, and tears ran from its eyes. Can you find the sad camel?",
          ur: "باغ میں ایک اونٹ کھڑا تھا۔ جب اونٹ نے آپ کو دیکھا تو درد بھری آواز نکالی، اور اس کی آنکھوں سے آنسو بہنے لگے۔ کیا تم اس اداس اونٹ کو ڈھونڈ سکتے ہو؟" },
        { en: "He went to the camel and gently stroked its head, until it grew quiet. Then he asked: whose camel is this? A young man came. The Prophet said to him: fear Allah with this animal He has given you. It has told me that you keep it hungry and tire it out. Can you find something for the hungry camel to eat?",
          ur: "آپ اونٹ کے پاس گئے اور نرمی سے اس کے سر پر ہاتھ پھیرا، یہاں تک کہ وہ چپ ہو گیا۔ پھر پوچھا: یہ اونٹ کس کا ہے؟ ایک نوجوان آیا۔ نبی نے اس سے فرمایا: اس جانور کے بارے میں اللہ سے ڈرو جو اس نے تمہیں دیا ہے۔ اس نے مجھے بتایا ہے کہ تم اسے بھوکا رکھتے ہو اور بہت تھکاتے ہو۔ کیا تم بھوکے اونٹ کے کھانے کے لیے کچھ ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did the camel stop crying?", ur: "اونٹ نے رونا کیوں بند کر دیا؟" },
      lesson: { en: "Animals feel hunger and tiredness, just as we do. Allah loves those who are kind to them.", ur: "جانوروں کو بھی ہماری طرح بھوک اور تھکن محسوس ہوتی ہے۔ اللہ ان سے محبت کرتا ہے جو ان پر مہربان ہوں۔" },
      habit: { en: "This week, we give water or food to a bird or an animal.", ur: "اس ہفتے ہم کسی پرندے یا جانور کو پانی یا دانہ دیں گے۔" },
      dua: { en: "O Allah, make us kind to everything You have made.", ur: "اے اللہ، ہمیں اپنی ہر مخلوق پر مہربان بنا۔" },
      ask: { en: ["What did he do to make the camel feel better?", "How do you know when an animal is hungry or thirsty?"],
             ur: ["انہوں نے اونٹ کو آرام دینے کے لیے کیا کیا؟", "تمہیں کیسے پتا چلتا ہے کہ کوئی جانور بھوکا یا پیاسا ہے؟"] },
      book: "Hadith of Abdullah ibn Ja'far: Sunan Abi Dawud 2549, graded sahih. Not from The Sealed Nectar."
    },
    {
      id: "prayer", icon: "masjid",
      title: { en: "The gentle prayer", ur: "نرمی والی نماز" },
      scenes: [
        { en: "In Madinah, the Prophet, peace be upon him, built a mosque. Its walls were bricks of clay, its pillars were the trunks of palm trees, and its roof was palm leaves. Everyone loved to pray behind him there. Can you find the mosque?",
          ur: "مدینہ میں نبی صلی اللہ علیہ وسلم نے ایک مسجد بنائی۔ اس کی دیواریں کچی اینٹوں کی تھیں، ستون کھجور کے تنوں کے، اور چھت کھجور کے پتوں کی۔ سب کو وہاں آپ کے پیچھے نماز پڑھنا بہت پسند تھا۔ کیا تم مسجد ڈھونڈ سکتے ہو؟" },
        { en: "Mothers came to pray too, and brought their little ones with them. He loved to make the prayer long. But one day, in the middle of the prayer, he heard a baby begin to cry. He knew the baby's mother was praying behind him, and that her heart was worried. What did he do? Touch the lamp to find out.",
          ur: "مائیں بھی نماز پڑھنے آتیں اور اپنے ننھے بچوں کو ساتھ لاتیں۔ آپ کو لمبی نماز پڑھانا پسند تھا۔ مگر ایک دن نماز کے بیچ میں آپ نے ایک بچے کے رونے کی آواز سنی۔ آپ جانتے تھے کہ بچے کی ماں پیچھے نماز پڑھ رہی ہے اور اس کا دل پریشان ہے۔ آپ نے کیا کیا؟ جاننے کے لیے چراغ کو چھوؤ۔" },
        { en: "He made the prayer short, so the mother could go quickly to her baby. He said: I begin the prayer wanting to make it long. Then I hear a child crying, so I make it short, because I know how the mother feels. Can you find the stars over Madinah?",
          ur: "آپ نے نماز مختصر کر دی، تاکہ ماں جلدی سے اپنے بچے کے پاس جا سکے۔ آپ نے فرمایا: میں نماز شروع کرتا ہوں اور چاہتا ہوں کہ اسے لمبا کروں۔ پھر کسی بچے کے رونے کی آواز سنتا ہوں تو نماز مختصر کر دیتا ہوں، کیونکہ میں جانتا ہوں کہ اس کی ماں پر کیا گزرتی ہے۔ کیا تم مدینہ کے اوپر ستارے ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did he make the prayer short that day?", ur: "اس دن انہوں نے نماز مختصر کیوں کی؟" },
      lesson: { en: "He thought about how a mother and her baby were feeling. When we notice how others feel, we can make things easier for them.", ur: "انہوں نے سوچا کہ ایک ماں اور اس کے بچے پر کیا گزر رہی ہے۔ جب ہم دوسروں کے احساس کا خیال کرتے ہیں تو ان کے لیے آسانی کر سکتے ہیں۔" },
      habit: { en: "This week, when someone is sad or crying, we stop and ask how we can help.", ur: "اس ہفتے جب کوئی اداس ہو یا رو رہا ہو تو ہم رک کر پوچھیں گے کہ ہم کیا مدد کر سکتے ہیں۔" },
      dua: { en: "O Allah, give us hearts that care for others.", ur: "اے اللہ، ہمیں ایسے دل دے جو دوسروں کا خیال رکھیں۔" },
      ask: { en: ["What did he hear during the prayer?", "What does Mama do when you cry?"],
             ur: ["نماز کے دوران انہوں نے کیا سنا؟", "جب تم روتے ہو تو امی کیا کرتی ہیں؟"] },
      book: "Hadith of Abu Qatadah and of Anas: Sahih al-Bukhari 707 and 709. The mosque's building is in The Sealed Nectar, in the first stage at Madinah."
    },
    {
      id: "elephant", icon: "eleph",
      title: { en: "The Year of the Elephant", ur: "ہاتھی والا سال" },
      scenes: [
        { en: "This really happened, long ago. In a valley between rocky hills stood a simple house made of stone: the Ka'bah. It was built for the worship of Allah, and people travelled for weeks across the desert just to see it. But far away in the south, a king heard about it, and he was not pleased. Something is rising in the distance. Can you find it?",
          ur: "یہ سچ مچ ہوا تھا، بہت پہلے۔ پتھریلے پہاڑوں کے بیچ ایک وادی میں پتھروں کا بنا ایک سادہ سا گھر تھا: کعبہ۔ یہ اللہ کی عبادت کے لیے بنایا گیا تھا، اور لوگ اسے دیکھنے کے لیے ہفتوں صحرا کا سفر کرتے تھے۔ مگر دور جنوب میں ایک بادشاہ نے اس کے بارے میں سنا، اور اسے یہ بات اچھی نہ لگی۔ دور کچھ اٹھ رہا ہے۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "The king's name was Abraha. He had built a grand building of his own, and he wanted everyone to visit that instead. So he gathered a great army and marched towards Makkah to pull the Ka'bah down. And at the front of his army walked something huge. Can you find it?",
          ur: "اس بادشاہ کا نام ابرہہ تھا۔ اس نے اپنی ایک شاندار عمارت بنائی تھی، اور وہ چاہتا تھا کہ سب لوگ کعبہ کے بجائے وہاں آئیں۔ چنانچہ اس نے ایک بڑی فوج جمع کی اور کعبہ کو گرانے کے لیے مکہ کی طرف چل پڑا۔ اور اس کی فوج کے سب سے آگے ایک بہت بڑی چیز چل رہی تھی۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "An elephant! Huge, and strong enough to push down walls. The people of Makkah were few. They could not fight such an army, so they climbed up into the hills and waited. The army reached the edge of Makkah. The elephant was turned to face the Ka'bah. Touch the elephant, and see what it did.",
          ur: "ایک ہاتھی! بہت بڑا، اتنا طاقتور کہ دیواریں گرا دے۔ مکہ کے لوگ تھوڑے تھے۔ وہ اتنی بڑی فوج سے نہیں لڑ سکتے تھے، اس لیے وہ پہاڑوں پر چڑھ گئے اور انتظار کرنے لگے۔ فوج مکہ کے کنارے پہنچ گئی۔ ہاتھی کا رخ کعبہ کی طرف کیا گیا۔ ہاتھی کو چھوؤ اور دیکھو اس نے کیا کیا۔" },
        { en: "It knelt down, and it would not move! They turned it to the south, and it ran. To the north, and it ran. To the east, and it ran. But towards the Ka'bah? It knelt again and would not take a single step. Then the sky began to grow dark. Something was coming. Look up! Can you find it?",
          ur: "وہ بیٹھ گیا، اور ہلا تک نہیں! انہوں نے اس کا رخ جنوب کی طرف کیا تو وہ دوڑ پڑا۔ شمال کی طرف کیا تو دوڑ پڑا۔ مشرق کی طرف کیا تو دوڑ پڑا۔ مگر کعبہ کی طرف؟ وہ پھر بیٹھ گیا اور ایک قدم بھی نہ اٹھایا۔ پھر آسمان پر اندھیرا چھانے لگا۔ کچھ آ رہا تھا۔ اوپر دیکھو! کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "Birds! Flock after flock, sent by Allah, filling the sky. Each bird carried three tiny stones, no bigger than a chickpea: one in its beak and two in its claws. They dropped them on the army, and the mighty army was broken. It never reached the Ka'bah. Can you find the House that Allah kept safe?",
          ur: "پرندے! جھنڈ کے جھنڈ، اللہ کے بھیجے ہوئے، جنہوں نے آسمان بھر دیا۔ ہر پرندے کے پاس چنے کے دانے جتنی تین ننھی کنکریاں تھیں: ایک چونچ میں اور دو پنجوں میں۔ انہوں نے وہ کنکریاں فوج پر گرائیں، اور وہ طاقتور فوج تباہ ہو گئی۔ وہ کعبہ تک کبھی نہ پہنچ سکی۔ کیا تم وہ گھر ڈھونڈ سکتے ہو جسے اللہ نے محفوظ رکھا؟" },
        { en: "The House has a Lord, and He kept it safe. The Arabs never forgot that year. They named it the Year of the Elephant. And in that very year, in a small house in Makkah, something even greater happened. A baby was born. Touch the star to see his name.",
          ur: "اس گھر کا ایک رب ہے، اور اسی نے اسے محفوظ رکھا۔ عرب اس سال کو کبھی نہ بھولے۔ انہوں نے اس کا نام ہاتھی والا سال رکھا۔ اور اسی سال، مکہ کے ایک چھوٹے سے گھر میں، اس سے بھی بڑی بات ہوئی۔ ایک بچہ پیدا ہوا۔ ان کا نام دیکھنے کے لیے ستارے کو چھوؤ۔" }
      ],
      why: { en: "Why could the great army not reach the Ka'bah?", ur: "اتنی بڑی فوج کعبہ تک کیوں نہ پہنچ سکی؟" },
      lesson: { en: "Allah is stronger than the biggest army. When we trust Him, we do not need to be afraid.", ur: "اللہ سب سے بڑی فوج سے بھی زیادہ طاقتور ہے۔ جب ہم اس پر بھروسا کرتے ہیں تو ہمیں ڈرنے کی ضرورت نہیں۔" },
      habit: { en: "This week, each night we thank Allah for keeping us safe.", ur: "اس ہفتے ہم ہر رات اللہ کا شکر ادا کریں گے کہ اس نے ہمیں محفوظ رکھا۔" },
      dua: { en: "O Allah, keep us and our home safe.", ur: "اے اللہ، ہمیں اور ہمارے گھر کو محفوظ رکھ۔" },
      ask: { en: ["Which animal knelt down and would not walk?", "When do you feel safe?"],
             ur: ["کون سا جانور بیٹھ گیا اور آگے نہ بڑھا؟", "تم کب خود کو محفوظ محسوس کرتے ہو؟"] },
      book: "The Sealed Nectar: the Elephant incident, in the part on the Prophet's lineage and family."
    },
    {
      id: "birth", icon: "moon",
      title: { en: "A baby is born in Makkah", ur: "مکہ میں ایک بچہ پیدا ہوا" },
      scenes: [
        { en: "In Makkah lived a gentle lady named Aminah. Her husband, Abdullah, had gone on a journey and died far from home, before their baby was born. Aminah waited for her baby in her small house. Can you find Aminah's house?",
          ur: "مکہ میں آمنہ نام کی ایک نیک خاتون رہتی تھیں۔ ان کے شوہر عبداللہ ایک سفر پر گئے اور بچے کی پیدائش سے پہلے ہی گھر سے دور وفات پا گئے۔ آمنہ اپنے چھوٹے سے گھر میں اپنے بچے کا انتظار کرتی رہیں۔ کیا تم آمنہ کا گھر ڈھونڈ سکتے ہو؟" },
        { en: "Then, on a Monday morning in the month of Rabi' al-Awwal, in the Year of the Elephant, the baby was born. A beautiful baby boy. Can you find the morning sun?",
          ur: "پھر ربیع الاول کے مہینے میں، ہاتھی والے سال، پیر کی صبح بچہ پیدا ہوا۔ ایک پیارا سا بچہ۔ کیا تم صبح کا سورج ڈھونڈ سکتے ہو؟" },
        { en: "Aminah sent the happy news to the baby's grandfather, Abdul Muttalib. He was so glad! He carried the baby to the Ka'bah, and there he prayed and thanked Allah. Can you find the Ka'bah?",
          ur: "آمنہ نے یہ خوشخبری بچے کے دادا عبدالمطلب کو بھیجی۔ وہ بہت خوش ہوئے! وہ بچے کو اٹھا کر کعبہ لے گئے، وہاں دعا کی اور اللہ کا شکر ادا کیا۔ کیا تم کعبہ ڈھونڈ سکتے ہو؟" },
        { en: "Grandfather chose a name for him that was new to the Arabs. It means: the one who is praised. His name is hidden in the night sky. Can you find it?",
          ur: "دادا نے ان کے لیے ایک ایسا نام چنا جو عربوں کے لیے نیا تھا۔ اس کا مطلب ہے: جس کی تعریف کی جائے۔ ان کا نام رات کے آسمان میں چھپا ہے۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "Muhammad, peace and blessings be upon him. Allah had chosen this baby for something very great. One day he would be the Messenger of Allah, and bring mercy to the whole world. Can you find the light in the sky?",
          ur: "محمد صلی اللہ علیہ وسلم۔ اللہ نے اس بچے کو ایک بہت بڑے کام کے لیے چنا تھا۔ ایک دن وہ اللہ کے رسول بنیں گے اور ساری دنیا کے لیے رحمت لائیں گے۔ کیا تم آسمان میں روشنی ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why was his grandfather so happy?", ur: "ان کے دادا اتنے خوش کیوں تھے؟" },
      lesson: { en: "Every baby is a gift from Allah. And this baby was a gift to the whole world.", ur: "ہر بچہ اللہ کا تحفہ ہے۔ اور یہ بچہ تو ساری دنیا کے لیے تحفہ تھا۔" },
      habit: { en: "This week, when we hear his name, we say: sallallahu alayhi wa sallam.", ur: "اس ہفتے جب ہم ان کا نام سنیں گے تو کہیں گے: صلی اللہ علیہ وسلم۔" },
      dua: { en: "O Allah, send Your peace and blessings upon Muhammad.", ur: "اے اللہ، محمد صلی اللہ علیہ وسلم پر اپنی رحمت اور سلامتی بھیج۔" },
      ask: { en: ["What name did his grandfather give him?", "Who was happy on the day you were born?"],
             ur: ["دادا نے ان کا کیا نام رکھا؟", "جس دن تم پیدا ہوئے، کون کون خوش تھا؟"] },
      book: "The Sealed Nectar: his birth, in the part on his birth and forty years before prophethood."
    },
    {
      id: "halimah", icon: "tent",
      title: { en: "In the desert with Halimah", ur: "حلیمہ کے ساتھ صحرا میں" },
      scenes: [
        { en: "In those days, families in Makkah sent their babies to grow up in the desert. The air was clean there, and children grew strong. Women from the desert came to Makkah to take babies home and care for them. Can you find a tent from the desert?",
          ur: "ان دنوں مکہ کے لوگ اپنے بچوں کو صحرا میں پلنے کے لیے بھیجتے تھے۔ وہاں کی ہوا صاف تھی اور بچے مضبوط ہوتے تھے۔ صحرا کی عورتیں مکہ آتیں اور بچوں کو پالنے کے لیے اپنے ساتھ لے جاتیں۔ کیا تم صحرا کا ایک خیمہ ڈھونڈ سکتے ہو؟" },
        { en: "A woman named Halimah came with her husband. They were poor and tired. Their old camel gave no milk. Halimah took the baby Muhammad, peace be upon him, who had no father, to care for him. She rode on a thin, slow donkey. Can you find it?",
          ur: "حلیمہ نام کی ایک خاتون اپنے شوہر کے ساتھ آئیں۔ وہ غریب اور تھکے ہوئے تھے۔ ان کی بوڑھی اونٹنی دودھ نہیں دیتی تھی۔ حلیمہ نے ننھے محمد صلی اللہ علیہ وسلم کو، جن کے والد نہیں تھے، پالنے کے لیے لے لیا۔ وہ ایک کمزور، سست گدھے پر سوار تھیں۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "And then good things began to happen. That night the old camel gave plenty of milk. And on the way home, the slow donkey went so fast that it passed all the others. Touch the donkey, and see how it goes now.",
          ur: "اور پھر اچھی اچھی باتیں ہونے لگیں۔ اس رات بوڑھی اونٹنی نے خوب دودھ دیا۔ اور گھر کے راستے میں سست گدھا اتنا تیز چلا کہ سب سے آگے نکل گیا۔ گدھے کو چھوؤ اور دیکھو اب وہ کیسے چلتا ہے۔" },
        { en: "At home in the desert, the land was dry. But every evening Halimah's goats came back full of milk. Allah had sent blessings with this little child. Can you find a goat full of milk?",
          ur: "صحرا میں ان کے گھر کی زمین خشک تھی۔ مگر ہر شام حلیمہ کی بکریاں دودھ سے بھری ہوئی واپس آتیں۔ اللہ نے اس ننھے بچے کے ساتھ برکتیں بھیجی تھیں۔ کیا تم دودھ سے بھری ایک بکری ڈھونڈ سکتے ہو؟" },
        { en: "Little Muhammad, peace be upon him, grew strong and healthy in the open desert, under the wide sky. Halimah and her family loved him very much. Can you find the stars he slept under?",
          ur: "ننھے محمد صلی اللہ علیہ وسلم کھلے صحرا میں، وسیع آسمان کے نیچے، مضبوط اور تندرست ہوتے گئے۔ حلیمہ اور ان کا گھرانا ان سے بہت محبت کرتا تھا۔ کیا تم وہ ستارے ڈھونڈ سکتے ہو جن کے نیچے وہ سوتے تھے؟" }
      ],
      why: { en: "Why did Halimah's goats have so much milk?", ur: "حلیمہ کی بکریوں میں اتنا دودھ کیوں تھا؟" },
      lesson: { en: "Halimah was kind to a child who had no father, and Allah filled her home with good things.", ur: "حلیمہ نے ایک ایسے بچے پر مہربانی کی جس کے والد نہیں تھے، اور اللہ نے ان کا گھر برکتوں سے بھر دیا۔" },
      habit: { en: "This week, we say Alhamdulillah for our food and our milk.", ur: "اس ہفتے ہم اپنے کھانے اور دودھ پر الحمدللہ کہیں گے۔" },
      dua: { en: "O Allah, bless our home and our food.", ur: "اے اللہ، ہمارے گھر اور ہمارے کھانے میں برکت دے۔" },
      ask: { en: ["What happened to the slow donkey?", "What good things has Allah given our family?"],
             ur: ["سست گدھے کو کیا ہوا؟", "اللہ نے ہمارے گھر کو کون کون سی اچھی چیزیں دی ہیں؟"] },
      book: "The Sealed Nectar: babyhood, with Halimah of Bani Sa'd."
    },
    {
      id: "family", icon: "palm",
      title: { en: "His grandfather and his uncle", ur: "دادا اور چچا" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was about five years old, he came back from the desert to Makkah, to live with his mother Aminah. She loved him dearly. Can you find his mother's house?",
          ur: "جب محمد صلی اللہ علیہ وسلم تقریباً پانچ سال کے ہوئے تو وہ صحرا سے مکہ واپس اپنی والدہ آمنہ کے پاس آ گئے۔ وہ ان سے بہت محبت کرتی تھیں۔ کیا تم ان کی والدہ کا گھر ڈھونڈ سکتے ہو؟" },
        { en: "When he was six, his mother took him on a long journey to the town of Yathrib, to visit their family. Can you find the camel that carried them?",
          ur: "جب وہ چھ سال کے تھے تو ان کی والدہ انہیں رشتہ داروں سے ملانے یثرب شہر کے لمبے سفر پر لے گئیں۔ کیا تم وہ اونٹ ڈھونڈ سکتے ہو جس پر وہ سوار تھے؟" },
        { en: "On the way home, his mother became ill, and she died. He was a small boy, and he was sad. But Allah did not leave him alone. In Makkah, someone who loved him very much was waiting for him. Can you find the way home to the Ka'bah?",
          ur: "واپسی کے راستے میں ان کی والدہ بیمار ہوئیں اور وفات پا گئیں۔ وہ چھوٹے سے بچے تھے، اور غمگین ہوئے۔ مگر اللہ نے انہیں اکیلا نہیں چھوڑا۔ مکہ میں کوئی ان کا انتظار کر رہا تھا جو ان سے بہت محبت کرتا تھا۔ کیا تم کعبہ کی طرف گھر کا راستہ ڈھونڈ سکتے ہو؟" },
        { en: "It was his grandfather, Abdul Muttalib. He loved him more than anyone. Grandfather had a special mat in the shade of the Ka'bah. Nobody else sat on it. But he let his grandson sit right beside him. Can you find grandfather's mat?",
          ur: "وہ ان کے دادا عبدالمطلب تھے۔ وہ سب سے بڑھ کر ان سے محبت کرتے تھے۔ کعبہ کے سائے میں دادا کا ایک خاص بچھونا تھا۔ اس پر کوئی اور نہیں بیٹھتا تھا۔ مگر وہ اپنے پوتے کو اپنے بالکل پاس بٹھاتے تھے۔ کیا تم دادا کا بچھونا ڈھونڈ سکتے ہو؟" },
        { en: "When he was eight, his grandfather died too. And again Allah sent someone to love him: his uncle, Abu Talib. Abu Talib was not rich and had many children, but he cared for him like his own son, and even more. Can you find Abu Talib's house, full of children?",
          ur: "جب وہ آٹھ سال کے ہوئے تو دادا بھی وفات پا گئے۔ اور اللہ نے پھر ان سے محبت کرنے والا بھیج دیا: ان کے چچا ابو طالب۔ ابو طالب امیر نہ تھے اور ان کے بہت سے بچے تھے، مگر انہوں نے اپنے بیٹوں کی طرح، بلکہ ان سے بھی بڑھ کر ان کا خیال رکھا۔ کیا تم ابو طالب کا بچوں سے بھرا گھر ڈھونڈ سکتے ہو؟" },
        { en: "Allah was always looking after him. In the Qur'an, Allah reminds him: Did He not find you an orphan, and give you a home? Can you find the moon watching over Makkah?",
          ur: "اللہ ہمیشہ ان کی حفاظت کرتا رہا۔ قرآن میں اللہ انہیں یاد دلاتا ہے: کیا اس نے آپ کو یتیم نہ پایا، پھر ٹھکانا دیا؟ کیا تم مکہ پر نظر رکھتا چاند ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why was he never left alone?", ur: "وہ کبھی اکیلے کیوں نہیں رہے؟" },
      lesson: { en: "Allah always sent someone to love him and look after him. Allah looks after us too.", ur: "اللہ نے ہمیشہ ان سے محبت کرنے اور ان کا خیال رکھنے والا بھیجا۔ اللہ ہمارا بھی خیال رکھتا ہے۔" },
      habit: { en: "This week, we are gentle with a child who is sad or alone.", ur: "اس ہفتے ہم کسی ایسے بچے سے نرمی کریں گے جو اداس یا اکیلا ہو۔" },
      dua: { en: "O Allah, have mercy on our mothers and fathers, as they cared for us when we were small.", ur: "اے اللہ، ہمارے ماں باپ پر رحم فرما، جیسے انہوں نے بچپن میں ہمیں پالا۔" },
      ask: { en: ["Where did grandfather let him sit?", "Who looks after you?"],
             ur: ["دادا انہیں کہاں بٹھاتے تھے؟", "تمہارا خیال کون کون رکھتا ہے؟"] },
      book: "The Sealed Nectar: back to his mother; to his grandfather; to his uncle Abu Talib. Hear this one with him the first time."
    },
    {
      id: "shepherd", icon: "sheep",
      title: { en: "The young shepherd", ur: "ننھا چرواہا" },
      scenes: [
        { en: "As a boy, Muhammad, peace be upon him, wanted to help his uncle Abu Talib, who did not have much money. So he worked. He looked after sheep for the people of Makkah, for a small pay. Can you find one of his sheep?",
          ur: "بچپن میں محمد صلی اللہ علیہ وسلم اپنے چچا ابو طالب کی مدد کرنا چاہتے تھے، جن کے پاس زیادہ پیسے نہ تھے۔ اس لیے انہوں نے کام کیا۔ وہ تھوڑی سی مزدوری پر مکہ والوں کی بکریاں چراتے تھے۔ کیا تم ان کی ایک بھیڑ ڈھونڈ سکتے ہو؟" },
        { en: "Every day he took the sheep out to the hills to eat. He watched them all day long. Look! One sheep has wandered far away. Can you find it, and bring it back?",
          ur: "ہر روز وہ بھیڑ بکریوں کو چرانے پہاڑیوں پر لے جاتے۔ سارا دن ان پر نظر رکھتے۔ دیکھو! ایک بھیڑ دور نکل گئی ہے۔ کیا تم اسے ڈھونڈ کر واپس لا سکتے ہو؟" },
        { en: "He brought it back gently. Looking after sheep takes patience. Sheep are slow and weak, and they must be kept safe. A shepherd has to be gentle and watchful. Can you find the tree where the sheep rest?",
          ur: "وہ اسے نرمی سے واپس لے آتے۔ بھیڑیں چرانا صبر کا کام ہے۔ بھیڑیں سست اور کمزور ہوتی ہیں، اور ان کی حفاظت کرنی پڑتی ہے۔ چرواہے کو نرم دل اور ہوشیار ہونا پڑتا ہے۔ کیا تم وہ درخت ڈھونڈ سکتے ہو جہاں بھیڑیں آرام کرتی ہیں؟" },
        { en: "Out in the quiet hills there was time to look at the sky and the mountains, and to think about the One who made them all. Can you find the stars?",
          ur: "خاموش پہاڑیوں میں آسمان اور پہاڑوں کو دیکھنے کا، اور ان سب کے بنانے والے کے بارے میں سوچنے کا وقت ملتا تھا۔ کیا تم ستارے ڈھونڈ سکتے ہو؟" },
        { en: "Later he told his friends that every prophet had looked after sheep. Caring for the small and the weak was how Allah got them ready to care for people. Can you find the morning sun?",
          ur: "بعد میں انہوں نے اپنے ساتھیوں کو بتایا کہ ہر نبی نے بکریاں چرائی ہیں۔ چھوٹوں اور کمزوروں کا خیال رکھ کر اللہ نے انہیں لوگوں کا خیال رکھنے کے لیے تیار کیا۔ کیا تم صبح کا سورج ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did he go to work when he was still a boy?", ur: "وہ بچپن ہی میں کام کیوں کرنے لگے؟" },
      lesson: { en: "He helped his family, and he was gentle with the weak. Small, careful work made him ready for great work.", ur: "انہوں نے اپنے گھر والوں کی مدد کی، اور کمزوروں سے نرمی کی۔ چھوٹے چھوٹے کاموں نے انہیں بڑے کام کے لیے تیار کیا۔" },
      habit: { en: "This week, we do one job at home to help, without being asked.", ur: "اس ہفتے ہم بغیر کہے گھر کا ایک کام کر کے مدد کریں گے۔" },
      dua: { en: "O Allah, make us helpful and patient.", ur: "اے اللہ، ہمیں مدد کرنے والا اور صبر کرنے والا بنا۔" },
      ask: { en: ["What did he do when a sheep wandered away?", "How can you help at home?"],
             ur: ["جب کوئی بھیڑ دور چلی جاتی تو وہ کیا کرتے؟", "تم گھر میں کیسے مدد کر سکتے ہو؟"] },
      book: "The Sealed Nectar: his early work as a shepherd."
    },
    {
      id: "amin", icon: "key",
      title: { en: "Al-Amin, the trusted one", ur: "الامین، بھروسے والے" },
      scenes: [
        { en: "Muhammad, peace be upon him, grew into a young man in Makkah. And everybody noticed something about him. He always told the truth. Always. Can you find the sun shining over Makkah?",
          ur: "محمد صلی اللہ علیہ وسلم مکہ میں جوان ہوئے۔ اور سب نے ان کی ایک بات دیکھی۔ وہ ہمیشہ سچ بولتے تھے۔ ہمیشہ۔ کیا تم مکہ پر چمکتا سورج ڈھونڈ سکتے ہو؟" },
        { en: "He never cheated. He never broke a promise. When he said he would do something, he did it. Can you find the scales that weigh things fairly?",
          ur: "وہ کبھی دھوکا نہیں دیتے تھے۔ کبھی وعدہ نہیں توڑتے تھے۔ جب کہتے کہ یہ کام کروں گا، تو ضرور کرتے۔ کیا تم وہ ترازو ڈھونڈ سکتے ہو جو چیزوں کو ٹھیک ٹھیک تولتا ہے؟" },
        { en: "So the people of Makkah gave him two special names. As-Sadiq, the Truthful. And Al-Amin, the Trustworthy. One of his names is hidden in the night. Can you find it?",
          ur: "اس لیے مکہ کے لوگوں نے انہیں دو خاص نام دیے۔ الصادق، یعنی سچے۔ اور الامین، یعنی امانت دار۔ ان کا ایک نام رات میں چھپا ہے۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "When people had something precious, they brought it to him to keep it safe. They knew that with Al-Amin, nothing would ever be lost. Can you find the box of precious things?",
          ur: "جب لوگوں کے پاس کوئی قیمتی چیز ہوتی تو وہ اسے حفاظت کے لیے ان کے پاس رکھواتے۔ وہ جانتے تھے کہ الامین کے پاس کوئی چیز کبھی گم نہیں ہوگی۔ کیا تم قیمتی چیزوں کا صندوق ڈھونڈ سکتے ہو؟" },
        { en: "He was kind to everyone, too. He helped the weak, he was good to his neighbours, and he welcomed his guests. Can you find the door he opened for his guests?",
          ur: "وہ سب پر مہربان بھی تھے۔ کمزوروں کی مدد کرتے، پڑوسیوں سے اچھا سلوک کرتے اور مہمانوں کی خاطر کرتے۔ کیا تم وہ دروازہ ڈھونڈ سکتے ہو جو وہ مہمانوں کے لیے کھولتے تھے؟" }
      ],
      why: { en: "Why did people trust him with their precious things?", ur: "لوگ اپنی قیمتی چیزوں کے لیے ان پر بھروسا کیوں کرتے تھے؟" },
      lesson: { en: "He always told the truth, so everyone trusted him. When we tell the truth, people can trust us too.", ur: "وہ ہمیشہ سچ بولتے تھے، اس لیے سب ان پر بھروسا کرتے تھے۔ جب ہم سچ بولتے ہیں تو لوگ ہم پر بھی بھروسا کرتے ہیں۔" },
      habit: { en: "This week, we tell the truth, even when it is hard.", ur: "اس ہفتے ہم سچ بولیں گے، چاہے مشکل ہی کیوں نہ ہو۔" },
      dua: { en: "O Allah, make us truthful.", ur: "اے اللہ، ہمیں سچا بنا۔" },
      ask: { en: ["What does Al-Amin mean?", "When is it hard to tell the truth?"],
             ur: ["الامین کا کیا مطلب ہے؟", "سچ بولنا کب مشکل لگتا ہے؟"] },
      book: "The Sealed Nectar: his character before prophethood, As-Sadiq and Al-Amin."
    },
    {
      id: "syria", icon: "camel",
      title: { en: "The journey to Syria", ur: "شام کا سفر" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was twelve, his uncle Abu Talib got ready for a long trading trip to Syria, far away in the north. He took his nephew with him. Can you find a camel ready for the journey?",
          ur: "جب محمد صلی اللہ علیہ وسلم بارہ سال کے تھے تو ان کے چچا ابو طالب نے تجارت کے لیے دور شمال میں ملک شام کے لمبے سفر کی تیاری کی۔ وہ اپنے بھتیجے کو بھی ساتھ لے گئے۔ کیا تم سفر کے لیے تیار ایک اونٹ ڈھونڈ سکتے ہو؟" },
        { en: "The caravan walked for many days across the desert. The camels carried the goods. At night everyone rested. Can you find the stars they rested under?",
          ur: "قافلہ کئی دن صحرا میں چلتا رہا۔ اونٹ سامان اٹھائے ہوئے تھے۔ رات کو سب آرام کرتے۔ کیا تم وہ ستارے ڈھونڈ سکتے ہو جن کے نیچے وہ آرام کرتے تھے؟" },
        { en: "At last they reached a town called Busra. A monk named Bahira lived there. He never came out to meet the caravans. But this time, he came out. Can you find the door he came out of?",
          ur: "آخر وہ بصریٰ نام کے ایک شہر پہنچے۔ وہاں بحیرا نام کا ایک راہب رہتا تھا۔ وہ قافلوں سے ملنے کبھی باہر نہیں آتا تھا۔ مگر اس بار وہ باہر آیا۔ کیا تم وہ دروازہ ڈھونڈ سکتے ہو جس سے وہ باہر آیا؟" },
        { en: "Bahira looked at the boy and knew he was special. He told Abu Talib that this boy would be a messenger from Allah, a mercy for all people. He asked him to take the boy home and keep him safe. Can you find the tree where the caravan rested?",
          ur: "بحیرا نے اس بچے کو دیکھا اور پہچان گیا کہ یہ خاص ہے۔ اس نے ابو طالب کو بتایا کہ یہ بچہ اللہ کا رسول ہوگا، سب لوگوں کے لیے رحمت۔ اس نے کہا کہ بچے کو گھر واپس لے جائیں اور اس کی حفاظت کریں۔ کیا تم وہ درخت ڈھونڈ سکتے ہو جہاں قافلہ ٹھہرا تھا؟" },
        { en: "So Abu Talib sent him back to Makkah, safe and sound. His uncle loved him and always protected him. Can you find the camel taking him home?",
          ur: "چنانچہ ابو طالب نے انہیں خیریت سے مکہ واپس بھیج دیا۔ چچا ان سے محبت کرتے تھے اور ہمیشہ ان کی حفاظت کرتے تھے۔ کیا تم وہ اونٹ ڈھونڈ سکتے ہو جو انہیں گھر لے جا رہا ہے؟" }
      ],
      why: { en: "Why did Abu Talib send him home?", ur: "ابو طالب نے انہیں گھر کیوں بھیج دیا؟" },
      lesson: { en: "His uncle kept him safe because he loved him. The people who love us look after us.", ur: "چچا نے ان کی حفاظت کی کیونکہ وہ ان سے محبت کرتے تھے۔ جو ہم سے محبت کرتے ہیں وہ ہمارا خیال رکھتے ہیں۔" },
      habit: { en: "This week, we say a dua before we travel.", ur: "اس ہفتے ہم سفر سے پہلے دعا پڑھیں گے۔" },
      dua: { en: "O Allah, keep us safe on our way, and bring us home safely.", ur: "اے اللہ، ہمیں راستے میں محفوظ رکھ اور خیریت سے گھر پہنچا۔" },
      ask: { en: ["Which animals carried the goods?", "Who keeps you safe when we go out?"],
             ur: ["سامان کون سے جانور اٹھاتے تھے؟", "جب ہم باہر جاتے ہیں تو تمہاری حفاظت کون کرتا ہے؟"] },
      book: "The Sealed Nectar: Bahira the monk."
    },
    {
      id: "khadijah", icon: "coins",
      title: { en: "The honest trader", ur: "سچے تاجر" },
      scenes: [
        { en: "In Makkah lived a noble and wise lady named Khadijah, may Allah be pleased with her. She was a trader. She sent goods to faraway markets to be sold. Can you find Khadijah's house?",
          ur: "مکہ میں خدیجہ رضی اللہ عنہا نام کی ایک معزز اور سمجھدار خاتون رہتی تھیں۔ وہ تاجر تھیں۔ وہ اپنا سامان بیچنے کے لیے دور کے بازاروں میں بھیجتی تھیں۔ کیا تم خدیجہ کا گھر ڈھونڈ سکتے ہو؟" },
        { en: "She heard about a young man who was truthful and trustworthy: Muhammad, peace be upon him. She asked him to take her goods to Syria, and sent her helper Maysarah with him. Can you find a camel carrying her goods?",
          ur: "انہوں نے ایک سچے اور امانت دار نوجوان کے بارے میں سنا: محمد صلی اللہ علیہ وسلم۔ انہوں نے ان سے کہا کہ ان کا سامان شام لے جائیں، اور اپنے غلام میسرہ کو ان کے ساتھ بھیجا۔ کیا تم ان کا سامان اٹھائے ایک اونٹ ڈھونڈ سکتے ہو؟" },
        { en: "He traded honestly. He did not cheat anyone, not even a little. And the trade earned more than it ever had before. Can you find the scales he used so fairly?",
          ur: "انہوں نے ایمانداری سے تجارت کی۔ کسی کو ذرا سا بھی دھوکا نہ دیا۔ اور تجارت میں پہلے سے کہیں زیادہ نفع ہوا۔ کیا تم وہ ترازو ڈھونڈ سکتے ہو جسے وہ انصاف سے استعمال کرتے تھے؟" },
        { en: "When they came home, Maysarah told Khadijah everything he had seen: how honest, how kind and how gentle Muhammad was, peace be upon him. Can you find the camel coming home?",
          ur: "جب وہ واپس آئے تو میسرہ نے خدیجہ کو وہ سب بتایا جو اس نے دیکھا تھا: کہ محمد صلی اللہ علیہ وسلم کتنے سچے، کتنے مہربان اور کتنے نرم دل ہیں۔ کیا تم گھر واپس آتا اونٹ ڈھونڈ سکتے ہو؟" },
        { en: "Khadijah admired his good character, and they were married. He was twenty-five years old. They lived together with love and kindness. Can you find a lamp shining at their happy home?",
          ur: "خدیجہ کو ان کے اچھے اخلاق بہت پسند آئے، اور ان دونوں کی شادی ہو گئی۔ اس وقت ان کی عمر پچیس سال تھی۔ وہ محبت اور مہربانی کے ساتھ رہے۔ کیا تم ان کے خوش گھر میں جلتا ایک چراغ ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did Khadijah trust him with her goods?", ur: "خدیجہ نے اپنے سامان کے لیے ان پر بھروسا کیوں کیا؟" },
      lesson: { en: "He was fair with everyone, and Allah put blessing in his work. Being fair brings good things.", ur: "وہ سب کے ساتھ انصاف کرتے تھے، اور اللہ نے ان کے کام میں برکت ڈالی۔ انصاف کرنے سے بھلائی ملتی ہے۔" },
      habit: { en: "This week, we are fair when we share and when we play.", ur: "اس ہفتے ہم بانٹتے اور کھیلتے وقت انصاف کریں گے۔" },
      dua: { en: "O Allah, make us fair and honest.", ur: "اے اللہ، ہمیں انصاف کرنے والا اور ایماندار بنا۔" },
      ask: { en: ["How did he trade?", "How do you share fairly with your friends?"],
             ur: ["انہوں نے تجارت کیسے کی؟", "تم اپنے دوستوں کے ساتھ انصاف سے کیسے بانٹتے ہو؟"] },
      book: "The Sealed Nectar: his trade journey for Khadijah and their marriage."
    },
    {
      id: "stone", icon: "stone",
      title: { en: "The Black Stone", ur: "حجرِ اسود" },
      scenes: [
        { en: "When Muhammad, peace be upon him, was thirty-five, a flood damaged the walls of the Ka'bah. The people of Makkah decided to build it again. Every family helped to carry the stones. Touch the wall, and help it grow.",
          ur: "جب محمد صلی اللہ علیہ وسلم پینتیس سال کے تھے تو ایک سیلاب نے کعبہ کی دیواروں کو نقصان پہنچایا۔ مکہ والوں نے اسے دوبارہ بنانے کا فیصلہ کیا۔ ہر قبیلے نے پتھر اٹھانے میں مدد کی۔ دیوار کو چھوؤ اور اسے اونچا کرنے میں مدد کرو۔" },
        { en: "The walls grew higher and higher. Then it was time to put one very special stone back in its place. Every family wanted the honour of lifting it. Can you find the Black Stone?",
          ur: "دیواریں اونچی ہوتی گئیں۔ پھر ایک بہت خاص پتھر کو اس کی جگہ رکھنے کا وقت آیا۔ ہر قبیلہ چاہتا تھا کہ اسے اٹھانے کی عزت اسی کو ملے۔ کیا تم حجرِ اسود ڈھونڈ سکتے ہو؟" },
        { en: "They argued for days and nearly began to fight. Then an old man said: let the first person who walks in through the gate decide for us. Everyone agreed. Can you find the gate?",
          ur: "وہ کئی دن جھگڑتے رہے اور لڑائی ہونے ہی والی تھی۔ پھر ایک بزرگ نے کہا: جو شخص سب سے پہلے دروازے سے اندر آئے، وہی ہمارا فیصلہ کرے۔ سب مان گئے۔ کیا تم وہ دروازہ ڈھونڈ سکتے ہو؟" },
        { en: "They all watched the gate. And the first to walk in was Muhammad, peace be upon him. They were so happy! They said: it is Al-Amin. We are pleased with whatever he decides. Touch the gate, and see the light as he comes in.",
          ur: "سب دروازے کو دیکھتے رہے۔ اور سب سے پہلے اندر آنے والے محمد صلی اللہ علیہ وسلم تھے۔ سب بہت خوش ہوئے! انہوں نے کہا: یہ تو الامین ہیں۔ یہ جو فیصلہ کریں، ہمیں منظور ہے۔ دروازے کو چھوؤ اور ان کے آنے کی روشنی دیکھو۔" },
        { en: "He spread out a cloth and put the Black Stone in the middle. He asked the leaders to hold the edges and lift it together. Then he set the stone in its place with his own hands. Touch the cloth, and lift the stone together.",
          ur: "انہوں نے ایک چادر بچھائی اور حجرِ اسود کو اس کے بیچ میں رکھا۔ انہوں نے سرداروں سے کہا کہ چادر کے کنارے پکڑ کر مل کر اٹھائیں۔ پھر انہوں نے اپنے ہاتھوں سے پتھر کو اس کی جگہ رکھ دیا۔ چادر کو چھوؤ اور مل کر پتھر اٹھاؤ۔" }
      ],
      why: { en: "Why was everyone happy at the end?", ur: "آخر میں سب خوش کیوں تھے؟" },
      lesson: { en: "He found a way for everyone to share, so nobody fought. When we share, everyone is happy.", ur: "انہوں نے ایسا راستہ نکالا کہ سب شریک ہوں، اس لیے کوئی نہ لڑا۔ جب ہم بانٹتے ہیں تو سب خوش ہوتے ہیں۔" },
      habit: { en: "This week, when we disagree, we look for a way to share.", ur: "اس ہفتے جب ہماری بات نہ ملے تو ہم مل بانٹنے کا راستہ ڈھونڈیں گے۔" },
      dua: { en: "O Allah, put peace between us.", ur: "اے اللہ، ہمارے درمیان صلح اور محبت رکھ۔" },
      ask: { en: ["How did he help everyone share?", "What can you do when you and a friend both want the same toy?"],
             ur: ["انہوں نے سب کو کیسے شریک کیا؟", "جب تم اور تمہارا دوست ایک ہی کھلونا چاہو تو کیا کر سکتے ہو؟"] },
      book: "The Sealed Nectar: rebuilding the Ka'bah and the arbitration issue."
    },
    {
      id: "hira", icon: "cave",
      title: { en: "The cave of Hira", ur: "غارِ حرا" },
      scenes: [
        { en: "In Makkah, many people prayed to statues made of stone and wood. Muhammad, peace be upon him, knew this was wrong. He never did it, not even once. Can you find the Ka'bah, the house built for Allah alone?",
          ur: "مکہ میں بہت سے لوگ پتھر اور لکڑی کے بنے بتوں کی پوجا کرتے تھے۔ محمد صلی اللہ علیہ وسلم جانتے تھے کہ یہ غلط ہے۔ انہوں نے ایسا کبھی نہیں کیا، ایک بار بھی نہیں۔ کیا تم کعبہ ڈھونڈ سکتے ہو، وہ گھر جو صرف اللہ کے لیے بنایا گیا؟" },
        { en: "He loved to go somewhere quiet, to think and to worship Allah. High on a mountain near Makkah there is a small cave. It is called the cave of Hira. Can you find the little cave?",
          ur: "انہیں کسی خاموش جگہ جا کر سوچنا اور اللہ کی عبادت کرنا پسند تھا۔ مکہ کے قریب ایک پہاڑ کی اونچائی پر ایک چھوٹا سا غار ہے۔ اسے غارِ حرا کہتے ہیں۔ کیا تم وہ ننھا غار ڈھونڈ سکتے ہو؟" },
        { en: "He would take food and water and stay there for many nights, most of all in the month of Ramadan. And when a poor person came by, he shared his food. Can you find his basket of food?",
          ur: "وہ کھانا اور پانی لے کر وہاں کئی کئی راتیں ٹھہرتے، خاص طور پر رمضان کے مہینے میں۔ اور جب کوئی غریب وہاں آتا تو اسے اپنے کھانے میں شریک کرتے۔ کیا تم ان کی کھانے کی ٹوکری ڈھونڈ سکتے ہو؟" },
        { en: "From the cave he could see the hills and the great wide sky. He thought about the One who made it all. Can you find the stars?",
          ur: "غار سے انہیں پہاڑیاں اور کھلا وسیع آسمان نظر آتا۔ وہ ان سب کے بنانے والے کے بارے میں سوچتے۔ کیا تم ستارے ڈھونڈ سکتے ہو؟" },
        { en: "Then his dreams began to come true, as clear as the light of morning. Something very great was about to happen. Can you find the morning light?",
          ur: "پھر ان کے خواب سچے ہونے لگے، صبح کی روشنی کی طرح صاف۔ ایک بہت بڑی بات ہونے والی تھی۔ کیا تم صبح کی روشنی ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did he go to a quiet place?", ur: "وہ خاموش جگہ پر کیوں جاتے تھے؟" },
      lesson: { en: "In a quiet place, he thought about Allah, and he shared what he had. Quiet time brings us closer to Allah.", ur: "خاموش جگہ پر وہ اللہ کے بارے میں سوچتے، اور جو کچھ پاس ہوتا بانٹتے۔ خاموشی کا وقت ہمیں اللہ کے قریب کرتا ہے۔" },
      habit: { en: "This week, we sit quietly for a moment each day and remember Allah.", ur: "اس ہفتے ہم ہر روز کچھ دیر خاموش بیٹھ کر اللہ کو یاد کریں گے۔" },
      dua: { en: "O Allah, help us to remember You.", ur: "اے اللہ، اپنی یاد میں ہماری مدد فرما۔" },
      ask: { en: ["What is the cave called?", "Where is your quiet place?"],
             ur: ["غار کا کیا نام ہے؟", "تمہاری خاموش جگہ کہاں ہے؟"] },
      book: "The Sealed Nectar: in the cave of Hira."
    },
    {
      id: "read", icon: "light",
      title: { en: "\"Read!\"", ur: "\"پڑھو!\"" },
      scenes: [
        { en: "One night in Ramadan, when Muhammad, peace be upon him, was forty years old, he was in the cave of Hira. Suddenly the angel Jibril came to him. Touch the cave, and see the light.",
          ur: "رمضان کی ایک رات، جب محمد صلی اللہ علیہ وسلم چالیس سال کے تھے، وہ غارِ حرا میں تھے۔ اچانک فرشتہ جبریل ان کے پاس آئے۔ غار کو چھوؤ اور روشنی دیکھو۔" },
        { en: "The angel said: Read! He answered: I cannot read. The angel held him tight, then let him go, and said again: Read! This happened three times. Can you find the brightest star?",
          ur: "فرشتے نے کہا: پڑھو! انہوں نے جواب دیا: میں پڑھنا نہیں جانتا۔ فرشتے نے انہیں زور سے بھینچا، پھر چھوڑ دیا، اور دوبارہ کہا: پڑھو! ایسا تین بار ہوا۔ کیا تم سب سے روشن ستارہ ڈھونڈ سکتے ہو؟" },
        { en: "Then the angel recited the very first words of the Qur'an: Read, in the name of your Lord who created. The first word is hidden in the night. Can you find it?",
          ur: "پھر فرشتے نے قرآن کے سب سے پہلے الفاظ پڑھے: پڑھو، اپنے رب کے نام سے جس نے پیدا کیا۔ پہلا لفظ رات میں چھپا ہے۔ کیا تم اسے ڈھونڈ سکتے ہو؟" },
        { en: "His heart was beating fast. He hurried down the mountain, home to Khadijah. Can you find his home, where she was waiting?",
          ur: "ان کا دل تیز تیز دھڑک رہا تھا۔ وہ جلدی سے پہاڑ سے اتر کر گھر خدیجہ کے پاس آئے۔ کیا تم ان کا گھر ڈھونڈ سکتے ہو، جہاں وہ انتظار کر رہی تھیں؟" },
        { en: "He said: Cover me! Cover me! She wrapped him in a blanket until he felt calm, and he told her everything. Khadijah said: Allah will never let you down. You are good to your family. You tell the truth. You help the poor and the weak, and you welcome your guests. Now he was the Messenger of Allah. Can you find the sun rising on a new day?",
          ur: "انہوں نے کہا: مجھے چادر اوڑھا دو! مجھے چادر اوڑھا دو! خدیجہ نے چادر اوڑھا دی، یہاں تک کہ انہیں سکون آ گیا، اور انہوں نے سارا واقعہ سنایا۔ خدیجہ نے کہا: اللہ آپ کو کبھی اکیلا نہیں چھوڑے گا۔ آپ رشتہ داروں سے اچھا سلوک کرتے ہیں۔ سچ بولتے ہیں۔ غریبوں اور کمزوروں کی مدد کرتے ہیں، اور مہمانوں کی خاطر کرتے ہیں۔ اب وہ اللہ کے رسول تھے۔ کیا تم نئے دن کا نکلتا سورج ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why was Khadijah sure that Allah would look after him?", ur: "خدیجہ کو کیوں یقین تھا کہ اللہ ان کا خیال رکھے گا؟" },
      lesson: { en: "He was good to everyone, so Khadijah knew Allah would never let him down. Allah looks after those who do good.", ur: "وہ سب کے ساتھ اچھے تھے، اس لیے خدیجہ جانتی تھیں کہ اللہ انہیں کبھی اکیلا نہیں چھوڑے گا۔ اللہ نیکی کرنے والوں کا خیال رکھتا ہے۔" },
      habit: { en: "This week, we open a book every day, starting with Bismillah.", ur: "اس ہفتے ہم ہر روز بسم اللہ پڑھ کر کتاب کھولیں گے۔" },
      dua: { en: "My Lord, give me more knowledge.", ur: "اے میرے رب، میرے علم میں اضافہ فرما۔" },
      ask: { en: ["What was the first word the angel said?", "Who helps you feel calm when you are worried?"],
             ur: ["فرشتے نے سب سے پہلا لفظ کیا کہا؟", "جب تم پریشان ہوتے ہو تو تمہیں کون تسلی دیتا ہے؟"] },
      book: "The Sealed Nectar: Gabriel brings down the Revelation. The du'a is from the Qur'an, 20:114."
    },
    {
      id: "first", icon: "stars",
      title: { en: "The first to believe", ur: "سب سے پہلے ایمان لانے والے" },
      scenes: [
        { en: "The Messenger of Allah, peace be upon him, began to tell people: there is only one God, Allah. Worship Him alone, and be good to each other. He began with the people closest to him. Can you find his house, where it began?",
          ur: "اللہ کے رسول صلی اللہ علیہ وسلم نے لوگوں کو بتانا شروع کیا: معبود صرف ایک ہے، اللہ۔ صرف اسی کی عبادت کرو، اور ایک دوسرے سے اچھا سلوک کرو۔ انہوں نے اپنے سب سے قریبی لوگوں سے شروع کیا۔ کیا تم ان کا گھر ڈھونڈ سکتے ہو، جہاں سے یہ شروع ہوا؟" },
        { en: "The very first to believe was his wife, Khadijah, may Allah be pleased with her. Touch the lamp, and light it for Khadijah.",
          ur: "سب سے پہلے ایمان لانے والی ان کی بیوی خدیجہ رضی اللہ عنہا تھیں۔ چراغ کو چھوؤ اور خدیجہ کے لیے اسے روشن کرو۔" },
        { en: "Then young Ali, his cousin who lived in his home, and Zayd, who was like a son to him. May Allah be pleased with them. Touch a lamp, and light it for Ali and Zayd.",
          ur: "پھر ننھے علی، ان کے چچا زاد بھائی جو ان کے گھر میں رہتے تھے، اور زید، جو ان کے لیے بیٹے جیسے تھے۔ اللہ ان سے راضی ہو۔ ایک چراغ کو چھوؤ اور علی اور زید کے لیے اسے روشن کرو۔" },
        { en: "And his dear friend Abu Bakr, may Allah be pleased with him. He believed straight away. Then he told his own friends, and they believed too. Can you find Abu Bakr's house, and light it?",
          ur: "اور ان کے پیارے دوست ابوبکر رضی اللہ عنہ۔ وہ فوراً ایمان لے آئے۔ پھر انہوں نے اپنے دوستوں کو بتایا، اور وہ بھی ایمان لے آئے۔ کیا تم ابوبکر کا گھر ڈھونڈ کر اسے روشن کر سکتے ہو؟" },
        { en: "One by one, like lamps being lit in the night, more people came to Islam. And the light kept spreading, all the way to us. Can you find the stars shining over them all?",
          ur: "ایک ایک کر کے، جیسے رات میں چراغ جلتے جائیں، اور لوگ اسلام میں آتے گئے۔ اور یہ روشنی پھیلتی رہی، یہاں تک کہ ہم تک پہنچ گئی۔ کیا تم ان سب کے اوپر چمکتے ستارے ڈھونڈ سکتے ہو؟" }
      ],
      why: { en: "Why did his family and friends believe him straight away?", ur: "ان کے گھر والوں اور دوستوں نے فوراً ان کی بات کیوں مان لی؟" },
      lesson: { en: "They knew he always told the truth, so they believed him. Good news is for sharing with the people we love.", ur: "وہ جانتے تھے کہ وہ ہمیشہ سچ بولتے ہیں، اس لیے انہوں نے یقین کر لیا۔ اچھی بات اپنے پیاروں کو بتانے کے لیے ہوتی ہے۔" },
      habit: { en: "This week, we share something good we learned with someone we love.", ur: "اس ہفتے ہم جو اچھی بات سیکھیں گے وہ اپنے کسی پیارے کو بتائیں گے۔" },
      dua: { en: "O Allah, keep our hearts firm in faith.", ur: "اے اللہ، ہمارے دلوں کو ایمان پر قائم رکھ۔" },
      ask: { en: ["Who was the very first to believe?", "What good thing would you like to tell someone today?"],
             ur: ["سب سے پہلے کون ایمان لایا؟", "آج تم کسی کو کون سی اچھی بات بتانا چاہو گے؟"] },
      book: "The Sealed Nectar: the early converts, in the secret call."
    }
  ];
})();
