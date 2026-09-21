/** Hand-authored most_likely bank. Seed inserts English `body` only. `bodyPl` is for a later PL catalog. */

/** Editorial theme for mix. Not `Prompt.category` (legacy pack picker: party/family/colleagues/spicy). */
export const PROMPT_THEMES = [
  "discord",
  "gaming",
  "friendship",
  "dating",
  "crushes",
  "relationships",
  "jealousy",
  "secrets",
  "embarrassing",
  "chaotic",
  "dark_humor",
  "money",
  "nightlife",
  "social_media",
  "work",
  "school",
  "personality",
  "group_lore",
  "hypothetical",
  "wholesome",
  "absurd",
  "controversial",
  "confession",
  "late_night",
] as const;

export type PromptTheme = (typeof PROMPT_THEMES)[number];

const THEME_SET = new Set<string>(PROMPT_THEMES);
const MIN_PER_THEME = 3;
const MAX_THEME_SHARE = 0.22;

export type MostLikelyPrompt = {
  category: PromptTheme;
  body: string;
  bodyPl: string;
  /** Previous English bodies this row replaces so seed can UPDATE in place. */
  replaces?: readonly string[];
};

export function countPromptThemes(
  entries: readonly MostLikelyPrompt[],
): Map<PromptTheme, number> {
  const counts = new Map<PromptTheme, number>();
  for (const theme of PROMPT_THEMES) counts.set(theme, 0);
  for (const entry of entries) {
    counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  }
  return counts;
}

export const GENERIC_PROMPT_FAIL = [
  /become successful/i,
  /travel the world/i,
  /become famous first/i,
  /\bthe nicest\b/i,
  /\bthe funniest\b/i,
  /most likely to be late\?/i,
] as const;

export function normalizePromptBody(body: string): string {
  return body.trim().replace(/\s+/g, " ").toLowerCase();
}

export function listPromptBankIssues(entries: readonly MostLikelyPrompt[]): string[] {
  const issues: string[] = [];
  const bodies = new Map<string, number>();
  const polish = new Map<string, number>();
  const replaced = new Map<string, number>();

  if (entries.length < 80) {
    issues.push(`bank too small (${entries.length}); need at least 80 for an 8–12 round night with replay`);
  }

  entries.forEach((entry, index) => {
    const n = index + 1;
    if (!THEME_SET.has(entry.category)) {
      issues.push(`#${n} unknown category: ${String(entry.category)}`);
    }
    if (!entry.body.startsWith("Who is most likely to ") || !entry.body.endsWith("?")) {
      issues.push(`#${n} English must be “Who is most likely to …?”`);
    }
    if (!entry.bodyPl.startsWith("Kto najpewniej ") || !entry.bodyPl.endsWith("?")) {
      issues.push(`#${n} Polish must be “Kto najpewniej …?”`);
    }
    if (/[\u{1F300}-\u{1FAFF}]/u.test(entry.body) || /[\u{1F300}-\u{1FAFF}]/u.test(entry.bodyPl)) {
      issues.push(`#${n} emoji in prompt body`);
    }
    for (const pattern of GENERIC_PROMPT_FAIL) {
      if (pattern.test(entry.body)) {
        issues.push(`#${n} fails generic filter: ${pattern}`);
      }
    }
    if (entry.body.length > 160 || entry.bodyPl.length > 180) {
      issues.push(`#${n} too long for overlay`);
    }
    const enKey = normalizePromptBody(entry.body);
    const plKey = normalizePromptBody(entry.bodyPl);
    bodies.set(enKey, (bodies.get(enKey) ?? 0) + 1);
    polish.set(plKey, (polish.get(plKey) ?? 0) + 1);
    for (const old of entry.replaces ?? []) {
      if (old === entry.body) {
        issues.push(`#${n} replaces its own body`);
      }
      const oldKey = normalizePromptBody(old);
      replaced.set(oldKey, (replaced.get(oldKey) ?? 0) + 1);
    }
  });

  for (const [key, count] of bodies) {
    if (count > 1) issues.push(`duplicate English body: ${key}`);
  }
  for (const [key, count] of polish) {
    if (count > 1) issues.push(`duplicate Polish body: ${key}`);
  }
  for (const [key, count] of replaced) {
    if (count > 1) issues.push(`replaces collision: ${key}`);
  }

  const themeCounts = countPromptThemes(entries);
  for (const theme of PROMPT_THEMES) {
    const count = themeCounts.get(theme) ?? 0;
    if (count < MIN_PER_THEME) {
      issues.push(`theme ${theme} too thin (${count}; need ${MIN_PER_THEME})`);
    }
  }
  const total = entries.length;
  if (total > 0) {
    for (const [theme, count] of themeCounts) {
      if (count / total > MAX_THEME_SHARE) {
        issues.push(
          `theme ${theme} dominates (${count}/${total}; max ${Math.round(MAX_THEME_SHARE * 100)}%)`,
        );
      }
    }
  }

  return issues;
}

export const MOST_LIKELY_BANK: MostLikelyPrompt[] = [
  {
    category: "late_night",
    body: "Who is most likely to ping the group at 2am with “you up?” and mean the whole night?",
    bodyPl: "Kto najpewniej pingnie ekipę o drugiej w nocy „śpisz?” i ma na myśli całą noc?",
    replaces: ["Who is most likely to start a group chat at 2am?"],
  },
  {
    category: "friendship",
    body: "Who is most likely to eat the snacks they brought “for everyone” before anyone else arrives?",
    bodyPl: "Kto najpewniej zje przekąski „dla wszystkich”, zanim ktokolwiek dojdzie?",
    replaces: ["Who is most likely to bring snacks for everyone else?"],
  },
  {
    category: "work",
    body: "Who is most likely to reply-all with “thanks!” and then DM “please ignore that”?",
    bodyPl: "Kto najpewniej odpisze wszystkim „thanks!”, a potem na priv „olać to”?",
    replaces: ["Who is most likely to reply-all by accident?"],
  },
  {
    category: "relationships",
    body: "Who is most likely to say “we’re just friends” while the rest of the call already knows?",
    bodyPl: "Kto najpewniej powie „my tylko przyjaźnimy”, choć reszta calla już wie?",
    replaces: ["Who is most likely to have a crush they still have not admitted?"],
  },
  {
    category: "discord",
    body: "Who is most likely to forget they are sharing and keep scrolling like the room is empty?",
    bodyPl: "Kto najpewniej zapomni, że udostępnia ekran, i będzie skrolował jakby nikogo nie było?",
    replaces: ["Who is most likely to share their screen with the wrong tab open?"],
  },
  {
    category: "friendship",
    body: "Who is most likely to vanish for three days and come back with a meme instead of an apology?",
    bodyPl: "Kto najpewniej zniknie na trzy dni i wróci memem zamiast przeprosin?",
    replaces: ["Who is most likely to ghost the group chat for three days then drop a meme?"],
  },
  {
    category: "friendship",
    body: "Who is most likely to say “I’m outside” while still looking for their shoes?",
    bodyPl: "Kto najpewniej napisze „jestem na dole”, a nadal szuka butów?",
    replaces: ["Who is most likely to plan a hangout and then be late?"],
  },
  {
    category: "discord",
    body: "Who is most likely to go silent on VC, then drop “sorry lag” from bed?",
    bodyPl: "Kto najpewniej ucichnie na VC, a potem rzuci „sorry lag” z łóżka?",
    replaces: ["Who is most likely to fall asleep on voice chat?"],
  },
  {
    category: "friendship",
    body: "Who is most likely to order for everyone, then ask what people wanted after it arrives?",
    bodyPl: "Kto najpewniej zamówi za wszystkich, a dopiero przy odbiorze spyta, kto co chciał?",
    replaces: ["Who is most likely to order food for the whole squad without asking?"],
  },
  {
    category: "personality",
    body: "Who is most likely to pick a food hill to die on, then admit they do not even eat it?",
    bodyPl: "Kto najpewniej umrze za opinię o jedzeniu, którego sam nawet nie je?",
    replaces: ["Who is most likely to start an argument about pineapple on pizza?"],
  },
  {
    category: "discord",
    body: "Who is most likely to know everyone’s Discord status but not their own schedule?",
    bodyPl: "Kto najpewniej zna status na Discordzie u wszystkich, ale nie swój własny plan dnia?",
  },
  {
    category: "friendship",
    body: "Who is most likely to take forty photos of the group and send none of them?",
    bodyPl: "Kto najpewniej zrobi czterdzieści zdjęć ekipie i nie wyśle ani jednego?",
    replaces: ["Who is most likely to take a photo of the group and never send it?"],
  },
  {
    category: "gaming",
    body: "Who is most likely to say “last one” with a straight face after already saying it twice?",
    bodyPl: "Kto najpewniej powie „ostatnia” z kamienną miną, choć już to dwa razy gadał?",
    replaces: ["Who is most likely to say “one more game” and mean five?"],
  },
  {
    category: "confession",
    body: "Who is most likely to overshare, then immediately say “anyway, next question”?",
    bodyPl: "Kto najpewniej za dużo wygada, a potem od razu rzuci „no dobra, następne pytanie”?",
    replaces: ["Who is most likely to overshare a spicy story mid-round?"],
  },
  {
    category: "gaming",
    body: "Who is most likely to rage-quit… then rejoin thirty seconds later?",
    bodyPl: "Kto najpewniej wyjdzie z hukiem… i wróci po trzydziestu sekundach?",
  },
  {
    category: "nightlife",
    body: "Who is most likely to film the night and then refuse to send the video “because it’s embarrassing”?",
    bodyPl: "Kto najpewniej nagra wieczór, a potem nie wyśle filmu, „bo wstyd”?",
    replaces: ["Who is most likely to become the unofficial party photographer?"],
  },
  {
    category: "social_media",
    body: "Who is most likely to send a voice note so long that people skip to the end?",
    bodyPl: "Kto najpewniej wyśle notatkę głosową tak długą, że wszyscy przewijają na koniec?",
    replaces: ["Who is most likely to send a voice note longer than five minutes?"],
  },
  {
    category: "group_lore",
    body: "Who is most likely to remember a group story everyone else agreed to forget?",
    bodyPl: "Kto najpewniej pamięta historię, o której reszta umówiła się zapomnieć?",
    replaces: ["Who is most likely to know the lore of every mutual friend?"],
  },
  {
    category: "group_lore",
    body: "Who is most likely to turn “quick story” into a twenty-minute lore dump?",
    bodyPl: "Kto najpewniej zamieni „krótką historię” w dwudziestominutowy lore dump?",
    replaces: ["Who is most likely to turn a five-minute story into a TED Talk?"],
  },
  {
    category: "crushes",
    body: "Who is most likely to flirt by “accidentally” liking an old photo?",
    bodyPl: "Kto najpewniej flirtuje przez „przypadkowy” like pod starym zdjęciem?",
  },
  {
    category: "social_media",
    body: "Who is most likely to go viral for a clip they begged the group to delete?",
    bodyPl: "Kto najpewniej wyląduje w internecie przez klip, o którego usunięcie błagał ekipę?",
    replaces: ["Who is most likely to become famous first?"],
  },
  {
    category: "hypothetical",
    body: "Who is most likely to have a strangely detailed plan for a disaster that will never happen?",
    bodyPl: "Kto najpewniej ma podejrzanie szczegółowy plan na katastrofę, która nigdy nie nadejdzie?",
    replaces: ["Who is most likely to survive a zombie apocalypse… by hiding?"],
  },
  {
    category: "friendship",
    body: "Who is most likely to plan a surprise, then forget the actual date?",
    bodyPl: "Kto najpewniej zaplanuje niespodziankę, a potem zapomni o dacie?",
    replaces: ["Who is most likely to forget their own birthday plans?"],
  },
  {
    category: "absurd",
    body: "Who is most likely to name a dying plant and talk about it like a roommate?",
    bodyPl: "Kto najpewniej nazwie umierającą roślinę i mówi o niej jak o współlokatorze?",
    replaces: ["Who is most likely to buy a plant and name it?"],
  },
  {
    category: "personality",
    body: "Who is most likely to announce a big project in chat and never mention it again?",
    bodyPl: "Kto najpewniej ogłosi wielki projekt na czacie i nigdy więcej o nim nie wspomni?",
    replaces: ["Who is most likely to start a podcast and record one episode?"],
  },
  {
    category: "personality",
    body: "Who is most likely to say “I know a shortcut” and add twenty minutes?",
    bodyPl: "Kto najpewniej powie „znam skrót” i doda dwadzieścia minut?",
    replaces: ["Who is most likely to get lost in a city they claim to know?"],
  },
  {
    category: "personality",
    body: "Who is most likely to cry at a kids’ movie, then call it “just well directed”?",
    bodyPl: "Kto najpewniej popłacze przy filmie dla dzieci, a potem powie, że „po prostu dobrze zrobiony”?",
    replaces: ["Who is most likely to cry at a cartoon?"],
  },
  {
    category: "discord",
    body: "Who is most likely to join the wrong voice channel and stay because leaving would be weirder?",
    bodyPl: "Kto najpewniej wejdzie na zły kanał głosowy i zostanie, bo wyjście byłoby dziwniejsze?",
    replaces: ["Who is most likely to join the wrong voice channel and stay?"],
  },
  {
    category: "money",
    body: "Who is most likely to spend rent money on a limited sneaker drop?",
    bodyPl: "Kto najpewniej wyda kasę na czynsz na limitowane buty?",
  },
  {
    category: "chaotic",
    body: "Who is most likely to defend a terrible idea with “yeah but it was funny”?",
    bodyPl: "Kto najpewniej obroni kiepski pomysł słowami „no ale było śmiesznie”?",
    replaces: ["Who is most likely to adopt a chaotic pet energy?"],
  },
  {
    category: "dating",
    body: "Who is most likely to give dating advice they would never take themselves?",
    bodyPl: "Kto najpewniej rozdaje rady randkowe, których sam by nigdy nie posłuchał?",
    replaces: ["Who is most likely to become the group’s therapist for a night?"],
  },
  {
    category: "group_lore",
    body: "Who is most likely to invent a nickname the victim still cannot kill?",
    bodyPl: "Kto najpewniej wymyśli ksywę, której ofiara do dziś nie zdołała zabić?",
    replaces: ["Who is most likely to invent a nickname that sticks forever?"],
  },
  {
    category: "controversial",
    body: "Who is most likely to win an argument they were wrong about?",
    bodyPl: "Kto najpewniej wygra kłótnię, w której nie miał racji?",
  },
  {
    category: "friendship",
    body: "Who is most likely to go silent for a week, then reply to Tuesday’s message like nothing happened?",
    bodyPl: "Kto najpewniej zamilknie na tydzień, a potem odpisze na wtorkową wiadomość jakby nic się nie stało?",
    replaces: ["Who is most likely to disappear for a week with no explanation?"],
  },
  {
    category: "money",
    body: "Who is most likely to pitch a “can’t-fail” money idea at 1am?",
    bodyPl: "Kto najpewniej o pierwszej w nocy sprzeda pomysł na kasę, „który nie może nie wypalić”?",
    replaces: ["Who is most likely to become rich in the most chaotic way?"],
  },
  {
    category: "nightlife",
    body: "Who is most likely to host and then ask where the snacks are?",
    bodyPl: "Kto najpewniej robi imprezę, a potem pyta, gdzie są przekąski?",
  },
  {
    category: "secrets",
    body: "Who is most likely to screenshot the chat “just in case”?",
    bodyPl: "Kto najpewniej robi screenshota czatu „na wszelki wypadek”?",
    replaces: ["Who is most likely to screenshot the chat for later drama?"],
  },
  {
    category: "chaotic",
    body: "Who is most likely to click a sketchy link, then ask in the same chat if it was real?",
    bodyPl: "Kto najpewniej kliknie podejrzany link, a potem w tym samym czacie spyta, czy to było prawdziwe?",
    replaces: ["Who is most likely to fall for a phishing email first?"],
  },
  {
    category: "chaotic",
    body: "Who is most likely to say “I can explain” and then make it worse?",
    bodyPl: "Kto najpewniej powie „mogę wyjaśnić” i tylko pogorszy sprawę?",
    replaces: ["Who is most likely to become the funniest person in the room tonight?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to start dancing, notice nobody joined, and commit harder?",
    bodyPl: "Kto najpewniej zacznie tańczyć, zauważy że nikt nie dołączył, i wejdzie w to jeszcze mocniej?",
    replaces: ["Who is most likely to start dancing with zero music?"],
  },
  {
    category: "secrets",
    body: "Who is most likely to keep a secret for approximately twelve minutes?",
    bodyPl: "Kto najpewniej utrzyma sekret przez mniej więcej dwanaście minut?",
  },
  {
    category: "work",
    body: "Who is most likely to send “on my way” from the bed they just called in sick from?",
    bodyPl: "Kto najpewniej wyśle „już jadę” z łóżka, z którego przed chwilą wziął L4?",
    replaces: ["Who is most likely to get promoted… and still complain about Mondays?"],
  },
  {
    category: "chaotic",
    body: "Who is most likely to start the drama and then play peacemaker the same night?",
    bodyPl: "Kto najpewniej rozkręci dramat, a potem tej samej nocy gra rozjemcę?",
    replaces: ["Who is most likely to bring the group back together after a fight?"],
  },
  {
    category: "personality",
    body: "Who is most likely to tell a story where they were the problem, and not notice?",
    bodyPl: "Kto najpewniej opowie historię, w której to on był problemem, i tego nie zauważy?",
    replaces: ["Who is most likely to become a main character in someone else’s story?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to wave at someone who was waving at the person behind them?",
    bodyPl: "Kto najpewniej pomacha do kogoś, kto machał do osoby za nim?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to say “you too” when the waiter says enjoy your meal?",
    bodyPl: "Kto najpewniej odpowie „nawzajem”, gdy kelner życzy smacznego?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to walk into a glass door and act like it was a bit?",
    bodyPl: "Kto najpewniej wejdzie w szklane drzwi i udaje, że to był żart?",
  },
  {
    category: "social_media",
    body: "Who is most likely to like their own selfie by accident… then unlike it too late?",
    bodyPl: "Kto najpewniej polajkuje własne zdjęcie przez przypadek… i odlajkuje za późno?",
  },
  {
    category: "discord",
    body: "Who is most likely to leave their mic unmuted during a private rant?",
    bodyPl: "Kto najpewniej zostawi mikrofon otwarty podczas „prywatnego” wylewania żali?",
  },
  {
    category: "discord",
    body: "Who is most likely to get caught singing when they thought they were muted?",
    bodyPl: "Kto najpewniej da się złapać na śpiewaniu, bo myślał, że ma mute?",
  },
  {
    category: "discord",
    body: "Who is most likely to have an embarrassing notification pop up on the shared screen?",
    bodyPl: "Kto najpewniej złapie wstydliwe powiadomienie na udostępnionym ekranie?",
  },
  {
    category: "discord",
    body: "Who is most likely to get exposed by their browser tabs on screen share?",
    bodyPl: "Kto najpewniej wpadnie przez karty w przeglądarce przy udostępnianiu ekranu?",
  },
  {
    category: "crushes",
    body: "Who is most likely to rehearse a “casual” text for twenty minutes?",
    bodyPl: "Kto najpewniej przez dwadzieścia minut układa „luźną” wiadomość?",
  },
  {
    category: "dating",
    body: "Who is most likely to send a risky message to the wrong person?",
    bodyPl: "Kto najpewniej wyśle ryzykowną wiadomość nie do tej osoby?",
  },
  {
    category: "crushes",
    body: "Who is most likely to still check if a crush viewed their story?",
    bodyPl: "Kto najpewniej nadal sprawdza, czy crush obejrzał relację?",
  },
  {
    category: "crushes",
    body: "Who is most likely to accidentally confess a crush while “just joking”?",
    bodyPl: "Kto najpewniej wygada się z crusha, „tylko żartując”?",
  },
  {
    category: "crushes",
    body: "Who is most likely to have a draft message they will never send?",
    bodyPl: "Kto najpewniej ma w szkicach wiadomość, której nigdy nie wyśle?",
  },
  {
    category: "personality",
    body: "Who is most likely to text “haha” and then overthink it for an hour?",
    bodyPl: "Kto najpewniej wyśle „haha”, a potem godzinę to rozkminia?",
  },
  {
    category: "crushes",
    body: "Who is most likely to have a secret playlist named after someone in this call?",
    bodyPl: "Kto najpewniej ma tajną playlistę nazwaną od kogoś z tego calla?",
  },
  {
    category: "dating",
    body: "Who is most likely to get friend-zoned and call it a plot twist?",
    bodyPl: "Kto najpewniej wyląduje we friendzone i nazwie to zwrotem akcji?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to pretend they didn’t see someone they know in public?",
    bodyPl: "Kto najpewniej udaje, że nie zauważył znajomego na ulicy?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to laugh at a joke they definitely did not understand?",
    bodyPl: "Kto najpewniej śmieje się z żartu, którego kompletnie nie złapał?",
  },
  {
    category: "personality",
    body: "Who is most likely to mispronounce a common word with full confidence?",
    bodyPl: "Kto najpewniej przekręci zwykłe słowo z pełną pewnością siebie?",
  },
  {
    category: "nightlife",
    body: "Who is most likely to say “I’m heading out” and then sit back down for forty minutes?",
    bodyPl: "Kto najpewniej powie „no to spadam” i usiądzie z powrotem na czterdzieści minut?",
    replaces: ["Who is most likely to wave goodbye and then walk the same direction as everyone?"],
  },
  {
    category: "late_night",
    body: "Who is most likely to still replay a three-second conversation from years ago at 1am?",
    bodyPl: "Kto najpewniej o pierwszej w nocy odtwarza w głowie trzylasekundową rozmowę sprzed lat?",
    replaces: ["Who is most likely to still cringe at an awkward moment from years ago?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to have a cringe phase fully documented in photos?",
    bodyPl: "Kto najpewniej ma cringe’ową erę w pełni udokumentowaną na zdjęciach?",
  },
  {
    category: "group_lore",
    body: "Who is most likely to get stuck in the group lore as “that one time”?",
    bodyPl: "Kto najpewniej zostanie w lore grupy jako „pamiętacie tamten raz”?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to knock over a drink, then blame the table?",
    bodyPl: "Kto najpewniej przewróci napój, a potem zwali winę na stół?",
    replaces: ["Who is most likely to spill a drink and blame gravity?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to trip over flat ground and look around to see who saw?",
    bodyPl: "Kto najpewniej potknie się na równym i rozejrzy, kto to widział?",
    replaces: ["Who is most likely to trip over absolutely nothing in public?"],
  },
  {
    category: "discord",
    body: "Who is most likely to get nervous and suddenly talk like the mic is a stage?",
    bodyPl: "Kto najpewniej od nerwów zaczyna gadać, jakby mikrofon był sceną?",
    replaces: ["Who is most likely to get nervous and start talking way too loud?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to get nervous laughter at the worst possible moment?",
    bodyPl: "Kto najpewniej dostaje nerwowego śmiechu w najgorszym możliwym momencie?",
  },
  {
    category: "personality",
    body: "Who is most likely to say “I’m fine” while clearly not fine?",
    bodyPl: "Kto najpewniej powie „wszystko git”, gdy ewidentnie nie jest git?",
  },
  {
    category: "confession",
    body: "Who is most likely to leave a voice note and regret every second of it?",
    bodyPl: "Kto najpewniej nagra notatkę głosową i żałuje każdej sekundy?",
  },
  {
    category: "secrets",
    body: "Who is most likely to have unread DMs they’re too scared to open?",
    bodyPl: "Kto najpewniej ma nieprzeczytane DM-y, których boi się otworzyć?",
  },
  {
    category: "personality",
    body: "Who is most likely to Google themselves more than they admit?",
    bodyPl: "Kto najpewniej googluje siebie częściej, niż się przyznaje?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to blush when someone says their full name?",
    bodyPl: "Kto najpewniej się zaczerwieni, gdy ktoś powie jego pełne imię i nazwisko?",
  },
  {
    category: "crushes",
    body: "Who is most likely to type “hiii” with a number of i’s that depends on who it is?",
    bodyPl: "Kto najpewniej pisze „hej” z liczbą j zależną od tego, do kogo?",
    replaces: ["Who is most likely to get roasted for their typing quirks?"],
  },
  {
    category: "embarrassing",
    body: "Who is most likely to pretend they knew a song they’ve never heard?",
    bodyPl: "Kto najpewniej udaje, że zna piosenkę, której nigdy nie słyszał?",
  },
  {
    category: "dating",
    body: "Who is most likely to have a first-date story that starts with “technically nothing happened”?",
    bodyPl: "Kto najpewniej ma historię z pierwszej randki zaczynającą się od „technicznie nic się nie stało”?",
    replaces: ["Who is most likely to have the most awkward first-date story ready to go?"],
  },
  {
    category: "social_media",
    body: "Who is most likely to get called out for their “seen” habit?",
    bodyPl: "Kto najpewniej usłyszy „odczytałeś i cisza”, bo tak ma z seenem?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to still answer to an embarrassing childhood nickname?",
    bodyPl: "Kto najpewniej nadal odzywa się na wstydliwą ksywkę z dzieciństwa?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to cry during a commercial and swear it was allergies?",
    bodyPl: "Kto najpewniej popłacze przy reklamie i przysięgnie, że to alergia?",
  },
  {
    category: "gaming",
    body: "Who is most likely to need a “water break” after a ranked loss?",
    bodyPl: "Kto najpewniej potrzebuje „przerwy na wodę” po przegranej w rankedzie?",
    replaces: ["Who is most likely to have cried over a game loss this year?"],
  },
  {
    category: "discord",
    body: "Who is most likely to get caught mid-yawn on camera?",
    bodyPl: "Kto najpewniej da się złapać na ziewaniu na kamerze?",
  },
  {
    category: "social_media",
    body: "Who is most likely to send a paragraph then panic-delete mid-send?",
    bodyPl: "Kto najpewniej wyśle powieść, a potem w panice kasuje w trakcie?",
  },
  {
    category: "friendship",
    body: "Who is most likely to get roasted, laugh first, and then go quiet for the rest of the round?",
    bodyPl: "Kto najpewniej najpierw się pośmieje z roastu, a potem ucichnie do końca rundy?",
    replaces: ["Who is most likely to get roasted and laugh the hardest anyway?"],
  },
  {
    category: "crushes",
    body: "Who is most likely to have a crush on a fictional character they refuse to name?",
    bodyPl: "Kto najpewniej ma crusha na postać fikcyjną, której nie chce nazwać?",
  },
  {
    category: "dating",
    body: "Who is most likely to practice their dating-app bio out loud?",
    bodyPl: "Kto najpewniej ćwiczy na głos bio z aplikacji randkowej?",
  },
  {
    category: "secrets",
    body: "Who is most likely to get clocked for their “I’m just checking something” lie?",
    bodyPl: "Kto najpewniej wpadnie na kłamstwie „tylko coś sprawdzam”?",
  },
  {
    category: "group_lore",
    body: "Who is most likely to have an autocorrect fail still living in the group chat?",
    bodyPl: "Kto najpewniej ma w grupie wiecznie żywy fail z autokorekty?",
  },
  {
    category: "personality",
    body: "Who is most likely to rehearse an argument in the shower?",
    bodyPl: "Kto najpewniej odgrywa kłótnię pod prysznicem?",
  },
  {
    category: "personality",
    body: "Who is most likely to pause the movie to explain a joke nobody asked about?",
    bodyPl: "Kto najpewniej zatrzyma film, żeby wytłumaczyć żart, o który nikt nie prosił?",
    replaces: ["Who is most likely to get stuck explaining a meme until it dies?"],
  },
  {
    category: "absurd",
    body: "Who is most likely to clap when the plane lands… alone?",
    bodyPl: "Kto najpewniej klaszcze, gdy samolot ląduje… całkiem sam?",
  },
  {
    category: "personality",
    body: "Who is most likely to say “same” to a story that was not about them?",
    bodyPl: "Kto najpewniej rzuci „same” do historii, która w ogóle nie była o nim?",
  },
  {
    category: "discord",
    body: "Who is most likely to get caught peeping at their own reflection mid-call?",
    bodyPl: "Kto najpewniej da się złapać na gapieniu w swoje odbicie w trakcie calla?",
  },
  {
    category: "embarrassing",
    body: "Who is most likely to add “wait that came out wrong” to a sentence that was already doomed?",
    bodyPl: "Kto najpewniej doda „zaraz, to źle zabrzmiało” do zdania, które i tak już było skończone?",
    replaces: ["Who is most likely to overexplain a simple joke until nobody is laughing?"],
  },
  {
    category: "discord",
    body: "Who is most likely to have the loudest “I wasn’t listening, can you repeat that?” energy?",
    bodyPl: "Kto najpewniej ma największą energię „nie słuchałem, możesz powtórzyć”?",
  },
  {
    category: "personality",
    body: "Who is most likely to get flustered when someone compliments them for real?",
    bodyPl: "Kto najpewniej się zepnie, gdy ktoś naprawdę go komplementuje?",
  },
  {
    category: "personality",
    body: "Who is most likely to still think about a text they sent three years ago?",
    bodyPl: "Kto najpewniej nadal myśli o wiadomości wysłanej trzy lata temu?",
  },
  {
    category: "discord",
    body: "Who is most likely to accidentally hit “react” with the worst possible emoji?",
    bodyPl: "Kto najpewniej przez przypadek da reakcję najgorszym możliwym emoji?",
  },
  {
    category: "discord",
    body: "Who is most likely to get called out for lurking in a chat without typing?",
    bodyPl: "Kto najpewniej usłyszy „ty tu jesteś?”, bo tylko lurkuje i nic nie pisze?",
  },
  {
    category: "personality",
    body: "Who is most likely to have a “this is fine” face while everything is on fire?",
    bodyPl: "Kto najpewniej ma minę „wszystko git”, gdy wszystko już płonie?",
  },
  {
    category: "confession",
    body: "Who is most likely to start a story with “don’t judge me” and then earn the judgment?",
    bodyPl: "Kto najpewniej zaczyna historię od „nie oceniajcie”, a potem na tę ocenę zasłuży?",
  },
  {
    category: "social_media",
    body: "Who is most likely to leave someone on read, then react with an emoji two hours later like that counts?",
    bodyPl: "Kto najpewniej zostawi kogoś na odczytane, a po dwóch godzinach da emoji jakby to się liczyło?",
  },
  {
    category: "relationships",
    body: "Who is most likely to swear they are not mad, in the voice that means they are?",
    bodyPl: "Kto najpewniej przysięga, że nie jest zły, tym głosem, który znaczy że jest?",
  },
  {
    category: "crushes",
    body: "Who is most likely to share a “random” song that is obviously about someone in this call?",
    bodyPl: "Kto najpewniej wrzuci „losową” piosenkę, która ewidentnie jest o kimś z tego calla?",
  },
  {
    category: "money",
    body: "Who is most likely to pay, then mention it for the next six months?",
    bodyPl: "Kto najpewniej zapłaci, a potem będzie o tym przypominał przez pół roku?",
  },
  {
    category: "social_media",
    body: "Who is most likely to change their profile picture and pretend they do not want comments?",
    bodyPl: "Kto najpewniej zmieni zdjęcie profilowe i udaje, że nie chce komentarzy?",
  },
  {
    category: "friendship",
    body: "Who is most likely to say “we should hang out sometime” and never send a day?",
    bodyPl: "Kto najpewniej powie „trzeba się kiedyś zebrać” i nigdy nie poda dnia?",
  },
  {
    category: "secrets",
    body: "Who is most likely to have someone in their phone under a nickname the group would clock instantly?",
    bodyPl: "Kto najpewniej ma kogoś w telefonie pod ksywką, którą ekipa zgadnie od razu?",
  },
  {
    category: "discord",
    body: "Who is most likely to change their status to a lyric that is clearly about last night?",
    bodyPl: "Kto najpewniej zmieni status na cytat z piosenki, który ewidentnie jest o zeszłej nocy?",
  },
  {
    category: "discord",
    body: "Who is most likely to deafen instead of saying they need a minute?",
    bodyPl: "Kto najpewniej wciśnie deafen, zamiast powiedzieć, że potrzebuje chwili?",
  },
  {
    category: "discord",
    body: "Who is most likely to join, leave, and rejoin like that counts as being here the whole time?",
    bodyPl: "Kto najpewniej wejdzie, wyjdzie i wejdzie znowu, jakby to liczyło się za obecność przez cały czas?",
  },
  {
    category: "discord",
    body: "Who is most likely to start a thread for a conversation that already died?",
    bodyPl: "Kto najpewniej założy wątek do rozmowy, która już dawno umarła?",
  },
  {
    category: "discord",
    body: "Who is most likely to share the wrong screen and freeze instead of stopping?",
    bodyPl: "Kto najpewniej udostępni zły ekran i zamarznie, zamiast to wyłączyć?",
  },
  {
    category: "gaming",
    body: "Who is most likely to say “I’m throwing” after a round they were clearly sweating?",
    bodyPl: "Kto najpewniej powie „rzucałem” po rundzie, w której było widać, że zależy?",
  },
  {
    category: "gaming",
    body: "Who is most likely to queue ranked “for fun” and then treat every death like a personal insult?",
    bodyPl: "Kto najpewniej wejdzie w rankeda „dla funu”, a potem każdą śmierć traktuje jak obelgę?",
  },
  {
    category: "gaming",
    body: "Who is most likely to pause the game to argue about ping instead of the play?",
    bodyPl: "Kto najpewniej zatrzyma grę, żeby kłócić się o ping, a nie o zagranie?",
  },
  {
    category: "nightlife",
    body: "Who is most likely to say they’re staying in, then be the reason the night does not end?",
    bodyPl: "Kto najpewniej powie, że zostaje w domu, a potem będzie powodem, dla którego noc się nie kończy?",
  },
  {
    category: "nightlife",
    body: "Who is most likely to lose a jacket and interrogate every coat pile like it’s a crime scene?",
    bodyPl: "Kto najpewniej zgubi kurtkę i przesłucha każdą stertę płaszczy jak miejsce zbrodni?",
  },
  {
    category: "nightlife",
    body: "Who is most likely to suggest “one more spot” when everyone is already putting on shoes?",
    bodyPl: "Kto najpewniej zaproponuje „jeszcze jedno miejsce”, gdy wszyscy już zakładają buty?",
  },
  {
    category: "work",
    body: "Who is most likely to have “busy” on the calendar and still be in this call?",
    bodyPl: "Kto najpewniej ma w kalendarzu „busy”, a i tak siedzi na tym callu?",
  },
  {
    category: "work",
    body: "Who is most likely to send a “quick question” at work that is actually a novel?",
    bodyPl: "Kto najpewniej wyśle w pracy „szybkie pytanie”, które jest powieścią?",
  },
  {
    category: "work",
    body: "Who is most likely to join a meeting camera-off and still get clocked for playing this?",
    bodyPl: "Kto najpewniej wejdzie na meeting bez kamery i tak wpadnie, że gra w to?",
  },
  {
    category: "school",
    body: "Who is most likely to still quote a teacher as if everyone had that class?",
    bodyPl: "Kto najpewniej nadal cytuje nauczyciela, jakby wszyscy chodzili do tej klasy?",
  },
  {
    category: "school",
    body: "Who is most likely to treat a Discord argument like a presentation they have to win?",
    bodyPl: "Kto najpewniej traktuje kłótnię na Discordzie jak prezentację, którą musi wygrać?",
  },
  {
    category: "school",
    body: "Who is most likely to say they finished the assignment, then ask what the assignment was?",
    bodyPl: "Kto najpewniej powie, że zadanie jest zrobione, a potem spyta, jakie to było zadanie?",
  },
  {
    category: "jealousy",
    body: "Who is most likely to go quiet the second a certain name gets mentioned?",
    bodyPl: "Kto najpewniej ucichnie w sekundę, gdy padnie konkretne imię?",
  },
  {
    category: "jealousy",
    body: "Who is most likely to check an ex’s story and call it “research”?",
    bodyPl: "Kto najpewniej sprawdzi relację exa i nazwie to „research”?",
  },
  {
    category: "jealousy",
    body: "Who is most likely to ask “so who was that?” about a like they were not supposed to see?",
    bodyPl: "Kto najpewniej spyta „a to kto?” przy lajku, którego nie miało się zobaczyć?",
  },
  {
    category: "relationships",
    body: "Who is most likely to date someone the group already tried to warn them about?",
    bodyPl: "Kto najpewniej zacznie z kimś, przed kim ekipa już próbowała ostrzegać?",
  },
  {
    category: "relationships",
    body: "Who is most likely to say “it’s nothing serious” about the person they will not shut up about?",
    bodyPl: "Kto najpewniej powie „to nic poważnego” o osobie, o której nie potrafi przestać gadać?",
  },
  {
    category: "relationships",
    body: "Who is most likely to have two people thinking the situation is exclusive?",
    bodyPl: "Kto najpewniej ma dwie osoby myślące, że to na wyłączność?",
  },
  {
    category: "wholesome",
    body: "Who is most likely to remember everyone’s usual order and still forget their own?",
    bodyPl: "Kto najpewniej pamięta zwykłe zamówienie wszystkich, a zapomina własnego?",
  },
  {
    category: "wholesome",
    body: "Who is most likely to defend someone in this call before they even finish the story?",
    bodyPl: "Kto najpewniej stanie w czyjejś obronie, zanim ta osoba skończy historię?",
  },
  {
    category: "wholesome",
    body: "Who is most likely to check in with the quietest person after the roast round?",
    bodyPl: "Kto najpewniej odezwie się do najcichszej osoby po rundzie roastów?",
  },
  {
    category: "wholesome",
    body: "Who is most likely to keep planning the hangout when everyone else is “busy this week”?",
    bodyPl: "Kto najpewniej dalej planuje zbiórkę, gdy reszta ma „busy w tym tygodniu”?",
  },
  {
    category: "dark_humor",
    body: "Who is most likely to narrate their own disaster like it’s a nature documentary?",
    bodyPl: "Kto najpewniej relacjonuje własną porażkę jak film przyrodniczy?",
  },
  {
    category: "dark_humor",
    body: "Who is most likely to say “we’ll laugh about this later” while it is still happening?",
    bodyPl: "Kto najpewniej powie „potem będziemy się z tego śmiać”, gdy to nadal trwa?",
  },
  {
    category: "dark_humor",
    body: "Who is most likely to make a toast that gets way too honest for the hour?",
    bodyPl: "Kto najpewniej wzniesie toast, który jest za szczery na tę godzinę?",
  },
  {
    category: "hypothetical",
    body: "Who is most likely to already know who they’d vote off, including themselves?",
    bodyPl: "Kto najpewniej już wie, kogo wywalić z wyspy, łącznie ze sobą?",
  },
  {
    category: "hypothetical",
    body: "Who is most likely to turn a five-minute power cut into a full conspiracy?",
    bodyPl: "Kto najpewniej z pięciominutowego blackoutu zrobi pełną teorię spiskową?",
  },
  {
    category: "chaotic",
    body: "Who is most likely to turn a normal night into a story the group still tells?",
    bodyPl: "Kto najpewniej zamieni zwykły wieczór w historię, którą ekipa opowiada do dziś?",
  },
  {
    category: "chaotic",
    body: "Who is most likely to say “trust me” right before it becomes everyone’s problem?",
    bodyPl: "Kto najpewniej powie „zaufajcie mi” tuż zanim stanie się to problemem wszystkich?",
  },
  {
    category: "chaotic",
    body: "Who is most likely to start a bit and refuse to drop it after it stops being funny?",
    bodyPl: "Kto najpewniej zacznie bit i nie odpuści, nawet gdy już nie jest śmiesznie?",
  },
  {
    category: "controversial",
    body: "Who is most likely to pick the hill nobody asked them to die on?",
    bodyPl: "Kto najpewniej umrze za sprawę, o którą nikt nie prosił?",
  },
  {
    category: "controversial",
    body: "Who is most likely to say “I’m just asking questions” and mean they already have a theory?",
    bodyPl: "Kto najpewniej powie „ja tylko pytam”, mając już gotową teorię?",
  },
  {
    category: "money",
    body: "Who is most likely to split a tiny bill into six payment requests with notes?",
    bodyPl: "Kto najpewniej rozbije malutki rachunek na sześć przelewów z tytułami?",
  },
  {
    category: "late_night",
    body: "Who is most likely to suggest one more round when the sun is already being rude about it?",
    bodyPl: "Kto najpewniej zaproponuje jeszcze jedną rundę, gdy słońce już jest niegrzeczne?",
  },
  {
    category: "late_night",
    body: "Who is most likely to make a decision at 2am that the group has to live with in the morning?",
    bodyPl: "Kto najpewniej podejmie decyzję o drugiej w nocy, z którą ekipa musi żyć rano?",
  },
  {
    category: "absurd",
    body: "Who is most likely to have a surprisingly strong opinion about a brand of ketchup?",
    bodyPl: "Kto najpewniej ma zaskakująco twarde zdanie o konkretnym ketchupie?",
  },
  {
    category: "absurd",
    body: "Who is most likely to argue with a GPS and lose?",
    bodyPl: "Kto najpewniej pokłóci się z GPS-em i przegra?",
  },
];
